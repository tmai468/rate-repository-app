import { Formik, useField } from "formik"
import { Text, TextInput, Pressable, View } from "react-native"
import FormikTextInput from "./FormikTextInput"

const initialValues = {
    mass: '',
    height: ''
}

const getBodyMassIndex = (mass, height) => {
    return Math.round(mass / Math.pow(height, 2))
}

const BodyMassIndexForm = ({ onSubmit }) => {
    const [massField, massMeta, massHelpers] = useField('mass')
    const [heightField, heightMeta, heightHelpers] = useField('height')

    return (
        <View>
            {/* <TextInput
                placeholder="Weight (kg)"
                value={massField}
                onChangeText={text => massHelpers.setValue(text)}
            /> */}
            <FormikTextInput name="mass" placeholder="Weight (kg)"/>

            {/* <TextInput
                placeholder="Height (m)"
                value={heightField}
                onChangeText={text => heightHelpers.setValue(text)}
            /> */}
            <FormikTextInput name="height" placeholder="Height (m)"/>

            <Pressable onPress={onSubmit}>
                <Text>Calculate</Text>
            </Pressable>
        </View>
    )
}

const BodyMassIndexCalculator = () => {

    const onSubmit = values => {
        const mass = parseFloat(values.mass)
        const height = parseFloat(values.height)

        if (!isNaN(mass) && !isNaN(height) && height !== 0) {
            console.log(`Your body mass index is: ${getBodyMassIndex(mass, height)}`)
        }
    }

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({ handleSubmit }) => <BodyMassIndexForm onSubmit={handleSubmit}/>}
        </Formik>
    )
}

export default BodyMassIndexCalculator