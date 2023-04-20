/**
 * Mock async function that returns a promise that resolves or rejects after a timeout period.
 */
export function mockAsync(succeed: boolean, timeout = 250): Promise<boolean> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (succeed) {
        resolve(true)
      }

      reject({ error: 'Error' })
    }, timeout)
  })
}

/**
 * Mock async function that returns a promise that will resolve to the given `data` or reject after a timeout period.
 * Specify the behavior of the promise with the `options` parameter.
 *
 * Default: promise will resolve to `data` after a timeout period of 250ms.
 */
export function mockAsyncData<T>(
  data: T,
  options: { succeed: boolean; timeout: number } = { succeed: true, timeout: 250 },
): Promise<T> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (options.succeed) {
        resolve(data)
      }

      reject({ error: 'Error' })
    }, options.timeout)
  })
}
