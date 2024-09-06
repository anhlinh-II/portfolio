import { useState } from "react";
import LeftPart from "../components/LeftPart";
import MobileMenu from "../components/mobile/Menu";
import Preloader from "../components/Preloader";
import RightPart from "../components/RightPart";
import { FloatButton } from "antd";

const Portfolio = () => {

     const [showLeftPart, setShowLeftPart] = useState<boolean>(true)

     return (
          <div className="arlo_tm_wrapper_all">

               <div id="arlo_tm_popup_blog">
                    <div className="container">
                         <div className="inner_popup scrollable"></div>
                    </div>
                    <span className="close"><a href="#"></a></span>
               </div>

               {/* <!-- PRELOADER --> */}
               <Preloader />
               {/* <!-- /PRELOADER --> */}

               {/* <!-- MOBILE MENU --> */}
               <MobileMenu />
               {/* <!-- /MOBILE MENU --> */}

               {/* <!-- CONTENT --> */}
               <div className="arlo_tm_content">

                    {/* <!-- LEFTPART --> */}
                    <LeftPart
                         showLeftPart={showLeftPart}
                         setShowLeftPart={setShowLeftPart}
                    />
                    {/* <!-- /LEFTPART --> */}

                    {/* <!-- RIGHTPART --> */}
                    <RightPart
                         showLeftPart={showLeftPart}
                         setShowLeftPart={setShowLeftPart}
                    />
                    {/* <!-- /RIGHTPART --> */}

                    {/* <a className="arlo_tm_totop" href="#"></a> */}
                    <FloatButton.BackTop
                         tooltip={<div>scroll to top</div>}
                    />
               </div>
          </div>
     )
}

export default Portfolio;