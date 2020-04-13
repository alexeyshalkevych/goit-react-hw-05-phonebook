import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import ContactFilter from '../ContactFilter/ContactFilter';
import {
  filterContacts,
  findContact,
  getFromLocaleStorage,
  saveToLocaleStorage,
} from '../../utils/helpers';
import {
  PhonebookContainer,
  PhonebookTitle,
  PhonebookSubTitle,
  Notification,
} from './Phonebook.styled';
import 'react-toastify/dist/ReactToastify.css';
import SlideTitle from '../../transition/popText.transition';

const Phonebook = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    setShowTitle(true);

    const persistedContacts = getFromLocaleStorage('contacts');

    if (persistedContacts) {
      setContacts(persistedContacts);
    }
  }, []);

  useEffect(() => {
    saveToLocaleStorage('contacts', contacts);
  }, [contacts]);

  const changeFilter = e => {
    const { value } = e.target;

    setFilter(value);
  };

  const isValidContact = ({ name, number }) => {
    if (name.length <= 1 || name.trim() === 0) {
      toast.error(`Your name is not valid. Please enter correct information.`);
      return false;
    }

    if (!number.match(/^\(?([0-9]{3})\)?[- ]?([0-9]{2})[- ]?([0-9]{2})$/)) {
      toast.error(
        `Your number is not valid. Please enter correct information.`,
      );
      return false;
    }

    return true;
  };

  const addContact = contact => {
    const contactToAdd = {
      ...contact,
      id: uuidv4(),
    };

    if (isValidContact(contact)) {
      const stateContact = findContact(contacts, contact);

      if (stateContact) {
        toast.error(`${contact.name} is already in contacts.`);
        return;
      }

      setContacts([...contacts, contactToAdd]);
    }
  };

  const deleteContact = id => {
    const filtered = contacts.filter(contact => contact.id !== id);

    setContacts(filtered);
  };

  const filteredContacts = filterContacts(contacts, filter);

  return (
    <PhonebookContainer>
      <SlideTitle in={showTitle}>
        <PhonebookTitle>Phonebook</PhonebookTitle>
      </SlideTitle>
      <ContactForm onAddContact={addContact} />
      <PhonebookSubTitle>Contacts</PhonebookSubTitle>
      <ContactFilter
        value={filter}
        onChangeFilter={changeFilter}
        isFiltered={contacts.length >= 2}
      />
      <ContactList items={filteredContacts} onDeleteContact={deleteContact} />
      <Notification autoClose={1500} />
    </PhonebookContainer>
  );
};

export default Phonebook;
