import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'
import logo from '../../img/logoester.png'

function Navbar () {
    return (
        <nav className={styles.navbar}>
                   <Link to="/"> 
                  <img src={logo} alt="costs" className={styles.img}/> </Link>
                  
         <ul className={styles.list}>
            
        <li className={styles.item}><Link to="/contato">Contato</Link>
        </li>
       
         </ul>
       
       </nav>
    )
    
    }
    
    export default Navbar