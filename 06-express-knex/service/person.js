const personDAO = require("../dao/person");

class PersonService {
  createPerson(personDTO) {
    const { firstName, lastName, email } = personDTO;
    return personDAO.createPerson(firstName, lastName, email);
  }

  findAll() {
    return personDAO.findAll();
  }

  findById(id) {
    return personDAO.findById(id);
  }
}

module.exports = new PersonService();
