import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    mysql: {
      table: 'customer',
    },
  },
})
export class Abc extends Entity {
  @property({
    type: 'string',
    id: true,
    mysql: {
      columnName: 'custid',
    },
  })
  id?: string;

  @property({
    type: 'string',
    mysql: {
      columnName: 'name',
    },
  })
  abcname?: string;

  constructor(data?: Partial<Abc>) {
    super(data);
  }
}
