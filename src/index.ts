import {MccMclistServer3Application} from './application';
import {ApplicationConfig} from '@loopback/core';

export {MccMclistServer3Application};

export async function main(options: ApplicationConfig = {}) {
  const app = new MccMclistServer3Application(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
