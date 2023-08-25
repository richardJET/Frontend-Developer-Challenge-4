import { useState, ChangeEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faCheck, faX } from '@fortawesome/free-solid-svg-icons';
import zxcvbn from 'zxcvbn';
import app from './firebase';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getDatabase, ref, set } from 'firebase/database';
import { useNavigate } from 'react-router-dom';
import Carousel from './Carousel';

export default function Register() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState('Weak');
    const [passwordScore, setPasswordScore] = useState(0);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [userType, setUserType] = useState('usertype');
    const [language, setLanguage] = useState('english');
    const [registerError, setRegisterError] = useState(false);

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();

    const progressBarStyle: React.CSSProperties = {
        width: `${(passwordScore) * 20}%`,
        backgroundColor: passwordScore === 1 ? 'red' : passwordScore === 2 ? 'orange' : passwordScore === 3 ? 'yellow' : passwordScore === 4 ? 'green' : passwordScore === 5 ? 'darkgreen' : 'white',
    };

    const handleSSO = async () => {
        try {
            const auth = getAuth(app);
            await signInWithPopup(auth, provider)
            navigate('/success');
        } catch (err) {
            console.error(err);
        }
    };

    const hanndleRegister = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (password === confirmPassword && passwordScore >= 4 && firstName && lastName && emailRegex.test(email) && password.length >= 8 && password.length <= 14 && /[@#$%^&*?_~()+={}[\]|;:'“<>/,-]/.test(password) && /\d/.test(password) && /[A-Z]/.test(password) && userType !== 'usertype' ) {
            try{
                const auth = getAuth(app);
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                if (userCredential.user) {
                    const userData = {
                        firstName,
                        lastName,
                        userType,
                        language,
                        username,
                    };

                    const db = getDatabase(app);
                    const userRef = ref(db, `/${userCredential.user.uid}`);
                    await set(userRef, userData);
                    
                    navigate('/success');
                }
            } catch (err) {
                console.log('Error registering user', err);
            }
        }
        else{
            setRegisterError(true);
        }
    }; 

    function getPasswordStrength(password: string) {
    const result = zxcvbn(password);
    const score = result.score;
    

    if (password === '') {
        return {strength: 'Weak', score: 0};
    }

    const strengthLevel = ['Weak', 'Fair', 'Good', 'Strong', 'Very Strong'];
    
    return {strength: strengthLevel[score], score: score};
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        const strengthLevel = getPasswordStrength(newPassword);
        setPasswordStrength(strengthLevel.strength);
        setPasswordScore(strengthLevel.score + 1)
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
                                <form onSubmit={hanndleRegister}>
                                    <div className='input-group mb-3'>
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                <img src="https://d3f06rtlkr354b.cloudfront.net/public/front/img/name.png" className="img-responsive" alt="Framed profile icn" width="24" height="24" />
                                            </span>
                                        </div>
                                        <label htmlFor="first-name" hidden>First name</label>
                                        <input type="text" name="first-name" id="first-name" className="form-control" placeholder='First name' value={firstName} onChange={e => setFirstName(e.target.value)} />
                                        {registerError && firstName === '' ? <small className='text-danger w-100'>This field is required.</small> : null}
                                    </div>
                                    <div className='input-group mb-3'>
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                <img src="https://d3f06rtlkr354b.cloudfront.net/public/front/img/name.png" className="img-responsive" alt="Framed profile icon" width="24" height="24" />
                                            </span>
                                        </div>
                                        <label htmlFor="last-name" hidden>First name</label>
                                        <input type="text" name="last-name" id="last-name" className="form-control" placeholder='Last name' value={lastName} onChange={e => setLastName(e.target.value)} />
                                        {registerError && lastName === '' ? <small className='text-danger w-100'>This field is required.</small> : null}
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                <img src="https://d3f06rtlkr354b.cloudfront.net/public/front/img/user.png" className="img-responsive" alt="Profile icon" width="24" height="24" />
                                            </span>
                                        </div>
                                        <label htmlFor="username" hidden>Username</label>
                                        <input name="username" type="text" id="username" className="form-control" placeholder='Username' value={username} onChange={e => setUsername(e.target.value)} />
                                        {registerError && username === '' ? <small className='text-danger w-100'>This field is required.</small> : null}
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                <img src="https://d3f06rtlkr354b.cloudfront.net/public/front/img/password.png" className="img-responsive" alt="Security lock icon" width="24" height="24" />
                                            </span>
                                        </div>
                                        <label htmlFor="password" hidden>Password</label>
                                        <input type={showPassword ? "text" : "password"} name="password" id="password" className="form-control" placeholder='Password' value={password} onChange={handlePasswordChange} />
                                        <div className="input-group-append">
                                            <button type='button' onClick={() => setShowPassword(!showPassword)} className="input-group-text h-100">
                                                <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                                            </button>
                                        </div>
                                        {registerError && password === '' ? <small className='text-danger w-100'>This field is required.</small> : null}
                                    </div>
                                    <div id="password-strengt-status">
                                        <b id="password-strngth">Strength: {passwordStrength}</b>
                                        <div id="password-strength-bar" className="progress mt-1">
                                            <div className="progress-bar" style={progressBarStyle} role="progressbar" aria-valuenow={passwordScore} aria-valuemin={0} aria-valuemax={6}></div>
                                        </div>
                                        <div>
                                            <p>Password must include:</p>
                                            <ul className='list-unstyled'>
                                                <li>
                                                    {password.length >= 8 && password.length <= 14 ? <FontAwesomeIcon icon={faCheck} className='text-success me-1' /> : <FontAwesomeIcon icon={faX} className='text-danger me-1'/> }
                                                    8 to 14 characters
                                                </li>
                                                <li>
                                                    {/[A-Z]/.test(password) ? <FontAwesomeIcon icon={faCheck} className='text-success me-1' /> : <FontAwesomeIcon icon={faX} className='text-danger me-1' />}
                                                    1 capital letter
                                                </li>
                                                <li>
                                                    {/\d/.test(password) ? <FontAwesomeIcon icon={faCheck} className='text-success me-1' /> : <FontAwesomeIcon icon={faX} className='text-danger me-1' />}
                                                    1 number
                                                </li>
                                                <li>
                                                    {/[@#$%^&*?_~()+={}[\]|;:'“<>/,-]/.test(password) ? <FontAwesomeIcon icon={faCheck} className='text-success me-1' /> : <FontAwesomeIcon icon={faX} className='text-danger me-1' />}
                                                    1 special character
                                                    <p>{"@#$%^&*?_~-()+={ }[]|;:'“<>/,."}</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="input-group mb-3 d-flex flex-wrap">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                <img src="https://d3f06rtlkr354b.cloudfront.net/public/front/img/pass-check.png" className="img-responsive" alt="Checkmark icon" width="24" height="24" />
                                            </span>
                                        </div>
                                        <label htmlFor="confirm-password" hidden>Confirm Password</label>
                                        <input type={showConfirmPassword ? "text" : "password"} name="confirm-password" id="confirm-password" className="form-control" placeholder='Confirm Password' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} aria-describedby='password-help' />
                                        <div className="input-group-append">
                                            <button type='button' onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="input-group-text h-100">
                                                <FontAwesomeIcon icon={showConfirmPassword ? faEye : faEyeSlash} />
                                            </button>
                                        </div>
                                        {password === confirmPassword ? confirmPassword ? null : registerError ? <small id="password-help" className='text-danger w-100'>This field is required.</small> : null
                                        : <small id="password-help" className='text-danger w-100'>The passwords you entered do not match.</small>}
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                <img src="https://d3f06rtlkr354b.cloudfront.net/public/front/img/email.png" className="img-responsive" alt="Email icon" width="24" height="24" />
                                            </span>
                                        </div>
                                        <label htmlFor="email" hidden>Email</label>
                                        <input name="email" type="email" id="email" className="form-control" value={email} placeholder='Email' onChange={e => setEmail(e.target.value)} />
                                        {registerError && email === '' ? <small className='text-danger w-100'>This field is required.</small> : registerError && !emailRegex.test(email) ? <small className='text-danger w-100'>Please enter a valid email address.</small> : null}
                                    </div>
                                    <select className="form-select mb-3" name="user-type" id="user-type" aria-label="User Type" defaultValue="usertype" onChange={e => setUserType(e.target.value)}>
                                        <option value="usertype" disabled>User Type</option>
                                        <option value="learner">Learner</option>
                                        <option value="applicant">Job Seeker / Applicant</option>
                                        <option value="employee">Employee</option>
                                        <option value="founder">Founder</option>
                                        <option value="educator">Educator</option>
                                        <option value="mentor">Mentor</option>
                                    </select>
                                    {registerError && userType === 'usertype' ? <small className='text-danger w-100'>This field is required.</small> : null}
                                    <div className='mb-3'>
                                        <small className='fst-italic text-end d-block'>Optional</small>
                                        <select id="language" className="form-select" name="language" aria-label="Language" defaultValue="select-language" onChange={e => setLanguage(e.target.value)}>
                                            <option disabled value="select-language">Select Language</option>
                                            <option value="english">English</option>
                                            <option value="french">French</option>
                                        </select>
                                    </div>
                                    <div className='mb-3'>
                                        By registering, you agree to the Prepr <a href="https://prepr.org/terms-of-use/" target="_blank" className='me-1' rel="noreferrer">Terms of use</a>
                                        <a href="https://prepr.org/privacy-policy/" target="_blank" rel="noreferrer">
                                            Privacy policy and Cookie policy
                                        </a>
                                    </div>
                                    <div className='d-grid gap-2 mb-3'>
                                        <button className="btn btn-success text-white" type="submit">Register</button>
                                        <p className="text-center m-0">or</p>
                                        <button className="btn btn-danger text-white" type="button" onClick={handleSSO}>Continue with Google</button>
                                    </div>
                                </form>
                                <div className="text-center mb-3">
                                    Already have an account? <a href="/login" className="text-warning">Log in</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}