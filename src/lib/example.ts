/**
 * Returns the string "hello".
 */
export function getGreeting(): string {
  return 'hello'
}

/**
 * Mock async function that returns a promise that resolves to `true` after a timeout period.
 *
 * @param succeed set `true` for the promise to resolve or `false` for it to reject
 * @param timeout timeout duration in ms (default: 250ms)
 * @returns `true` on successful resolution
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
