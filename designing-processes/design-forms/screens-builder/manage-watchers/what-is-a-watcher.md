---
description: Understand how to use Watchers in your ProcessMaker Screens.
---

# What is a Watcher?

## Overview

Use Watchers mode to add Watchers to that ProcessMaker Screen. During a [Request](../../../../using-processmaker/requests/what-is-a-request.md) or while [previewing](../screens-builder-modes.md#preview-mode) the ProcessMaker Screen, a Watcher monitors when the value of a control in that Screen changes or receives a value, acts upon a [ProcessMaker Data Connector](../../../data-connector-management/what-is-a-data-connector.md) or runs a [ProcessMaker Script](../../../scripts/what-is-a-script.md) using that control's value, and then outputs its result to another Screen control.

A Watcher does the following, in this order during an in-progress Request or while previewing a ProcessMaker Screen:

1. The Watcher monitors when the value of a control in that ProcessMaker Screen changes or receives a value. This control is designated by its **Variable Value** setting.
2. The Watcher performs an action against a designated ProcessMaker Data Connector or ProcessMaker Script as configured in that Watcher:
   * **ProcessMaker Data Connector:** The Watcher acts upon an endpoint to access that ProcessMaker Data Connector. The endpoints in this ProcessMaker Data Connector may reference API endpoints, ProcessMaker Collection records, or other data source endpoints.
   * **ProcessMaker Script:** The Watcher runs the Script using the input data and Script configuration.
3. After the Watcher performs its action, it outputs its result to a designated ProcessMaker Screen control. This control is designated by its **Variable Value** setting. This control may be in that ProcessMaker Screen or another that is used during that Request. If outputting its result to a control not in that ProcessMaker Screen, the Watcher's result becomes part of the Request's data during an in-progress Request; if that **Variable Name** setting value matches that of a control during that Request, that Watcher's output value overwrites the target control's existing value. Note that previewing a Watcher when it outputs its result to a control not on that ProcessMaker Screen is not possible since a preview only applies to that Screen.

## Related Topics

{% page-ref page="what-is-a-watcher.md" %}

{% page-ref page="add-a-watcher-to-a-screen.md" %}

{% page-ref page="search-for-a-watcher.md" %}

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

