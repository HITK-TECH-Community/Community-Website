import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import "./about_us.css";

const AboutUs = () => {
    return(
        <>
            {/* <h1 className='about-us'></h1> */}
            <section className='about_us_bg'>
                <div className='container-fluid jumbo_bg'>
                    <div className='row mx-3 align-items-center'>
                        <div className='col-4'>
                            <h1 className='jumbo_h1 mt-5 text-light'>About Us</h1>
                            <p className='jumbo_p text-light'>Collaborate, Create, Share!</p>
                        </div>
                    </div>
                </div>

                <div className='container-fluid py-4'>
                    <div className='row'>
                        <div className='col-12'>
                            <h6 className='mx-5'>Home / About us</h6>
                            <hr />
                        </div>
                    </div>
                </div>

                <div className='container-fluid first_desc py-3'>
                    <div className='row align-items-center justify-content-center justify-space-between'>
                        <div className='col-12 col-md-5 text-center'>
                            <h2>Who we are and what we do</h2>
                            <p>This is the world's leading portal for easy and quick.</p>
                        </div>
                        <div className='col-12 col-md-6'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quae voluptates 
                            ipsam eos tenetur amet officiis, eum ipsum laboriosam magni culpa, blanditiis, 
                            dignissimos suscipit velit iste odit quam! Consequuntur, itaque. Officia, inventore
                            totam. Iure hic laborum non id voluptas. Molestiae dolore ipsam omnis rerum, fugit
                            explicabo necessitatibus veniam repellat commodi!</p>
                        </div>
                    </div>
                </div>

                <div className='container pt-5'>
                    <div className='row md-mx-5'>
                        <div className='col-12'>
                            <h1 className='text-center'> Our Team </h1>
                            <div className='mx-auto md-mx-5'>
                                <p className='text-center md-mx-5 md-px-5'> Lorem ipsum dolor sit amel. Lorem ipsum dolor sit amel.
                                    Lorem ipsum dolor sit amel. Lorem ipsum dolor sit amel.
                                    Lorem ipsum dolor sit amel. Lorem ipsum dolor sit amel.</p>
                                <hr className='team_hr'></hr>
                            </div>
                        </div>
                    </div>
                    <div className='row mx-5 justify-content-center'>
                        <div className='col-12 col-md-6 col-lg-4 py-4 lg-py-0'>
                            <div className='card wow fadeIn p-1'>
                                <img className='img-fluid' src="./images/parallax1.jpg" alt='pic1' />
                                <h4 className='mx-3 mt-2'>Nishant Shrivastva</h4>
                                <hr className='mx-3 my-0'></hr>
                                <p className='card_para mx-3 pt-3'> Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor.
                                Lorem ipsum dolor. Lorem ipsum dolor.</p>
                                <div class="d-flex mx-2 pb-2">
                                    <i className="fab fa-facebook-square fa-2x px-2"></i>
                                    <i className="fab fa-twitter-square fa-2x px-2"></i>
                                    <i className="fab fa-google-plus-square fa-2x px-2"></i>
                                    <i className="fab fa-envelope-square fa-2x px-2"></i>

                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-6 col-lg-4 py-4 lg-py-0'>
                            <div className='card p-1'>
                                <img className='img-fluid' src="./images/parallax1.jpg" alt='pic1' />
                                <h4 className='mx-3 mt-2'>Nishant Shrivastva</h4>
                                <hr className='mx-3 my-0'></hr>
                                <p className='card_para mx-3 pt-3'> Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor.
                                Lorem ipsum dolor. Lorem ipsum dolor.</p>
                                <div class="d-flex mx-2 pb-2">
                                    <i className="fab fa-facebook-square fa-2x px-2"></i>
                                    <i className="fab fa-twitter-square fa-2x px-2"></i>
                                    <i className="fab fa-google-plus-square fa-2x px-2"></i>
                                    <i className="fab fa-envelope-square fa-2x px-2"></i>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-6 col-lg-4 py-4 lg-py-0'>
                            <div className='card p-1'>
                                <img className='img-fluid' src="./images/parallax1.jpg" alt='pic1' />
                                <h4 className='mx-3 mt-2'>Nishant Shrivastva</h4>
                                <hr className='mx-3 my-0'></hr>
                                <p className='card_para mx-3 pt-3'> Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor.
                                Lorem ipsum dolor. Lorem ipsum dolor.</p>
                                <div class="d-flex mx-2 pb-2">
                                    <i className="fab fa-facebook-square fa-2x px-2"></i>
                                    <i className="fab fa-twitter-square fa-2x px-2"></i>
                                    <i className="fab fa-google-plus-square fa-2x px-2"></i>
                                    <i className="fab fa-envelope-square fa-2x px-2"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container-fluid mt-5'>
                    <div className='bg_red row py-4 justify-content-center align-items-center'>
                        <div className='col-12 col-md-8 text-center'>
                            <h5 className='my-auto'><b><i className='fas fa-cog'></i>  Want to join us?</b> What are you waiting for...</h5>
                        </div>
                        <div className='col-12 col-md-4 text-center'>
                            <button className='btn btn-blue py-1 px-5'>Join us now!</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* <div className='container'>
                <div className='row'>
                    <div className='col-5'>
                        <h4>About Us</h4>
                        <p mt-3>Lorem ipsum jfjdfksjkjfkfkdjklfjdklsjflkjflkjklfjlflkjlfjdjfjkljafsdkjfj
                        jfkfjkjfjkfjkljklajkfjakjdfkjfklsjdjsdjfkjkfuhfie</p>
                    </div>
                    <div className='col-2'>
                        <h4>Information</h4>
                        <ul mt-3>
                            <li>Maintenance Tips</li>
                            <li>Maintenance Tips</li>
                            <li>Maintenance Tips</li>
                            <li>Maintenance Tips</li>
                            <li>Maintenance Tips</li>
                        </ul>
                    </div>
                    <div className='col-2'>
                        <h4>Information</h4>
                        <ul mt-3>
                            <li>Maintenance Tips</li>
                            <li>Maintenance Tips</li>
                            <li>Maintenance Tips</li>
                            <li>Maintenance Tips</li>
                            <li>Maintenance Tips</li>
                        </ul>
                    </div>
                    <div className='col-2'>
                        <h4>Information</h4>
                        <ul mt-3>
                            <li>Maintenance Tips</li>
                            <li>Maintenance Tips</li>
                            <li>Maintenance Tips</li>
                            <li>Maintenance Tips</li>
                            <li>Maintenance Tips</li>
                        </ul>
                    </div>
                </div>
            </div> */}
            

        </>
    );
};

export default AboutUs;

