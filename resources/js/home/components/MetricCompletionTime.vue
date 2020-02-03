<template>
  <div class="card card-metric-tasks-per-day">
    <div class="card-header text-left">
      <div class="headline"><i class="fas fa-fw fa-history"></i> Average Completion Time</div>
    </div>
    <div class="card-body text-center">
      <line-chart v-if="loaded" :chartdata="chartData" :options="options" :height="360" :styles="styles"></line-chart>
    </div>
  </div>
</template>

<script>
import LineChart from "./charts/LineChart";

export default {
  props: [],
  components: { LineChart },
  data() {
    return {
      error: false,
      loaded: false,
      loading: false,
      styles: {
        position: 'relative',
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
      chartData: {
        labels: [],
        datasets: [{
          label: 'Time in Hours',
          backgroundColor: '#FBBE02',
          data: []
        }]
      }
    };
  },
  methods: {
    fetch() {
      window.ProcessMaker.apiClient
        .get('metrics/task_completion')
        .then(response => {
          let data = response.data;
          this.transform(data);
          this.loaded = true;
        })
        .catch(error => {
          this.loading = false;
          this.error = true;
        });
    },
    transform(data) {
      for (const day in data) {
        this.chartData.labels.push(day);
        this.chartData.datasets[0].data.push(data[day].average);
      }
    },
  },
  mounted() {
    this.fetch();
  }
};
</script>

<style lang="scss" scoped>
  .card-metric-tasks-per-day .card-body {
    min-height: 400px;
    max-height: 400px;
  }
</style>
