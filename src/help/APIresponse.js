exports.successResponse = (res, msg) => {
    var resData = {
        status: 1,
        message: msg
    }
    return res.status(201).json(resData)
}

exports.successResponseWithData = (res, msg, data) => {
    var resData = {
        status: 1,
        message: msg,
        data: data
    }
    return res.status(201).json(resData)
}

exports.successResponseList = (res, msg, data) => {
    var resData = {
        status: 1,
        message: msg,
        data
    }
    return res.status(201).json(resData)
}

exports.errorResponse = (res, msg, error) => {
    var resData = {
        status: 0,
        message: msg,
        error
    }
    res.status(500).json(resData)
}

exports.home = (res) => {
    res.status(200).send('Index of app')
}