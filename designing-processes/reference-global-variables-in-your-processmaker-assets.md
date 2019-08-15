---
description: >-
  Reference the values in ProcessMaker Global Variables for use in your PMQL
  queries. Furthermore, reference ProcessMaker Global Variables in Scripts and
  Screens during in-progress Requests.
---

# Reference Global Variables in ProcessMaker Assets

## Overview

ProcessMaker uses a set of Global Variables that you may reference in ProcessMaker Query Language \(PMQL\) queries and in your ProcessMaker assets, such as ProcessMaker [Scripts](scripts/what-is-a-script.md) and [Screens](design-forms/what-is-a-form.md).

ProcessMaker uses a schema-less JSON data model from which to read, write, and store Request data. Since the JSON data model is schema-less, meaning that it does not require a specific schema or structure from which ProcessMaker assets must conform, the JSON data model is structured from the object elements in ProcessMaker assets used in a Request, such as the **Variable Name** setting values in a ProcessMaker Screen or variables a ProcessMaker Script creates.

However, ProcessMaker uses a set of Global Variables that become part of the JSON data model for all Requests. ProcessMaker uses these Global Variables to store ProcessMaker user, Process, and Request related data for all Requests. During an in-progress Request, these ProcessMaker Global Variables are updated. All ProcessMaker Global Variables are preceded by an underscore \(`_`\) character in the JSON data model.

