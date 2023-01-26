import { IntroBlock, HomeContainer } from "./styles";
import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react";

import imgCoffee from '../../assets/img-coffee.png';

export function Home() {
  return (
    <HomeContainer>
      <IntroBlock>
        <div>
          <header>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          </header>

          <ul>
            <li><span><ShoppingCart /></span> Compra simples e segura</li>
            <li><span><Package /></span> Embalagem mantém o café intacto</li>
            <li><span><Timer /></span> Entrega rápida e rastreada</li>
            <li><span><Coffee /></span> O café chega fresquinho até você</li>
          </ul>
        </div>

        <img src={imgCoffee} alt="Copo de café" />
      </IntroBlock>
    </HomeContainer>
  );
}