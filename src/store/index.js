import { createStore } from 'vuex'
import auth from './modules/auth.module'
import home from './modules/home.module'
import record from './modules/record.module'
import history from './modules/history.module'

export default createStore({
    state() {
        return {
            isAuth: false,
            isPopup: false
        }
    },
    modules: {
        auth,
        home,
        record,
        history
    }
})