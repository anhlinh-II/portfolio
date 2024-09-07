import desktopLogo from '@/assets/img/logo/desktop-logo.png';
import { useEffect, useState } from 'react';
import { FaInstagram, FaGithub, FaLinkedin, FaFacebook, FaTiktok } from "react-icons/fa";
import { isMobile } from 'react-device-detect';

interface IProps {
     showLeftPart: boolean;
     setShowLeftPart: (value: boolean) => void;
}

const LeftPart = (props: IProps) => {

     const [activeTab, setActiveTab] = useState<string>("home");

     useEffect(() => {
          const { hash } = window.location;
          console.log(window.location)
          if (hash) {
               const tab = hash.replace("#", "");
               setActiveTab(tab);
               const section = document.querySelector(`${hash}`);
               section?.scrollIntoView({ behavior: "smooth", block: "start" });
          }
     }, [])

     const handleClickTab = (tab: string, event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
          event.preventDefault();
          setActiveTab(tab)
          const section = document.querySelector(`#${tab}`);
          section?.scrollIntoView({ behavior: "smooth", block: "start" });
     }

     return (
          <>
               <div className={props.showLeftPart ? "arlo_tm_leftpart_wrap" : "arlo_tm_leftpart_wrap opened"}>
                    <div className="leftpart_inner">
                         <div className="logo_wrap">
                              <a href="#"><img src={desktopLogo} alt="desktop-logo" /></a>
                         </div>
                         <div className="menu_list_wrap">
                              <ul className="anchor_nav">
                                   <li><a href="#home" className={activeTab === 'home' ? 'active' : ''}
                                        onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => handleClickTab('home', event)}
                                   >Home</a></li>
                                   <li><a href="#about"
                                        onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => handleClickTab('about', event)}
                                        className={activeTab === 'about' ? 'active' : ''}
                                   >About</a></li>
                                   <li><a href="#skills"
                                        onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => handleClickTab('skills', event)}
                                        className={activeTab === 'skills' ? 'active' : ''}
                                   >Skills</a></li>
                                   <li><a href="#projects"
                                        onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => handleClickTab('projects', event)}
                                        className={activeTab === 'projects' ? 'active' : ''}
                                   >Projects</a></li>
                                   <li><a href="#contact"
                                        onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => handleClickTab('contact', event)}
                                        className={activeTab === 'contact' ? 'active' : ''}
                                   >Contact</a></li>
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
                         {
                              !isMobile &&
                              <a
                                   onClick={
                                        (event) => {
                                             event.preventDefault();
                                             props.setShowLeftPart(!props.showLeftPart)
                                        }
                                   }
                                   className={props.showLeftPart ? "arlo_tm_resize" : "arlo_tm_resize opened"} href="#"
                              >
                                   <i className={props.showLeftPart ? "xcon-angle-left" : "xcon-angle-left opened"}></i>
                              </a>
                         }
                    </div>
               </div>
          </>
     )
}

export default LeftPart;