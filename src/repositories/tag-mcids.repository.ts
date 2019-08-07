import {DefaultCrudRepository} from '@loopback/repository';
import {TagMcids, TagMcidsRelations} from '../models';
import {MysqltagDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TagMcidsRepository extends DefaultCrudRepository<
  TagMcids,
  typeof TagMcids.prototype.id,
  TagMcidsRelations
> {
  constructor(
    @inject('datasources.mysqltag') dataSource: MysqltagDataSource,
  ) {
    super(TagMcids, dataSource);
  }
}
