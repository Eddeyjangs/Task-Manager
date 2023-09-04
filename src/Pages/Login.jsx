import phoenixIcon from '../assets/phoenixIcon.png';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  return (
    <div className="container">
        <div className="ads">
            <div className="pheonix">
                <img className='pheoniximage' src={phoenixIcon} alt="phoeniximage" />
            </div>
            <div className="phoenixtext">
                <h1 className='phoenixH1'>R K GlobalAutos</h1>
                <h3 className='phoenixH2'>Where all your needs are met.</h3>
                <p className='phoenixP'>motto: Convenienty doing deals...</p>
            </div>
        </div>
        <div className="userlogin">
            <div className='holder'>
                <div className='login'>
                    <h2>Login</h2>
                </div>
                <div className='username'>
                    <input className='input' type='text' placeholder='User Name' />
                </div>
                <div className='password'>
                    <input className='input' type='text' placeholder='password' />
                </div>
                <div className='LoginSignup'>
                    <Link to="/dashboard" className='link'>Login</Link> 
                    <p className='signup'>Signup</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Login;