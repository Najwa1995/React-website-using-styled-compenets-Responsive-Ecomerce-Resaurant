import React, { Fragment } from 'react';
import Header from './Header';
import './Home.css';
import prideimg from '../../assets/img2.png';
import ingredients from '../../assets/img3.png';
import Data from '../../Data';
import { Carousel } from 'react-bootstrap';
import item1 from '../../assets/img7.jpg'
import item2 from '../../assets/img8.jpg'
import item3 from '../../assets/img9.jpg'
const Home = () => {
    const blogitem = Data.map((item) => {
        return (
            <div className='col-md-4'>
                <div className='box'>
                    <img src={item.img} />
                    <h5>{item.title}</h5>
                    <span>{item.time}</span>
                    <h6>{item.price}</h6>
                </div>
                <button><a href='a'>order new</a></button>
            </div>
        )
    }
    )

    return (
        <Fragment>
            <Header />
            <section className='members'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <h2>1287</h2>
                            <h5>SAVINGS</h5>
                        </div>
                        <div className='col-md-3'>
                            <h2>1287</h2>
                            <h5>PHOTOS</h5>
                        </div>
                        <div className='col-md-3'>
                            <h2>1567</h2>
                            <h5>ECOTES</h5>
                        </div>
                        <div className='col-md-3'>
                            <h2>1248</h2>
                            <h5>CLODS</h5>
                        </div>

                    </div>
                </div>

            </section>

            <section className='pride'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <img src={prideimg} title='prideimg'></img>
                        </div>

                        <div className='col-md-6'>
                            <h2>We pride ourselves on making real food from the best ingredients.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                            <button><a href='a'>Learn more</a></button>
                        </div>



                    </div>
                </div>
            </section>
            <section className='ingredients'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <h2>We make everything by hand with the best possible ingredients.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in
                                sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                                <ul>
                                    <li>Etiam sed dolor ac diam volutpat.</li>
                                    <li>Erat volutpat aliquet imperdiet.</li>
                                    <li>purus a odio finibus bibendum.</li>
                                </ul>
                            </p>
                            <button>
                                <a href='a'>Learn more</a>
                            </button>
                        </div>

                        <div className='col-md-6'>
                            <img src={ingredients} alt='ingredients'></img>
                        </div>



                    </div>
                </div>
            </section>

            <section className='paralex'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12'>
                            <h2>When a man's stomach is full it makes no <br />difference whether he is rich or poor.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio<br /> finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                            <a href='a'>Watch Our Story</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className='blogs'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 col-lg-12'>
                            <h2>Explore Our Foods</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    {blogitem}
                </div>

            </section>

            <section className='slider'>
                <Carousel>
                    <Carousel.Item>
                        <img src={item1} />
                        <Carousel.Caption>
                            {/* <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={item2} />

                        <Carousel.Caption>
                            {/* <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={item3} />

                        <Carousel.Caption>
                            {/* <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </section>
        </Fragment>

    )
}


export default Home;