import { Formik, Form, Field } from "formik"
import { View, Pressable } from "react-native"
import FormikTextInput from "./FormikTextInput"
import Text from "./Text"

const initialValues = {
    username: '',
    password: ''
}

const SignInForm = ({ onSubmit }) => {
    return (
        <View>
            <Form>
                <Field>
                    <FormikTextInput name="username" placeholder="Username"/>
                </Field>
                <FormikTextInput secureTextEntry name="password" placeholder="Password"/>
                <Pressable onPress={onSubmit}>
                    <Text>Login</Text>
                </Pressable>
            </Form>
        </View>
    )
}

const SignIn = () => {
    // return <Text>The sign in view</Text>
    const onSubmit = (values) => {
        console.log(values)
    }
    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit}/>}
        </Formik>
    )
}

export default SignIn