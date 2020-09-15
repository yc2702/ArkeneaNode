
const userManager = require('./../managers/user')


module.exports.createUser = function (req, res) {

    //data validation remaining

    userManager.createUser(req.body, function (err, data) {
        if (err) {
            console.log(err)
            return res.status(500).json({ 'msg': err })
        } else {

            return res.status(200).json({ 'msg': 'User Created', "data": data })
        }
    })

}


module.exports.getAll = function (req, res) {
    userManager.getAll(function (err, data) {
        if (err) {
            return res.status(500).json({ 'msg': err })
        } else {
            return res.status(200).json({ 'msg': 'User List', "data": data })
        }
    })


}

module.exports.userUpdate = function (req, res) {

    userManager.update(req.body, function (err, data) {
        if (err) {
            console.log(err)
            return res.status(500).json({ 'msg': err })
        } else if (data == null) {
            return res.status(200).json({ 'msg': 'No Data Found', "data": 'No Data Found' })
        } else {
            return res.status(200).json({ 'msg': 'User Updated', "data": data })
        }
    })
}

module.exports.userDelete = function (req, res) {

    var id = req.params.id


    userManager.delete(id, function (err, data) {
        if (err) {
            return res.status(500).json({ 'msg': err })
        } else if (data == null) {
            return res.status(200).json({ 'msg': 'No Data Foundt', "data": 'No Data Found' })
        } else {
            return res.status(200).json({ 'msg': 'User Deleted', "data": 'user Deleted' })
        }
    })
}

module.exports.getDetails = function (req, res) {
    var id = req.params.id
    userManager.findById(id, function (err, data) {
        if (err) {
            console.log(err)
            return res.status(500).json({ 'msg': err })
        } else if (data == null) {
            return res.status(200).json({ 'msg': 'User Detail', "data": 'No Data Found' })
        } else {
            return res.status(200).json({ 'msg': 'User Detail', "data": data })
        }
    })
}