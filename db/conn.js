const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('toughts','root','',
{
    host :'localhost',
    dialect: 'mysql',


})


try{
    sequelize.authenticate()
    console.log('Connect Sucefful')

}catch(err){
    console.log(`Não foi possivel conectar: ${err}`)
}

module.exports = sequelize