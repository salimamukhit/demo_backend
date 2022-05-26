const db = require("../models");
const Customer = db.customers;
const Account = db.accounts;

exports.createCustomer = (customer) => {
    return Customer.create({
        name: customer.name,
        address: customer.address,
    })
        .then((customer) => {
            console.log(">> Created customer: " + JSON.stringify(customer, null, 4));
            return customer;
        })
        .catch((err) => {
            console.log(">> Error while creating customer: ", err);
        });
};

exports.deleteCustomer = (customerId) => {
    return Customer.destroy({
            where: {
                id: customerId,
            }
        })
        .then((rowDeleted) => {
            if(rowDeleted === 1) {
                console.log(">> Deleted customer successfully");
            }
        })
        .catch((err) => {
           console.log(">> Error while deleting a customer: ", err);
        });
};

exports.createAccount = (customerId, account) => {
    return Account.create({
        number: account.number,
        name: account.name,
        customerId: customerId,
    })
        .then((account) => {
            console.log(">> Created account: " + JSON.stringify(account, null, 4));
            return account;
        })
        .catch((err) => {
            console.log(">> Error while creating account: ", err);
        });
};

exports.deleteAccount = (accountId) => {
    return Account.destroy({
        where: {
            id: accountId,
        }
    })
        .then((rowDeleted) => {
            if(rowDeleted === 1) {
                console.log(">> Deleted account successfully");
            }
        })
        .catch((err) => {
            console.log(">> Error while deleting an account: ", err);
        })
};

exports.findCustomerById = (customerId) => {
    return Customer.findByPk(customerId, { include: ["accounts"] })
        .then((customer) => {
            return customer;
        })
        .catch((err) => {
            console.log(">> Error while finding customer: ", err);
        });
};

exports.findAccountById = (id) => {
    return Account.findByPk(id, { include: ["customer"] })
        .then((account) => {
            return account;
        })
        .catch((err) => {
            console.log(">> Error while finding account: ", err);
        });
};

exports.findAll = () => {
    return Customer.findAll({
        include: ["accounts"],
    }).then((customers) => {
        return customers;
    });
};
