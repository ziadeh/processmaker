---
description: Learn what information displays in summaries for in-progress Requests.
---

# Summary for In-Progress Requests

## Overview

Follow these steps to view a summary for an in-progress Request:

1. Ensure that you are [logged on](../../log-in.md#log-on) to ProcessMaker.
2. View one of the following **Requests** pages:
   * **My Requests** page. See [View Your Requests That You Started](../view-started-requests.md#view-your-requests).
   * **In Progress** page. See [View Requests That Are In Progress](../view-in-progress-requests.md#view-in-progress-requests-in-which-you-are-participating).
   * **All Requests** page. See [View All Requests](../view-all-requests.md#view-all-requests-in-your-organization). \(Note that your ProcessMaker user account must have the [**Requests: View All Requests** permission](../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#requests) to view the **All Requests** page.\)
3. Do one of the following:
   * From the **\#** column in the Request page, click the Request number associated with the Process that you want to view. That Request's summary displays.
   * Click the **Open Request** icon![](../../../.gitbook/assets/open-request-icon-requests.png)for a Request. That Request's summary displays.

## Tasks Assigned to Request Participants

The **Tasks** tab displays the summary for all assigned Tasks to Request participants to that time.

![&quot;Tasks&quot; tab displaying an in-progress Request&apos;s summary](../../../.gitbook/assets/tasks-tab-request-information-request.png)

The **Tasks** tab displays the following summary in tabular format about assigned Tasks to Request participants to that time:

* **Task:** The **Task** column displays the name of each Task to be completed for the selected Request for all Request participants. If a Task is assigned to you, a hyperlink displays in the Task name.
* **Assigned:** The **Assigned** column displays the username's avatar to whom the Task is assigned. Hover your cursor over a user's avatar to view that person's full name.
* **Due:** The **Due** column displays the date the Task is due. The time zone setting to display the time is according to the ProcessMaker Spark server unless your [user profile's](../../profile-settings.md#change-your-profile-settings) **Time zone** setting is specified.

Below the table, the history of the Request displays all Request actions. See [Request History](summary-for-in-progress-requests.md#request-history).

{% hint style="info" %}
### No Assigned Tasks?

If there are no assigned Tasks for the selected Request, the following message displays: **No Data Available**.

### Display Information the Way You Want It

[Control how tabular information displays](../../control-how-requests-display-in-a-tab.md), including how to sort columns or how many items display per page.
{% endhint %}

## Values in the Request

The **Summary** tab displays the summary of information entered into the Request when a Request completes. However, because the Request is in progress, there are no Request values to display. The Summary tab displays the following message: **This Request is currently in progress. This screen will be populated once the Request is completed**.

![&quot;Summary&quot; tab displays a message that this tab displays Request values after the Request completes](../../../.gitbook/assets/summary-tab-in-progress-request-message-requests.png)

## Completed Tasks Summary

The **Completed** tab displays the summary of all Tasks Request participants completed to that time.

![&quot;Completed&quot; tab for an in-progress Request&apos;s summary](../../../.gitbook/assets/completed-tab-for-in-progress-request-requests.png)

The **Completed** tab displays the following summary in tabular format about completed Tasks participants completed to that time in the Request:

* **Task:** The **Task** column displays the name of each completed Task in the selected Request. 
* **Assigned:** The **Assigned** column displays the username's avatar to whom the Task was assigned. Hover your cursor over a user's avatar to view that person's full name.
* **Due:** The **Due** column displays the date the Task was due. The time zone setting to display the time is according to the ProcessMaker Spark server unless your [user profile's](../../profile-settings.md#change-your-profile-settings) **Time zone** setting is specified.

Below the table, the history of the Request displays all Request actions. See [Request History](summary-for-in-progress-requests.md#request-history).

{% hint style="info" %}
### There Are No Completed Tasks?

If the selected Request has no completed Tasks, the following message displays: **No Data Available**.

### Display Information the Way You Want It

[Control how tabular information displays](../../control-how-requests-display-in-a-tab.md), including how to sort columns or how many items display per page.
{% endhint %}

## Files Associated with the Request

The **Files** tab displays the summary of all files associated with the Request to that time. The **Files** tab only displays if at least one file has been uploaded to the Request. The name of each file is linked to the file so you can download that file to your local computer or network location.

![&quot;Files&quot; tab for an in-progress Request&apos;s summary](../../../.gitbook/assets/files-tab-request-summary-requests.png)

The **Files** tab displays the following summary in tabular format about the files associated with the Request:

* **File Name:** The **File Name** column displays the name of each associated with the selected Request. Click the file name to download it to your local computer or network location. 
* **MIME Type:** The **MIME Type** column displays the MIME type for the associated file.
* **Created At:** The **Created At** column displays the date the file became associated with the selected Request. The file became associated with the Request when the person who attached it submitted the [ProcessMaker Screen](../../../designing-processes/design-forms/what-is-a-form.md) to which the file was uploaded. The time zone setting to display the time is according to the ProcessMaker Spark server unless your [user profile's](../../profile-settings.md#change-your-profile-settings) **Time zone** setting is specified.

Below the table, the history of the Request displays all Request actions. See [Request History](summary-for-in-progress-requests.md#request-history).

## Request Participants

Each in-progress Request displays a summary of the Request participants to that time.

![Request participant summary for an in-progress Request](../../../.gitbook/assets/in-progress-request-participants-request.png)

The following summary displays about participants in an in-progress Request:

* **Requested By:** The **Requested By** field displays the avatar and full name of the person who started the selected Request. Hover your cursor over a user's avatar to view that person's full name.
* **Cancel Request:** The **Cancel Request** field allows a Request participant or ProcessMaker Administrator to cancel the Request if that Request participant's user account has the appropriate permission to cancel Requests for that Process. If your user account does not have the permission\(s\) to cancel Requests for that Process, the **Cancel Request** field does not display. See [Cancel a Request](../delete-a-request.md).
* **Participants:** The **Participants** field displays each Request participant's avatar in the selected Request to that time. Hover your cursor over a user's avatar to view that person's full name.
* **Request creation date:** The date and time the Request was created displays below the **Participants** field. The time zone setting to display the time is according to the ProcessMaker Spark server unless your [user profile's](../../profile-settings.md#change-your-profile-settings) **Time zone** setting is specified.

## Request History

Below the tabular information summarizing the Request displays that Request's history: all Request actions to that time. The oldest Request actions display at the top of the Request history.

![Request history displays all actions in a Request, with the oldest actions at the top](../../../.gitbook/assets/request-history-requests.png)

The following information displays about each event in the Request history:

* **Request participant:** The Request participant who performed the action is represented by his or her avatar. Hover your cursor over a user's avatar to view that person's full name. If the ProcessMaker system performed an action by running a ProcessMaker Script or other automatic function, that action is represented by "S" avatar.
* **Date and time the action occurred:** To the right of the Request participant displays the date and time the Request action occurred. The time zone setting to display the time is according to the ProcessMaker Spark server unless your [user profile's](../../profile-settings.md#change-your-profile-settings) **Time zone** setting is specified.
* **Description of the action:** To the right of when the Request action occurred displays a description of that action. The ProcessMaker system generates this action description.

## Related Topics

{% page-ref page="../what-is-a-request.md" %}

{% page-ref page="../view-started-requests.md" %}

{% page-ref page="../view-in-progress-requests.md" %}

{% page-ref page="../view-all-requests.md" %}

{% page-ref page="summary-for-completed-requests.md" %}

{% page-ref page="summary-for-canceled-requests.md" %}

{% page-ref page="summary-for-requests-with-errors.md" %}

{% page-ref page="../../../designing-processes/design-forms/what-is-a-form.md" %}

