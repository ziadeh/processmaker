---
description: >-
  Manage Watchers that monitor for Variable Value setting changes in your
  ProcessMaker Screens.
---

# Manage Watchers

## Overview

Use Watchers mode to add Watchers to that ProcessMaker Screen. During a [Request](../../../using-processmaker/requests/what-is-a-request.md) or while [previewing](screens-builder-modes.md#preview-mode) the ProcessMaker Screen, a Watcher monitors when the value of a control in that Screen changes or receives a value, acts upon a Data Connector or runs a [ProcessMaker Script](../../scripts/what-is-a-script.md) using that control's value, and then outputs its result to another Screen control.

A Watcher does the following, in this order during an in-progress Request or while previewing a ProcessMaker Screen:

1. The Watcher monitors when the value of a control in that ProcessMaker Screen changes or receives a value. This control is designated by its **Variable Value** setting.
2. The Watcher performs an action against a designated Data Connector or ProcessMaker Script as configured in that Watcher:
   * **Data Connector:** The Watcher acts upon an endpoint to access that Data Connector. The endpoints in this Data Connector may reference API endpoints, ProcessMaker Collection records, or other data source endpoints.
   * **ProcessMaker Script:** The Watcher runs the Script using the input data and Script configuration.
3. After the Watcher performs its action, it outputs its result to a designated ProcessMaker Screen control. This control is designated by its **Variable Value** setting. This control may be in that ProcessMaker Screen or another that is used during that Request. If outputting its result to a control not in that ProcessMaker Screen, the Watcher's result becomes part of the Request's data during an in-progress Request; if that **Variable Name** setting value matches that of a control during that Request, that Watcher's output value overwrites the target control's existing value. Note that previewing a Watcher when it outputs its result to a control not on that ProcessMaker Screen is not possible since a preview only applies to that Screen.

## Add a Watcher

{% hint style="info" %}
Your ProcessMaker user account or group membership must have the following permissions to add a Watcher to a ProcessMaker Screen unless your user account has the **Make this user a Super Admin** setting selected:

* Screens: View Screens
* Screens: Edit Screens

See the ProcessMaker [Screens](../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#screens) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

Follow these steps to add a Watcher to a ProcessMaker Screen:

1. [Open](../manage-forms/view-all-forms.md) the ProcessMaker Screen in which to add a Watcher. The ProcessMaker Screen is in [Design mode](screens-builder-modes.md#editor-mode).
2. Click the **Watchers** button![](../../../.gitbook/assets/watchers-button-screens-builder-processes.png). The **Watchers** screen displays all Watchers configured for this ProcessMaker Screen.  
   ![](../../../.gitbook/assets/watchers-screen-no-watchers-screens-builder-processes.png) 

   The following information displays about each Watcher:

   * **Name:** The **Name** column displays the name of the Watcher.
   * **Watching:** The **Watching** column displays the **Variable Name** setting value for the control that the Watcher monitors for value changes.
   * **Variable:** The **Variable** column displays the **Variable Name** setting for the control that the Watcher posts its output value after that Watcher performs its action.
   * **Script:** The **Script** column displays the name of the Data Source or ProcessMaker Script that the Watcher acts upon to determine its output value.

3. Click the **+Watcher** button. The **Watchers** screen displays. ![](../../../.gitbook/assets/watchers-configuration-screens-builder-processes.png) 
4. In the **Watcher Name** setting, enter the name of the Watcher. This is a required setting.
5. From the **Variable to Watch** drop-down menu, select which ProcessMaker Screen control by its **Variable Name** setting value the Watcher monitors for its value to change.
6. From the **Source** setting, select whether the Watcher acts upon a Data Connector or runs a ProcessMaker Script when the monitored control's value changes. Follow these guidelines:
   * **Data Connector:**
     1. From the **Source** drop-down menu, select a Data Connector from the **Data Connector** section upon which to act when the monitored control's value changes. The **Endpoint** setting displays below the **Source** drop-down menu.
     2. From the **Endpoint** drop-down menu, select which endpoint to act upon in the selected Data Connector. These endpoints are configured from the Data Connector itself. Depending on the Data Connector selected from the **Data Connector** section of the **Source** drop-down menu, these endpoints may reference API endpoints, ProcessMaker Collection records, or other data source endpoints.
     3. Optionally, in the **Input Data** setting, enter a valid JSON object the Watcher passes to the Data Connector prior to acting upon the selected endpoint. The Data Connector may reference ProcessMaker Screen control values by referencing their **Variable Name** setting values when placed within [mustache syntax](https://mustache.github.io/mustache.5.html). In the example below, `FullName` is the **Variable Name** setting value for a control to store a Request participant's full name:

        `{`

          `"Name": "{{ FullName }}"`

        `}`

     4. In the **Form Data** section, specify JSON object key-value pairs that map data from the Data Connector to the JSON data array you will specify in the **Output Variable Name** setting below.

        Follow these guidelines to add a JSON data object to map data from the Data Connector:

        1. From the **Form Data** section, click the **+Data** button. A new row displays settings to add a new JSON data object's key name and value. ![](../../../.gitbook/assets/key-value-form-data-watcher-configuration-screens-builder-processes.png) 
        2. In the **key** setting, enter the key name for that JSON data object.
        3. In the **value** setting, enter the value for that JSON data object.
        4. Optionally, to delete the JSON data object, click its **Delete** icon![](../../../.gitbook/assets/delete-record-record-list-control-screens-builder-processes.png).
        5. Repeat these guidelines as necessary for each JSON data object necessary to map to data from the Data Connector.

     5. In the **Output Variable Name** setting, enter the control by its **Variable Name** setting that the Watcher outputs the value of its result. When this Watcher triggers during a Request, the **Output Variable Name** setting value becomes a JSON data array in the Request data that contains the mapped JSON data objects specified in the **Form Data** section.
   * **ProcessMaker Script:**
     1. From the **Source** drop-down menu, select a ProcessMaker Script from the **Script** section to run when the monitored control's value changes.
     2. Optionally, in the **Input Data** setting, enter a valid JSON object the Watcher passes to the ProcessMaker Script prior to running as input data for the Script. The ProcessMaker Script may reference ProcessMaker Screen control values by referencing their **Variable Name** setting values when placed within [mustache syntax](https://mustache.github.io/mustache.5.html). In the example below, `FullName` is the **Variable Name** setting value for a control to store a Request participant's full name:

        `{`

          `"Name": "{{ FullName }}"`

        `}`

     3. Optionally, in the **Script Configuration** setting, include JSON configuration settings your ProcessMaker Script uses when it runs.
     4. In the **Output Variable** name setting, enter the control by its **Variable Name** setting value that the Watcher outputs the value of its result.
7. Select the **Run Synchronously** checkbox to perform the Watcher's action synchronously while the ProcessMaker Screen remains functional to the Screen user. If the **Run Synchronously** checkbox is not selected when the Watcher runs, the ProcessMaker Screen locks until the Watcher's action completes.
8. Click **Save**. The following message displays: **Watcher saved**.

## Edit a Watcher

{% hint style="info" %}
Your ProcessMaker user account or group membership must have the following permissions to edit a Watcher in a ProcessMaker Screen unless your user account has the **Make this user a Super Admin** setting selected:

* Screens: View Screens
* Screens: Edit Screens

See the ProcessMaker [Screens](../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#screens) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

Follow these steps to edit a Watcher in a ProcessMaker Screen:

1. [Open](../manage-forms/view-all-forms.md) the ProcessMaker Screen in which to edit a Watcher. The ProcessMaker Screen is in [Design mode](screens-builder-modes.md#editor-mode).
2. Click the **Watchers** button![](../../../.gitbook/assets/watchers-button-screens-builder-processes.png). The **Watchers** screen displays all Watchers configured for this ProcessMaker Screen.  
   ![](../../../.gitbook/assets/watchers-screen-screens-builder-processes.png) 

   The following information displays about each Watcher:

   * **Name:** The **Name** column displays the name of the Watcher.
   * **Watching:** The **Watching** column displays the **Variable Name** setting value for the control that the Watcher monitors for value changes.
   * **Variable:** The **Variable** column displays the **Variable Name** setting for the control that the Watcher posts its output value after that Watcher performs its action.
   * **Script:** The **Script** column displays the name of the Data Source or ProcessMaker Script that the Watcher acts upon to determine its output value.

3. Click the **Edit** icon![](../../../.gitbook/assets/edit-icon.png)for the Watch to edit. The **Watchers** screen displays that Watcher's settings. ![](../../../.gitbook/assets/watchers-configuration-screens-builder-processes.png) 
4. Edit the following settings about the Watcher as necessary:
   * In the **Watcher Name** setting, edit the name of the Watcher. This is a required setting.
   * From the **Variable to Watch** drop-down menu, select which ProcessMaker Screen control by its **Variable Name** setting value the Watcher monitors for its value to change.
   * From the **Source** setting, select whether the Watcher acts upon a Data Connector or runs a ProcessMaker Script when the monitored control's value changes. Follow these guidelines:
     * **Data Connector:**
       1. From the **Source** drop-down menu, select a Data Connector from the **Data Connector** section upon which to act when the monitored control's value changes. The **Endpoint** setting displays below the **Source** drop-down menu.
       2. From the **Endpoint** drop-down menu, select which endpoint to act upon in the selected Data Connector. These endpoints are configured from the Data Connector itself. Depending on the Data Connector selected from the **Data Connector** section of the **Source** drop-down menu, these endpoints may reference API endpoints, ProcessMaker Collection records, or other data source endpoints.
       3. Optionally, in the **Input Data** setting, enter a valid JSON object the Watcher passes to the Data Connector prior to acting upon the selected endpoint. The Data Connector may reference ProcessMaker Screen control values by referencing their **Variable Name** setting values when placed within [mustache syntax](https://mustache.github.io/mustache.5.html). In the example below, `FullName` is the **Variable Name** setting value for a control to store a Request participant's full name:

          `{`

            `"Name": "{{ FullName }}"`

          `}`

       4. In the **Form Data** section, specify JSON object key-value pairs that map data from the Data Connector to the JSON data array you will specify in the **Output Variable Name** setting below.

          Follow these guidelines to add a JSON data object to map data from the Data Connector:

          1. From the **Form Data** section, click the **+Data** button. A new row displays settings to add a new JSON data object's key name and value. ![](../../../.gitbook/assets/key-value-form-data-watcher-configuration-screens-builder-processes.png) 
          2. In the **key** setting, enter the key name for that JSON data object.
          3. In the **value** setting, enter the value for that JSON data object.
          4. Optionally, to delete the JSON data object, click its **Delete** icon![](../../../.gitbook/assets/delete-record-record-list-control-screens-builder-processes.png).
          5. Repeat these guidelines as necessary for each JSON data object necessary to map to data from the Data Connector.

       5. In the **Output Variable Name** setting, enter the control by its **Variable Name** setting that the Watcher outputs the value of its result. When this Watcher triggers during a Request, the **Output Variable Name** setting value becomes a JSON data array in the Request data that contains the mapped JSON data objects specified in the **Form Data** section.
     * **ProcessMaker Script:**
       1. From the **Source** drop-down menu, select a ProcessMaker Script from the **Script** section to run when the monitored control's value changes.
       2. Optionally, in the **Input Data** setting, enter a valid JSON object the Watcher passes to the ProcessMaker Script prior to running as input data for the Script. The ProcessMaker Script may reference ProcessMaker Screen control values by referencing their **Variable Name** setting values when placed within [mustache syntax](https://mustache.github.io/mustache.5.html). In the example below, `FullName` is the **Variable Name** setting value for a control to store a Request participant's full name:

          `{`

            `"Name": "{{ FullName }}"`

          `}`

       3. Optionally, in the **Script Configuration** setting, include JSON configuration settings your ProcessMaker Script uses when it runs.
       4. In the **Output Variable** name setting, enter the control by its **Variable Name** setting value that the Watcher outputs the value of its result.
5. Select the **Run Synchronously** checkbox to perform the Watcher's action synchronously while the ProcessMaker Screen remains functional to the Screen user. If the **Run Synchronously** checkbox is not selected when the Watcher runs, the ProcessMaker Screen locks until the Watcher's action completes.
6. Click **Save**. The following message displays: **Watcher saved**.

## Delete a Watcher

{% hint style="info" %}
Your ProcessMaker user account or group membership must have the following permissions to edit a Watcher in a ProcessMaker Screen unless your user account has the **Make this user a Super Admin** setting selected:

* Screens: View Screens
* Screens: Edit Screens

See the ProcessMaker [Screens](../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#screens) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

Follow these steps to edit a Watcher in a ProcessMaker Screen:

1. [Open](../manage-forms/view-all-forms.md) the ProcessMaker Screen in which to edit a Watcher. The ProcessMaker Screen is in [Design mode](screens-builder-modes.md#editor-mode).
2. Click the **Watchers** button![](../../../.gitbook/assets/watchers-button-screens-builder-processes.png). The **Watchers** screen displays all Watchers configured for this ProcessMaker Screen. ![](../../../.gitbook/assets/watchers-screen-screens-builder-processes.png)
3. Click the **Delete** icon![](../../../.gitbook/assets/trash-icon-process-modeler-processes.png)for the Watcher to delete. The following message displays: **Watcher deleted**.

## Related Topics

{% page-ref page="what-is-screens-builder.md" %}

{% page-ref page="preview-a-screen.md" %}

{% page-ref page="control-descriptions/" %}

{% page-ref page="../manage-forms/view-all-forms.md" %}

{% page-ref page="types-for-screens.md" %}

{% page-ref page="screens-builder-modes.md" %}

{% page-ref page="validate-your-screen.md" %}

{% page-ref page="add-a-new-page-to-a-screen.md" %}

{% page-ref page="manage-computed-properties.md" %}

{% page-ref page="add-custom-css-to-a-screen.md" %}

{% page-ref page="save-a-screen.md" %}

{% page-ref page="best-practices.md" %}

