import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect } from "react";

import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { domain } from "../Store";
export default function LoginPage() {
  const validationSchema = Yup.object({
    email: Yup.string().required().email(),
    password: Yup.string().required(),
  });
  const navigate = useNavigate();
  const handelSubmit = (values) => {
    let endPoint = "/api/auth/local";
    let url = domain + endPoint;

    let data = {
      identifier: values.email,
      password: values.password,
    };

    axios
      .post(url, data)
      .then((res) => {
        let token = res.data.jwt;
        values.isChecked ? localStorage.setItem("token", token) : sessionStorage.setItem("token", token);
        toast.success("Login Success");

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
      <Formik initialValues={{ email: "", password: "", isChecked: false }} onSubmit={handelSubmit} validationSchema={validationSchema}>
        <Form className="bg-gray-900 shadow rounded-2xl flex flex-col gap-3 p-4 w-[400px] border">
          <p>Please Login To The System</p>
          <Field className=" w-full input bg-gray-600 " name="email" type="text" placeholder="Enter Your email" />
          <ErrorMessage name="email" component={"p"} className="bg-red-500" />
          <Field className=" w-full input bg-gray-600 " name="password" type="password" placeholder="Enter Your password" />
          <ErrorMessage name="password" component={"p"} className="bg-red-500" />
          <label className="flex gap-3">
            <Field type="checkbox" name="isChecked" className="checkbox checkbox-primary " />
            Remember Me
          </label>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
          <Link to={"/register"} className="btn btn-success">
            Don't Have Account ? Create New
          </Link>
        </Form>
      </Formik>
    </div>
  );
}
