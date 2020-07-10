import React from 'react';

import List from '../List';

import { 
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,

 } from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <Body>
        <List 
          title = "Talvez você curta"
          elements = {[<h1>TEST</h1>,<h1>TEST</h1>,<h1>TEST</h1>]}
        /> 
        <List 
          title = "Talvez você curta"
          elements = {[<h1>TEST</h1>,<h1>TEST</h1>,<h1>TEST</h1>]}
        />       
      </Body>
    </Container>
  );
}

export default SideBar;