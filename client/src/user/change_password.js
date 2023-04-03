import { Formik, Form, Field,ErrorMessage } from 'formik';

import Label from '../common/label.component';
import { ChangePasswordValidationSchema } from './user_schema';
import Button from '../common/button.component';
import InputError from '../common/input_error.component';

const ChangePassword = () => {

    const onSubmit = (values) => {
        console.log(values, 'values');
    }

    const initialValues = {
        email: '',
        password: '',
        confirm_password:''
    }

    return (
        <div className="container my-5">
            <Formik
                onSubmit={onSubmit}
                initialValues={initialValues}
                validationSchema={ChangePasswordValidationSchema}
            >
                {
                    (formik) => {
                        return <Form
                                    className='row card col-md-4 d-flex flex-column m-auto p-3' 
                                >
                            <h3 className='text-center'>E-commerce</h3>
                            <h5 className='text-success my-2'>Change Password</h5>

                            <div className='form-group my-2'>
                                <Label className='form-label' text='Email' />
                                <Field name='email' className='form-control' />
                                <ErrorMessage name='email' component={InputError} />
                            </div>
                            <div className='form-group my-2'>
                                <Label className='form-label' text='Password' />
                                <Field name='password' className='form-control'  />
                                <ErrorMessage name='password' component={InputError} />
                            </div>
                            <div className='form-group my-2'>
                                <Label className='form-label' text='Confirm Password' />
                                <Field name='confirm_password' className='form-control'  />
                                <ErrorMessage name='confirm_password' component={InputError} />
                            </div>
                            <div className='form-group my-2 text-center'>
                                <Button className='btn btn-sm btn-primary' text='Continue'/>
                            </div>

                        </Form>
                    }
                }
            </Formik>
        </div>
    )
}

export default ChangePassword