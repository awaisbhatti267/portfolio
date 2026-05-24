import { lazy, Suspense } from 'react'
import Typetext from '../Type_Text/type_text'
import '../Intro_Text/IntroText.css'

const SkillandFind = lazy(() => import('../SkillsandFindIcons/SkillandFind'))

const IntroText = () => {
    return (
        <>
            <div className='intro-text'>
                <h5>Welcome To My Portfolio</h5>
                <h1>Hi, I'm Awais</h1>
                <Typetext className='type-text' text={["a Software Engineer", "a Python Developer","a Full-Stack Developer", "a Passionate Developer!"]} />
                <p>AI-focused Full Stack Developer with hands-on experience in Python, Flask, React.js, and REST API development. Skilled in building scalable AI-powered web applications with expertise in backend systems, database management, responsive interfaces, authentication, and version control using Git and GitHub.</p>
                <Suspense fallback={null}>
                    <SkillandFind />
                </Suspense>
            </div>
        </>
    )
}

export default IntroText
