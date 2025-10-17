import { useFormik } from 'formik';
import { RegisterFormSchemas } from '../schemas/RegisterFormSchemas';
import "../css/loginregister.css";

function Register() {
    const submit = (values: any, action: any) => {
        setTimeout(() => {
            action.resetForm();
        }, 2000);
    }

    const { values, errors, handleChange, handleSubmit, touched } = useFormik({
        initialValues: {
            email: '',
            age: '',
            password: '',
            confirmPassword: '',
            term: false,
        },
        validationSchema: RegisterFormSchemas,
        onSubmit: submit
    });

    return (
        <div className="form-root">
            <form onSubmit={handleSubmit} className="form-container">
                <h2 className="form-title">Kayıt Ol</h2>

                <div className="inputDiv">
                    <label>Email</label>
                    <input 
                        type="text"
                        name="email"
                        placeholder="Email giriniz"
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && touched.email && <p className="input-error">{errors.email}</p>}
                </div>

                <div className="inputDiv">
                    <label>Yaş</label>
                    <input 
                        type="number"
                        name="age"
                        placeholder="Yaşınızı giriniz"
                        value={values.age}
                        onChange={handleChange}
                    />
                    {errors.age && touched.age && <p className="input-error">{errors.age}</p>}
                </div>

                <div className="inputDiv">
                    <label>Şifre</label>
                    <input 
                        type="password"
                        name="password"
                        placeholder="Şifrenizi giriniz"
                        value={values.password}
                        onChange={handleChange}
                    />
                    {errors.password && touched.password && <p className="input-error">{errors.password}</p>}
                </div>

                <div className="inputDiv">
                    <label>Şifre Tekrarı</label>
                    <input 
                        type="password"
                        name="confirmPassword"
                        placeholder="Şifrenizi tekrar giriniz"
                        value={values.confirmPassword}
                        onChange={handleChange}
                    />
                    {errors.confirmPassword && touched.confirmPassword && <p className="input-error">{errors.confirmPassword}</p>}
                </div>

                <div className="inputDiv" style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <input 
                        type="checkbox"
                        name="term"
                        checked={values.term}
                        onChange={handleChange}
                    />
                    <label>Kullanıcı sözleşmesini kabul ediyorum</label>
                    {errors.term && touched.term && <p className="input-error">{errors.term}</p>}
                </div>

                <button type="submit" className="button">Kaydet</button>
                        <a href='Login'>Hesabınız var mı? Giriş Yapın</a>

            </form>
        </div>
    )
}

export default Register;
