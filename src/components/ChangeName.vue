<template>
    <div class="back">
        <div class="popup">
            <button class="close" @click="$store.state.isPopup = false"><span uk-icon="icon: close"></span></button>
            <p>Изменение имени</p>
            <form @submit.prevent="changeName(name)">
                <div class="uk-margin">
                    <label class="uk-form-label" for="form-stacked-text">Введите имя</label>
                    <div class="uk-form-controls">
                        <input class="uk-input" id="form-stacked-text" type="text" placeholder="имя" v-model="name">
                    </div>
                </div>
                <div class="uk-margin">
                    <button class="uk-button" type="submit">изменить</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            name: ''
        }
    },
    methods: {
        async changeName(payload) {
            const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:update?key=${process.env.VUE_APP_FB_KEY}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({idToken: this.$store.state.auth.token, displayName:payload, returnSecureToken: true})
            })
            this.$store.commit('auth/setName', payload)
            this.$store.state.isPopup = false
            console.log(response)
        }
    }

}
</script>

<style scoped>
    p {
        margin: 0;
        margin-bottom: 30px;
    }
    .close {
        top: 7px;
        right: 0px;
        background: none;
        border: none;
        position: absolute;
    }
    .close:hover {
        transform: rotate(90deg);
        transition: 300ms;
    }
    .back {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        background: #00000070;
    }
    .popup {
        position: relative;
        display: flex;
        flex-direction: column;
        padding: 50px;
        border-radius: 5px;
        background: #fff;
        display: flex;
    }
</style>