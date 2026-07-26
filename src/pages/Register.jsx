import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/axios";

const Register = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");



  // Input Handle
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
  };



  // Register Function
  const handleRegister = async (e) => {

    e.preventDefault();


    const { full_name, email, password } = formData;


    // Validation

    if (!full_name || !email || !password) {
      setError("Please fill all fields");
      return;
    }


    if (password.length < 6) {
      setError("Password must be minimum 6 characters");
      return;
    }


    if (!email.includes("@")) {
      setError("Enter valid email");
      return;
    }



    try {

      setLoading(true);


      const response = await api.post(
        "/api/v1/auth/register",
        {
          full_name,
          email,
          password,
        }
      );


      console.log("Register Response:", response.data);


      alert("Account Created Successfully 🎉");


      navigate("/login");


    }


    catch (error) {

      console.log("Register Error:", error);


      if (error.response) {

        setError(
          error.response.data.detail ||
          "Registration Failed"
        );

      }

      else if (error.request) {

        setError(
          "Backend server is not running"
        );

      }

      else {

        setError(
          "Something went wrong"
        );

      }

    }


    finally {

      setLoading(false);

    }

  };




  return (

    <div className="
    min-h-screen 
    bg-gradient-to-br 
    from-sky-100 
    to-cyan-100 
    flex 
    items-center 
    justify-center 
    p-4
    ">


      <div className="
      bg-white 
      p-8 
      rounded-2xl 
      shadow-xl 
      w-full 
      max-w-md
      ">


        <h2 className="
        text-3xl 
        font-bold 
        text-center 
        text-cyan-700 
        mb-8
        ">
          Create Account
        </h2>



        {
          error &&

          <div className="
          bg-red-100
          text-red-600
          p-3
          rounded-lg
          mb-5
          text-center
          ">
            {error}
          </div>

        }



        <form
          onSubmit={handleRegister}
          className="space-y-5"
        >



          {/* Full Name */}

          <div>

            <label className="
          block 
          text-sm 
          font-medium 
          text-gray-700 
          mb-1
          ">
              Full Name
            </label>


            <input

              type="text"

              name="full_name"

              placeholder="Enter your name"

              value={formData.full_name}

              onChange={handleChange}

              className="
          w-full 
          px-4 
          py-3 
          rounded-lg 
          border 
          border-gray-300
          outline-none
          focus:ring-2
          focus:ring-cyan-500
          "

            />

          </div>




          {/* Email */}

          <div>

            <label className="
          block 
          text-sm 
          font-medium 
          text-gray-700 
          mb-1
          ">
              Email
            </label>


            <input

              type="email"

              name="email"

              placeholder="Enter email"

              value={formData.email}

              onChange={handleChange}

              className="
          w-full 
          px-4 
          py-3 
          rounded-lg 
          border 
          border-gray-300
          outline-none
          focus:ring-2
          focus:ring-cyan-500
          "

            />

          </div>





          {/* Password */}

          <div>


            <label className="
          block 
          text-sm 
          font-medium 
          text-gray-700 
          mb-1
          ">
              Password
            </label>



            <div className="relative">


              <input

                type={
                  showPassword
                    ? "text"
                    : "password"
                }

                name="password"

                placeholder="Create password"

                value={formData.password}

                onChange={handleChange}


                className="
          w-full 
          px-4 
          py-3 
          rounded-lg 
          border 
          border-gray-300
          outline-none
          focus:ring-2
          focus:ring-cyan-500
          "

              />



              <button

                type="button"

                onClick={() => setShowPassword(!showPassword)}

                className="
          absolute
          right-3
          top-3
          text-cyan-600
          "

              >

                {
                  showPassword
                    ? "Hide"
                    : "Show"
                }


              </button>


            </div>


          </div>





          {/* Button */}


          <button

            type="submit"

            disabled={loading}


            className="
          w-full
          bg-cyan-600
          text-white
          py-3
          rounded-xl
          font-semibold
          hover:bg-cyan-700
          transition
          "

          >


            {

              loading

                ?

                "Creating Account..."

                :

                "Sign Up"

            }


          </button>




        </form>





        <p className="
        text-center 
        mt-6 
        text-gray-600
        ">


          Already have an account?


          <Link

            to="/login"

            className="
        text-cyan-600 
        font-semibold 
        ml-1
        hover:underline
        "

          >

            Login

          </Link>


        </p>




      </div>


    </div>

  );

};


export default Register;