<template>
    <h1 class="uk-heading-small uk-heading-divider uk-padding uk-padding-remove-vertical">Новая запись</h1>
    <div class="uk-container">
        <form class="uk-form-stacked" id="data" @submit.prevent="submitForm">
            <div class="uk-margin">
                <label for="sum" class="uk-form-label">Сумма</label>
                <div class="uk-form-controls">
                    <input type="number" v-model="body.sum" class="uk-input" id="sum" placeholder="1000">
                </div>
            </div>

            <div class="uk-margin">
                <label for="disc" class="uk-form-label">Название</label>
                <div class="uk-form-controls">
                    <input type="text" v-model="body.disc" class="uk-input" id="disc" placeholder="Подал машину">
                </div>
            </div>

            <div class="uk-margin">
                <div class="uk-form-label">Выберете категорию</div>
                <div class="uk-form-controls">
                    <label><input class="uk-radio" v-model="body.category" value="income" type="radio" name="type"> Доход</label><br>
                    <label><input class="uk-radio" v-model="body.category" value="outcome" type="radio" name="type"> Расход</label>
                </div>
            </div>

            <button class="uk-button uk-button-primary" type="submit">Создать</button>
        </form>
    </div>
</template>

<script>
import fullDate from '../utils/nowDate'

export default {
    data() {
        return {
            body: {
                category: '',
                sum: null,
                disc: '',
                mail: this.$store.state.auth.mail,
                date: fullDate(),
                name: this.$store.state.auth.displayName
            }

        }
    },
    methods: {
        async submitForm() {
            if(this.body.category || this.body.sum || this.body.sisc) {
                const response = await fetch('https://mm-crm-app-default-rtdb.europe-west1.firebasedatabase.app/records.json', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.body)
                })
                this.body = {
                    category: '',
                    sum: null,
                    disc: '',
                    mail: this.$store.state.auth.mail,
                    date: fullDate(),
                    name: this.$store.state.auth.displayName
                }
                UIkit.notification({ message: 'Вы успешно создали новую запись', status: 'primary' })
            } else {
                UIkit.notification({ message: 'Вы заполнили не все пункты', status: 'danger' })
            }

        }
    }
}
</script>