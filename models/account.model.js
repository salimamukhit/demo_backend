module.exports = (sequelize, DataTypes) => {
    const Account = sequelize.define("account", {
        number: {
            type: DataTypes.STRING
        },
        name: {
            type: DataTypes.STRING
        }
    }, {
        underscored: true
    });
    return Account;
};
