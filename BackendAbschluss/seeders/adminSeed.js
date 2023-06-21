module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('users', [{
            name: 'Admin',
            email: 'admin@admin.com',
            password: 'admin',
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