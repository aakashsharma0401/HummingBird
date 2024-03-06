import React from 'react'
import "../Styles/Login.scss";
import { useForm } from "react-hook-form";
const ForgotPassword = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
  return (
    <div className="body">
    <div class="containers">
      <div class="screen">
        <div class="screen__content">
          <i
            class="fa-brands fa-twitter"
            style={{ fontSize: "48px", color: "#4C489D" }}
          ></i>
          <form class="login" >
            <div class="login__field">
              <i class="login__icon fas fa-lock"></i>
              <input
                type="password"
                class="login__input"
                placeholder="Enter your old password"
                {...register("User_number", { required: true })}
              />
              {errors.User_number && (
                <span
                  style={{
                    color: "red",
                    fontSize: "15px",
                    fontWeight: "bold",
                    fontFamily: "monospace",
                    position: "fixed",
                    marginTop: "21px",
                    marginLeft: "0px",
                  }}
                >
                  required
                </span>
              )}
            </div>
            <div class="login__field">
              <i class="login__icon fas fa-lock"></i>
              <input
                type="password"
                class="login__input"
                placeholder="Enter your new  Password"
                {...register("User_password", { required: true })}
              />
              {errors.User_password && (
                <span
                  style={{
                    color: "red",
                    fontSize: "15px",
                    fontWeight: "bold",
                    fontFamily: "monospace",
                    position: "fixed",
                    marginTop: "21px",
                    marginLeft: "0px",
                  }}
                >
                  required
                </span>
              )}
            </div>
            <div class="login__field">
              <i class="login__icon fas fa-lock"></i>
              <input
                type="password"
                class="login__input"
                placeholder="confirm  Password"
                {...register("User_password", { required: true })}
              />
              {errors.User_password && (
                <span
                  style={{
                    color: "red",
                    fontSize: "15px",
                    fontWeight: "bold",
                    fontFamily: "monospace",
                    position: "fixed",
                    marginTop: "21px",
                    marginLeft: "0px",
                  }}
                >
                  required
                </span>
              )}
            </div>
           
            <button class="login__submit">
              <span class="button__text">Forgot Password</span>
              <i class="button__icon fas fa-chevron-right"></i>
            </button>
          </form>
        
       
          

        </div>
        <div class="screen__background">
          <span class="screen__background__shape screen__background__shape4"></span>
          <span class="screen__background__shape screen__background__shape3"></span>
          <span class="screen__background__shape screen__background__shape2"></span>
          <span class="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ForgotPassword
