const truco_controllers = {
    getAll: async (req, res, next) => {
        try{
            res.send({"saludo": "hola"})
        } catch (err) {
            next(err)
        }
    }
}

module.exports = truco_controllers