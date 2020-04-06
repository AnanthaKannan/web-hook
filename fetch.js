const { Employe } = require("./model/employ");


const doj = async() =>{
    const data = await Employe.findOne({});
    console.log('data', data)
    return data;
    return "Your date of joining is  03-06-2017"
}

module.exports = {
    doj
};