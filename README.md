<div align="center">
  <a href="http://github.com/flyjs/fly">
    <img width=200px  src="https://cloud.githubusercontent.com/assets/8317250/8733685/0be81080-2c40-11e5-98d2-c634f076ccd7.png">
  </a>
</div>

> [markdown2html](https://github.com/deepblue-will/fly-markdown2html) plugin for _[Fly][fly]_.

[![][fly-badge]][fly]
[![npm package][npm-ver-link]][releases]
[![][dl-badge]][npm-pkg-link]
[![][travis-badge]][travis-link]
[![][mit-badge]][mit]

## Usage
> Check out the [documentation](https://github.com/markdown-it/markdown-it) to see the available options.

### Install

```a
npm install -D fly-markdown2html
```

### Example

```js
export default function* () {
  yield this
  .source('md/*.md')
  .markdown2html({html: true})
  .target('dist');
};
```

## License

[MIT][mit] © [deepblue-will][author] et [al][contributors]


[mit]:          http://opensource.org/licenses/MIT
[author]:       http://github.com/deepblue-will
[contributors]: https://github.com/deepblue-will/fly-markdown2html/graphs/contributors
[releases]:     https://github.com/deepblue-will/fly-markdown2html/releases
[fly]:          https://www.github.com/flyjs/fly
[fly-badge]:    https://img.shields.io/badge/fly-JS-05B3E1.svg?style=flat-square
[mit-badge]:    https://img.shields.io/badge/license-MIT-444444.svg?style=flat-square
[npm-pkg-link]: https://www.npmjs.org/package/fly-markdown2html
[npm-ver-link]: https://img.shields.io/npm/v/fly-markdown2html.svg?style=flat-square
[dl-badge]:     http://img.shields.io/npm/dm/fly-markdown2html.svg?style=flat-square
[travis-link]:  https://travis-ci.org/deepblue-will/fly-markdown2html
[travis-badge]: http://img.shields.io/travis/deepblue-will/fly-markdown2html.svg?style=flat-square
