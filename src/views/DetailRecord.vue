<template>
    <h1 class="uk-heading-small uk-heading-divider uk-padding uk-padding-remove-vertical"></h1>
    <div class="uk-container uk-padding">
        <ul class="uk-breadcrumb">
            <li><router-link to="/history">история</router-link></li>
            <li><span>{{ detailData.disc }}</span></li>
        </ul>
    </div>
    <div class="uk-section uk-section-muted">
        <div class="uk-container">
            <h3>Название записи: {{ detailData.disc }}</h3>
            <h3>Дата создания: {{ detailData.date }}</h3>
            <h3>Создатель записи: {{ detailData.name }}</h3>
            <h3><span v-if="detailData.category == 'income'">Заработанная сумма</span> <span v-if="detailData.category == 'outcome'">Потраченная сумма</span>: {{ detailData.sum }}</h3>
            <button class="uk-button" v-if="$store.state.auth.mail == 'maxim.abro@yandex.ru'" @click="deleteDetail">удалить</button>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            id: this.$route.params.detailId,
            detailData: {},
        }
    },
    methods: {
        async getDetail() {
            await fetch(`https://mm-crm-app-default-rtdb.europe-west1.firebasedatabase.app/records/${this.id}.json`,
            {

            })
                .then(response=> response.json())
                .then(data => {
                    this.detailData = data
                })
            console.log(this.detailData);
        }
    },
    async deleteDetail() {
        await fetch(`https://mm-crm-app-default-rtdb.europe-west1.firebasedatabase.app/records/${this.id}.json`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        this.router.push('/history')
        UIkit.notification({ message: 'Запись удалена', status: 'danger' })
        .catch(response => console.log(response))
    },
    beforeMount() {
        this.getDetail()
    }
}
</script>