const customerPostMiddleware = (req, res, next) => {
    const { body } = req

    if (body.hi === 'ha') {
        next();
    } else {
        res.send('Fail')
    }
}


module.exports = { customerPostMiddleware }