import './x.scss'
import './j.less'
import './z.styl'

// import png from './assets/4.png'
// console.log(png)

// const div = document.getElementById('app1')
// div.innerHTML = `
//     <img src="${png}">
// `

const button = document.createElement('button')
button.innerText = "懒加载"
div.appendChild(button)
button.onclick = ()=>{
    const promise = import('./lazy')
    promise.then((module)=>{
        module.default()
    }, ()=>{})
}