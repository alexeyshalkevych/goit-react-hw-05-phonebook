import React from 'react';
import PropTypes from 'prop-types';
import {
  ContactContainer,
  ContactName,
  ContactNumber,
  DeleteButton,
} from './Contact.styled';

const Contact = ({ item: { name, number }, onDeleteContact }) => (
  <ContactContainer>
    <ContactName>{name}</ContactName>
    <ContactNumber>{number}</ContactNumber>
    <DeleteButton type="button" onClick={onDeleteContact}>
      &#10006;
    </DeleteButton>
  </ContactContainer>
);

Contact.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contact;
