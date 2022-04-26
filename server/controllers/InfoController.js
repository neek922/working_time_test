import InfList from "../models/Information.js";

class InfoController {
    async create(req, res) {
        try {
            const { days, hours } = req.body
            const info = await InfList.create({ days, hours })
            res.json(info)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getAll(req, res) {
        try {
            const info = await InfList.find()
            return res.json(info)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    // async update(req, res) {
    //     try {
    //         const info = req.body
    //         if (!info._id) {
    //             res.status(400).json({message: 'Id не вказано'})
    //         }
    //         const updateInfo = await InfList.findByIdAndUpdate(info._id, info, {new: true})
    //         return res.json(updateInfo)
    //     } catch (e) {
    //         res.status(500).json(e)
    //     }
    // }
    // async delete(req, res) {
    //     try {
    //         const {id} = req.params
    //         if (id) {
    //             res.status(400).json({message: 'Id не вказано'})
    //         }
    //         const info = await InfList.findByIdAndDelete(id)
    //         return res.json(info)
    //     } catch (e) {
    //         res.status(500).json(e)
    //     }
    // }

}

export default new InfoController();