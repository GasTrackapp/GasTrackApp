import { connection, models } from "./src/db";
import app from "./src/app";
import { seedUsers, seedHobbies } from "./src/env/seeds";

const { User, Hobby } = models;

connection
  .sync({ force: true })
  .then(() => {
    console.log("database connected");
    app.listen(3001, async () => {
      console.log("App is listening on port 3001!");

      const hobbies = await Hobby.findAll();
      if (hobbies.length < 1) {
        await seedHobbies();
      }

      const users = await User.findAll();
      if (users.length < 1) {
        await seedUsers();
      }

    });
  })
  .catch((err) => console.error(err));
