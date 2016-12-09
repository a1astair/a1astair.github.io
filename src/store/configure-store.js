if (process.env.NODE_ENV === 'production') {
  console.log(">>>>>>>> production build <<<<<<<<");
  module.exports = require('./configure-store.prod')
} else {
  console.log(">>>>>>>> development build <<<<<<<<");
  module.exports = require('./configure-store.dev')
}
