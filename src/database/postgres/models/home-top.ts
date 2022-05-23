"use strict";
import { HomeTopAttributes } from "../../../core/home-content/home-content.interface";
import { Model, UUIDV4 } from "sequelize";


module.exports = (sequelize:any,DataTypes:any)=>{
class HomeTop
  extends Model<HomeTopAttributes>
  implements HomeTopAttributes
{ 
  public id!: string;
  public contentTitle!: string;
  public contentSpan!: string;
  public buttonStartContent!: string;
  public aHrefcontent!: string;
  public additionalContent: string[] | undefined;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
  
  static associate(models:any){
    // this.belongsTo(models.User)
  }
}

HomeTop.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      primaryKey: true,
    },
    contentTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contentSpan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    aHrefcontent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    buttonStartContent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    additionalContent: {
      type: DataTypes.ARRAY(DataTypes.STRING),      
    },
  },
  {
    modelName: "HomeTop",
    sequelize: sequelize,
  }
);
  return HomeTop
}