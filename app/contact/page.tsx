import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="pt-[85px] bg-black">
      <div className="bg-yellow-300 h-full pt-4 lg:pt-0 px-10 pb-10 w-screen">
        <h1 className="text-center special-font hero-heading text-black">
          C<b>o</b>nt<b>a</b>ct <b>Us</b>
        </h1>
      </div>

      <main className="w-screen relative h-full flex flex-col bg-blue-50 lg:flex-row px-8 lg:px-4 text-black py-16">
        <div className="lg:w-[45%] mb-8 px-4 lg:px-8">
          <h1 className="text-[14px] font-robert-medium text-start mb-2 uppercase">
            Got a question?
          </h1>
          <h1 className="text-start special-font hero-heading">
            G<b>E</b>T IN T<b>OU</b>CH <b>W</b>ITH <b>U</b>S
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:w-[55%] md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-5">
          <div className="hover:bg-black hover:skew-y-4 hover:-skew-x-2 transition-transform duration-500 hover:scale-105 text-left w-[300px] 2xl:w-[350px] hover:text-blue-50 rounded-[16px] p-6">
            <p className="font-robert-regular text-end">001</p>
            <h2 className="font-zentry text-6xl font-bold mb-4">
              General Enquiries
            </h2>
            <p className="font-robert-medium mb-4">
              Got questions? Reach out to us for any information you need!
            </p>
            <Link href="mailto:hello@zentry.com">
              <Button
                title={"HELLO@ZENTRY.COM"}
                className="font-general font-bold"
                containerClass="bg-blue-50 items-center justify-center gap-1"
              />
            </Link>
          </div>
          <div className="hover:bg-black hover:skew-y-4 hover:skew-x-2 transition-transform duration-500 hover:scale-105 text-left w-[300px] 2xl:w-[350px] hover:text-blue-50 rounded-[16px] p-6">
            <p className="font-robert-regular text-end">002</p>
            <h2 className="font-zentry text-6xl font-bold mb-4">Careers</h2>
            <p className="font-robert-medium mb-4">
              Join our team! Explore career opportunities and grow with us.
            </p>
            <Link href="mailto:career@zentry.com">
              <Button
                title={"CAREER@ZENTRY.COM"}
                className="font-general font-bold"
                containerClass="bg-blue-50 items-center justify-center gap-1"
              />
            </Link>
          </div>
          <div className="hover:bg-black hover:skew-y-4 hover:-skew-x-2 transition-transform duration-500 hover:scale-105 text-left w-[300px] 2xl:w-[350px] hover:text-blue-50 rounded-[16px] p-6">
            <p className="font-robert-regular text-end">003</p>
            <h2 className="font-zentry text-6xl font-bold mb-4">
              Partner Enquiries
            </h2>
            <p className="font-robert-medium mb-4">
              Interested in partnering? Let&apos;s collaborate and create value
              together.
            </p>
            <Link href="mailto:partner@zentry.com">
              <Button
                title={"PARTNER@ZENTRY.COM"}
                className="font-general font-bold"
                containerClass="bg-blue-50 items-center justify-center gap-1"
              />
            </Link>
          </div>
          <div className="hover:bg-black hover:skew-y-4 hover:skew-x-2 transition-transform duration-500 hover:scale-105 text-left w-[300px] 2xl:w-[350px] hover:text-blue-50 rounded-[16px] p-6">
            <p className="font-robert-regular text-end">004</p>
            <h2 className="font-zentry text-6xl font-bold mb-4">
              Press Enquiries
            </h2>
            <p className="font-robert-medium mb-4">
              For all press needs, contact us for information and resources.
            </p>
            <Link href="mailto:media@zentry.com">
              <Button
                title={"MEDIA@ZENTRY.COM"}
                className="font-general font-bold"
                containerClass="bg-blue-50 items-center justify-center gap-1"
              />
            </Link>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
};
export default Contact;
