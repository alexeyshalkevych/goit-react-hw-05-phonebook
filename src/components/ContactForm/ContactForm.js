import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import { FormContainer, Label, InputField, Button } from './ContactForm.styled';
import { reducer, initialState } from './contactReducer';
import { CHANGE_INPUT, RESET } from '../../types';

const ContactForm = ({ onAddContact }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { name, number } = state;

  const resetForm = () => {
    dispatch({ type: RESET });
  };

  const handleSubmit = e => {
    e.preventDefault();

    onAddContact({ name, number });

    resetForm();
  };

  const handleChange = e => {
    const { name, value } = e.target;

    dispatch({ type: CHANGE_INPUT, field: name, value });
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Label>
        Name
        <InputField
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          autoComplete="off"
        />
      </Label>
      <Label>
        Number
        <InputField
          type="text"
          name="number"
          value={number}
          onChange={handleChange}
          autoComplete="off"
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </FormContainer>
  );
};

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;
