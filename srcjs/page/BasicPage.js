import { Page } from './Page';

export class BasicPage extends Page {
    page_html = `<div id="canvas-page" class="designer-page-template container-fluid" data-shinyfunction="basicPage"></div>`;

    constructor() {
        super();
        $(".page-canvas").html(this.getPageHTML(this.page_html, $("canvas-title").html()));
        this.enableSortablePage("canvas-page");
    }
};
