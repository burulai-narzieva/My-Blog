export const REGISTER_USER = 'REGISTER_USER'
export const LOG_IN = 'LOG_IN'
export const ADD_POST = 'ADD_POST'
export const LOG_OUT = 'LOG_OUT'

export const register_user = (user) => ({
    type: REGISTER_USER,
    user
})

export const log_in = (obj) => ({
    type: LOG_IN,
    obj
})

export const add_post = (obj) => ({
    type: ADD_POST,
    obj
})

export const log_out = (obj) => ({
	type: LOG_OUT,
	obj,
})