const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity");

const dbName = "Celebrity-Project";
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name: "Ellen Degeneres",
    occupation: "Comedian",
    catchPhrase: "Let's Dance"
  },
  {
    name: "Robert De Niro",
    occupation: "Actor",
    catchPhrase:
      "Time goes on. So whatever you're going to do, do it. Do it now. Don't wait."
  },
  {
    name: "Mark Zuckerberg",
    occupation: "Entrepreneur",
    catchPhrase:
      "The question isn't 'What do we want to know about people?' It's, 'What do people want to tell about themselves?"
  }
];
Celebrity.create(celebrities, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${celebrities.length} celebrities`);
  mongoose.connection.close();
});
