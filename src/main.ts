import { getGreeting } from './lib/greetings.js'

/**
 * Replace with your implementation.
 */
export default function main(name: string): string {
  const greeting = getGreeting()

  return `${greeting}, ${name}, and hello world...`
}
