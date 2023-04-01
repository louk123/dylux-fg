
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
≡ *DONACION*
puedes donar si quieres ayudar a mantener el bot activo

▢ *انستاغرام مدير البوت*
• *Link :* instagram/lo9mane.lmalaki
▢ *ࢪقم مدير البوت للتواصل معه*
• *Link :* wa.me/212661809542
`
let img = 'https://i.ibb.co/37FP2bk/donate.jpg'
conn.sendButton(m.chat, don, 'Haga click en boton si quiere comprar o alquilar al bot', img, [['Buy Premium', `${usedPrefix}buyprem`]],m, rpyp)
}

handler.help = ['donate']
handler.tags = ['main']
handler.command = ['apoyar', 'donate', 'donar'] 

export default handler
