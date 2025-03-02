import { DoctorState, Insurance } from "../types/doctor.type";
import { create } from "zustand";

//Create a store for doctor
export const useDoctorStore = create<DoctorState>((set) => ({
    doctor: [
        {
            id: 0,
            name: "รศ.ภญ. สุณี  เลิศสินอุดม",
            rating: '5.0',
            type: "แพทย์",
            speciality: "โรคทั่วไป",
            location: "โรงพยาบาลขอนแก่น",
            minPrice: 0,
            insurance: [Insurance.CGD, Insurance.NHSO, Insurance.SSO, Insurance.AIA, Insurance.FWD, Insurance.EX1, Insurance.EX2, Insurance.EX3],
            image: 'https://s3-alpha-sig.figma.com/img/f277/893f/b8f845ad137def8179f1f1e763f51753?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=BF1pxtZ2rM-qrpxnPbgia~jjGI-sNeOkqeYZF9qzOaqF79OIwlrwVHMtTWCx-QdwNorDWIcMk2gLOhczC0QLuytQRo9QFxws~ruCvFU8bjCK0KTuBbXLhAlZiSeDOdNRhoSdMSmqzSWKKlSNeX7RbyeYw9TzR~jDXY-7FcuRIGPF11PKLNwI4ES8HAVYBh9mWIK4DR8qGsxcnRO2BnBp1aYNnN7xC5vv2jLH5LlqKQPwQ2oLCai04F05BziOC9LSCZ3jIVxNytyEdTuG6EG9OAitZPiemrKATUPkYnXxtenxNkMTiwkt2J9CI8Slhqdl2rJ-Ei45~v5EgqtBnWUGUA__'
        },
        {
            id: 1,
            name: "รศ.ภญ. สุณี  เลิศสินอุดม",
            rating: '5.0',
            type: "แพทย์",
            speciality: "โรคทั่วไป",
            location: "โรงพยาบาลขอนแก่น",
            minPrice: 0,
            insurance: [Insurance.CGD, Insurance.NHSO, Insurance.SSO, Insurance.AIA, Insurance.FWD, Insurance.EX1, Insurance.EX2, Insurance.EX3],
            image: 'https://s3-alpha-sig.figma.com/img/f277/893f/b8f845ad137def8179f1f1e763f51753?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=BF1pxtZ2rM-qrpxnPbgia~jjGI-sNeOkqeYZF9qzOaqF79OIwlrwVHMtTWCx-QdwNorDWIcMk2gLOhczC0QLuytQRo9QFxws~ruCvFU8bjCK0KTuBbXLhAlZiSeDOdNRhoSdMSmqzSWKKlSNeX7RbyeYw9TzR~jDXY-7FcuRIGPF11PKLNwI4ES8HAVYBh9mWIK4DR8qGsxcnRO2BnBp1aYNnN7xC5vv2jLH5LlqKQPwQ2oLCai04F05BziOC9LSCZ3jIVxNytyEdTuG6EG9OAitZPiemrKATUPkYnXxtenxNkMTiwkt2J9CI8Slhqdl2rJ-Ei45~v5EgqtBnWUGUA__'
        },
        {
            id: 2,
            name: "รศ.ภญ. สุณี  เลิศสินอุดม",
            rating: '5.0',
            type: "แพทย์",
            speciality: "โรคทั่วไป",
            location: "โรงพยาบาลขอนแก่น",
            minPrice: 0,
            insurance: [Insurance.CGD, Insurance.NHSO, Insurance.SSO, Insurance.AIA, Insurance.FWD, Insurance.EX1, Insurance.EX2, Insurance.EX3],
            image: 'https://s3-alpha-sig.figma.com/img/f277/893f/b8f845ad137def8179f1f1e763f51753?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=BF1pxtZ2rM-qrpxnPbgia~jjGI-sNeOkqeYZF9qzOaqF79OIwlrwVHMtTWCx-QdwNorDWIcMk2gLOhczC0QLuytQRo9QFxws~ruCvFU8bjCK0KTuBbXLhAlZiSeDOdNRhoSdMSmqzSWKKlSNeX7RbyeYw9TzR~jDXY-7FcuRIGPF11PKLNwI4ES8HAVYBh9mWIK4DR8qGsxcnRO2BnBp1aYNnN7xC5vv2jLH5LlqKQPwQ2oLCai04F05BziOC9LSCZ3jIVxNytyEdTuG6EG9OAitZPiemrKATUPkYnXxtenxNkMTiwkt2J9CI8Slhqdl2rJ-Ei45~v5EgqtBnWUGUA__'
        },
    ],
    doctorType: ['ทั้งหมด', 'แพทย์', 'ทันตแพทย์', 'เภสัชกร', 'พยาบาล'],
    selectedDoctorType: "ทั้งหมด",
    setSelectedDoctorType(doctorType: string) {
        set({ selectedDoctorType: doctorType });
    },


}))
