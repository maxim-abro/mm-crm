<template>
    <div class="uk-container">
        <div id="chart">
            <apexchart type="pie" width="380" :options="chartOptions" :series="$store.state.history.comes" v-if="$store.state.history.comes"></apexchart>
        </div>
    </div>
</template>

<script>
import VueApexCharts from 'vue3-apexcharts'

export default {
    name: 'Chart',
    components: {
        apexcharts: VueApexCharts,
    },
    data() {
        return {
            chartOptions: {
                chart: {
                    width:380,
                    type: 'pie'
                },
                labels: ['Доходы','Расходы'],
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            },
            // series: this.$store.state.history.comes
        }
    },
    props: ['data'],
    mounted() {
        console.log(this.data)
        // this.calc()
    },
    methods: {
        // calc() {
        //     this.serises.push(this.$store.state.history.outcome, this.$store.state.history.income)
        // }
    }
}
</script>

<style scoped>
    .uk-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>