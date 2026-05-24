import { useState } from 'react'
import './navbar.css'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const scrollToSection = (id) => {
        setMenuOpen(false)

        // Small delay to let Suspense render the section first
        setTimeout(() => {
            const el = document.getElementById(id)
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
        }, 100)
    }

    return (
        <>
            <nav>

                {/* Logo */}
                <div className='logo'>
                    <h3 className='image-nav'></h3>
                    <h2>Muhammad Awais Bhatti</h2>
                </div>

                {/* Hamburger */}
                <div
                    className='hamburger'
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </div>

                {/* Nav Links */}
                <ul className={menuOpen ? 'nav-links active' : 'nav-links'}>

                    <li>
                        <a onClick={() => scrollToSection('home')} href="#home">
                            Home
                        </a>
                    </li>

                    <li>
                        <a onClick={() => scrollToSection('projects')} href="#projects">
                            Projects
                        </a>
                    </li>

                    <li>
                        <a onClick={() => scrollToSection('resume')} href="#resume">
                            Resume
                        </a>
                    </li>

                    {/* <li>
                        <a onClick={() => scrollToSection('testimonials')} href="#testimonials">
                            Testimonials
                        </a>
                    </li> */}

                    <li>
                        <a onClick={() => scrollToSection('contact')} href="#contact">
                            Contact
                        </a>
                    </li>

                </ul>

            </nav>

            <div className="line-nav"></div>
        </>
    )
}

export default Navbar
