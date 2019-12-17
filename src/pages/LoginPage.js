import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { request } from '../utils/request'
import { storeToken } from '../Auth'

const LoginPage = () => {
	const [loggedin, setLoggedin] = useState(false)
	const [email, setEmail] = useState(null)
	const [password, setPassword] = useState(null)

	const onLoginSuccess = (sessionToken) => {
		storeToken(sessionToken)
	}

	const onLoginError = (error) => {
		console.log(error)
	}

	const handleLogin = () => {
		LoginAPI.login({
			email: email,
			password: password
		}, onLoginSuccess, onLoginError)
	}

	const renderForm = () => {
		return (
			<></>
		)
	}

	

	return(
		loggedin ? <Redirect to={'/'} ></Redirect> : renderForm()
	)
}

export default LoginPage