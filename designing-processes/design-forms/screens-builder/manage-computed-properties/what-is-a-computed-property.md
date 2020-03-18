---
description: Understand how to use Calculated Properties in your ProcessMaker Screens.
---

# What is a Calculated Property?

## Overview

Use Calculated Properties mode to add or edit Calculated Properties to a [ProcessMaker Screen](../../what-is-a-form.md) that perform calculations and formulas based on data entered into that Screen. A Calculated Property represents any value, mathematical calculation, or formula that calculates a value. A Calculated Property determines its value either through a mathematical formula or valid JavaScript, and may include [ProcessMaker Screen control](../control-descriptions/)  and/or [Magic Variable](../../../reference-global-variables-in-your-processmaker-assets.md) values during a Request. Likewise, a Calculated Property's value can display in a ProcessMaker Screen control. Calculated Properties can only be used within and only affect the ProcessMaker Screen to which the Calculated Property is added.

Below are a few uses for Calculated Properties that can be calculated mathematically or through JavaScript:

* Perform simple mathematics. Example: `1+1`
* Calculate the final cost of a purchase based on a sales tax. Example: $`60` \(item cost\) x `.075` \(sales tax\)
* Calculate the minimum credit card payment. Example: $`1000` \(amount owed\) x `.03` \(interest rate\)

Reference the ProcessMaker Screen control values for a Property using their **Variable Name** setting values. For example, to determine the cost for a number of items in a ProcessMaker Screen for a purchase request form that uses a [Line Input](../control-descriptions/line-input-control-settings.md#control-description) control with a **Variable Name** setting of `units` to indicate how many items to purchase, and `price` is the amount per unit, use the following calculation in a Property:

`units * price`

Calculated Properties display as the second key-value pair of the ProcessMaker Screen's JSON data model from the [**Data Preview** panel](../preview-a-screen.md#preview-json-data-models-in-a-processmaker-screen) when previewing that Screen.

## Related Topics

{% page-ref page="../what-is-screens-builder.md" %}

{% page-ref page="view-computed-properties-for-a-screen.md" %}

{% page-ref page="add-a-computed-property-to-a-screen.md" %}

{% page-ref page="edit-a-computed-property-for-a-screen.md" %}

{% page-ref page="delete-a-computed-property-from-a-screen.md" %}

{% page-ref page="../what-is-screens-builder.md" %}

{% page-ref page="../screens-builder-modes.md" %}

{% page-ref page="../preview-a-screen.md" %}

{% page-ref page="../control-descriptions/" %}

{% page-ref page="../../manage-forms/view-all-forms.md" %}

{% page-ref page="../types-for-screens.md" %}

{% page-ref page="../screens-builder-modes.md" %}

{% page-ref page="../validate-your-screen.md" %}

{% page-ref page="../add-a-new-page-to-a-screen.md" %}

{% page-ref page="../add-custom-css-to-a-screen.md" %}

{% page-ref page="../manage-watchers/" %}

{% page-ref page="../save-a-screen.md" %}

{% page-ref page="../best-practices.md" %}

{% page-ref page="../../../../using-processmaker/requests/what-is-a-request.md" %}

