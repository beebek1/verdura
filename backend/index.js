const cors = require("cors")
const express = require("express");
const app = express();
const { sequelize, connectDB } = require("./db/database");

app.use(cors({
  origin: "http://localhost:5173",  // frontend URL
  credentials: true                  // allow cookies, auth headers
}));

//middleware
app.use(express.json());


//userRoutes and productRoutes
app.use("/api/auth", require('./routes/authRoute'));
app.use("/api/user", require('./routes/userRoute'));

app.get("/",(req,res) =>{
    res.json({message: "Welcome to the Home Page"});
});

//start server
const startServer = async () => {
    const PORT = process.env.PORT || 3000;
    await connectDB(); 
    await sequelize.sync({force: true});              //force and sync
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
};

startServer();