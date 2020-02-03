<template>
  <div class="card card-start-requests">
    <div class="card-header text-left">
      <div class="headline"><i class="fas fa-fw fa-play-circle"></i> Start a Request</div>
    </div>
    <div class="px-2 pt-2">
      <basic-search :placeholder="$t('Search Requests')" @submit="runSearch"></basic-search>
    </div>
    <div class="card-body p-0 overflow-auto">
      <div class="scrollable-wrapper">
        <div class="scrollable p-3">
          <div class="category mb-3" v-for="(category, name) in processes">
            <h6 class="category-name text-muted mb-n2">{{ name }}</h6>
            <process-card v-for="(process,index) in category"
                          :filter="filter"
                          :key="index"
                          :process="process">
            </process-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BasicSearch from "../../components/BasicSearch";
import ProcessCard from "../../components/requests/card";

export default {
  props: [],
  components: { BasicSearch, ProcessCard },
  data() {
    return {
      filter: '',
      loading: true,
      processes: {},
      page: 1,
      perPage: 100,
    };
  },
  methods: {
    runSearch(query) {
      this.filter = query;
      this.fetch();
    },
    fetch() {
      this.loading = true;
      // Now call our api
      window.ProcessMaker.apiClient
        .get(
          "start_processes?page=" +
          this.page +
          "&per_page=" +
          this.perPage +
          "&filter=" +
          this.filter +
          "&order_by=category.name,name" +
          "&order_direction=asc,asc" +
          "&include=events,categories"
        )
        .then(response => {
          let data = response.data;
          // Empty processes
          this.processes = {};
          // Now populate our processes array with data for rendering
          this.populate(data.data);
          // Do initial filter
          this.loading = false;
          //Set data in paginate
          data.meta.from--;
          this.$refs.listProcess.data = data;
          this.$refs.listProcess.setPaginationData(data.meta);
        })
        .catch(error => {
          this.loading = false;
          this.error = true;
        });
    },
    populate(data) {
      // Each element in data represents an individual process
      // We need to pull out the category name, and if it's available in our processes, append it there
      // if not, create the category in our processes array and then append it
      for (let process of data) {
        for (let category of process.categories) {
          // Now determine if we have it defined in our processes list
          if (typeof this.processes[category.name] == "undefined") {
            // Create it
            this.processes[category.name] = [];
          }
          // Now append
          this.processes[category.name].push(process);
        }
      }
    },
  },
  mounted() {
    this.fetch();
  }
};
</script>

<style lang="scss" scoped>
  .card-start-requests {
    min-height: 400px;
  }

  .category-name {
    font-size: .85em;
    font-weight: bold;
  }
  
  .process-name {
    font-weight: bold;
  }
  
  .process-description {
    font-size: .85em;
  }
  
  .scrollable-wrapper {
    height: 100%;
    position: relative;
    width: 100%;
  }
  
  .scrollable {
    position: absolute;
    top: 0; left: 0;
    right: 0; bottom: 0;
  }
</style>
