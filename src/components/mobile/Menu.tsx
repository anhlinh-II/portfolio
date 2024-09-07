import mobileLogo from '@/assets/img/logo/mobile_logo.png'
import { useState } from 'react';

const MobileMenu = () => {
     const [activeTab, setActiveTab] = useState<string>("home");
     const [isOpen, setIsOpen] = useState(false);

     const style = {
          display: isOpen ? "block" : "none",
          overflow: "hidden",
          transition: "2s"
     }

     const handleClickTab = (tab: string, event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
          event.preventDefault();
          setActiveTab(tab)
          const section = document.querySelector(`#${tab}`);
          section?.scrollIntoView({ behavior: "smooth", block: "start" });
     }

     return (
          <>
               <div className="arlo_tm_mobile_header_wrap">
                    <div className="main_wrap">
                         <div className="logo">
                              <a href="index.html"><img src={mobileLogo} alt="mobile_logo" /></a>
                         </div>
                         <div className="arlo_tm_trigger">
                              <div className={isOpen ? "hamburger hamburger--collapse-r is-active" : "hamburger hamburger--collapse-r"}>
                                   <div className="hamburger-box">
                                        <div className="hamburger-inner"
                                             onClick={() => setIsOpen(!isOpen)}
                                        ></div>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className="arlo_tm_mobile_menu_wrap" style={style}>
                         <div className="mob_menu" >
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
                    </div>
               </div>
          </>
     )
}

export default MobileMenu;