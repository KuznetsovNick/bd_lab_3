import sequelize from "../index.js"
import DataTypes from 'sequelize';
import Department from "./department";
import {studyForms} from "../enums";

const Specialization = sequelize.define('Specialization', {
    specialization_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    specialization_name: {
        type: DataTypes.STRING(70),
    },
    department_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Department,
            key: 'department_id',
        },
    },
    specialization_code: {
        type: DataTypes.STRING(20),
    },
    qualification: {
        type: DataTypes.STRING(70),
    },
    duration: {
        type: DataTypes.DECIMAL(3, 2),
    },
    study_form: {
        type: DataTypes.ENUM(...studyForms),
    },
}, {
    tableName: 'specialization',
});

export default Specialization