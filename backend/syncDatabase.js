const { sequelize, User, Portfolio } = require("./models");

async function syncDatabase() {
    try {
        await sequelize.authenticate();
        console.log('DB connected successfully.');

        await sequelize.sync({ force: true });
        console.log('All models were synchronized successfully.');

    } catch (error) {
        console.error('Unable to sync database:', error);
    } finally {
        await sequelize.close();
    }
}

syncDatabase();