import Vue from "vue";
import MyTasks from "./components/MyTasks";
import StartRequests from "./components/StartRequests";
import MetricTasksPerDay from "./components/MetricTasksPerDay";
import MetricCompletionTime from "./components/MetricCompletionTime";

new Vue({
    data() {
      return {
        myComponents: [
          {
            name: "my-tasks",
            sizes: 'col-lg-8',
          },
          {
            name: "start-requests",
            sizes: 'col-lg-4',
          },
          {
            name: "metric-tasks-per-day",
            sizes: 'col-md-6',
          },
          {
            name: "metric-completion-time",
            sizes: 'col-md-6',
          },
        ]
      };
    },
    el: "#home-components",
    components: { 
      MyTasks,
      StartRequests,
      MetricTasksPerDay,
      MetricCompletionTime,
    },
    methods: {
      onChange: function() {
        
      }
    }
});
