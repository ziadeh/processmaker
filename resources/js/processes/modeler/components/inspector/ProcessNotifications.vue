<template>
  <div>
    <div class="form-group">
      <label>{{ $t("Process Notifications") }}</label>

      <div class="notification-settings-group">
        <div class="notification-settings-header">{{ $t("Requester") }}</div>
        <div class="custom-control custom-switch">

          <input v-model="formData.notifications.requester.started"
                 type="checkbox" class="custom-control-input"
                 id="notify-requester-started">
          <label class="custom-control-label"
                 for="notify-requester-started">{{ $t("Started") }}</label>

        </div>
        <div class="custom-control custom-switch">
          <input v-model="formData.notifications.requester.canceled"
                 type="checkbox" class="custom-control-input"
                 id="notify-requester-canceled">
          <label class="custom-control-label"
                 for="notify-requester-canceled">{{ $t("Canceled")}}</label>
        </div>
        <div class="custom-control custom-switch">
          <input v-model="formData.notifications.requester.completed"
                 type="checkbox" class="custom-control-input"
                 id="notify-requester-completed">
          <label class="custom-control-label"
                 for="notify-requester-completed">{{ $t("Completed") }}</label>
        </div>
      </div>

      <div class="notification-settings-group">
        <div class="notification-settings-header">{{ $t("Participant") }}</div>
        <div class="custom-control custom-switch">
          <input v-model="formData.notifications.participants.canceled"
                 type="checkbox" class="custom-control-input"
                 id="notify-participants-canceled">
          <label class="custom-control-label"
                 for="notify-participants-canceled">{{ $t("Canceled") }}</label>
        </div>
        <div class="custom-control custom-switch">
          <input v-model="formData.notifications.participants.completed"
                 type="checkbox" class="custom-control-input"
                 id="notify-participants-completed">
          <label class="custom-control-label"
                 for="notify-participants-completed">{{ $t("Completed") }}</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  function notificationTemplate () {
    this.requester = {
      assigned: false,
      completed: false,
    };
    this.participants = {
      assigned: false,
      completed: false,
    };
  };

  export default {
    props: ["value", "label", "helper", "property"],
    data () {
      return {
        content: "",
        users: [],
        formData: {
          notifications: {
            participants: {
              completed: false,
              canceled: false,
            },
            requester: {
              started: false,
              canceled: false,
              completed: false
            }
          }
        },
        requesterStarted: false,
        requesterCanceled: false,
        requesterCompleted: false,
        participantsCanceled: false,
        participantsCompleted: false,
      };
    },
    watch: {
      requesterStarted: function (value) {
        this.notifications.requester.started = value;
      },
      requesterCanceled: function (value) {
        this.notifications.requester.canceled = value;
      },
      requesterCompleted: function (value) {
        this.notifications.requester.completed = value;
      },
      participantsCanceled: function (value) {
        this.notifications.participants.canceled = value;
      },
      participantsCompleted: function (value) {
        this.notifications.participants.completed = value;
      },
      modelerId: function (newValue, oldValue) {
        this.loadNotifications();
      }
    },
    methods: {
      loadNotifications () {
        this.requesterStarted = this.notifications.requester.started;
        this.requesterCanceled = this.notifications.requester.canceled;
        this.requesterCompleted = this.notifications.requester.completed;
        this.participantsCanceled = this.notifications.participants.canceled;
        this.participantsCompleted = this.notifications.participants.completed;
      }
    },
    computed: {
      process () {
        return this.$parent.$parent.$parent.$parent.$parent.$parent.process;
      },
      modelerId () {
        return this.$parent.$parent.$parent.$parent.highlightedNode._modelerId;
      },
      node () {
        return this.$parent.$parent.$parent.$parent.highlightedNode;
      },
      nodeId () {
        return this.node.definition.id;
      },
      notifications () {
        if (this.node.notifications === undefined) {
          if (this.process.notifications[this.nodeId] === undefined) {
            this.node.notifications = new notificationTemplate();
          } else {
            this.node.notifications = this.process.notifications[this.nodeId];
          }
        }
        return this.node.notifications;
      }
    },
    mounted () {
      this.loadNotifications();
    }
  };
</script>

<style lang="scss" scoped>
  .notification-settings-group {
    margin-bottom: 10px;
  }

  .notification-settings-header {
    font-weight: bold;
  }

  .custom-control-label {
    margin-bottom: 0;
    padding-top: 3px;
  }

  .form-group {
    padding: 0px;
  }
</style>
