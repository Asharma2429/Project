import React from "react";
import profile from "../src/Images/file_166251-removebg-preview.png";
import location from "../src/Images/18-location-pin-outline.gif"
import email from "../src/Images/1141-email-outline.gif"
import call from "../src/Images/1676-telephone-call-hand-outline.gif"
import time from "../src/Images/45-clock-time-outline.gif"


function Test() {
  return (
    <>
      <div className="nav" id="header">
        <div className="container">
          <div className="nav-in">
            <div className="list">
              <div className="bar">
                <i class="fa-solid fa-bars"></i>
              </div>

              <div className="menu">
                <ul>
                  <a href="#">
                    <li>About Me</li>
                  </a>
                  <a href="#heading">
                    <li>Skills</li>
                  </a>
                  <a href="#buttons">
                    <li>Hobbies & Interests</li>
                  </a>
                  <a href="#About">
                    <li>Passions</li>
                  </a>
                  <a href="#contact">
                    <li>Academic Background</li>
                  </a>
                  <a href="/cart">
                    <li>Work Experience</li>
                  </a>
                  <a href="/">
                    <li>Contact</li>
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="About-me">
        <div className="container">
          <div className="About-me1">
            <img src={profile} alt="my image" />

            <div className="about">
              <h2>Ankit Sharma</h2>
              <h4>My name is Ankit Sharma, I live in Jaipur, 
I have done my bachelors degree from  Rajasthan university in  Commerce after bachelor I have done full stack developer course from technologe
And I am  currently pursuing  my  MBA from Maharshi Dayanand University  with the specialisation of It and marketing ,in Gurgaon
</h4>


            </div>
          </div>

<div className="certificate">
<h4>Certificates <br /> <a href="https://drive.google.com/file/d/1aXC-Q08jol3qnQ2GUMcbks0QCk21o5gu/view">Software Engineering (Walmart)  March 2025</a> <br />


<a href="https://drive.google.com/file/d/13Ot5GB3_k2N14miCCM64G6A-MhBPAtCQ/view">React.js (Hacker Rank)  March 2025 </a> <br />
 <a href="https://drive.google.com/file/d/1ROZs03R7eYPIn_xc_34aTLRc03B9Q8ln/view">ChatGPT & AI Tools (Skill Nation)  Oct 2023</a> <br /> 
  <a href="https://drive.google.com/file/d/1v226d0gWKXWsDOF1YP6qQQGfKjBt70i9/view">Full Stack Developer (Techno Globe)  Nov 2023</a> </h4>
</div>

        </div>
      </div>







      <div className="contact" id="contact">
        <div className="container">



            <div className="form">
                <h1>Contact</h1>
                <br /><br />
            </div>



            <div className="contact-in">


                <div className="box-1">

                    <div className="location">

                        <div className="image">
                            <img src={location} alt="" />

                        </div>

                        <div className="text">
                            <h1>Location:</h1>

                            <p>Shiv vihar meenawala ,sirsi Road</p>
                        </div>

                    </div>


                    <div className="location">

                        <div className="image">
                          <img src={email} alt="" />
                        </div>

                        <div className="text">
                            <h1>Email:</h1>

                            <p>asharma24294@gmail.com</p>
                        </div>

                    </div>



                    <div className="location">

                        <div className="image">
                         <img src={call} alt="" />
                        </div>

                        <div className="text">
                            <h1>Call:</h1>

                            <p>+91 7976755591</p>
                        </div>

                    </div>

                    <div className="location">

                        <div className="image">
                       <img src={time} alt="" />
                        </div>

                        <div className="text">
                            <h1>Open Hours:</h1>

                            <p>Mon-Sat: 11AM - 23PM</p>
                        </div>

                    </div>

                </div>


                <div className="box-2">

                    <div className="input">

                        <input className="inp" type="text" name="name" placeholder="Your Name"/>
                        <input className="inp" type="email" placeholder="Your E-mail"/>
                    </div>

                    <div className="subject">
                        <input className="sub" type="text" placeholder="Subject"/>
                    </div>

                    <div className="textarea">
                        <textarea className="ta" cols="30" rows="10" placeholder="Message"></textarea>
                    </div>
                    <div className="bt">
                        <button>Send Message</button>
                    </div>
                </div>


            </div>


        </div>
    </div>





    </>
  );
}

export { Test };
