import main from '../src/main'

describe('main function', () => {
  it('returns a string with the expected greeting', () => {
    const result = main('username')
    expect(result).toBe(`hello, username, and hello world...`)
  })
})
