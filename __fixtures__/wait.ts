import { jest } from '@jest/globals'

export const wait = jest.fn<typeof import('../src/main/wait.js').wait>()
