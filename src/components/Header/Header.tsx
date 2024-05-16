import {
  HeaderContainer,
  HeaderNavLink,
  HeaderNavLinkItem,
  HeaderNavList,
} from "./header.styles";
import logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <HeaderContainer>
      <img src={logo} alt="Logo" width={150} height={50} />
      <nav>
        <HeaderNavList>
          <HeaderNavLinkItem>
            <HeaderNavLink to={"/"} className="font-gravity transition-all">
              Home
            </HeaderNavLink>
          </HeaderNavLinkItem>
        </HeaderNavList>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
