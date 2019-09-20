import React from "react";
import { Button, Icon, Modal, Header } from 'semantic-ui-react'

class CsdDelete extends React.Component {

  state = {modalOpen: false, item: {}};

  constructor(props) {
    super(props);
    this.state = {...this.state, item: props.item};
    console.log('remove ', props.item);
  }

  componentDidMount() {
  }

  handleOpen = () => {
    this.setState({modalOpen: true});
  };

  handleClose = () => this.setState({modalOpen: false});

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({modalOpen: false});
    alert(JSON.stringify(this.state.item));
  };



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
          <Header icon="cancel" content={"Are you sure you want to delete " + this.state.item.csdId} />
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

export default CsdDelete;
