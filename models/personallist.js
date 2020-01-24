
module.exports = function(sequelize, DataTypes){
    const personalList = sequelize.define("personallist",{

        user_ID: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8, 30]
            }
        },
        personal_budget: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            
        },
        personal_category_1: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2, 20]
            }
        },
        personal_category_2: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2, 20]
            }
        },
        personal_category_3: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2, 20]
            }
        },
        personal_category_4: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2, 20]
            }
        },
        personal_category_5: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2, 20]
            }
        },
        personal_category_6: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2, 20]
            }
        },
    }); 


    return personalList;
};