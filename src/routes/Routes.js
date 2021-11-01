import React from 'react' 
import { Route, Switch } from "react-router-dom"
import Home from '../components/Home'
import CompanyList from '../components/CompanyList'
import CompanyDetail from '../components/CompanyDetail'
import JobList from '../components/JobList'
import LoginForm from '../components/LoginForm'
import SignupForm from '../components/SignupForm'
import Profile from '../components/Profile'
import Logout from '../components/Logout'


const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/companies" component={CompanyList}></Route>
            <Route exact path="/companies/:handle" component={CompanyDetail}></Route>
            <Route exact path="/jobs" component={JobList}></Route>
            <Route exact path="/signup" component={SignupForm}></Route>
            <Route exact path="/login" component={LoginForm}></Route>
            <Route exact path="/profile" component={Profile}></Route>
            <Route exact path="/logout" component={Logout}></Route>
        </Switch>
    )
}

export default Routes 