const MongoClient = require('mongodb').MongoClient;

const connectDB = async () => {
  try {
    const client = new MongoClient(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const connection = await client.connect();

    console.log(`MongoDB Connected: ${connection.s.options.dbName}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
