import React,{useEffect} from "react";
import "../Styles/Login.scss";
import { useForm } from "react-hook-form";
import { useSelector,useDispatch } from 'react-redux';
import { createUser } from "../Redux/Slice/ChatUser";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";



const Signup = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const {data,isLoading,error,response}=useSelector((state)=>{
    return {
      loading: state?.user?.isLoading,
      data: state?.user?.data,
      error: state?.user?.error,
      response: state?.user?.response,
    };
  })
  useEffect(() => {
    if (response?.status == true) {
      toast.success(response?.message);
      navigate("/");
    }
    else if (response?.status == false) {
      toast.error(response?.message);
    }
  
  }, [response]);
  const onSubmit = (data) => {
    dispatch(createUser(data))
  };

  return (
    <div className="body">
      <div className="containers">
        <div className="screen">
          <div className="screen__content">
          <i
              class="fa-brands fa-twitter"
              style={{ fontSize: "48px", color: "#4C489D" }}
            ></i>
            <form className="login" onSubmit={handleSubmit(onSubmit)}>
            <div className="login__field">
                <i className="login__icon fa fa-user"></i>
                <input
                  type="text"
                  className="login__input"
                  placeholder="Enter your name"
                  {...register("User_Name", { required: true })}
                />
                {errors.User_Name && (
                  <span
                    style={{
                      color: "red",
                      fontSize:"15px",
                      fontWeight: "bold",
                      fontFamily: "monospace",
                      position:"fixed",
                      marginTop:"21px",
                      marginLeft:"0px"
                    }}
                  >
                    required
                  </span>
                )}
              </div>
              <div className="login__field">
                <i className="login__icon fa fa-phone"></i>
                <input
                  type="number"
                  className="login__input"
                  placeholder="enter number"
                  {...register("User_number", {
                    required: true,
                    maxLength: 10,
                    minLength: 10,
                  })}
                />
                {errors.User_number && (
                  <span
                    style={{
                      color: "red",
                      fontWeight: "bold",
                      fontFamily: "monospace",
                      position:"fixed",
                      marginTop:"21px",
                      marginLeft:"0px"
                    }}
                  >
                   required
                  </span>
                )}
              </div>
              <div className="login__field">
                <i className="login__icon fa fa-lock"></i>
                <input
                  type="password"
                  className="login__input"
                  placeholder="enter password"
                  {...register("User_password", { required: true, minLength: 4 })}
                />
                {errors.User_password && (
                  <span
                    style={{
                      color: "red",
                      fontWeight: "bold",
                      fontFamily: "monospace",
                      position:"fixed",
                    marginTop:"21px",
                    marginLeft:"0px"
                    }}
                  >
                   required
                  </span>
                )}
              </div>
              <button className=" login__submit">
                <span className="button__text">Signup In Now</span>
                <i className="button__icon fa fa-chevron-right"></i>
              </button>
            </form>

            <div className="social-login">
              <h3></h3>
              <div className="social-icons">
              <Link
                  to={"/"}
                  style={{
                    textDecoration: "none",
                    color: "white",
                    fontWeight: "bold",
                    fontStyle: "inherit",
                    
                  }}
                >
                  <i class="fa fa-sign-in"></i> Login
                </Link>
              </div>
            </div>
          </div>
          <div className="screen__background">
            <span className="screen__background__shape screen__background__shape4"></span>
            <span className="screen__background__shape screen__background__shape3"></span>
            <span className="screen__background__shape screen__background__shape2"></span>
            <span className="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
