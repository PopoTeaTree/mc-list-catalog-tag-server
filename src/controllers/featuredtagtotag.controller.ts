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
import {Featuredtagtotag} from '../models';
import {FeaturedtagtotagRepository} from '../repositories';

export class FeaturedtagtotagController {
  constructor(
    @repository(FeaturedtagtotagRepository)
    public featuredtagtotagRepository : FeaturedtagtotagRepository,
  ) {}

  @post('/featuredtagtotags', {
    responses: {
      '200': {
        description: 'Featuredtagtotag model instance',
        content: {'application/json': {schema: getModelSchemaRef(Featuredtagtotag)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Featuredtagtotag, {exclude: ['id']}),
        },
      },
    })
    featuredtagtotag: Omit<Featuredtagtotag, 'id'>,
  ): Promise<Featuredtagtotag> {
    return this.featuredtagtotagRepository.create(featuredtagtotag);
  }

  @get('/featuredtagtotags/count', {
    responses: {
      '200': {
        description: 'Featuredtagtotag model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Featuredtagtotag)) where?: Where<Featuredtagtotag>,
  ): Promise<Count> {
    return this.featuredtagtotagRepository.count(where);
  }

  @get('/featuredtagtotags', {
    responses: {
      '200': {
        description: 'Array of Featuredtagtotag model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Featuredtagtotag)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Featuredtagtotag)) filter?: Filter<Featuredtagtotag>,
  ): Promise<Featuredtagtotag[]> {
    return this.featuredtagtotagRepository.find(filter);
  }

  @patch('/featuredtagtotags', {
    responses: {
      '200': {
        description: 'Featuredtagtotag PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Featuredtagtotag, {partial: true}),
        },
      },
    })
    featuredtagtotag: Featuredtagtotag,
    @param.query.object('where', getWhereSchemaFor(Featuredtagtotag)) where?: Where<Featuredtagtotag>,
  ): Promise<Count> {
    return this.featuredtagtotagRepository.updateAll(featuredtagtotag, where);
  }

  @get('/featuredtagtotags/{id}', {
    responses: {
      '200': {
        description: 'Featuredtagtotag model instance',
        content: {'application/json': {schema: getModelSchemaRef(Featuredtagtotag)}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Featuredtagtotag> {
    return this.featuredtagtotagRepository.findById(id);
  }

  @patch('/featuredtagtotags/{id}', {
    responses: {
      '204': {
        description: 'Featuredtagtotag PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Featuredtagtotag, {partial: true}),
        },
      },
    })
    featuredtagtotag: Featuredtagtotag,
  ): Promise<void> {
    await this.featuredtagtotagRepository.updateById(id, featuredtagtotag);
  }

  @put('/featuredtagtotags/{id}', {
    responses: {
      '204': {
        description: 'Featuredtagtotag PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() featuredtagtotag: Featuredtagtotag,
  ): Promise<void> {
    await this.featuredtagtotagRepository.replaceById(id, featuredtagtotag);
  }

  @del('/featuredtagtotags/{id}', {
    responses: {
      '204': {
        description: 'Featuredtagtotag DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.featuredtagtotagRepository.deleteById(id);
  }
}
