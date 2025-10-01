import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <h1 className="logo">Wajiha Usman</h1>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h2>Wajiha Usman</h2>
          <p>Passionate IT Student | Fronted Developer</p>
          <div className="hero-btns">
            <a href="#projects" className="btn primary">View My Work</a>
            <a href="#contact" className="btn secondary">Get In Touch</a>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <h3>About Me</h3>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a passionate IT student currently pursuing a Bachelor's degree at Bahria University. 
                I have a strong interest in web development and enjoy creating innovative solutions 
                that combine functionality with great user experience.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or learning about UI/UX design principles. I believe in 
                continuous learning and staying updated with the latest industry trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="skills">
        <div className="container">
          <h3>Skills & Technologies</h3>
          <div className="skills-grid">
            <div className="skill-category">
              <h4>Frontend</h4>
              <div className="skill-list">
                <span>React</span>
                <span>HTML/CSS</span>
                <span>JavaScript</span>
                <span>Bootstrap</span>
              </div>
            </div>
            <div className="skill-category">
              <h4>Backend</h4>
              <div className="skill-list">
                <span>Node.js</span>
                <span>Express</span>
                <span>MongoDB</span>
                <span>MySQL</span>
              </div>
            </div>
            <div className="skill-category">
              <h4>Tools & Others</h4>
              <div className="skill-list">
                <span>Vs Code</span>
                <span>Python</span>
                <span>Firebase</span>
                <span>Vercel</span>
                <span>Linux</span>
                <span>Cisco Packet Tracer</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects">
        <div className="container">
          <h3>My Projects</h3>
          <div className="project-grid">
            <div className="project-card">
              <div className="project-icon">💄</div>
              <h4>Beauty & Skincare Tracker</h4>
              <p>A comprehensive MERN stack application for tracking skincare routines, product effectiveness, and skin progress over time.</p>
              <div className="project-tech">
                <span>React</span>
                <span>Node.js</span>
                <span>MongoDB</span>
              </div>
            </div>
            <div className="project-card">
              <div className="project-icon">🍕</div>
              <h4>Food Ordering Website</h4>
              <p>A full-stack DBMS project featuring digital menus, user authentication, and order management system.</p>
              <div className="project-tech">
                <span>HTML/CSS</span>
                <span>PHP</span>
                <span>MySQL</span>
              </div>
            </div>
            <div className="project-card">
              <div className="project-icon">🔐</div>
              <h4>Cyber Escape Room</h4>
              <p>An interactive Python GUI game featuring cryptography challenges, puzzles, and cybersecurity concepts.</p>
              <div className="project-tech">
                <span>Python</span>
                <span>Tkinter</span>
                <span>Cryptography</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <h3>Let's Connect!</h3>
          <p>I'm always open to discussing new opportunities and creative ideas.</p>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <strong>Email:</strong>
                <a href="mailto:wajihausman53@gmail.com">wajihausman53@gmail.com</a>
              </div>
              <div className="contact-item">
                <strong>Location:</strong>
                <span>Karachi, Pakistan</span>
              </div>
              <div className="contact-item">
                <strong>Education:</strong>
                <span>Bahria University</span>
              </div>
            </div>
            <div className="contact-links">
              <a href="mailto:wajihausman53@gmail.com" className="social-link">📧 Email</a>
              <a href="https://www.linkedin.com/in/wajihausman23/" target="_blank" rel="noreferrer" className="social-link">💼 LinkedIn</a>
              <a href="https://github.com/wajihausman" target="_blank" rel="noreferrer" className="social-link">🐱 GitHub</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Wajiha Usman. All rights reserved.</p>
          <p>Built with React and ❤️</p>
        </div>
      </footer>
    </div>
  );
}

export default App;