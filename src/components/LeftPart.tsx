import desktopLogo from '@/assets/img/logo/desktop-logo.png';
import { FaInstagram, FaGithub, FaLinkedin, FaFacebook, FaTiktok } from "react-icons/fa";

interface IProps {
     showLeftPart: boolean;
     setShowLeftPart: (value: boolean) => void;
}

const LeftPart = (props: IProps) => {
     return (
          <>
               <div className={props.showLeftPart ? "arlo_tm_leftpart_wrap" : "arlo_tm_leftpart_wrap opened"}>
                    <div className="leftpart_inner">
                         <div className="logo_wrap">
                              <a href="#"><img src={desktopLogo} alt="desktop-logo" /></a>
                         </div>
                         <div className="menu_list_wrap">
                              <ul className="anchor_nav">
                                   <li><a href="#home">Home</a></li>
                                   <li><a href="#about">About</a></li>
                                   <li><a href="#skills">Skills</a></li>
                                   <li><a href="#project">Projects</a></li>
                                   <li><a href="#contact">Contact</a></li>
                              </ul>
                         </div>
                         <div className="leftpart_bottom">
                              <div className="social_wrap">
                                   <ul>
                                        <li><a href="https://www.facebook.com/caodz.gtvlyyen" target="_blank"><FaFacebook /></a></li>
                                        <li><a href="https://www.linkedin.com/in/h%E1%BB%93ng-anh-ph%E1%BA%A5n-b0256b272/" target="_blank"><FaLinkedin /></a></li>
                                        <li><a href="https://www.instagram.com/anhlinh_ll/" target="_blank"><FaInstagram /></a></li>
                                        <li><a href="https://www.tiktok.com/@kinkin.04.z" target="_blank"><FaTiktok /></a></li>
                                        <li><a href="https://github.com/anhlinh-II" target="_blank"><FaGithub /></a></li>
                                   </ul>
                              </div>
                         </div>
                         <a
                              onClick={() => props.setShowLeftPart(!props.showLeftPart)}
                              className={props.showLeftPart ? "arlo_tm_resize" : "arlo_tm_resize opened"} href="#"
                         >
                              <i className={props.showLeftPart ? "xcon-angle-left" : "xcon-angle-left opened"}></i>
                         </a>
                    </div>
               </div>
          </>
     )
}

export default LeftPart;