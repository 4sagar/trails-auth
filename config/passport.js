// config/passport.js
'use strict'

const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

const EXPIRES_IN_SECONDS = 60*30
const SECRET = process.env.tokenSecret || 'mysupersecuretoken'
const ALGORITHM = 'HS256'
const ISSUER = 'localhost'
const AUDIENCE = 'localhost'

module.exports = {
  redirect: {
    login: '/',//Login successful
    logout: '/'//Logout successful
  },
  bcrypt: require('bcryptjs'), // custom bcrypt version if you prefer the native one instead of full js
  //Called when user is logged, before returning the json response
  onUserLogged: (app, user) => {
    return Promise.resolve(user)
  },
  //Optional: can be used to merge data from all third party profiles and the default user properties.
  mergeThirdPartyProfile: (user, profile) => {
    const mergedProfile = {
      email: user.email,
      gender: profile.gender
    }
    return Promise.resolve(mergedProfile)
  },
  strategies: {
    jwt: {
      strategy: JwtStrategy,
      tokenOptions: {
        expiresInSeconds: EXPIRES_IN_SECONDS,
        secret: SECRET,
        algorithm: ALGORITHM,
        issuer: ISSUER,
        audience: AUDIENCE
      },
      options: {
        secretOrKey: SECRET,
        issuer: ISSUER,
        audience: AUDIENCE,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
      }
    },
/*
    local: {
      strategy: require('passport-local').Strategy,
      options: {
        usernameField: 'username' // If you want to enable both username and email just remove this field
      }
    }*/

    /*
     twitter : {
     name     : 'Twitter',
     protocol : 'oauth',
     strategy : require('passport-twitter').Strategy,
     options  : {
     consumerKey    : 'your-consumer-key',
     consumerSecret : 'your-consumer-secret'
     }
     },

     facebook : {
     name     : 'Facebook',
     protocol : 'oauth2',
     strategy : require('passport-facebook').Strategy,
     options  : {
     clientID     : 'your-client-id',
     clientSecret : 'your-client-secret',
     scope        : ['email'] // email is necessary for login behavior
     }
     },

     google : {
     name     : 'Google',
     protocol : 'oauth2',
     strategy : require('passport-google-oauth').OAuth2Strategy,
     options  : {
     clientID     : 'your-client-id',
     clientSecret : 'your-client-secret'
     }
     }

     github: {
     strategy: require('passport-github').Strategy,
     name: 'Github',
     protocol: 'oauth2',
     options: {
     clientID     : 'your-client-id',
     clientSecret : 'your-client-secret',
     callbackURL:  'your-app-url' + '/auth/google/callback',
     scope:        [
     'https://www.googleapis.com/auth/plus.login',
     'https://www.googleapis.com/auth/plus.profile.emails.read'
     ]
     }
     }*/
  }
}
