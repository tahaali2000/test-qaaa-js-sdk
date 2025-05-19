# Transaction

```ts
const transactionController = new TransactionController(client);
```

## Class Name

`TransactionController`

## Methods

* [Fetch With Offset](../../doc/controllers/transaction.md#fetch-with-offset)
* [Fetch With Cursor](../../doc/controllers/transaction.md#fetch-with-cursor)
* [Fetch With Link](../../doc/controllers/transaction.md#fetch-with-link)


# Fetch With Offset

Fetch transactions using Offset-based Pagination

```ts
async fetchWithOffset(
  offset?: number,
  limit?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TransactionsOffset>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `offset` | `number \| undefined` | Query, Optional | The number of records to skip before selecting transactions.<br><br>**Default**: `0`<br><br>**Constraints**: `>= 0` |
| `limit` | `number \| undefined` | Query, Optional | Number of transactions per page.<br><br>**Default**: `10`<br><br>**Constraints**: `>= 1`, `<= 100` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [TransactionsOffset](../../doc/models/transactions-offset.md).

## Example Usage

```ts
const offset = 0;

const limit = 10;

try {
  const { result, ...httpResponse } = await transactionController.fetchWithOffset(
  offset,
  limit
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Fetch With Cursor

Fetch transactions using Cursor-based Pagination

```ts
async fetchWithCursor(
  cursor?: string,
  limit?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TransactionsCursored>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cursor` | `string \| undefined` | Query, Optional | The unique identifier (cursor) to fetch the next set of results. |
| `limit` | `number \| undefined` | Query, Optional | Number of transactions per page.<br><br>**Default**: `10`<br><br>**Constraints**: `>= 1`, `<= 100` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [TransactionsCursored](../../doc/models/transactions-cursored.md).

## Example Usage

```ts
const cursor = 'txn_abc123';

const limit = 10;

try {
  const { result, ...httpResponse } = await transactionController.fetchWithCursor(
  cursor,
  limit
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Fetch With Link

Fetch transactions using Link-based Pagination

```ts
async fetchWithLink(
  page?: number,
  size?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TransactionsLinked>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `page` | `number \| undefined` | Query, Optional | The page number to fetch.<br><br>**Default**: `1`<br><br>**Constraints**: `>= 1` |
| `size` | `number \| undefined` | Query, Optional | Number of transactions per page.<br><br>**Default**: `10`<br><br>**Constraints**: `>= 1`, `<= 100` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [TransactionsLinked](../../doc/models/transactions-linked.md).

## Example Usage

```ts
const page = 1;

const size = 10;

try {
  const { result, ...httpResponse } = await transactionController.fetchWithLink(
  page,
  size
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

