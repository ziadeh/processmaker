---
description: Use these rules to describe how to validate your ProcessMaker Screen controls.
---

# Validation Rules for "Validation" Control Settings

## Overview

Use validation rules in a control to constitute what is a valid value entered for that control.

If a control that has a **Validation** setting does not contain any value or properly structured validation rule, that control automatically passes validation.

Use the following rules below to validate your [ProcessMaker Screen controls](./).

{% hint style="info" %}
### Ensure Validation Fails for an Undefined Setting

If you want a validation to fail for undefined or `''`, use the [required](validation-rules-for-validation-control-settings.md#required) rule.

### Combine Multiple Validation Rules into One Expression

Use the pipe character \(`|`\) between rules to combine them into one **Validation** setting. Example: `required|unique:posts|max:255`
{% endhint %}

## Validation Rules

### **accepted**

The control under validation must be `yes`, `on`, `1` or true. This is useful for validating "Terms of Service" acceptance.

### **after:date**

The control under validation must be after the given date.

### **after\_or\_equal:date**

The control under validation must be after or equal to the given control.

### **alpha**

The control under validation must be entirely alphabetic characters.

### **alpha\_dash**

The control under validation may have alphanumeric characters as well as dashes and underscores.

### **alpha\_num**

The control under validation must contain entirely alphanumeric characters.

### **array**

The control under validation must be an array.

### **before:date**

The control under validation must be before the given date.

### **before\_or\_equal:date**

The control under validation must be before or equal to the given date.

### **between:min,max**

The control under validation must have a size between the given `min` and `max`. [Strings](validation-rules-for-validation-control-settings.md#string), [numerics](validation-rules-for-validation-control-settings.md#numeric), and files are evaluated in the same fashion as the size rule.

### **Boolean**

The control under validation must be a Boolean value of the form `true`, `false`, `0`, `1`, `'true'`, `'false'`, `'0'`, `'1'`,

### **confirmed**

The control under validation must have a matching control of `foo_confirmation`. For example, if the control under validation is password, a matching `password_confirmation` control must be present in the input.

### **date**

The control under validation must be a valid date format which is acceptable by JavaScript's `Date` object.

### **digits:value**

The control under validation must be numeric and must have an exact length of value.

### **different:attribute**

The given control must be different than the control under validation.

### **email**

The control under validation must be formatted as an email address.

### **hex**

The control under validation should be a hexadecimal format. Useful in combination with other rules, like `hex|size:6` for hex color code validation.

### **in:foo,bar,...**

The control under validation must be included in the given list of values. The control can be an array or string.

### **integer**

The control under validation must have an integer value.

### **max:value**

Validate that an attribute is no greater than a given size.

{% hint style="info" %}
Maximum checks are inclusive.
{% endhint %}

### **min:value**

Validate that an attribute is at least a given size.

{% hint style="info" %}
Minimum checks are inclusive.
{% endhint %}

### **not\_in:foo,bar,...**

The control under validation must not be included in the given list of values.

### **numeric**

Validate that an attribute is numeric. The string representation of a number passes.

### **present**

The control under validation must be present in the input data but can be empty.

### **regex:pattern**

The control under validation must match the given regular expression.

### **required**

Checks if the length of the String representation of the value complies with the validation described with the following `required` rules.

#### **required\_if:anotherfield,value**

The control under validation must be present and not empty if the `anotherfield` control is equal to any value.

#### **required\_unless:anotherfield,value**

The control under validation must be present and not empty unless the `anotherfield` control is equal to any value.

#### **required\_with:foo,bar,...**

The control under validation must be present and not empty only if any of the other specified controls are present.

#### **required\_with\_all:foo,bar,...**

The control under validation must be present and not empty only if all of the other specified control are present.

#### **required\_without:foo,bar,...**

The control under validation must be present and not empty only when any of the other specified control are not present.

#### **required\_without\_all:foo,bar,...**

The control under validation must be present and not empty only when all of the other specified controls are not present.

### **same:attribute**

The given control must match the control under validation.

### **size:value**

The control under validation must have a size matching the given value. For string data, value corresponds to the number of characters. For numeric data, value corresponds to a given integer value.

### **string**

The control under validation must be a string.

### **url**

Validate that an attribute has a valid URL format.

## Related Topics

{% page-ref page="../types-for-screens.md" %}

{% page-ref page="../screens-builder-modes.md" %}

{% page-ref page="../validate-your-screen.md" %}

{% page-ref page="./" %}

{% page-ref page="rich-text-control-settings.md" %}

{% page-ref page="line-input-control-settings.md" %}

{% page-ref page="textarea-control-settings.md" %}

{% page-ref page="select-list-control-settings.md" %}

{% page-ref page="checkbox-control-settings.md" %}

{% page-ref page="date-picker-control-settings.md" %}

{% page-ref page="page-navigation-button-control-settings.md" %}

{% page-ref page="multi-column-button-control-settings.md" %}

{% page-ref page="loop-control-settings.md" %}

{% page-ref page="record-list-control-settings.md" %}

{% page-ref page="image-control-settings.md" %}

{% page-ref page="submit-button-control-settings.md" %}

{% page-ref page="nested-screen-control-settings.md" %}

{% page-ref page="file-upload-control-settings.md" %}

{% page-ref page="file-download-control-settings.md" %}

{% page-ref page="expression-syntax-components-for-show-if-control-settings.md" %}

