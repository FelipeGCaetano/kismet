import fetch from 'node-fetch'
import { config } from 'dotenv'

config()

const baseUrl = `http://10.0.30.180:2501`

const credentials = btoa(`${process.env.USER}:${process.env.PASS}`)

class KismetApi {
    async allDevices(){
        try{


        } catch (err) {
            return {message: err.message}
        }
    }

    async devicesBySource({uuid, fields=null}){
        try{
            const url = `${baseUrl}/devices/views/seenby-${uuid}/devices.json` 

            let opt

            if(fields) {
                opt = {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Basic ${credentials}`
                    },
                    body: JSON.stringify({fields})
                }
            } else {
                opt = {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Basic ${credentials}`
                    }
                }
            }

            let devices = await fetch(url, opt)

            if(devices.status == 200) {
                devices = await devices.json()
                return devices
            }
            
        } catch (err) {
            return {message: err.message}
        }
    }
}

export default KismetApi