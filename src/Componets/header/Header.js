import React, { useState, useEffect } from 'react';
import './Header.css';
import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaRegUser, FaShoppingBag, FaYoutubeSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";

export const Header = () => {
    const [activeLink, setActiveLink] = useState("HOME");
    const [scrolled, setScrolled] = useState(false);

    const navbar = [
        {
            Name: "HOME",
            Url: "/"
        },
        {
            Name: "THE GALLERY",
            Url: "/"
        },
        {
            Name: "PROJECTS",
            Url: "/"
        },
        {
            Name: "THE DESIGNER",
            Url: "/"
        },
        {
            Name: "E-SHOP",
            Url: "/"
        },
        {
            Name: "PHILOSOPHY",
            Url: "/"
        },
    ];

    const handleNavLinkClick = (name) => {
        setActiveLink(name);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <section className="header">
                <nav className={` navbar-expand-lg py-1 px-1 pe-0 ps-0 navbar ${scrolled ? 'scrolled' : ''}`}>
                    <div className="container-fluid">
                        <div className='logo me-5 ms-4'>
                            <img src={"https://stephaniecoutas.com/wp-content/uploads/2023/02/logo-sc-mm.svg"} className='w-100' alt="" />
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div class="offcanvas-header">
                                <img src={"https://stephaniecoutas.com/wp-content/uploads/2023/02/logo-sc-mm.svg"} className='w-25' alt="" />
                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                {navbar.map((item) => (
                                    <li key={item.Name} className="nav-item" >
                                        <Link
                                            to={item.Url}
                                            className={`nav-link ms-2 pb-0 ${activeLink === item.Name ? 'active' : 'home'}`}
                                            onClick={() => handleNavLinkClick(item.Name)}
                                        >
                                            {item.Name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <div className='d-flex gap-3 fs-5 fw-bolder px-sm-0 px-lg-5'>
                                <IoSearch />
                                <FaRegUser />
                                <FaShoppingBag />
                            </div>
                            </div>
                        </div>
                    </div>
                </nav>

            </section>
        </>
    );
};
