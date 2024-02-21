import React, { useEffect } from "react";
import "./Home.css";
import Logo from "./images/logo.png";
import MyPhoto from "./images/my_pic.png"
import ChetakProject from "./images/project_img/chetak_product_page.png";
import WeatherApp from "./images/project_img/weather_app.png";
import contactLinks from "./contact.json";

function Home() {

    useEffect(() => {
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }, []);

    return (
        <div>
            <div>
                {/* Home Section  */}
                <section className="section-home" id="home">
                    <div className="logo">
                        <img className="logo" src={Logo} alt="Logo" />
                    </div>
                    <div className="left-content">
                        <h1>Hi There!</h1>
                        <p className="typewriter p1" >
                            I am a Web Developer
                        </p>
                        <p className="p2" >
                            I make the complex simple.
                        </p>
                        <a className="button " href="#contact">Contact Me</a>
                    </div>
                    <div>
                        <nav className="nav">
                            <ul>
                                <li><a href="#home">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#skills">Skills</a></li>
                                <li><a href="#projects">Projects</a></li>
                                <li><a href="#services">Services</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                </section>

                {/* About Section */}
                <section id="about" className="section-about">
                    <div className="left-section">
                        <div className="photo-container">
                            <img className=".photo-image" src={MyPhoto} alt="My_Photo" />
                        </div>
                    </div>
                    <div className="right-section">
                        <h2>Who Am I?</h2>
                        <h3>I’m Ashwin Bhardwaj, a MERN Stack Developer and Video Editor</h3>
                        <p>
                            I specialize in creating dynamic and responsive web applications as a
                            MERN developer. My skills include MongoDB, Express.js, React.js, and
                            Node.js. I am dedicated to writing clean and efficient code, focusing
                            on a user-friendly design. I'm well-versed in modern design principles
                            and often use libraries like Tailwind CSS to improve the visual appeal
                            of my projects. The utility-first approach of Tailwind CSS helps me
                            streamline styling, leading to quicker development and a consistent
                            design.
                        </p>
                        <button className="button">Download CV</button>
                    </div>
                </section>

                {/* Skills Section */}
                <section id="skills" className="section-skills">
                    <div className="skills-heading">
                        <h2 className="foreground-heading">My Skills</h2>
                        <h2 className="background-heading">SKILLS</h2>

                        <div className="skills-container">
                            <div className="left-skills">
                                <div className="skill">
                                    <div className="skill-name">HTML/CSS</div>
                                    <div className="skill-bar">
                                        <div className="skill-progress sp1"></div>
                                    </div>
                                </div>
                                <div className="skill">
                                    <div className="skill-name">JavaScript</div>
                                    <div className="skill-bar">
                                        <div className="skill-progress sp2"></div>
                                    </div>
                                </div>
                                <div className="skill">
                                    <div className="skill-name">NodeJS</div>
                                    <div className="skill-bar">
                                        <div className="skill-progress sp3"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="right-skills">
                                <div className="skill">
                                    <div className="skill-name">ReactJS</div>
                                    <div className="skill-bar">
                                        <div className="skill-progress sp4"></div>
                                    </div>
                                </div>
                                <div className="skill">
                                    <div className="skill-name">ExpressJS</div>
                                    <div className="skill-bar">
                                        <div className="skill-progress sp5"></div>
                                    </div>
                                </div>
                                <div className="skill">
                                    <div className="skill-name">MongoDB</div>
                                    <div className="skill-bar">
                                        <div className="skill-progress sp6"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section className="section-projects" id="projects">
                    <div className="skills-heading">
                        <h2 className="foreground-heading">My Projects</h2>
                        <h2 className="background-heading">PROJECTS</h2>
                    </div>
                    <div className="projects-container">
                        <div className="project-box">
                            <img className="project-image" src={ChetakProject} alt="Project1" />
                            <div className="project-overlay">
                                <h1 className="project-title">NYC</h1>
                                <p className="project-info">kamdiaw andoadn iawdioa aioda</p>
                                <button className="project-btn">See Code</button>
                            </div>
                        </div>
                        <div className="project-box">
                            <img className="project-image" src={WeatherApp} alt="Project1" />
                            <div className="project-overlay">
                                <h1 className="project-title">NYC</h1>
                                <p className="project-info">kamdiaw andoadn iawdioa aioda</p>
                                <button className="project-btn">See Code</button>
                            </div>
                        </div>
                        <div className="project-box">
                            <img className="project-image" src={ChetakProject} alt="Project1" />
                            <div className="project-overlay">
                                <h1 className="project-title">NYC</h1>
                                <p className="project-info">kamdiaw andoadn iawdioa aioda</p>
                                <button className="project-btn">See Code</button>
                            </div>
                        </div>
                        <div className="project-box">
                            <img className="project-image" src={ChetakProject} alt="Project1" />
                            <div className="project-overlay">
                                <h1 className="project-title">NYC</h1>
                                <p className="project-info">kamdiaw andoadn iawdioa aioda</p>
                                <button className="project-btn">See Code</button>
                            </div>
                        </div>
                        <div className="project-box">
                            <img className="project-image" src={ChetakProject} alt="Project1" />
                            <div className="project-overlay">
                                <h1 className="project-title">NYC</h1>
                                <p className="project-info">kamdiaw andoadn iawdioa aioda</p>
                                <button className="project-btn">See Code</button>
                            </div>
                        </div>
                        <div className="project-box">
                            <img className="project-image" src={ChetakProject} alt="Project1" />
                            <div className="project-overlay">
                                <h1 className="project-title">NYC</h1>
                                <p className="project-info">kamdiaw andoadn iawdioa aioda</p>
                                <button className="project-btn">See Code</button>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Services Section */}
                <section id="services" className="section-services">
                    <div className="skills-heading">
                        <h2 className="foreground-heading">My Services</h2>
                        <h2 className="background-heading">SERVICES</h2>
                    </div>
                    <div className="services-container">
                        <div className="service-box">
                            <i className="fas fa-laptop fa-3x service-logo"></i>
                            <h3>Web Development</h3>
                            <p>I specialize in creating responsive and user-friendly websites.</p>
                        </div>
                        <div className="service-box">
                            <i className="fas fa-briefcase fa-3x service-logo"></i>
                            <h3>Freelancing</h3>
                            <p>Providing freelance services in web development and design.</p>
                        </div>
                        <div className="service-box">
                            <i className="fas fa-video fa-3x service-logo"></i>
                            <h3>Video Editing</h3>
                            <p>Editing and producing high-quality videos for various purposes.</p>
                        </div>
                        <div className="service-box">
                            <i className="fas fa-file-alt fa-3x service-logo"></i>
                            <h3>Content Management</h3>
                            <p>
                                Managing and optimizing website content for better user experience.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="section-contact" id="contact">
                    <div className="skills-heading services-heading">
                        <h2 className="foreground-heading">Contacts</h2>
                        <h2 className="background-heading">CONTACTS</h2>
                    </div>
                    <div className="contact-container">
                        <div className="left-contact">
                            <p className="contact-text">Connect with me!</p>
                            <div className="social-logo">
                                <a href={contactLinks.linkedin} target="_blank" rel="noopener noreferrer" className="white-link">
                                    <i className="fab fa-linkedin fa-2x linkedin"></i>
                                </a>
                                <a href={contactLinks.facebook} target="_blank" rel="noopener noreferrer" className="white-link">
                                    <i className="fab fa-facebook fa-2x facebook"></i>
                                </a>
                                <a href={contactLinks.instagram} target="_blank" rel="noopener noreferrer" className="white-link">
                                    <i className="fab fa-instagram fa-2x instagram"></i>
                                </a>
                                <a href={contactLinks.github} target="_blank" rel="noopener noreferrer" className="white-link">
                                    <i className="fab fa-github fa-2x github"></i>
                                </a>
                                <a href={contactLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="white-link">
                                    <i className="fab fa-whatsapp fa-2x whatsapp"></i>
                                </a>
                                <a href={contactLinks.email} target="_blank" rel="noopener noreferrer" className="white-link">
                                    <i className="fas fa-envelope fa-2x gmail"></i>
                                </a>
                            </div>
                        </div>

                        <div className="right-contact">
                            <div className="message-box">
                                <i className
                                    ="fab fa-telegram-plane fa-2x contact-icon"></i>
                                <form id="contact-form" action="#" method="post">
                                    <div className="input-group">
                                        <input
                                            className="contact-input"
                                            type="text"
                                            name="name"
                                            placeholder="Name"
                                            required
                                        />
                                        <input
                                            className="contact-input"
                                            type="email"
                                            name="email"
                                            placeholder="E-mail"
                                            required
                                        />
                                        <input
                                            className="contact-input"
                                            type="tel"
                                            name="phone"
                                            placeholder="Phone"
                                        />
                                        <textarea
                                            className="contact-textarea"
                                            name="message"
                                            placeholder="Message"
                                            required
                                        ></textarea>
                                        <button className="button" type="submit">Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* <div className="contact-containerr">
                            <form action="" className="contact-left">
                                <div className="contact-left-title">
                                    <h2>Get in touch</h2>
                                    <hr></hr>
                                </div>
                            </form>
                            <input type="text" name="name" placeholder="Your Name" className="contact-inputs" required ></input>
                            <input type="email" name="email" placeholder="Your Email" className="contact-inputs" required ></input>
                            <textarea name="message" placeholder="Your Message" className="contact-inputs" required></textarea>
                            <button type="submit" >Submit <img src="assets/arrow_icon.png" alt="" /></button>
                        </div> */}
                    </div>
                </section>

                {/* Footer Section */}
                <section class="footer">
                    <h4>Have A Great Day ❤️</h4>
                </section>
            </div>
        </div>
    );
}

export default Home;
