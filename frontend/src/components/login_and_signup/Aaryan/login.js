import React, { useState } from 'react'
import { Form, FormGroup, Label, Input, FormFeedback,Card, CardBody, CardHeader } from 'reactstrap';
import './style/login_signup.css'
function LoginForm() {

    const [initialState, setState] = useState({
        username: '',
        password: '',
      
        touched: {
            username: false,
            password: false
        }
    })


    const handleLoginClick = (event) => {
        event.preventDefault();
    }

    const handleBlur = (field) => (evt) => {
        setState({
            ...initialState,
            touched: { ...initialState.touched, [field]: true }
        });
    }

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        setState({
            ...initialState,
            [name]: value
        });
    }

    const validate = (username, password) => {
        const errors = {
            username: '',
            password: '',
            id: ''
        }
        if (initialState.touched.username && username.length < 3)
            errors.username = 'Username should be of minimum length of 3 characters';
        if (initialState.touched.username && username.length > 30)
            errors.username = 'Username should not be greater than 30 characters';
        if (initialState.touched.password && password.length < 5)
            errors.password = 'Password should be of minimum length of 8 characters';
        return errors;
    }
    
    const errors = validate(initialState.username, initialState.password);

        return (
            <div>
                <Card className=" col-md-6 offset-md-3 mt-5 mb-5">
                    <CardHeader className="mt-3 d-flex justify-content-start color " style={{backgroundColor:"#6868cb"}}><h4 className=" mt-2 ">Login</h4></CardHeader>

                    {
                        <CardBody>
                            <Form  onSubmit={handleLoginClick}>
                                <FormGroup>
                                    <Label htmlFor="username" className="d-flex justify-content-start"><h6>Username</h6></Label>
                                    <Input required type="text" id="username" name="username" value={initialState.username}
                                        onChange={handleInputChange} valid={errors.username === ''} invalid={errors.username !== ''} onBlur={handleBlur('username')} />
                                    <FormFeedback>{errors.username}</FormFeedback>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="password" className="d-flex justify-content-start"><h6>Password</h6></Label>
                                    <Input required type="password" id="password" name="password" value={initialState.password}
                                        onChange={handleInputChange} valid={errors.password === ''} invalid={errors.password !== ''} onBlur={handleBlur('password')}
                                    />
                                    <FormFeedback>{errors.password}</FormFeedback>
                                </FormGroup>
                                <FormGroup check className="d-flex justify-content-start">
                                    <Label check>
                                        <Input type="checkbox" name="remember" className="d-flex justify-content-start"
                                        />
                                        <p>Remember Me</p>
                                    </Label>
                                </FormGroup>
                                <button type="submit" value="submit" className="btn btn-primary btn-md btn-block mt-2" style={{backgroundColor:"#6868cb"}} ><span className="fa fa-sign-in-alt fa-lg"></span>Login</button>
                            </Form>
                        </CardBody>}
                </Card>
            </div>
        )
}

export default LoginForm
