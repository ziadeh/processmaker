---
description: Delete a record in a ProcessMaker Collection.
---

# Delete a Collection Record

## Delete a ProcessMaker Collection Record

{% hint style="info" %}
### ProcessMaker Package Required

The [Collections package](../../package-development-distribution/package-a-connector/collections.md) must be installed in your ProcessMaker instance. The [Collections](../what-is-a-collection.md) package is not available in the ProcessMaker open-source edition. Contact [ProcessMaker Sales](https://www.processmaker.com/contact/) or ask your ProcessMaker sales representative how the Collections package can be installed in your ProcessMaker instance.

### Permissions Required

Your ProcessMaker user account or group membership must have the "Collections: View Collections" permission to view the list of ProcessMaker Collections unless your user account has the **Make this user a Super Admin** setting selected. See the ProcessMaker [Collections](../../processmaker-administration/permission-descriptions-for-users-and-groups.md#collections) permissions or ask your ProcessMaker Administrator for assistance.

Furthermore, your ProcessMaker user account or group membership must have the following [record permissions](../manage-collections/configure-a-collection.md#configure-record-permissions-for-processmaker-users) from a Collection's configuration that control how records in that Collection are accessed:

* View
* Delete

See [Configure a Collection](../manage-collections/configure-a-collection.md#configure-a-processmaker-collection) or ask the manager of that ProcessMaker Collection for assistance.
{% endhint %}

{% hint style="warning" %}
When deleting a record from a ProcessMaker Collection, the information in that record is a also permanently deleted.

Deleting a record from a ProcessMaker Collection cannot be undone.
{% endhint %}

Follow these steps to delete a record in a ProcessMaker Collection:

1. [View the records for the ProcessMaker Collection](view-all-records-in-a-collection.md#view-all-records-in-a-collection) in which you want to delete a record.
2. Click the **Delete** icon![](../../.gitbook/assets/trash-icon-process-modeler-processes.png)for the record you want to delete.

## Related Topics

{% page-ref page="../what-is-a-collection.md" %}

{% page-ref page="../manage-collections/" %}

{% page-ref page="view-all-records-in-a-collection.md" %}

{% page-ref page="create-a-collection-record.md" %}

{% page-ref page="search-for-a-record-in-a-collection.md" %}

{% page-ref page="save-and-share-a-record-search.md" %}

{% page-ref page="edit-a-collection-record.md" %}

{% page-ref page="view-a-collection-record.md" %}

{% page-ref page="../edit-a-collection.md" %}

{% page-ref page="../../package-development-distribution/package-a-connector/collections.md" %}

