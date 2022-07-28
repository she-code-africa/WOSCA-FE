import http from "../../services/api"

export const events_ = () => {
    return http.get(`/events/`)      
 }