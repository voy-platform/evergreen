Please see [CONTRIBUTING.md](.github/CONTRIBUTING.md) for more information on how to contribute!

## Using Voy-ui

### Installing the package

```sh
yarn add -D github:voy-platform/voy-ui
```

### Types

Make sure to add `"typeRoots": ["node_modules"]` to `compilerOptions` in `tsconfig.json` to be able to use intellisense autocomplete:

```json
{
  // ... other settings
  "compilerOptions": {
    // ... other settings
    "typeRoots": ["node_modules"]
  }
}
```

## Creating new components

### Step 1: Create template package with components

```sh
yarn create-package:components package-name ComponentName1 ComponentName2
```

Example: `yarn create-package:components date-input DateInput DateInputField`

This will create the following:

```
src/
└── package-name/
    ├── src/
    │   ├── ComponentName1.js
    │   └── ComponentName2.js
    ├── stories/
    └── index.js
```

### Step 2: Create the actual component...

```
src/
└── package-name/
    ├── src/
    │   ├── ComponentName1.js <-- Create your components here
    │   └── ComponentName2.js
    ├── stories/  <-- Create "Stories" here
    └── index.js  <-- Make sure to update the exports here
```

Just copy stuff from another one; use UI-box because types are nice.

### Step 2.1: Developing

You can view a preview of the components, rendered using `stories` by running `yarn dev`.

### Step 2.5: Add the types to `index.d.ts`

- this is just straight up awful... but you have to do it! Look at how other files are done to get an idea. It should match the files created in `src`.

### Step 3: Build

```sh
yarn build-esm
yarn build-types
```

## Step 4:

Push changes! Make sure `esm`, `types`, and `index.d.ts` are included in the repo.
