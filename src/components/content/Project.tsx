import { Button, Modal } from 'antd';
import { useState } from 'react';
import cameraDiagram from '@/assets/img/svg/camera-diaphragm.svg';

const Project = () => {
     const [isModalOpen, setIsModalOpen] = useState(false);

     const showModal = () => {
          setIsModalOpen(true);
     };

     const handleOk = () => {
          setIsModalOpen(false);
     };

     const handleCancel = () => {
          setIsModalOpen(false);
     };

     const dataProjects = [
          {
               image: cameraDiagram,
               title: "Website clone tiki",
               shortDescription: "Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...",
               detail: {
                    description: "", // mieu ta du an
                    technology: "", // cong nghe su dung
                    member: "",    // bao nhieu member
                    role: "",
                    demo: "",  // link video, deploy
                    github: ""

               }
          },
          {
               image: cameraDiagram,
               title: "Website clone tiki",
               shortDescription: "Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...",
               detail: {
                    description: "", // mieu ta du an
                    technology: "", // cong nghe su dung
                    member: "",    // bao nhieu member
                    role: "",
                    demo: "",  // link video, deploy
                    github: ""

               }
          },
          {
               image: cameraDiagram,
               title: "Website clone tiki",
               shortDescription: "Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...",
               detail: {
                    description: "", // mieu ta du an
                    technology: "", // cong nghe su dung
                    member: "",    // bao nhieu member
                    role: "",
                    demo: "",  // link video, deploy
                    github: ""

               }
          }
     ]
     return (
          <>
               <Button type="primary" onClick={showModal}>
                    Open Modal
               </Button>
               <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
               </Modal>
               <div className="arlo_tm_section" id="project">
                    <div className="arlo_tm_services_wrap">
                         <div className="container">
                              <div className="arlo_tm_title_holder">
                                   <h3>Các dự án đã hoàn thiện</h3>
                                   <span>Meet our amazing services</span>
                              </div>
                              <div className="list_wrap">
                                   <ul>
                                        {dataProjects.map((item, index) => {
                                             console.log(item.image)
                                             return (
                                                  <li>
                                                       <div className="inner">
                                                            <div className="icon">
                                                                 <embed className="svg" src={item.image} />
                                                                 {/* <svg xmlns="http://www.w3.org/2000/svg"></svg> */ }
                                                                 
                                                            </div>
                                                            <div className="title_service">
                                                                 <h3>{item.title}</h3>
                                                            </div>
                                                            <div className="text">
                                                                 <p>{item.shortDescription}</p>
                                                            </div>
                                                       </div>
                                                  </li>
                                             )
                                        })}

                                        {/* <li>
                                             <div className="inner">
                                                  <div className="icon">
                                                       <img className="svg" src="img/svg/new-tab.svg" alt="new-tab" />
                                                  </div>
                                                  <div className="title_service">
                                                       <h3>Web Design</h3>
                                                  </div>
                                                  <div className="text">
                                                       <p>Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...</p>
                                                  </div>
                                             </div>
                                        </li>
                                        <li>
                                             <div className="inner">
                                                  <div className="icon">
                                                       <img className="svg" src="img/svg/layers.svg" alt="layers" />
                                                  </div>
                                                  <div className="title_service">
                                                       <h3>Branding</h3>
                                                  </div>
                                                  <div className="text">
                                                       <p>Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...</p>
                                                  </div>
                                             </div>
                                        </li>
                                        <li>
                                             <div className="inner">
                                                  <div className="icon">
                                                       <img className="svg" src="img/svg/share.svg" alt="share" />
                                                  </div>
                                                  <div className="title_service">
                                                       <h3>Social Media</h3>
                                                  </div>
                                                  <div className="text">
                                                       <p>Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...</p>
                                                  </div>
                                             </div>
                                        </li>
                                        <li>
                                             <div className="inner">
                                                  <div className="icon">
                                                       <img className="svg" src="img/svg/adobe-illustrator.svg" alt="adobe-illustrator" />
                                                  </div>
                                                  <div className="title_service">
                                                       <h3>Illustrator</h3>
                                                  </div>
                                                  <div className="text">
                                                       <p>Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...</p>
                                                  </div>
                                             </div>
                                        </li>
                                        <li>
                                             <div className="inner">
                                                  <div className="icon">
                                                       <img className="svg" src="img/svg/seo-performance-marketing-graphic.svg" alt="seo-performance-marketing-graphic" />
                                                  </div>
                                                  <div className="title_service">
                                                       <h3>Marketing</h3>
                                                  </div>
                                                  <div className="text">
                                                       <p>Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...</p>
                                                  </div>
                                             </div>
                                        </li> */}
                                   </ul>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default Project;