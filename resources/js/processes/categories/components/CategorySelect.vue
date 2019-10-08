<template>
  <div class="form-group">
    <label>{{ $t(label) }}</label>
    <multiselect v-model="content"
                 track-by="id"
                 label="name"
                 :class="{'border border-danger':error}"
                 :loading="loading"
                 :placeholder="$t('type here to search')"
                 :options="options"
                 :multiple="true"
                 :show-labels="false"
                 :searchable="true"
                 :internal-search="false"
                 @open="load"
                 @search-change="load">
      <template slot="noResult">
        {{ $t('No elements found. Consider changing the search query.') }}
      </template>
      <template slot="noOptions">
        {{ $t('No Data Available') }}
      </template>
    </multiselect>
    <div class="invalid-feedback d-block" v-for="(error, index) in errors" :key="index">
      <small v-if="error" class="text-danger">{{ error }}</small>
    </div>
    <small v-if="error" class="text-danger">{{ error }}</small>
    <small v-if="helper" class="form-text text-muted">{{ $t(helper) }}</small>
  </div>
</template>


<script>
  import Multiselect from "vue-multiselect";

  export default {
    props: ["value", "errors", "label", "helper", "params", "apiGet", "apiList"],
    components: {
      Multiselect
    },
    data() {
      return {
        content: "",
        loading: false,
        options: [],
        error: ''
      };
    },
    computed: {

    },
    watch: {
      content: {
        handler() {
          this.$emit("input", this.content);
        }
      },
      value: {
        immediate: true,
        handler(value) {
          //value = typeof value === 'string' ? value.split(',') : value;
          this.content = value;
          /*if (value instanceof Array) {
            this.loading = 0;
            value.forEach((category) => {
              if (typeof category === "string") {
                this.loading++;
                ProcessMaker.apiClient
                  .get(this.apiGet + "/" + category)
                  .then(response => {
                    this.loading--;
                    this.content[this.content.indexOf(category)] = response.data;
                  })
                  .catch(error => {
                    this.loading = false;
                    if (error.response.status === 404) {
                      this.content.splice(this.content.indexOf(category));
                      this.error = this.$t('Selected not found');
                    }
                  });
              }
            });
          } else {
            this.error = '';
          }*/
        },
      }
    },
    methods: {
      load(filter) {
        ProcessMaker.apiClient
          .get(this.apiList + "?order_direction=asc&status=active" + (typeof filter === 'string' ? '&filter=' + filter : ''))
          .then(response => {
            this.loading = false;
            this.options = response.data.data;
          })
          .catch(err => {
            this.loading = false;
          });
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~vue-multiselect/dist/vue-multiselect.min.css";
</style>
