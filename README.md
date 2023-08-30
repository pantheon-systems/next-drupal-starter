<div align="center">
	<picture>
  	<source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/pantheon-systems/decoupled-kit-js/canary/web/static/img/W_Fist-Tagline.png">
  	<img height="120" alt="Pantheon.io logo featuring a fist capturing lighting. Pantheon™, The Platform for Extraordinary Websites." src="https://raw.githubusercontent.com/pantheon-systems/decoupled-kit-js/canary/web/static/img/B_Fist-Tagline.png">
	</picture>
	<a href="https://decoupledkit.pantheon.io/docs#next-drupal-starter">
		<h1 style="margin:auto;" align="center">Next Drupal Starter</h1>
	</a>
</div>

For detailed documentation on the Decoupled Kit Starters, visit
[the Decoupled Kit developer documentation](https://decoupledkit.pantheon.io).

For more information on using the starter on Pantheon Front-End Sites, visit
[the Pantheon.io platform documentation](https://docs.pantheon.io/guides/decoupled/).

## Getting Started

The Next Drupal starter requires Node.js and is built and tested on the LTS
version which can be found on the
[Node.js downloads page](https://nodejs.org/en/download).

The starter kit supports npm, pnpm, and yarn. If you created the starer via the
Pantheon Front-End Sites dashboard, it will use npm by default. To change this,
delete the `package-lock.json` file and the `node-modules` folder, then run the
install command of your preferred package manager.

If you created the starter via `create-pantheon-decoupled-kit`, it will detect
the package manager used to run the command and use it install the starter's
dependencies unless the `--noInstall` flag was used.

## `@pantheon-systems` npm Packages

## `@pantheon-systems/drupal-kit` npm package

The Pantheon
[`@pantheon-systems/drupal-kit`](https://www.npmjs.com/package/@pantheon-systems/drupal-kit)
is included as a dependency in this project. This allows developers to make use
of utility functions to simplify the process of building and maintaining a
Front-End site on Pantheon.

API reference documentation can be found at
https://decoupledkit.pantheon.io/docs/Packages/drupal-kit.

### `create-pantheon-decoupled-kit`

The `create-pantheon-decoupled-kit` npm package, or "the CLI", is the single
source of truth for all of the JavaScript/TypeScript starter kit templates. See
[Using the CLI](https://decoupledkit.pantheon.io/docs/frontend-starters/using-the-cli)
for more information.

In addition to scaffolding new projects, a number of add-ons are available which
can be added to an existing project. For more detailed information on the
available add-ons, see the
[Decoupled Kit developer documentation](https://decoupledkit.pantheon.io/docs/frontend-starters/using-the-cli#add-ons).

### `@pantheon-systems/decoupled-kit-health-check`

To ensure the Decoupled Kit starter has what it needs to source data from a
[Decoupled Kit Backend](https://decoupledkit.pantheon.io/docs/backend-starters),
a health-check is run as a part of the the build command and will error in case
a critical component is not met.

See a
[detailed description of the health-check here](https://github.com/pantheon-systems/decoupled-kit-js/tree/canary/packages/decoupled-kit-health-check#what-does-it-do).

To disable the health check, see
[Disabling the decoupled kit health check](https://decoupledkit.pantheon.io/docs/frontend-starters/nextjs/nextjs-drupal/troubleshooting#disabling-the-decoupled-kit-health-check)

## Local development

### Lando

To configure the starter for local development with Lando, see the
[Decoupled Kit developer docs on Local Development](https://decoupledkit.pantheon.io/docs/backend-starters/decoupled-drupal/local-development).

### Commands

The Decoupled Kit starters include a number of scripts defined in the
`package.json`. To list all of these scripts, `cd` into your starter's directory
and in a terminal use the `npm run` command.

Some commands include:

### `dev`

Runs the starter in developer mode.

#### `build`

Runs the build step for the starter. By default, the
`@pantheon-systems/decoupled-kit-health-check` is run before the build. This
command is required for Pantheon Front-End Sites.

#### `start`

Runs the starter in production mode. This command is required for Pantheon
Front-End Sites.

### `test`

Runs the tests.

### `update-snapshots`

Updates the snapshots used for the snapshot tests. The starter comes with an
example snapshot test that may need to be updating depending on your
configuration.
