import styles from './projectCard.module.css'
import Fade from 'react-reveal/Fade'
import { projects } from './projects';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';


const ProjectCard: React.FC = () => {

    const [project, setCurrentProject] = useState(0);

    useEffect(() => {
        const card = document.querySelector('#card-info');
        card.animate([
            // keyframes
            { transform: 'translateX(-100px)', opacity: 0 },
            { transform: 'translateX(0)', opacity: 1 }
          ], {
            // timing options
            duration: 300,
          })
    },[project])

    const handleNext = ():void => {
        const nextProject = project + 1;
        if(nextProject < projects.length) {
            setCurrentProject(nextProject)
        }
    }

    const handlePrev = ():void => {
        const previousProject = project - 1;
        if(previousProject >= 0) {
            setCurrentProject(previousProject)
        }
    }


    return (
    <div className={styles.card}>
        <button className={styles.btn_slider} onClick={() => handlePrev()}>{'<<'}</button>
        <div id='card-info' className={styles.project_info}>
            <Fade>

            <h1 className={styles.project_title}>{projects[project].name}</h1>
            <img className={styles.project_img} src={projects[project].image ? projects[project].image : '/about.svg' } alt="img"/>
            <div className={styles.project_links}>
                <a
                target="_blank" 
                className={projects[project].repoLink ? styles.link : `${styles.link} ${styles.link_disabled}`}
                href={projects[project].repoLink}>See Repository</a>
                <a 
                target="_blank" 
                className={projects[project].webLink ? styles.link :`${styles.link} ${styles.link_disabled}`}
                href={projects[project].webLink}>See live</a>
            </div>
            <p className={styles.project_description}>{projects[project].description}</p>
            </Fade>
        </div>
        <button className={styles.btn_slider} onClick={() => handleNext()}>{'>>'}</button>
    </div>

    );
};

export default ProjectCard;