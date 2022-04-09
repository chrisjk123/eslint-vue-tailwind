
# Eslint Vue Tailwind

An opinionated code respository for conforming to Vue v3 and Tailwind v3 coding standards. 

## Installation

### Recommended prerequisites

* [NPX](https://www.npmjs.com/package/npx) - execute npm package binaries
* [NPM](https://docs.npmjs.com/cli/v6/commands/npm-install) - node package manager
* [VScode](https://code.visualstudio.com/) - Microsoft code editor

### Guide

Clone this repository or update the recommended files below to your existing project:
* `package.json` (essential)
* `.eslintrc.js` (essential)
* `tailwind.config.js` (essential)
* `webpack.config.js`, `webpack.mix.js` - **non-essential [Laravel-mix wrapper](https://laravel-mix.com/)** for running webpack (optional)

Once the project has been cloned, next install NPM within the project root:

```
npm install
```

### Usage

Run the below NPX command in the root of the directory:

```
npx eslint -c .eslintrc.js "./resources/js/**" --fix
```

* `-c .eslintrc.js` - specifies the Eslint configuration file
* `"./resources/js/**"` - i.e. all files/sub files in the directory
* `--fix` - automatically fix problems

### Recommended usage

Automatically enforce Eslint rules for your editor when saving files, thus ensuring your conforming to coding standards all the time.

* Install VSCode
* Install the Eslint VSCode extension to the editor with the following settings
* * Editor: Default Formatter > Eslint
* * Editor: Format On Paste > check
* * Editor: Format On Save > check

**NOTE**: If you're using Eslint on an old project for the first time, ensure you run the command specified in [Usage](#usage) within the root of the project and correct any of the outputted issues from Eslint.

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

### Security

If you discover any security related issues, please email christopherjk123@gmail.com instead of using the issue tracker.

## Credits

- [Christopher Kelker](https://github.com/chrisjk123)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.