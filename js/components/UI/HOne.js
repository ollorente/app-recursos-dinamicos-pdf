const uiHOne = document.createElement("template")
uiHOne.innerHTML = `
<style>
  @import url("/css/styles.css");

  h1 {
    color: #1c355e;
    margin: 0;
    paddingf: 0;
  }
</style>

<h1>
  <slot></slot>
</h1>
`

customElements.define("ui-hone", class extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(uiHOne.content.cloneNode(true))
  }
})