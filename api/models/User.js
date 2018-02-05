'use strict'

const Model = require('trails/model')

/**
 * @module User
 * @description User model
 */
module.exports = class User extends Model {

  static config (app, Sequelize) {

    return {
      options: {
        underscored: true,
        classMethods: {
          associate: (models) => {
            models.User.hasMany(models.Passport, {
              foreignKey: 'user_id',
              onDelete: 'CASCADE'
            })
            models.User.hasMany(models.Token, {
              foreignKey: 'user_id',
              onDelete: 'CASCADE'
            })
          }
        }
      }
    }
  }

  static schema (app, Sequelize) {

    let { BOOLEAN, INTEGER, STRING, TEXT } = Sequelize;

    return {

      name: {
        type: STRING,
      },
      username: {
        type: STRING,
        allowNull: false
      },
      email: {
        type: STRING,
        allowNull: false
      },
      country_code: {
        type: STRING,
      },
      mobile: {
        type: STRING,
      },
      type: {
        type: INTEGER,
      },
      status: {
        type: INTEGER,
        defaultValue: 1,
      },
      email_verified: {
        type: BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      email_v_token: {
        type: TEXT,
        allowNull: true,
      },
      mobile_verified: {
        type: BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      mobile_v_code: {
        type: TEXT,
        allowNull: true,
      },
    }
  }
}
