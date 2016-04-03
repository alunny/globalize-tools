# default-globalize-messages

Default messages for [Globalize][g].

Allows calls to Globalize.formatMessage and Globalize.messageFormatter to return
themselves, for simplified development.

```js
require("default-globalize-messages").set();
var formatter = Globalize.formatMessage("Hello {name}");

formatter({ name: "Andrew" });
// => "Hello Andrew"
```

Extracted from @kborchers's [react-globalize][rg] project.

## Dependencies

This has a peer dependency on Globalize - currently:

```
"globalize": ">= 1.0.0 || 1.1.0-alpha - 1.1.x"
```

Because `peerDependencies` support in npm is not very good, it is listed as a
dev dependency in `package.json`.

## Usage

```js
// simplest way, at the start of your script
require("default-globalize-messages").set();
```

[g]: https://github.com/jquery/globalize
[rg]: https://github.com/kborchers/react-globalize

## License

MIT
