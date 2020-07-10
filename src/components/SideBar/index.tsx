import React from 'react';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';

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
          elements = {[
            <FollowSuggestion
              name="Luiz Batanero"
              nickname="@luizbatanero"
            />,
            <FollowSuggestion 
              name="Luke Morales" 
              nickname="@lukemorales"                
            />,
            <FollowSuggestion
              name="Camila Magalhães"
              nickname="@camilaamgl"
            />,
          ]}
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