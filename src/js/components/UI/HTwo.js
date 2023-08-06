const uiHTwo = document.createElement("template")
uiHTwo.innerHTML = `
<style>
  @import url("/css/styles.css");

  h2 {
    color: #fff;
    margin: 0;
    paddingf: 0;
  }
</style>

<h2>
  <slot></slot>
</h2>
`

customElements.define("ui-htwo", class extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(uiHTwo.content.cloneNode(true))
  }
})