import sequelize from "../index.js"
import DataTypes from 'sequelize';
import Discipline from "./discipline";
import Specialization from "./specialization";

const DisciplineSpecialization = sequelize.define('DisciplineSpecialization', {
    discipline_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Discipline,
            key: 'discipline_id',
        },
    },
    specialization_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Specialization,
            key: 'specialization_id',
        },
    },
}, {
    tableName: 'discipline_specialization',
});

export default DisciplineSpecialization;