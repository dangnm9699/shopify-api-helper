import * as minimist from 'minimist';

import assetApi from './jobs/assets';
import version from './version';
import help from './help';

type ApiFunction = (...args: any[]) => any;

interface Api {
    [key: string]: ApiFunction;
}

const commands: Api = Object.freeze({
    help,
    version,

    asset: assetApi,
});

const args = minimist(process.argv.slice(2));

let command = args._[0] || 'help';

if (args['version'] || args['v']) {
    command = 'version';
}

if (args['help'] || args['h']) {
    command = 'help';
}

console.log(args);

if (command in commands) {
    const func = commands[command];
    if (command === 'asset') {
        const domain = args['domain'] || args['d'];
        const token = args['token'] || args['t'];
        const theme = args['theme'];
        const key = args['key'] || args['k'] || null;
        const apiVersion = args['apiVers'] || args['av'] || '2022-10';
        if (!!domain && !!token && !!theme) {
            func(domain, token, theme, key, apiVersion);
        } else {
            console.log('Run `asset` failed. Please provide `domain`, `token` and `theme`.');
        }
    } else {
        func();
    }
} else {
    console.log('No arguments provided');
}
