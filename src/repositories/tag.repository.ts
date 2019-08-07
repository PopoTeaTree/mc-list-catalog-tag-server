import {DefaultCrudRepository} from '@loopback/repository';
import {Tag, TagRelations} from '../models';
import {MysqltagDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TagRepository extends DefaultCrudRepository<
  Tag,
  typeof Tag.prototype.id,
  TagRelations
> {
  constructor(
    @inject('datasources.mysqltag') dataSource: MysqltagDataSource,
  ) {
    super(Tag, dataSource);
  }
}
