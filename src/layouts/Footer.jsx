import namavaLogo from "../images/namava-logo.jpg";
import AppleLogo from "../images/apple-logo.jpg";
import GoogleLogo from "../images/last-google.jpg";
import Neshan from "../images/neshan.jpg";
import Enamad from "../images/enamad-logo.ac482e80.jpeg";
import { BsTwitter, BsInstagram, BsTelegram } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="sticky w-full h-8 bottom-0 bg-[#26272b] mb-10 mt-16 z-[98] flex justify-center ">
        <div className="m-auto w-[27rem] sm:w-[33rem] md:w-[39rem] lg:w-[55rem] xl:w-[70rem]  flex flex-row items-center justify-between px-2">
          <p className="cursor-pointer font-medium text-[#dad0d0]">
            اپلیکیشن ها
          </p>
          <p className="cursor-pointer font-medium text-[#dad0d0]">فرصت شغلی</p>
          <p className="cursor-pointer font-medium text-[#dad0d0] hidden sm:block">
            کارت هدیه
          </p>
          <p className="cursor-pointer font-medium text-[#dad0d0] hidden sm:block">
            درباره نماوا
          </p>
          <p className="cursor-pointer font-medium text-[#dad0d0]">
            خریداشتراک
          </p>
        </div>
      </div>
      <div className="w-full px-[1rem]  m-auto pb-4 xl:max-w-6xl">
        <div className="flex justify-between flex-col mb-3  sm:flex-row">
          <div className="flex items-center gap-4 my-4">
            <img src={namavaLogo} alt="" className="w-[3.3rem] rounded" />
            <h6 className="text-base  font-medium">دانلود اپلیکیشن</h6>
          </div>
          <div className="flex flex-row items-center">
            <img src={AppleLogo} alt="" className="w-[57px] rounded bg-black" />
            <img
              src={GoogleLogo}
              alt=""
              className="w-[70px] mr-4 rounded bg-black text-black"
            />
          </div>
        </div>
        <h4 className=" text-sm mr-[0.2rem] mt-6">درباره ما</h4>
        <div className="sm:flex sm:flex-row  gap-4 justify-between md:">
          <p className=" text-[#8c8c90] text-xs leading-[1.3rem] mt-1 mb-4 sm:w-[85%] sm:leading-[1.8rem] md:w-[70%]">
            سرزمین شاتل در سایت نماوا امکان پخش آنلاین فیلم‌ها و سریال‌های
            محبوبتان را در اختیار شما کاربران گرامی قرار می‌دهد. مشاهده
            پیش‌نمایش فیلم و سریال‌ها، جستجوی سریع مجموعه انتخابی، دانلود
            درون‌برنامه‌ای، حساب چند کاربره، تنظیمات کودک، پخش زنده رویدادهای
            ورزشی و فرهنگی و آرشیوی کامل از پرطرفدارترین فیلم‌ها و سریال‌ها از
            جمله قابلیت‌های نماوا، به‌روزترین سایت تماشای فیلم و سریال است.
            نماوا این امکان را برای کاربران خود فراهم کرده است تا در سریع‌ترین
            زمان ممکن و تنها با چند کلیک، سریال‌ها و فیلم‌های مورد علاقه خود را
            به صورت آنلاین و آفلاین مشاهده کنند.
          </p>
          <div className="flex flex-row gap-4 sm:flex-col md:flex-row">
            <div className="w-[83px] cursor-pointer h-[75px]">
              <img className="w-full h-full rounded" src={Enamad} alt="" />
            </div>
            <div className="w-[83px] cursor-pointer object-cover h-[75px]">
              <img src={Neshan} className="w-full rounded h-full " alt="" />
            </div>
          </div>
        </div>
        <hr className="border-t-1 border-gray-600 my-6" />
        <div className="md:flex md:flex-row-reverse md:justify-between">
          <div className="mt-6 flex justify-center flex-row gap-x-8 md:gap-x-6 ">
            <BsTwitter size={28} />
            <BsInstagram size={28} />
            <BsTelegram size={28} />
          </div>

          <p className="text-[#8c8c90] text-xs leading-[1rem] col-span-9 mt-6 md:ml-6">
            خدمات ارایه شده در نماوا، دارای مجوز های لازم از مراجع مربوطه می
            باشد و هر گونه بهره برداری و سوء استفاده از محتوای نماوا، پیگرد
            قانونی دارد.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
