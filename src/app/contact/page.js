import HeadVector from "@/components/icons/head-vector";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import "./contact.css";
import Mail from "@/components/icons/mail";
import Phone from "@/components/icons/phone";
import Location from "@/components/icons/location";

export default function Contact() {
  return (
    <section className="main">
      <div className="gradient-image"></div>
      <div className="headers">
        <HeadVector />
      </div>
      <div class="head-vector">
        <Header />
        <div className="flex items-center justify-center h-full">
          <div className="contact-img">
            <div
              className="text-[50px] font-semibold"
              style={{ lineHeight: "normal" }}
            >
              Contact us using the form on the cyber security
            </div>
            <div className="flex flex-col space-y-[20px]">
              <div className="flex space-x-[10px]">
                <div className="rounded-full bg-white w-[45px] h-[45px] flex items-center justify-center">
                  <Mail width={22} height={22} color={"#103BC3"} />
                </div>
                <div className="flex flex-col">
                  <div className="text-[14px]">Email</div>
                  <div className="text-[18px]">infocontact@gmail.com</div>
                </div>
              </div>
              <div className="flex space-x-[10px]">
                <div className="rounded-full bg-white w-[45px] h-[45px] flex items-center justify-center">
                  <Phone width={22} height={22} color={"#103BC3"} />
                </div>
                <div className="flex flex-col">
                  <div className="text-[14px]">Phone:</div>
                  <div className="text-[18px]">789-1987-2887</div>
                </div>
              </div>
              <div className="flex space-x-[10px]">
                <div className="rounded-full bg-white w-[45px] h-[45px] flex items-center justify-center">
                  <Location width={22} height={22} color={"#103BC3"} />
                </div>
                <div className="flex flex-col">
                  <div className="text-[14px]">Location</div>
                  <div className="text-[18px]">Howard Street, 13126 USA</div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <form className="input-list">
              <div className="flex items-center space-x-[32px] w-full ">
                <div className="input-inner-container space-y-[16px] flex-1">
                  <div>Name*</div>
                  <input
                    className="input-border w-full"
                    placeholder="Your Name"
                  />
                </div>
                <div className="input-inner-container space-y-[16px] flex-1">
                  <div>Telephone Number*</div>
                  <input
                    className="input-border w-full"
                    placeholder="Your Phone"
                  />
                </div>
              </div>
              <div className="flex items-center space-x-[32px] w-full ">
                <div className="input-inner-container space-y-[16px] flex-1">
                  <div>Company Name*</div>
                  <input
                    className="input-border w-full"
                    placeholder="Your Company Email"
                  />
                </div>
                <div className="input-inner-container space-y-[16px] flex-1">
                  <div>Company Email*</div>
                  <input
                    className="input-border w-full"
                    placeholder="Your Email"
                  />
                </div>
              </div>
              <div className="flex items-center w-full ">
                <div className="input-inner-container space-y-[16px] flex-1">
                  <div className="flex space-x-1">
                    <div>Topic</div>
                    <div className="text-[#737373]">(write product)</div>
                  </div>
                  <input
                    className="input-border w-full"
                    placeholder="Your Name"
                  />
                </div>
              </div>
              <div className="flex items-center w-full ">
                <div className="input-inner-container space-y-[16px] flex-1">
                  <div>Write Your Message</div>
                  <textarea
                    className="input-border w-full h-[114px]"
                    placeholder="Message"
                    style={{ resize: "none" }}
                  />
                </div>
              </div>
            </form>
            <button className="flex py-[14px] px-[20px] items-center justify-center rounded-md bg-[#1A57FF] text-white w-full">
              Send
            </button>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
}
