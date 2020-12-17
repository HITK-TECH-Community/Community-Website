import React, { useState } from 'react'
import { Form, FormGroup, Label, Input, FormFeedback,Card, CardBody, CardHeader } from 'reactstrap';
import './style/login_signup.css'
function SignupForm() {

    const [initialState, setState] = useState({
        Name: '',
        email:'',
        password: '',
        repassword :'',
        touched: {
            Name: false,
            email: false,
            password: false,
            repassword :false,
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

    const validate = (Name, email, password, repassword ) => {
        const errors = {
            Name: '',
            email:'',
            password: '',
            repassword :''
        }
        if (initialState.touched.Name && Name.length < 3)
            errors.Name = 'Username should be of minimum length of 3 characters';
        if (initialState.touched.Name && Name.length > 30)
            errors.Name = 'Username should not be greater than 30 characters';
        if (initialState.touched.password && password.length < 5)
            errors.password = 'Password should be of minimum length of 8 characters';
        if (initialState.touched.email && email.split('').filter(x => x === '@').length !== 1)
            errors.email = 'Enter a valid email';
        if (initialState.touched.repassword && repassword.length==0)
            errors.repassword = "Please Confirm Your Password"
        else if (initialState.touched.repassword && repassword!=password)
            errors.repassword = "Password doesn't Match"
        return errors;
    }
    
    const errors = validate(initialState.Name,initialState.email,initialState.password,initialState.repassword);

        return (
            <div>
                <Card className=" col-md-6 offset-md-3 mt-5 mb-5">
                    <CardHeader className="mt-3 d-flex justify-content-start color " style={{backgroundColor:"#6868cb"}}><h4 className=" mt-2 ">Sign-up</h4></CardHeader>

                    {
                        <CardBody>
                            <Form  onSubmit={handleLoginClick}>
                                <FormGroup>
                                    <Label htmlFor="Name" className="d-flex justify-content-start"><h6>Name</h6></Label>
                                    <Input required type="text" id="Name" name="Name" value={initialState.Name}
                                        onChange={handleInputChange} valid={errors.Name === ''} invalid={errors.Name !== ''} onBlur={handleBlur('Name')} />
                                    <FormFeedback>{errors.Name}</FormFeedback>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="email" className="d-flex justify-content-start" ><h6>Email</h6></Label>
                                    <Input required type="text" id="email" name="email" value={initialState.email} 
                                        onChange={handleInputChange} valid={errors.email=== ''} invalid={errors.email!==''} onBlur={handleBlur('email')}/>
                                    <FormFeedback>{errors.email}</FormFeedback>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="password" className="d-flex justify-content-start"><h6>Password</h6></Label>
                                    <Input required type="password" id="password" name="password" value={initialState.password}
                                        onChange={handleInputChange} valid={errors.password === ''} invalid={errors.password !== ''} onBlur={handleBlur('password')}
                                    />
                                    <FormFeedback>{errors.password}</FormFeedback>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="repassword" className="d-flex justify-content-start"><h6>Confirm Password</h6></Label>
                                    <Input required type="password" id="repassword" name="repassword" value={initialState.repassword}
                                        onChange={handleInputChange} valid={errors.repassword === ''} invalid={errors.repassword !== ''} onBlur={handleBlur('repassword')}
                                    />
                                    <FormFeedback>{errors.repassword}</FormFeedback>
                                </FormGroup>
                                
                                <button type="submit" value="submit" className="btn btn-primary btn-md btn-block mt-2" style={{backgroundColor:"#6868cb"}} ><span className="fa fa-sign-in-alt fa-lg"></span>Sign-up</button>
                            </Form>
                        </CardBody>}
                </Card>
            </div>
        )
}

export default SignupForm
