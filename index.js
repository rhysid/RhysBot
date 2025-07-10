const qrcode = require('qrcode-terminal');
const { Client, LocalAuth } = require('whatsapp-web.js');
const commandHandler = require('./command');

const rhys = new Client({
    authStrategy: new LocalAuth({ clientId: "rhys-wa" }),
    puppeteer: { headless: true }
});

rhys.on('qr', (qr) => {
    console.log('📲 Scan QR ini untuk login:');
    qrcode.generate(qr, { small: true });
});

rhys.on('ready', () => {
    console.log('✅ Rhys bot siap digunakan!');
});

rhys.on('message', rhysMsg => {
    if (rhysMsg.body.startsWith('!')) {
        commandHandler(rhysMsg);
    }
});

rhys.initialize();
