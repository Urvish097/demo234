import React from 'react';
import "./Home.css";
import { Header } from '../../header/Header';
import Home_card from '../../Home_card/Home_card';
import lady from "../../Images/sec_3_img.png";
import Button from '../../Button/Button';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import kate from '../../Images/canape-kate-brode.png';
import mirror from '../../Images/mirror-cat.jpg';
import puzzle from '../../Images/puzzle-lamp.jpg';
import chair from '../../Images/chair-cat.jpg';
import tabel from '../../Images/table-cat-image.jpg';
import console from '../../Images/console-cat-image.jpg'

const Home = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay:true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 730,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <section className='sec-1'>
                <div className='bg_home'>
                    <Header />
                    <div className='container'>
                        <div className='row justify-content-center text-center'>
                            <div className=' col-lg-10'>
                                <div className='Heading_main' data-aos="zoom-in">
                                    <h4 className='home_heading'>STEPHANIE COUTAS</h4>
                                    <h1 className='home_heading_2'>INTERIOR DESIGN STUDIO
                                        <br />
                                        & ART GALLERY</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='sec-2'>
                <div className='bg_color'>
                    <Home_card />
                </div>
            </section>

            <section className='sec-3'>
                <div className='container'>
                    <div className='row align-items-center justify-content-around'>
                        <div className=' col-lg-5'>
                            <div className='text-center text-lg-start ms-0 ms-lg-4' data-aos="fade-right">
                                <img src={lady} className='img_lady mb-5' alt="" />
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='Designer_info' data-aos="fade-left">
                                <h2 className='mb-0 text-center text-lg-start'>THE DESIGNER</h2>
                                <p className='ms-3 name mb-5 text-center text-lg-start'>Stephanie Coutas</p>
                                <p className='intro mb-5 text-center text-lg-start'>Passionate about craftsmanship and outstanding know-how, Stephanie Coutas designs daringly elegant interiors combining the decorative arts with a blend of cultures — her way of affirming her idea of French luxury, an art of living that is all about elegance.</p>
                                <div className='text-center'>
                                    <Button bg_color={"#F2F2F2"} Name={"DISCOVER"} id={"Btn_hover"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='sec-4'>
                <div className='container-fluid'>
                    <div className='row align-items-center'>
                        <div className='col-lg-4'>
                            <div className='slider_main mb-5'>
                                <h2 className='text-center'>E-shop</h2>
                                <p className='text-center'>Our creations</p>
                            </div>
                            <div className='btn_main text-center'>
                                <Button bg_color={"#F2F2F2"} Name={"SHOP NOW"} id={"Btn_hover"} />
                            </div>
                        </div>
                        <div className='col-lg-8'>
                            <div className='text-center'>
                            <Slider {...settings}>
                                <div className='slider_main_2   '>
                                    <img src={kate} className='w-100 object-fit-contain slider_img' alt="" />
                                    <p className='overflow-hidden mb-1 ms-2'>Sofas</p>
                                </div>
                                <div className='slider_main_2  '>
                                    <img src={mirror} className='w-100 object-fit-contain slider_img' alt="" />
                                    <p className='overflow-hidden mb-1 ms-2'>Mirrors</p>
                                </div>
                                <div className='slider_main_2  '>
                                    <img src={puzzle} className='w-100 object-fit-contain slider_img' alt="" />
                                    <p className='overflow-hidden mb-1 ms-2'>Lights</p>
                                </div>
                                <div className='slider_main_2  '>
                                    <img src={chair} className='w-100 object-fit-contain slider_img' alt="" />
                                    <p className='overflow-hidden mb-1 ms-2'>Chairs / Armchairs</p>
                                </div>
                                <div className='slider_main_2  '>
                                    <img src={tabel} className='w-100 object-fit-contain slider_img' alt="" />
                                    <p className='overflow-hidden mb-1 ms-2'>Tables / Desks</p>
                                </div>
                                <div className='slider_main_2   '>
                                    <img src={console} className='w-100 object-fit-contain slider_img' alt="" />
                                    <p className='overflow-hidden mb-1 ms-2'>Consoles / Sideboards</p>
                                </div>
                            </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Home