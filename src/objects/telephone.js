import sequelize from "../index.js"
import DataTypes from 'sequelize';
import Department from "./department";

const Telephone = sequelize.define('Telephone', {
    telephone_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    telephone_number: {
        type: DataTypes.STRING(20),
    },
    department_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Department,
            key: 'department_id',
        },
    },
}, {
    tableName: 'telephone',
});

export default Telephone
