import { useState } from 'react'
import './navbar.css'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const scrollToSection = (id) => {
        setMenuOpen(false)

        setTimeout(() => {
            const el = document.getElementById(id)

            if (el) {
                el.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                })
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
                        <button onClick={() => scrollToSection('home')}>
                            Home
                        </button>
                    </li>

                    <li>
                        <button onClick={() => scrollToSection('projects')}>
                            Projects
                        </button>
                    </li>

                    <li>
                        <button onClick={() => scrollToSection('resume')}>
                            Resume
                        </button>
                    </li>

                    <li>
                        <button onClick={() => scrollToSection('contact')}>
                            Contact
                        </button>
                    </li>

                </ul>

            </nav>

            <div className="line-nav"></div>
        </>
    )
}

export default Navbar