<template>
    <h1 class="uk-heading-small uk-heading-divider uk-padding uk-padding-remove-vertical">История расходов</h1>
    <div class="uk-container">
        <ul class="uk-breadcrumb">
            <li><span>История</span></li>
        </ul>
    </div>

    <charts :data="$store.state.history.historyData"></charts>

    <div class="uk-container">

        <table class="uk-table uk-table-striped uk-table-hover" v-if='$store.state.history.historyData'>
            <thead>
                <tr>
                    <th>№</th>
                    <th>Сумма</th>
                    <th>Дата</th>
                    <th>Категория</th>
                    <th>Добавил запись</th>
                    <th>Тип</th>
                    <th>Открыть</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, name, idx) of $store.state.history.historyData" :key="idx+1" :id="name">
                    <td>{{idx+1}}</td>
                    <td>{{ item.sum }} ₽</td>
                    <td>{{ item.date }}</td>
                    <td>{{ item.disc }}</td>
                    <td>{{ item.name }}</td>
                    <td>
                        <div class="uk-label uk-label-danger" v-if="item.category == 'outcome'">Расход</div>
                        <div class="uk-label uk-label-success" v-if="item.category == 'income'">Доход</div>
                    </td>
                    <td>
                        <router-link :to="`/detail/${name}`"><button uk-icon="sign-in"></button></router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import Charts from '../components/Charts'

export default {
    beforeMount() {
        this.$store.state.history.comes = []
        this.$store.dispatch('history/getHistory')
        console.log(this.$store.state.history.historyData)
    },
    components: {
        Charts
    },
    data() {
        return {
             
        }
    }
}
</script>