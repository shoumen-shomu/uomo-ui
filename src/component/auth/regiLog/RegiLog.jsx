import React, { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAuthStore from "../../../store/authSlice";

const RegiLog = () => {
  const navigate = useNavigate();
  const { setUser } = useAuthStore();
  const [activeTab, setActiveTab] = useState("login");

  // ══ LOGIN STATE ══
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showpassword, setShowPassword] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const loginInputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Username or email address ",
    },
    {
      id: 2,
      name: "password",
      type: showpassword ? "text" : "password",
      placeholder: "Password ",
    },
  ];

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const Validate = () => {
    let newErrors = {};
    if (!formData.email) newErrors.email = "Please Enter Your Email";
    if (!formData.password) newErrors.password = "Please Enter Your Password";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLoginSubmit = () => {
    if (Validate()) {
      signInWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userCredential) => {
          setErrors({});
          setLoginSuccess(true);
          const user = userCredential.user;
          setUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
          });
          setTimeout(() => navigate("/"), 1500);
        })
        .catch(() => setErrors({ firebase: "Invalid email or password" }));
    }
  };

  // ══ REGISTER STATE ══
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [showRegPassword, setShowRegPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [Success, setSuccess] = useState(false);
  const [regErrors, setRegErrors] = useState({});

  const registerInputs = [
    { id: 1, name: "name", type: "text", placeholder: "Username" },
    { id: 2, name: "email", type: "text", placeholder: "Email address *" },
    {
      id: 3,
      name: "password",
      type: showRegPassword ? "text" : "password",
      placeholder: "Password *",
    },
    {
      id: 4,
      name: "confirmpassword",
      type: showConfirmPassword ? "text" : "password",
      placeholder: "Confirm Password *",
    },
  ];

  const handleRegChange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };

  const validate = () => {
    let newErrors = {};
    const gmailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passregex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{}|\\:;"'<>,.?\/])(?=.{8,}).*$/;

    if (!formdata.name) newErrors.name = "Please enter your name";
    if (!formdata.email) newErrors.email = "Please enter your email";
    else if (!gmailregex.test(formdata.email))
      newErrors.email = "Please enter a valid email";
    if (!formdata.password) newErrors.password = "Please enter your password";
    else if (!passregex.test(formdata.password))
      newErrors.password =
        "Password must be at least 8 characters and include uppercase, lowercase, number, and special character";
    if (!formdata.confirmpassword)
      newErrors.confirmpassword = "Please enter confirm password";
    else if (
      !newErrors.password &&
      formdata.password !== formdata.confirmpassword
    )
      newErrors.confirmpassword = "Password and confirm password do not match";

    setRegErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegSubmit = async () => {
    if (validate()) {
      createUserWithEmailAndPassword(auth, formdata.email, formdata.password)
        .then((userCredential) => {
          updateProfile(auth.currentUser, { displayName: formdata.name });
          setUser({
            uid: userCredential.user.uid,
            email: userCredential.user.email,
            displayName: formdata.name,
          });
          return userCredential;
        })
        .then(() => sendEmailVerification(auth.currentUser))
        .then(() => {
          setSuccess(true);
          setFormdata({
            name: "",
            email: "",
            password: "",
            confirmpassword: "",
          });
        })
        .catch((error) => {
          if (error.code === "auth/email-already-in-use") {
            setRegErrors({ email: "This email is already registered." });
          } else {
            setRegErrors({
              firebase: "Something went wrong. Please try again.",
            });
          }
        });
    }
  };

  useEffect(() => {
    if (Success) {
      setTimeout(() => {
        setSuccess(false);
        navigate("/");
      }, 2000);
    }
  }, [Success]);

  const switchTab = (tab) => {
    setActiveTab(tab);
    setErrors({});
    setRegErrors({});
    setLoginSuccess(false);
    setSuccess(false);
  };

  return (
    <>
      <section>
        <div className="container pt-43 pb-25">
          <div className=" px-5 max-w-162.75 mx-auto">
            {/* ── Tabs ── */}
            <div className="flex justify-center gap-10 mb-10">
              <button
                onClick={() => switchTab("login")}
                className={`texts_16_medium text-head tracking-widest transition-all relative
      after:absolute after:content-[''] after:h-0.5 after:bg-head after:-bottom-0.5 after:left-0 after:duration-500 after:ease-in-out cursor-pointer
      ${
        activeTab === "login"
          ? "after:w-full"
          : "opacity-40 after:w-0 hover:opacity-100 hover:after:w-full"
      }`}
              >
                LOGIN
              </button>
              <button
                onClick={() => switchTab("register")}
                className={`texts_16_medium text-head pb-0.5 tracking-widest transition-all relative
      after:absolute after:content-[''] after:h-0.5 after:bg-head after:-bottom-0.5 after:left-0 after:duration-500 after:ease-in-out cursor-pointer
      ${
        activeTab === "register"
          ? "after:w-full"
          : "opacity-40 after:w-0 hover:opacity-100 hover:after:w-full"
      }`}
              >
                REGISTER
              </button>
            </div>

            {/* ══ LOGIN FORM ══ */}
            {/* ══ LOGIN FORM ══ */}
            {activeTab === "login" && (
              <div className="flex flex-col">
                {loginSuccess && (
                  <div className="bg-green-50 border border-green-300 text-green-700 px-4 py-3 text-sm mb-5">
                    ✅ Login successful! Redirecting...
                  </div>
                )}

                {/* Username field — mb-[30px] */}
                {loginInputs.map((input, index) => (
                  <div
                    key={input.id}
                    className={`flex flex-col gap-1 ${
                      index === 0 ? "mb-[30px]" : "mb-[17px]"
                    }`}
                  >
                    <div className="relative border border-gray-300 focus-within:border-black transition-colors">
                      <label className="absolute -top-2.5 left-3 bg-white px-1 leading-6 text-[14px] text-head">
                        {input.placeholder}{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type={
                          input.name === "password"
                            ? showpassword
                              ? "text"
                              : "password"
                            : input.type
                        }
                        name={input.name}
                        placeholder=""
                        value={formData[input.name]}
                        onChange={handleLoginChange}
                        className="w-full px-4 py-4 text-sm text-gray-700 outline-none placeholder-gray-400 bg-transparent"
                      />
                      {input.name === "password" && (
                        <span
                          className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
                          onClick={() => setShowPassword(!showpassword)}
                        >
                          {showpassword ? <FaEye /> : <FaEyeSlash />}
                        </span>
                      )}
                    </div>
                    {errors[input.name] && (
                      <span className="text-xs text-red-500">
                        {errors[input.name]}
                      </span>
                    )}
                  </div>
                ))}

                {errors.firebase && (
                  <span className="text-xs text-red-500 mb-2">
                    {errors.firebase}
                  </span>
                )}

                {/* Remember me — mb-[26px] */}
                <div className="flex justify-between items-center mb-[26px]">
                  <label className="flex items-center gap-2 text-sm text-gray-500 cursor-pointer">
                    <input type="checkbox" /> Remember me
                  </label>
                  <a
                    href="/lost-password"
                    className="text-sm text-gray-700 underline"
                  >
                    Lost password?
                  </a>
                </div>

                {/* LOG IN button — mb-[24px] */}
                <button
                  onClick={handleLoginSubmit}
                  className="w-full py-4 bg-black text-white text-sm font-bold tracking-widest hover:bg-gray-800 transition-colors mb-[24px]"
                >
                  LOG IN
                </button>

                <p className="text-center text-sm text-gray-500">
                  No account yet?{" "}
                  <span
                    onClick={() => switchTab("register")}
                    className="text-black font-semibold underline cursor-pointer"
                  >
                    Create Account
                  </span>
                </p>
              </div>
            )}

            {/* ══ REGISTER FORM ══ */}
            {activeTab === "register" && (
              <div className="flex flex-col">
                {Success && (
                  <div className="bg-green-50 border border-green-300 text-green-700 px-4 py-3 text-sm">
                    ✅ Account created! Verification email sent. Redirecting...
                  </div>
                )}

                {registerInputs.map((input, index) => (
                  <div key={input.id} className={`flex flex-col gap-1 ${
  index === 0 ? "mb-[29px]"
  : index === 1 ? "mb-[30px]"
  : "mb-[30px]"
}`}>
                    <div className={`relative ${
  input.name === "password" || input.name === "confirmpassword"
    ? "border border-gray-300 focus-within:border-black transition-colors"
    : ""
}`}>
  {(input.name === "password" || input.name === "confirmpassword") && (
    <label className="absolute -top-2.5 left-3 bg-white px-1 leading-6 text-[14px] text-head">
      {input.placeholder} <span className="text-red-500">*</span>
    </label>
  )}
                      <input
                        type={input.type}
                        name={input.name}
                        placeholder={input.placeholder}
                        value={formdata[input.name]}
                        onChange={handleRegChange}
                        className={`w-full px-4 py-4 text-sm text-gray-700 outline-none placeholder-gray-400 transition-colors ${
  input.name === "password" || input.name === "confirmpassword"
    ? "bg-transparent border-0"
    : "border border-gray-300 focus:border-black"
}`}
                      />
                      {input.name === "password" && (
                        <span
                          className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
                          onClick={() => setShowRegPassword(!showRegPassword)}
                        >
                          {showRegPassword ? <FaEye /> : <FaEyeSlash />}
                        </span>
                      )}
                      {input.name === "confirmpassword" && (
                        <span
                          className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                        >
                          {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
                        </span>
                      )}
                    </div>
                    {regErrors[input.name] && (
                      <span className="text-xs text-red-500">
                        {regErrors[input.name]}
                      </span>
                    )}
                  </div>
                ))}

                {regErrors.firebase && (
                  <span className="text-xs text-red-500">
                    {regErrors.firebase}
                  </span>
                )}

                <p className="text-sm text-gray-500 leading-relaxed">
                  Your personal data will be used to support your experience
                  throughout this website, to manage access to your account, and
                  for other purposes described in our{" "}
                  <a href="/privacy-policy" className="text-black underline">
                    privacy policy
                  </a>
                  .
                </p>

                <button
                  onClick={handleRegSubmit}
                  className="w-full py-4 bg-black text-white text-sm font-bold tracking-widest hover:bg-gray-800 transition-colors mt-2"
                >
                  REGISTER
                </button>

                <p className="text-center text-sm text-gray-500">
                  Already have an account?{" "}
                  <span
                    onClick={() => switchTab("login")}
                    className="text-black font-semibold underline cursor-pointer"
                  >
                    Log In
                  </span>
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default RegiLog;
