import { HomeContainer, IntroContainer, IntroContainerItems, IconContainer } from "./styles";
import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react";

import imgCoffee from '../../assets/img-coffee.png';

export function Home() {
  return (
    <HomeContainer>
      <IntroContainer>
        <div>
          <header>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          </header>

          <IntroContainerItems>
            <li><IconContainer itemColor="#C47F17"><ShoppingCart /></IconContainer> Compra simples e segura</li>
            <li><IconContainer itemColor="#574F4D"><Package /></IconContainer> Embalagem mantém o café intacto</li>
            <li><IconContainer itemColor="#DBAC2C"><Timer /></IconContainer> Entrega rápida e rastreada</li>
            <li><IconContainer itemColor="#8047F8"><Coffee /></IconContainer> O café chega fresquinho até você</li>
          </IntroContainerItems>
        </div>

        <img src={imgCoffee} alt="Copo de café" />
      </IntroContainer>
    </HomeContainer>
  );
}