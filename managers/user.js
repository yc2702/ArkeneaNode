var userSchema = require('./../models/user')
var fs = require('fs-extra')

module.exports.createUser = function (data, callback) {
    try {

        var image = data.File;
        var fileName = data.ProfileImage;

        this.saveImage(image, fileName, function (err) {
            if (err) {
                callback(err)
            } else {
                userSchema.Users.create(data, function (err, data) {
                    if (err) {
                        callback(err)

                    } else {
                        callback(null, data)
                    }
                })
            }
        })


    } catch (error) {
        console.log(error)

    }

}

module.exports.saveImage = function (data,str, callback) {


    try {
        var name = str.split('\\');
        fs.writeFile(__dirname+'/images/'+ name[name.length-1], data, { encoding: 'base64' }, function (err) {
            //Finished
            if (err) {
                callback(err)
            }
            else {
                callback(null,null)
            }

        });
    } catch (error) {

        console.log(error)

    }
}

module.exports.getAll = function (callback) {
    try {

        userSchema.Users.find(function (err, data) {
            if (err) {
                callback(err)

            } else {
                callback(null, data)
            }
        })

    } catch (error) {
        console.log(error)
    }
}

module.exports.update = function (datas, callback) {
    try {


        this.findById(datas._id, function (err, data) {
            if (err) {

                callback(err)

            } else if (!data) {
                callback(null, null)
            } else {
                userSchema.Users.findOneAndUpdate({ _id: datas._id }, datas, { new: true }, function (err, data) {
                    if (err) {
                        callback(err)

                    } else {
                        callback(null, data)
                    }
                })
            }
        })
    } catch (error) {
        console.log(error)
    }

}

module.exports.delete = function (data, callback) {
    try {

        this.findById(data, function (err, data) {
            if (err) {

                callback(err)

            } else if (!data) {
                callback(null, null)
            } else {

                userSchema.Users.deleteOne({ _id: data._id }, function (err, data) {
                    if (err) {
                       
                        callback(err)

                    } else {
                        callback(null, data)
                    }
                })
            }
        })
    } catch (error) {
        console.log(error)
    }
}


module.exports.findById = function (data, callback) {
    try {

        userSchema.Users.findById({ _id: data }, function (err, data) {
            if (err) {
                callback(err)

            } else {
                
                callback(null, data)
            }
        })

    } catch (error) {
        console.log(error)
    }

}