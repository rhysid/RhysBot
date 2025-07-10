module.exports = async function(rhys) {
    const command = rhys.body.split(' ')[0].slice(1).toLowerCase();
    const args = rhys.body.split(' ').slice(1);

    switch (command) {
        case 'ping':
            await rhys.reply('🏓 Pong dari Rhys!');
            break;

        case 'halo':
            await rhys.reply(`👋 Hai juga, ${rhys.from.split('@')[0]}!`);
            break;

        case 'help':
            await rhys.reply(`📜 Daftar perintah Rhys:
- !ping
- !halo
- !help`);
            break;

        default:
            await rhys.reply('❓ Perintah tidak dikenal. Ketik *!help* untuk bantuan.');
    }
};
