    import React from "react";
    import "./Footer.css";

    const Footer = () => {
    return (
        <footer
        data-aos="fade-up"
            data-aos-delay="100"
        style={{
            backgroundColor: "#1d2024",
            paddingTop: 100,
            margin:"50px 100px",
            borderRadius: 30,
        }}
        className="pb-60"
        >
        <div className="container">
            <div
            className="footer-style-one bg-dark text-light"
            >
            <div className="row">
                {/* About Section */}
                <div className="col-lg-3 col-md-6 footer-item mt-50">
                <div  className="f-item about">
                    <div style={{overflow:"hidden",height:115}}>
                    <img
                    style={{marginBottom:20,position:"absolute",top:-70,left:-20,width:234}}
                    alt="Foody Logo"
                    src="/aaebbe04-8491-4e1e-9e72-f923183d2c9e-removebg-preview.png"
                    />
                    </div>
                    <p>
                    Discover culinary delights recipes and inspiration in our food
                    haven.
                    </p>
                </div>
                </div>

                {/* Contact Info Section */}
                <div className="col-lg-3 col-md-6 footer-item mt-50">
                <div className="f-item contact">
                    <h4 className="widget-title">Contact Info</h4>
                    <ul className="contact-widget">
                    <li>
                        <div className="content iconc">
                        <div className="icon">
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        175 10h Street, Office 375 Berlin, De 21562
                        </div>
                    </li>
                    <li>
                        <div className="content iconc">
                        <div className="icon">
                            <i className="fas fa-phone"></i>
                        </div>
                        <a href="tel:12334598768">+123 34598768</a> <br />
                        <a href="tel:55434598734">+554 34598734</a>
                        </div>
                    </li>
                    <li>
                        <div className="content iconc">
                        <div className="icon">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <a href="mailto:foody@recipes.com">foody@recipes.com</a>
                        </div>
                    </li>
                    </ul>
                </div>
                </div>

                {/* Newsletter Section */}
                <div className="col-lg-3 col-md-6 footer-item mt-50">
                <h4 className="widget-title">Newsletter</h4>
                <p>
                    Join our subscribers list to get the latest news and special
                    offers.
                </p>
                <div className="f-item newsletter">
                    <form>
                    <input
                        placeholder="Your Email"
                        className="form-control"
                        autoComplete="off"
                        type="email"
                        name="email"
                    />

                    
                    {/* <button type="submit">
                        <i className="fas fa-long-arrow-right"></i>
                    </button> */}
                    </form>
                </div>
                <fieldset>
                    <input style={{marginRight:10}} id="privacy" type="checkbox" name="privacy" />
                    <label htmlFor="privacy">I agree to the Privacy Policy</label>
                </fieldset>
                </div>
                
                        {/* Explore Section */}
                        <div style={{paddingLeft:57}} className="col-lg-3 col-md-6 mt-50 footer-item pl-50 pl-md-15 pl-xs-15">
                            <div className="f-item link">
                                <h4 className="widget-title">Explore</h4>
                                <ul>
                                    <li><a href="/about-us">Company Profile</a></li>
                                    <li><a href="/about-us">About</a></li>
                                    <li><a href="/contact">Help Center</a></li>
                                    <li><a href="/contact">Career</a></li>
                                    <li><a href="/about-us">Features</a></li>
                                    <li><a href="/contact">Contact</a></li>
                                </ul>
                            </div>
                        </div>

            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom text-light">
                <div className="align-center">
                <div className="">
                    <p>© {new Date().getFullYear()} foody. All Rights Reserved</p>
                </div>
                <div className=" text-end">
                    <ul className="footer-social">
                    <li className="facebook">
                        <a
                        href="http://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <i className="fab fa-facebook-f"></i>
                        </a>
                    </li>
                    <li className="twitter">
                        <a
                        href="http://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <i className="fab fa-twitter"></i>
                        </a>
                    </li>
                    <li className="pinterest">
                        <a
                        href="http://pinterest.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <i className="fab fa-pinterest-p"></i>
                        </a>
                    </li>
                    <li className="linkedin">
                        <a
                        href="http://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <i className="fab fa-linkedin-in"></i>
                        </a>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            
            </div>
        </div>
        </footer>
    );
    };

    export default Footer;
