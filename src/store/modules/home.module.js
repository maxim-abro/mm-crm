import axios from 'axios'

export default {
    namespaced: true,
    state() {
        return {
            course: null
        }
    },
    mutations: {
        setCourse(state, course) {
            state.course = Math.floor(course * 100) / 100
        }
    },
    actions: {
        async getCourse({ commit }) {
            const url = 'https://www.cbr-xml-daily.ru/daily_json.js'
            let data
            await fetch(url)
                .then(response => {
                    if (!response.ok) throw Error(response.data)
                    return response.json()
                })
                .then(data => commit('setCourse', data.Valute.USD.Value))
                .catch(error => console.dir(error))
        }
    }
}