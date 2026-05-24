import { FaLinkedin, FaGithub, FaFacebook, FaReact, FaDocker, FaPython } from "react-icons/fa"
import { FaDatabase } from "react-icons/fa"
import './skillandFind.css'

const SkillandFind = () => {
    return (
        <>
            <div className='skill-find'>

                <div className="findme-section">
                    <h4 className='find_text'>Find Me In</h4>
                    <div className="findme-container">

                        <div className="findme">
                            <ul>
                                <li><a href="https://www.linkedin.com/in/muhammadawaisbhatti/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a></li>
                            </ul>
                        </div>

                        <div className="findme">
                            <ul>
                                <li><a href="https://www.facebook.com/awais.gaming.311/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a></li>
                            </ul>
                        </div>

                        <div className="findme">
                            <ul>
                                <li><a href="https://github.com/awaisbhatti267" target="_blank" rel="noopener noreferrer"><FaGithub /></a></li>
                            </ul>
                        </div>

                    </div>
                </div>

                <div className="skill-section">
                    <h4 className='find_text'>Best Skills On</h4>
                    <div className="findme-container">

                        <div className="findme">
                            <ul><li><FaReact /></li></ul>
                        </div>

                        <div className="findme">
                            <ul><li><FaDocker /></li></ul>
                        </div>

                        <div className="findme">
                            <ul><li><FaPython /></li></ul>
                        </div>

                        <div className="findme">
                            <ul><li><FaDatabase /></li></ul>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default SkillandFind
