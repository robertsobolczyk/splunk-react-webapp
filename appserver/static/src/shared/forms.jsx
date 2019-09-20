import React from "react";
import { Input, TextArea } from 'semantic-ui-react'
import MaskedInput from 'react-text-mask'

export const TextInput = ({handler, touched, hasError, meta}) => (<div style={{marginBottom: '10px'}}>
  <MaskedInput mask={meta.mask} error={!!(touched && hasError)} placeholder={`${meta.label}`} {...handler()}/>




  <span>
        {touched && hasError("required") && `${meta.label} is invalid`}
    {touched && hasError("maxLength") && `${meta.label} has invalid length`}
    {touched && hasError("minLength") && `${meta.label} has invalid length`}
    </span>
  <br/>
</div>)

export const TextAreaInput = ({handler, touched, hasError, meta}) => (<div style={{marginBottom: '10px'}}>
  <TextArea placeholder={`Enter ${meta.label}`} {...handler()}/>
  <span>
        {touched && hasError("required") && `${meta.label} is invalid`}
    {touched && hasError("maxLength") && `${meta.label} has invalid length`}
    {touched && hasError("minLength") && `${meta.label} has invalid length`}
    </span>
  <br/>
</div>)

