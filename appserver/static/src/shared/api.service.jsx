const React = require('react');
const Axios = require('axios');

class ApiService extends React.Component {


  baseUrl = '/en-US/splunkd/__raw/servicesNS/nobody/reactapp/storage/collections/data';
  collectionName = 'csd';

  init = (collectionName) => {
    this.collectionName = collectionName;
    this.splunkKey = this.getCookie('splunkweb_csrf_token_8000');
  };

  url = (key = '') => {
    return `${this.baseUrl}/${this.collectionName}/${key}`
  };

  now = () => (new Date).getTime() / 1000;

  options = () => ({
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      'X-Splunk-Form-Key': this.splunkKey
    }
  });

  _create = (item) => {
    item = {...item, _createdAt: this.now(), _updatedAt: this.now()};
    return Axios.post(this.url(), item, this.options()).then(res => res.data)
  };

  _update = (_key, item) => {
    item = {...item, _updatedAt: this.now()};
    return Axios.post(this.url(_key), item, this.options()).then(res => res.data)
  };

  _getByKey = (_key) => Axios.get(this.url(_key)).then(res => res.data);

  _getAll = () => Axios.get(this.url()).then(res => res.data);

  _delete = (_key) => Axios.delete(this.url(_key), this.options()).then(res => res);

  getCookie = (cname) => {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  };


}

export default ApiService;
