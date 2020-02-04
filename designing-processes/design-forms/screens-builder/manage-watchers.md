---
description: >-
  Manage Watchers that monitor for Variable Value setting changes in your
  ProcessMaker Screens.
---

# Manage Watchers

## Overview

Use Watchers mode to add Watchers to that ProcessMaker Screen. During a [Request](../../../using-processmaker/requests/what-is-a-request.md) or while [previewing](screens-builder-modes.md#preview-mode) the ProcessMaker Screen, a Watcher monitors when the value of a control changes or receives a value, references a Data Source or [ProcessMaker Script](../../scripts/what-is-a-script.md) to perform an action using that control's value, and then outputs its result to another Screen control.

A Watcher does the following, in this order during an in-progress Request or while previewing a ProcessMaker Screen:

1. The Watcher monitors when the value of a control in that ProcessMaker Screen changes or receives a value. This control is designated by its **Variable Value** setting.
2. The Watcher performs an action against a designated Data Source or ProcessMaker Script as configured in that Watcher:
   * **Data Source:** The Watcher calls an API endpoint to access that Data Source, then gets, creates, updates, or deletes data as per that endpoint's function.
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
5. From the **Variable to Watch** drop-down menu, select which ProcessMaker Screen control, by its **Variable Name** setting value, the Watcher monitors for its value to change.
6. Select whether the Watcher acts upon a Data Connector or a ProcessMaker Script when the monitored control's value changes. Follow these guidelines:
   * **Data Source:**
     1. From the **Script Source** drop-down menu, select a Data Connector from the **Data Source** section upon which to act when the monitored control's value changes.
     2. 
   * **Script:**
     1. From the **Script Source** drop-down menu, select a ProcessMaker Script from the **Script** section to run when the monitored control's value changes.
     2. Optionally, in the **Input Data** setting, enter a valid JSON object the Watcher passes to the ProcessMaker Script prior to running as input data for the Script. The ProcessMaker Script may access ProcessMaker Screen control values by referencing their **Variable Name** setting values in [mustache syntax](https://mustache.github.io/mustache.5.html). In the example below, `FullName` is the **Variable Name** setting value for a control to store a Request participant's full name:

        `{`

          `"Name": "{{ FullName }}"`

        `}`

     3. Optionally, in the **Script Configuration** setting, include JSON configuration settings your ProcessMaker Script uses when it runs.
7. In the **Output Variable** name setting, enter the control, by its **Variable Name** setting value, the Watcher outputs the value of its result.
8. Select the **Run Synchronously** checkbox to perform the Watcher's action synchronously while the ProcessMaker Screen remains functional to the Screen user. If the **Run Synchronously** checkbox is not selected when the Watcher runs, the ProcessMaker Screen locks until the Watcher's action completes.
9. Click **Save**.

## Edit a Watcher



## Delete a Watcher



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

