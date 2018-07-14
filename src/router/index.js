import React from 'react'
import {
    HashRouter as Router,
    Link,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'

import App from '../App.jsx'
import Index from '../page/index.jsx'
import Plan from '../page/plan.jsx'
import Until from '../page/until.jsx'
import Idea from '../page/idea.jsx'
import Addadv from '../addadv/addadv.jsx'
import Toolone from '../tool/toolone.jsx'
import Datacenter from '../datacenter/datacenter.jsx'
import Login from '../login/login.jsx'

let ChildRouter = ()=>{
   return <Router>
        <Index>
            <Switch>
                <Route path='/index/plan' component={Plan} />
                <Route path='/index/until' component={Until} />
                <Route path='/index/idea' component={Idea} />
                <Route path='/index/addadv' component={Addadv} />
                <Route path='/index/toolone' component={Toolone} />
                <Route path='/index/datacenter' component={Datacenter} />
            </Switch>
        </Index>
    </Router>
}
let routerFn = ()=>{  
    return <Router>
        <App>
            <Switch>
                <Route exact path='/' component={()=>(<Redirect to='/index/plan'/>)}/>
                <Route path='/index' component={ChildRouter} />
                <Route path='/login' component={Login} />
            </Switch>
        </App>
    </Router>  
}
export default routerFn