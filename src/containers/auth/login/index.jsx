import React from "react";
import { Images } from "../../../assets";
import CustomInput from "../../../components/form/input";
import InputGroup from "../../../components/form/input-group";
import Form from "../../../components/form";
import { Link } from "react-router-dom";
import Button from "../../../components/buttons";

const Login = ({ ...props }) => {
    return (
        <section className="w-full h-screen">
            <div className="w-full flex flex-col sm:flex-row items-center h-full">
                <div className="w-full hidden md:w-1/2 bg-green-200 lg:w-[60%] md:flex h-full justify-center items-center">
                    <Images.Login className="w-auto md:w-[300px] lg:w-[400px] xl:w-[500px]" />
                </div>
                <div className="w-full md:w-1/2 lg:w-[40%] h-full flex justify-center items-center">
                    <Form className="p-4 w-full xs:w-[400px]">
                        <div className="w-full mb-16" >
                            <h4 className="text-center text-3xl font-medium" >Welcome Back</h4>
                            <p className="text-sm text-gray-600 text-center mt-1">Sign in to your account</p>
                        </div>
                        <InputGroup label="Email address">
                            <CustomInput inputClass="font-medium" type="email" />
                        </InputGroup>
                        <InputGroup label="Password">
                            <CustomInput inputClass="font-medium" type="password" />
                        </InputGroup>
                        <div className="flex flex-col justify-end items-end">
                            <span className="mb-2 text-sm cursor-pointer font-medium">
                                <Link replace to="/forgot-password">
                                    Forgot password?
                                </Link>
                            </span>
                            <Button label="Login" />
                        </div>
                    </Form>
                </div>
            </div>
        </section>
    );
};

export default Login;
