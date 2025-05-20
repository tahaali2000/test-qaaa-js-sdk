
# Getting Started with Pagination Tester

## Introduction

API demonstrating different pagination techniques.

## Install the Package

Run the following command from your project directory to install the package from npm:

```bash
npm install test-qaaa-sdk@1.3.9
```

For additional package details, see the [Npm page for the test-qaaa-sdk@1.3.9 npm](https://www.npmjs.com/package/test-qaaa-sdk/v/1.3.9).

## Test the SDK

To validate the functionality of this SDK, you can execute all tests located in the `test` directory. This SDK utilizes `Jest` as both the testing framework and test runner.

To run the tests, navigate to the root directory of the SDK and execute the following command:

```bash
npm run test
```

Or you can also run tests with coverage report:

```bash
npm run test:coverage
```

## Initialize the API Client

**_Note:_** Documentation for the client can be found [here.](https://www.github.com/tahaali2000/test-qaaa-js-sdk/tree/1.3.9/doc/client.md)

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| timeout | `number` | Timeout for API calls.<br>*Default*: `0` |
| httpClientOptions | [`Partial<HttpClientOptions>`](https://www.github.com/tahaali2000/test-qaaa-js-sdk/tree/1.3.9/doc/http-client-options.md) | Stable configurable http client options. |
| unstableHttpClientOptions | `any` | Unstable configurable http client options. |

The API client can be initialized as follows:

```ts
const client = new Client({
  timeout: 0,
});
```

## List of APIs

* [Transaction](https://www.github.com/tahaali2000/test-qaaa-js-sdk/tree/1.3.9/doc/controllers/transaction.md)

## SDK Infrastructure

### Configuration

* [HttpClientOptions](https://www.github.com/tahaali2000/test-qaaa-js-sdk/tree/1.3.9/doc/http-client-options.md)
* [RetryConfiguration](https://www.github.com/tahaali2000/test-qaaa-js-sdk/tree/1.3.9/doc/retry-configuration.md)

### HTTP

* [HttpRequest](https://www.github.com/tahaali2000/test-qaaa-js-sdk/tree/1.3.9/doc/http-request.md)

### Utilities

* [ApiResponse](https://www.github.com/tahaali2000/test-qaaa-js-sdk/tree/1.3.9/doc/api-response.md)
* [ApiError](https://www.github.com/tahaali2000/test-qaaa-js-sdk/tree/1.3.9/doc/api-error.md)

