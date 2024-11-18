const patientService = require("../services/patientService")

module.exports.createPatient = async (req,res) =>{
    const response = {}    
    try{
        const responseFromService = await patientService.createPatient(req.body)
        response.status = 200
        response.message = "Patient created successfully"
        response.body = responseFromService
    } catch (err) {
        console.log("Somthing went wrong in Patient contoller ", err)
        response.status = 400
        response.message = err.message
        response.body = {}
    }
    return res.status(response.status).send(response)
}

module.exports.getPatient = async (req,res) => {
    const response = {}
    try{
        const Patients = await patientService.getPatients()
        response.status = 200
        response.body = Patients
    }catch(err){
        console.log("Somthing went wrong in Patient controller while getPatients :",err)
        response.status = 400
        response.message = err.message
        response.body = {}
    }
    return res.status(response.status).send(response)
}

module.exports.getPatientById = async (req, res)=>{
    const response = {}
    try{
        const {id} = req.params
        const Patient = await patientService.getPatientById(id)
        response.status = 200
        response.body = Patient
    }catch(err){
        console.log("Somthing went wrong in Patient controller while getPatientById :",err)
        response.status = 400
        response.message = err.message
        response.body = {}
    }
    return res.status(response.status).send(response)
}

module.exports.getPatientByUid = async (req, res)=>{
    const response = {}
    try{
        const {uid} = req.params
        const Patient = await patientService.getPatientById(uid)
        response.status = 200
        response.body = Patient
    }catch(err){
        console.log("Somthing went wrong in Patient controller while getPatientByContact :",err)
        response.status = 400
        response.message = err.message
        response.body = {}
    }
    return res.status(response.status).send(response)
}

module.exports.getPatientByName = async (req, res)=>{
    const response = {}
    try{
        const {name} = req.params
        const Name = String(name).toLowerCase()
        const Patient = await patientService.getPatientByName(Name)
        response.status = 200
        response.body = Patient
    }catch(err){
        console.log("Somthing went wrong in Patient controller while getPatientByName :",err)
        response.status = 400
        response.message = err.message
        response.body = {}
    }
    return res.status(response.status).send(response)
}


module.exports.getPatientByContact = async (req, res)=>{
    const response = {}
    try{
        const {contact} = req.params
        const Contact = String(contact).toLowerCase()
        const Patient = await patientService.getPatientByContact(Contact)
        response.status = 200
        response.body = Patient
    }catch(err){
        console.log("Somthing went wrong in Patient controller while getPatientByContact :",err)
        response.status = 400
        response.message = err.message
        response.body = {}
    }
    return res.status(response.status).send(response)
}

module.exports.deletePatient = async (req, res)=>{
    const response = {}
    try{
        const {id} = req.params
        const Patient = await patientService.deletePatient(id)
        response.status = 200
        response.body = Patient
    }catch(err){
        console.log("Somthing went wrong in Patient controller while deleting the patient by Id :",err)
        response.status = 400
        response.message = err.message
        response.body = {}
    }
    return res.status(response.status).send(response)
}
