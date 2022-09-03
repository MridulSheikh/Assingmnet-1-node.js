module.exports.success_sataus = (data) => {
    res.status(200).send({
        success: true,
        message: "Success",
        data: data,
    })
}