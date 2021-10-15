import http from "../../services/api"

export const createEvent = (event) => {
   return http.post(`/events/`, event)      
}

export const getAllEvents = () => {
    return http.get('/events')
}

export const getEventById = () => {
    return http.get('/events/:id')
}
export const deleteEvent = (event) => {
    return http.delete('/events/:id', event)
}
export const updateEvent = (event) => {
    return http.put('/events/:id', event)
}

