import mongoose from '../index.js'

const DevicesSchema = new mongoose.Schema({
    client_uudi: {
        type: String,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    devices: {
        type: Number,
        required: true
    },
    data: {
        type: Date,
        default: Date.now()
    }
}, {versionKey: false})

const dbDevices = mongoose.model('dbDevices', DevicesSchema)

export default dbDevices