import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './mysqlcatalog.datasource.json';

export class MysqlcatalogDataSource extends juggler.DataSource {
  static dataSourceName = 'mysqlcatalog';

  constructor(
    @inject('datasources.config.mysqlcatalog', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
