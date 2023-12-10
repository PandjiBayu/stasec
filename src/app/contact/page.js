import HeadVector from "@/components/icons/head-vector";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import "./contact.css";
import Mail from "@/components/icons/mail";
import Phone from "@/components/icons/phone";
import Location from "@/components/icons/location";

export default function Contact() {
  return (
    <section>
      <div class="head-vector gradient">
        <Header />

        <div className="grid items-center justify-center h-full grid-cols-1 px-4 md:px-20 md:grid-cols-2">
          <div className="flex flex-col justify-center w-full h-full gap-10 px-6 py-3 bg-no-repeat bg-cover contact-img">
            <h3 className="text-3xl font-semibold md:text-5xl">
              Contact us using the form on the cyber security
            </h3>
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

          <div className="w-full p-4 contact-form sm:p-10">
            <form className="input-list">
              <div className="flex sm:flex-row flex-col gap-4 sm:gap-0 sm:space-x-[32px] w-full ">
                <div className="input-inner-container space-y-[16px] flex-1">
                  <div>Name*</div>
                  <input
                    className="w-full input-border"
                    placeholder="Your Name"
                  />
                </div>
                <div className="input-inner-container space-y-[16px] flex-1">
                  <div>Telephone Number*</div>
                  <input
                    className="w-full input-border"
                    placeholder="Your Phone"
                  />
                </div>
              </div>
              <div className="flex sm:flex-row flex-col gap-4 sm:gap-0 sm:space-x-[32px] w-full ">
                <div className="input-inner-container space-y-[16px] flex-1">
                  <div>Company Name*</div>
                  <input
                    className="w-full input-border"
                    placeholder="Your Company Email"
                  />
                </div>
                <div className="input-inner-container space-y-[16px] flex-1">
                  <div>Company Email*</div>
                  <input
                    className="w-full input-border"
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
                    className="w-full input-border"
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

      <Footer />
    </section>
  );
}
