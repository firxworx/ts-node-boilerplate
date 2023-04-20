#!/usr/bin/env node

import * as path from 'path'
import dotenv from 'dotenv'
import { Command } from 'commander'
import { exampleCommand } from './cli/commands/example.js'

dotenv.config({ path: path.resolve(process.cwd(), '.env') })

const program = new Command()

program.name('cli <command> [options]').description('cli description')

program.addCommand(exampleCommand)

try {
  program.parse(process.argv)
} catch (error: unknown) {
  errorExit(1, error instanceof Error ? `${error.name}: ${error.message}` : String(error))
}

/* istanbul ignore next */
export function errorExit(code = 1, message?: string): void {
  console.error(message ? message : 'Error: exiting script')
  process.exit(code)
}
