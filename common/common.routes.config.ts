import express from 'express';
export abstract class CommonRoutesConfig {
  constructor(protected app: express.Application, protected _name: string) {
    this.configureRoutes();
  }

  get name() {
    return this._name;
  }

  // similar between these classes (like configuring the API endpoints),
  // but that needs a different implementation for each class
  abstract configureRoutes(): express.Application;
}
