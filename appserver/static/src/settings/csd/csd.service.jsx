const React = require('react');
const ApiService = require('../../shared/api.service').default;

class CsdService extends ApiService {

  constructor(props) {
    super(props);
    this.init('csd');
  }

  create = ({csdId, description}) => this._create({csdId, description}).then(item => {
    return this.getByKey(item._key);
  });

  update = (_key, {csdId, description, _createdAt}) => this._update(_key, {csdId, description, _createdAt}).then(item => {
    return this.getByKey(item._key);
  });

  getByKey = this._getByKey;

  getAll = () => this._getAll();

  delete = (_key) => this._delete(_key);

}

export default CsdService;
