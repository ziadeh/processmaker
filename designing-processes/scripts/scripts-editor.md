---
description: >-
  Develop and test your ProcessMaker Script in a secure and isolated
  environment.
---

# Scripts Editor

## Overview

{% hint style="info" %}
Your user account or group membership must have the following permissions to create or edit a [ProcessMaker Script](what-is-a-script.md):

* Scripts: View Scripts
* Scripts: Create Scripts
* Scripts: Edit Scripts

See the ProcessMaker [Scripts](../../processmaker-administration/permission-descriptions-for-users-and-groups.md#scripts) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

Use Scripts Editor to develop and test your ProcessMaker Scripts. Any ProcessMaker Script can be used in any Process in your organization. Scripts Editor supports PHP, Lua, and JavaScript programming languages in the ProcessMaker open-source edition.

Scripts Editor evaluates a ProcessMaker Script securely and in isolation. This ensures that any malicious script that anyone in your organization might inadvertently introduce to ProcessMaker does not affect the ProcessMaker application or its environment.

ProcessMaker Scripts are developed and tested in the same environment.

{% hint style="info" %}
Access Scripts Editor in the following ways:

* [Create a new ProcessMaker Script.](manage-scripts/create-a-new-script.md#create-a-new-processmaker-script)
* [Edit an existing ProcessMaker Script.](manage-scripts/edit-a-script.md#edit-a-processmaker-script)
{% endhint %}

Below is Scripts Editor displaying a ProcessMaker Script written in PHP.

![Scripts Editor](../../.gitbook/assets/scripts-editor-processes.png)

## Scripts Editor Usage Guidelines

Follow these guidelines to develop and test ProcessMaker Scripts in Scripts Editor.

### Develop Your ProcessMaker Script

Develop the ProcessMaker Script below the script's name and language description. Use the scroll panel to navigate to script not currently displayed. This is useful especially when you are editing a long ProcessMaker Script.

### Mock Request Data Coming Into the ProcessMaker Script

Use the **Sample Input** panel to mock [Request](../../using-processmaker/requests/what-is-a-request.md) data that comes into the ProcessMaker Script.

{% hint style="info" %}
Define the variables in a [ProcessMaker Screen](../design-forms/what-is-a-form.md) in the **Inspector** panel when you configure its controls. See [information about each control](../design-forms/screens-builder/control-descriptions/).
{% endhint %}

Follow these guidelines to mock Request data coming into your ProcessMaker Script:

1. [Open the ProcessMaker Screen](../design-forms/manage-forms/edit-a-screen.md) in which to view its JSON data model.
2. Enter [Preview mode](../design-forms/screens-builder/preview-a-screen.md) on the ProcessMaker Screen page to view its JSON data model. Click the **Preview** button from Screen Builder's top menu to enter Preview mode.
3. Enter values into the control fields as if you were using the ProcessMaker Screen in a Request. In the **Data Preview** panel, the JSON data model displays the key-value pairs in each object element. The keys' values are those you enter in the ProcessMaker Screen preview. Understand what the key names are. Each key is derived from a ProcessMaker Screen control's **Variable Name** value. Use these key names as variables in your ProcessMaker Script.

   The JSON data model within a ProcessMaker Screen becomes the variables in any [Task element](../process-design/model-your-process/add-and-configure-task-elements.md#select-the-processmaker-screen-for-a-task-element) of a Process model that uses that Screen. Use these variables to capture what Request participants enter into a ProcessMaker Screen as input data to a ProcessMaker Script.

4. After you have entered values into the ProcessMaker Screen in Preview mode, the entire JSON data model displays in the **Data Preview** panel. Copy the JSON data model.
5. Paste the JSON data model into the **Sample Input** panel in Scripts Editor. If you use any variables as defined in the JSON data model in your ProcessMaker Script, Scripts Editor uses those variable values during script testing.
6. Optionally, mock the [ProcessMaker Magic Variables](../reference-global-variables-in-your-processmaker-assets.md) that your ProcessMaker Script would reference during an in-progress Request. ProcessMaker uses a set of Magic Variables that become part of the JSON data model for all Requests. ProcessMaker uses these Magic Variables to store ProcessMaker user, Process, and Request related data for all Requests. During an in-progress Request, these ProcessMaker Magic Variables are updated. All ProcessMaker Magic Variables are preceded by an underscore \(`_`\) character in the JSON data model. Enter the ProcessMaker Magic Variable into the **Sample Input** panel as part of the JSON data model, and then enter mock values for each. See [Magic Variable Descriptions](../reference-global-variables-in-your-processmaker-assets.md#global-variable-descriptions).
7. Click **Run**.
8. In the **Output** panel, view the mocked Request data.

### Enter Other JSON Data as Input to Your ProcessMaker Script

Use the **Configuration** panel to include JSON configuration settings your ProcessMaker Script uses when it runs. For example, include the Client ID and Client Secret values in JSON format for OAuth 2.0 verification to a third-party service's API your ProcessMaker Script must access to access the API. By entering these values into the **Configuration** panel, you can verify during testing that these values are valid for the third-party service.

A ProcessMaker Script may access ProcessMaker Screen control values during a Request by referencing their **Variable Name** setting values using [mustache syntax](https://mustache.github.io/mustache.5.html). In the example below, `FullName` is the **Variable Name** setting value for a control to store a Request participant's full name:

```text
{
    "Name": "{{ FullName }}"
}
```

### Test Your ProcessMaker Script

Click the **Run** button to test your ProcessMaker Script. Scripts Editor evaluates any JSON data entered into the **Configuration** and **Sample Input** panels.

If the ProcessMaker Script evaluates successfully, its output displays in the **Output** panel. If the ProcessMaker Script does not evaluate successfully, the language engine evaluating the script displays an error.

### Pass Request Data Into Your ProcessMaker Script

Pass Request-related data into your ProcessMaker Script in the following ways:

* **Request data:** ProcessMaker uses a schema-less JSON data model from which to read, write, and store Request data. Since the JSON data model is schema-less, meaning that it does not require a specific schema or structure from which ProcessMaker assets must conform, the JSON data model is structured from the JSON objects in ProcessMaker assets used in a Request, such as the **Variable Name** setting values in a ProcessMaker Screen or variables a ProcessMaker Script creates. When an in-progress Request routes through the Process, Request data aggregates into the JSON data model, thereby becoming Request data. ProcessMaker [users](../../processmaker-administration/add-users/what-is-a-user.md) that have the [Requests: Edit Request Data](../../processmaker-administration/permission-descriptions-for-users-and-groups.md#requests) permission may view the JSON data model for a completed Request. This JSON data model displays from the [**Data** tab in a completed Request's summary](../../using-processmaker/requests/request-details/summary-for-completed-requests.md#editable-request-data). Below is an example. ProcessMaker Scripts can call Request data by referencing these JSON objects derived from **Variable Name** setting values in ProcessMaker Screens.

  ![JSON data model in a Completed Request, as viewed from the &quot;Data&quot; tab](../../.gitbook/assets/data-tab-completed-request-information-requests.png)

* **ProcessMaker Magic Variables:** ProcessMaker uses a set of Magic Variables that become part of the JSON data model for all Requests. ProcessMaker uses these Magic Variables to store ProcessMaker user, Process, and Request related data for all Requests. During an in-progress Request, these ProcessMaker Magic Variables are updated. All ProcessMaker Magic Variables are preceded by an underscore \(`_`\) character in the JSON data model. See [Reference Magic Variables in ProcessMaker Assets](../reference-global-variables-in-your-processmaker-assets.md).
* **ProcessMaker Environment Variables:** The sensitive information that a [ProcessMaker Environment Variable](../environment-variable-management/what-is-an-environment-variable.md) represents can pass to a ProcessMaker Script when it runs. Usage depends on the programming language that the ProcessMaker Script uses. In the usage examples below, `ENV_VAR_NAME` represents the name of the ProcessMaker Environment Variable.
  * **PHP:** `getenv('ENV_VAR_NAME')`
  * **Lua:** `os.getenv("ENV_VAR_NAME")`
  * **JavaScript:** `process.env['ENV_VAR_NAME']`

ProcessMaker uses two global variables that can ProcessMaker Scripts can call. Variable usage depends on the programming language that the ProcessMaker Script uses. See [ProcessMaker Variable Syntax, Usage, and Examples](scripts-editor.md#processmaker-variable-syntax-usage-and-examples). Below is a description of these global variables:

* **Data:** The `data` variable contains all Request data to the moment a ProcessMaker Script runs.
* **Config:** The `config` variable contains any special configuration to be passed to the ProcessMaker Script prior to it running.

#### ProcessMaker Variable Syntax, Usage, and Examples

This section outlines how to use ProcessMaker variables in programming languages that ProcessMaker supports. In the examples provided, refer to the following sample JSON data model that represents example Request data:

{% code title="Example Request data in a sample JSON data model" %}
```text
{
"Submit": null,
"VendorName": "My Company",
"ContractNumber": "5551231234",
"name": "Louis"
}
```
{% endcode %}

Refer to the tabs below how to use ProcessMaker variables in supported programming languages.

{% tabs %}
{% tab title="PHP" %}
### data

{% code title="Syntax" %}
```text
$data
```
{% endcode %}

{% code title="Usage" %}
```php
return $data[key]
```
{% endcode %}

### config

{% code title="Syntax" %}
```text
$config
```
{% endcode %}

### Output

{% code title="Output based on example Request data" %}
```text
{
  "output": "Louis"
}
```
{% endcode %}
{% endtab %}

{% tab title="Lua" %}
### data

{% code title="Syntax and usage" %}
```lua
return {data, global variable set to}
```
{% endcode %}

### config

{% code title="Syntax and usage" %}
```text
config, global variable set to: {"some_key": "baz"}
```
{% endcode %}

### Example

{% code title="Example for data and config variables" %}
```lua
return {foo=data.foo, config_var=config.some_key}
```
{% endcode %}

### Output

{% code title="Output based on example Request data" %}
```text
{
  "output": {
    "foo": "bar",
    "config_var": "baz"
  }
}
```
{% endcode %}
{% endtab %}

{% tab title="JavaScript" %}
### data

{% code title="Syntax and usage" %}
```text
data, global variable set to: {"foo":"bar"}
```
{% endcode %}

### config

{% code title="Syntax and usage" %}
```text
config, global variable set to: {"some_key": "baz"}
```
{% endcode %}

### Examples

{% code title="Example 1" %}
```javascript
return { 'foo': data['foo'], 'config_var': config['some_key'] };
```
{% endcode %}

{% code title="Example 2" %}
```javascript
return { 'foo': data.foo, 'config_var': config.some_key };
```
{% endcode %}

{% code title="Example in a promise" %}
```javascript
return new Promise((resolve, reject) => {
  resolve({'foo': data.foo, 'config_var': config.some_key});
})
```
{% endcode %}

### Output

{% code title="Output based on example Request data" %}
```text
{
  "output": {
    "foo": "bar",
    "config_var": "baz"
  }
}
```
{% endcode %}
{% endtab %}
{% endtabs %}

### Save Your ProcessMaker Script

Click the **Save** icon![](../../.gitbook/assets/save-icon-processes.png)from Script Editor's top menu to save the ProcessMaker Script.

## Related Topics

{% page-ref page="what-is-a-script.md" %}

{% page-ref page="manage-scripts/manage-script-categories/" %}

{% page-ref page="manage-scripts/view-all-scripts.md" %}

{% page-ref page="manage-scripts/create-a-new-script.md" %}

{% page-ref page="manage-scripts/search-for-a-script.md" %}

{% page-ref page="manage-scripts/edit-script-configuration.md" %}

{% page-ref page="manage-scripts/edit-a-script.md" %}

{% page-ref page="manage-scripts/duplicate-a-script.md" %}

{% page-ref page="manage-scripts/remove-a-script.md" %}

{% page-ref page="../../using-processmaker/requests/what-is-a-request.md" %}

{% page-ref page="../process-design/model-your-process/add-and-configure-task-elements.md" %}

