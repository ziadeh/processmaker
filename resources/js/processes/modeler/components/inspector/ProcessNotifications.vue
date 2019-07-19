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
    this.assignee = {
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
        requesterAssigned: false,
        requesterCompleted: false,
        requesterDue: false,
        assigneeAssigned: false,
        assigneeCompleted: false,
        assigneeDue: false,
        participantsAssigned: false,
        participantsCompleted: false,
        participantsDue: false,
      };
    },
    watch: {
      requesterAssigned: function (value) {
        this.notifications.requester.assigned = value;
      },
      requesterCompleted: function (value) {
        this.notifications.requester.completed = value;
      },
      requesterDue: function (value) {
        this.notifications.requester.due = value;
      },
      assigneeAssigned: function (value) {
        this.notifications.assignee.assigned = value;
      },
      assigneeCompleted: function (value) {
        this.notifications.assignee.completed = value;
      },
      assigneeDue: function (value) {
        this.notifications.assignee.due = value;
      },
      participantsAssigned: function (value) {
        this.notifications.participants.assigned = value;
      },
      participantsCompleted: function (value) {
        this.notifications.participants.completed = value;
      },
      participantsDue: function (value) {
        this.notifications.participants.due = value;
      },
      modelerId: function (newValue, oldValue) {
        this.loadNotifications();
      }
    },
    methods: {
      loadNotifications () {
        this.requesterAssigned = this.notifications.requester.assigned;
        this.requesterCompleted = this.notifications.requester.completed;
        this.requesterDue = this.notifications.requester.due;
        this.assigneeAssigned = this.notifications.assignee.assigned;
        this.assigneeCompleted = this.notifications.assignee.completed;
        this.assigneeDue = this.notifications.assignee.due;
        this.participantsAssigned = this.notifications.participants.assigned;
        this.participantsCompleted = this.notifications.participants.completed;
        this.participantsDue = this.notifications.participants.due;
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
