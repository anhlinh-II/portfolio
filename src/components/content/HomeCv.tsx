import { TypeAnimation } from 'react-type-animation';

const HomeCV = () => {
     return (
          <>
               <div className="arlo_tm_section" id="home">
                    <div className="arlo_tm_hero_header_wrap">
                         <div className="arlo_tm_universal_box_wrap">
                              <div className="bg_wrap">
                                   <div className="overlay_image hero jarallax" data-speed="0.1"></div>
                                   <div className="overlay_color hero"></div>
                              </div>
                              <div className="content hero">
                                   <div className="inner_content">
                                        <div className="image_wrap">
                                             <img src="img/hero/me1.jpg" alt="hero" />
                                        </div>
                                        <div className="name_holder">
                                             <h3>Nguyen Anh <span>Linh</span></h3>
                                        </div>
                                        <div className="text_typing">
                                             <p>I'm a
                                                  &nbsp;
                                                  <TypeAnimation
                                                       sequence={[
                                                            // Same substring at the start will only be typed out once, initially
                                                            ' Freelancer123',
                                                            3000, // wait 1s before replacing "Mice" with "Hamsters"
                                                            ' UI/UX design',
                                                            3000,
                                                            ' Web developer',
                                                            3000
                                                       ]}
                                                       wrapper="span"
                                                       speed={50}
                                                       style={{ fontSize: '24px', display: 'inline-block' }}
                                                       repeat={Infinity} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                                                  />
                                             </p>
                                        </div>
                                   </div>
                              </div>
                              <div className="arlo_tm_arrow_wrap bounce anchor">
                                   <a href="#about"><i className="xcon-angle-double-down"></i></a>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default HomeCV;