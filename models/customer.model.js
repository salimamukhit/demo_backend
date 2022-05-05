module.exports = (sequelize, DataTypes) => {
    const Customer  = sequelize.define("customer", {
        name: {
            type: DataTypes.STRING
        },
        address: {
            type: DataTypes.STRING
        }
    }, {
        underscored: true
    });
    return Customer;
};
