import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect } from "react";

import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { domain } from "../Store";
export default function RegisterPage() {
  const validationSchema = Yup.object({
    username: Yup.string().required(),
    email: Yup.string().required().email(),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .max(20, "Password must be at most 20 characters")
      .matches(/[A-Z]/, "Must contain a capital letter")
      .matches(/[0-9]/, "Must contain at least one number")
      .matches(/[!@#$%^&*(),.?":{}|<>]/, "Must contain a special character")
      .required("Password is required"),
  });
  const navigate = useNavigate();
  const handelSubmit = (values) => {
    let endPoint = "/api/auth/local/register";
    let url = domain + endPoint;

    axios
      .post(url, values)
      .then((res) => {
        let token = res.data.jwt;
        sessionStorage.setItem("token", token);
        toast.success("Register Success");
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.response?.data?.error?.message || "Something went wrong");
      });
  };
  useEffect(() => {
    let token = localStorage.getItem("token") || sessionStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, []);
  return (
    <div className="w-full h-dvh flex items-center justify-center bg-gray-950 text-white">
      <Formik initialValues={{ email: "", password: "", username: "" }} onSubmit={handelSubmit} validationSchema={validationSchema}>
        <Form className="bg-gray-900 shadow rounded-2xl flex flex-col gap-3 p-4 w-[400px] border">
          <h1>Welcome Please Register</h1>
          <Field className=" w-full input bg-gray-600 " name="username" type="text" placeholder="Enter Your username" />
          <ErrorMessage name="username" component={"p"} className="bg-red-500" />
          <Field className=" w-full input bg-gray-600 " name="email" type="text" placeholder="Enter Your email" />
          <ErrorMessage name="email" component={"p"} className="bg-red-500" />
          <Field className=" w-full input bg-gray-600 " name="password" type="password" placeholder="Enter Your password" />
          <ErrorMessage name="password" component={"p"} className="bg-red-500" />
          <button type="submit" className="btn btn-success">
            Register
          </button>
          <Link to={"/login"} className="btn btn-success">
            I Have Account Go To Login
          </Link>
        </Form>
      </Formik>
    </div>
  );
}
