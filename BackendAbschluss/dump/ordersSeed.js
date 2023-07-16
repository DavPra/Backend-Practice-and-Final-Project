/*module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('orders', [{
            OrderDate: '2020-01-01',
            OrderStatus: 'Offen',
            UserId: 2,
        },
        {
            OrderDate: '2020-01-02',
            OrderStatus: 'Erledigt',
            UserId: 4,
        },
        {
            OrderDate: '2020-01-03',
            OrderStatus: 'Offen',
            UserId: 3,
        },
    
    ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('guestUsers', null, {});
    }
};*/