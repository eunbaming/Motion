import { BaseComponent } from "../../component.js";

export class TodoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, todo: string) {
    super(`<section class="todo">
        <h3 class="todo__title page-item__title"></h3>
        <input type="checkbox" class="todo-checkbox">
      </section>`);

    const titleElement = this.element.querySelector(
      ".todo__title"
    )! as HTMLHeadingElement;
    titleElement.textContent = title;

    const todoElement = this.element.querySelector(
      ".todo-checkbox"
    )! as HTMLInputElement;
    todoElement.insertAdjacentText("afterend", todo);
  }
}
