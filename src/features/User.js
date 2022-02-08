import { createSlice } from "@reduxjs/toolkit";
import data from '../data/db.json'
import {v4 as uuidv4} from 'uuid';

export const stateSlice = createSlice({
    name: "app",
    initialState: {
        value: data
    },
    reducers: {
        LoginUser: (state, action) => {
            const UpdateSession = (val) => {
                const update = val == "error" ? {error: "Username or password entered incorrectly!", sessionId: ""} : {error: "", sessionId: uuidv4()}
                fetch(`http://localhost:5000/session/${1}`, {
                    method: 'PUT',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(update)
                })
            }

            state.value.users.map((user) => {
                if (user.email == action.payload.email && user.password == action.payload.password) {
                    return UpdateSession("success");
                }
                return UpdateSession("error");
            })
        },
        UpdateUser: (state, action) => {
            const db = action;
            fetch(`http://localhost:5000/users/${1}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({name:  action.payload.name, email:  action.payload.email, password:  action.payload.password })
            })
        },
        LoguotUser: () => {
            fetch(`http://localhost:5000/session/${1}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ sessionId: "", error: "" })
            })
        },
        UpdatePassword: (state, action) => {
            state.value.users.map((user) => {
                fetch(`http://localhost:5000/users/${1}`, {
                    method: 'PUT',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({name: user.name, email: user.email, password: action.payload.password })
                })
            })
        },
        ChangeTheme: (state, action) => {
            state.value.theme.map((theme) => {
                fetch(`http://localhost:5000/theme/${1}`, {
                    method: 'PUT',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({theme_darck: !theme.theme_darck })
                })
            })
        }
    }
})

export const { LoginUser, UpdateUser, LoguotUser, UpdatePassword, ChangeTheme  } = stateSlice.actions;
export default stateSlice.reducer