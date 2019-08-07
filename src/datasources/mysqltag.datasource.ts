import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './mysqltag.datasource.json';

export class MysqltagDataSource extends juggler.DataSource {
  static dataSourceName = 'mysqltag';

  constructor(
    @inject('datasources.config.mysqltag', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
