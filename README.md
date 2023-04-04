# Shopify API Caller Helper

## Install & Build

```bash
npm install
npm run build
```

## API References

_Notes (For Windows users): Please using GitBash or WSL to execute below commands, because Windows PowerShell doesnot support `--` parsing_

_Notes: Result will be stored in `<ROOT_DIR>/output`, based on your command_

### Asset API

- If key is not provided, fetch all assets key, result store in `<THEME_ID>.json`

- If key is provided, fetch that file key's content, result store in `<CONVERTED_FILE_KEY>`. Converted file key is the file key which is replace `/` by `__`. Example: convert `sections/featured-collection.liquid` into `sections__featured-collection.liquid`

```bash
# --apiVers is optional
# --key is optional, use when you want to get given file key content
npm run start -- asset --domain="<DOMAIN>" --token="<TOKEN>" --theme="<THEME_ID>" --key="<FILE_KEY>"--apiVers="<API_VERSION>";
```
