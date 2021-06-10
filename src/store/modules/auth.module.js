import axios from 'axios'
import { error } from '../../utils/error'

const TOKEN_KEY = 'jvt-token'
const MAIL_KEY = 'mail'
const NAME_KEY = 'name'

export default {
    namespaced: true,
    state() {
        return {
            token: localStorage.getItem(TOKEN_KEY),
            displayName: localStorage.getItem(NAME_KEY),
            mail: localStorage.getItem(MAIL_KEY)
        }
    },
    mutations: {
        setMail(state, mail) {
            state.mail = mail
            localStorage.setItem(MAIL_KEY, mail)
        },
        setToken(state, token) {
            state.token = token
            localStorage.setItem(TOKEN_KEY, token)
        },
        setName(state, name) {
            state.displayName = name
            localStorage.setItem(NAME_KEY, name)
        },
        logout(state) {
            state.token = null
            localStorage.removeItem(MAIL_KEY)
            localStorage.removeItem(NAME_KEY)
            localStorage.removeItem(TOKEN_KEY)

        }
    },
    actions: {
        async login({ commit }, payload) {
            try {
                const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.VUE_APP_FB_KEY}`
                const { data } = await axios.post(url, {...payload, returnSecureToken: true })
                console.log(data)
                commit('setToken', data.idToken)
                commit('setName', data.displayName)
                commit('setMail', data.email)
            } catch (e) {
                console.dir(e.response.data.error)
                UIkit.notification({ message: error(e.response.data.error.message), status: 'danger' })
            }
        }
    },
    getters: {
        token(state) {
            return state.token
        },
        isAuthenticated(_, getters) {
            return !!getters.token
        },
    }
}