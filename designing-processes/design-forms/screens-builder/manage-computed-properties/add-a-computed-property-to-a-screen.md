---
description: Add a Calculated Property to a ProcessMaker Screen.
---

# Add a Calculated Property for a Screen

## Add a Calculated Property

{% hint style="info" %}
Your ProcessMaker user account or group membership must have the following permissions to add a Calculated Property for a ProcessMaker Screen unless your user account has the **Make this user a Super Admin** setting selected:

* Screens: Edit Screens
* Screens: View Screens

See the ProcessMaker [Screens](../../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#screens) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

Follow these steps to add a Calculated Property for a ProcessMaker Screen:

1. [Open](../../manage-forms/view-all-forms.md) the ProcessMaker Screen in which to add a Calculated Property. The ProcessMaker Screen is in [Design mode](../screens-builder-modes.md#editor-mode).
2. [View the Calculated Properties for that ProcessMaker Screen](view-computed-properties-for-a-screen.md#view-the-computed-properties-for-a-processmaker-screen). The **Calculated Properties** screen displays all Calculated Properties configured for this ProcessMaker Screen. If no Calculated Properties have been configured for this ProcessMaker Screen, **No Data Available** displays.  

   ![](../../../../.gitbook/assets/computed-properties-screen-screens-builder-processes.png)

3. Click the **+Property** button. The **Calculated Properties** screen displays settings to configure a Property.  

   ![](../../../../.gitbook/assets/computed-properties-definition-screen-screens-builder-processes.png)

4. In the **Property Name** setting, enter the name of the Calculated Property. This Calculated Property name displays both in the **Calculated Properties** screen and in the JSON data model when previewing the ProcessMaker Screen. This is a required setting.
5. In the **Description** setting, enter the description of the Calculated Property. This is a required setting.
6. Above the **Formula** setting, select one of the following ways to determine how the Calculated Property determines its value:
   * **Mathematical calculation:** Click the **Formula** icon![](../../../../.gitbook/assets/formula-icon-computed-property-screens-builder-processes.png)to enter the value, mathematical calculation, or formula that calculates the Calculated Property. The **Formula** icon is selected by default.
   * **JavaScript:**  
     Click the **JavaScript** icon![](../../../../.gitbook/assets/javascript-icon-computed-property-screens-builder-processes.png)to calculate the Calculated Property using valid JavaScript. By calculating the Calculated Property using JavaScript, you can reference the values for ProcessMaker Screen controls and ProcessMaker [Magic Variables](../../../reference-global-variables-in-your-processmaker-assets.md). Ensure to use valid JavaScript to calculate the Calculated Property by using a [`return` statement](https://www.w3schools.com/jsref/jsref_return.asp) to return the result of an expression \(the value\). Furthermore, ensure to use the [`this.` JavaScript keyword](https://www.w3schools.com/js/js_this.asp) preceding the ProcessMaker Screen control/Magic Variable reference. See the examples below.

     Follow these guidelines to reference ProcessMaker Screen control or Magic Variable values:

     * **Screen control value:**

       Reference a ProcessMaker Screen control's value by referencing that control's **Variable Value** setting. Example: `return  this.FullName` when `FullName` is the **Variable Value** setting value for the control to reference its value when the Calculated Property runs.

     * **Magic Variable value:**

       Reference a ProcessMaker Magic Variable's value. ProcessMaker uses a set of Magic Variables that become part of the JSON data model for all Requests. ProcessMaker uses these Magic Variables to store ProcessMaker user, Process, and Request related data for all Requests. During an in-progress Request, these ProcessMaker Magic Variables are updated. All ProcessMaker Magic Variables are preceded by an underscore \(`_`\) character in the JSON data model. Reference the ProcessMaker Magic Variable after the `this.` keyword. Example: `return  this._user.fullname` to reference the ProcessMaker user's full name from the in-progress Request. See [Magic Variable Descriptions](../../../reference-global-variables-in-your-processmaker-assets.md#global-variable-descriptions). Note that there is no ProcessMaker Magic Variable that stores the ProcessMaker user that starts a Request \(known as the requester\). To address this, use a Calculated Property to reference the `_user.fullname` Magic Variable's value in the ProcessMaker Screen referenced in the first [Task](../../../../using-processmaker/task-management/what-is-a-task.md) element of a Process; since many Processes are designed such that the requester is the ProcessMaker [user](../../../../processmaker-administration/add-users/what-is-a-user.md) assigned the first Task in a Request, this is a helpful way of storing who the requester is. This Calculated Property stores this Magic Variable's value, which you may reference elsewhere.
7. In the **Formula** setting, enter the mathematical calculation/JavaScript that determines the Calculated Property value. This is a required setting.
8. Click **Save**. The Property displays in the **Calculated Properties** screen. The following message displays: **Property Saved**.

{% hint style="info" %}
Ensure to [save your ProcessMaker Screen](../save-a-screen.md#save-a-processmaker-screen). The Calculated Property is not added to your ProcessMaker Screen until you save it. Doing so will save your work if that your [session expires](../../../../using-processmaker/session-timeout-warning.md#session-timeout-warning).
{% endhint %}

![Calculated Properties screen with a new Calculated Property](../../../../.gitbook/assets/computed-properties-screen-with-property-screens-builder-processes.png)

## Related Topics

{% page-ref page="what-is-a-computed-property.md" %}

{% page-ref page="view-computed-properties-for-a-screen.md" %}

{% page-ref page="edit-a-computed-property-for-a-screen.md" %}

{% page-ref page="delete-a-computed-property-from-a-screen.md" %}

{% page-ref page="../what-is-screens-builder.md" %}

{% page-ref page="../screens-builder-modes.md" %}

{% page-ref page="../control-descriptions/" %}

{% page-ref page="../../manage-forms/view-all-forms.md" %}

{% page-ref page="../types-for-screens.md" %}

{% page-ref page="../validate-your-screen.md" %}

{% page-ref page="../add-a-new-page-to-a-screen.md" %}

{% page-ref page="../add-custom-css-to-a-screen.md" %}

{% page-ref page="../manage-watchers/" %}

{% page-ref page="../save-a-screen.md" %}

{% page-ref page="../best-practices.md" %}

