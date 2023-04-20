# TypeScript NodeJS Boilerplate (ts-node-boilerplate)

[![TypeScript version][ts-badge]][typescript-5-0]
[![Node.js version][nodejs-badge]][nodejs]
[![MIT][license-badge]][license]

Lightweight NodeJS boilerplate/starter for projects with TypeScript 5 + Jest + Prettier + ESLint setup and ready-to-rock with ES Modules (ESM) and a strict tsconfig.

Includes an optional setup for a cli script with dotenv and [commander](https://www.npmjs.com/package/commander).

The repo is ready to serve as a kickoff point for small projects including scripts, cli commands, and experiments in NodeJS.

This project uses ES Modules (ESM). If you require CommonJS you can convert this project or you may want to find a different boilerplate.

The standard TypeScript compiler `tsc` is used. If `tsc` and `node` doesn't cut it for your use-case, [tsx](https://www.npmjs.com/package/tsx) is recommended: it is a fast esbuild-enhanced alternative.

## What's included

### Starter code

The `src/` folder features three basic examples for you to build on or delete:

`src/main.ts`: for nodejs packages or libraries to compile with `tsc` and then run via `node`

- build first: `pnpm build`
- run the compiled js using `node`: `pnpm run:main`

`src/cli.ts`: for cli scripts powered by commander

- execute via `ts-node-esm`: `pnpm cli [arguments] [options]` e.g. `pnpm cli example --foo --bar`
- run compiled js: `pnpm run:cli`

`src/script.ts`: for one-off scripts and experiments with an async `main()`

- execute via `ts-node-esm`: `pnpm script`
- run compiled js: `pnpm run:script`

Note that the `ts-node-esm` command is shipped as part of the ts-node package.

### Working example tests

The example tests work (run `pnpm test`) and compute coverage.

Jest is configured to work with ESM and support your preference of `.test.ts` or `.spec.ts` extensions.

The examples include testing async functions and console output.

### ESM notes

The boilerplate code demonstrates a few key nuances of ESM including:

- relative import paths require full extensions with `.js` vs. `.ts` to reflect the compiled output
- certain global-like values including `__dirname` and `require()` cannot be used directly
- the cli example demonstrates top-level `await` and is run using `ts-node-esm`

Imports for jest tests are more lax per `verbatimModuleSyntax` set to `false` in `tsconfig.spec.json`.

## How to use the boilerplate

Clone/copy/download the repo and open the project folder. You can use `degit` to download a fast local copy of this repo on your machine without git and the project's git history:

```bash
pnpm dlx degit firxworx/ts-node-boilerplate <target_folder_name_or_path>
```

Review the dependencies in `package.json` and familiarize yourself with the scripts + configuration.

`pnpm` is the recommended node package manager. To use `npm` or `yarn` instead delete the `pnpm-lock.yaml` file.

Revise `package.json` with relevant information specific to your project including the "author", "description", "license", "engines", and "scripts" properties.

Review and upgrade packages to their latest release version using pnpm's interactive installer:

```sh
pnpm up -i --latest
```

Don't forget to:

- initialize a new empty git repo with `git init` if you created your copy with `degit`
- replace this `README.md` with one relevant to your project
- customize, replace, or delete the `LICENSE` file
- review and tweak the `.gitignore` file to suit your needs
- customize the typescript config in `tsconfig.json` and/or `tsconfig.release.json`

The tsconfig extends `@tsconfig/node18-strictest-esm/tsconfig.json`. Read more about this configuration at <https://github.com/tsconfig/bases> and the package's [npm page](https://www.npmjs.com/package/@tsconfig/node18-strictest-esm).

## Development

Install dependencies:

```bash
pnpm install
```

## Project scripts

In addition to those, the following scripts are defined in `package.json` to support the development process:

- `clean` - remove coverage data, Jest cache and transpiled files in the build folder
- `prebuild` - lint source files and tests before building
- `build` - transpile TypeScript to ES (js) and output to `build/`
- `build:watch` - watch mode will automatically transpile source files as files are changed
- `lint` - lint source files and tests
- `prettier` - reformat files with prettier
- `test` - run tests
- `test:watch` - watch mode will automatically re-run tests as files are changed

The following scripts run the project code:

- `cli` - run the `src/cli.ts` example directly via `ts-node-ext`
- `script` run the `src/script.ts` example directly via `ts-node-ext`
- `run:*` - replace `*` with `main`, `cli`, or `script` to run the compiled js using `node` (note: run `pnpm build` first)

## Acknowledgement

Thanks to the zillions of other boilerplates that I have used in the past. Two that served as an inspiration and reference for this one in particular are:

- https://github.com/jsynowiec/node-typescript-boilerplate
- https://github.com/metachris/typescript-boilerplate

[nodejs]: https://nodejs.org/dist/latest-v18.x/docs/api/
[nodejs-badge]: https://img.shields.io/badge/Node.js->=%2018.12-blue.svg
[typescript]: https://www.typescriptlang.org/
[typescript-5-0]: https://devblogs.microsoft.com/typescript/announcing-typescript-5-0/
[ts-badge]: https://img.shields.io/badge/TypeScript-4.9-blue.svg
[license-badge]: https://img.shields.io/badge/license-MIT-blue.svg
[license]: https://github.com/firxworx/ts-node-boilerplate/blob/main/LICENSE
