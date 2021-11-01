import React, { useState, useContext } from 'react' 
import { useHistory } from 'react-router' 
import { Form, Button } from 'react-bootstrap' 
import FunctionContext from '../FunctionContext'
import '../static/styles/SignupForm.css' 
import { useFormik } from 'formik' 
import * as yup from 'yup' 

const SignupForm = () => {
    const history = useHistory() 
    const { handleSignup } = useContext(FunctionContext) 

    // formik validation schema
    const validationSchema = yup.object({
        username: yup.string().required('Please enter username'), 
        password: yup.string().required('Please enter password'),
        firstName: yup.string().required('Please enter First Name'),
        lastName: yup.string().required('Please enter Last Name'),
        email: yup.string().required('Please enter email')
    })

    // formik
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            email: ''
        }, 
        onSubmit: async (values) => {
            try {
                await handleSignup(values) 
                history.push('/') 
            } catch(e) {
                console.log(e)
            }
        },
        validationSchema: validationSchema
    })

    return (
        <Form className="SignupForm" onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3">
                <h3>Sign Up</h3>
                <Form.Label htmlFor="username">Username</Form.Label>
                <Form.Control 
                    id="username" 
                    type="text"
                    name="username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.username && formik.errors.username ? <div>{formik.errors.username}</div> : null}
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label htmlFor="password">Password</Form.Label>
                <Form.Control 
                    id="password" 
                    type="password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label htmlFor="firstName">First Name</Form.Label>
                <Form.Control 
                    id="firstName" 
                    type="text"
                    name="firstName"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.firstName && formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label htmlFor="lastName">Last Name</Form.Label>
                <Form.Control 
                    id="lastName" 
                    type="text"
                    name="lastName"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.lastName && formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label htmlFor="email">Email</Form.Label>
                <Form.Control 
                    id="email" 
                    type="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
            </Form.Group>

            <Form.Group className="mb-3">
                <Button type="submit" className="btn-submit" variant="primary">Sign Up</Button>
            </Form.Group>
        </Form>
    )

//     // initialize INITIAL_STATE obj
//     const INITIAL_STATE = {
//         username: '', 
//         password: '',
//         firstName: '', 
//         lastName: '', 
//         email: '' 
//     }

//     // formData, setFormData = useState
//     const [formData, setFormData] = useState(INITIAL_STATE)

//     const handleChange = (e) => {
//         // destructure {} = e.target
//         const { name, value } = e.target 
//         setFormData(formData => ({
//             ...formData, 
//             [name]: value 
//         }))
//     }

//     const handleSubmit = async (e) => {
//         e.preventDefault() 
//         await handleSignup(formData) 
//         history.push('/') 
//     }
}

export default SignupForm 