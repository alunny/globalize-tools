var Globalize = require("globalize");

var messageFormatterSuper = Globalize.messageFormatter;

function sanitizePath(pathString) {
  return pathString.trim()
    .replace(/\{/g, "(")
    .replace(/\}/g, ")")
    .replace(/\//g, "|")
    .replace(/\n/g, " ")
    .replace(/ +/g, " ")
    .replace(/"/g, "'");
}

// Monkeypatch Globalize's `.formatMessage` to allow default message.
// `this` is the global Globalize object or an instance of Globalize
function messageFormatterWithDefaults(pathOrMessage) {
  var args = [].slice.call(arguments);
  var aux = {};
  var sanitizedPath = sanitizePath(pathOrMessage);

  /*
   * want to distinguish between default value and path value - just checking
   * for sanitizedPath won't be enough, because sanitizedPath !== pathOrMessage
   * for strings like "salutations/hi"
   */
  var sanitizedPathExists = this.cldr &&
    this.cldr.get(["globalize-messages/{bundle}", sanitizedPath]) !== undefined;
  var pathExists = this.cldr &&
    this.cldr.get(["globalize-messages/{bundle}", pathOrMessage]) !== undefined;

  if (!sanitizedPathExists && !pathExists) {
    aux[this.cldr.attributes.bundle] = {};
    aux[this.cldr.attributes.bundle][sanitizedPath] = pathOrMessage;
    Globalize.loadMessages(aux);
  }

  args[0] = sanitizedPathExists ? sanitizedPath : pathOrMessage;
  return messageFormatterSuper.apply(this, args);
}

messageFormatterWithDefaults._overridden = true;

function set() {
  if (Globalize.messageFormatter._overridden) {
    console.warn("[default-globalize-messages] warning: messageFormatter is already overridden");
    return false;
  }

  Globalize.messageFormatter = Globalize.prototype.messageFormatter =
    messageFormatterWithDefaults;
  return true;
}

function unset() {
  Globalize.messageFormatter = Globalize.prototype.messageFormatter =
    messageFormatterSuper;
}

module.exports = {
  sanitizedPath: sanitizePath,
  set: set,
  unset: unset
};
