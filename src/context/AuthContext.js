import React, { useState, createContext, useMemo, useEffect, useContext } from 'react'

const UserContext = createContext();

const _token = localStorage.getItem('token') || null
const _user = JSON.parse(localStorage.getItem('user')) || null



const UserProvider = ({ children }) => {

  const [token, setToken] = useState(_token)
  const [user, setUser] = useState(_user)

 useEffect(() => {
   if (token) {
     localStorage.setItem('token', token)
   }
   if (user) {
     localStorage.setItem('user', JSON.stringify(user))
   }
 }, [token, user])

  const value = useMemo(
    () => ({ token, setToken, user, setUser }), [user, token])


  
  return (
    <UserContext.Provider
      value={value}
    >
      {children}
    </UserContext.Provider>
  );
}

const useUserContext = () => {
  return useContext(UserContext)
}
export { useUserContext, UserProvider };