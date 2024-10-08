import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'
import logo from '../../img/logoester.png'

function Navbar () {
    return (
        <nav className={styles.navbar}>
                   <Link to="/"> 
                  <img src={logo} alt="costs" className={styles.img}/> </Link>
                  
         <ul className={styles.list}>
            
        <li className={styles.item}><Link to="https://wa.me/5586998462723?text=Olá,%20gostaria%20de%20ser atendido(a)">Contato</Link>
        </li>
       
         </ul>
       
       </nav>
    )
    
    }
    
    export default Navbar