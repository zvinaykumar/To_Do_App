import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/login'
import Profile from '../pages/Profile'
import Signup from '../pages/signup'


const Index = () => {
    return (
        <>
            <switch>
                <Routes>
                    <Route exact path='/signup' element={< Signup />}></Route>
                    <Route exact path='/login' element={< Login />}></Route>
                    <Route exact path='/' element={< Home />}></Route>
                    <Route exact path='/profile' element={<Profile />}></Route>
                </Routes>
            </switch>
        </>

    )
}

export default Index