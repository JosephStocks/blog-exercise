"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class blogs extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            blogs.belongsTo(models.authors, { foreignKey: "authorId" });
        }
    }
    blogs.init(
        {
            title: DataTypes.STRING,
            authorId: DataTypes.INTEGER,
            body: DataTypes.TEXT,
            isPublished: DataTypes.BOOLEAN,
            publishDate: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: "blogs",
        }
    );
    return blogs;
};
