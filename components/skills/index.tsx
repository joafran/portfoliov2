import styles from './skills.module.css';
import Fade from 'react-reveal/Fade'
import 
{ SiReact,
  SiRedux,
  SiNextDotJs,
  SiNodeDotJs,
  SiGraphql,
  SiPostgresql,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiMongodb
} from 'react-icons/si'

const Skills: React.FC = () => {
    return (
        <div className={styles.container}>
            <Fade cascade>
                <h1 className={styles.title}>My Skills</h1>
                <div className={styles.skills_container}>
                    <div className={styles.front_container}>
                        <div className={styles.header}>
                            <h1>Frontend</h1>
                            <img className={styles.skills_img} src="/front.png" alt=""/>
                        </div>
                        <ul className={styles.list}>
                            <li title='React' style={{color: 'cyan'}} ><SiReact /> </li>
                            <li title='Redux' style={{color: 'darkviolet'}} ><SiRedux /></li>
                            <li title='Next' style={{color: 'black'}} ><SiNextDotJs /></li>
                            <li title='HTML' style={{color: 'orangered'}} ><SiHtml5 /></li>
                            <li title='CSS' style={{color: '#2965f1'}} ><SiCss3 /></li>
                        </ul>
                    </div>
                    <div className={styles.back_container}>
                        <div className={styles.header}>
                            <h1>Backend</h1>
                            <img className={styles.skills_img} src="/nube.png" alt=""/>
                        </div>
                            <ul className={styles.list}>
                                <li title='Node' style={{color: 'green'}} ><SiNodeDotJs /></li>
                                <li title='GraphQL' style={{color: 'darkviolet'}} ><SiGraphql /></li>
                                <li title='MongoDB' style={{color: 'darkgreen'}} ><SiMongodb /></li>
                                <li title='PostgreSQL' style={{color: '#2965f1'}} ><SiPostgresql /></li>
                                <li title='mySQL' style={{color: 'royalblue'}} ><SiMysql /></li>
                            </ul>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Skills;