import { c as coreExports } from './core-B_3gV2hL.js';
import fs from 'fs';
import require$$1 from 'path';
import 'os';
import 'crypto';
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
 * The post step for the action. Deletes a text file that was created by the pre
 * step.
 *
 * @returns Resolves when the step is complete.
 */
async function run() {
    coreExports.info('Running post step');
    const filepath = require$$1.resolve(process.env.GITHUB_WORKSPACE, 'example.txt');
    if (fs.existsSync(filepath)) {
        coreExports.info(`Deleting file: ${filepath}`);
        fs.unlinkSync(filepath);
        coreExports.info('File deleted');
    }
    else {
        coreExports.warning('File does not exist');
    }
}

/**
 * The entrypoint for the action's post step. This file simply imports and runs
 * the steps's main logic.
 */
/* istanbul ignore next */
run();
//# sourceMappingURL=post.js.map
