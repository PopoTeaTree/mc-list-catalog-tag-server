import {DefaultCrudRepository} from '@loopback/repository';
import {Company, CompanyRelations} from '../models';
import {MysqlcatalogDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CompanyRepository extends DefaultCrudRepository<
  Company,
  typeof Company.prototype.id,
  CompanyRelations
> {
  constructor(
    @inject('datasources.mysqlcatalog') dataSource: MysqlcatalogDataSource,
  ) {
    super(Company, dataSource);
  }
}
