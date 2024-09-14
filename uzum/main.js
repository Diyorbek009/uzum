import './style.css'
import javascriptLogo from './javascript.svg'
import witeLogo from '/wite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    
    hello word
    
  </div>
`

setupCounter(document.querySelector('#counter'))
