<template>
  <div class="card">
    <div class="card-header card-header-with-tabs">
      <div class="headline"><i class="fas fa-fw fa-list"></i> My Tasks</div>
      <ul class="nav nav-tabs card-header-tabs">
        <!-- <li class="nav-item">
          <a class="nav-link" href="#">Overdue <span class="badge badge-pill badge-danger">1</span></a>
        </li> -->
        <li class="nav-item">
          <a class="nav-link active" href="#nav-open" data-toggle="tab">
            In Progress
            <span class="badge badge-pill badge-info">
              <span v-if="openCount">{{ openCount }}</span>
              <span v-else><i class="fas fa-cog fa-spin"></i></span>
            </span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#nav-completed" data-toggle="tab">
            Completed
            <span class="badge badge-pill badge-success">
              <span v-if="completedCount">{{ completedCount }}</span>
              <span v-else><i class="fas fa-cog fa-spin"></i></span>
            </span>
          </a>
        </li>
      </ul>
      <div class="card-header-link ml-auto"><a href="/tasks">All Tasks...</a></div>
    </div>
    <div class="card-body tab-content p-0">
      <div id="nav-open" class="tab-pane show active p-0">
        <div class="px-2 pt-2">
          <advanced-search ref="advancedSearchOpen" type="tasks" :excludeStatus="true" @change="onOpenChange" @submit="onOpenSearch"></advanced-search>
        </div>
        <tasks-list ref="openTasksList" items-per-page="5" :per-page-select="false" :columns="columns" :filter="filter" :pmql="openPMQL" @count="onOpenCount" wrapper-class="border-0"></tasks-list>
      </div>
      <div id="nav-completed" class="tab-pane hide">
        <div class="px-2 pt-2">
          <advanced-search ref="advancedSearchCompleted" type="tasks" :excludeStatus="true" @change="onCompletedChange" @submit="onCompletedSearch"></advanced-search>
        </div>
        <tasks-list ref="completedTasksList" items-per-page="5" :per-page-select="false" :columns="columns" :filter="filter" :pmql="completedPMQL" @count="onCompletedCount" wrapper-class="border-0"></tasks-list>
      </div>
    </div>
  </div>
</template>

<script>
import TasksList from "../../tasks/components/TasksList";
import AdvancedSearch from "../../components/AdvancedSearch";

export default {
  props: [],
  components: { TasksList, AdvancedSearch },
  data() {
    return {
      overdue: [],
      open: [],
      openCount: 0,
      openPMQL: 'status = "In Progress"',
      completed: [],
      completedCount: 0,
      completedPMQL: 'status = "Completed"',
      filter: '',
      pmql: '',
      columns: [
        {
          "label": "ID",
          "field": "id",
          "sortable": true,
          "default": true
        },
        {
          "label": "Task",
          "field": "task",
          "sortable": true,
          "default": true
        },
        {
          "label": "Created",
          "field": "created_at_relative",
          "sortable": true,
          "default": true
        },
        {
          "label": "Due",
          "field": "due_at_relative",
          "sortable": true,
          "default": true
        },
        {
          "label": "Request",
          "field": "request",
          "sortable": true,
          "default": true
        },
      ],
    };
  },
  methods: {
    onOpenCount(total) {
      this.openCount = total;
    },
    onCompletedCount(total) {
      this.completedCount = total;
    },
    onOpenChange: function(query) {
      let pmql = 'status = "In Progress"';
      if (query.length) {
        pmql = `${pmql} AND (${query})`
      }
      this.openPMQL = pmql;
    },
    onOpenSearch: function() {
      this.$refs.openTasksList.fetch(true);
    },
    onCompletedChange: function(query) {
      let pmql = 'status = "Completed"';
      if (query.length) {
        pmql = `${pmql} AND (${query})`
      }
      this.completedPMQL = pmql;
    },
    onCompletedSearch: function() {
      this.$refs.completedTasksList.fetch(true);
    },
  },
  mounted() {

  }
};
</script>

<style lang="scss">

</style>
