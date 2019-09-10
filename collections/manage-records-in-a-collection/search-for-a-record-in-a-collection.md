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
2. In the **PMQL** field, enter your ProcessMaker Query Language \(PMQL\) parameters that compose your record search. See [PMQL Syntax for ProcessMaker Collections](../../using-processmaker/search-processmaker-data-using-pmql.md#pmql-syntax-for-processmaker-collections).

   Below is an example of a valid record search:

   `(request = "Process Name 1" OR request = "Process Name 2") AND (status = "Canceled" OR status = "Error") AND (requester = "Username1" OR requester = "Username2") AND (participant = "Username3" OR participant = "Username4" AND (data.last_name= "Canera") AND (updated_at < NOW -2 day)`

3. Click the **Search** button![](../../.gitbook/assets/request-task-search-button.png)to search the ProcessMaker Collection's records based on your entered criteria. If there is no search criteria in the **PMQL** field when the **Search** button is clicked, the following message displays: **Search query is empty. Please add search attributes or PMQL before saving.**
4. Optionally, if the [Save Searches package](../../package-development-distribution/package-a-connector/saved-searches-package.md) is installed in your ProcessMaker instance, save and share the record search by clicking the **Save Search** button![](../../.gitbook/assets/save-search-button-requests-tasks.png). See [Save and Share a Record Search](save-and-share-a-record-search.md).

## Related Topics



