# 引导脚本

`bootstrap.js`

```js
var MakeItRed;

function log(msg) {
  Zotero.debug("Make It Red: " + msg);
}

function install() {
  log("Installed 2.0");
}

async function startup({ id, version, rootURI }) {
  log("Starting 2.0");

  Zotero.PreferencePanes.register({
    pluginID: "make-it-red@example.com",
    src: rootURI + "preferences.xhtml",
    scripts: [rootURI + "preferences.js"],
  });

  Services.scriptloader.loadSubScript(rootURI + "make-it-red.js");
  MakeItRed.init({ id, version, rootURI });
  MakeItRed.addToAllWindows();
  await MakeItRed.main();
}

function onMainWindowLoad({ window }) {
  MakeItRed.addToWindow(window);
}

function onMainWindowUnload({ window }) {
  MakeItRed.removeFromWindow(window);
}

function shutdown() {
  log("Shutting down 2.0");
  MakeItRed.removeFromAllWindows();
  MakeItRed = undefined;
}

function uninstall() {
  log("Uninstalled 2.0");
}
```
