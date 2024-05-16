import React from 'react';
import Button from '../Button/Button';
import './home_card.css';
import Card_img from '../../Componets/Images/Projects-1-scaled.jpg';
import Card_img_2 from '../../Componets/Images/Projects-2-scaled.jpg';
import Card_img_3 from '../../Componets/Images/Projects-3-scaled.jpg';

const Home_card = () => {
    return (
        <>
            <section className='Home_card'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-12 col-lg-4' data-aos="fade-right">
                            <div className='sec-2_main'>
                                <h2 className='mb-0'>PROJECTS</h2>
                                <p className='ms-5'>What we do</p>
                            </div>
                            <div className='text-center Buttan mb-5 '>
                                <Button bg_color={"#F2F2F2"} Name={"ALL PROJECTS"} id={"Btn_hover"}/>
                            </div>
                        </div>
                        <div className='col-12 col-lg-8'>
                            <div className='row'>
                                <div className='col-md-4 col-12' data-aos="fade-down">
                                    <div className='img_heading rounded-bottom'>
                                        <img src={Card_img} className='w-100 rounded-top' alt="" />
                                        <p className='font'>PRIVATE HOMES</p>
                                    </div>
                                </div>
                                <div className='col-md-4 col-12' data-aos="fade-down">
                                    <div className='img_heading rounded-bottom'>
                                        <img src={Card_img_2} className='w-100 rounded-top' alt="" />
                                        <p className='font'>RETAILS & PALACES</p>
                                    </div>
                                </div>
                                <div className='col-md-4 col-12' data-aos="fade-down">
                                    <div className='img_heading rounded-bottom'>
                                        <img src={Card_img_3} className='w-100 rounded-top' alt="" />
                                        <p className='font'>SCENOGRAPHIES & COLLABORATIONS</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home_card