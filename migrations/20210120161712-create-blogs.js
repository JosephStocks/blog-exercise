"use strict";
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("blogs", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            title: {
                type: Sequelize.STRING,
            },
            authorId: {
                type: Sequelize.INTEGER,
                references: {
                    model: "authors",
                    key: "id",
                },
            },
            body: {
                type: Sequelize.TEXT,
            },
            isPublished: {
                type: Sequelize.BOOLEAN,
            },
            publishDate: {
                type: Sequelize.DATE,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable("blogs");
    },
};
