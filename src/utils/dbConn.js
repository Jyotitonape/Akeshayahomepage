import { MongoClient } from 'mongodb';

const MONGODB_URI = 'mongodb://127.0.0.1:27017/your_database_name'; // Replace 'your_database_name' with your actual database name

let cachedClient = null;

export async function connectToDatabase() {
    if (cachedClient) {
        return cachedClient;
    }

    try {
        const client = await MongoClient.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        cachedClient = client;
        return client;
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
}
