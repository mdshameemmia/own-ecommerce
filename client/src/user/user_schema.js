import { object, string,ref } from 'yup';

export const loginValidationSchema = object({
    email:string().email('Invalid email').required('Email is Required'),
    password:string().required('Password is Required'),
})
export const forgotPasswordValidationSchema = object({
    email:string().email('Invalid email').required('Email is Required')
})

export const ChangePasswordValidationSchema = object({
    email:string().email('Invalid email').required('Email is Required'),
    password:string().required('Password is Required'),
    confirm_password:string().required('Confirm Password is Required')
        .oneOf([ref('password'), null], 'Password & Confirm Password must be matched')
})