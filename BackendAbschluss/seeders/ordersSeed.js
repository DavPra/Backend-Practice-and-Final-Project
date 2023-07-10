module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('orders', [{
            OrderID: 1,
            OrderDate: '2020-01-01',
            OrderStatus: 'Offen',
            UserId: 2,
        },
        {
            OrderID: 2,
            OrderDate: '2020-01-02',
            OrderStatus: 'Erledigt',
            UserId: 4,
        },
        {
            OrderID: 3,
            OrderDate: '2020-01-03',
            OrderStatus: 'Offen',
            UserId: 3,
        },
    
    ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('guestUsers', null, {});
    }
};