import React from "react";
import {Table, Segment, Dimmer, Loader } from 'semantic-ui-react'

const CsdForm = require('./csd.form').default;
const CsdDelete = require('./csd.delete').default;
const CsdService = require('./csd.service').default;


class CsdList extends React.Component {

  state = {items: [], isLoading: true};

  api = new CsdService();

  componentDidMount() {
    this.refreshItems();
  };

  refreshItems() {
    this.setState({items: [], isLoading: true})
    this.api.getAll().then((items) => {
      this.setState({items, isLoading: false});
    });
  };

  onCreate = (item) => {
    this.api.create(item).then(createdItem => {
      this.setState({items: [...this.state.items, createdItem]});
    })
  };

  onUpdate = (item) => {
    this.api.update(item._key, item).then(updatedItem => {
      const items = [...this.state.items];
      const index = items.findIndex(i => i._key === item._key);
      items[index] = updatedItem;
      this.setState({items});
    })
  };

  onDelete = (item) => {
    this.api.delete(item._key).then(_ => {
      const items = this.state.items;
      const index = items.findIndex(i => i._key === item._key);
      items.splice(index, 1);
      this.setState({items});
    })
  };

  getItem = (_key) => {
    return this.state.items.find(i => i._key === _key);
  }

  timestampToDate = (timestamp) => {
    return new Date(timestamp * 1000).toDateString();
  };

  render() {

    return [
      <Segment>
        <Dimmer inverted active={this.state.isLoading}>
          <Loader>Loading</Loader>
        </Dimmer>
      <CsdForm onSuccess={this.onCreate}/>,
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell key="uuid">Uuid</Table.HeaderCell>
            <Table.HeaderCell key="csdId">CSD Id</Table.HeaderCell>
            <Table.HeaderCell key="description">Description</Table.HeaderCell>
            <Table.HeaderCell key="_createdAt">Created at</Table.HeaderCell>
            <Table.HeaderCell key="_updatedAt">Updated at</Table.HeaderCell>
            <Table.HeaderCell key="action">Action</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>

          {this.state.items.map((item) => {
            return <Table.Row>
              <Table.Cell>{item._key}</Table.Cell>
              <Table.Cell>{item.csdId}</Table.Cell>
              <Table.Cell>{item.description}</Table.Cell>
              <Table.Cell>{this.timestampToDate(item._createdAt)}</Table.Cell>
              <Table.Cell>{this.timestampToDate(item._updatedAt)}</Table.Cell>
              <Table.Cell>
                <CsdForm item={item} onSuccess={this.onUpdate}/>
                <CsdDelete item={item} onSuccess={this.onDelete}/>
              </Table.Cell>
            </Table.Row>
          })}

        </Table.Body>

      </Table>
      </Segment>

    ]

  }
}

export default CsdList;
