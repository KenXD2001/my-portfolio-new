import React, { useState, useEffect } from "react";
import "./Home.css";
import Logo from "./images/logo.png";
import MyPhoto from "./images/my_pic.png";
import ChetakProject from "./images/project_img/chetak_product_page.png";
import WeatherApp from "./images/project_img/weather_app.png";
import Portfolio from "./images/project_img/my_portfolio.png";
import AuthenticationSystem from "./images/project_img/authentication_system.png";
import contactLinks from "./contact.json";
import Resume from "./images/My_Resume.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function Home() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");


    useEffect(() => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        const inputs = document.querySelectorAll(".input");

        function focusFunc() {
            let parent = this.parentNode;
            parent.classList.add("focus");
        }

        function blurFunc() {
            let parent = this.parentNode;
            if (this.value === "") {
                parent.classList.remove("focus");
            }
        }

        inputs.forEach((input) => {
            input.addEventListener("focus", focusFunc);
            input.addEventListener("blur", blurFunc);
        });

        return () => {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.removeEventListener('click', function (e) {
                    e.preventDefault();
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });

            inputs.forEach((input) => {
                input.removeEventListener("focus", focusFunc);
                input.removeEventListener("blur", blurFunc);
            });
        };
    }, []);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const handleDownloadCV = () => {
        const downloadUrl = Resume;
        window.open(downloadUrl, "_blank");
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "03204444-cd15-4827-b820-874e52c96759");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
        }
    };

    const combinedSubmit = (event) => {
        handleSubmit(event);
        onSubmit(event);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
    };

    // Navbar Responsive Logic
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // If you plan to use state, keep this line

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div>
            <div className="custom-scrollbar-container">
                {/* Your existing JSX content */}
            </div>
            <div>
                <section className="section-home" id="home">
                    <header>
                        <div className="navbar">
                            <div className="logo_div">
                                <img className="logo_img" src={Logo} alt="Logo" />
                            </div>
                            <ul className="links">
                                <li className="nav_li">
                                    <a className="nav_a" href="#home" role="button" aria-label="Home">Home</a>
                                </li>
                                <li className="nav_li">
                                    <a className="nav_a" href="#about" role="button" aria-label="About">About</a>
                                </li>
                                <li className="nav_li">
                                    <a className="nav_a" href="#skills" role="button" aria-label="Skills">Skills</a>
                                </li>
                                <li className="nav_li">
                                    <a className="nav_a" href="#projects" role="button" aria-label="Projects">Projects</a>
                                </li>
                                <li className="nav_li">
                                    <a className="nav_a" href="#services" role="button" aria-label="Services">Services</a>
                                </li>
                                <li className="nav_li">
                                    <a className="nav_a" href="#contact" role="button" aria-label="Contact">Contact</a>
                                </li>
                            </ul>
                            <div className="toggle_btn" onClick={toggleDropdown}>
                                {/* Conditionally render the appropriate icon */}
                                <FontAwesomeIcon icon={isDropdownOpen ? faTimes : faBars} />
                            </div>


                            <div className={isDropdownOpen ? "dropdown_menu open" : "dropdown_menu"}>
                                <ul>
                                    <li className="nav_li"><a className="nav_a" href="#home" role="button" aria-label="Home">Home</a></li>
                                    <li className="nav_li"><a className="nav_a" href="#about" role="button" aria-label="About">About</a></li>
                                    <li className="nav_li"><a className="nav_a" href="#skills" role="button" aria-label="Skills">Skills</a></li>
                                    <li className="nav_li">
                                        <a className="nav_a" href="#projects" role="button" aria-label="Projects">Projects</a>
                                    </li>
                                    <li className="nav_li">
                                        <a className="nav_a" href="#services" role="button" aria-label="Services">Services</a>
                                    </li>
                                    <li className="nav_li"><a className="nav_a" href="#contact" role="button" aria-label="Contact">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </header>
                    <span className="circle-home one-home "></span>
                    <div className="left-content">
                        <h1>Hi There!</h1>
                        <p className="typewriter p1">I am a Web Developer</p>
                        <p className="p2">I make the complex simple.</p>
                        <a className="button-white" href="#contact">Contact Me</a>
                    </div>
                    {/* <div>
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
                    </div> */}

                </section>

                {/* About Section */}
                <section id="about" className="section-about container">
                    <div className="left-section">
                        <span className="circle one-about"></span>
                        <div className="photo-container">
                            <img className=".photo-image" src={MyPhoto} alt="My_Photo" />
                        </div>
                    </div>
                    <div className="right-section">
                        <h2>Who Am I?</h2>
                        <h3>I’m Ashwin Bhardwaj, a Frontend Developer</h3>
                        <p className="static">
                            I specialize in creating dynamic and responsive web applications as a
                            Frontend developer. My skills include React.js, Node.js, Express.js and MongoDB. I am dedicated to writing clean and efficient code, focusing
                            on a user-friendly design. I'm well-versed in modern design principles
                            and often use libraries like Tailwind CSS to improve the visual appeal
                            of my projects. The utility-first approach of Tailwind CSS helps me
                            streamline styling, leading to quicker development and a consistent
                            design.
                        </p>
                        <button className="button-black CV-btn" onClick={handleDownloadCV}>Download CV</button>
                    </div>
                </section>

                {/* Skills Section */}
                <section id="skills" className="section-skills">
                    <div className="skills-heading">
                        <h2 className="background-heading">SKILLS</h2>
                        <h2 className="foreground-heading">My Skills</h2>
                    </div>
                    <span className="circle one-skills"></span>
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
                </section>

                {/* Projects Section */}
                <section className="section-projects" id="projects">
                    <div className="other-heading">
                        <h2 className="background-other">PROJECTS</h2>
                        <h2 className="foreground-other">My Projects</h2>
                    </div>
                    <span className="circle one-project "></span>
                    <div className="projects-container">
                        <div className="project-box">
                            <img className="project-image" src={ChetakProject} alt="Project1" />
                            <div className="project-overlay">
                                <h1 className="project-title">Bajaj Chetak</h1>
                                <p className="project-info">This is a Product Page for the Bajaj Chetak Premium Series.</p>
                                <button className="project-btn" onClick={() => window.open("https://github.com/KenXD2001/ReactJS-Projects/tree/main/react_e-commerce_product_page", "_blank")}>Source Code</button>
                            </div>
                        </div>
                        <div className="project-box">
                            <img className="project-image" src={WeatherApp} alt="Project1" />
                            <div className="project-overlay">
                                <h1 className="project-title">Weather App</h1>
                                <p className="project-info">This is an Weather App with Api Intigration</p>
                                <button className="project-btn" onClick={() => window.open("https://github.com/KenXD2001/ReactJS-Projects/tree/main/react_weather_app", "_blank")}>Source Code</button>
                            </div>
                        </div>
                        <div className="project-box">
                            <img className="project-image" src={Portfolio} alt="Project1" />
                            <div className="project-overlay">
                                <h1 className="project-title">Portfolio Website</h1>
                                <p className="project-info">My Portfolio Website where I showcased my skills of Web Development</p>
                                <button className="project-btn" onClick={() => window.open("https://github.com/KenXD2001/my-portfolio-new", "_blank")}>Source Code</button>
                            </div>
                        </div>
                        <div className="project-box">
                            <img className="project-image" src={AuthenticationSystem} alt="Project1" />
                            <div className="project-overlay">
                                <h1 className="project-title">Authentication System</h1>
                                <p className="project-info">Authentication and Authorization System build with React.js and Node.js</p>
                                <button className="project-btn" onClick={() => window.open("https://github.com/KenXD2001/ReactJS-Projects/tree/main/react_authentication_system", "_blank")}>Source Code</button>
                            </div>
                        </div>
                        <div className="project-box">
                            <img className="project-image" src={ChetakProject} alt="Project1" />
                            <div className="project-overlay">
                                <h1 className="project-title">NYC</h1>
                                <p className="project-info">kamdiaw andoadn iawdioa aioda</p>
                                <button className="project-btn" onClick={() => window.open("", "_blank")}>Source Code</button>
                            </div>
                        </div>
                        <div className="project-box">
                            <img className="project-image" src={ChetakProject} alt="Project1" />
                            <div className="project-overlay">
                                <h1 className="project-title">NYC</h1>
                                <p className="project-info">kamdiaw andoadn iawdioa aioda</p>
                                <button className="project-btn" onClick={() => window.open("", "_blank")}>Source Code</button>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Services Section */}
                <section id="services" className="section-services">
                    <div className="other-heading">
                        <h2 className="background-other">SERVICES</h2>
                        <h2 className="foreground-other">My Services</h2>
                    </div>
                    <span className="circle one-section"></span>
                    <span className="circle two-section"></span>
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
                    <div className="other-heading contact-heading">
                        <h2 className="background-other">CONTACTS</h2>
                        <h2 className="foreground-other">Contacts</h2>
                    </div>
                    <span className="circle one-contact"></span>
                    <span className="circle two-contact"></span>
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

                        <div className="contact-form">
                            <form onSubmit={combinedSubmit} autoComplete="off">
                                <h3 className="title">Contact us</h3>
                                <div className="input-container">
                                    <input
                                        type="text"
                                        name="name"
                                        className="input"
                                        value={name}
                                        onChange={handleNameChange}
                                    />
                                    <label htmlFor="">Username</label>
                                    <span>Username</span>
                                </div>
                                <div className="input-container">
                                    <input
                                        type="email"
                                        name="email"
                                        className="input"
                                        value={email}
                                        onChange={handleEmailChange}
                                    />
                                    <label htmlFor="">Email</label>
                                    <span>Email</span>
                                </div>
                                <div className="input-container">
                                    <input
                                        type="tel"
                                        name="phone"
                                        className="input"
                                        value={phone}
                                        onChange={handlePhoneChange}
                                    />
                                    <label htmlFor="">Phone</label>
                                    <span>Phone</span>
                                </div>
                                <div className="input-container textarea">
                                    <textarea
                                        name="message"
                                        className="input"
                                        value={message}
                                        onChange={handleMessageChange}
                                    ></textarea>
                                    <label className="message-label" htmlFor="">
                                        Message
                                    </label>
                                    <span>Message</span>
                                </div>
                                <input type="submit" value="Send" className="submit-btn" />
                            </form>
                        </div>
                    </div>
                </section>

                {/* Footer Section */}
                <section class="bottom-section">
                    <p class="copyright">© 2024 All rights reserved</p>
                    <div class="legal">
                        <a> Contact </a>
                        <a> Terms </a>
                        <a> Privacy </a>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Home;
