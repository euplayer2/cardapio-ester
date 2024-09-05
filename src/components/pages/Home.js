import Cards from "../layout/Cards"
import styles from './Home.module.css'

import prodninho from '../../img/prodninho.PNG';
import prodduo from '../../img/prodduo.PNG'
import prodbanoffee from '../../img/prodbanoffee.PNG'
import prodminibolochocolate from '../../img/prodminibolochocolate.PNG'
import prodminiboloninhooreo from '../../img/prodminiboloninhooreo.PNG'
import prodminibolocenourabrigadeiro from '../../img/prodminibolocenourabrigadeiro.PNG'
import prodminiboloninhonutella from '../../img/prodminiboloninhonutella.PNG'
import prodminibolosal from '../../img/prodminibolosal.PNG'


function Home() {
  return (
<div>

<div className={styles.h2}>
  <h2>Doces</h2>
</div>

<div className={styles.card}>
      <Cards
        titulo="Banoffee"
        imagem={prodbanoffee}
        preco="R$7,99"
        link="https://wa.me/5586998462723?text=Olá,%20gostaria%20de%20pedir%20um%20banoffee
        "
      />
      <Cards
        titulo="Duo Maracujá"
        imagem={prodduo}
        preco="R$8,99"
        link="https://wa.me/5586998462723?text=Olá,%20gostaria%20de%20pedir%20um%20duo%20maracuja
        "
      />
      <Cards
        titulo="Choconinho"
        imagem={prodninho}
        preco="R$8,99"
        link="https://wa.me/5586998462723?text=Olá,%20gostaria%20de%20pedir%20um%20choconinho
        "
      />

    </div>

    <div className={styles.h2}>
  <h2>Bolos</h2>
</div>

<div className={styles.card}>
      <Cards
        titulo="Chocolate"
        imagem={prodminibolochocolate}
        preco="R$5,50"
        link="https://wa.me/5586998462723?text=Olá,%20gostaria%20de%20pedir%20um%20mini%20bolo%20de%20chocolate
        "
      />
      <Cards
        titulo="Ninho com Óreo"
        imagem={prodminiboloninhooreo}
        preco="R$9,00"
        link="https://wa.me/5586998462723?text=Olá,%20gostaria%20de%20pedir%20um%20mini%20bolo%20de%20ninho%20com%20oreo
        "
      />
      <Cards
        titulo="Brigadeiro"
        imagem={prodminibolocenourabrigadeiro}
        preco="R$10,00"
        link="https://wa.me/5586998462723?text=Olá,%20gostaria%20de%20pedir%20um%20mini%20bolo%20de%20cenoura%20com%20brigadeiro
        "
      />

<Cards
        titulo="Ninho c/ Nutella"
        imagem={prodminiboloninhonutella}
        preco="R$5,50"
        link="https://wa.me/5586998462723?text=Olá,%20gostaria%20de%20pedir%20um%20mini%20bolo%20de%20ninho%20com%20nutella
        "
      />
      <Cards
        titulo="Bolo de Sal"
        imagem={prodminibolosal}
        preco="R$9,00"
        link="https://wa.me/5586998462723?text=Olá,%20gostaria%20de%20pedir%20um%20mini%20bolo%20de%20sal
        "
      />
      <Cards
        titulo="Ninho c/ Óreo"
        imagem={prodminiboloninhooreo}
        preco="R$9,00"
        link="https://wa.me/5586998462723?text=Olá,%20gostaria%20de%20pedir%20um%20mini%20bolo%20de%20ninho%20com%20oreo
        "
      />

    </div>
    
</div>
   
  );
}

export default Home;