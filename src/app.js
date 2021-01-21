import React from 'react' 
import ReactDOM from 'react-dom'
import App from './components/choosy.js'

import 'normalize.css/normalize.css'
import './styles/styles.scss'

const appObj = {
    title:"choosy App",
    subtitle:"Let the machine control your world"
}

ReactDOM.render(<App appObj={appObj}/>, document.getElementById("app"));