import { getGreeting } from './lib/example.js'

/**
 * Replace with your implementation.
 */
export default function main(name: string): string {
  const greeting = getGreeting()

  return `${greeting}, ${name}, and hello world...`
}
