import React from 'react';

import Feed from '../Feed';

import { 
  Container,
  Banner,
  Avatar, 
  ProfileData, 
  LocationIcon, 
  CakeIcon, 
  Followage,
  EditButton, 
} from './styles';

const ProfilePage: React.FC = () => {
  return(
    <Container>
      <Banner>
        <Avatar/>        
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil </EditButton>
        <h1>Leonidio Alcantara</h1>
        <h2>@leoalcantara</h2>
        <p>
          Developer at <a href="#">@Software</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Itaperuna-RJ, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 16 de outubro
          </li>          
        </ul>

        <Followage>
          <span>
            seguindo <strong>76</strong>
          </span>
          <span>
            <strong>11 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>
      
      <Feed/>

    </Container>
  );
}

export default ProfilePage;