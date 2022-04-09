const db = require("../db/db");

class PersonDAO {
  async createPerson(firstName, lastName, email) {
    const [id] = await db("person")
      .insert({
        email,
        first_name: firstName,
        last_name: lastName,
      })
      .returning("id");

    return id;
  }

  async findAll() {
    const people = await db.select().table("person").returning("*");

    return people;
  }

  async findById(id) {
    const person = await db("person").where("id", id).returning("*");

    return person;
  }
}

module.exports = new PersonDAO();
