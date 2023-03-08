# TypeScript NodeJS Boilerplate (ts-node-boilerplate)

[![TypeScript version][ts-badge]][typescript-4-9]
[![Node.js version][nodejs-badge]][nodejs]
[![MIT][license-badge]][license]

This is a lightweight NodeJS boilerplate/starter for projects with TypeScript 4.9 + Jest + Prettier + ESLint setup and ready-to-rock with ES Modules (ESM) and a strict tsconfig.

The repo provides a clean starting point for experiments and small projects in NodeJS.

The `src/` folder has two basic examples included:

- `main.ts` - for a nodejs package or library style project to compile and run via `node`
- `cli.ts` - for command-line-interface (cli) tasks that runs using `ts-node-esm` from the ts-node package

Keep one or both depending on your needs!

The tests also work and include examples of testing async functions and console output.

This project uses ES Modules (ESM). If you require CommonJS you must convert this project or you may want to consider a different boilerplate.

The examples demonstrate a few key nuances of ESM:

- relative import paths require full extensions with `.js` vs. `.ts` to reflect the compiled output
- certain global-like values such as `__dirname`, `require()` cannot be used directly
- the cli example demonstrates top-level `await` and is run via `ts-node-esm` from the `ts-node` package

## Get started

Review the dependencies in `package.json` and familiarize yourself with the scripts + configuration.

`pnpm` is the recommended node package manager however you can easily use `npm` or `yarn` instead.

Clone/copy/download the repo and open the project folder. You can use `degit` to download a fast local copy of this repo on your machine without git and the project's git history:

```bash
pnpm dlx degit firxworx/ts-node-boilerplate <target_folder_name_or_path>
```

Revise `package.json` with relevant information specific to your project including the "author", "description", "license", "engines", and "scripts" properties.

Install dependencies:

```bash
pnpm install
```

Upgrade all packages to their latest release version using pnpm's interactive installer:

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

## Build and run your project

The following scripts are defined in `package.json` to support the development process:

- `clean` - remove coverage data, Jest cache and transpiled files in the build folder
- `prebuild` - lint source files and tests before building
- `build` - transpile TypeScript to ES (js) and output to `build/`
- `build:watch` - watch mode will automatically transpile source files as files are changed
- `lint` - lint source files and tests
- `prettier` - reformat files with prettier
- `test` - run tests
- `test:watch` - watch mode will automatically re-run tests as files are changed

The following scripts run the project:

- `cli` - run the `src/cli.ts` example directly using `ts-node-ext` from the ts-node package
- `start` - run the build project using `node` (you must run `pnpm build` first to build)

## Acknowledgement

Thanks to the zillions of other boilerplates that I have used in the past. In particular two that served as an inspiration and reference for this one are:

- https://github.com/jsynowiec/node-typescript-boilerplate
- https://github.com/metachris/typescript-boilerplate

[nodejs]: https://nodejs.org/dist/latest-v18.x/docs/api/
[nodejs-badge]: https://img.shields.io/badge/Node.js->=%2018.12-blue.svg
[typescript]: https://www.typescriptlang.org/
[typescript-4-9]: https://devblogs.microsoft.com/typescript/announcing-typescript-4-9/
[ts-badge]: https://img.shields.io/badge/TypeScript-4.9-blue.svg
[license-badge]: https://img.shields.io/badge/license-MIT-blue.svg
[license]: https://github.com/firxworx/ts-node-boilerplate/blob/main/LICENSE
