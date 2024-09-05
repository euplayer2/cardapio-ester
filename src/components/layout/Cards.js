import styles from './Cards.module.css'

function Cards(props) {
  return (
    <div className={styles.card}>
        <img src={props.imagem} alt={props.titulo} className={styles.cardImage} />
        <div>
          <h1>{props.titulo}</h1>
          <h2>{props.preco}</h2>
          <a href={props.link}>
          <button>Fazer Pedido</button>
          </a>
        </div>
    </div>
  )
}

export default Cards;