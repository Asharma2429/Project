import React ,{useState,useEffect} from 'react'
import amazon from "../src/Images/Amazon_logo.svg.png"
import image1 from "../src/Images/slider 1.jpg"
import image2 from "../src/Images/slider 2.jpg"
import image3 from "../src/Images/slider 3.jpg"
import image4 from "../src/Images/slider 4.webp"
import image5 from "../src/Images/slider 5.webp"
import ap1 from "../src/Images/IMG-20230531-WA0034.jpg"
import ap2 from "../src/Images/IMG-20230531-WA0043.jpg"
import ap3 from "../src/Images/IMG-20230531-WA0036.jpg"
import location from "../src/Images/18-location-pin-outline.gif"
import email from "../src/Images/1141-email-outline.gif"
import call from "../src/Images/1676-telephone-call-hand-outline.gif"
import time from "../src/Images/45-clock-time-outline.gif"


function Project() {

    // nav-----

    const images = [image2, image1, image3, image4, image5];
    const [update, setUpdate] = useState(0);

    const nextbtn = () => {
        setUpdate((prev) => (prev + 1) % images.length);
    };

    const backbtn = () => {
        setUpdate((prev) => (prev - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const intervalId = setInterval(nextbtn, 3000); // Change image every 3 seconds

        // Clear the interval on component unmount
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array means this runs once when the component mounts


 


  return (
   <>

{/* Nav */}

<div className="nav" id="header">
        <div className="container">
          <div className="nav-in">
            <div className="image">
              <img src={amazon} alt="amazon" />
            </div>

            <div className="list">

                
              <div className="bar">
                <i class="fa-solid fa-bars"></i>
              </div>

              <div className="menu">
                <ul>
                  <a href="#">
                    <li>Home</li>
                  </a>
                  <a href="#heading">
                    <li>Category</li>
                  </a>
                  <a href="#buttons">
                    <li>Products</li>
                  </a>
                  <a href="#About">
                    <li>About</li>
                  </a>
                  <a href="#contact">
                    <li>Contact</li>
                  </a>
                  <a href="/cart">
                    <li>Cart</li>
                  </a>
                  <a href="/">
                    <li>Log out</li>
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>


 {/* slider */}
      <div className="slider">
                <div className="image">
                    {images.map((img, i) => (
                        <img
                            key={i}
                            src={img}
                            className={i === update ? "active" : "d-none"}
                            alt={`Slide ${i + 1}`}
                        />
                    ))}
                </div>
{/* 
                <div className="btn">
                    <button className="nxt" onClick={nextbtn}>
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>
                    <button className="back" onClick={backbtn}>
                        <i className="fa-solid fa-arrow-left"></i>
                    </button>
                </div> */}

                <div className="dots">
                    {images.map((_, i) => (
                        <span
                            key={i}
                            className={`dot ${i === update ? "active-dot" : ""}`}
                            onClick={() => setUpdate(i)}
                        ></span>
                    ))}
                </div>
            </div>


{/* About Product-- */}

<div className="pro">
            <div className="container">
            <div className="center-box">
          <p className="tagp">AWESOME PRODUCTS</p>
          <br />
          <h1>Featured Products</h1>
          <br />
          <p className="ptag">"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi molestias eaque minus officia <br /> quam accusantium optio a? Corrupti praesentium minima cum consequuntur <br /> ratione a, quod obcaecati magnam atque molestias inventore"</p>
                    </div>


                <div className="pro-in">
                    <div className="left-box">
                        <img src={ap1} alt="pro" />

                    </div>

                    <div className="right-box">
                        <h2>About This Products</h2>
                        <h1>01.</h1>
                        <p className="ptext">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, rem architecto natus eveniet veniam reprehenderit praesentium. Quidem ratione eaque neque quod labore at! Praesentium fugiat ipsum qui, cum libero reprehenderit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique obcaecati sapiente perspiciatis quidem nesciunt placeat tempore totam quasi harum provident fugit, natus dolor animi laborum nemo sunt inventore veniam quas!</p>
                        {/* <br /> */}
                        <p className="textp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae deleniti blanditiis molestias magnam eveniet repellat asperiores quasi assumenda nisi hic molestiae, quos iste reprehenderit numquam iusto sapiente. Autem, ipsa deleniti?</p>

                        <h3>Price:</h3>
                        <p className="money"><del>$269.00</del>$169.00</p>

                        <div className="btn">
                        <button className="view">VIEW DETAILS</button>
                        <button className="cart">ADD TO CART</button>
                        </div>

                    </div>

                    


                </div>







                <div className="pro-in1">
                   

                    <div className="left">
                        <h2>About This Products</h2>
                        <h1>02.</h1>
                        <p className="ptextp">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, rem architecto natus eveniet veniam reprehenderit praesentium. Quidem ratione eaque neque quod labore at! Praesentium fugiat ipsum qui, cum libero reprehenderit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique obcaecati sapiente perspiciatis quidem nesciunt placeat tempore totam quasi harum provident fugit, natus dolor animi laborum nemo sunt inventore veniam quas!</p>
                        {/* <br /> */}
                        <p className="textptext">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae deleniti blanditiis molestias magnam eveniet repellat asperiores quasi assumenda nisi hic molestiae, quos iste reprehenderit numquam iusto sapiente. Autem, ipsa deleniti?</p>

                        <h3>Price:</h3>
                        <p className="money"><del>$269.00</del>$169.00</p>

                        <div className="button">
                        <button className="views">VIEW DETAILS</button>
                        <button className="carts">ADD TO CART</button>
                        </div>

                    </div>


                     <div className="right">
                        <img src={ap2} alt="product" />

                    </div>

                    


                </div>

                <div className="pro-in">
                    <div className="left-box">
                        <img src={ap3} alt="pro" />

                    </div>

                    <div className="right-box">
                        <h2>About This Products</h2>
                        <h1>03.</h1>
                        <p className="ptext">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, rem architecto natus eveniet veniam reprehenderit praesentium. Quidem ratione eaque neque quod labore at! Praesentium fugiat ipsum qui, cum libero reprehenderit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique obcaecati sapiente perspiciatis quidem nesciunt placeat tempore totam quasi harum provident fugit, natus dolor animi laborum nemo sunt inventore veniam quas!</p>
                        {/* <br /> */}
                        <p className="textp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae deleniti blanditiis molestias magnam eveniet repellat asperiores quasi assumenda nisi hic molestiae, quos iste reprehenderit numquam iusto sapiente. Autem, ipsa deleniti?</p>

                        <h3>Price:</h3>
                        <p className="money"><del>$269.00</del>$169.00</p>

                        <div className="btn">
                        <button className="view">VIEW DETAILS</button>
                        <button className="cart">ADD TO CART</button>
                        </div>

                    </div>

                    


                </div>


            </div>

        </div>


        {/* CONTACT------- */}


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

                            <p>A108 Adam Street, New York, NY 535022</p>
                        </div>

                    </div>


                    <div className="location">

                        <div className="image">
                          <img src={email} alt="" />
                        </div>

                        <div className="text">
                            <h1>Email:</h1>

                            <p>info@example.com</p>
                        </div>

                    </div>



                    <div className="location">

                        <div className="image">
                         <img src={call} alt="" />
                        </div>

                        <div className="text">
                            <h1>Call:</h1>

                            <p>+1 5589 55488 55</p>
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

{/* FOOTER-------------- */}

    <div className="footer" id="footer">
        <div className="container">
            <div className="footer-in">


                <div className="box-1">
                    <h1>IMPACT</h1>
                    <br />
                    <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita
                        valies darta donna mare fermentum iaculis eu non diam phasellus.</p>


                    <div className="icon">
                        <ul>
                            <li> <i class="fa-brands fa-twitter"></i></li>
                            <li><i class="fa-brands fa-facebook"></i></li>
                            <li><i class="fa-brands fa-instagram"></i></li>
                            <li><i class="fa-brands fa-linkedin"></i></li>
                        </ul>

                    </div>

                </div>




                <div className="box-2">
                    <h2>Useful Links</h2>

                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Services</li>
                        <li>Terms of service</li>
                        <li>Privacy policy</li>
                    </ul>

                </div>

                <div className="box-2">

                    <h2>Our Services</h2>

                    <ul>
                        <li>Web Designv</li>
                        <li>Web Development</li>
                        <li>Product Management</li>
                        <li>Marketing</li>
                        <li>Graphic Design</li>
                    </ul>

                </div>




                <div className="box-3">
                    <h2>Contact Us</h2>

                    <p>A108 Adam Street
                        New York, NY 535022
                        United States</p>
                    <br/><br />
                    <p>Phone: +1 5589 55488 55 <br />
                        Email: info@example.com</p>

                </div>


            </div>
            <div className="link">


                <p>© Copyright <strong> Impact.</strong> All Rights Reserved</p>
                <p>Designed by BootstrapMade</p>
            </div>

        </div>

    </div>



   </>
  )
}

export {Project}
