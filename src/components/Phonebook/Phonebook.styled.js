import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';

export const PhonebookContainer = styled.div`
  max-width: 400px;
  min-width: 310px;
  margin: 0 auto;
  padding: 0 5px;
`;

export const PhonebookTitle = styled.h1`
  margin: 0 0 10px 0;
  font-family: sans-serif;
  font-size: 30px;
  line-height: 1.2;
  font-weight: 900;
  color: rgb(0, 106, 177);
`;

export const PhonebookSubTitle = styled.h2`
  margin: 0 0 10px 0;
  font-family: sans-serif;
  font-size: 20px;
  line-height: 1.2;
  font-weight: 900;
  color: rgb(0, 106, 177);
`;

export const Notification = styled(ToastContainer)`
  top: -5px;
  right: 37%;
  padding: 6px 4px;
  margin: 0;
  width: 210px;
  .Toastify__close-button {
    display: none;
  }
`;
