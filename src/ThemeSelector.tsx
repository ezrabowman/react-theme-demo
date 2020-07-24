import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { darkTheme, lightTheme, partyTheme } from './themes';
import { applyTheme } from './redux/themeActions';

const StyledButton = styled.button`
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.primary};
  box-shadow: none;
  border: 0px;
  border-radius: 4px;
  font-size: 1.2em;
  min-width: 120px;
  padding: 12px;
  margin: 12px;
`;

const ThemeSelector = () => {
  const dispatch = useDispatch();

  const changeTheme = (theme: any) => {
    dispatch(applyTheme(theme));
  }

  return (
    <div>
      <StyledButton onClick={() => changeTheme(darkTheme)}>Dark</StyledButton>
      <StyledButton onClick={() => changeTheme(lightTheme)}>Light</StyledButton>
      <StyledButton onClick={() => changeTheme(partyTheme)}>Party</StyledButton>
    </div>
  );
}

export default ThemeSelector;