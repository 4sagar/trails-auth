/**
 * Routes Configuration
 * (trails.config.routes)
 *
 * Configure how routes map to views and controllers.
 *
 * @see http://trailsjs.io/doc/config/routes.js
 */

'use strict'

module.exports = [

  /**
   * Render the HelloWorld view
   */
  {
    method: 'GET',
    path: '/',
    handler: 'ViewController.helloWorld'
  },

  /**
   * Constrain the DefaultController.info handler to accept only GET requests.
   */
  {
    method: [ 'GET' ],
    path: '/api/v1/default/info',
    handler: 'DefaultController.info'
  },

  // Authentication APIs
  {
    method: 'POST',
    path: '/api/v1/auth/signup',
    handler: 'AuthController.signup',
    config: { id: "AuthValidator.signup" }
  },
  {
    method: 'POST',
    path: '/api/v1/auth/login',
    handler: 'AuthController.login',
    config: { id: "AuthValidator.login" }
  },
  {
    method: 'GET',
    path: '/api/v1/auth/logout',
    handler: 'AuthController.logout'
  },
  {
    method: 'POST',
    path: '/api/v1/auth/password/forget',
    handler: 'AuthController.forgetPassword',
    config: { id: "AuthValidator.forgetPassword" }
  },
  {
    method: 'POST',
    path: '/api/v1/auth/password/reset',
    handler: 'AuthController.resetPassword',
    config: { id: "AuthValidator.resetPassword" }
  },
  {
    method: 'POST',
    path: '/api/v1/verify-email',
    handler: 'AuthController.verifyEmail',
    config: { id: "AuthValidator.verifyEmail" }
  },
  {
    method: 'POST',
    path: '/api/v1/verify-email/resend',
    handler: 'AuthController.resendVerifyEmail',
    config: { id: "AuthValidator.resendVerifyEmail" }
  },
]
