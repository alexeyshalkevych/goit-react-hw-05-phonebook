import React from 'react';
import PropTypes from 'prop-types';
import { Label, InputField } from './ContactFilter.styled';
import PopFilter from '../../transition/pop.transition';

const ContactFilter = ({ value, onChangeFilter, isFiltered }) => (
  <PopFilter in={isFiltered}>
    <Label>
      Find contacts by name
      <InputField type="text" value={value} onChange={onChangeFilter} />
    </Label>
  </PopFilter>
);

ContactFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired,
};

export default ContactFilter;
