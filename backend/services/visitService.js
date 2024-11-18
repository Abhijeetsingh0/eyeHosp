const Visit = require("../database/model/visit")

module.exports.createVisit = async (VisitData) => {
    try{
        console.log(VisitData)
        const visit = new Visit({uid: VisitData.uid, visit: VisitData.visit, amount: VisitData.amount, notes:VisitData.notes, followUpVisit:VisitData.followUpVisit})
        return await visit.save();
    }catch(err){
        console.log("somthing went wrong while creating Visit ", err)
    }
}

module.exports.getVisits = async () => {
    try{
        const Visits = await Visit.find();
        return Visits
    }catch (err){
        console.log("somthing went wrong while getVisits service :",err)
    }
}

module.exports.getVisitById = async (id) => {
    try{
        return await Visit.findById(id)
    }catch(err){
        console.log("somthing went wrong while getVisitsById service :",err)
    }
}

module.exports.getVisitByUid = async (uid) =>{
    try{
        return await Visit.find({uid: uid})
    }catch(err){
        console.log("somthing went wrong while getVisitsByContact service :",err)
    }
}

module.exports.getVisitByName = async (name) =>{
    try{
        return await Visit.find({name: name})
    }catch(err){
        console.log("somthing went wrong while getVisitsByName service :",err)
    }
}

module.exports.deleteVisit = async (id) => {
    try{
        return await Visit.deleteOne({_id:id})
    }catch(err){
        console.log("somthing went wrong while deleteVisit service :",err)
    }
}

module.exports.putVisit = async (id, newBody) => {
    try{
        console.log(id, newBody)
        const visit = await Visit.findByIdAndUpdate(
            id, 
            { $set: newBody }, 
            { new: true, useFindAndModify: false }
          );
        console.log(visit)
        return visit
    }catch(err){
        console.log("somthing went wrong while putVisit service :",err)
    }
} 