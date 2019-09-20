import React from "react";
import { Header, Button, Table, Modal, Icon } from 'semantic-ui-react'

const CsdForm = require('./csd.form').default;
const CsdDelete = require('./csd.delete').default;


class CsdList extends React.Component {

  state = {items: []};

  constructor(props) {
    super(props);
    this.state = {items: props.items};
  }

  render() {

    return [
      <CsdForm/>,
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>CSD ID</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
            <Table.HeaderCell>Action</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>

          {this.state.items.map((item, key) => {
            return <Table.Row>
              <Table.Cell>{item.csdId}</Table.Cell>
              <Table.Cell>{item.description}</Table.Cell>
              <Table.Cell>
                <CsdForm item={item}/>
                <CsdDelete item={item}/>
              </Table.Cell>
            </Table.Row>
          })}

        </Table.Body>

      </Table>

    ]

  }
}

export default CsdList;
