const express = require('express');
const cors = require("cors");

const { NotFoundError } = require("./expressError");

const equipmentRoutes = require("./routes/equipments");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());


app.use("/equipments", equipmentRoutes);

app.get('/', (req, res)=>{
    res.status(200);
    res.send("Welcome to Split Systems");
});

app.listen(PORT, (error) =>{
    if(!error)
        console.log(`Server is Successfully Running, and App is listening on port ${PORT}`)
    else 
        console.log("Error occurred, server can't start", error);
    }
);

/** Handle 404 errors -- this matches everything */
app.use(function (req, res, next) {
    return next(new NotFoundError());
  });
  
  /** Generic error handler; anything unhandled goes here. */
  app.use(function (err, req, res, next) {
    if (process.env.NODE_ENV !== "test") console.error(err.stack);
    const status = err.status || 500;
    const message = err.message;
  
    return res.status(status).json({
      error: { message, status },
    });
  });
  
  module.exports = app;