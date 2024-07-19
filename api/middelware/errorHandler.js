const errorHandler = async (err, _, res, next) => {
    console.error(err.stack);
    res.status(500).send("Server Error")
    next()
}

module.exports = errorHandler