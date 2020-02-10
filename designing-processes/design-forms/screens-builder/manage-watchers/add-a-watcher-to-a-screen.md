---
description: Add a Watcher to a ProcessMaker Screen.
---

# Add a Watcher to a Screen

## Add a Watcher to a ProcessMaker Screen

{% hint style="info" %}
### Permissions Required

Your ProcessMaker user account or group membership must have the following permissions to add a Watcher to a ProcessMaker Screen unless your user account has the **Make this user a Super Admin** setting selected:

* Screens: View Screens
* Screens: Edit Screens

See the ProcessMaker [Screens](../../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#screens) permissions or ask your ProcessMaker Administrator for assistance.

### Topic Update

This topic has been updated for the ProcessMaker 4.0.1 release.
{% endhint %}

Follow these steps to add a Watcher to a ProcessMaker Screen:

1. [Open](../../manage-forms/view-all-forms.md) the ProcessMaker Screen in which to add a Watcher. The ProcessMaker Screen is in [Design mode](../screens-builder-modes.md#editor-mode).
2. Click the **Watchers** button![](../../../../.gitbook/assets/watchers-button-screens-builder-processes.png). The **Watchers** screen displays all Watchers configured for this ProcessMaker Screen. ![](../../../../.gitbook/assets/watchers-screen-no-watchers-screens-builder-processes.png)
3. Click the **+Watcher** button. The **Watchers** screen displays. ![](../../../../.gitbook/assets/watchers-configuration-screens-builder-processes.png) 
4. In the **Watcher Name** setting, enter the name of the Watcher. This is a required setting.
5. From the **Variable to Watch** drop-down menu, select which ProcessMaker Screen control by its **Variable Name** setting value the Watcher monitors for its value to change.
6. From the **Source** setting, select whether the Watcher acts upon a [ProcessMaker Data Connector](../../../data-connector-management/what-is-a-data-connector.md) or runs a [ProcessMaker Script](../../../scripts/what-is-a-script.md) when the monitored control's value changes. Follow these guidelines:
   * **ProcessMaker Data Connector:**
     1. From the **Source** drop-down menu, select a ProcessMaker Data Connector from the **Data Connector** section upon which to act when the monitored control's value changes. The **Endpoint** setting displays below the **Source** drop-down menu.
     2. From the **Endpoint** drop-down menu, select which endpoint to act upon in the selected ProcessMaker Data Connector. These endpoints are configured from the ProcessMaker Data Connector itself. Depending on the ProcessMaker Data Connector selected from the **Data Connector** section of the **Source** drop-down menu, these endpoints may reference API endpoints or ProcessMaker Collection records.
     3. Optionally, in the **Input Data** setting, enter a valid JSON object the Watcher passes to the ProcessMaker Data Connector prior to acting upon the selected endpoint. The ProcessMaker Data Connector may reference ProcessMaker Screen control values by referencing their **Variable Name** setting values when placed within [mustache syntax](https://mustache.github.io/mustache.5.html). In the example below, `FullName` is the **Variable Name** setting value for a control to store a Request participant's full name:

        `{`

          `"Name": "{{ FullName }}"`

        `}`

     4. In the **Form Data** section, specify JSON object key-value pairs that map data from the ProcessMaker Data Connector to the JSON data array you will specify in the **Output Variable Name** setting below.

        Follow these guidelines to add a JSON data object to map data from the ProcessMaker Data Connector:

        1. From the **Form Data** section, click the **+Data** button. A new row displays settings to add a new JSON data object's key name and value. ![](../../../../.gitbook/assets/key-value-form-data-watcher-configuration-screens-builder-processes.png) 
        2. In the **key** setting, enter the key name for that JSON data object.
        3. In the **value** setting, enter the value for that JSON data object.
        4. Optionally, to delete the JSON data object, click its **Delete** icon![](../../../../.gitbook/assets/delete-record-record-list-control-screens-builder-processes.png).
        5. Repeat these guidelines as necessary for each JSON data object necessary to map to data from the ProcessMaker Data Connector.

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
8. Click **Save**. The Watcher displays in the **Watchers** screen. The following message displays: **Watcher saved**.

{% hint style="info" %}
Ensure to [save your ProcessMaker Screen](../save-a-screen.md#save-a-processmaker-screen). The Watcher is not added to your ProcessMaker Screen until you save it. Doing so will save your work if that your [session expires](../../../../using-processmaker/session-timeout-warning.md#session-timeout-warning).
{% endhint %}

![Watchers screen with a new Watcher](../../../../.gitbook/assets/watchers-screen-screens-builder-processes.png)

## Related Topics

{% page-ref page="what-is-a-watcher.md" %}

{% page-ref page="view-watchers-for-a-screen.md" %}

{% page-ref page="edit-a-watcher-for-a-screen.md" %}

{% page-ref page="delete-a-watcher-from-a-screen.md" %}

{% page-ref page="../what-is-screens-builder.md" %}

{% page-ref page="../preview-a-screen.md" %}

{% page-ref page="../control-descriptions/" %}

{% page-ref page="../../manage-forms/view-all-forms.md" %}

{% page-ref page="../types-for-screens.md" %}

{% page-ref page="../screens-builder-modes.md" %}

{% page-ref page="../validate-your-screen.md" %}

{% page-ref page="../add-a-new-page-to-a-screen.md" %}

{% page-ref page="../manage-computed-properties/" %}

{% page-ref page="../add-custom-css-to-a-screen.md" %}

{% page-ref page="../save-a-screen.md" %}

{% page-ref page="../best-practices.md" %}

