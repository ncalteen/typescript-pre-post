/**
 * Unit tests for the action's post functionality, src/post/main.ts
 *
 * To mock dependencies in ESM, you can create fixtures that export mock
 * functions and objects. For example, the core module is mocked in this test,
 * so that the actual '@actions/core' module is not imported.
 */
import { jest } from '@jest/globals'
import path from 'path'
import * as core from '../../__fixtures__/core.js'
import * as fs from '../../__fixtures__/fs.js'

// Mocks should be declared before the module being tested is imported.
jest.unstable_mockModule('@actions/core', () => core)
jest.unstable_mockModule('fs', () => fs)

// The module being tested should be imported dynamically. This ensures that the
// mocks are used in place of any actual dependencies.
const { run } = await import('../../src/post/main.js')

describe('post/main.ts', () => {
  afterEach(() => {
    jest.resetAllMocks()
  })

  it('Deletes the file if it exists', async () => {
    process.env.GITHUB_WORKSPACE = '/workspace'
    fs.existsSync.mockReturnValue(true)

    await run()

    // Verify the file was deleted.
    expect(fs.existsSync).toHaveBeenNthCalledWith(
      1,
      path.resolve(process.env.GITHUB_WORKSPACE as string, 'example.txt')
    )
    expect(fs.unlinkSync).toHaveBeenNthCalledWith(
      1,
      path.resolve(process.env.GITHUB_WORKSPACE as string, 'example.txt')
    )
  })

  it('Does nothing if the file does not exists', async () => {
    process.env.GITHUB_WORKSPACE = '/workspace'
    fs.existsSync.mockReturnValue(false)

    await run()

    // Verify the file was not deleted.
    expect(fs.existsSync).toHaveBeenNthCalledWith(
      1,
      path.resolve(process.env.GITHUB_WORKSPACE as string, 'example.txt')
    )
    expect(fs.unlinkSync).not.toHaveBeenCalled()
  })
})
