const uiHThree = document.createElement("template")
uiHThree.innerHTML = `
<style>
  @import url("/css/styles.css");

  h3 {
    color: #fff;
    margin: 0;
    paddingf: 0;
  }
</style>

<h3>
  <slot></slot>
</h3>
`

customElements.define("ui-hthree", class extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(uiHThree.content.cloneNode(true))
  }
})