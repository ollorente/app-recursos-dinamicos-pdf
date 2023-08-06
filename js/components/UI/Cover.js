const uiCover = document.createElement("template")
uiCover.innerHTML = `
<style>
  @import url("/css/styles.css");

  div {
    background: rgb(25,178,181);
    background: linear-gradient(208deg, rgba(25,178,181,1) 0%, rgba(29,53,96,1) 67%, rgba(29,53,96,1) 100%);
    background: url("/img/cover.png") no-repeat;
    background-size: cover;
    min-height: 953px;
    width: 100%;
  }
</style>

<div>
  <slot></slot>
</div>
`

customElements.define("ui-cover", class extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(uiCover.content.cloneNode(true))
  }
})