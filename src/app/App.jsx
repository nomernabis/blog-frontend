import { Switch, Route } from 'react-router-dom'
import React from 'react'
import Home from './components/Home.jsx'
import SignupPage from './components/SignupPage'

const App = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/signup' component={SignupPage} />
        </Switch>
    </main>
)

export default App
