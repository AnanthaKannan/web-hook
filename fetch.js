const { Employe } = require("./model/employ");


const read = async(empId) =>{
    try{
    const data = await Employe.findOne({empId});
    // console.log('data', data._doc.doj)
    return data._doc;
    }
    catch(error){
        return 'error'
    }
}

module.exports = {
    read
};