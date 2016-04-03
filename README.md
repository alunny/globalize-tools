# Globalize Tools

This module merges together several libraries that assist with tooling for [Globalize][g]
and [react-globalize][rg].

Some of these modules have interdependencies, as well as similar peer dependencies, and
keeping the code in a single repository prevents unwanted conflicts in applications.
Because all of these modules are intended for offline use, the overhead for users who just
want, for example, Webpack tooling but not React is minimal.

## Modules

* globalize-compiler: runtime compiler for Globalize formatters and parsers [(original
  repo)][gc]
* react-globalize-compiler: compiler support for react-globalize [(original repo)][rgc]
* globalize-webpack-plugin: webpack build integration for globalize-compiler [(original
  repo)][gwp]
* react-globalize-webpack-plugin: webpack build integration for react-globalize-compiler
  [(original repo)][rgwp]
* default-globalize-messages: shim for react-globalize's default messages support when
  using Globalize without React [(original repo)][dgm]

## License

MIT

[dgm]: https://github.com/alunny/default-globalize-messages
[g]: https://github.com/jquery/globalize
[gc]: https://github.com/jquery-support/globalize-compiler
[gwp]: https://github.com/rxaviers/globalize-webpack-plugin
[rg]: https://github.com/kborchers/react-globalize
[rgc]: https://github.com/rxaviers/react-globalize-compiler
[rgwp]: https://github.com/rxaviers/react-globalize-webpack-plugin
