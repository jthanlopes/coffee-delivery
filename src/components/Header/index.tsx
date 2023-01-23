import { HeaderContainer, HeaderContent } from "./styles";

import { Link } from "react-router-dom";

import logoCoffeeDelivery from '../../assets/logo-coffeeDelivery.svg';

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Link to="/">
          <img src={logoCoffeeDelivery} />
        </Link>

        <div>
          <span>Localização</span>
          <span>Carrinho</span>
        </div>
      </HeaderContent>
    </HeaderContainer>
  );
}