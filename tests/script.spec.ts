import { main } from '../src/script'

describe('script.ts log to console', () => {
  // save a reference to console.log
  const log = console.log

  // replace console.log with a new jest mock for each test
  beforeEach(() => {
    console.log = jest.fn().mockImplementation(() => undefined)
  })

  // restore the real console.log after all tests
  afterAll(() => {
    console.log = log
  })

  test('logs hello world', async () => {
    await main()
    return expect(console.log).toHaveBeenCalledWith(expect.stringContaining('hello world'))
  })
})
