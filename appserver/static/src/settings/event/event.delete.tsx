import * as React from 'react';
import { Button, Icon, Modal, Header, Message } from 'semantic-ui-react'
import {EventInterface} from './event.interface';


interface EventDeleteProps {
  item: EventInterface;
  onSuccess: any;
}

class EventDelete extends React.Component<EventDeleteProps> {

  public state: any = {modalOpen: false, item: {}};
  public onSuccess: any;

  constructor(props: EventDeleteProps) {
    super(props);
    this.state = {...this.state, item: props.item};
    this.onSuccess = props.onSuccess;
  }

  componentDidMount() {
  }

  handleOpen = () => {
    this.setState({modalOpen: true});
  };

  handleClose = () => this.setState({modalOpen: false});

  handleSubmit = ((e: any) => {
    e.preventDefault();
    this.setState({modalOpen: false});
    this.onSuccess(this.state.item);
  });

  render() {
    return (
        <Modal
            dimmer="inverted"
            size="tiny"
            trigger={<Button inverted color="red" onClick={this.handleOpen}>
              Delete
            </Button>}
            open={this.state.modalOpen}
            onClose={this.handleClose}>
          <Header icon="cancel" content={"Are you sure you want to delete " + this.state.item.eventId} />

          <Modal.Content>
            <Message warning>
              <p>Warning - This action will delete all associated events domains and tasks</p>
            </Message>
          </Modal.Content>

          <Modal.Actions>
            <Button color='green' onClick={this.handleClose} inverted>
              <Icon name='close' /> Cancel
            </Button>
            <Button color='red' onClick={this.handleSubmit} inverted>
              <Icon name='checkmark' /> Delete
            </Button>
          </Modal.Actions>
        </Modal>

    );
  }
}

export default EventDelete;
