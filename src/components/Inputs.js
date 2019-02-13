import React from 'react';
import TextField from '@material-ui/core/TextField';

type Props = {
  id: string,
  value?: string,
  defaultValue?: string,
  onChange?: Function,
};


function Input(prop: Props) {
  const { value, onChange } = props;
  const theProps = {}

  return (
    <TextField
      id="min-ibu"
      type="text"
      label="Min"
      value={value}
      onChange={event => this.setVal('ibuMin', event)}
      fullWidth
    />
  );
}


export default Input;
