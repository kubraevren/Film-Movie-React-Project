import * as yup from 'yup';

export const LoginFormSchemas = yup.object().shape({
    email: yup
        .string()
        .email("Geçerli email adresi gir.")
        .required("Email adresi zorunlu"),
    password: yup
        .string()
        .required("Şifre alanı zorunludur")
});
