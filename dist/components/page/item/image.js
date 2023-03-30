import { BaseComponent } from "../../component.js";
export class ImageComponent extends BaseComponent {
    constructor(title, url) {
        super(`<section class="image">
    <div class="image__holder">
       <img src="" class="image__thumbnail" />
    </div>
    <h3 class="page-item__title image__title"></h3>
   </section>`);
        const imageElement = this.element.querySelector(".image__thumbnail");
        imageElement.alt = title;
        imageElement.src = url;
        const titleElement = this.element.querySelector(".image__title");
        titleElement.textContent = title;
    }
}
