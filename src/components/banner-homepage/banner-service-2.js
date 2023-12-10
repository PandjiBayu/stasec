import Header from "../header/header"

const BannerService2 = () => {

  return(
    <div className="head-vector service2-image bg-cover h-screen ">
      <Header />
      <div className="w-full px-2 md:px-6 lg:px-[118px] flex sm:pt-[80px]">
        <div className="flex flex-col space-y-[30px] py-[80px] items-center justify-center w-full">
          <h2 className="header-title">Secure Development Tools</h2>
          <h4 className="font-[16px] text-center">
            A cutting-edge software to assess and enhance the security of your
            code, ensuring your applications are built with security in mind.
          </h4>
          <div className="get-started">
            <div className="get-started-font">Get Started</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BannerService2