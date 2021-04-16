import { motion } from 'framer-motion';
import aboutStyles from './about.module.css';

const About: React.FC = ():JSX.Element => {
    return (
    <motion.div className={aboutStyles.about} transition={{duration: 1}} initial={{opacity: 0}}  animate={{opacity: 1}}>
            <motion.div className={aboutStyles.card_container}>
                <motion.div className={aboutStyles.card_text}>
                    <motion.h1 
                    initial={{opacity: 0, y: -200}} 
                    transition={{delay: 1.5}} 
                    animate={{opacity: 1, y: 0}}
                    >Hi! My name is <motion.span>Joaquin</motion.span></motion.h1>
                    <motion.h2 className={aboutStyles.description}
                    initial={{opacity: 0, x: -200}} 
                    transition={{delay: 2}} 
                    animate={{opacity: 1, x: 0}}
                    >
                        I'm a web developer who loves building modern and
                        animated websites, and learning how to improve them.
                    </motion.h2>
                    <motion.a 
                    href="#projects"
                    className={aboutStyles.btn}
                    initial={{opacity: 0, y: 200}} 
                    transition={{delay: 2}} 
                    animate={{opacity: 1, y: 0}}
                    >See more</motion.a>
                </motion.div>
                <motion.img 
                className={aboutStyles.svg} 
                src='/about.svg' 
                width={400} 
                height={400}
                initial={{opacity: 0, scale: 0}} 
                transition={{delay: 2.5}} 
                animate={{opacity: 1, scale: 1}}
                />
            </motion.div>
    </motion.div>
    );
}

export default About;