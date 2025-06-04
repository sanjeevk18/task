import { ArrowRight, Menu, X } from 'lucide-react';
import React, { useState } from 'react'
import '../Components/style.css'; // Assuming you have a CSS file for additional styles
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaPhoneAlt, FaTwitter } from 'react-icons/fa';
import { IoLogoInstagram, IoMdClose } from 'react-icons/io';
const Home = () => {
    const products = [
        { name: "Lighting", image: "/images/light.jpg" },
        { name: "Motors", image: "/images/light.jpg" },
        { name: "Home-Comfort", image: "/images/light.jpg" },
        { name: "Kitchen Appliances", image: "/images/light.jpg" },
        { name: "Garment Care", image: "/images/light.jpg" },
        { name: "PERSONAL GROOMING", image: "/images/light.jpg" },
        { name: "HOME ENTERTAINMENT", image: "/images/light.jpg" },
        { name: "PERSONAL GROOMING", image: "/images/light.jpg" },
    ];



    const philosophyItems = [
        {
            title: "One-Stop Solutions",
            description: "Complete EMS and manufacturing solutions for electronics, lighting, ",
            icon: "/images/light.jpg",
        },
        {
            title: "Timely Deliveries",
            description: "Streamlined operations and smart logistics ensure your products ",
            icon: "/images/light.jpg",
        },
        {
            title: "Competent Performance",
            description: "High-quality output backed by decades of experience and certified .",
            icon: "/images/light.jpg",
        },
        {
            title: "Safe and Healthy Working Environment",
            description: "A secure, employee-first workplace with top safety standards.",
            icon: "/images/light.jpg",
        },
    ];


    const capabilities = [
        {
            title: "Die Casting",
            description: "Die casting is a metal casting process that is characterized by forcing molten metal...",
            image: "/images/light.jpg",
        },
        {
            title: "Press Shop",
            description: "Experienced operators operating stamping presses ranging from 5 tons to 250 tons...",
            image: "/images/light.jpg",
        },
        {
            title: "Testing & Validation",
            description: "Various testing and validation equipment ensure quality standards...",
            image: "/images/light.jpg",
        },
        {
            title: "Development & Engineering",
            description: "Our team of more than 100 engineers are continuously working on the development of...",
            image: "/images/light.jpg",
        },
        {
            title: "Assembly Belts",
            description: "Automated and manual assembly belts for efficient production...",
            image: "/images/light.jpg",
        },
        {
            title: "Electronics Manufacturing Services",
            description: "Modern EMS lines for PCBA and electronic integration...",
            image: "/images/light.jpg",
        },
        {
            title: "Injection Moulding",
            description: "Precision plastic molding with high-quality injection machines...",
            image: "/images/light.jpg",
        },
        {
            title: "Motors Manufacturing",
            description: "End-to-end motor production including winding and testing...",
            image: "/images/light.jpg",
        },
    ];


    const motors = [
        { name: "Universal Motor", image: "/images/light.jpg" },
        { name: "BLDC Motor", image: "/images/light.jpg" },
        { name: "Shaded Pole Motor", image: "/images/light.jpg" },
        { name: "Hand Blender Motor", image: "/images/light.jpg" },
        { name: "Fan Motor", image: "/images/light.jpg" },
        { name: "Induction Motor", image: "/images/light.jpg" },
        { name: "BLDC Chimney Motor", image: "/images/light.jpg" },
        { name: "Wet Grinder Motor", image: "/images/light.jpg" },
    ];

    const industries = [
        { label: "DOMESTIC APPLIANCES", icon: "/images/light.jpg" },
        { label: "LIGHTING", icon: "/images/light.jpg" },
        { label: "AUTOMOTIVE", icon: "/images/light.jpg" },
        { label: "TOOLING", icon: "/images/light.jpg" },
        { label: "MOTORS", icon: "/images/light.jpg" },
        { label: "ELECTRONICS", icon: "/images/light.jpg" },
    ];
    // const clientLogos = [
    //     { name: 'Usha', src: '/images/light.jpg' },
    //     { name: 'Havells', src: '/images/light.jpg' },
    //     { name: 'Butterfly', src: '/logos/butterfly.png' },
    //     { name: 'Denso', src: '/logos/denso.png' },
    //     { name: 'Eveready', src: '/logos/eveready.png' },
    //     { name: 'Premier', src: '/logos/premier.png' },
    //     { name: 'Signify', src: '/logos/signify.png' },

    // ];



    const clientLogos = [
        ['light.jpg', 'light.jpg', 'light.jpg', 'light.jpg', 'light.jpg'],
        ['light.jpg', 'light.jpg', 'light.jpg', 'light.jpg', 'light.jpg'],
        // ['premier.png', 'signify.png', 'preethi.png', 'philips.png', 'crompton.png'],

    ];



    const testimonials = [
        {
            name: 'Mr. Person1',
            quote: 'Elin is a leading Manufacturer and Supplier of Ceiling Fans, Fresh Air Fans & TPW Fans. The company manufactures a range of Fans for various OEMs...',
            image: '/images/light.jpg'
        },
        {
            name: 'Mr. Person2',
            quote: 'Elin is a leading Manufacturer and Supplier of Ceiling Fans, Fresh Air Fans & TPW Fans. The company manufactures a range of Fans for various OEMs...',
            image: '/images/light.jpg'
        },
        {
            name: 'Mr. Person3',
            quote: 'Elin is a leading Manufacturer and Supplier of Ceiling Fans, Fresh Air Fans & TPW Fans. The company manufactures a range of Fans for various OEMs...',
            image: '/images/light.jpg'
        }
    ];


    const certificates = [
        {
            img: "/images/light.jpg",
            alt: "ISO 9001:2015",
        },
        {
            img: "/images/light.jpg",
            alt: "ISO 14001:2015",
        },
        {
            img: "/images/light.jpg",
            alt: "IATF 16949:2016",
        },
    ];

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);



    return (
        <div>
            <header className="elin-header">
                <div className="header-inner">
                    <img src="/images/light.jpg" alt="Elin Logo" className="elin-logo" />

                    <nav className={`nav-links ${isOpen ? "active" : ""}`}>
                        <a href="#">Home</a>
                        <a href="#">Who We Are</a>
                        <a href="#">Our Capabilities</a>
                        <a href="#">Products</a>
                        <a href="#">Investors</a>
                        <a href="#">News & Events</a>
                        <a href="#">Careers</a>
                        <a href="#">Contact Us</a>
                    </nav>

                    <button className="menu-icon" onClick={toggleMenu}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </header>

            <section className="hero">
                <div className="overlay">
                    <h1>Your Partner<br />Beyond Products</h1>
                    <button className="know-more">Know More</button>
                </div>
            </section>
            {/* 
            <section className="banner">
                <div className="banner-content">
                    <h1>Welcome to Elin Electronics Ltd</h1>
                    <p>
                        Complete EMS and manufacturing solutions for electronics, lighting, and appliances — all under one roof.
                    </p>
                      <button className="read-btn">
                            READ MORE <ArrowRight size={16} />
                        </button>
                </div>
            </section> */}



            {/* about us  */}



            <section className="about">
                <div className="about-container">
                    {/* Left content */}
                    <div className="about-left">
                        <h2>About us</h2>
                        <div className="about-underline"></div>
                        <p>
                            Elin Electronics Ltd is an <strong>ISO 9001, ISO 14001 & IATF 16949</strong> certified company.
                            It is a flagship company of Elin Group, promoted by the <strong>"Sethia"</strong> family.
                            Elin was established in 1969 at DELHI / NCR. Elin offers various products and services to its
                            OEM customers. Elin is a one-stop solution provider, offers Electronic Manufacturing Services,
                            Universal Motors and Induction Motors, Design & Manufacturing of Tools/Moulds/Dies, Domestic Kitchen
                            Appliances, Personal Care Products, Lighting Products & Automotive Components.
                        </p>
                        <button className="read-btn">
                            READ MORE <ArrowRight size={16} />
                        </button>
                    </div>

                    {/* Right boxes */}
                    <div className="about-right">
                        <div className="about-box">
                            <div className="box-underline"></div>
                            <h4>10 Millions Motors Annual Capacity</h4>
                        </div>
                        <div className="about-box">
                            <div className="box-underline"></div>
                            <h4>One Stop Solution Provider</h4>
                        </div>
                        <div className="about-box">
                            <div className="box-underline"></div>
                            <h4>India’s Largest Fractional Horse Power Motors Manufactures</h4>
                        </div>
                        <div className="about-box">
                            <div className="box-underline"></div>
                            <h4>ISO 9001, ISO 14001 & IATF 16949 Certified</h4>
                        </div>
                    </div>
                </div>
            </section>




            {/* product us  */}






            <div className="container">
                <h2 className="title">Our Products</h2>
                <div className="product-grid">
                    {products.map((product, index) => (
                        <div className="product-card" key={index}>
                            <img src={product.image} alt={product.name} className="product-image" />
                            <p className="product-name">{product.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            {/* philipd section  */}



            <div className="philosophy">
                <div className="container">
                    <h2 className="section-title">Our Philosophy</h2>
                    <div className="philosophy-grid">
                        {philosophyItems.map((item, idx) => (
                            <div className="philosophy-card" key={idx}>
                                <div className="philosophy-icon">
                                    <img src={item.icon} alt={item.title} />
                                </div>
                                <div className="philosophy-content">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>




            {/* capability  */}





            <div className="capabilities-section">
                <div className="container">
                    <h2 className="section-title">Our Capabilities</h2>
                    <div className="capabilities-grid">
                        {capabilities.map((item, index) => (
                            <div className="capability-card" key={index}>
                                <img src={item.image} alt={item.title} className="capability-img" />
                                <div className="capability-overlay">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                    <button className="read-more">🔘 Read More</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>



            {/* motors  */}




            <div className="motors-section">
                <div className="container">
                    <h2 className="section-title">Our Motors Range</h2>
                    <div className="motors-grid">
                        {motors.map((motor, index) => (
                            <div className="motor-card" key={index}>
                                <img src={motor.image} alt={motor.name} />
                                <p>{motor.name}</p>
                            </div>
                        ))}
                        <div className="motor-card explore-more">
                            <h3>Explore More<br />Motors</h3>
                        </div>
                    </div>
                </div>
            </div>
            {/* services */}



            <section className="industries-section">
                <div className="container">
                    <h2 className="section-title">Industries we serve</h2>
                    <div className="industries-grid">
                        {industries.map((item, index) => (
                            <div className="industry-card" key={index}>
                                <img src={item.icon} alt={item.label} />
                                <p>{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Elin Electronics IPO Launche */}

            {/* <section className="industries-section">
                <div className="container">
                    <h2 className="section-title">Industries we serve</h2>
                    <div className="industries-grid">
                        <img src="/images/new.jpg" alt="" />
                    </div>
                </div>
            </section> */}

            {/* client  */}


            <div className="clients-container container">
                <h2 className="clients-title">Our Clients</h2>
                <div className="clients-table">
                    {clientLogos.map((row, rowIndex) => (
                        <div className="clients-row" key={rowIndex}>
                            {row.map((logo, colIndex) => (
                                <div className="client-cell" key={colIndex}>
                                    <img src={`/images/${logo}`} alt={`Client ${logo}`} />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            {/* testimonal  */}

            <div className="testimonials-section">
                <h2 className="section-title">Client Testimonials</h2>
                <div className="testimonials-wrapper">
                    {testimonials.map((item, idx) => (
                        <div className="testimonial-card" key={idx}>
                            <div className="quote-icon">&#10077;</div>
                            <h4 className="person-name">{item.name}</h4>
                            <p className="testimonial-text">{item.quote}</p>
                            <img className="testimonial-img" src={item.image} alt={item.name} />
                        </div>
                    ))}
                </div>
                <div className="dots">
                    {[0, 1, 2, 3, 4].map(i => (
                        <span key={i} className={`dot ${i === 2 ? 'active' : ''}`}></span>
                    ))}
                </div>
            </div>




            {/* certificate */}

            <section className="certificates-section container">
                <h2 className="clients-title">Our Certificates</h2>
                <div className="certificates-container">
                    {certificates.map((cert, index) => (
                        <div className="certificate-card" key={index}>
                            <img src={cert.img} alt={cert.alt} />
                        </div>
                    ))}
                </div>
            </section>




            <footer className="footer ">
                <div className="footer-top container" >
                    {/* Company Info */}
                    <div className="footer-col">
                        <h4>Company</h4>
                        <ul>
                            <li>Who we are</li>
                            <li>Our Capabilities</li>
                            <li>Investors</li>
                            <li>News & Events</li>
                            <li>Careers</li>
                            <li>Contact us</li>
                        </ul>
                    </div>

                    {/* Products */}
                    <div className="footer-col">
                        <h4>Products</h4>
                        <ul>
                            <li>Motors</li>
                            <li>Fans</li>
                            <li>Automotive Components</li>
                            <li>Appliances</li>
                            <li>LED Lighting</li>
                            <li>Medical Diagnostic Cartridges</li>
                        </ul>
                    </div>

                    {/* Enquiry Form */}
                    <div className="footer-col form-col">
                        <h4>For Business Enquiry</h4>
                        <p>We are happy to help you. Kindly fill up the below form for any query/ suggestion/ complaint.</p>
                        <form>
                            <div className="form-row">
                                <input type="text" placeholder="Name" />
                                <input type="text" placeholder="Contact No." />
                            </div>
                            <div className="form-row">
                                <input type="email" placeholder="Email ID" />
                                <input type="text" placeholder="Company Name" />
                            </div>
                            <textarea placeholder="How can we help you?" rows="4"></textarea>
                            <button type="submit">SUBMIT</button>
                        </form>
                    </div>
                </div>

                {/* Address & Factories */}
                <div className="footer-address container">
                    <div>
                        <p className="footer-section-title">Corporate Office Address :</p>
                        <p><FaMapMarkerAlt /> <strong>NEW DELHI</strong></p>
                        <p>ELIN HOUSE 4771, Bharatram Road, 23, Daryaganj, New Delhi-110 0002</p>
                        <p><FaPhoneAlt /> +91-01143000400 &nbsp;&nbsp; <FaEnvelope /> cs@elinindia.com &nbsp;&nbsp; <FaPhoneAlt /> +91-011-23289340</p>
                    </div>
                </div>

                {/* Factories */}
                <div className="footer-factories container">
                    <div>
                        <p><strong>GHAZIABAD</strong><br />
                            C-142, 143, 144, 144/1 & 144/2,<br />
                            Industrial Area, Site No.1,<br />
                            Bulandshara Road Ghaziabad<br />
                            (U.P.), 201009, India.</p>
                    </div>
                    <div>
                        <p><strong>BHIWADI</strong><br />
                            C2, C3, C5, C6 Elcina Manufacturing<br />
                            Cluster SPL-I, Industrial area Salarpur<br />
                            Bhiwadi, Rajasthan, 301019, India.</p>
                    </div>
                    <div>
                        <p><strong>BADDI</strong><br />
                            Village bheikhhol, Tehsil : Nalagarh<br />
                            Distt. Solan (H.P.), 174101, India.</p>
                    </div>
                    <div>
                        <p><strong>GOA</strong><br />
                            L-84, Verna Industrial Estate, Verna,<br />
                            Salcete Goa – 40722, 703722, India.</p>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="footer-bottom container">
                    <div className="social-icons">
                        <FaInstagram />
                        <FaFacebookF />
                        <IoMdClose />
                        <FaLinkedinIn />
                    </div>
                    <p>2025 Copyright Elin India. All Rights Reserved</p>
                </div>
            </footer>









        </div>
    )
}

export default Home
