const AdminBro = require('admin-bro');
const AdminBroExpress = require('admin-bro-expressjs');
const AdminBroMongoose = require('admin-bro-mongoose');

const mongoose = require('mongoose');
const category = require('../models/category');
const manufacturer = require('../models/manufacturer');
const samples = require('../models/samples');
const faq = require('../models/FAQ')

AdminBro.registerAdapter(AdminBroMongoose);

//models controlled only by backend admin

const adminBro = new AdminBro({
  //this adds everything in the database
  databases: [mongoose],
  //to set certain models to be managed by admin only
  //you can do the following.
  resources: [
    {
      resource: category,
      options: {
        parent: {
          name: 'Admin Content',
        },
      },
    },

    {
      resource: manufacturer,
      options: {
        parent: {
          name: 'Admin Content',
        },
      },
    },

    {
      resource: faq,
      options: {
        parent: {
          name: 'Admin Content',
        },
      },
    },

    {
      resource: samples,
      options: {
        parent: {
          name: 'Admin Content',
        },
      },
    },
  ],
  rootPath: '/admin',

  //this is for handling the logo design and add company name
  branding: {
    logo: '../client/public/logo1.jpg',
    companyName: 'Findme',
  },
});

const ADMIN = {
  email: process.env.ADMIN_EMAIL || 'onaiwuosakpolor@gmail.com',
  password: process.env.ADMIN_PASSWORD || 'daniel1995',
};

const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
  cookieName: process.env.ADMIN_COOKIE_NAME || 'admin-bro',
  cookiePassword:
    process.env.ADMIN_COOKIE_PASS ||
    'supersecret-and-long-password-for-a-cookie-in-the-browser',
  authenticate: async (email, password) => {
    if (email === ADMIN.email && password === ADMIN.password) {
      return ADMIN;
    }
    return null;
  },
});

module.exports = router;
