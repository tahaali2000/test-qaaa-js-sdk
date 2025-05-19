
# Transactions Cursored

## Structure

`TransactionsCursored`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`Transaction[] \| undefined`](../../doc/models/transaction.md) | Optional | - |
| `nextCursor` | `string \| null \| undefined` | Optional | Cursor for the next page of results. |

## Example (as JSON)

```json
{
  "nextCursor": "txn_abc999",
  "data": [
    {
      "id": "id0",
      "amount": 43.32,
      "timestamp": "2016-03-13T12:52:32.123Z"
    },
    {
      "id": "id0",
      "amount": 43.32,
      "timestamp": "2016-03-13T12:52:32.123Z"
    }
  ]
}
```

