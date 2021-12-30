const {app, BrowserWindow} = require('electron') // http://electron.atom.io/docs/api

let window = null

app.once('ready', () => {
  window = new BrowserWindow({
    width: 479,
    height: 319,
    kiosk: true,
    titleBarStyle: 'hidden',
    frame: false,
  });

  window.loadURL("URL_HERE")

  window.once('ready-to-show', () => {
    window.show()
  })
})

app.on("window-all-closed", () => {
  app.quit();
});
