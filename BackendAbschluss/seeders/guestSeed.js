module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('guestUsers', [{
            Name: 'Test Gast',
            Strasse: 'Gaststrasse 1',
            Ort: 'Gastort 1',
            PlZ: '12345',
            Email: 'test@gast.com',	
            TelNmr: '0123456789'
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('guestUsers', null, {});
    }
};

