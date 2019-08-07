import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mysql: {schema: 'tag', table: 'FeaturedTag'}}})
export class Featuredtag extends Entity {
  @property({
    type: String,
    required: true,
    length: 25,
    id: 1,
    mysql: {"columnName":"id","dataType":"char","dataLength":25,"dataPrecision":null,"dataScale":null,"nullable":"N"},
  })
  id: String;

  @property({
    type: Date,
    required: true,
    mysql: {"columnName":"updatedAt","dataType":"datetime","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"N"},
  })
  updatedat: Date;

  @property({
    type: Date,
    required: true,
    mysql: {"columnName":"createdAt","dataType":"datetime","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"N"},
  })
  createdat: Date;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Featuredtag>) {
    super(data);
  }
}

export interface FeaturedtagRelations {
  // describe navigational properties here
}

export type FeaturedtagWithRelations = Featuredtag & FeaturedtagRelations;
