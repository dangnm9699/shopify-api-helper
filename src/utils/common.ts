export type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
export function getParams(method: HTTPMethod, token: string) {
    return {
        method,
        headers: {
            'X-Shopify-Access-Token': token,
            'Content-Type': 'application/json',
        },
    };
}

export function getAssetUrl(domain: string, apiVersion: string, theme: string | number, key: string | null) {
    const init: any = {};
    if (key) {
        init['asset[key]'] = key;
    } else {
        init['fields'] = 'key';
    }
    const search = new URLSearchParams(init).toString();
    return `https://${domain}/admin/api/${apiVersion}/themes/${theme}/assets.json${search ? '?' + search : ''}`;
}
