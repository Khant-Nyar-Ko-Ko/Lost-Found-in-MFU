const functions = require("firebase-functions");
const next = require("next");

const app = next({
  dev: false, // Set this to false for production
  conf: {
    distDir: "next", // Specify the build directory
  },
});
const handle = app.getRequestHandler();

exports.next = functions.https.onRequest((req: Request, res: Response) => {
  return app.prepare().then(() => {
    handle(req, res);
  });
});
