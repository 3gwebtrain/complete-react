import React from 'react';

import FormInput from './../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from './../../firebase/firebase.utils';

import './sign-in.style.scss';

class SignIn extends React.Component {
    constructor(prop){
        super(prop)
        this.state = {
            email:'',
            password:''
        }
    }

    handleSubmit = event => {

        event.preventDefault();
        this.setState({email:'',password:''})

    } 

    handleChange = event => {
        const {value, name } = event.target;
        this.setState({[name]:value});
    }

    render(){
        return (
            <div className="sign-in">
                <h2>I already have the account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" label="email" handleChange={this.handleChange} type="email" required value={this.state.email} />
                    <FormInput label="password" name="password" handleChange={this.handleChange} type="password" required value={this.state.password} />
                    <div class="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default  SignIn;