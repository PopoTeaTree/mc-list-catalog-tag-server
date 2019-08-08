import {DefaultCrudRepository} from '@loopback/repository';
import {McTagids, McTagidsRelations} from '../models';
import {MysqlcatalogDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class McTagidsRepository extends DefaultCrudRepository<
  McTagids,
  typeof McTagids.prototype.id,
  McTagidsRelations
> {
  constructor(
    @inject('datasources.mysqlcatalog') dataSource: MysqlcatalogDataSource,
  ) {
    super(McTagids, dataSource);
  }
}
