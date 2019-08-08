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
import {Featuredtag} from '../models';
import {FeaturedtagRepository} from '../repositories';

export class FeaturedtagController {
  constructor(
    @repository(FeaturedtagRepository)
    public featuredtagRepository : FeaturedtagRepository,
  ) {}

  @post('/', {
    responses: {
      '200': {
        description: 'Featuredtag model instance',
        content: {'application/json': {schema: getModelSchemaRef(Featuredtag)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Featuredtag, {exclude: ['id']}),
        },
      },
    })
    featuredtag: Omit<Featuredtag, 'id'>,
  ): Promise<Featuredtag> {
    return this.featuredtagRepository.create(featuredtag);
  }

  @get('//count', {
    responses: {
      '200': {
        description: 'Featuredtag model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Featuredtag)) where?: Where<Featuredtag>,
  ): Promise<Count> {
    return this.featuredtagRepository.count(where);
  }

  @get('/', {
    responses: {
      '200': {
        description: 'Array of Featuredtag model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Featuredtag)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Featuredtag)) filter?: Filter<Featuredtag>,
  ): Promise<Featuredtag[]> {
    return this.featuredtagRepository.find(filter);
  }

  @patch('/', {
    responses: {
      '200': {
        description: 'Featuredtag PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Featuredtag, {partial: true}),
        },
      },
    })
    featuredtag: Featuredtag,
    @param.query.object('where', getWhereSchemaFor(Featuredtag)) where?: Where<Featuredtag>,
  ): Promise<Count> {
    return this.featuredtagRepository.updateAll(featuredtag, where);
  }

  @get('//{id}', {
    responses: {
      '200': {
        description: 'Featuredtag model instance',
        content: {'application/json': {schema: getModelSchemaRef(Featuredtag)}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Featuredtag> {
    return this.featuredtagRepository.findById(id);
  }

  @patch('//{id}', {
    responses: {
      '204': {
        description: 'Featuredtag PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Featuredtag, {partial: true}),
        },
      },
    })
    featuredtag: Featuredtag,
  ): Promise<void> {
    await this.featuredtagRepository.updateById(id, featuredtag);
  }

  @put('//{id}', {
    responses: {
      '204': {
        description: 'Featuredtag PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() featuredtag: Featuredtag,
  ): Promise<void> {
    await this.featuredtagRepository.replaceById(id, featuredtag);
  }

  @del('//{id}', {
    responses: {
      '204': {
        description: 'Featuredtag DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.featuredtagRepository.deleteById(id);
  }
}
