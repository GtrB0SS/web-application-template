const { MongoClient, ObjectId } = require('mongodb');
const { config } = require('../config/index');

const USER = config.DB_USER;
const PASSWORD = config.DB_PASSWORD;
const DB_HOST = config.DB_HOST;
const DB_NAME = config.DB_NAME;
const DB_PORT = config.DB_PORT;


const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${DB_HOST}/?authSource=admin&replicaSet=TFG-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true`;

class MongoLib {
    constructor(){
        this.client = new MongoClient(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true});
        this.dbName = DB_NAME;
        
        //this.dbName = 'noticias';
    }

    connect() {
        if (!MongoLib.connection){
            MongoLib.connection = new Promise ((resolve, reject) => {
                this.client.connect( err => {
                    if (err) {
                        reject("error en la conexión con la BBDD ", err);
                    }                    
                    console.log('Conectado a la BBDD');
                    resolve(this.client.db(this.dbName));

                })
            })
        }

        return MongoLib.connection;
    }

    getPublicaciones(collection) {
        return this.connect().then(db => {
            return db.collection(collection).find({}, {_id:0}).toArray();
        })
    }

    getPublicacion(collection, pid) {
        return this.connect().then(db => {
            return db.collection(collection).findOne({ id:pid }, {_id:0})
        })
    }  
    
    actualizarPublicacion(collection, pid, data) {
        return this.connect().then(db => {
            return db.collection(collection).updateOne({ id:pid },  { $set: { "favoritos" : data } }, { upsert: true })
        }).then(result => result.insertedId || pid);
    }




    getFavoritos(collection) {
        
        return this.connect().then(db => {
            //return db.collection(collection).find({favoritos:true}, {_id:0}).toArray();
            const array = db.collection(collection).find({favoritos:true}, {_id:0}).toArray();
            console.log(array);
            return array; 
        })
    }

}

module.exports = MongoLib;