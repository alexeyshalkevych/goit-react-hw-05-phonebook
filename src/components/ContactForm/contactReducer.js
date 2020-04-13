import { RESET, CHANGE_INPUT } from '../../types';

export const initialState = {
  name: '',
  number: '',
};

export const reducer = (state, { type, field, value }) => {
  switch (type) {
    case RESET:
      return initialState;
    case CHANGE_INPUT:
      return {
        ...state,
        [field]: value,
      };
    default:
      return state;
  }
};
