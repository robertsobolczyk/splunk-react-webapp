import React from "react";
import { Input, TextArea } from 'semantic-ui-react'

export const TextInput = ({handler, touched, hasError, meta}) => (<div>
  <Input placeholder={`Enter ${meta.label}`} {...handler()}/>
  <span>
        {touched && hasError("required") && `${meta.label} is required`}
    </span>
</div>)

export const TextAreaInput = ({handler, touched, hasError, meta}) => (<div>
  <TextArea placeholder={`Enter ${meta.label}`} {...handler()}/>
  <span>
        {touched && hasError("required") && `${meta.label} is required`}
    </span>
</div>)

