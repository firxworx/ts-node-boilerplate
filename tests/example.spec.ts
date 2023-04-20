import { mockAsync } from '../src/lib/mocks'
import main from '../src/main'

describe('main function', () => {
  it('returns a string with the expected greeting', () => {
    const result = main('username')
    expect(result).toBe(`hello, username, and hello world...`)
  })
})

describe('mockAsync', () => {
  it('returns a Promise that resolves to true when called with true', async () => {
    const testValue = await mockAsync(true, 50)
    return expect(testValue).toBe(true)
  })

  it('returns a Promise that rejects when called with false', async () => {
    const testPromise = mockAsync(false)
    return expect(testPromise).rejects.toStrictEqual({ error: 'Error' })
  })
})
