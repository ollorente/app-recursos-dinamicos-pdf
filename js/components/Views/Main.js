const viewMain = document.createElement("template")
viewMain.innerHTML = `
<style>
  @import url("./css/styles.css");

  main {
    border: solid 0pX #fff;
    background: #fff;
    max-width: 675px;
    min-height: 100vh;
    margin: 0 auto;
    width: 100%;
  }
</style>

<main>
  <slot></slot>
</main>
`

customElements.define("view-main", class extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(viewMain.content.cloneNode(true))
  }
})