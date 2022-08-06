import http from "../../services/admin_api"

// PRS
export const prs = () => {
    return http.get('/pulls/');   
}

// EVENTS
export const _all_events = () => {
    return http.get('/events/');   
}

export const _add_event = e => {
    return http.post(`/events/`, e);
}

export const _update_event = (s, e) => {
    return http.put(`/events/${s}`, e);
}

export const _delete_event = (e) => {
    return http.delete(`/events/${e}`);
}

// PROGRAMS
export const _all_programs = () => {
    return http.get('/programs/')
}

export const _add_programs = p => {
    return http.post(`/programs/`, p)
}