<template>
    <nav class="uk-navbar-container" uk-navbar>
        <div class="uk-navbar-left">
            <a href="#offcanvas-slide" class="uk-link-heading" uk-toggle uk-icon="menu"></a>

            <div id="offcanvas-slide" uk-offcanvas>
                <div class="uk-offcanvas-bar">
                    <ul class="uk-nav uk-nav-default">
                        <li class="uk-active"><router-link to="/">Главная</router-link></li>
                        <li><router-link to="/">Счёт</router-link></li>
                        <li class="uk-nav-header">Header</li>
                        <li><router-link to="/planing">Планирование</router-link></li>
                        <li><router-link to="/history">История</router-link></li>
                        <li class="uk-nav-divider"></li>
                        <li><router-link to="/record">Новая запись</router-link></li>
                    </ul>
                </div>
            </div>
            <div class="uk-padding uk-padding-remove-vertical"><router-link to="/">mm-crm</router-link></div>
        </div>
        <div class="uk-navbar-center">
          <div class=""></div>
        </div>
        <div class="uk-navbar-right">
            <ul class="uk-navbar-nav">
                <li>
                <a href="#">{{ $store.state.auth.displayName || 'введите имя'}}</a>
                <div class="uk-navbar-dropdown">
                    <ul class="uk-nav uk-navbar-dropdown-nav">
                        <li class="uk-active"><a href="#"  @click.prevent='$store.state.isPopup = true'>Изменить имя</a></li>
                        <li class="uk-active" @click.prevent="logout"><a href="#">Выйти</a></li>
                    </ul>
                </div>
            </li>
            </ul>
        </div>
    </nav>
    
</template>

<script>
import {useRouter} from 'vue-router'
import {useStore} from 'vuex'

export default {
    data() {
        return {
            router: useRouter(),
            store: useStore()
        }
    },
    methods: {
        logout() {
            this.store.commit('auth/logout')
            this.router.push('/auth')
        },
        changeName() {
            
        }
    },
    mounted() {
    }
}
</script>