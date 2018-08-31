import { Switch, Route } from 'react-router-dom'
import React from 'react'
import Home from './components/Home.jsx'

const App = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home} />
        </Switch>
    </main>
)

export default App
