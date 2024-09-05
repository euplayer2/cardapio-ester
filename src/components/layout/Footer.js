import { FaInstagram } from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer () {
return (
<footer className={styles.footer}>
        <ul className={styles.social_list}>
            <li>
                <FaInstagram/>
            </li>
        </ul>
        <p> Siga no Instagram </p>
    </footer>
)

}

export default Footer