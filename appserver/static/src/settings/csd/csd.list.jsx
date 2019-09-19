import React from "react";
import { Button, Icon, Label, Menu, Table } from 'semantic-ui-react'


const items = [
  {
    csdId: 'A',
    description: 'Lorem ipsum'
  },
  {
    csdId: 'B',
    description: 'Lorem ipsum'
  },
  {
    csdId: 'C',
    description: 'Lorem ipsum'
  },
  {
    csdId: 'D',
    description: 'Lorem ipsum'
  }
];

class CsdList extends React.Component {

  render() {
    return (
        <div>
        <Button label="elo"/>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>CSD ID</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>

            {items.map((item, key) => {
              return <Table.Row>
                <Table.Cell>{item.csdId}</Table.Cell>
                <Table.Cell>{item.description}</Table.Cell>
              </Table.Row>
            })}

          </Table.Body>

        </Table>
        </div>
      );
  }
}

export default CsdList;
