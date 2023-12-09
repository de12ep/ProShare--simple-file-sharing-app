import mongoose from 'mongoose';

const DBconnection  = async  ()=>{
    const MONODB_URL = `mongodb://deepak7085kumar:8470045519@ac-0yv1plq-shard-00-00.yjfzdbd.mongodb.net:27017,ac-0yv1plq-shard-00-01.yjfzdbd.mongodb.net:27017,ac-0yv1plq-shard-00-02.yjfzdbd.mongodb.net:27017/?ssl=true&replicaSet=atlas-jdy5x4-shard-0&authSource=admin&retryWrites=true&w=majority`;
 try{
    await mongoose.connect(MONODB_URL,{usenewUrlParser: true});
    console.log('Database connected succesfully');
 }catch{
    console.error('Error while connecting with the database',error.message);
 }
}
export default DBconnection;