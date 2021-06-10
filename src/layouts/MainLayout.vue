<template>
    <navigation></navigation>
    <router-view></router-view>
    <change-name v-if="$store.state.isPopup"></change-name>
</template>

<script>
import Navigation from '../components/Navigation'
import ChangeName from '../components/ChangeName'

export default {
    data() {
        return {
        }
    },
    components: {
        Navigation,
        ChangeName
    }
}
</script>