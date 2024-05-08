import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const Register = () => {
    return (
        <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4">Create an Account</h2>
            <Formik
                initialValues={{
                    userName: "",
                    email: "",
                    age: "",
                    terms: false,
                }}
                validationSchema={Yup.object({
                    userName: Yup.string().required("Username is required"),
                    password: Yup.string().required("Email is required"),
                    gender: Yup.string().required("Age is required"),
                    terms: Yup.boolean().oneOf(
                        [true],
                        "You must accept the terms and conditions"
                    ),
                })}
            >
                <Form className="space-y-4">
                    <div>
                        <label
                            htmlFor="userName"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Username
                        </label>
                        <Field
                            type="text"
                            name="userName"
                            id="userName"
                            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        <ErrorMessage
                            name="userName"
                            component="div"
                            className="text-red-500 text-sm mt-1"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <Field
                            type="password"
                            name="password"
                            id="password"
                            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        <ErrorMessage
                            name="password"
                            component="div"
                            className="text-red-500 text-sm mt-1"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Age
                        </label>
                        <Field
                            type="text"
                            name="text"
                            id="text"
                            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        <ErrorMessage
                            name="password"
                            component="div"
                            className="text-red-500 text-sm mt-1"
                        />
                    </div>
                    <div>
                            <ErrorMessage
                                name="gender"
                                component="div"
                                className="text-red-500 text-sm mt-1"
                            />
                    </div>
                    <div className="flex items-start">
                        <div className="ml-2 text-sm">
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Create an Account
                    </button>
                </Form>
            </Formik>
        </div >
    )
}

export default Register
