import { options_for_select } from "../../server/templates/helpers/options_for_select";
import { live_patch } from "../../server/templates/helpers/live_patch";
import html, { HtmlSafeString, join } from "../../server/templates";
import { BaseLiveViewComponent, LiveViewExternalEventListener, LiveViewSocket, StringPropertyValues } from "../../server/types";
import { almostExpired, Donation, listItems } from "./data";

interface Options {
  page: number;
  perPage: number;
}

export interface PaginateContext {
  options: Options
  donations: Donation[]
}

export class PaginateLiveViewComponent extends BaseLiveViewComponent<PaginateContext, Options> implements LiveViewExternalEventListener<PaginateContext, "select-per-page", Pick<Options, "perPage">> {

  mount(params: any, session: any, socket: LiveViewSocket<PaginateContext>) {
    const options = { page: 1, perPage: 10 }
    return {
      options: options,
      donations: listItems(options.page, options.perPage)
    };
  };

  handleParams(params: StringPropertyValues<Options>, url: string, socket: LiveViewSocket<PaginateContext>): PaginateContext {
    const page = Number(params.page || 1);
    const perPage = Number(params.perPage || 10);
    return {
      options: { page, perPage },
      donations: listItems(page, perPage)
    };
  }

  render(context: PaginateContext) {
    const { options: { perPage, page }, donations } = context;
    return html`
    <h1>Food Bank Donations</h1>
    <div id="donations">
      <form phx-change="select-per-page">
        Show
        <select name="perPage">
          ${options_for_select([5, 10, 15, 20].map(n => String(n)), String(perPage))}
        </select>
        <label for="perPage">per page</label>
      </form>
      <div class="wrapper">
        <table>
          <thead>
            <tr>
              <th class="item">
                Item
              </th>
              <th>
                Quantity
              </th>
              <th>
                Days Until Expires
              </th>
            </tr>
          </thead>
          <tbody>
            ${this.renderDonations(donations)}
          </tbody>
        </table>
        <div class="footer">
          <div class="pagination">
            ${page > 1 ? this.paginationLink("Previous", page - 1, perPage, "previous") : ""}

            ${this.pageLinks(page, perPage)}

            ${this.paginationLink("Next", page + 1, perPage, "next")}
          </div>
        </div>
      </div>
    </div>
    `
  };

  handleEvent(event: "select-per-page", params: StringPropertyValues<Pick<Options, "perPage">>, socket: LiveViewSocket<PaginateContext>): PaginateContext {
    const page = socket.context.options.page;
    const perPage = Number(params.perPage || 10);

    this.pushPatch(socket, { to: { path: "/paginate", params: { page: String(page), perPage: String(perPage) } } });

    return {
      options: { page, perPage },
      donations: listItems(page, perPage)
    };
  }

  pageLinks(page: number, perPage: number) {
    let links: HtmlSafeString[] = [];
    for (var p = page - 2; p <= page + 2; p++) {
      if (p > 0) {
        links.push(this.paginationLink(String(p), p, perPage, p === page ? "active" : ""))
      }
    }
    return join(links, "")
  }

  paginationLink(text: string, pageNum: number, perPageNum: number, className: string) {
    const page = String(pageNum);
    const perPage = String(perPageNum);
    return live_patch(text, {
      to: {
        path: "/paginate",
        params: { page, perPage }
      },
      class: className
    })
  }

  renderDonations(donations: Donation[]) {
    return donations.map(donation => html`
      <tr>
        <td class="item">
          <span class="id">${donation.id}</span>
          ${donation.emoji} ${donation.item}
        </td>
        <td>
        ${donation.quantity} lbs
        </td>
        <td>
          <span class="${this.expiresClass(donation)}">
          ${donation.days_until_expires}
          </span>
        </td>
      </tr>
    `)
  }

  expiresClass(donation: Donation) {
    if (almostExpired(donation)) {
      return "eat-now"
    } else {
      return "fresh"
    }
  }

}
