import { CommonRoutesConfig } from '../common/common.routes.config';
import express from 'express';

export class UserRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, 'UserRoutes');
  }

  configureRoutes() {
    this.app
      .route('/users')
      .get((req: express.Request, res: express.Response) => {
        res.status(200).send('List of users');
      });

    this.app
      .route('/user/:userId')
      .all(
        (
          req: express.Request,
          res: express.Response,
          next: express.NextFunction
        ) => {
          next();
        }
      )
      .get((req: express.Request, res: express.Response) => {
        res.status(200).send(`Get requested id ${req.params.userId}`);
      })
      .put((req: express.Request, res: express.Response) => {
        res.status(200).send(`put requested id ${req.params.userId}`);
      })
      .patch((req: express.Request, res: express.Response) => {
        res.status(200).send(`patch requested id ${req.params.userId}`);
      })
      .delete((req: express.Request, res: express.Response) => {
        res.status(200).send(`delete requested id ${req.params.userId}`);
      });

    return this.app;
  }
}
