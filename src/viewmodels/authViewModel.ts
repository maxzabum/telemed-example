import { useNavigation } from "@react-navigation/native"
import { useAuthStore } from "@stores/"
import { createMask } from "@utils/inputMask";

// View model for authentication
export const useAuthViewModel = () => {
    const { userIdentityNumber, setUserIdentityNumber } = useAuthStore()
    const navigation = useNavigation();
    const onTextChange = (text: string) => {
        const mask = createMask({ textValue: text, mask: '#-####-#####-##-#' });

        setUserIdentityNumber(mask)
    }

    const onLogin = () => {
        navigation.navigate('Doctor', {
            screen: 'Welcome'
        })
    }

    const onPressWelcome = () => {
        navigation.navigate('Doctor', {
            screen: 'List',
            params: {
                disease: 'ความดัน'
            },
        })
    }

    return {
        userIdentityNumber,
        onTextChange,
        onLogin,
        onPressWelcome
    }
}
