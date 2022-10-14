import http from "../../services/api"

export const get_prs = () => {
    return http.get(`/pulls/`)      
 } 

 export const create_pr = e => {
    return http.post(`/pulls/`, e)      
 }