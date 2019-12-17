const isLoggedIn = () => {
  const token = localStorage.getItem('SESSION_TOKEN')
  if(token) {
    return true
  } else {
    return false
  }
}

const getToken = () => {
  return localStorage.getItem('SESSION_TOKEN')
}

const storeToken = (token) => {
  localStorage.setItem('SESSION_TOKEN', token)
}

const requestHeaders = () => {
  return {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'x-ekincare-key': getToken()
  }
}

const logout = () => {
	localStorage.clear();
  window.location.reload()
}	

export { isLoggedIn, getToken, storeToken, requestHeaders, logout }