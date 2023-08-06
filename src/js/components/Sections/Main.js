const sectionMain = document.createElement("template")
sectionMain.innerHTML = `
<style>
  @import url("./css/styles.css");

  section {
    border-top: solid 0pX #ddd;
    border-bottom: solid 1pX #ddd;
    min-height: 953px;
    width: 100%;
  }
</style>

<section>
  <ui-header>[TITLE]</ui-header>
  <slot></slot>
</section>
`

customElements.define("section-main", class extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(sectionMain.content.cloneNode(true))
  }

  async attributeChangedCallback (name, oldValue, newValue) {
    const header = this.shadowRoot.querySelector('ui-header')
    header.innerHTML = this.getAttribute('title')
  }

  static get observedAttributes () {
    return ['title']
  }
})