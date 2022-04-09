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

  async findAll(req, res) {
    try {
      const people = await PersonService.findAll();
      res.json(people);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  async findById(req, res) {
    try {
      const person = await PersonService.findById(req.params.id)
      if (person == null) {
        res.status(404).json({ message: `id = '${req.params.id}' not found`})
      } else {
        res.json(person)
      }
    } catch (err) {
      res.status(400).json({ message: err.message})

    }
  }
}

module.exports = new PersonController();
