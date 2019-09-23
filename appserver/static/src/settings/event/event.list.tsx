import * as React from 'react';
import {Table, Segment, Dimmer, Loader } from 'semantic-ui-react'
import EventDelete from './event.delete';
import EventForm from './event.form';
import {EventInterface} from './event.interface';
import EventService from './event.service';


interface EventListState {
  isLoading: boolean;
  items: EventInterface[];
}

class EventList extends React.Component {

  state: EventListState = {items: [], isLoading: true};

  api = new EventService();

  componentDidMount() {
    this.refreshItems();
  };

  refreshItems() {
    this.setState({items: [], isLoading: true});
    this.api.getAll().then((items: EventInterface[]) => {
      this.setState({items, isLoading: false});
    });
  };

  onCreate = (item: EventInterface) => {
    this.setState({isLoading: true});
    this.api.create(item).then((createdItem: EventInterface) => {
      this.setState({items: [...this.state.items, createdItem], isLoading: false});
    })
  };

  onUpdate = (item: EventInterface) => {
    this.setState({isLoading: true});
    this.api.update(item._key, item).then((updatedItem: EventInterface) => {
      const items = [...this.state.items];
      const index = items.findIndex(i => i._key === item._key);
      items[index] = updatedItem;
      this.setState({items, isLoading: false});
    })
  };

  onDelete = (item: EventInterface) => {
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
    <EventForm onSuccess={this.onCreate}/>,
    <Table celled>
    <Table.Header>
        <Table.Row>
            <Table.HeaderCell key="uuid">Uuid</Table.HeaderCell>
        <Table.HeaderCell key="eventId">Event Id</Table.HeaderCell>
    <Table.HeaderCell key="description">Description</Table.HeaderCell>
        <Table.HeaderCell key="_createdAt">Created at</Table.HeaderCell>
    <Table.HeaderCell key="_updatedAt">Updated at</Table.HeaderCell>
    <Table.HeaderCell key="action">Action</Table.HeaderCell>
        </Table.Row>
        </Table.Header>

        <Table.Body>

        {this.state.items.map((item: EventInterface) => {
            return <Table.Row>
                <Table.Cell>{item._key}</Table.Cell>
            <Table.Cell>{item.eventId}</Table.Cell>
            <Table.Cell>{item.description}</Table.Cell>
            <Table.Cell>{this.timestampToDate(item._createdAt)}</Table.Cell>
            <Table.Cell>{this.timestampToDate(item._updatedAt)}</Table.Cell>
            <Table.Cell>
            <EventForm item={item} onSuccess={this.onUpdate}/>
            <EventDelete item={item} onSuccess={this.onDelete}/>
            </Table.Cell>
            </Table.Row>
          })}

        </Table.Body>

        </Table>
        </Segment>

  ]

  }
}

export default EventList;
