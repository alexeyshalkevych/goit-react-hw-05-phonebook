import transition from 'styled-transition-group';

const PopFilter = transition.div.attrs({
  unmountOnExit: true,
  timeout: 250,
})`
  width: 100%;
  margin-bottom: 20px;
  padding: 10px 10px 15px;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.59);

  &:enter {
    transform: scale(0);
  }

  &:enter-active {
    transform: scale(1);
    transition: transform 250ms ease-in-out;
  }

  &:exit {
    transform: scale(1);
  }

  &:exit-active {
    transform: scale(0);
    transition: transform 250ms ease-in-out;
  }
`;

export default PopFilter;
