import * as core from '@actions/core'
import fs from 'fs'
import path from 'path'

/**
 * The pre step for the action. Creates a simple text file that is later cleaned
 * up by the post step.
 *
 * @returns Resolves when the step is complete.
 */
export async function run(): Promise<void> {
  core.info('Running pre step')

  const filepath = path.resolve(
    process.env.GITHUB_WORKSPACE as string,
    'example.txt'
  )

  core.info('Creating a file...')
  fs.writeFileSync(filepath, 'Hello, World!')
  core.info(`Created file: ${filepath}`)
}
