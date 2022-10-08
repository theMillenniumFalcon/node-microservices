import * as yup from "yup";

export const validationSchema = yup.object().shape({
    email: yup.string().required(),
    password: yup
        .string()
        .required()
        .test("sameAsConfirmPassword",
            // eslint-disable-next-line no-template-curly-in-string
            "${path} is not the same as the confirmation password", function () {
                return this.parent.password === this.parent.confirmPassword;
            })
})