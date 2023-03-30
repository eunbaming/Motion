# Motion


typescript, 그리고 객체 지향 프로그래밍을 활용한 웹사이트 구축

<a href="#"><img src="https://user-images.githubusercontent.com/110072947/228769668-277e821b-c005-4169-84ac-070376fb2c7b.png" width="400"></a>
<a href="#"><img src="https://user-images.githubusercontent.com/110072947/228769712-ff2c5f85-3330-4c73-bb02-c28691aa1bbe.png" width="400"></a>

+ Demo : https://motion-mu.vercel.app/

<br/>
<br/>

### 개발 목표

Typescript를 활용하여 객체 지향적인 프로그래밍(OOP)으로 재사용성과 확장성을 높인 웹사이트를 개발

<br/>
<br/>

### 사용 기술

<a href="#"><img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"/></a>
<a href="#"><img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"/></a>
<a href="#"><img src="https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=Typescript&logoColor=white"/></a>

<br/>
<br/>

### Advanced Feature

+ 네 가지 카테고리(버튼)가 있고, 그 버튼을 누르면 각각 임베드할 수 있도록 창이 나와 motion에 넣고 싶은 내용들을 유저가 직접 넣을 수 있도록 개발

<a href="#"><img src="https://user-images.githubusercontent.com/110072947/228771990-48eec1b0-a186-4cbd-bd4b-e5227e18d4f6.png" width="400"></a>
<a href="#"><img src="https://user-images.githubusercontent.com/110072947/228772006-6f7939f7-3e59-4cd7-aff4-74553fc78194.png" width="400"></a>

<br/>

+ 각각 삭제 버튼을 누르면 원하는 내용을 지울 수 있도록 개발

```typescript
...
export class PageItemComponent
  extends BaseComponent<HTMLElement>
  implements SectionContainer
{
  private closeListener?: OnCloseListener;
  constructor() {
    super(`<li class="page-item">
            <section class="page-item__body"></section>
            <div class="page-item__controls">
              <button class="close">&times;</button>
            </div>
          </li>`);
    const closeBtn = this.element.querySelector(".close")! as HTMLButtonElement;
    closeBtn.onclick = () => {
      this.closeListener && this.closeListener();
    };
  }
  addChild(child: Component) {
    const container = this.element.querySelector(
      ".page-item__body"
    )! as HTMLElement;
    child.attachTo(container);
  }
  setOnCloseListener(listener: OnCloseListener) {
    this.closeListener = listener;
  }
}
...
```

<br/>
<br/>

# 개선 사항

+ 비디오 url이 아직 유튜브 영상에서만 한정되어 있는 부분 개선 필요

+ 반응형 웹사이트로 UI 개선 필요



