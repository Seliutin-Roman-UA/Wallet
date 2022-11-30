import {
  BoxOut,
  ButtonExit,
  ExitIcon,
  HeaderBox,
  LinkLogo,
  LogoIcon,
  LogoTitle,
  NameUser,
} from './Header.styled';
import SVG from 'react-inlinesvg';
import { logo, logoText } from 'assets/media/icons';
import { Mobile } from 'components/Container/Mobile';
import { Tablet } from 'components/Container/Tablet';
import { Desktop } from 'components/Container/Desktop';
import { logOut } from 'redux/auth/auth-operations';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from 'redux/auth/auth-selector';

export const Header = () => {
  const dispatch = useDispatch()
  const name= useSelector(getUser)
  return (
    <HeaderBox>
      <LinkLogo>
        <LogoIcon
          src={logo}
          className="logo-icon"
          width={30}
          height={30}
          title="Logo"
        />
        <Mobile>
          <SVG src={logoText} width={74} height={17} title="Logo-title" />
        </Mobile>
        <Tablet>
          <LogoTitle>Wallet</LogoTitle>
        </Tablet>
        <Desktop>
          <LogoTitle>Wallet</LogoTitle>
        </Desktop>
      </LinkLogo>
      <BoxOut>
        <NameUser>{name.username}</NameUser>
        <ButtonExit  onClick={()=>dispatch(logOut())}>
          <ExitIcon />
          <Tablet>
            <span>Exit</span>
          </Tablet>
          <Desktop>
            <span>Exit</span>
          </Desktop>
        </ButtonExit>
      </BoxOut>
    </HeaderBox>
  );
};
