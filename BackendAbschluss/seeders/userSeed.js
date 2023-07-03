const bcrypt = require('bcryptjs');

const thomasPW = 'test1';
const fabiaPW = 'test2';
const haraldPW = 'test3';


module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('users', [{
            name: 'Thomas Test',
            email: 'thomas@test.com',
            password: bcrypt.hashSync(thomasPW, 10),	
            telNumber: '0123456789',
            street: 'Teststreet 1',
            ort: 'Testort 1',
            plz: '12345',
            admin: false
        },
    {
        name: 'Fabia Farbe',
        email: 'fabia@farbe.com',
        password: bcrypt.hashSync(fabiaPW, 10),
        telNumber: '0123456789',
        street: 'Teststreet 2',
        ort: 'Testort 2',
        plz: '123456',
        admin: false
    },
    {
        name: 'Harald Hase',
        email: 'harald@hase.com',
        password: bcrypt.hashSync(haraldPW, 10),
        telNumber: '0123456789',
        street: 'Teststreet 3',
        ort: 'Testort 3',
        plz: '1234567',
        admin: false
    },
    ], {});
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('users', null, {});
    }
};