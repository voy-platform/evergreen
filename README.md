Please see [CONTRIBUTING.md](.github/CONTRIBUTING.md) for more information on how to contribute!

MAKING A NEW COMPONENT:

## Step 1: Create template package with components

```sh
yarn create-package:components package-name ComponentName1 ComponentName2
```

Example: `yarn create-package:components date-input DateInput DateInputField`

## Step 2: Create the actual component...

Just copy stuff from another one; use UI-box because types are nice

## Step 2.5: Add the types to `index.d.ts`

- this is just straight up awful... but you have to do it!

## Step 3: Build

```sh
yarn build-esm
yarn build-types
```

- Make sure types are built! We love types...

## Step 4:

Push changes!!
