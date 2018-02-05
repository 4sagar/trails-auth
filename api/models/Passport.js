'use strict'

const Model = require('trails/model')

/**
 * @module Passport
 * @description Passport model
 */
module.exports = class Passport extends Model {

  static config (app, Sequelize) {

    return {
      options: {
        underscored: true,
        hooks: {
          beforeCreate: (user, options) => {
            return app.config.passport.bcrypt.hash(user.password, 12)
             .then(hashedPass=> { user.password = hashedPass })
          }
        },
        classMethods: {
          associate: (models) => {
            models.Passport.belongsTo(models.User, {
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

    let { INTEGER, STRING, DATE } = Sequelize;

    return {

      user_id: {
        type: INTEGER,
      },
      protocol: {
        type: STRING,
      },
      password: {
        type: STRING,
      },
      reset_pass_token: {
        type: STRING,
      },
      reset_pass_expiry: {
        type: DATE,
      },
      ip: {
        type: STRING,
      },
    }
  }
}
