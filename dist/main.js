import { c as coreExports } from './core-B_3gV2hL.js';
import 'os';
import 'crypto';
import 'fs';
import 'path';
import 'http';
import 'https';
import 'net';
import 'tls';
import 'events';
import 'assert';
import 'util';
import 'stream';
import 'buffer';
import 'querystring';
import 'stream/web';
import 'node:stream';
import 'node:util';
import 'node:events';
import 'worker_threads';
import 'perf_hooks';
import 'util/types';
import 'async_hooks';
import 'console';
import 'url';
import 'zlib';
import 'string_decoder';
import 'diagnostics_channel';
import 'child_process';
import 'timers';

/**
 * Waits for a number of milliseconds.
 *
 * @param milliseconds The number of milliseconds to wait.
 * @returns Resolves with 'done!' after the wait is over.
 */
async function wait(milliseconds) {
    return new Promise((resolve) => {
        if (isNaN(milliseconds))
            throw new Error('milliseconds is not a number');
        setTimeout(() => resolve('done!'), milliseconds);
    });
}

/**
 * The main function for the action.
 *
 * @returns Resolves when the action is complete.
 */
async function run() {
    try {
        const ms = coreExports.getInput('milliseconds');
        // Debug logs are only output if the `ACTIONS_STEP_DEBUG` secret is true
        coreExports.debug(`Waiting ${ms} milliseconds ...`);
        // Log the current timestamp, wait, then log the new timestamp
        coreExports.debug(new Date().toTimeString());
        await wait(parseInt(ms, 10));
        coreExports.debug(new Date().toTimeString());
        // Set outputs for other workflow steps to use
        coreExports.setOutput('time', new Date().toTimeString());
    }
    catch (error) {
        // Fail the workflow run if an error occurs
        if (error instanceof Error)
            coreExports.setFailed(error.message);
    }
}

/**
 * The entrypoint for the action. This file simply imports and runs the action's
 * main logic.
 */
/* istanbul ignore next */
run();
//# sourceMappingURL=main.js.map
