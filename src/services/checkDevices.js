import KismetApi from "../common/kismet.js"
import dbClient from "../database/models/client.js"
import dbDevices from "../database/models/devices.js"

const kismet = new KismetApi()

class RegisterDevicesService {
    async execute({nome}){
        try {
            const client = await dbClient.findOne({nome})

            const devices = await kismet.devicesBySource({uuid: client.uuid, fields: ["kismet.device.base.name"]})

            const registerDevices = await dbDevices.create({
                client_uudi: client.uuid,
                nome,
                devices: devices.length
            })

            return registerDevices

        } catch(err) {
            return {message: err.message}
        }
    }
}

export default RegisterDevicesService