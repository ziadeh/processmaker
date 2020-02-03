<template>
    <div>
      <div :ref="'startEvent' + event.id" :class="{'process-card-loading': loading[event.id]}" class="process-card bg-success text-white rounded-md mt-3 py-2 pl-2" v-for="event in process.startEvents" :key="event.id">
        <div class="d-flex">
          <div class="process-name">
            {{transformedName}}<span v-if="process.startEvents.length > 1">: {{event.name}}</span>
            <div class="process-button process-button-info" :id="targetReference(process, event, 'info')" @click="showRequestDetails(event.id)">
              <i class="fas fa-fw fa-info-circle"></i>
              <b-tooltip :target="targetReference(process, event, 'info')" triggers="hover">
                {{ $t('More Information') }}
              </b-tooltip>
            </div>
          </div>
          <div class="ml-auto process-buttons">
            <div class="process-button process-button-start pr-2" :id="targetReference(process, event, 'start')" @click="newRequestLink(process, event)">
              <i v-if="loading[event.id]" class="fas fa-lg fa-fw fa-cog fa-spin"></i>
              <i v-else class="fas fa-2x fa-fw fa-caret-square-right"></i>
              <b-tooltip :target="targetReference(process, event, 'start')" triggers="hover">
                {{ $t('Start Request') }}
              </b-tooltip>
            </div>
          </div>
        </div>
        <div class="process-description pr-2" v-if="showDetail[event.id]">{{ process.description }}</div>
      </div>
    </div>
</template>

<script>
import { TooltipPlugin } from "bootstrap-vue";
Vue.use(TooltipPlugin);
export default {
  props: ["name", "description", "filter", "id", "process"],
  data() {
    return {
      showtip: true,
      showDetail: {},
      loading: {},
    };
  },
  beforeMount() {
    this.process.startEvents.forEach(event => {
      this.$set(this.showDetail, event.id, false);
      this.$set(this.loading, event.id, false);
    });
  },
  methods: {
    targetReference(process, event, item) {
      let uid = this._uid;
      return `process-${item}-${process.id}-${event.id}-${uid}`;
    },
    newRequestLink(process, event) {
      if (this.loading[event.id]) {
        return;
      }
      //Start a process
      this.$set(this.loading, event.id, true);
      let startEventId = event.id;
      window.ProcessMaker.apiClient
        .post("/process_events/" + this.process.id + "?event=" + startEventId)
        .then(response => {
          var instance = response.data;
          window.location = "/requests/" + instance.id;
          this.$set(this.loading, event.id, false);
        });
    },
    showRequestDetails: function(id) {
      this.$set(this.showDetail, id, !this.showDetail[id]);
    },
  },
  computed: {
    transformedName() {
      return this.process.name.replace(new RegExp(this.filter, "gi"), match => {
        return match;
      });
    },
  }
};
</script>

<style lang="scss" scoped>
  .process-card-loading {
    opacity: .5;
  }

  .process-name {
    font-weight: bold;
    padding-left: 5px;
    padding-top: 5px;
  }
  
  .process-buttons {
    min-width: 75px;
    text-align: right;
  }
  
  .process-button {
    cursor: pointer;
    display: inline-block;
    opacity: .8;
    
    &:hover {
      opacity: 1;
    }
  }
  
  .process-description {
    font-size: .85em;
    padding-left: 5px;
  }
</style>

