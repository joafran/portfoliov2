import { motion } from 'framer-motion';
import welcomeStyles from './welcome.module.css';
import letters from './letters';

// Constants to animate with framer motion
const easing = [0.6,-0.05,0.01,0.99];

const stagger = {
    animate: {
        transition: {
            staggerChildren: 0.4
        }
    }
}


const fadeInUp = {
    initial: {
        y: 60,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: easing
        }
    }
}


const Welcome = () => {
 
    return (
    <motion.div className={welcomeStyles.welcome_container} exit={{opacity: 0}} initial={{opacity: 0}}  animate={{opacity: 1}}>

        <motion.div className={welcomeStyles.text_container} variants={stagger} initial='initial' animate='animate'>
            {
                letters.map((letter:string, index:number) => {
                    return (
                    <motion.h1 
                        key={index} 
                        className={welcomeStyles.letter} 
                        variants={fadeInUp}
                    >
                    {letter}
                    </motion.h1>
                )})
            }
        </motion.div>
            <ul className={welcomeStyles.animated_background}>
                {/* li items just to animate the background */}
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
    </motion.div>    

    );
}

export default Welcome;