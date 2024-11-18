const visitService = require("../services/visitService")

module.exports.createVisit = async (req,res) =>{
    const response = {}    
    try{
        const responseFromService = await visitService.createVisit(req.body)
        response.status = 200
        response.message = "Visit created successfully"
        response.body = responseFromService
    } catch (err) {
        console.log("Somthing went wrong in Visit contoller ", err)
        response.status = 400
        response.message = err.message
        response.body = {}
    }
    return res.status(response.status).send(response)
    return response
}

module.exports.getVisit = async (req,res) => {
    const response = {}
    try{
        const Visits = await visitService.getVisits()
        response.status = 200
        response.body = Visits
    }catch(err){
        console.log("Somthing went wrong in Visit controller while getVisits :",err)
        response.status = 400
        response.message = err.message
        response.body = {}
    }
    return res.status(response.status).send(response)
}

module.exports.getVisitById = async (req, res)=>{
    const response = {}
    try{
        const {id} = req.params
        const Visit = await visitService.getVisitById(id)
        response.status = 200
        response.body = Visit
    }catch(err){
        console.log("Somthing went wrong in Visit controller while getVisitById :",err)
        response.status = 400
        response.message = err.message
        response.body = {}
    }
    return res.status(response.status).send(response)
}

module.exports.getVisitByUid = async (req, res)=>{
    const response = {}
    try{
        const {uid} = req.params
        const Visit = await visitService.getVisitByUid(uid)
        response.status = 200
        response.body = Visit
    }catch(err){
        console.log("Somthing went wrong in Visit controller while getVisitByContact :",err)
        response.status = 400
        response.message = err.message
        response.body = {}
    }
    return res.status(response.status).send(response)
}

module.exports.getVisitByName = async (req, res)=>{
    const response = {}
    try{
        const {name} = req.params
        const Name = String(name).toLowerCase()
        const Visit = await visitService.getVisitByName(Name)
        response.status = 200
        response.body = Visit
    }catch(err){
        console.log("Somthing went wrong in Visit controller while getVisitByName :",err)
        response.status = 400
        response.message = err.message
        response.body = {}
    }
    return res.status(response.status).send(response)
}

module.exports.deleteVisit = async (req, res)=>{
    const response = {}
    try{
        const {id} = req.params
        const Visit = await visitService.deleteVisit(id)
        response.status = 200
        response.body = Visit
    }catch(err){
        console.log("Somthing went wrong in Visit controller while deleting the visit by Id :",err)
        response.status = 400
        response.message = err.message
        response.body = {}
    }
    return res.status(response.status).send(response)
}
