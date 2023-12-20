'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('prescriptions', 'doctor_name', {
        type: Sequelize.STRING
    });
},
down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('prescriptions', 'doctor_name');
},

};
