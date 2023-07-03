const bcrypt = require('bcryptjs');

const adminPW = 'admin';

const hash = bcrypt.hashSync(adminPW, 10);

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('users', [{
            name: 'Admin',
            email: 'admin@admin.com',
            password: hash,
            telNumber: '0123456789',
            street: 'Adminstreet',
            ort: 'Adminort',
            plz: '12345',
            admin: true
        }], {});
    },
    
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('users', null, {});
    }
};