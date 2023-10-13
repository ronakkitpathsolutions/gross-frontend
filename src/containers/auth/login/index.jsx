import React, { useCallback } from "react";
import { Images } from "../../../assets";
import CustomInput from "../../../components/form/input";
import InputGroup from "../../../components/form/input-group";
import Form from "../../../components/form";
import { Link } from "react-router-dom";
import Button from "../../../components/buttons";

const Login = ({ ...props }) => {

    const handleSubmit = useCallback((e) => {
        e.preventDefault()
    }, [])

    return (
        <section {...props} className="w-full h-screen">
            <div className="w-full flex flex-col sm:flex-row items-center h-full">
                <div className="w-full hidden md:w-1/2 bg-green-200 lg:w-[60%] md:flex h-full justify-center items-center">
                    <Images.Login className="animate-bounce-slow w-auto md:w-[300px] lg:w-[400px] xl:w-[500px]" />
                </div>
                <div className="w-full md:w-1/2 lg:w-[40%] h-full flex justify-center items-center">
                    <Form handleSubmit={handleSubmit} className="p-4 w-full xs:w-[400px]">
                        <div className="w-full mb-16" >
                            <h4 className="text-center text-3xl md:text-4xl font-medium" >Welcome Back</h4>
                            <p className="text-sm text-gray-600 text-center mt-1">Sign in to your account</p>
                        </div>
                        <InputGroup label="Email address">
                            <CustomInput autoComplete="on" inputClass="font-medium" type="email" />
                        </InputGroup>
                        <InputGroup label="Password">
                            <CustomInput autoComplete="on" inputClass="font-medium" type="password" passwordVisibility />
                        </InputGroup>
                        <div className="flex flex-col justify-end items-end !mt-8">
                            <span className="mb-2 text-sm cursor-pointer font-medium">
                                <Link replace to="/forgot-password">
                                    Forgot password?
                                </Link>
                            </span>
                            <Button type='submit' label="Login" />
                        </div>
                    </Form>
                </div>
            </div>
        </section>
    );
};

export default Login;
