---
description: >-
  Use PMQL to filter all records in your ProcessMaker Collection to find that
  one you need.
---

# Search Records in a Collection

## Search Records in a ProcessMaker Collection

Use the **Search** function to filter all ProcessMaker [Collections](../what-is-a-collection.md) from the **Collections** page based on your entered text.

{% hint style="info" %}
### ProcessMaker Package Required

The [Collections package](../../package-development-distribution/package-a-connector/collections.md) must be installed in your ProcessMaker instance. The [Collections](../what-is-a-collection.md) package is not available in the ProcessMaker open-source edition. Contact [ProcessMaker Sales](mailto:sales@processmaker.com) or ask your ProcessMaker sales representative how the Collections package can be installed in your ProcessMaker instance.

### Permissions Required

Your ProcessMaker user account or group membership must have the "Collections: View Collections" permission to view the list of ProcessMaker Collections unless your user account has the **Make this user a Super Admin** setting selected. See the ProcessMaker [Collections](../../processmaker-administration/permission-descriptions-for-users-and-groups.md#collections) permissions or ask your ProcessMaker Administrator for assistance.

Furthermore, your ProcessMaker user account or group membership must have the **View** [record permission](../manage-collections/configure-a-collection.md#configure-record-permissions-for-processmaker-users) from a Collection's configuration to view that Collection's records. See [Configure a Collection](../manage-collections/configure-a-collection.md#configure-a-processmaker-collection) or ask the manager of that ProcessMaker Collection for assistance.
{% endhint %}

Follow these steps to search records in a ProcessMaker Collection:

1. [View the records for the ProcessMaker Collection](view-all-records-in-a-collection.md#view-all-records-in-a-collection) that you want to search.
2. In the **PMQL** field, enter your ProcessMaker Query Language \(PMQL\) parameters that compose your record search. Refer to the following PMQL parameter syntax options that are not case sensitive to compose your PMQL search:

   * **Record ID\(s\):**
     * Use the following syntax as a guide to include one record in your search criteria based on its ID \(as noted in the **\#** column when [viewing the Collection's records](view-all-records-in-a-collection.md#view-all-records-in-a-collection)\):

       `id = 4`

     * Use the following syntax to include all records in your search criteria since record IDs begin with `1`:

       `id > 0`
   * ~~**Process\(es\):**~~
     * ~~Use the following syntax as a guide to include one Process in your search criteria:~~

       ~~`(request = "exact Process name including spaces")`~~

     * ~~Use the following syntax as a guide to include two or more Processes in your search criteria:~~

       `(request = "Process name 1" OR request = "Process name 2")`
   * **Record information:**

     Use the following syntax as a guide to reference record-related information in your search criteria.

     `data.RecordData`

     `data.` represents that what follows derives from record information, as is used in JSON dot notation. Record data is derived from the **Variable Name** setting values in the ProcessMaker [Screens](../../designing-processes/design-forms/what-is-a-form.md) that are used to [create, edit and view records in this Collection](../manage-collections/create-a-new-collection.md#overview). Use these **Variable Name** setting values in place of `RecordData` in this syntax. Spaces are allowed between operators. Example: `data.last_name = "Canera"`. Note that your ProcessMaker user account or group membership must have the [appropriate permissions to view and edit ProcessMaker Screens](../edit-a-collection.md#edit-a-processmaker-screen-for-a-collection) to view **Variable Name** setting values. Ask your ProcessMaker Administrator if you do not have the appropriate permissions.

   * ~~**ProcessMaker Magic Variables:**~~

     ~~Following the same syntax as referencing Request-related information, reference ProcessMaker~~ [~~Magic Variables~~](../../designing-processes/reference-global-variables-in-your-processmaker-assets.md) ~~in your search criteria. See~~ [~~Magic Variable Descriptions~~](../../designing-processes/reference-global-variables-in-your-processmaker-assets.md#global-variable-descriptions)~~.~~

   * ~~**Status\(es\):**~~ 
     * ~~Use the following syntax as a guide to include one Request status in your search criteria:~~

       ~~`(status = "In Progress")`~~

     * ~~Use the following syntax as a guide to include two or more Request statuses in your search criteria:~~

       ~~`(status = "Completed" OR status = "Canceled")`~~
   * ~~**Requester\(s\):**~~
     * ~~Use the following syntax as a guide to include one requester in your search criteria:~~

       ~~`(requester = "Username1")`~~

     * ~~Use the following syntax as a guide to include two or more requesters in your search criteria:~~

       ~~`(requester = "Username1" OR requester = "Username2")`~~
   * ~~**Participant\(s\):**~~
     * ~~Use the following syntax as a guide to include one Request participant in your search criteria:~~

       ~~`(participant = "Username3")`~~

     * ~~Use the following syntax as a guide to include two or more Request participants in your search criteria:~~

       ~~`(participant = "Username3" OR participant = "Username4")`~~
   * **Time Period\(s\):**
     * Use the following syntax as a guide to include a period of time in your search criteria:

       `updated_at < NOW -2 day`

       Use `updated_at < NOW` to represent how much time from the present the sought after record is, then use `-` followed by an integer to specify that time. The units of time `second`, `minute`, `hour` and `day` are supported.
   * **Standard SQL syntax supported by PMQL:**
     * **Operators for use in and between search criterion:**

       * Equal to: `=`
       * Not equal to: `!=`
       * Less than: `<`
       * Greater than: `>`
       * Less than or equal to: `<=`
       * Greater than or equal to: `>=`
       * Not equal to: `<>`
       * Use `AND` operators between each set of search criterion to search using multiple criteria.
       * Use the `AND` operator between criterion to search for multiple specified criterion.
       * Use the `OR` operator between criterion to search for either specified criterion.

       Spaces are allowed between operators. Example: `data.last_name = "Canera"`.

     * **Wildcard syntax:**

       Use `%` as a wildcard character to substitute one or more characters in any PMQL-supported parameter that uses a string. Include the `%` character within the quotation marks \(`"`\) of the parameter. Example: `data.last_name = "C%"` finds all values that begin with `C` in all records of the Collection that have the `last_name` **Variable Value** setting in any ProcessMaker Screen that the Collection references

   Below is an example of a valid record search:

   `(request = "Process Name 1" OR request = "Process Name 2") AND (status = "Canceled" OR status = "Error") AND (requester = "Username1" OR requester = "Username2") AND (participant = "Username3" OR participant = "Username4" AND (data.last_name= "Canera") AND (updated_at < NOW -2 day)`

3. Click the **Search** button![](../../.gitbook/assets/request-task-search-button.png)to search the ProcessMaker Collection's records based on your entered criteria. If there is no search criteria in the **PMQL** field when the **Search** button is clicked, the following message displays: **Search query is empty. Please add search attributes or PMQL before saving.**
4. Optionally, if the [Save Searches package](../../package-development-distribution/package-a-connector/saved-searches-package.md) is installed in your ProcessMaker instance, save and share the record search by clicking the **Save Search** button![](../../.gitbook/assets/save-search-button-requests-tasks.png). See [Save and Share a Record Search](save-and-share-a-record-search.md).

## Related Topics



