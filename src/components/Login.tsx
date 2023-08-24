import { ChangeEvent, useState } from "react";
import app from './firebase';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Carousel from "./Carousel";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState(false);

    const navigate = useNavigate();

    const handleLogin = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(email && password){
            try {
                const auth = getAuth(app);
                await signInWithEmailAndPassword(auth, email, password);
                navigate('/success');
            } catch (err) {
                console.error(err);
                setLoginError(true);
            }
        } else{
            setLoginError(true);
        }
    };

    return(
        <section className="bg-warning pt-3 pb-5 flex-grow-1">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-6">
                        <div className="row">
                            <div className="col-lg-12 my-lg-5 px-3 px-lg-5">
                                <Carousel />
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6'>
                        <div className="card bg-white mt-4">
                            <div className="card-header text-center">
                                <div>
                                    <a href="https://preprlabs.org/explore">
                                        <img src="https://d3f06rtlkr354b.cloudfront.net/public/front/img/logoNew.png" alt="preprlabs logo" />
                                    </a>
                                </div>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleLogin}>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                <img src="https://d3f06rtlkr354b.cloudfront.net/public/front/img/email.png" className="img-responsive" alt="Email icon" width="24" height="24" />
                                            </span>
                                        </div>
                                        <label htmlFor="email" hidden>Email</label>
                                        <input name="email" type="email" id="email" className="form-control" value={email} placeholder='Email' onChange={e => {setEmail(e.target.value); setLoginError(false)}} />
                                        {loginError && email === '' ? <small className='text-danger w-100'>This field is required.</small> : null}
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                <img src="https://d3f06rtlkr354b.cloudfront.net/public/front/img/password.png" className="img-responsive" alt="Security lock icon" width="24" height="24" />
                                            </span>
                                        </div>
                                        <label htmlFor="password" hidden>Password</label>
                                        <input type="password" name="password" id="password" className="form-control" placeholder='Password' value={password} onChange={e => {setPassword(e.target.value); setLoginError(false)}} />
                                        {loginError && password === '' ? <small className='text-danger w-100'>This field is required.</small> : null}
                                    </div>
                                    <div className="mb-3">
                                        <a href="https://preprlabs.org/password/reset" className="text-decoration-none text-end text-black d-block">
                                            Forgot Password?
                                        </a>
                                    </div>
                                    <div className='d-grid gap-2 mb-3'>
                                        <button className="btn btn-success text-white" type="submit">Log in</button>
                                        {loginError && email && password ? <small className='text-danger w-100'>Your email and password combination is not recognized.</small> : null}
                                    </div>
                                </form>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
        </section>
    );
}