---
description: Add custom CSS to controls in your ProcessMaker Screen.
---

# Add Custom CSS to a Screen

## Add Custom CSS to a ProcessMaker Screen

Use the Custom CSS mode to add custom CSS styles to a ProcessMaker Screen.

{% hint style="info" %}
### ProcessMaker Permissions

Your ProcessMaker user account or group membership must have the following permissions to add custom CSS to a ProcessMaker Screen unless your user account has the **Make this user a Super Admin** setting selected:

* Screens: View Screens
* Screens: Edit Screens

See the ProcessMaker [Screens](../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#screens) permissions or ask your ProcessMaker Administrator for assistance.

### Need to Learn CSS?

Start with [W3School's free CSS tutorial](https://www.w3schools.com/css/).
{% endhint %}

Follow these steps to add custom CSS to a ProcessMaker Screen:

1. [Open](../manage-forms/view-all-forms.md) the ProcessMaker Screen in which to add custom CSS. The ProcessMaker Screen is in [Design mode](screens-builder-modes.md#editor-mode).
2. Click the **Custom CSS** button![](../../../.gitbook/assets/custom-css-button-screens-builder-processes.png). The **Custom CSS** screen displays.  

   ![](../../../.gitbook/assets/custom-css-screen-screens-builder-processes.png)

3. Enter your custom CSS in valid Cascading Style Sheet language. Reference the **CSS Selector Name** field for ProcessMaker Screen controls to indicate CSS styling applies to those controls. Enter the value to represent this control in custom CSS syntax when in [Custom CSS](add-custom-css-to-a-screen.md#add-custom-css-to-a-processmaker-screen) mode. Example: `[selector='my-selector']`.
4. Address any syntax errors or changes as necessary, then click **Save**.
5. Click the **Preview** button to view your ProcessMaker Screen output using your CSS syntax in [Preview](screens-builder-modes.md#preview-mode) mode. Custom CSS does not display in Design mode.
6. Click the **Design** button to return to Design mode, and then repeat Steps 2 through 5 as necessary.

## Related Topics

{% page-ref page="what-is-screens-builder.md" %}

{% page-ref page="types-for-screens.md" %}

{% page-ref page="screens-builder-modes.md" %}

{% page-ref page="validate-your-screen.md" %}

{% page-ref page="control-descriptions/" %}

{% page-ref page="add-a-new-page-to-a-screen.md" %}

{% page-ref page="preview-a-screen.md" %}

{% page-ref page="manage-computed-properties.md" %}

{% page-ref page="save-a-screen.md" %}

{% page-ref page="best-practices.md" %}

