import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mysql: {schema: 'tag', table: 'Tag'}}})
export class Tag extends Entity {
  @property({
    type: String,
    required: true,
    length: 25,
    id: 1,
    mysql: {"columnName":"id","dataType":"char","dataLength":25,"dataPrecision":null,"dataScale":null,"nullable":"N"},
  })
  id: String;

  @property({
    type: String,
    required: true,
    length: 16777215,
    mysql: {"columnName":"name","dataType":"mediumtext","dataLength":16777215,"dataPrecision":null,"dataScale":null,"nullable":"N"},
  })
  name: String;

  @property({
    type: String,
    required: true,
    length: 16777215,
    mysql: {"columnName":"description","dataType":"mediumtext","dataLength":16777215,"dataPrecision":null,"dataScale":null,"nullable":"N"},
  })
  description: String;

  @property({
    type: Number,
    required: true,
    precision: 3,
    scale: 0,
    mysql: {"columnName":"isRecommended","dataType":"tinyint","dataLength":null,"dataPrecision":3,"dataScale":0,"nullable":"N"},
  })
  isrecommended: Number;

  @property({
    type: String,
    required: true,
    length: 191,
    mysql: {"columnName":"tagType","dataType":"varchar","dataLength":191,"dataPrecision":null,"dataScale":null,"nullable":"N"},
  })
  tagtype: String;

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

  constructor(data?: Partial<Tag>) {
    super(data);
  }
}

export interface TagRelations {
  // describe navigational properties here
}

export type TagWithRelations = Tag & TagRelations;
