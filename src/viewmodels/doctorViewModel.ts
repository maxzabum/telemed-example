import { useDoctorStore } from "@stores/"

// View model for doctor
export const useDoctorViewModel = () => {
    const { doctor, doctorType, selectedDoctorType, setSelectedDoctorType } = useDoctorStore()

    const onSetSelectedDoctorType = (doctorType: string) => {
        setSelectedDoctorType(doctorType)
    }

    return {
        doctor,
        doctorType,
        onSetSelectedDoctorType,
        selectedDoctorType
    }
}
