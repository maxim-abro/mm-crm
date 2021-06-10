<template>
        <div class="uk-container uk-flex uk-flex-column uk-flex-middle">
            <h1 class=".uk-heading-2xlarge uk-heading-divider">MM crm system</h1>
            <form action="" class="uk-flex uk-flex-center uk-flex-middle uk-flex-column uk-padding" @submit.prevent="onSubmit">
                <div class="uk-margin uk-flex uk-flex-column">
                    <div class="uk-inline">
                        <span class="uk-form-icon" uk-icon="icon: user"></span>
                        <input class="uk-input" type="email" placeholder="почта" v-model="email" @blur="eBlur">
                    </div>
                    <small v-if="eError">{{ eError }}</small>
                </div>

                <div class="uk-margin uk-flex uk-flex-column">
                    <div class="uk-inline">
                        <span class="uk-form-icon uk-form-icon" uk-icon="icon: lock"></span>
                        <input class="uk-input" type="password" placeholder="пароль" v-model="password" @blur="pBlur">
                    </div>
                    <small v-if="pError">{{ pError }}</small>
                </div>

                <div class="uk-margin">
                    <div class="uk-inline">
                        <button class="uk-button uk-button-primary" type="submit" :disabled="isSubmitting">войти</button>
                    </div>
                </div>
            </form>
        </div>
</template>

<script>
import {useLoginForm} from '../use/loginForm'

export default {
    setup() {
       return {...useLoginForm()}
    }
}
</script>