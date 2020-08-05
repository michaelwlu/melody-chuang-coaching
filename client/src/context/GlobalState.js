import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

// Initial State
const initialState = {
  contacts: [],
  error: null,
  loading: true,
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Fetch contacts from backend
  async function getContacts() {
    try {
      const res = await axios.get('/api/contact');

      // Send contacts to reducer in order to modify global state
      dispatch({
        type: 'GET_CONTACTS',
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: 'CONTACT_ERROR',
        payload: error.response.data.error,
      });
    }
  }

  // Send contact to backend
  async function addContact(contact) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post('/api/contact', contact, config);

      dispatch({
        type: 'ADD_CONTACT',
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: 'CONTACT_ERROR',
        payload: error.response.data.error,
      });
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        contacts: state.contacts,
        error: state.error,
        loading: state.loading,
        getContacts,
        addContact,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
