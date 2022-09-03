const find_random = require("../local_modules/random");
let data = require("../public/a.json");

module.exports.getAllusers = (req, res) => {
    res.status(200).send({
        status: "OK",
        success: true,
        message: "Success",
        users: data,
    })
}

module.exports.getRandomuser = async (req, res) => {
    const user = find_random(data)
    res.status(200).send({
        status: "OK",
        success: true,
        message: "Success",
        user: user,
    })
}

module.exports.postRandomuers = async (req, res) => {
    const body = req.body;
    const obj = {
        id : data.length+1,
        body
    }
    await data.push(obj);
    res.status(200).send({
        status: "OK",
        success: true,
        message: "Success",
        post_user: obj
    })
}

module.exports.updateRandomuser = async (req, res) => {
    const newdata = req.body;
    const filter = await data.find(user => user.id == newdata.id)
    if (filter) {
        newdata.name && (filter.body.name = newdata.name);
        newdata.contact && (filter.body.contact = newdata.contact);
        newdata.address && (filter.body.address = newdata.address);
        newdata.gender && (filter.body.gender = newdata.gender);
        newdata.photoUrl && (filter.body.photoUrl = newdata.photoUrl);
        res.status(200).send({
            status: "OK",
            success: true,
            message: "Success",
            users: filter
        })
    }
    else {
        res.status(404).send({
            success: false,
            message: "user not found",
            query: newdata
        })
    }
}

module.exports.deletUser = async (req, res) => {
       const {id} = req.params;
       data = data.filter(usr => usr.id != id);
       res.status(200).send({
        success: true,
        message: "Delete Success",
        query: data
    })
}