import React from 'react';
import wpapi from 'wpapi';
import { foreach, map } from 'lodash';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import TextField from '@material-ui/core/TextField';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import personalInformationFields from '../inputFields/personalInformationFields.js';

const wp = new wpapi({
  endpoint: 'http://localhost:8080/recruit/wp-json',
});

class PersonalInformation extends React.Component {
  state = {
    errors: [],
  };

  componentDidMount() {
    // wp.posts().then(data => console.log(data)).catch(error => console.log(error));
    // wp.users().id(usern).create()
  }


  getOtherProperties(fieldKey) {
    const { errors } = this.state;
    const { isRequired, label, placeHolder } = personalInformationFields[fieldKey];
    const props = {
      label: `${label} ${isRequired ? '*' : ''}`,
      error: errors.includes(fieldKey),
      placeholder: placeHolder,
    };

    return props;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { target } = event;
    const finalFields = {};
    const errors = [];
    let hasError = false;

    foreach(personalInformationFields, (fieldOptions, fieldKey) => {
      const { isRequired } = fieldOptions;
      const { value } = target[fieldKey];

      if (isRequired && !value) {
        hasError = true;
        errors.push(fieldKey);
        return true;
      }

      finalFields[fieldKey] = value;
      return true;
    });

    if (hasError) {
      this.state({ errors });
      return;
    }

    this.uploadFields(finalFields);
  };


  uploadFields(fields) {
    console.log(fields);

  }


  render() {
    return (
      <div>
        <Grid container spacing={32}>
          {map(personalInformationFields, (fieldOptions, fieldKey) => {
            const { type, width } = fieldOptions;

            if (type === 'radio') {
              return '';
            }

            return (
              <Grid key={fieldKey} item sm={width || 12}>
                <TextField
                  type={type || 'text'}
                  defaultValue=""
                  variant="outlined"
                  fullWidth
                  {...this.getOtherProperties(fieldKey)}
                />
              </Grid>
            );
          })}
        </Grid>
        <Grid container spacing={32}>
          <Grid item sm={6}>
            <RadioGroup
              name="willAcceptTextMessages"
              aria-label="Will accept text messages"
              defaultValue="yes"
              row
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </Grid>
          <Grid item sm={6}>
            <RadioGroup
              name="preferredPhone"
              aria-label="Preferred number to be contacted on"
              defaultValue="yes"
              row
            >
              <FormControlLabel value="mobile" control={<Radio />} label="Mobile" />
              <FormControlLabel value="home" control={<Radio />} label="Home" />
            </RadioGroup>
          </Grid>
        </Grid>
        <button type="submit">Submit</button>
      </div>
    );
  }
}

export default PersonalInformation;
