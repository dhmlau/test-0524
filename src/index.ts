import {Test_0524Application} from './application';
import {ApplicationConfig} from '@loopback/core';

export {Test_0524Application};

export async function main(options: ApplicationConfig = {}) {
  const app = new Test_0524Application(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}