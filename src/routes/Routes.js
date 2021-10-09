import React from 'react' 
import { Route, Switch } from "react-router-dom"
import Home from '../components/Home'
// import CompaniesList from '../components/CompaniesList'
// import JobsList from '../components/Jobs'
import LoginForm from '../components/LoginForm'
import SignupForm from '../components/SignupForm'
// import Profile from '../components/Profile'


const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>

            <Route exact path="/signup">
                <SignupForm />
            </Route>

            <Route exact path="/login">
                <LoginForm />
            </Route>

            {/* 
            
            <Route exact path="/companies">
                <CompaniesList />
            </Route>

            <Route path="/companies/:id">
            </Route>

            <Route exact path="/jobs">
                <JobsList /> 
            </Route>



            <Route exact path="/signup">
                <Signup />
            </Route>

            <Route exact path="profile">
                <Profile />
            </Route> 
            
            */}
            
        </Switch>
    )
}

export default Routes 