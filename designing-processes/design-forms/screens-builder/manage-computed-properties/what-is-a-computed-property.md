---
description: Understand how to use computed Properties in ProcessMaker Screens.
---

# What is a Computed Property?

## Overview

Use Computed Properties mode to add Properties to a [ProcessMaker Screen's](../../what-is-a-form.md) JSON data model. A Property represents any value, mathematical calculation, or formula that calculates a value. A Property's computation can be determined either through a mathematical formula or valid JavaScript, and may include [ProcessMaker Screen control](../control-descriptions/) values during a [Request](../../../../using-processmaker/requests/what-is-a-request.md). Likewise, a computed Property's value can be displayed in a ProcessMaker Screen control. Computed Properties can only be used within and only affect the currently opened ProcessMaker Screen.

Below are a few uses for computed Properties that can be calculated mathematically or through JavaScript:

* Perform simple mathematics. Example: `1+1`
* Calculate the final cost of a purchase based on a sales tax. Example: $`60` \(item cost\) x `.075` \(sales tax\)
* Calculate the minimum credit card payment. Example: $`1000` \(amount owed\) x `.03` \(interest rate\)

Computed Properties display as the second key-value pair in the ProcessMaker Screen's JSON data model from the [**Data Preview** section of the **Inspector** panel when previewing the Screen](../preview-a-screen.md).

## Related Topics

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

{% page-ref page="../manage-watchers.md" %}

{% page-ref page="../save-a-screen.md" %}

{% page-ref page="../best-practices.md" %}

{% page-ref page="../../../../using-processmaker/requests/what-is-a-request.md" %}

