const Patient = require("../database/model/patient")

module.exports.createPatient = async (PatientData) => {
    try{
        const patient = new Patient({name:PatientData.name, DOB:PatientData.DOB, contact:PatientData.contact, place:PatientData.place})
        return await patient.save();
    }catch(err){
        console.log("somthing went wrong while creating Patient ", err)
    }
}

module.exports.getPatients = async () => {
    try{
        const Patients = await Patient.find();
        return Patients
    }catch (err){
        console.log("somthing went wrong while getPatients service :",err)
    }
}

module.exports.getPatientById = async (id) => {
    try{
        return await Patient.findById(id)
    }catch(err){
        console.log("somthing went wrong while getPatientsById service :",err)
    }
}

module.exports.getPatientByContact = async (contact) =>{
    try{
        return await Patient.find({contact: contact})
    }catch(err){
        console.log("somthing went wrong while getPatientsByContact service :",err)
    }
}

module.exports.getPatientByName = async (name) =>{
    try{
        return await Patient.find({name: name})
    }catch(err){
        console.log("somthing went wrong while getPatientsByName service :",err)
    }
}

module.exports.deletePatient = async (id) => {
    try{
        return await Patient.deleteOne({_id:id})
    }catch(err){
        console.log("somthing went wrong while deletePatient service :",err)
    }
}

module.exports.putPatient = async (id, newBody) => {
    try{
        console.log(id, newBody)
        const patient = await Patient.findByIdAndUpdate(
            id, 
            { $set: newBody }, 
            { new: true, useFindAndModify: false }
          );
        console.log(patient)
        return patient
    }catch(err){
        console.log("somthing went wrong while putPatient service :",err)
    }
} 