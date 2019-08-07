import {DefaultCrudRepository} from '@loopback/repository';
import {FeaturedtagMcids, FeaturedtagMcidsRelations} from '../models';
import {MysqltagDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class FeaturedtagMcidsRepository extends DefaultCrudRepository<
  FeaturedtagMcids,
  typeof FeaturedtagMcids.prototype.id,
  FeaturedtagMcidsRelations
> {
  constructor(
    @inject('datasources.mysqltag') dataSource: MysqltagDataSource,
  ) {
    super(FeaturedtagMcids, dataSource);
  }
}
