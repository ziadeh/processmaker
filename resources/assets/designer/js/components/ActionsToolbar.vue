<template>
    <div class="btn-group-vertical actions-toolbar">
        <button type="button" class="btn btn-secondary" @click="zoomIn()"><i class="fa fa-plus" aria-hidden="true"></i></button>
        <button type="button" class="btn btn-secondary" @click="zoomReset()"><i class="fa fa-circle-o" aria-hidden="true"></i></button>
        <button type="button" class="btn btn-secondary" @click="zoomOut()"><i class="fa fa-minus" aria-hidden="true"></i></button>
    </div>
</template>

<script>
    export default {
        methods : {
            zoomIn()  {
                Event.$emit('zoomIn', {});
            },
            zoomReset()  {
                Event.$emit('zoomReset', {});
            },
            zoomOut()  {
                Event.$emit('zoomOut', {});
            }
        }
    }
</script>
<style>
    .actions-toolbar {
        position: absolute;
        top: 80px;
        left: 100px;
        z-index: 100;
    }
</style>
