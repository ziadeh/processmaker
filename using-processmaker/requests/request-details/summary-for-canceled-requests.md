---
description: Learn what information displays in summaries for canceled Requests.
---

# Summary for Canceled Requests

## Overview

Follow these steps to view a summary for a canceled [Request](../what-is-a-request.md):

1. Ensure that you are [logged on](../../log-in.md#log-on) to ProcessMaker.
2. View one of the following **Requests** pages:
   * **My Requests** page. See [View Your Requests That You Started](../view-started-requests.md#view-your-requests).
   * **All Requests** page. See [View All Requests](../view-all-requests.md#view-all-requests-in-your-organization). \(Note that your ProcessMaker user account must have the [**Requests: View All Requests** permission](../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#requests) to view the **All Requests** page.\)
3. Do one of the following:
   * From the **\#** column in the Request page, click the Request number associated with the Process that you want to view. That Request's summary displays.
   * Click the **Open Request** icon![](../../../.gitbook/assets/open-request-icon-requests.png)for a Request. That Request's summary displays.

## Values in the Request

The **Summary** tab displays the summary of information entered into the Request to the time of its cancellation. Request participants manually enter information into ProcessMaker [Screens](../../../designing-processes/design-forms/what-is-a-form.md).

![&quot;Summary&quot; tab in a canceled Request&apos;s summary](../../../.gitbook/assets/summary-tab-canceled-request-information-requests.png)

The **Summary** tab displays the JSON-formatted key/value pairs in tabular format that represent ProcessMaker Screen control data. Information is displayed:

* **Key:** The **Key** column displays the JSON key name that represents the ProcessMaker Screen control name the Request participant entered data. For example, a [Rich Text](../../../designing-processes/design-forms/screens-builder/control-descriptions/rich-text-control-settings.md#control-description) control to enter your company's name could have a [**Variable Name**](../../../designing-processes/design-forms/screens-builder/control-descriptions/rich-text-control-settings.md#configuration-panel-settings) setting value of `companyName` which would display in the **Key** column here.
* **Value:** The **Value** column displays that key's value as entered by a person manually interacting with a form. For example, a Text control to enter your name could have the value `John Doe` which would display in the **Value** column here.

The **Summary** tab may also display a message about the canceled Request. This message is a ProcessMaker Screen configured to display when Requests for a specific Process are canceled.

![ProcessMaker Screen displaying a message when Requests for a specific Process are canceled.](../../../.gitbook/assets/summary-tab-cancel-screen-requests.png)

Below the **Summary** tab, the history of the Request displays all Request actions. See [Request History](summary-for-canceled-requests.md#request-history).

{% hint style="info" %}
[Control how tabular information displays](../../control-how-requests-display-in-a-tab.md), including how to sort columns or how many items display per page.
{% endhint %}

## Completed Tasks Summary

The **Completed** tab displays the summary of all Tasks Request participants completed to the time the selected Request was canceled.

![&quot;Completed&quot; tab for a canceled Request&apos;s summary](../../../.gitbook/assets/completed-tab-canceled-request-information-requests.png)

The **Completed** tab displays the following summary in tabular format about completed Tasks Request participants completed to the time the Request was canceled:

* **\#:** The **\#** column displays the Task ID associated with its [Process](../../../designing-processes/viewing-processes/what-is-a-process.md). Each time that Task is assigned to a Request participant, the ID for that Task increments by one.
* **Task:** The **Task** column displays the name of each completed Task in the selected Request. 
* **Assigned:** The **Assigned** column displays the username's avatar to whom the Task was assigned. Hover your cursor over a user's avatar to view that person's full name.
* **Due:** The **Due** column displays the date the Task was due. The time zone setting to display the time is according to the ProcessMaker instance unless your [user profile's](../../profile-settings.md#change-your-profile-settings) **Time zone** setting is specified.

Below the table, the history of the Request displays all Request actions to the time the selected Request was canceled. See [Request History](summary-for-canceled-requests.md#request-history).

{% hint style="info" %}
### There Are No Completed Tasks?

If the selected Request has no completed Tasks, the following message displays: **No Data Available**.

### Display Information the Way You Want It

[Control how tabular information displays](../../control-how-requests-display-in-a-tab.md), including how to sort columns or how many items display per page.
{% endhint %}

## Files Associated with the Request

The **Files** tab displays the summary of all files associated with the Request to the time the selected Request was canceled. The **Files** tab only displays if at least one file has been uploaded to the Request. The name of each file is linked to the file so you can download that file to your local computer or network location.

![&quot;Files&quot; tab for an in-progress Request&apos;s summary](../../../.gitbook/assets/files-tab-request-summary-requests.png)

The **Files** tab displays the following summary in tabular format about the files associated with the Request:

* **File Name:** The **File Name** column displays the name of each file associated with the selected Request. Click the file name to download it to your local computer or network location. 
* **MIME Type:** The **MIME Type** column displays the MIME type for the associated file.
* **Created At:** The **Created At** column displays the date the file became associated with the selected Request. The file became associated with the Request when the person who attached it submitted the [ProcessMaker Screen](../../../designing-processes/design-forms/what-is-a-form.md) to which the file was uploaded. The time zone setting to display the time is according to the ProcessMaker instance unless your [user profile's](../../profile-settings.md#change-your-profile-settings) **Time zone** setting is specified.

Below the table, the history of the Request displays all Request actions to the time the selected Request was canceled. See [Request History](summary-for-in-progress-requests.md#request-history).

## Forms Associated with the Request

The **Forms** tab displays the ProcessMaker [Screen](../../../designing-processes/design-forms/what-is-a-form.md) associated with each Task that each Request participant submitted in the Request to that time. For example, if a Request participant entered information into a Screen, all Request participants can view the Request data that the Task assignee entered.

![&quot;Forms&quot; tab for an in-progress Request&apos;s summary](../../../.gitbook/assets/forms-tab-summary-requests.png)

The **Forms** tab displays the following summary in tabular format about submitted ProcessMaker Screens by Request participants to that time in the Request:

* **Screen:** The **Screen** column displays the name of each submitted ProcessMaker Screen in the selected Request.
* **Description:** The **Description** column displays the description of each ProcessMaker Screen.

{% hint style="info" %}
### View a ProcessMaker Screen and Its Submitted Request Data

To view a ProcessMaker Screen and the Request data submitted by a Request participant, click the **Details** icon![](../../../.gitbook/assets/details-collapsed-icon-summary-requests.png). The submitted ProcessMaker Screen displays.  
![](../../../.gitbook/assets/forms-tab-details-summary-requests.png) 

Click the **Details** icon![](../../../.gitbook/assets/details-expanded-icon-summary-requests.png)again to hide the displayed ProcessMaker Screen and its Request data.

### Print the ProcessMaker Screen and its Submitted Request Data

To print a ProcessMaker and its Request data, click the **Print** icon![](../../../.gitbook/assets/print-icon-summary-requests.png). A print preview displays in a new browser window from which you can select an accessible printer.
{% endhint %}

Below the table, the history of the Request displays all Request actions. See [Request History](summary-for-in-progress-requests.md#request-history).

{% hint style="info" %}
### There Are No Forms?

If the selected Request has no ProcessMaker Screens with submitted Request data, the following message displays: **No Data Available**.
{% endhint %}

## Request Participants

Each canceled Request displays a summary of the Request participants to the time the Request was canceled.

![Request participant summary for a canceled Request](../../../.gitbook/assets/canceled-request-information-requests.png)

The following summary displays about participants in a canceled Request:

* **Requested By:** The **Requested By** field displays the avatar and full name of the person who started the selected Request. Hover your cursor over a user's avatar to view that person's full name.
* **Participants:** The **Participants** field displays each Request participant's avatar in the selected Request to the time the Request was canceled. Hover your cursor over a user's avatar to view that person's full name.
* **Request cancellation date:** The date and time the Request was canceled displays below the **Participants** field. The time zone setting to display the time is according to the ProcessMaker instance unless your [user profile's](../../profile-settings.md#change-your-profile-settings) **Time zone** setting is specified.

## Request History

Below the tabular information summarizing the Request displays that Request's history: all Request actions to that time. The oldest Request actions display at the top of the Request history.

![Request history displays all actions in a Request, with the oldest actions at the top](../../../.gitbook/assets/request-history-requests.png)

The following information displays about each event in the Request history:

* **Request participant:** The Request participant who performed the action is represented by his or her avatar. Hover your cursor over a user's avatar to view that person's full name. If the ProcessMaker system performed an action by running a ProcessMaker Script or other automatic function, that action is represented by "S" avatar.
* **Date and time the action occurred:** To the right of the Request participant displays the date and time the Request action occurred. The time zone setting to display the time is according to the ProcessMaker instance unless your [user profile's](../../profile-settings.md#change-your-profile-settings) **Time zone** setting is specified.
* **Description of the action:** To the right of when the Request action occurred displays a description of that action. The ProcessMaker system generates this action description.

## Related Topics

{% page-ref page="../what-is-a-request.md" %}

{% page-ref page="../view-started-requests.md" %}

{% page-ref page="../view-completed-requests.md" %}

{% page-ref page="../view-all-requests.md" %}

{% page-ref page="summary-for-in-progress-requests.md" %}

{% page-ref page="summary-for-completed-requests.md" %}

{% page-ref page="summary-for-requests-with-errors.md" %}

{% page-ref page="../../../designing-processes/design-forms/what-is-a-form.md" %}

