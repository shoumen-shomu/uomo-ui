import allIcons from "@/helper/iconProvider";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const Login = ({unMount}) => {
  const { close } = allIcons;
  const [remember, setRemember] = useState(false);

  return (
    <div className="w-[420px] h-full bg-white p-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <p className="texts_16_medium text-head">LOGIN</p>
        <span className="text-2xl cursor-pointer" onClick={()=>unMount(null)}>{close}</span>
      </div>

      {/* Form */}
      <div className="flex flex-col gap-y-5">
        {/* Email */}
        <input
          type="text"
          placeholder="Username or email address *"
          className="w-full border-2 border-footer px-4 py-4 texts_14_regular text-head  placeholder:text-second"
        />

        {/* Password */}
        <fieldset className="border-2 border-head px-4 pt-1 pb-2">
          <legend className="texts_14_regular text-head px-1">
            Password *
          </legend>
          <input
            type="password"
            defaultValue="••••••••"
            className="w-full texts_14_regular text-head bg-transparent"
          />
        </fieldset>

        {/* Remember & Lost password */}
        <div className="flex justify-between items-center">
          <label className="flex items-center gap-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={remember}
              onChange={() => setRemember(!remember)}
              className="w-4 h-4 border border-footer accent-head cursor-pointer"
            />
            <span className="texts_14_regular text-head">Remember me</span>
          </label>
          <Link 
            to="/lost-password"
            className="texts_14_regular text-head underline underline-offset-2"
          >
            Lost password?
          </Link>
        </div>

        {/* Login Button */}
        <button className="w-full bg-head text-white cursor-pointer texts_14_medium tracking-widest py-4  ">
          LOG IN
        </button>

        {/* Create Account */}
        <p className="texts_14_regular text-second text-center">
          No account yet?{" "}
          <Link
            to="/register"
            className="text-head underline underline-offset-2"
          >
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;