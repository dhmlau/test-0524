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
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Abc} from '../models';
import {AbcRepository} from '../repositories';

export class AbcController {
  constructor(
    @repository(AbcRepository)
    public abcRepository : AbcRepository,
  ) {}

  @post('/abcs', {
    responses: {
      '200': {
        description: 'Abc model instance',
        content: {'application/json': {schema: {'x-ts-type': Abc}}},
      },
    },
  })
  async create(@requestBody() abc: Abc): Promise<Abc> {
    return await this.abcRepository.create(abc);
  }

  @get('/abcs/count', {
    responses: {
      '200': {
        description: 'Abc model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Abc)) where?: Where,
  ): Promise<Count> {
    return await this.abcRepository.count(where);
  }

  @get('/abcs', {
    responses: {
      '200': {
        description: 'Array of Abc model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Abc}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Abc)) filter?: Filter,
  ): Promise<Abc[]> {
    return await this.abcRepository.find(filter);
  }

  @patch('/abcs', {
    responses: {
      '200': {
        description: 'Abc PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() abc: Abc,
    @param.query.object('where', getWhereSchemaFor(Abc)) where?: Where,
  ): Promise<Count> {
    return await this.abcRepository.updateAll(abc, where);
  }

  @get('/abcs/{id}', {
    responses: {
      '200': {
        description: 'Abc model instance',
        content: {'application/json': {schema: {'x-ts-type': Abc}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Abc> {
    return await this.abcRepository.findById(id);
  }

  @patch('/abcs/{id}', {
    responses: {
      '204': {
        description: 'Abc PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() abc: Abc,
  ): Promise<void> {
    await this.abcRepository.updateById(id, abc);
  }

  @put('/abcs/{id}', {
    responses: {
      '204': {
        description: 'Abc PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() abc: Abc,
  ): Promise<void> {
    await this.abcRepository.replaceById(id, abc);
  }

  @del('/abcs/{id}', {
    responses: {
      '204': {
        description: 'Abc DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.abcRepository.deleteById(id);
  }
}
