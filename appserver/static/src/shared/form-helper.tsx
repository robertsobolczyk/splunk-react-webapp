import * as React from 'react';
import MaskedInput from 'react-text-mask';
import {TextArea} from 'semantic-ui-react'
import "react-datepicker/dist/react-datepicker.css";

// @ts-ignore
export const TextInput = ({handler, touched, hasError, meta}) => (<div style={{marginBottom: '10px'}}>
  <MaskedInput mask={meta.mask || false} error={!!(touched && hasError)} placeholder={`${meta.label}`} {...handler()}/>
  <span>
        {touched && hasError("required") && `${meta.label} is invalid`}
    {touched && hasError("maxLength") && `${meta.label} has invalid length`}
    {touched && hasError("minLength") && `${meta.label} has invalid length`}
    </span>
  <br/>
</div>);

// @ts-ignore
export const TextAreaInput = ({handler, touched, hasError, meta}) => (<div style={{marginBottom: '10px'}}>
  <TextArea placeholder={`Enter ${meta.label}`} {...handler()}/>
  <span>
        {touched && hasError("required") && `${meta.label} is invalid`}
    {touched && hasError("maxLength") && `${meta.label} has invalid length`}
    {touched && hasError("minLength") && `${meta.label} has invalid length`}
    </span>
  <br/>
</div>);


