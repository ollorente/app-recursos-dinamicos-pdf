import { getComponent, getComponents } from "./fetchAPI.js"
import "./components/Sections/Main.js"
import "./components/UI/Cover.js"
import "./components/UI/Header.js"
import "./components/UI/HOne.js"
import "./components/UI/HThree.js"
import "./components/UI/HTwo.js"
import "./components/Views/Main.js"

const item = await getComponent("1691259818379")
console.log("🚀 ~ file: main.js:11 ~ item:", item)

const setionIntroduction = document.getElementById("section-introduction")
const templateSetionIntroduction = document.getElementById("template-section-introduction").content.cloneNode(true)
console.log("🚀 ~ file: main.js:12 ~ templateSetionIntroduction:", templateSetionIntroduction)

const content = templateSetionIntroduction.querySelector("#content")
console.log("🚀 ~ file: main.js:19 ~ content:", content)
content.innerHTML = item
console.log("🚀 ~ file: main.js:21 ~ content:", content)

setionIntroduction.appendChild(templateSetionIntroduction)