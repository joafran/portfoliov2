import Fade from 'react-reveal/Fade';
import styles from './projects.module.css';
import ProjectCard from './projectCard';

const Projects: React.FC = ():JSX.Element => {

    return (
    <div className={styles.container}>
        <Fade>
            <div id='projects' className={styles.projects_container}>
                <h1 className={styles.banner}>My work</h1>
                <ProjectCard />
            </div>
        </Fade>
    </div>
    );
}

export default Projects;