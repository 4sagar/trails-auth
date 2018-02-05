'use strict'

const Model = require('trails/model')

/**
 * @module Token
 * @description Token model
 */
module.exports = class Token extends Model {

  static config (app, Sequelize) {

    return {
      options: {
        underscored: true,
        classMethods: {
          associate: (models) => {
            models.Token.belongsTo(models.User, {
              targetKey: 'id',
              foreignKey: 'user_id',
              onDelete: 'CASCADE'
            })
          }
        }
      }
    }

  }

  static schema (app, Sequelize) {

    let { INTEGER, STRING, TEXT } = Sequelize;

    return {

      user_id: {
        type: INTEGER,
      },
      token: {
        type: TEXT,
      },
      ip: {
        type: STRING,
      },
    }
  }
}
