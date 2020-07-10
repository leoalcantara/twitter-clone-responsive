import React from 'react';
import Button from '../Button';
import { 
  Container,
  Topside,
  Logo, 
  MenuButton,
  BotSide,
  Avatar,
  ProfileData,
  HomeIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  ProfileIcon,
  ExitIcon,
} from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <Topside>
        <Logo />

        <MenuButton>
          <HomeIcon />
          <span>Página Inicial</span>
        </MenuButton>

        <MenuButton>
          <BellIcon />
          <span>Notificações</span>
        </MenuButton>

        <MenuButton>
          <EmailIcon />
          <span>Mensagens</span>
        </MenuButton>

        <MenuButton>
          <FavoriteIcon />
          <span>Favoritados</span>
        </MenuButton>

        <MenuButton>
          <ProfileIcon className="active" />
          <span>Perfil</span>
        </MenuButton>

        <Button>
          <span>Tweetar</span>
        </Button>
      </Topside>

      <BotSide>
        <Avatar />

        <ProfileData>
          <strong>Leonidio Alcantara</strong>
          <span>@leonidio_</span>
        </ProfileData>

        <ExitIcon />
      </BotSide>
    </Container>
  );
}

export default MenuBar;