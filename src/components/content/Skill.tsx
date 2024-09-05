import ProgressBar from "@ramonak/react-progress-bar";

const Skill = () => {
     return (
          <>
               <div className="arlo_tm_section" id="skills">
                    <div className="arlo_tm_skills_wrap">
                         <div className="container">
                              <div className="inner_wrap">
                                   <div className="leftbox">
                                        <div className="arlo_tm_mini_title_holder">
                                             <h4>Kĩ năng Frontend</h4>
                                        </div>
                                        <li>Cắt ghép template website responsive</li>
                                        <li>Framework/Library: Bootstrap, TailwindCSS, Antd, Material UI, ReactJS, Redux ToolKit, Redux Saga</li>
                                   </div>
                                   <div className="rightbox">
                                        <div className="progress_bar_wrap_total">
                                             <div className="arlo_tm_progress_wrap" data-size="small" data-round="c" data-strip="off">
                                                  <div className="arlo_tm_progress" data-value="95" data-color="#000">
                                                       <span>
                                                            <span className="label">HTML/CSS/JAVASCRIPT </span>
                                                            <span className="number">80%</span>
                                                       </span>
                                                       <div className="arlo_tm_bar_bg">
                                                            <ProgressBar
                                                                 completed={80}
                                                                 bgColor="#333"
                                                                 height="8px"
                                                                 isLabelVisible={false}
                                                            />
                                                       </div>
                                                  </div>
                                                  <div className="arlo_tm_progress" data-value="75" data-color="#000">
                                                       <span>
                                                            <span className="label">ReactJS - TypeScript </span>
                                                            <span className="number">75%</span>
                                                       </span>
                                                       <div className="arlo_tm_bar_bg">
                                                            <ProgressBar
                                                                 completed={75}
                                                                 bgColor="#333"
                                                                 height="8px"
                                                                 isLabelVisible={false}
                                                            />
                                                       </div>
                                                  </div>
                                                  <div className="arlo_tm_progress" data-value="80" data-color="#000">
                                                       <span>
                                                            <span className="label">Design UX/UI</span>
                                                            <span className="number">80%</span>
                                                       </span>
                                                       <div className="arlo_tm_bar_bg">
                                                            <ProgressBar
                                                                 completed={80}
                                                                 bgColor="#333"
                                                                 height="8px"
                                                                 isLabelVisible={false}
                                                            />
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className="arlo_tm_skills_wrap">
                         <div className="container">
                              <div className="inner_wrap">
                                   <div className="leftbox">
                                        <div className="arlo_tm_mini_title_holder">
                                             <h4>Kĩ năng Backend</h4>
                                        </div>
                                        <li>Ngôn ngữ lập trình: Java</li>
                                        <li>Viết Restful APIs</li>
                                        <li>Framework: Springboot</li>
                                        <li>Database: MySQL, MongoDB</li>
                                   </div>
                                   <div className="rightbox">
                                        <div className="progress_bar_wrap_total">
                                             <div className="arlo_tm_progress_wrap" data-size="small" data-round="c" data-strip="off">
                                                  <div className="arlo_tm_progress" data-value="95" data-color="#000">
                                                       <span>
                                                            <span className="label">Java-Spring</span>
                                                            <span className="number">75%</span>
                                                       </span>
                                                       <div className="arlo_tm_bar_bg">
                                                            <ProgressBar
                                                                 completed={75}
                                                                 bgColor="#333"
                                                                 height="8px"
                                                                 isLabelVisible={false}
                                                            />
                                                       </div>
                                                  </div>
                                                  <div className="arlo_tm_progress" data-value="95" data-color="#000">
                                                       <span>
                                                            <span className="label">Database MySQL/MongoDB</span>
                                                            <span className="number">80%</span>
                                                       </span>
                                                       <div className="arlo_tm_bar_bg">
                                                            <ProgressBar
                                                                 completed={80}
                                                                 bgColor="#333"
                                                                 height="8px"
                                                                 isLabelVisible={false}
                                                            />
                                                       </div>
                                                  </div>
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

export default Skill;