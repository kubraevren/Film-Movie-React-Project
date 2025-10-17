import * as yup from 'yup'

export const RegisterFormSchemas = yup.object().shape({
    email: yup
        .string()
        .email("Geçerli email adresi gir.")
        .required("Email adresi zorunlu"),

    age: yup
        .number()
        .typeError("Lütfen geçerli bir sayı giriniz.")
        .positive("Pozitif bir değer giriniz")
        .integer("Tam sayı giriniz")
        .required("Yaş alanı girmek zorunludur."),

    password: yup
        .string()
        .required("Şifre alanı zorunludur"),

    confirmPassword: yup
        .string()
        .required("Şifre tekrarı zorunludur")
        .oneOf([yup.ref('password')], 'Şifreler eşleşmiyor'),

    term: yup
        .boolean()
        .oneOf([true], 'Lütfen şartları onaylayınız.')

})