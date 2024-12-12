import { jest } from '@jest/globals'
import type fs from 'fs'

export const existsSync = jest.fn<typeof fs.existsSync>()
export const unlinkSync = jest.fn<typeof fs.unlinkSync>()
export const writeFileSync = jest.fn<typeof fs.writeFileSync>()

export default {
  existsSync,
  unlinkSync,
  writeFileSync
}
