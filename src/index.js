import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './index.css'
import App from './App'
import Connect from './componant/Connect'
import * as serviceWorker from './serviceWorker'
import NotFound from './componant/NotFound'

const Root = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Connect}/>
            <Route path='/pseudo/:pseudo' component={App} />
            <Route component={ NotFound } />
        </Switch>
    </BrowserRouter>
)

ReactDOM.render(<Root/>, document.getElementById('root'))

serviceWorker.unregister()