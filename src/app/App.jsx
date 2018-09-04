import { Switch, Route } from 'react-router-dom'
import React from 'react'
import Home from './components/Home.jsx'
import SignUp from './components/SignUp.jsx'

const App = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/signup' component={SignUp} />
        </Switch>
    </main>
)

export default App
