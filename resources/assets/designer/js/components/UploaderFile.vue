<template>
    <div>
        <div class="dropzone-area" drag-over="handleDragOver">
            <div class="dropzone-text">
                <span class="dropzone-title">Drop image here or click to select</span>
                <span class="dropzone-info" v-if="help">{{ help }}</span>
            </div>
            <input type="file" @change="onFileChange">
        </div>
    </div>
</template>

<script>
    export default {
        props: ['help'],

        data() {
            return {
                image: ''
            }
        },

        methods: {
            onFileChange(e) {
                var files = e.target.files || e.dataTransfer.files;
                if (!files.length) return;
                var file = files[0];

                var reader = new FileReader();

                reader.onload = function(e) {

                    var xml = e.target.result;

                    Event.$emit('change', xml)

                };

                reader.readAsText(file);
            }
        }

    }
</script>

<style>
    .dropzone-area { width: 80%; height: 200px; position: relative; border: 2px dashed #CBCBCB; }
    .dropzone-area:hover { border: 2px dashed #2E94C4; } .dropzone-area:hover .dropzone-title { color: #1975A0; }
    .dropzone-area input { position: absolute; cursor: pointer; top: 0px; right: 0; bottom: 0; left: 0; width: 100%; height: 100%; opacity: 0; }
    .dropzone-text { position: absolute; top: 50%; text-align: center; transform: translate(0, -50%); width: 100%; }
    .dropzone-text span { display: block; font-family: Arial, Helvetica; line-height: 1.9; }
    .dropzone-title { font-size: 13px; color: #787878; letter-spacing: 0.4px; }
    .dropzone-info { font-size: 13px; font-size: 0.8125rem; color: #A8A8A8; letter-spacing: 0.4px; }
    .dropzone-button { position: absolute; top: 10px; right: 10px; display: none; }
    .dropzone-preview { width: 80%; position: relative; } .dropzone-preview:hover .dropzone-button { display: block; }
    .dropzone-preview img { display: block; height: auto; max-width: 100%; }
</style>