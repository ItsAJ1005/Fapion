import { useState } from "react";

const defaultFormFeilds = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const SignUp = ()=> {

    const [ formFields, setFormFields ] = useState(defaultFormFeilds);
    const { displayName, email, password, confirmPassword } = formFields;

    const handleChange = (event) => {
        const { name } = event.target;
        setFormFields = ({...formFields, [name]: value});
    } 
    return (
        <div>
            <h1>Sign Up with email and password</h1>
            <form onSubmit={() => {}}>

                <label>Display Name</label>
                <input type='text' onChange={handleChange} value={displayName} required/>

                <label>Email</label>
                <input type='email' onChange={handleChange} value={email} required/>

                <label>Password</label>
                <input type='password' onChange={handleChange} value={password} required/>

                <label>Confirm password</label>
                <input type='password' onChange={handleChange} value={confirmPassword} required/>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default SignUp;