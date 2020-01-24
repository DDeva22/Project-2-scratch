

module.exports = function(sequelize, DataTypes){
    const userBase = sequelize.define("userbase",{

        legal_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 50]
            }
        },
        user_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [3, 20]
            }
        },
        user_password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8, 20]
            }
        },
        user_ID: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 30]
            }
        }

    });

    
    return userBase;
    // , userTrip, personalList;
};