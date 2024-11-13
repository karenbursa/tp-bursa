const https = require('https');

const url = 'https://reclutamiento-dev-procontacto-default-rtdb.firebaseio.com/reclutier.json';

//funcion para obtener los registro de la api y mostrarlos por consola
function fetchdata(){
    https.get(url,(response)=>{

    let data='';
    //recibe datos en fragmentos
    response.on('data', (chunk)=>{
        data+= chunk; //los datos que trae los sumo a data

    });
    response.on('end', ()=>{
        try{//lo parseo a json para mostrarlos por consola
            const jsondata = JSON.parse(data);

            console.log ('registros obtenidos:', jsondata);

        }catch(error){ //detectar error al parsear
                console.error('error al parsear los datos', error);
        }
    });

    }).on('error', (error)=>{ //si no pude parsear no puedo obtener registros
        console.error('error al obtener los registros', error);
    });

}

fetchdata();