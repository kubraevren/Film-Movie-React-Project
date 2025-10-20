import { useFormik } from 'formik';
import { RegisterFormSchemas } from '../schemas/RegisterFormSchemas';
import "../css/loginregister.css";
import { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import { auth } from '../Firebase';
import { useNavigate } from 'react-router-dom';
function Register() {


    const navigate=useNavigate();

    const register = async (values: any,actions:any) => {
        try {

            const response = await createUserWithEmailAndPassword(auth, values.email, values.password)
            const user = response.user;
            if (user) {
                toast.success("Kullanıcı oluşturuldu")
                actions.resetForm();
                navigate("giris");
            }
        } catch (error: any) {
            toast.error(error.message);
        }
    }

     const formik = useFormik({
    initialValues: {
      email: '',
      age: '',
      password: '',
      confirmPassword: '',
      term: false,
    },
    validationSchema: RegisterFormSchemas,
    onSubmit: register
  });

    const submit = (values: any, action: any) => {
        setTimeout(() => {
            action.resetForm();
        }, 2000);
    }

    const { values, errors, handleChange, handleSubmit, touched } = formik;
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
                <a style={{ color: 'wheat' }} href='giris'>Hesabınız var mı? Giriş Yapın</a>

            </form>
        </div>
    )
}

export default Register;
