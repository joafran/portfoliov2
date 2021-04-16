import styles from './footer.module.css';
import Fade from 'react-reveal/Fade'
import { SiGithub, SiGmail, SiWhatsapp } from 'react-icons/si'
import { FaLinkedinIn} from 'react-icons/fa'

const Footer: React.FC = () => {
    return (
        <div className={styles.container}>
            <Fade>
                <h1 className={styles.title}>Feel free to contact me!</h1>
                    <ul className={styles.list}>
                        <li><a className={`${styles.link} ${styles.whatsapp}`} href="https://wa.me/543644709383"><SiWhatsapp /> </a></li>
                        <li><a className={`${styles.link} ${styles.gmail}`} href="mailto:joafran0016@gmail.com"><SiGmail /></a></li>
                        <li><a className={`${styles.link} ${styles.linkedin}`} href="https://linkedin.com/in/joaquin--franco"><FaLinkedinIn /></a></li>
                        <li><a className={`${styles.link} ${styles.github}`} href="https://github.com/joafran"><SiGithub /></a></li>
                    </ul>
                <h3 className={styles.bottom}>{'<'} Made with a lot of coffee ☕ and patience by Joaquin Franco {'/>'}</h3>
            </Fade>
        </div>
    );
}

export default Footer;