import { hello } from '../src/main'

describe('hello function', () => {
  it('greets a user with `Hello, {name}` message', () => {
    const result = hello('username')
    expect(result).toBe(`hello, username, and hello world...`)
  })
})
