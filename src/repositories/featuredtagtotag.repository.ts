import {DefaultCrudRepository} from '@loopback/repository';
import {Featuredtagtotag, FeaturedtagtotagRelations} from '../models';
import {MysqltagDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class FeaturedtagtotagRepository extends DefaultCrudRepository<
  Featuredtagtotag,
  typeof Featuredtagtotag.prototype.id,
  FeaturedtagtotagRelations
> {
  constructor(
    @inject('datasources.mysqltag') dataSource: MysqltagDataSource,
  ) {
    super(Featuredtagtotag, dataSource);
  }
}
