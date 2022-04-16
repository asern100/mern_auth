const User = require('../models/User')

const userCtrl = {
    register: async (req, res) => {
        try {
            res.json({msg : "register test"})
        }
        catch (err) {
            return res.status(500).json({msg : err.message})
        }
    }
}


module.exports = userCtrl