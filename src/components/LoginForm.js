import React, { useState, useContext } from 'react' 
import { useHistory } from 'react-router'
import { Form, Button } from 'react-bootstrap' 
import FunctionContext from '../FunctionContext'
import '../static/styles/LoginForm.css' 
import { useFormik } from 'formik' 
import * as yup from 'yup' 

const LoginForm = () => {
    const history = useHistory() 
    const { handleLogin } = useContext(FunctionContext) 

    // formik validation schema
    const validationSchema = yup.object({
        username: yup.string().required('Please enter username'), 
        password: yup.string().required('Please enter password')
    })

    // formik
    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        }, 
        onSubmit: async (values) => {
            try {
                await handleLogin(values) 
                history.push('/') 
            } catch(e) {
                alert('Invalid username/password')
            }
        },
        validationSchema: validationSchema
    })

    return (
        <Form className="LoginForm" onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3">
                <h3>Log In</h3> 
                <Form.Label htmlFor="username">Username</Form.Label>
                <Form.Control 
                    id="username" 
                    type="text"
                    name="username"
                    onChange={formik.handleChange}
                    value={formik.values.username}
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
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                    />
            {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}
            </Form.Group>

            <Form.Group className="mb-3">
                <Button type="submit" className="btn-submit" variant="primary">Log In</Button>
            </Form.Group>
        </Form>
    )

    // // initialize INITIAL_STATE obj
    // const INITIAL_STATE = {
    //     username: '', 
    //     password: '',
    // }
    // // formData, setFormData = useState
    // const [formData, setFormData] = useState(INITIAL_STATE)

    // const handleChange = (e) => {
    //     // destructure {} = e.target
    //     const { name, value } = e.target 
    //     setFormData(formData => ({
    //         ...formData, 
    //         [name]: value 
    //     }))
    // }

    // const handleSubmit = async (e) => {
    //     e.preventDefault() 
    //     await handleLogin(formData) 
    //     history.push('/') 
    // }

    // return (
    //     <Form className="LoginForm" onSubmit={handleSubmit}>
    //         <Form.Group className="mb-3">
    //             <h3>Log In</h3> 
    //             <Form.Label htmlFor="username">Username</Form.Label>
    //             <Form.Control 
    //                 id="username" 
    //                 type="text"
    //                 name="username"
    //                 value={formData.username}
    //                 onChange={handleChange}
    //             />
    //         </Form.Group>

    //         <Form.Group className="mb-3">
    //             <Form.Label htmlFor="password">Password</Form.Label>
    //             <Form.Control 
    //                 id="password" 
    //                 type="password"
    //                 name="password"
    //                 value={formData.password}
    //                 onChange={handleChange}
    //             />
    //         </Form.Group>

    //         <Form.Group className="mb-3">
    //             <Button type="submit" className="btn-submit" variant="primary">Log In</Button>{' '}
    //         </Form.Group>
    //     </Form>
    // )
}

export default LoginForm 