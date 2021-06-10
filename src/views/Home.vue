<template>
    <h1 class="uk-heading-small uk-heading-divider uk-padding uk-padding-remove-vertical">главная</h1>
    <div class="uk-container">
        <div class="uk-child-width-1-3@m uk-grid-small uk-grid-match" uk-grid>
           <div>
                <div class="uk-card uk-card-primary uk-card-body uk-card-hover">
                    <div class="uk-card-title">Счёт в валюте</div>
                    <p>12000 р</p>
                </div>
            </div>
            <div>
                <div class="uk-card uk-card-secondary uk-card-body uk-card-hover">
                    <div class="uk-card-title">Курс валют</div>
                    <p>Валюта USD {{ this.$store.state.home.course }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
        }
    },
    components: {
    },
    methods: {

    },
    beforeMount(){
        this.$store.dispatch('home/getCourse')
    }
}
</script>