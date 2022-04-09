const PersonService = require("../service/person");

class PersonController {
  async createPerson(req, res) {
    try {
      const id = await PersonService.createPerson(req.body);
      res.status(201).json(id);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

module.exports = new PersonController();
