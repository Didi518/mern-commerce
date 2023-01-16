const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const User = require('../models/userModel');
const sendToken = require('../utils/jwtToken');
const sendEmail = require('../utils/sendEmail');
const crypto = require('crypto');

exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: 'avatars/1',
      url: 'https://res.cloudinary.com/dyorb9ngw/image/upload/v1673738118/ecommern-app/R_gwqezg.jpg',
    },
  });
  sendToken(user, 201, res);
});

exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(
      new ErrorHandler(
        "Merci d'entrer une adresse e-mail et un mot de passe",
        400
      )
    );
  }
  const user = await User.findOne({ email }).select('+password');
  if (!user) {
    return next(new ErrorHandler('E-mail invalide', 401));
  }
  const isPasswordMatched = await user.comparePassword(password);
  if (!isPasswordMatched) {
    return next(new ErrorHandler('Mot de passe invalide', 401));
  }
  sendToken(user, 200, res);
});

exports.logout = catchAsyncErrors(async (req, res, next) => {
  res.cookie('token', null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  res.status(200).json({
    success: true,
    message: 'Déconnexion',
  });
});

exports.forgotPassword = catchAsyncErrors(async (req, res, next) => {
  if (!req.body.email) {
    return next(new ErrorHandler("Merci d'entrer votre adresse e-mail", 400));
  }
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return next(
      new ErrorHandler('Aucun utilisateur retrouvé avec cet e-mail', 404)
    );
  }
  const resetToken = user.getResetPasswordToken();
  await user.save({ validateBeforeSave: false });
  const resetUrl = `${req.protocol}://${req.get(
    'host'
  )}/api/v1/password-reset/${resetToken}`;
  const message = `La réinitialisation de votre mot de passe se fait ici:\n\n${resetUrl}\n\nSi vous n'avez pas demandé cet email, ignorez-le`;
  try {
    await sendEmail({
      email: user.email,
      subject: 'Boutique, récupération de votre mot de passe',
      message,
    });
    res.status(200).json({
      success: true,
      message: `E-mail envoyé à: ${user.email}`,
    });
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save({ validateBeforeSave: false });
    return next(new ErrorHandler(error.message, 500));
  }
});

exports.resetPassword = catchAsyncErrors(async (req, res, next) => {
  const resetPasswordToken = crypto
    .createHash('sha256')
    .update(req.params.token)
    .digest('hex');
  const user = await User.findOne({
    resetPasswordToken,
    resetPassordExprires: { $gt: Date.now() },
  });
  if (!user) {
    return next(
      new ErrorHandler(
        'Réinitialisation du mot de passe échouée: jeton invalide ou expiré',
        400
      )
    );
  }
  if (req.body.password !== req.body.confirmPassword) {
    return next(
      new ErrorHandler('Les mots de passe ne correspondent pas', 400)
    );
  }
  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpires = undefined;
  await user.save();
  sendToken(user, 200, res);
});
