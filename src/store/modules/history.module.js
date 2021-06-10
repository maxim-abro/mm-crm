export default {
    namespaced: true,
    state() {
        return {
            historyData: {},
            comes: []
        }
    },
    mutations: {
        setHistory(state, history) {
            state.historyData = history
            console.log(history);
        },
        calcHistory(state) {
            let incomes = 0
            let outcomes = 0
            for (let key in state.historyData) {
                if (state.historyData[key].category == 'income') {
                    incomes += (state.historyData[key].sum * 1)
                } else if (state.historyData[key].category == 'outcome') {
                    outcomes += (state.historyData[key].sum * 1)
                }
            }
            state.comes.push(incomes, outcomes)
            console.log(state.comes)
        }
    },
    actions: {
        async getHistory({ commit }) {
            const url = 'https://mm-crm-app-default-rtdb.europe-west1.firebasedatabase.app/records.json'
            await fetch(url)
                .then(response => {
                    if (!response.ok) throw Error(response)
                    return response.json()
                })
                .then(data => {
                    commit('setHistory', data)
                    commit('calcHistory')
                })
                .catch(error => console.dir(error.message))
        }
    }
}