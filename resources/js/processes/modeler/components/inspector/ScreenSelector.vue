<template>
   <div>
       <form-select v-if="!loading" :options="availableScreens" label="Screen" v-model="screenId" helper="Select the screen to render for this task"></form-select>
       <div v-else>
           Loading...
        </div>
       <div @click="load">Refresh</div>
    </div>
</template>

<script>
import {FormSelect} from '@processmaker/vue-form-elements'

export default {
    components: {
        FormSelect
    },
    data() {
        return {
            loading: true,
            availableScreens: []
        }
    },
    mounted() {
        this.load()
    },
    methods: {
        load() {
            this.loading = true
            // Fetch the screens from API and then populate the options list

        }
    }

}
</script>


<style lang="scss" scoped>

</style>
