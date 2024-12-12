import * as core from '@actions/core'
import fs from 'fs'
import path from 'path'

/**
 * The post step for the action. Deletes a text file that was created by the pre
 * step.
 *
 * @returns Resolves when the step is complete.
 */
export async function run(): Promise<void> {
  core.info('Running post step')

  const filepath = path.resolve(
    process.env.GITHUB_WORKSPACE as string,
    'example.txt'
  )

  if (fs.existsSync(filepath)) {
    core.info(`Deleting file: ${filepath}`)
    fs.unlinkSync(filepath)
    core.info('File deleted')
  } else {
    core.warning('File does not exist')
  }
}
