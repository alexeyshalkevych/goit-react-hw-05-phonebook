import transition from 'styled-transition-group';

const Slide = transition.li.attrs({
  unmountOnExit: true,
  timeout: 250,
})`
  padding: 10px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.59);

  &:enter { 
    opacity: 0;
    transform: translateX(-100%); 
  }

  &:enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 250ms ease-in-out, transform 250ms ease-in-out;
  }

  &:exit { 
    opacity: 1;
    transform: translateX(0);
  }

  &:exit-active {
    opacity: 0;
    transform: translateX(-100%);
    transition: opacity 250ms ease-in-out, transform 250ms ease-in-out;
  }
`;

export default Slide;
