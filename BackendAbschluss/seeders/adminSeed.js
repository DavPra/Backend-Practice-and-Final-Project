const bcrypt = require('bcryptjs');

const adminPW = 'admin';

const hash = bcrypt.hashSync(adminPW, 10);

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('allUsers', [{
            name: 'Admin',
            email: 'admin@admin.com',
            password: hash,
            telNumber: '0123456789',
            strasse: 'Adminstreet',
            ort: 'Adminort',
            plz: '12345',
            admin: true
        }], {});
    },
    
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('users', null, {});
    }
};