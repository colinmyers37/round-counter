const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// require("./routes/routes")(app);
const port = process.env.PORT || 4000;

const { sequelize: any } = require('./database/sequelize');

sequelize
  .sync({ alter: true })
  .then(() => {
    app.listen(port, () =>
      console.log(`DB synced and server running on port ${port}`)
    );
  })
  .catch((err) => console.error(err));
