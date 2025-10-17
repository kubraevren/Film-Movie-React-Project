import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { LoginFormSchemas } from "../schemas/LoginFormSchemas";
import "../css/loginregister.css";

type Props = {
  onLogin: () => void; // parent'tan login fonksiyonu alıyoruz
};

function Login({ onLogin }: Props) {
  const navigate = useNavigate();

  const submit = (values: any, action: any) => {
    // Burada backend login işlemi yapılabilir, biz simule ediyoruz
    console.log("Login Values:", values);
    onLogin(); // login durumunu güncelle
    navigate("/"); // login sonrası ana sayfaya yönlendir
    action.resetForm();
  };

  const { values, errors, handleChange, handleSubmit, touched } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginFormSchemas,
    onSubmit: submit
  });

  return (
    <div className="form-root">
      <form onSubmit={handleSubmit} className="form-container">
        <h2 className="form-title">Giriş Yap</h2>

        <div className='inputDiv'>
          <label>Email</label>
          <input
            type='text'
            name='email'
            placeholder='Email giriniz'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && touched.email && <p className='input-error'>{errors.email}</p>}
        </div>

        <div className='inputDiv'>
          <label>Şifre</label>
          <input
            type='password'
            name='password'
            placeholder='Şifrenizi giriniz'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && touched.password && <p className='input-error'>{errors.password}</p>}
        </div>

        <button type='submit' className='button'>Giriş Yap</button>
        <a href='Register'>Kayıt ol</a>
      </form>
    </div>
  );
}

export default Login;
