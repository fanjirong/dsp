import React from 'react'
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route
} from 'react-router-dom'

import App from '../App.jsx'
import Index from '../page/index.jsx'
import Plan from '../page/plan.jsx'
import Until from '../page/until.jsx'
import Idea from '../page/idea.jsx'
import Addadv from '../addadv/addadv.jsx'

let routerFn = ()=>{  
    return <Router>
        <App>
            <Route exact path='/' component={Plan} />
            <Route path='/until' component={Until} />
            <Route path='/idea' component={Idea} />
            <Route path='/addadv' component={Addadv} />
        </App>
    </Router>  
}
export default routerFn