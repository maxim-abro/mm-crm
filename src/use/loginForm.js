import * as yup from 'yup'
import { useField, useForm } from 'vee-validate'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import router from '../router'

export function useLoginForm() {
    const { handleSubmit, isSubmitting } = useForm()
    const store = useStore()

    const { value: email, errorMessage: eError, handleBlur: eBlur } = useField(
        'email',
        yup
        .string()
        .trim()
        .required('Введите email')
        .email('Введите корректный email')
    )

    const { value: password, errorMessage: pError, handleBlur: pBlur } = useField(
        'password',
        yup
        .string()
        .trim()
        .required('Введите пароль')
        .min(6, 'Должно быть минимум 6 символов')
    )

    const onSubmit = handleSubmit(async values => {
        await store.dispatch('auth/login', values)
        router.push('/')
    })
    return {
        email,
        password,
        eError,
        pError,
        eBlur,
        pBlur,
        onSubmit,
        isSubmitting,
    }
}