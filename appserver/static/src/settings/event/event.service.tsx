import {EventInterface} from './event.interface';

const React = require('react');
const ApiService = require('../../shared/api.service').default;

class EventService extends ApiService {

  constructor() {
    super();
    this.init('event');
  }

  create = ({eventId, description, invocationDate, revocationDate} : EventInterface) : Promise<EventInterface> => {
    return this._create({eventId, description, invocationDate, revocationDate}).then((item: EventInterface) => {
      return this.getByKey(item._key);
    });
  };

  update = (_key: string, {eventId, description, invocationDate, revocationDate, _createdAt} : EventInterface) => {
    return this._update(_key, {eventId, description, invocationDate, revocationDate, _createdAt}).then((item: EventInterface) => {
      return this.getByKey(item._key);
    });
  };

  getByKey = (_key: string): Promise<EventInterface> => this._getByKey(_key);

  getAll = () : Promise<EventInterface[]> => this._getAll();

  delete = (_key: string) : Promise<EventInterface> => this._delete(_key);

}

export default EventService;
