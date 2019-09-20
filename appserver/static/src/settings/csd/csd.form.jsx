import React from "react";
import { FormBuilder, FieldGroup, FieldControl, Validators, } from "react-reactive-form";
import { TextInput, TextAreaInput } from '../../shared/forms';
import { Button, Form, Icon, Modal, Header } from 'semantic-ui-react'

class CsdForm extends React.Component {

  state = {modalOpen: false, formValid: false, item: {}, updateMode: false};

  form = FormBuilder.group({
    _user: [""], // @todo to remove
    _createdAt: [""],
    _updatedAt: [""],
    _key: [""],
    csdId: ["", [Validators.required, Validators.minLength(1), Validators.maxLength(1)]],
    description: ["", [Validators.maxLength(80)]],
  });

  constructor(props) {
    super(props);
    this.state = {item: this.form.value};
    this.onSuccess = props.onSuccess;
    if(props.item) {
      this.state = {...this.state, item: props.item, updateMode: true};
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.item){
      this.setState({item: nextProps.item});
    }
  }

  componentDidMount () {
    this.form.valueChanges.subscribe((value) => {
      this.setState( {formValid: this.form.valid});
    })
  }

  handleOpen = () => {
    this.form.reset();
    this.form.setValue(this.state.item);
    this.form.updateValueAndValidity();
    this.setState({modalOpen: true});
  };

  handleClose = () => this.setState({modalOpen: false});

  handleSubmit = (e) => {
    e.preventDefault();
    this.onSuccess(this.form.value);
    this.setState({modalOpen: false});
  };

  buttonLabel = () => this.state.updateMode ? 'Edit' : 'Create';
  buttonColor = () => this.state.updateMode ? 'blue' : 'green';
  formLabel = () => this.state.updateMode ? 'Update' : 'Create';
  submitLabel = () => this.state.updateMode ? 'Save' : 'Submit';
  submitIcon = () => this.state.updateMode ? 'pencil' : 'add';

  fieldGroup =  (
      <FieldGroup control={this.form} render={() => (<Form onSubmit={this.handleSubmit}>
        <FieldControl name="csdId" render={TextInput} meta={{label: "CSD ID"}}/>
        <FieldControl name="description" render={TextAreaInput} meta={{label: "Description"}}/>
      </Form>)}
      />);

  render() {
    return (
        <Modal
            dimmer="inverted"
            size="tiny"
            trigger={<Button inverted color={this.buttonColor()} attached="right" style={{marginRight: '10px'}} onClick={this.handleOpen}>
              {this.buttonLabel()}
            </Button>}
            open={this.state.modalOpen}
            onClose={this.handleClose}>
          <Header icon={this.submitIcon()} content={this.formLabel()} />
          <Modal.Content>
            {this.fieldGroup}
          </Modal.Content>
          <Modal.Actions>
            <Button color='red' onClick={this.handleClose} inverted>
              <Icon name='close' /> Cancel
            </Button>
            <Button color='green' onClick={this.handleSubmit} disabled={!this.state.formValid} inverted>
              <Icon name='checkmark' /> {this.submitLabel()}
            </Button>
          </Modal.Actions>
        </Modal>

    );
  }
}

export default CsdForm;
