import * as React from 'react';
import {FormBuilder, FieldGroup, FieldControl, Validators, FormGroup} from 'react-reactive-form';
import { Button, Form, Icon, Modal, Header } from 'semantic-ui-react';
import {SelectInput, TextAreaInput, TextInput} from '../../shared/form-helper';
import {CsdInterface} from '../csd/csd.interface';
import {EventInterface} from './event.interface';

interface EventFormProps {
  item?: EventInterface;
  onSuccess: any;
  csdItems: CsdInterface[];
}

interface EventFormState {
  updateMode: boolean;
  modalOpen: boolean;
  formValid: boolean;
  item?: EventInterface;
  csdItems?: CsdInterface[];
}

class EventForm extends React.Component<EventFormProps> {

  state: EventFormState = {modalOpen: false, formValid: false, updateMode: false, csdItems: []};

  form: FormGroup = FormBuilder.group({
    _user: [""], // @todo to remove
    _createdAt: [""],
    _updatedAt: [""],
    csdId: [""],
    invocationDate: [""],
    revocationDate: [""],
    _key: [""],
    eventId: ["", [Validators.required]],
    description: ["", [Validators.maxLength(80)]],
  });

  private onSuccess: any;

  constructor(props: EventFormProps) {
    super(props);
    this.state = {...this.state, item: this.form.value};
    this.onSuccess = props.onSuccess;
    if(props.item) {
      this.state = {...this.state, item: props.item, updateMode: true};
    }
  }

  componentWillReceiveProps(nextProps: any) {
    if(nextProps.item){
      this.setState({item: nextProps.item});
    }

    if(nextProps.csdItems){
      this.setState({csdItems: nextProps.csdItems});
    }
  }

  componentDidMount () {
    this.form.valueChanges.subscribe((value: any) => {
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

  handleSubmit = (e: any) => {
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
        <FieldControl name="csdId" render={SelectInput} meta={{label: "Csd Id", options: this.state.csdItems}}/>
        <FieldControl name="eventId" render={TextInput} meta={{label: "Event id"}}/>
        <FieldControl name="description" render={TextAreaInput} meta={{label: "Description"}}/>
        <FieldControl name="invocationDate" render={TextInput} meta={{label: "Invocation date"}}/>
        <FieldControl name="revocationDate" render={TextInput} meta={{label: "Revocation date"}}/>
      </Form>)}
      />);

  render() {
    return (
        <Modal
            dimmer="inverted"
            size="tiny"
            trigger={<Button inverted color={this.buttonColor()} style={{marginRight: '10px'}} onClick={this.handleOpen}>{this.buttonLabel()}</Button>}
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

export default EventForm;
