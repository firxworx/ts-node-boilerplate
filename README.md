# TypeScript NodeJS Boilerplate (ts-node-boilerplate)

[![TypeScript version][ts-badge]][typescript-4-9]
[![Node.js version][nodejs-badge]][nodejs]
[![MIT][license-badge]][license]

This is a lightweight NodeJS boilerplate/starter for projects with TypeScript 4.9 + Jest + Prettier + ESLint setup and ready-to-rock.

pnpm serves as the node package manager however it is easy to use npm or yarn instead if you prefer.

This project uses native ES Modules. If you require CommonJS you must convert this project or may want to consider a different boilerplate.

I created this repo to provide a clean starting point for NodeJS experiments + small projects: I didn't want to have to start by customizing the configuration of another boilerplate!

## Get Started

It is recommended that you review all packages in `package.json` and familiarize yourself with all configuration files.

To use this repo as a starter:

- clone/copy/download the repo and open the project folder
- update `package.json` with any relevant information specific to your project e.g. "author", "description", "license"
- run `pnpm install`

Don't forget to replace this README with something relevant to your project!

## Scripts

- `clean` - remove coverage data, Jest cache and transpiled files in the build folder
- `prebuild` - lint source files and tests before building
- `build` - transpile TypeScript to ES6 and output to `build/`
- `build:watch` - watch mode will automatically transpile source files as files are changed
- `lint` - lint source files and tests
- `prettier` - reformat files with prettier
- `test` - run tests
- `test:watch` - watch mode will automatically re-run tests as files are changed

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
