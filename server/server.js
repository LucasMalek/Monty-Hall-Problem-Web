const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const cors = require('cors');

const app = express();
app.use(cors()); 
app.use(bodyParser.json());
app.use('/api', routes);
app.use('/uploads', express.static('uploads'));

const port = 3000;
const uri = "mongodb+srv://user:Us3rpass@montyhallcluster.e1lex.mongodb.net/?retryWrites=true&w=majority&appName=MontyHallCluster";
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function run() {
  try {
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.error("Erro ao conectar com o MongoDB:", error);
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
