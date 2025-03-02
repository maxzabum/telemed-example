export type DoctorState = {
    doctor: IDoctor[];
    doctorType: string[];
    selectedDoctorType: string;
    setSelectedDoctorType: (doctorType: string) => void;
}

export enum Insurance {
    CGD = "CGD",
    NHSO = "NHSO",
    SSO = "SSO",
    AIA = "AIA",
    FWD = "FWD",
    EX1 = "EX1",
    EX2 = "EX2",
    EX3 = "EX3",
}

export type IDoctor = {
    id: number
    name: string;
    rating: string;
    type: string;
    speciality: string;
    location: string;
    minPrice: number;
    insurance: Insurance[];
    image: string;
}