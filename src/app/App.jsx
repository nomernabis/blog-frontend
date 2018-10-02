import { Switch, Route } from 'react-router-dom'
import React from 'react'
import Home from './components/Home.jsx'
import SignupPage from './components/SignupPage'
import SigninPage from './components/SigninPage'
import AddPost from './components/AddPost'

const App = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/addPost' component={AddPost} />
            <Route path='/signup' component={SignupPage} />
            <Route path='/signin' component={SigninPage} />
        </Switch>
    </main>
)

export default App
