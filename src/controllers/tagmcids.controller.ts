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
import {TagMcids} from '../models';
import {TagMcidsRepository} from '../repositories';

export class TagmcidsController {
  constructor(
    @repository(TagMcidsRepository)
    public tagMcidsRepository : TagMcidsRepository,
  ) {}

  @post('/tag-mcids', {
    responses: {
      '200': {
        description: 'TagMcids model instance',
        content: {'application/json': {schema: getModelSchemaRef(TagMcids)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TagMcids, {exclude: ['id']}),
        },
      },
    })
    tagMcids: Omit<TagMcids, 'id'>,
  ): Promise<TagMcids> {
    return this.tagMcidsRepository.create(tagMcids);
  }

  @get('/tag-mcids/count', {
    responses: {
      '200': {
        description: 'TagMcids model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(TagMcids)) where?: Where<TagMcids>,
  ): Promise<Count> {
    return this.tagMcidsRepository.count(where);
  }

  @get('/tag-mcids', {
    responses: {
      '200': {
        description: 'Array of TagMcids model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(TagMcids)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(TagMcids)) filter?: Filter<TagMcids>,
  ): Promise<TagMcids[]> {
    return this.tagMcidsRepository.find(filter);
  }

  @patch('/tag-mcids', {
    responses: {
      '200': {
        description: 'TagMcids PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TagMcids, {partial: true}),
        },
      },
    })
    tagMcids: TagMcids,
    @param.query.object('where', getWhereSchemaFor(TagMcids)) where?: Where<TagMcids>,
  ): Promise<Count> {
    return this.tagMcidsRepository.updateAll(tagMcids, where);
  }

  @get('/tag-mcids/{id}', {
    responses: {
      '200': {
        description: 'TagMcids model instance',
        content: {'application/json': {schema: getModelSchemaRef(TagMcids)}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<TagMcids> {
    return this.tagMcidsRepository.findById(id);
  }

  @patch('/tag-mcids/{id}', {
    responses: {
      '204': {
        description: 'TagMcids PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TagMcids, {partial: true}),
        },
      },
    })
    tagMcids: TagMcids,
  ): Promise<void> {
    await this.tagMcidsRepository.updateById(id, tagMcids);
  }

  @put('/tag-mcids/{id}', {
    responses: {
      '204': {
        description: 'TagMcids PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() tagMcids: TagMcids,
  ): Promise<void> {
    await this.tagMcidsRepository.replaceById(id, tagMcids);
  }

  @del('/tag-mcids/{id}', {
    responses: {
      '204': {
        description: 'TagMcids DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.tagMcidsRepository.deleteById(id);
  }
}
