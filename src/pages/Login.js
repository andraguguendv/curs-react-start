import React from 'react';
import {Form, Formik} from "formik";
import * as Yup from 'yup';
import Label from "../components/Label"
import FormInput from "../components/FormInput";


const LoginSchema = Yup.object().shape({
    email: Yup.string().required('Email is required'),
    password: Yup.string().required('Password is required')
});

const Login = ({submitCredentials}) => {


    return (
        <>
            <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full">
                    <div>
                        <h2 className="mb-2 text-center text-3xl leading-9 text-gray-900">
                            Log in in your account
                        </h2>
                    </div>

                    <Formik initialValues={{
                        email: '',
                        password: ''
                    }}
                            onSubmit={values =>
                                submitCredentials(values)
                            }
                            validationSchema={LoginSchema}
                    >
                        {() => (
                            <Form className="mt-8">
                                <div>
                                    <div className="mb-2">
                                        <div className="mb-1">
                                            <Label text="Email"/>
                                        </div>
                                        <FormInput
                                            ariaLabel="Email"
                                            name="email"
                                            type="text"
                                            placeholder="Email"
                                        />
                                    </div>
                                    <div>
                                        <div className="mb-1">
                                            <Label text="Password"/>
                                        </div>
                                        <FormInput
                                            ariaLabel="Password"
                                            name="password"
                                            type="password"
                                            placeholder="Password"
                                        />
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <button type="submit">Log in</button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </>
    )
}

export default Login;
