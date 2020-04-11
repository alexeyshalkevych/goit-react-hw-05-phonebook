import transition from 'styled-transition-group';

const SlideTitle = transition.div.attrs({
  unmountOnExit: true,
  timeout: 500,
})`
  &:enter { 
    opacity: 0;
    transform: translateX(-100%); 
  }

  &:enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 500ms ease-in-out, transform 500ms ease-in-out;
  }

  &:exit { 
    opacity: 1;
    transform: translateX(0);
  }

  &:exit-active {
    opacity: 0;
    transform: translateX(-100%);
    transition: opacity 500ms ease-in-out, transform 500ms ease-in-out;
  }
`;

export default SlideTitle;
