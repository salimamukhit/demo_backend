module.exports = {
    HOST: "localhost",
    USER: "express",
    PASSWORD: "express",
    DB: "express",
    dialect: "postgres",
    pool: {
        max: 5, 
        min: 0, 
        acquire: 30000, 
        idle: 10000
    }
};