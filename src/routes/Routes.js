import React from 'react' 
import { Route, Switch } from "react-router-dom"
import Home from '../components/Home'
import CompanyList from '../components/CompanyList'
import CompanyDetail from '../components/CompanyDetail'
import JobList from '../components/JobList'
import LoginForm from '../components/LoginForm'
import SignupForm from '../components/SignupForm'
import Profile from '../components/Profile'


const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>

            <Route exact path="/companies">
                <CompanyList />
            </Route>

            <Route path="/companies/:handle">
                <CompanyDetail />
            </Route>

            <Route exact path="/jobs">
                <JobList /> 
            </Route>

            <Route exact path="/signup">
                <SignupForm />
            </Route>

            <Route exact path="/login">
                <LoginForm />
            </Route>

            <Route exact path="/profile">
                <Profile />
            </Route>
            
        </Switch>
    )
}

export default Routes 