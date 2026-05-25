import { useState } from 'react'
import './projects.css'

import portfolioImg from '../../assets/Portfolio.webp'
import resumeImg from '../../assets/AI-Powered.webp'
import blockchainImg from '../../assets/Blockchain.webp'

const projects = [
  {
    title: 'AI-Powered Resume Analyzer',
    desc: 'Full-stack AI app that analyzes PDF resumes using OpenAI API, generates skill analysis, strengths, weaknesses and job-fit suggestions.',
    demo: '#',
    github: 'https://github.com/awaisbhatti267/Resume-Analyzer-Ai',
    image: resumeImg
  },
  {
    title: 'Modern Portfolio',
    desc: 'Responsive personal portfolio built with React, smooth scroll animations, lazy loading and 96 Lighthouse performance score.',
    demo: 'https://muhammad-awais-bhatti.vercel.app',
    github: 'https://github.com/awaisbhatti267/portfolio',
    image: portfolioImg
  },
  {
    title: 'Blockchain Double-Spending Simulation',
    desc: 'Python-based blockchain simulation demonstrating double-spending attacks with proof-of-work, transaction monitoring and attack analysis.',
    demo: '#',
    github: 'https://github.com/awaisbhatti267/Blockchain-Double-Spending-Simulation',
    image: blockchainImg
  },
  {
    title: 'EA Software Engineering Experience',
    desc: 'Proposed and implemented a new gameplay feature for EA Sports College Football using C++, UML diagrams and OOP design principles.',
    demo: '#',
    github: 'https://github.com/awaisbhatti267/EA-Software-Engineering-Virtual-Experience',
    image: null
  },
]

const Projects = () => {
  const [showAll, setShowAll] = useState(false)

  const openLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const visibleProjects = showAll ? projects : projects.slice(0, 3)

  return (
    <section className="projects" id="projects">

      <div className="section-title" data-animate>
        <h5>My Work</h5>
        <h2>Featured Projects</h2>
      </div>

      <div className="projects-container">
        {visibleProjects.map((project, index) => (
          <div
            className="project-card"
            key={project.title}
            data-animate
            style={{ animationDelay: `${(index % 3) * 0.1}s` }}
          >

            <div
              className={`project-image ${project.image ? 'has-image' : ''}`}
              style={
                project.image
                  ? {
                      backgroundImage: `url(${project.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center top'
                    }
                  : {}
              }
            />

            <div className="project-content">

              <h3>{project.title}</h3>

              <p>{project.desc}</p>

              <div className="project-buttons">

                {project.demo !== '#' && (
                  <button onClick={() => openLink(project.demo)}>
                    Live Demo
                  </button>
                )}

                <button
                  className="secondary-btn"
                  onClick={() => openLink(project.github)}
                >
                  Github
                </button>

              </div>

            </div>

          </div>
        ))}
      </div>

      <div className="projects-toggle" data-animate>
        <button
          className="toggle-btn"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? 'See Less ↑' : 'See More ↓'}
        </button>
      </div>

    </section>
  )
}

export default Projects
