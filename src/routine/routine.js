import cron from 'node-cron'

import RegisterDevicesService from "../services/checkDevices.js";

cron.schedule('* */10 * * * *', async () => {
    console.log('Executando')
    const registerDevices = new RegisterDevicesService();
    await registerDevices.execute({nome: 'Varanda'})
})

console.log('Routine services loaded.')