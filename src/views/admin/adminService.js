import http from "../../services/admin_api"

// PRS
export const prs = () => {
    return http.get('/pulls/');   
}

export const update_prs = (s, e) => {
    return http.put(`/pulls/${s}`, e);   
}

export const delete_prs = (e) => {
    return http.delete(`/pulls/${e}`)
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

export const _update_programs = (p, e) => {
    return http.put(`/programs/${p}`, e)
}

export const delete_programs = (e) => {
    return http.delete(`/programs/${e}`)
}

// USERS
export const _all_users = () => {
    return http.get(`/user/`)
}
// update user role