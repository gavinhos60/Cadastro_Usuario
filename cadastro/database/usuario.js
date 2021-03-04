const { NOMEM } = require('dns');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('teste', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(function () {
    console.log("Conexao realizada com sucesso");
}).catch(function (err) {
    console.log("Erro ao reazlizar a conexao" + err);
});

const User = sequelize.define('usuario', {
    nome: {
        type: Sequelize.STRING,
    },
    idade: {
        type: Sequelize.INTEGER,
    },
    cpf: {
        type: Sequelize.INTEGER,
    }
});

User.sync({ force: true });