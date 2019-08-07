import {DefaultCrudRepository} from '@loopback/repository';
import {Featuredtag, FeaturedtagRelations} from '../models';
import {MysqltagDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class FeaturedtagRepository extends DefaultCrudRepository<
  Featuredtag,
  typeof Featuredtag.prototype.id,
  FeaturedtagRelations
> {
  constructor(
    @inject('datasources.mysqltag') dataSource: MysqltagDataSource,
  ) {
    super(Featuredtag, dataSource);
  }
}
