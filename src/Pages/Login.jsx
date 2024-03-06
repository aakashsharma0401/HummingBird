import React, { useEffect } from "react";
import "../Styles/Login.scss";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { loginEmploye } from "../Redux/Slice/ChatUser";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { loading, data, response, error } = useSelector((state) => {
    return {
      loading: state?.user?.isLoading,
      data: state?.user?.data,
      error: state?.user?.error,
      response: state?.user?.response,
    };
  });
  useEffect(() => {
    if (data?.status == true) {
      toast.success(
        <h6
          style={{
            color: "green",
            fontFamily: "monospace",
            fontWeight: "bold",
            fontSize: "15px",
          }}
        >
          Welcome to HummingBird
        </h6>
      );
      navigate("/DashBoard");
    } else if (data?.status == false) {
      toast.error(data?.message);
    }
  }, [data]);
  const onSubmit = (data) => {
    dispatch(loginEmploye(data));
  };

  return (
    <div className="body">
      <div class="containers">
        <div class="screen">
          <div class="screen__content">
            <i
              class="fa-brands fa-twitter"
              style={{ fontSize: "48px", color: "#4C489D" }}
            ></i>
            <form class="login" onSubmit={handleSubmit(onSubmit)}>
              <div class="login__field">
                <i class="login__icon fas fa-user"></i>
                <input
                  type="number"
                  class="login__input"
                  placeholder="Enter Phone Number"
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
                  placeholder="Enter Password"
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
              <Link
                  to={"/forgot"}
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontWeight: "bold",
                    fontStyle: "inherit",
                    marginTop: "0px",
                   fontSize:"11px"
                  }}
                >
                  <i class="fa fa-unlock"></i> Forgot Password?
                </Link>
              <button class="login__submit">
                <span class="button__text">Log In Now</span>
                <i class="button__icon fas fa-chevron-right"></i>
              </button>
            </form>
          
         
            <div className="social-login">
              <div className="social-icons">
                <Link
                  to={"/signup"}
                  style={{
                    textDecoration: "none",
                    color: "white",
                    fontWeight: "bold",
                    fontStyle: "inherit",
                  }}
                >
                  <i class="fa fa-sign-in"></i> Signup
                </Link>
              </div>
            </div>
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
  );
};

export default Login;
