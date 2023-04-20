import { Command } from 'commander'
import { mockAsyncData } from '../../lib/mocks.js'

export type NameArg = string

export interface ExampleCommandOptions {
  foo: boolean
  bar: boolean
}

/**
 * Example command with required <name> argument and dummy optional `-a, --all` and `-f, --force` options.
 * The example command performs no useful action: it serves to demonstrate how to use arguments and options.
 *
 * e.g. `pnpm cli example argvalue -a -f`
 */
export const exampleCommand = new Command('example')
  .description('description of example command')
  .arguments('<name>') // use square brackets '[name]' for an optional argument
  .option('-f, --foo', 'foo option description')
  .option('-b, --bar', 'bar option description')
  .action(async (name: NameArg, options: ExampleCommandOptions) => {
    // validate arguments as required
    // ...

    // execute command action(s)
    await exampleCommandAction(name, options)
  })

export async function exampleCommandAction(name: NameArg, options: ExampleCommandOptions): Promise<void> {
  const mockData = { greeting: 'hello' }
  const mockAsyncResult = await mockAsyncData(mockData)

  console.log(`example command called with name: ${name} and options: ${JSON.stringify(options)}`)
  console.log(`example command mock async result: ${JSON.stringify(mockAsyncResult)}`)
}
