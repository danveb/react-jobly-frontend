import React, { useEffect, useContext } from 'react' 
import { Redirect } from 'react-router-dom' 
import FunctionContext from '../FunctionContext' 

const Logout = () => {
    const { handleLogout } = useContext(FunctionContext) 
    useEffect(() => {
        return function cleanup() {
            handleLogout()
        }
    }, [handleLogout])

    return <Redirect to="/"></Redirect>
}

export default Logout