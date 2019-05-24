import {DefaultCrudRepository} from '@loopback/repository';
import {Abc} from '../models';
import {DsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AbcRepository extends DefaultCrudRepository<
  Abc,
  typeof Abc.prototype.id
> {
  constructor(
    @inject('datasources.ds') dataSource: DsDataSource,
  ) {
    super(Abc, dataSource);
  }
}
