const { default: Header } = require("../header/header")
const { default: HeadVector } = require("../icons/head-vector")

const BannerService1 = () => {

    return(
 <div class="head-vector service1-image bg-cover h-screen ">
      <Header />
      <div className="w-full px-5 sm:px-[80px] flex sm:pt-[80px]">
          <div className="flex flex-col space-y-[40px] py-[80px]">
            <div className="header-title">Penetration Test</div>
            <div className="font-[16px]">
              It&apos;s a comprehensive services that help you identify
              vulnerabilities in your systems and applications, enabling you to
              proactively strengthen your defenses.
            </div>
            <div className="get-started">
              <div className="get-started-font">Get Started</div>
            </div>
          </div>
          <div className="hidden md:w-full"></div>
        </div>
      </div>

    )
}

export default BannerService1
 