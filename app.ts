import { App } from './server.js';
import express from 'express';

const port = 3000;

const appInstance = new App({});
const app = appInstance.CreateApp();

// this is a simple route to make sure everything is working properly
const runningMessage = `Server running at http://localhost:${port}`;
app.get('/', (req: express.Request, res: express.Response) => {
  res.status(200).send(runningMessage);
});

app.listen(port, () => {
  // routes.forEach((route: CommonRoutesConfig) => {
  //   debugLog(`Routes configured for ${route.name}`);
  // });
  // our only exception to avoiding console.log(), because we
  // always want to know when the server is done starting up
  console.log(runningMessage);
});
