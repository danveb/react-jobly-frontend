import React, { useState, useEffect } from 'react' 
import { BrowserRouter } from 'react-router-dom' 
import NavBar from './components/NavBar' 
import Routes from './routes/Routes'
import './App.css'
import JoblyApi from './API/api'
import UserContext from './UserContext' 

const App = () => {
  const [user, setUser] = useState({
    username: '',
    firstName: '', 
    lastName: '',
    isAdmin: false, 
    jobs: []
  })

  const [authToken, setAuthToken] = useState()

  useEffect(() => setAuthToken({
    username: '',
    authToken: ''
  }), [])

  useEffect(() => {
    async function getUserApi() {
      const response = await JoblyApi.getUser(authToken.username) 
      setUser(response) 
    }

    if(authToken && authToken.authToken) {
      JoblyApi.token = authToken.authToken 
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
  }, [authToken])

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

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={user}>
          <NavBar />
          <Routes props={{ handleLogin, handleLogout, handleSignup, updateProfile }}/>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
