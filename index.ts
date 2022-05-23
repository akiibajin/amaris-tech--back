import server from "./app";
import bcrypt from "bcryptjs"
import database from "./src/database/postgres/models/index"

database.sequelize.sync({ force: true }).then(async () => {
    console.log("database connected")
    await database.User.create({
        name:"hector",
        surName:"Robayo",
        email:"julianrobayo8000@gmail.com",
        password: bcrypt.hashSync("123", 8),
        age: 22
    })
    server.listen(server.get("PORT"), () => {
      console.log("server listen on port:", server.get("PORT"))
    });
  })