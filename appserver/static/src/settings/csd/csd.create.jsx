import React from "react";
import { FormBuilder, FieldGroup, FieldControl, Validators, } from "react-reactive-form";
import { TextInput, TextAreaInput } from '../../shared/forms';
import { Button, Form } from 'semantic-ui-react'

class CsdCreate extends React.Component {

  form = FormBuilder.group({
    csdId: ["", [Validators.required, Validators.minLength(1), Validators.maxLength(1)]],
    description: ["", [Validators.maxLength(80)]],
  });

  handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(this.form.value));
  }

  render() {
    return (
        <FieldGroup control={this.form} render={({get, invalid}) => (<Form onSubmit={this.handleSubmit}>
              <FieldControl name="csdId" render={TextInput} meta={{label: "CSD ID"}}/>
              <FieldControl name="description" render={TextAreaInput} meta={{label: "Description"}}/>
              {/*<Button type="submit" disabled={invalid}>Submit</Button>*/}

              <Button type="submit" disabled={invalid} content="Submit" onClick={this.handleSubmit}/>
            </Form>)}
        />);
  }
}

export default CsdCreate;
