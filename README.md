# sanity-plugin-document-reference-by

> This is a **Sanity Studio v3** plugin.

> With this plugin you can check document references

![Example](example.png 'Example')

## Installation

```sh
npm install sanity-plugin-document-reference-by
```

## Usage

Add it in `deskStructure.js`:

```js
import {defineConfig} from 'sanity'
import {ReferencedBy} from 'sanity-plugin-document-reference-by'

export const defaultDocumentNodeResolver = (S) =>
  S.document().views([S.view.form(), S.view.component(ReferencedBy).title('Referenced by')])
```

and at `sanity.config.js`:

```js
import { deskTool } from 'sanity/desk'
import deskStructure, { defaultDocumentNodeResolver } from './deskStructure'

export default defineConfig([
  {
    title: "title",
    name: "name",
    projectId: "projectId",
    dataset: "dataset",
    basePath: '/basePath',
    plugins: [
      deskTool({ structure: deskStructure, defaultDocumentNode: defaultDocumentNodeResolver }),
    ],
    ...
  }
])
```

## License

[MIT](LICENSE) © Miguel Afonso

## Develop & test

This plugin uses [@sanity/plugin-kit](https://github.com/sanity-io/plugin-kit)
with default configuration for build & watch scripts.

See [Testing a plugin in Sanity Studio](https://github.com/sanity-io/plugin-kit#testing-a-plugin-in-sanity-studio)
on how to run this plugin with hotreload in the studio.

### Release new version

Run ["CI & Release" workflow](https://github.com/Mr-Afonso/sanity-plugin-document-reference-by/actions/workflows/main.yml).
Make sure to select the main branch and check "Release new version".

Semantic release will only release on configured branches, so it is safe to run release on any branch.
