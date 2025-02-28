import { useNavigation } from "@react-navigation/native"
import { useAuthStore } from "@stores/"

export const useAuthViewModel = () => {
    const {userIdentityNumber,setUserIdentityNumber} = useAuthStore()
    const navigation = useNavigation();
    const onTextChange = (text: string) => {
        setUserIdentityNumber(text)
    }

    const onLogin = () => {
        navigation.navigate('Doctor',{
            screen:'List'
        })
    }

    return {
        userIdentityNumber,
        onTextChange,
        onLogin
    }
}
