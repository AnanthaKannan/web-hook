const { Employe } = require("./model/employ");


const read = async(empId) =>{
    const data = await Employe.findOne({empId});
    // console.log('data', data._doc.doj)
    return data._doc;
}

module.exports = {
    read
};