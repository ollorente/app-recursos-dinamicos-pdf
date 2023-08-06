const uiHeader = document.createElement("template")
uiHeader.innerHTML = `
<style>
  @import url("./css/styles.css");

  header {
    background: url("./img/header.png") no-repeat;
    background-size: cover;
    height: 5rem;
    padding: 2rem 0;
    vertical-align: bottom;
    width: 100%;
  }

  h2 {
    color: #fff;
    font-size: 3rem;
    margin-right: 2rem;
    text-align: right;
    text-transform: uppercase;
  }
</style>

<header>
  <h2><slot></slot></h2>
</header>
`

customElements.define("ui-header", class extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(uiHeader.content.cloneNode(true))
  }
})