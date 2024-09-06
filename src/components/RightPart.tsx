import About from "./content/About";
import Contact from "./content/Contact";
import HomeCV from "./content/HomeCv";
import Project from "./content/Project";
import Skill from "./content/Skill";

const RightPart = () => {
     return (
          <>
               <div className="arlo_tm_rightpart">
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