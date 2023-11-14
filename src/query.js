import sequelize from "./index";

try {
    await sequelize.authenticate();
    console.log('Подключение к базе данных успешно установлено.');

    await sequelize.sync({force: true});


} catch (error) {
    console.error('Ошибка подключения к базе данных:', error);
}

function set_connections(){

}