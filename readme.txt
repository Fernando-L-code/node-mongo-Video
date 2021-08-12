Esta es una estrucur basica de un crud conectado con mongo db


Instrucciones

1.-crear dentro de src el archivo config.ts con la siguiente estructura
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
module.exports = {
    db:{
         user: '',
         password: '',
         dbName: '',
         cluster:''
         
    },

    api:{
        port: process.env.API_PORT || 3000,
        
    },
}
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX


