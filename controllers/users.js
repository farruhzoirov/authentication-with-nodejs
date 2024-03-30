exports.getSignup = (req, res, next) => {
  res.render('auth/signup', {
    pageTitle: 'Sign-Up',
  })
};