import React from 'react'
import {BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import Signin from './screens/Signin'
import Signup from './screens/Signup'
import ManageLinks from './screens/Manage/Links'
import Create from './screens/Manage/Create'
import Edit from './screens/Manage/Edit'
import Home from './screens/Home'

const App = () =>{

    return(
        <BrowserRouter>
            <div>
                <nav>
                    <ul className="list-group list-group-horizontal">
                        <li className="list-group-item">
                            <Link to="/sign-in">
                                Sign in
                            </Link>
                        </li>
                        <li className="list-group-item">
                            <Link to="/sign-up">
                                Sign Up
                            </Link>
                        </li>
                        <li className="list-group-item">
                            <Link to="/manage/links/create">
                                Create Link
                            </Link>
                        </li>

                        <li className="list-group-item">
                            <Link to="/manage/links/edit">
                                Edit Link
                            </Link>
                        </li>

                        <li className="list-group-item">
                            <Link to="/manage/links">
                                Links
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <Switch>
                <Route path="/sign-in"> <Signin/> </Route>
                <Route path="/sign-up"> <Signup/></Route>
                <Route path="/manage/links/create"><Create/></Route>
                <Route path="/manage/links/edit"><Edit/></Route>
                <Route path="/manage/links"><ManageLinks/></Route>

                <Route path="/"><Home/></Route>
                
               
            </Switch>
        
        </BrowserRouter>
    )
}

export default App