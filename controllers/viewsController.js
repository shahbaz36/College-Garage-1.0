const catchAsync = require("../utils/catchAsync");

exports.homepage = catchAsync(async (req, res, next) => {
    res.status(200).render('homepage', {
        title: 'Home Page'
    })
})

exports.footer = catchAsync(async (req, res, next) => {
    res.status(200).render('_footer', {
        title: 'Footer'
    })
})
exports.header = catchAsync(async (req, res, next) => {
    res.status(200).render('_header', {
        title: 'Header'
    })
})
exports.base = catchAsync(async (req, res, next) => {
    res.status(200).render('base', {
        title: 'base'
    })
})