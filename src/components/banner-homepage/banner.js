const { default: Header } = require("../header/header")
const { default: HeadVector } = require("../icons/head-vector")

const Banner = () => {

    return(
      <div class="head-vector background-image bg-cover h-screen relative">
      <div className="top-0 left-0 hidden xl:block lg:absolute">
        <HeadVector />
      </div>
      <Header />
        <div className="w-full px-0 md:px-[118px] flex flex-col md:flex-row pt-[80px] ">
          <div className="flex flex-col space-y-[40px] md:py-[80px] w-full items-center md:items-start">
            <div className="text-center md:text-left header-title">A Stellar Path to <br className="hidden md:flex" /> Security</div>
            <h2 className="text-center md:w-full md:text-left font-[16px] md:font-[18px]">
              Guiding you to a path of top-notch cybersecurity. We are devoted
              to shielding <br /> your data and systems. With STASEC, it&apos;s not
              just software; it&apos;s a journey to a more <br /> secure digital
              future.
            </h2>
            <div className="get-started">
              <p className="get-started-font">Get Started</p>
            </div>
          </div>
 
        </div>
      </div>

    )
}

export default Banner