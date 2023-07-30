const localDB = 'mongodb+srv://FranKissling:Franziska1@cluster0.imr1g2z.mongodb.net/star-wars-quotes'
const currentDB = process.env.MONGODB_URI || localDB
module.exports = currentDB