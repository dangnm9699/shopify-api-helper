import { safeFetch } from "@bss-sbc/shopify-rest-api-rate-limiter";
import { getAssetUrl, getParams } from "../../utils/common";
import * as fs from 'fs';
import * as path from 'path';

export default async function (domain: string, token: string, theme: string | number, key: string | null, apiVersion: string) {
    const url = getAssetUrl(domain, apiVersion, theme, key);
    const params = getParams('GET', token);
    const response = await safeFetch(domain, url, params);
    const json = await response.json();

    if (key) {
        fs.writeFileSync(path.join(__dirname, `../../../output/${Date.now()}__${key.replace('/', '__')}`), json['asset']);
    } else {
        fs.writeFileSync(path.join(__dirname, `../../../output/${theme}.json`), JSON.stringify(json['assets'], null, 4));
    }
}
