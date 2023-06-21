module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('products', [{
            Titel: 'The Godfather',
            Genre: 'Crime',
            Typ: 'DVD',
            Länge: 175,
            Preis: 10,
            Regisseur: 'Francis Ford Coppola',
            Lagerstand: 165
        },
        {
            Titel: 'The Godfather Part II',
            Genre: 'Crime',
            Typ: 'DVD',
            Länge: 202,
            Preis: 12,99,
            Regisseur: 'Francis Ford Coppola',
            Lagerstand: 120
        },
        {
            Titel: 'The Godfather Part III',
            Genre: 'Crime',
            Typ: 'DVD',
            Länge: 170,
            Preis: 9,99,
            Regisseur: 'Francis Ford Coppola',
            Lagerstand: 100
        },
        {
            Titel: 'Shrek',
            Genre: 'Animation',
            Typ: 'DVD',
            Länge: 90,
            Preis: 7,99,
            Regisseur: 'Andrew Adamson',
            Lagerstand: 200
        },
        {
            Titel: 'Shrek 2',
            Genre: 'Animation',
            Typ: 'Blu-Ray',
            Länge: 93,
            Preis: 14,99,
            Regisseur: 'Andrew Adamson',
            Lagerstand: 150
        },
        {
            Titel: 'Star Wars: Rogue One',
            Genre: 'Sci-Fi',
            Typ: 'Blu-Ray',
            Länge: 133,
            Preis: 19,99,
            Regisseur: 'Gareth Edwards',
            Lagerstand: 100
        }
    ])
    },
    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('products', null, {})
    }
}

