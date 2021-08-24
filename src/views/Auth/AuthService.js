import http from "../../services/api"

export const signup = (user) => {
   return http.post(`/auth/signup/`, user)      
}

export const signin = (user) => {
    return http.post('/auth/signin/', user)
}

export const forgotPassword = (user) => {
    return http.delete('/auth/forgot-password/', user)
}
export const resetPassword = (user) => {
    return http.post('/auth/reset-password-confirmation/', user)
}


