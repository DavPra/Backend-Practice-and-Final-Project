'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Users', [{
      firstName: 'Hans',
      lastName: 'Muster',
      email: 'hans@test.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Max',
      lastName: 'Test',
      email: 'max@test.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Erika',
      lastName: 'Musterfrau',
      email: 'erika@test.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
      await queryInterface.bulkDelete('Users', null, {});
  }
};
