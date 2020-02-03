<template>
    <div class="basic-search">
        <div class="d-flex">
            <div class="flex-grow-1">
                <div class="search-bar-basic d-flex w-100">
                    <div class="search-bar-inputs flex-grow w-100">
                        <input ref="search_input" type="text" class="search-bar-manual-input form-control" :placeholder="placeholderText" v-model="query" @keyup.enter="runSearch">
                    </div>
                    <div class="search-bar-actions d-flex flex-shrink">
                        <b-btn class="btn-search-run" variant="primary" @click="runSearch" v-b-tooltip.hover :title="$t('Search')"><i class="fas fa-search"></i></b-btn>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
  props: ["placeholder"],
  data() {
    return {
      query: '',
    };
  },
  computed: {
    placeholderText() {
      return this.placeholder ? this.placeholder : $t('Search');
    },
  },
  watch: {
    query(value) {
        this.$emit('input', value);
    },
  },
  methods: {
      runSearch(advanced) {
        this.$emit('submit', this.query);
      },
  },
  created() {

  }
};
</script>

<style lang="scss" scoped>

</style>
