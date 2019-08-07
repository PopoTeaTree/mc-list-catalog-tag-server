import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {FeaturedtagMcids} from '../models';
import {FeaturedtagMcidsRepository} from '../repositories';

export class FeaturedtagmcidsController {
  constructor(
    @repository(FeaturedtagMcidsRepository)
    public featuredtagMcidsRepository : FeaturedtagMcidsRepository,
  ) {}

  @post('/featuredtag-mcids', {
    responses: {
      '200': {
        description: 'FeaturedtagMcids model instance',
        content: {'application/json': {schema: getModelSchemaRef(FeaturedtagMcids)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FeaturedtagMcids, {exclude: ['id']}),
        },
      },
    })
    featuredtagMcids: Omit<FeaturedtagMcids, 'id'>,
  ): Promise<FeaturedtagMcids> {
    return this.featuredtagMcidsRepository.create(featuredtagMcids);
  }

  @get('/featuredtag-mcids/count', {
    responses: {
      '200': {
        description: 'FeaturedtagMcids model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(FeaturedtagMcids)) where?: Where<FeaturedtagMcids>,
  ): Promise<Count> {
    return this.featuredtagMcidsRepository.count(where);
  }

  @get('/featuredtag-mcids', {
    responses: {
      '200': {
        description: 'Array of FeaturedtagMcids model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(FeaturedtagMcids)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(FeaturedtagMcids)) filter?: Filter<FeaturedtagMcids>,
  ): Promise<FeaturedtagMcids[]> {
    return this.featuredtagMcidsRepository.find(filter);
  }

  @patch('/featuredtag-mcids', {
    responses: {
      '200': {
        description: 'FeaturedtagMcids PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FeaturedtagMcids, {partial: true}),
        },
      },
    })
    featuredtagMcids: FeaturedtagMcids,
    @param.query.object('where', getWhereSchemaFor(FeaturedtagMcids)) where?: Where<FeaturedtagMcids>,
  ): Promise<Count> {
    return this.featuredtagMcidsRepository.updateAll(featuredtagMcids, where);
  }

  @get('/featuredtag-mcids/{id}', {
    responses: {
      '200': {
        description: 'FeaturedtagMcids model instance',
        content: {'application/json': {schema: getModelSchemaRef(FeaturedtagMcids)}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<FeaturedtagMcids> {
    return this.featuredtagMcidsRepository.findById(id);
  }

  @patch('/featuredtag-mcids/{id}', {
    responses: {
      '204': {
        description: 'FeaturedtagMcids PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FeaturedtagMcids, {partial: true}),
        },
      },
    })
    featuredtagMcids: FeaturedtagMcids,
  ): Promise<void> {
    await this.featuredtagMcidsRepository.updateById(id, featuredtagMcids);
  }

  @put('/featuredtag-mcids/{id}', {
    responses: {
      '204': {
        description: 'FeaturedtagMcids PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() featuredtagMcids: FeaturedtagMcids,
  ): Promise<void> {
    await this.featuredtagMcidsRepository.replaceById(id, featuredtagMcids);
  }

  @del('/featuredtag-mcids/{id}', {
    responses: {
      '204': {
        description: 'FeaturedtagMcids DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.featuredtagMcidsRepository.deleteById(id);
  }
}
