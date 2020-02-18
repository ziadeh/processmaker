---
description: Receive updates about Requests and your assigned Tasks.
---

# Notifications

## Overview

Request participants may receive notifications when the following events occur:

* A [Request](requests/what-is-a-request.md) has started for a specific Process.
* A Request participant is assigned a [Task](task-management/what-is-a-task.md). Selecting a notification for an assigned Task opens that [Task's summary](task-management/view-a-task-summary.md#summary-for-an-assigned-task).
* Task assignees and/or Request participants may be notified when a Task is due.
* The Requester's Request is canceled. Selecting a notification for a canceled Request opens that [Request's summary](requests/request-details/summary-for-canceled-requests.md).
* The Requester's Request is completed. Selecting a notification for a completed Request opens that [Request's summary](requests/request-details/summary-for-completed-requests.md).

## View New Notifications

The notifications screen displays your notifications. To view new notifications, click the Notifications icon![](../.gitbook/assets/notification-icon-notifications.png)when it indicates you have one or more notifications.

![View notifications by selecting the Notifications icon](../.gitbook/assets/notifications-drop-down.png)

Notifications remain visible until you do one of the following:

* Select the notification represented by the hyperlinked text.
* Click the **Dismiss Notification** icon![](../.gitbook/assets/dismiss-notification-icon-notification.png)to hide that notification.
* Click the **Dismiss All** button to hide all notifications.
* Click the **View All** button to [view all notifications](notifications.md#view-all-notifications).

A notification may contain the following information:

* **Task name:** The name of the assigned Task displays as a hyperlink to that Task.
* **Task assignment date:** To the right of the Task name displays the date and time in which the notification was sent to you. The time zone setting to display the time is according to the ProcessMaker instance unless your [user profile's](profile-settings.md#change-your-profile-settings) **Time zone** setting is specified.
* **Request name:** Below the assigned Task displays the name of the Request associated with that Task.
* **Requester:** Below the Request name is the full name of the person who started the Request.
* **Request completed:** If you are a Request participant when a Request completes, a notification displays **Request completed:** followed by the name of the completed Request.
* **Request canceled:** If you are a Request participant when a Request is canceled, a notification displays **Request canceled:** followed by the name of the canceled Request.
* **Dismiss Notification icon:** The **Dismiss Notification** icon![](../.gitbook/assets/dismiss-notification-icon-notification.png)displays at the bottom-right of the notification.

{% hint style="info" %}
If you have no notifications when you select the Notifications icon![](../.gitbook/assets/notification-icon-notifications.png), the following message displays: **No Notifications Found**.
{% endhint %}

## View Unread Notifications

The **Unread Notifications** page displays all your unread notifications. To view all of your unread notifications, click the Notifications icon![](../.gitbook/assets/notification-icon-notifications.png)and then do one of the following:

* Select **View All Notifications**. This text displays only if you have no new notifications.
* Select **All Unread Notifications**. This text displays only if you have two or more notifications.

{% hint style="info" %}
Click the **Unread Notifications** icon![](../.gitbook/assets/unread-notifications-icon-notifications.png)in the left sidebar when you are viewing the **All Notifications** page.
{% endhint %}

![&quot;Unread Notifications&quot; page displays your unread notifications](../.gitbook/assets/all-notifications-page.png)

The **Unread Notifications** page displays the following information in tabular format about your unread notifications:

* **Status:** The **Status** column displays the unread status icon![](../.gitbook/assets/unread-notification-icon-notifications.png)to indicate the notification is unread. Click the icon to indicate that the notification is read. Doing so makes the notification display in the [**All Notifications**](notifications.md#view-all-notifications) page.
* **User:** The **User** column displays to whom the notification applies. This user is often you, but it might also include others such as a person who canceled a Request.
* **Subject:** The **Subject** column displays the subject of the notification. If the subject pertains to an assigned Task, the subject includes the following:
  * The name of the Task displays in blue-colored text. Select the Task name to open the Task.
  * The name of the Request associated with the Task displays in parentheses.
* **Created:** The **Created** column displays when the notification was sent to you. The time zone setting to display the time is according to the ProcessMaker instance unless your [user profile's](profile-settings.md#change-your-profile-settings) **Time zone** setting is specified.

{% hint style="info" %}
Need to search for a notification? See [Search for a Notification](notifications.md#search-for-a-notification).
{% endhint %}

## View All Notifications

Follow these steps to view all your notifications:

1. [View your unread notifications.](notifications.md#view-unread-notifications) The **Unread Notifications** page displays.
2. Click the **All Notifications** icon![](../.gitbook/assets/archived-processes-icon-processes.png)in the left sidebar. The **All Notifications** page displays.

![&quot;All Notifications&quot; page displays your read and unread notifications](../.gitbook/assets/all-notifications-page-notifications.png)

The **All Notifications** page displays the following information in tabular format about all your notifications:

* **Status:** The **Status** column displays the status of the notification using one of the following icons:
  * **Unread status**![](../.gitbook/assets/unread-notification-icon-notifications.png)**:** The notification is unread. Click the icon to indicate its status as read.
  * **Read status**![](../.gitbook/assets/read-notification-icon-notifications.png)**:** The notification is either read or dismissed when the notification was viewed. Click the icon to indicate its status as unread.
* **User:** The **User** column displays to whom the notification applies. This user is often you, but it might also include others such as a person who canceled a Request.
* **Subject:** The **Subject** column displays the subject of the notification. If the subject pertains to an assigned Task, the subject includes the following:
  * **Action icon:** An icon displays what action is associated with the notification so you can prioritize which notification to read first. These are the action icon indicators:
    * **Assigned Task:** The Assigned Task icon![](../.gitbook/assets/notification-action-task-icon-requests.png)indicates that the notification is associated with an assigned task.
    * **Completed Request:** The Completed Request icon![](../.gitbook/assets/notification-action-completed-request-icon-requests.png)indicates that the notification is associated with a completed Request.
    * **Canceled Request:** The Canceled Request icon![](../.gitbook/assets/notification-action-cancel-request-icon-requests.png)indicates that the notification is associated with a canceled Request.
  * **Task name:** The name of the Task displays in blue-colored text. Select the Task name to open the Task.
  * **Request name:** The name of the Request associated with the Task displays in parentheses.
* **Created:** The **Created** column displays when the notification was sent to you. The time zone setting to display the time is according to the ProcessMaker instance unless your [user profile's](profile-settings.md#change-your-profile-settings) **Time zone** setting is specified.

{% hint style="info" %}
Need to search for a notification? See [Search for a Notification](notifications.md#search-for-a-notification).
{% endhint %}

## Search for a Notification

Search for any notification displaying in the **Unread Notifications** or **All Notifications** pages.

To search for a notification, select the **Search** field and then enter text to filter notifications using any of the following criteria:

* **User:** Search for the user associated with the notification.
* **Subject:** Search by the subject of the notification.

## Related Topics

{% page-ref page="task-management/what-is-a-task.md" %}

{% page-ref page="task-management/view-tasks-you-need-to-do.md" %}

{% page-ref page="task-management/view-a-task-summary.md" %}

{% page-ref page="requests/request-details/" %}

