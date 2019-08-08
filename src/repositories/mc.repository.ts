import {DefaultCrudRepository} from '@loopback/repository';
import {Mc, McRelations} from '../models';
import {MysqlcatalogDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class McRepository extends DefaultCrudRepository<
  Mc,
  typeof Mc.prototype.id,
  McRelations
> {
  constructor(
    @inject('datasources.mysqlcatalog') dataSource: MysqlcatalogDataSource,
  ) {
    super(Mc, dataSource);
  }
}
