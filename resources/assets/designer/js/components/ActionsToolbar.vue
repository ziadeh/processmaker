<template>
    <div class="btn-group-vertical actions-toolbar">
        <button type="button" id="zoomIn" class="btn btn-secondary" @click="zoomIn()"><i class="fa fa-plus"
                                                                                         aria-hidden="true"></i>
        </button>
        <button type="button" id="zoomReset" class="btn btn-secondary" @click="zoomReset()"><i class="fa fa-circle-o"
                                                                                               aria-hidden="true"></i>
        </button>
        <button type="button" id="zoomOut" class="btn btn-secondary" @click="zoomOut()"><i class="fa fa-minus"
                                                                                           aria-hidden="true"></i>
        </button>
    </div>
</template>

<script>
    import actions from "../actions/";
    export default {
        methods: {
            zoomIn()  {
                let action = actions.canvas.zoom.in({});
                Event.$emit(action.type, action.payload);
            },
            zoomReset()  {
                let action = actions.canvas.zoom.reset({});
                Event.$emit(action.type, action.payload);
            },
            zoomOut()  {
                let action = actions.canvas.zoom.out({});
                Event.$emit(action.type, action.payload);
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
