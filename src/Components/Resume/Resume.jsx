import { useState } from 'react'
import './resume.css'

const Resume = () => {

  const [activeTab, setActiveTab] = useState('education')
  const [showAllAchievements, setShowAllAchievements] = useState(false)

  const skills = [
    { name: 'React JS', level: '80%' },
    { name: 'Python', level: '75%' },
    { name: 'Flask', level: '70%' },
    { name: 'MySQL', level: '65%' },
    { name: 'JavaScript', level: '80%' },
    { name: 'HTML & CSS', level: '90%' },
    { name: 'REST APIs', level: '75%' },
    { name: 'Git', level: '70%' },
    { name: 'C++', level: '60%' },
    { name: 'OpenAI API', level: '65%' },
  ]

  const achievements = [
    {
      title: 'CS50x — Introduction to Computer Science',
      org: 'edX — Harvard University',
      desc: "Completed Harvard's CS50x covering algorithms, data structures, web development and software engineering fundamentals."
    },
    {
      title: 'EA Software Engineering Virtual Experience',
      org: 'Electronic Arts — Forage',
      desc: 'Designed UML diagrams, implemented C++ class definitions and applied OOP principles for EA Sports College Football gameplay features.'
    },
    {
      title: 'Full Stack Web Development Certificate',
      org: 'Bank of Punjab',
      desc: 'Awarded internship completion certificate for developing full-stack web applications using React.js, Flask and MySQL.'
    },
    {
      title: 'Programming for Everybody & JavaScript for Web',
      org: 'Coursera',
      desc: 'Completed multiple Coursera certifications covering Python programming, JavaScript for web development and HTML & CSS fundamentals.'
    },
    {
      title: 'Build a Webpage with HTML & CSS',
      org: 'Coursera',
      desc: 'Learned core web development fundamentals including semantic HTML, CSS styling and responsive layout techniques.'
    },
    {
      title: 'WordPress',
      org: 'DigiSkills',
      desc: 'Completed WordPress certification covering website creation, theme customization and content management systems.'
    },
  ]

  const skillsLeft = skills.slice(0, 5)
  const skillsRight = skills.slice(5, 10)

  const visibleAchievements = showAllAchievements
    ? achievements
    : achievements.slice(0, 2)

  return (
    <section className="resume" id="resume">

      <div className="resume-title" data-animate>
        <h5>2 Internships | 7+ Certifications</h5>
        <h2>My Resume</h2>
      </div>

      <div className="resume-tabs" data-animate>
        <button
          className={activeTab === 'education' ? 'active' : ''}
          onClick={() => setActiveTab('education')}
        >Education</button>

        <button
          className={activeTab === 'skills' ? 'active' : ''}
          onClick={() => setActiveTab('skills')}
        >Professional Skill</button>

        <button
          className={activeTab === 'experience' ? 'active' : ''}
          onClick={() => setActiveTab('experience')}
        >Experience</button>

        <button
          className={activeTab === 'achievements' ? 'active' : ''}
          onClick={() => setActiveTab('achievements')}
        >Achievements</button>
      </div>

      {/* Education */}
      {activeTab === 'education' && (
        <div className="resume-content">

          <div className="resume-card" data-animate>
            <h3>Bachelor of Science in Software Engineering</h3>
            <span>Virtual University of Pakistan — Expected Aug 2026</span>
            <p>Focused on software engineering, algorithms, data structures, web technologies and modern programming languages.</p>
          </div>

          <div className="resume-card" data-animate>
            <h3>FSC Pre-Engineering</h3>
            <span>Punjab College of Science — Lahore, Pakistan</span>
            <p>Studied physics, mathematics and computer science, building a strong foundation for software engineering and problem-solving.</p>
          </div>

        </div>
      )}

      {/* Skills */}
      {activeTab === 'skills' && (
        <div className="skills-grid" data-animate>

          <div className="skills-column">
            {skillsLeft.map((skill, index) => (
              <div className="skill-item" key={index}>
                <div className="skill-info">
                  <h4>{skill.name}</h4>
                  <span>{skill.level}</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: skill.level }} />
                </div>
              </div>
            ))}
          </div>

          <div className="skills-column">
            {skillsRight.map((skill, index) => (
              <div className="skill-item" key={index}>
                <div className="skill-info">
                  <h4>{skill.name}</h4>
                  <span>{skill.level}</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: skill.level }} />
                </div>
              </div>
            ))}
          </div>

        </div>
      )}

      {/* Experience */}
      {activeTab === 'experience' && (
        <div className="resume-content">

          <div className="resume-card" data-animate>
            <h3>Full Stack Web Developer Intern</h3>
            <span>Bank of Punjab — Oct 2025 to Nov 2025</span>
            <p>Developed frontend and backend features using React.js, Flask and MySQL. Built REST APIs and responsive database-driven web applications.</p>
          </div>

          <div className="resume-card" data-animate>
            <h3>Python Programming Intern</h3>
            <span>DecodeLabs — May 2026 to Jun 2026</span>
            <p>Developed Python-based applications focused on problem-solving, APIs, data handling and backend logic following best development practices.</p>
          </div>

        </div>
      )}

      {/* Achievements */}
      {activeTab === 'achievements' && (
        <>
          <div className="resume-content">
            {visibleAchievements.map((item, index) => (
              <div
                className="resume-card"
                key={index}
                data-animate
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3>{item.title}</h3>
                <span>{item.org}</span>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="resume-toggle">
            <button
              className="toggle-btn"
              onClick={() => setShowAllAchievements(!showAllAchievements)}
            >
              {showAllAchievements ? 'See Less ↑' : 'See More ↓'}
            </button>
          </div>
        </>
      )}


    </section>
  )
}

export default Resume
