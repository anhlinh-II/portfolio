import aboout from '@/assets/img/about/550x6400.jpg';
import me from '@/assets/img/about/550x640.jpg';
import myCV from '@/assets/hoidanit.pdf';
import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

const About = () => {

     return (
          <>
               <div className="arlo_tm_section relative" id="about">
                    <div className="arlo_tm_about_wrapper_all">
                         <div className="container">
                              <div className="arlo_tm_title_holder">
                                   <h3>About Me</h3>
                                   <span>Main informations about me</span>
                              </div>
                              <div className="arlo_tm_about_wrap">
                                   <div className="author_wrap">
                                        <div className="leftbox">
                                             <div className="about_image_wrap parallax" data-relative-input="true">
                                                  <div className="image layer" data-depth="0.1">
                                                       <img src={aboout} alt="550x640" />
                                                       <div className="inner" data-img-url={me}></div>
                                                  </div>
                                                  <div className="border layer" data-depth="0.2">
                                                       <img src="img/about/550x640.jpg" alt="550x640" />
                                                       <div className="inner"></div>
                                                  </div>
                                             </div>

                                        </div>
                                        <div className="rightbox">
                                             <div className="arlo_tm_mini_title_holder">
                                                  <h4>Hi there...! I'm a
                                                       &nbsp;
                                                       <TypeAnimation
                                                            sequence={[
                                                                 // Same substring at the start will only be typed out once, initially
                                                                 ' Backend Developer',
                                                                 3000, // wait 1s before replacing "Mice" with "Hamsters"
                                                                 ' UI/UX design',
                                                                 3000,
                                                                 ' Web developer',
                                                                 3000
                                                            ]}
                                                            wrapper="span"
                                                            speed={50}
                                                            style={{ fontSize: '24px', display: 'inline-block' }}
                                                            repeat={Infinity} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}></TypeAnimation>
                                                  </h4>

                                             </div>
                                             <div className="definition">
                                                  <p>
                                                       Xin chào! Mình tên là <strong>Anh Linh</strong>. Vốn là một sinh viên ngành công nghệ thông tin, nhưng cơ mà mình lại không thích code ^_^
                                                       <br />
                                                       <br />
                                                       Tuy vậy mình vẫn có hiểu biết chút xíu về Java, Spring Ecosystem, Javascript, ReactJS, Redux, NextJS và SQL (Dòng đời xô đẩy ấy mà -.-)
                                                  </p>
                                             </div>
                                             <div className="about_short_contact_wrap">
                                                  <ul>
                                                       <li>
                                                            <span><label>Ngày sinh:</label> XX.XX.2004</span>
                                                       </li>
                                                       <li>
                                                            <span><label>Giới tính:</label> Nam</span>
                                                       </li>
                                                       <li>
                                                            <span><label>Trường:</label> Đại học Kinh tế Quốc Dân</span>
                                                       </li>
                                                       <li>
                                                            <span><label>Chuyên ngành:</label> Công nghệ thông tin</span>
                                                       </li>
                                                       <li>
                                                            <span><label>Github:</label> anhlinh-II.github.io</span>
                                                       </li>
                                                       <li>
                                                            <span><label>Facebook:</label> Ahn Linhh</span>
                                                       </li>
                                                       <li>
                                                            <span><label>Instagram:</label> <a href="#">anhlinh_II</a></span>
                                                       </li>
                                                       <li>
                                                            <span><label>Mail:</label> <a href="mailto:example@gmail.com">linhnguyenanh75&#64;gmail.com</a></span>
                                                       </li>
                                                  </ul>
                                             </div>
                                             <div className="buttons_wrap">
                                                  <ul>
                                                       <li>
                                                            <a href={myCV} download><span>Download CV</span></a>
                                                       </li>
                                                  </ul>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default About;
