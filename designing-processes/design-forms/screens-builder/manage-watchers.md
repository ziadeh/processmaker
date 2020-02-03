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
   * **Data Source:** The Watcher makes an API call as it has been configured to access that Data Source.
   * **ProcessMaker Script:** The Watcher runs the Script using the input data and Script configuration as it has been configured.
3. After the Watcher performs its action, it outputs its result to a designated ProcessMaker Screen control. This control is designated by its **Variable Value** setting. This control may be in that ProcessMaker Screen or another that is used during that Request. If outputting its result to a control not in that ProcessMaker Screen, the Watcher's result becomes part of the Request's data during an in-progress Request; if that **Variable Name** setting value matches that of a control during that Request, that Watcher's output value overwrites the target control's existing value. Note that previewing a Watcher when it outputs its result to a control not on that ProcessMaker Screen is not possible since a preview only applies to that Screen.

## Add a Watcher

{% hint style="info" %}
Your ProcessMaker user account or group membership must have the following permissions to add a Watcher to a ProcessMaker Screen unless your user account has the **Make this user a Super Admin** setting selected:

* Screens: View Screens
* Screens: Edit Screens

See the ProcessMaker [Screens](../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#screens) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

Follow these steps to add a Watcher:



## View a Watcher's Details



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

