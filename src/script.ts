#!/usr/bin/env node

import { getGreeting } from './lib/greetings.js'

export async function main(): Promise<void> {
  console.log(`${getGreeting()} there and hello world...`)
}

/* istanbul ignore next */
main().catch((error) => {
  console.error(error)
  process.exit(1)
})
