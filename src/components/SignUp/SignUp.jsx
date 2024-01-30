import React, { useState } from 'react'
import validator from 'validator'
// import { ReactComponent as Google } from '../Assets/Kicks/logos_google-icon.svg'

// import { ReactComponent as Apple } from '../Assets/Kicks/ic_baseline-apple.svg'

// import { ReactComponent as Facebook } from '../Assets/Kicks/logos_facebook.svg'
// import { ReactComponent as Arrow } from '../Assets/Kicks/arrow_forward.svg'
import './SignUp.css'
import { v4 as uuid } from "uuid";
import { useNavigate } from 'react-router-dom'
uuid()

function SignUp() {
    const navigate = useNavigate();
    const [input, setinput] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        id: ""
    })
    const [errorMessage, setErrorMessage] = useState('')
    const getdata = (e) => {
        console.log(e.target.name);
        const { value, name } = e.target;
        setinput(() => {
            return { ...input, [name]: value.trim() }
        })

    }

    const addData = (e) => {
        console.log("adddata")
        e.preventDefault();
        const id = uuid();
        const { firstname, lastname, email, password } = input;
        input.id = id;
        console.log(input);
        if (validator.isStrongPassword(password, {
            minLength: 8, minLowercase: 1,
            minUppercase: 1, minNumbers: 1, minSymbols: 1
        })) {
            setErrorMessage('Is Strong Password')
            let data = [];
            data.push(input);
            let prevuser = JSON.parse(localStorage.getItem("User"));
            if (prevuser) data = [...prevuser, ...data]
            console.log(data)
            localStorage.setItem("User", JSON.stringify(data));
            setErrorMessage('')
            alert('Successful SignIn')
            navigate('/login')

        } else {
            setErrorMessage('Is Not Strong Password')
        }



    }


    return (
        <form action="" method='get' onSubmit={addData}>
            <div className="signup-container">
                <div className="register">
                    <div className="line1">Register</div>
                    <div className="line2">Sign up with</div>
                </div>
                {/* <div className="auth-logos">
                    <button className="btn-auth">
                        <Google className='btn-auth-svg' /> </button>
                    <button className="btn-auth">
                        <Facebook className='btn-auth-svg' />
                    </button>
                    <button className="btn-auth">
                        <Apple className='btn-auth-svg' />
                    </button>
                </div> */}
                <div className="or">OR</div>
                <div className="your-info">
                    <div className="info-txt">Your Name</div>
                    <input type="text" placeholder='First Name' required name='firstname' onChange={getdata} />
                    <input type="text" placeholder='Last Name' required name='lastname' onChange={getdata} />
                </div>
                <div className="gender">
                    <h1>Gender</h1>
                    <div className="checkbox">
                        <input type="checkbox" name="male" id="male" /><label htmlFor="male">Male</label>
                        <input type="checkbox" name="male" id="female" /><label htmlFor="female">Female</label>
                        <input type="checkbox" name="male" id="other" /><label htmlFor="other">Other</label>

                    </div>
                </div>
                <div className="role"> <label for="roles">Choose a role:</label>
                    <select name="roles" id="roles">
                        <option value="admin">ADMIN</option>
                        <option value="user">USER</option>
                        
                    </select></div>
                <div className="login-details">
                    <div className="log-txt">Login Details</div>
                    <input type="email" name="email" required id="" placeholder='Email' onChange={getdata} />
                    <div className="log-password">
                        <input type="password" name="password" required id="" placeholder='Password' onChange={getdata} />
                        {errorMessage === '' ? null :
                            <span style={{
                                fontWeight: 'bold',
                                color: 'red',
                            }}>{errorMessage}</span>}
                        <div className="warning-txt">Minimum 8 characters with at least one uppercase, one lowercase, one special character and a number</div>


                    </div>

                </div>
                <div className="termsandc1">
                    <input type="checkbox" name="term1" id="term1" />
                    <label htmlFor="term1">By clicking 'Log In' you agree to our website KicksClub <span>Terms & Conditions, Kicks Privacy Notice and Terms & Conditions.</span></label>
                </div>
                <div className="termsandc2">
                    <input type="checkbox" name="term2" id="term2" />
                    <label htmlFor="term2">Keep me logged in - applies to all log in options below. More info</label>
                </div>
                {/* <div className="register-btn" onClick={addData}>
                    <div className="register-btn-txt">Register</div>
                    <Arrow />
                </div> */}
                <button type="submit" className="register-btn">
                    <div className="register-btn-txt">Register</div>
                    {/* <Arrow /> */}
                </button>

            </div>
        </form>
    )
}

export default SignUp