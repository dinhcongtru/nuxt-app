import mongoose  from 'mongoose';

const MONGO_URI = useRuntimeConfig().MONGO_URI;

const connect = async () => {
    
    const connection = mongoose.connection.readyState;
    if(connection === 1) {
        console.log("connected");
        return;
    }
    if (connection === 2) {
        console.log("connecting...");
        
    }
    try {
        mongoose.connect(MONGO_URI!, {
            dbName: 'nuxt-app',
            bufferCommands: true,
        });
    } catch (error:any) {
        console.log("Error",error);
        throw new Error("Error",error);
        
    }
}

export default connect;