"use strict";
import { UserAttributes } from "../../../core/user/user.attributes";
import { Model } from "sequelize";

module.exports = (sequelize: any, DataTypes: any) => {
  class User extends Model<UserAttributes> implements UserAttributes {
    public id!: number;
    public name!: string;
    public surName!: string;
    public email!: string;
    public password!: string; 
    public age!: number;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;

    static associate(models: any) {
      this.hasOne(models.HomeTop)
    }
  }

  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      surName: {
        type: DataTypes.STRING, 
      },
      age: {
        type: DataTypes.INTEGER,        
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
      },
    },
    {
      modelName: "User",
      sequelize: sequelize,
    }
  );
  return User;
};
