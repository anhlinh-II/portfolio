import { Button, Modal } from 'antd';
import { useState } from 'react';
import { IoLogoReact } from "react-icons/io5";
import { BsArrowRight } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

interface IProject {
     image: JSX.Element;
     title: string;
     shortDescription: string;
     detail: {
          description: string;
          technology: string;
          member: number;
          role: string;
          demo: string;
          github: string;
     }
}

const Project = () => {
     const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
     const [dataDetail, setDataDetail] = useState<IProject | null>(null)

     const showModal = () => {
          setIsModalOpen(true);
     };

     const handleOk = () => {
          setIsModalOpen(false);
     };

     const handleCancel = () => {
          setIsModalOpen(false);
     };

     const dataProjects: IProject[] = [
          {
               image: <IoLogoReact
                    color='#2bebfd'
                    size={50}
               />,
               title: "Website clone Tiki",
               shortDescription: "Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...",
               detail: {
                    description: "Xây dựng web thương mại điện tử bán sách",
                    technology: "ReactJS 18, Redux Toolkit, MySQL, JavaSpring",
                    member: 1,
                    role: "one for all",
                    demo: "demotiki.com.vn",
                    github: "anhlinh-II.github.io/tiki-clone"

               }
          },
          {
               image: <FaInstagram
                    color='#f7109c'
                    size={50}
               />,
               title: "Website clone Instagram",
               shortDescription: "Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...",
               detail: {
                    description: "Xây dựng mạng xã hội giúp kết nối mọi người",
                    technology: "ReactJS, MySQL, JavaSpring",
                    member: 3,
                    role: "team lead",
                    demo: "demo.com.vn",
                    github: "anhlinh-II.github.io/instagram-clone"

               }
          },
          {
               image: <FaTwitter
                    color='#1c8ded'
                    size={50}
               />,
               title: "Website clone Twitter",
               shortDescription: "Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...",
               detail: {
                    description: "clone twitter",
                    technology: "ReactJS, JavaSpring",
                    member: 2,
                    role: "FrontEnd Dev",
                    demo: "demotwitter.com.vn",
                    github: "anhlinh-II.github.io/twitter-clone"

               }
          }
     ]

     const handleCloseModal = () => {
          setIsModalOpen(false);
          setDataDetail(null);
     }
     return (
          <>
               <Modal
                    title={dataDetail && dataDetail.title ? `Dự án ${dataDetail.title}` : ""}
                    open={isModalOpen}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    footer={null}
                    maskClosable={false}
               >

                    {
                         dataDetail &&
                         <ul>
                              <li>Miêu tả: {dataDetail.detail.description}</li>
                              <li>Công nghệ: {dataDetail.detail.technology}</li>
                              <li>Số thành viên: {dataDetail.detail.member}</li>
                              <li>Vai trò: {dataDetail.detail.role}</li>
                              <li>Demo:
                                   <a href={dataDetail.detail.demo}>{dataDetail.detail.demo}</a>
                              </li>
                              <li>github:
                                   &nbsp;
                                   <a href={dataDetail.detail.github}>{dataDetail.detail.github}</a>
                              </li>
                         </ul>
                    }

               </Modal>
               <div className="arlo_tm_section" id="project">
                    <div className="arlo_tm_services_wrap">
                         <div className="container">
                              <div className="arlo_tm_title_holder">
                                   <h3>Các dự án đã hoàn thiện</h3>
                                   <span>Bao gồm dự án cá nhân và teamwork</span>
                              </div>
                              <div className="list_wrap">
                                   <ul>
                                        {dataProjects.map((item, index) => {
                                             console.log(item.image)
                                             return (
                                                  <li key={`${index}-project`} style={{cursor : "pointer"}}>
                                                       <div className="inner"
                                                            onClick={() => {
                                                                 setDataDetail(item)
                                                                 setIsModalOpen(true);
                                                            }}
                                                            >
                                                            <div className="icon">
                                                                 {item.image}

                                                            </div>
                                                            <div className="title_service">
                                                                 <h3>{item.title}</h3>
                                                            </div>
                                                            <div className="text">
                                                                 <p>{item.shortDescription}</p>
                                                            </div>
                                                            <div className='view-detail' style={{ padding: "5px 0" }}>
                                                                 <span style={{ cursor: 'pointer' }}>
                                                                      <BsArrowRight />
                                                                      &nbsp;
                                                                      Xem chi tiết
                                                                 </span>

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