import {CsdInterface} from './csd.interface';

const React = require('react');
const ApiService = require('../../shared/api.service').default;

class CsdService extends ApiService {

  constructor() {
    super();
    this.init('csd');
  }

  create = ({csdId, description} : CsdInterface) : Promise<CsdInterface> => {
    return this._create({csdId, description}).then((item: CsdInterface) => {
      return this.getByKey(item._key);
    });
  };

  update = (_key: string, {csdId, description, _createdAt} : CsdInterface) => {
    return this._update(_key, {csdId, description, _createdAt}).then((item: CsdInterface) => {
      return this.getByKey(item._key);
    });
  };

  getByKey = (_key: string): Promise<CsdInterface> => this._getByKey(_key);

  getAll = () : Promise<CsdInterface[]> => this._getAll();

  delete = (_key: string) : Promise<CsdInterface> => this._delete(_key);

}

export default CsdService;
