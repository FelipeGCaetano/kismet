import mongoose from '../index.js'

const ClientSchema = new mongoose.Schema({
    uuid: {
        type: String,
        unique: true,
        require: true
    },
    nome: {
        type: String,
        unique: true,
        require: true
    }
}, {versionKey: false})

const dbClient = mongoose.model('dbClient', ClientSchema)

export default dbClient