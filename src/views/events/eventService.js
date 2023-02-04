import http from "../../services/api"

export const events_ = () => {
    return http.get(`/events/`)      
 }

 export const events_search = e => {
    return http.get(`/events/search?location=${e}`)
 }