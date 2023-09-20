import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const { user, logIn } = UserAuth();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await logIn(email, password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="bg-[#111312] pt-10 sm:pt-12 bg-opacity-30 w-full h-[38rem] mb-[7rem] ">
      <div className=" w-[18rem] sm:w-[28rem] lg:w-[32rem] z-10 m-auto">
        <div className="flex flex-row justify-between">
          <Link to="/">
            <h2>نماوا</h2>
          </Link>
          <Link to="/Signup">
            <button className="px-6 py-[12px] bg-white text-black hover:bg-blue-500 hover:text-white border-none rounded text-xs">
              ثبت نام
            </button>
          </Link>
        </div>
        <form
          onSubmit={handleSubmit}
          className="my-[8rem] flex flex-col sm:bg-[#222327]  sm:px-12 rounded-xl sm:mt-12 sm:py-14"
        >
          {error && <p className="p-3 bg-red-600 my-3 rounded">{error}</p>}
          <h3 className="font-bold text-xl sm:mb-8">ورود</h3>
          <input
            placeholder="ایمیل"
            className="font-thin text-sm  bg-[#ffffff33] rounded h-[48px] my-6 px-4 focus:outline-none"
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="رمز عبور"
            className="font-thin text-sm bg-[#ffffff33] rounded h-[48px] px-4 focus:outline-none"
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="submit"
            value="ورود"
            className="font-thin cursor-pointer text-sm bg-[#9b9b9bda] rounded h-[38px] mt-10 sm:mt-14 focus:outline-none"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
