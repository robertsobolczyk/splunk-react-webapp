import * as React from 'react';
import {Table, Segment, Dimmer, Loader } from 'semantic-ui-react'
import {CsdInterface} from './csd.interface';
import CsdService from './csd.service';

const CsdForm = require('./csd.form').default;
const CsdDelete = require('./csd.delete').default;

interface CsdListState {
  isLoading: boolean;
  items: CsdInterface[];
}

class CsdList extends React.Component {

  state: CsdListState = {items: [], isLoading: true};

  api = new CsdService();

  componentDidMount() {
    this.refreshItems();
  };

  refreshItems() {
    this.setState({items: [], isLoading: true});
    this.api.getAll().then((items: CsdInterface[]) => {
      this.setState({items, isLoading: false});
    });
  };

  onCreate = (item: CsdInterface) => {
    this.setState({isLoading: true});
    this.api.create(item).then((createdItem: CsdInterface) => {
      this.setState({items: [...this.state.items, createdItem], isLoading: false});
    })
  };

  onUpdate = (item: CsdInterface) => {
    this.setState({isLoading: true});
    this.api.update(item._key, item).then((updatedItem: CsdInterface) => {
      const items = [...this.state.items];
      const index = items.findIndex(i => i._key === item._key);
      items[index] = updatedItem;
      this.setState({items, isLoading: false});
    })
  };

  onDelete = (item: CsdInterface) => {
    this.setState({isLoading: true});
    this.api.delete(item._key).then(() => {
      const items = this.state.items;
      const index = items.findIndex((i: any) => i._key === item._key);
      items.splice(index, 1);
      this.setState({items, isLoading: false});
    })
  };

  timestampToDate = (timestamp: number) => {
    return new Date(timestamp * 1000).toDateString();
  };

  render() {

    return [
      <Segment>
        <Dimmer inverted active={!!this.state.isLoading}>
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

          {this.state.items.map((item: CsdInterface) => {
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
