import { createGlobalStyle } from 'styled-components';

export const lightMode = {
  modeBackground: "hsl(0, 0%, 98%)",
  modeElements: "hsl(0, 0%, 100%)",
  modeInputs: "hsl(0, 0%, 52%)",
  modeText: "hsl(200, 15%, 8%)",
}

export const darkMode = {
  modeBackground: "hsl(207, 26%, 17%)",
  modeElements: "hsl(209, 23%, 22%)",
  modeInputs: "hsl(0, 0%, 52%)",
  modeText: "hsl(0, 0%, 100%)",
}

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${props => props.theme.modeBackground};
    color: ${props => props.theme.modeText}
  }

  input {
    background-color: ${props => props.theme.modeElements};
    display: block;
    width: 100%;
    height: calc(1.5em + .75rem + 2px);
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  }

  ::placeholder {
    color: ${props => props.theme.modeText};
  }

  .select-bg {
    background-color: ${props => props.theme.modeElements};
    color: ${props => props.theme.modeText};
  }

  .card {
    background-color: ${props => props.theme.modeElements};
  }

  button {
    {
      display: inline-block;
      font-weight: 400;
      color: ${props => props.theme.modeText};
      text-align: center;
      vertical-align: middle;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      background-color: transparent;
      border: 1px solid transparent;
      padding: .375rem .75rem;
      font-size: 1rem;
      line-height: 1.5;
      border-radius: .25rem;
      transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  }
`;