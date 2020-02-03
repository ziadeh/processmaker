<template>
  <div class="card card-metric-tasks-per-day">
    <div class="card-header text-left">
      <div class="headline"><i class="fas fa-fw fa-chart-bar"></i> Tasks Per Day</div>
    </div>
    <div class="card-body text-center">
      <bar-chart v-if="loaded" :chartdata="chartData" :options="options" :height="360" :styles="styles"></bar-chart>
    </div>
  </div>
</template>

<script>
import BarChart from "./charts/BarChart";

export default {
  props: [],
  components: { BarChart },
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
        scales: {
          xAxes: [{
            stacked: true,
          }],
          yAxes: [{
            stacked: true,
          }]
        }
      },
      chartData: {
        labels: [],
        datasets: [{
          label: 'Started',
          backgroundColor: '#17A2B8',
          data: []
        }, {
          label: 'Completed',
          backgroundColor: '#00BF9C',
          data: []
        }]
      }
    };
  },
  methods: {
    fetch() {
      window.ProcessMaker.apiClient
        .get('metrics/tasks_per_day')
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
        this.chartData.datasets[0].data.push(data[day].open);
        this.chartData.datasets[1].data.push(data[day].completed);
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
