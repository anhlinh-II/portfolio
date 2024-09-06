import About from "./content/About";
import Contact from "./content/Contact";
import HomeCV from "./content/HomeCv";
import Project from "./content/Project";
import Skill from "./content/Skill";

interface IProps {
     showLeftPart: boolean;
     setShowLeftPart: (value: boolean) => void;
}

const RightPart = (props : IProps) => {
     return (
          <>
               <div className={props.showLeftPart ? "arlo_tm_rightpart" : "arlo_tm_rightpart opened"}>
                         <div className="rightpart_inner">
                              <HomeCV />

                              {/* <!-- ABOUT --> */}
                              <About />
                              {/* <!-- /ABOUT --> */}

                              {/* <!-- SKILLS --> */}
                              <Skill />
                              {/* <!-- /SKILLS --> */}

                              {/* <!-- SERVICES --> */}
                              <Project />
                              {/* <!-- /SERVICES --> */}

                              {/* <!-- CONTACT & FOOTER --> */}
                              <Contact />
                              {/* <!-- /CONTACT & FOOTER --> */}

                         </div>
                    </div>
          </>
     )
}

export default RightPart;