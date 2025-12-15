import Recordatorio from "../Services/Recordatorios.js"



const insertRecordatorio = async (req, res) => {
    const recordatorio= req.body
    
    
    
    console.log(recordatorio,"hola")
    try {
        console.log(recordatorio)
        await Recordatorio.insertRecordatorio(recordatorio);
         res.status(200).json({ message: "Se ha insertado Correctamente",recordatorio });
    }
   catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Error al insertar en base de datos' });
  }
}

const getRecbyMail =  async (req, res) => {
    const { mail_usuario } = req.params;
    console.log(mail_usuario,'controller')
    try {
        const rows = await Recordatorio.getRecbyMail(mail_usuario);
        res.status(200).json({ message: "Se ha encontrado Correctamente",rows });
        console.log(rows,'rows' )
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Error al buscar en base de datos' });
    }
}
export default {
    insertRecordatorio,
    getRecbyMail
}