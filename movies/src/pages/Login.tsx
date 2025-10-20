import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { LoginFormSchemas } from "../schemas/LoginFormSchemas";
import "../css/loginregister.css";
import { FaGoogle } from "react-icons/fa";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from '../Firebase';
import { toast } from 'react-toastify';
import { GoogleAuthProvider } from "firebase/auth";
const provider = new GoogleAuthProvider();
function Login() {

 
  const navigate = useNavigate();

  const loginWithGoogle = async () => {
    try {
      const response = await signInWithPopup(auth, provider)

      const user = response.user;
      if (user) {
        toast.success("Google ile giriş başarılı")
        navigate("/");
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  }

  const login = async (values:any) => {
    try {
      const response = await signInWithEmailAndPassword(auth,values.email, values.password)
      const user = response.user;
      if (user) {
        navigate("/");
        toast.success("Giriş başarılı!")
      }
    } catch (error: any) {
      toast.error("giriş yapılamadı: " + error.message);
    }
  }

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: LoginFormSchemas,
    onSubmit: login
  });




  return (
    <div className="form-root">
      <form onSubmit={formik.handleSubmit} className="form-container">
        <h2 className="form-title">Giriş Yap</h2>

        <div className='inputDiv'>
          <label>Email</label>
          <input
            type='text'
            name='email'
            placeholder='Email giriniz'
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email && formik.touched.email && <p className='input-error'>{formik.errors.email}</p>}
        </div>

        <div className='inputDiv'>
          <label>Şifre</label>
          <input
            type='password'
            name='password'
            placeholder='Şifrenizi giriniz'
            value={formik.values.password}
            onChange={formik.handleChange}
          />
         {formik.errors.password && formik.touched.password && (
            <p className='input-error'>{formik.errors.password}</p>
          )}
        </div>

        <button type='submit' className='button'>Giriş Yap</button>
        <button onClick={loginWithGoogle} type='submit' className='button'><FaGoogle style={{ marginRight: '15px', color: 'brown' }} /> Google ile Giriş Yap</button>
        <a style={{ color: 'wheat' }} href='Register'>Kayıt ol</a>
      </form>
    </div>
  );
}

export default Login;