ProcessMaker [users](../processmaker-administration/add-users/what-is-a-user.md) that have the [Requests: Edit Request Data](../processmaker-administration/permission-descriptions-for-users-and-groups.md#requests) permission may view the JSON data model for a completed Request. This JSON data model displays from the [**Data** tab in a completed Request's summary](../using-processmaker/requests/request-details/summary-for-completed-requests.md#editable-request-data). Below is an example.

![JSON data model in a Completed Request, as viewed from the &quot;Data&quot; tab](../.gitbook/assets/data-tab-completed-request-information-requests.png)

## How to Use Global Variables

Use ProcessMaker Global Variables in a variety of ways in ProcessMaker and in ProcessMaker assets.

### Reference in PMQL Queries for Request and Task Searches

Reference ProcessMaker Global Variables to compose ProcessMaker Query Language \(PMQL\) advanced queries for [Request searches](../using-processmaker/requests/search-for-a-request.md#advanced-search-for-a-request) and [Task searches](../using-processmaker/task-management/search-for-a-task.md#advanced-search-for-a-task).

### Mock in Script Testing

{% hint style="info" %}
Your user account or group membership must have the following permissions to edit a [ProcessMaker Script](scripts/what-is-a-script.md):

* Scripts: View Scripts
* Scripts: Edit Scripts

See the ProcessMaker [Scripts](../processmaker-administration/permission-descriptions-for-users-and-groups.md#scripts) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

[Mock ProcessMaker Global Variable values while mocking Request data](scripts/scripts-editor.md#mock-request-data-coming-into-the-processmaker-script) during testing to ensure your ProcessMaker Script runs as you intended.

### Reference in Screens

{% hint style="info" %}
Your user account or group membership must have the following permissions to edit a ProcessMaker Screen control:

* Screens: View Screens
* Screens: Edit Screens

See the ProcessMaker [Screens](../processmaker-administration/permission-descriptions-for-users-and-groups.md#screens) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

Reference ProcessMaker Global Variables in ProcessMaker Screens in the following ways:

* \*\*\*\*[**Text controls**](design-forms/screens-builder/control-descriptions/text-control-settings.md#control-description)**:** Reference a ProcessMaker Global Variable's value in a Text control through the [**Text Content** setting](design-forms/screens-builder/control-descriptions/text-control-settings.md#settings).
* \*\*\*\*[**Computed Properties**](design-forms/screens-builder/manage-computed-properties.md)**:** [Reference a ProcessMaker Global Variable's value from a computed Property](design-forms/screens-builder/manage-computed-properties.md#add-a-computed-property). Use JavaScript to return a ProcessMaker Global Variable's value, then store it in a computed Property.

## Example of All Global Variables

Below is an example that contains all ProcessMaker Global Variables. Each contains a value as it might be read from the [**Data** tab in a completed Request summary](../using-processmaker/requests/request-details/summary-for-completed-requests.md#editable-request-data). This example indicates the JSON structure for each ProcessMaker Global Variable.

```text
{
    "_user": {
        "id": 1,
        "fax": "723.743.8058 x00631",
        "cell": "585.620.0749",
        "city": "Donnaland",
        "email": "lauretta.okuneva@robel.com",
        "media": [],
        "phone": "1-316-934-1911 x762",
        "state": "WV",
        "title": "Customer Service Representative",
        "avatar": "",
        "postal": "97304-3230",
        "status": "ACTIVE",
        "address": "8547 Marielle Hills",
        "country": "US",
        "fullname": "admin admin",
        "language": "en",
        "lastname": "admin",
        "timezone": "America/Los_Angeles",
        "username": "admin",
        "birthdate": "1962-10-23",
        "firstname": "admin",
        "created_at": "2019-07-19T08:13:13-07:00",
        "deleted_at": null,
        "expires_at": null,
        "updated_at": "2019-07-19T08:14:35-07:00",
        "loggedin_at": "2019-07-19T08:14:35-07:00",
        "datetime_format": "m/d/Y H:i",
        "is_administrator": true
    },
    "_request": {
        "id": 1,
        "name": "Pet adoption",
        "status": "ACTIVE",
        "process": {
            "id": 1,
            "name": "Pet adoption",
            "status": "ACTIVE",
            "user_id": 1,
            "created_at": "2019-03-25T10:50:46-07:00",
            "deleted_at": null,
            "updated_at": "2019-07-19T08:15:18-07:00",
            "description": "Pet rescue",
            "cancel_screen_id": null,
            "pause_timer_start": 0,
            "process_category_id": 1,
            "has_timer_start_events": false
        },
        "user_id": 1,
        "created_at": "2019-07-19T08:15:24-07:00",
        "process_id": 1,
        "updated_at": "2019-07-19T08:15:24-07:00",
        "callable_id": "ProcessId",
        "initiated_at": "2019-07-19T08:15:24-07:00"
    }
}
```

## Global Variable Descriptions

Below are descriptions of each ProcessMaker Global Variable. Since these descriptions are outlined in tabular format, they do not imply how they are structured in the JSON data model. Refer to the example in the [Example of All Global Variables](reference-global-variables-in-your-processmaker-assets.md#example-of-all-global-variables) section to see how each object element is structured in the overall JSON data model.

### `_user` Global Variable

The `_user` Global Variable contains data about the current ProcessMaker user assigned a [Task](process-design/model-your-process/process-modeling-element-descriptions.md#task) element or [Manual Task](process-design/model-your-process/process-modeling-element-descriptions.md#manual-task) element during an in-progress Request. Use JSON dot notation to reference specific data in a Global Variable. Example: `_user.fullname`.

| Global Variable Name | Description |
| :--- | :--- |
| `_user.id` | Identifier for the ProcessMaker user in that ProcessMaker instance. |
| `_user.fax` | Fax number as entered into the ProcessMaker [user's profile](../using-processmaker/profile-settings.md). |
| `_user.cell` | Cell number as entered into the ProcessMaker user's profile. |
| `_user.city` | City as entered into the ProcessMaker user's profile. |
| `_user.email` | Email address as entered into the ProcessMaker user's profile. |
| `_user.media` |  |
| `_user.phone` | Telephone number as entered into the ProcessMaker user's profile. |
| `_user.state` | State, region, or province as entered into the ProcessMaker user's profile. |
| `_user.title` | Job title as entered into the ProcessMaker user's profile. |
| `_user.avatar` | Image reference for the ProcessMaker user's avatar as entered into the ProcessMaker user's profile. |
| `_user.postal` | Business postal code as entered into the ProcessMaker user's profile. |
| `_user.status` | Status of the ProcessMaker user's account \(active or inactive\). |
| `_user.address` | Business address as entered into the ProcessMaker user's profile. |
| `_user.fullname` | Full name of the ProcessMaker user as entered into the ProcessMaker user's profile. |
| `_user.language` | Language to display ProcessMaker labels as entered into the ProcessMaker user's profile. |

### `_request` Global Variable

The `_request` Global Variable contains data about the current [Request](../using-processmaker/requests/what-is-a-request.md) or [Process](viewing-processes/what-is-a-process.md) during an in-progress Request. Use JSON dot notation to reference specific data in a Global Variable. Example: `_request.process.name`.

| Global Variable Name | Description |
| :--- | :--- |
|  |  |

## Related Topics



