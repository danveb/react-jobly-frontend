import React, { useState, useEffect } from 'react' 
import { BrowserRouter } from 'react-router-dom' 
import NavBar from './components/NavBar' 
import Routes from './routes/Routes'
import './App.css'
import JoblyApi from './API/api'
import UserContext from './UserContext' 
import FunctionContext from './FunctionContext'

const App = () => {
  const [user, setUser] = useState({
    username: '',
    firstName: '', 
    lastName: '',
    isAdmin: false, 
    jobs: []
  })

  const [authToken, setAuthToken] = useState()

  const [jobApp, setJobApp] = useState({})

  useEffect(() => {
    setAuthToken(
      localStorage.getItem('authToken') 
      ? JSON.parse(localStorage.getItem('authToken')) 
      : { username: '', authToken: ''}
    )
  }, [])

  useEffect(() => {
    async function getUserApi() {
      const response = await JoblyApi.getUser(authToken.username) 
      setUser(response) 
    }

    if(authToken && authToken.authToken) {
      JoblyApi.token = authToken.authToken 
      localStorage.setItem('authToken', JSON.stringify(authToken))
      getUserApi() 
    } else {
      JoblyApi.token = ''
      setUser({
        username: '',
        firstName: '', 
        lastName: '',
        isAdmin: false, 
        jobs: []
      })
    }
  }, [authToken, jobApp])

  const handleLogin = async (formData) => {
    const response = await JoblyApi.login(formData)
    setAuthToken({
      username: formData.username, 
      authToken: response.token 
    })
  }

  const handleLogout = () => {
    setAuthToken({
      username: '',
      authToken: ''
    })
    localStorage.removeItem('authToken')
  }

  const handleSignup = async (formData) => {
    const response = await JoblyApi.signup(formData) 
    setAuthToken({
      username: formData.username, 
      authToken: response.token 
    })
  }

  const updateProfile = async (formData) => {
    const response = await JoblyApi.updateProfile(formData) 
    setUser(response)
  }

  const handleJobApp = async (userJob) => {
    const response = await JoblyApi.jobApply(userJob) 
    setJobApp(response) 
  }

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={user}>
          <FunctionContext.Provider value={{ handleLogin, handleLogout, handleSignup, updateProfile, handleJobApp }}>
            <NavBar />
            <Routes /> 
          </FunctionContext.Provider>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
