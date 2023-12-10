import Footer from "./footer"

const FooterContainer = () => {

    return(
<div>
<div className="flex items-center justify-center content-bg-9 ">
        <div className="flex flex-col items-center  md:p-20 p-6 sm:p-10">
            <div className="text-4xl  md:text-[48px] text-center">
              Fortify Your Digital Future with Our Security Solution
            </div>
            <p
              className="fpoint-text text-[18px] pt-4 text-center"
            >
              Ensures a proactive defense againts evolving threats, providing
              peace of mind for your digital landscape.
            </p>
            <div className="md:w-[230px] px-4 py-2.5 md:px-[36px] md:py-[20px] flex items-center justify-center rounded-[8px] bg-[#1A57FF] mt-[50px]">
              <div className="text-[24px]">Get In Touch</div>
            </div>
          </div>
        </div>

          <Footer />

</div>
    )
}

export default FooterContainer