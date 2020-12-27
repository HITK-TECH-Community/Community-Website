import React from 'react';
import './about_us.css';
import { Card, ImageHeader, CardBody, CardFooter } from 'react-simple-card';
const AboutUs = () => {
    return (
        <div>
        <div className="about-section">
            <img src="./images/aboutback3.jpg" alt="" className="aboutus-img"/>
            <h1>ABOUT US</h1>
            <h4>Collaborate, Create, Share! </h4>
        </div>
        <div class="about">
        <div class="row">
            <div class="col-lg-6">
                <h1>Who are we and what we do?</h1>
                <div className='dash'></div>
                <h5 className='by-line text-center'>By HITK students, For HITK students</h5>
            </div>
            <div class="col-lg-6">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!</p>
                <p>Ad dolore dignissimos asperiores dicta facere optio quod commodi nam tempore recusandae. Rerum sed nulla eum vero expedita ex delectus voluptates rem at neque quos facere sequi unde optio aliquam!</p>
                <p>Tenetur quod quidem in voluptatem corporis dolorum dicta sit pariatur porro quaerat autem ipsam odit quam beatae tempora quibusdam illum! Modi velit odio nam nulla unde amet odit pariatur at!</p>
            </div>
        </div>
        </div>
        <div class="team container">
            <h1>Meet The Team</h1>
            <div className='dash'></div>
            <h5 className='by-line'>“Individuals can and do make a difference, but it takes a team to really mess things up.”</h5>
            <div class="row">
                <div class="col-lg-4">
                    <Card>
                        <ImageHeader imageSrc="https://cdn.mos.cms.futurecdn.net/3kZ3hc2YMB6LXiPohtyfKa.jpg" />
                        <CardBody>
                            <h4>Name</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam vero.</p>
                        </CardBody>
                        <CardFooter>
                        <i class="fab fa-linkedin fa-2x card_footer in"></i>
                        <i class="fab fa-twitter-square fa-2x card_footer"></i>
                        <i class="fab fa-github-square fa-2x card_footer"></i>
                        </CardFooter>
                    </Card>
                </div>
                <div class="col-lg-4">
                    <Card>
                        <ImageHeader imageSrc="https://cdn.mos.cms.futurecdn.net/3kZ3hc2YMB6LXiPohtyfKa.jpg" />
                        <CardBody>
                            <h4>Name</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam vero.</p>
                        </CardBody>
                        <CardFooter>
                        <i class="fab fa-linkedin fa-2x card_footer in"></i>
                        <i class="fab fa-twitter-square fa-2x card_footer"></i>
                        <i class="fab fa-github-square fa-2x card_footer"></i>
                        </CardFooter>
                    </Card>
                </div>
                <div class="col-lg-4">
                    <Card class="card">
                        <ImageHeader imageSrc="https://cdn.mos.cms.futurecdn.net/3kZ3hc2YMB6LXiPohtyfKa.jpg" />
                        <CardBody>
                            <h4>Name</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam vero.</p>
                        </CardBody>
                        <CardFooter>
                        <i class="fab fa-linkedin fa-2x card_footer in"></i>
                        <i class="fab fa-twitter-square fa-2x card_footer"></i>
                        <i class="fab fa-github-square fa-2x card_footer"></i>
                        </CardFooter>
                    </Card>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4">
                    <Card>
                        <ImageHeader imageSrc="https://cdn.mos.cms.futurecdn.net/3kZ3hc2YMB6LXiPohtyfKa.jpg" />
                        <CardBody>
                            <h4>Name</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam vero.</p>
                        </CardBody>
                        <CardFooter>
                        <i class="fab fa-linkedin fa-2x card_footer in"></i>
                        <i class="fab fa-twitter-square fa-2x card_footer"></i>
                        <i class="fab fa-github-square fa-2x card_footer"></i>
                        </CardFooter>
                    </Card>
                </div>
                <div class="col-lg-4">
                    <Card>
                        <ImageHeader imageSrc="https://cdn.mos.cms.futurecdn.net/3kZ3hc2YMB6LXiPohtyfKa.jpg" />
                        <CardBody>
                            <h4>Name</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam vero.</p>
                        </CardBody>
                        <CardFooter>
                        <i class="fab fa-linkedin fa-2x card_footer in"></i>
                        <i class="fab fa-twitter-square fa-2x card_footer"></i>
                        <i class="fab fa-github-square fa-2x card_footer"></i>
                        </CardFooter>
                    </Card>
                </div>
                <div class="col-lg-4">
                    <Card class="card">
                        <ImageHeader imageSrc="https://cdn.mos.cms.futurecdn.net/3kZ3hc2YMB6LXiPohtyfKa.jpg" />
                        <CardBody>
                            <h4>Name</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam vero.</p>
                        </CardBody>
                        <CardFooter>
                        <i class="fab fa-linkedin fa-2x card_footer in"></i>
                        <i class="fab fa-twitter-square fa-2x card_footer"></i>
                        <i class="fab fa-github-square fa-2x card_footer"></i>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
        </div>
    );
};

export default AboutUs;
