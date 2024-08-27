const db = require("../db");



class Equipment {
static async findAll() {
    // Basic query without any filtering applied
    let query = `SELECT model_number AS "modelnumber",
                    description,
                    type
                 FROM equipments`;


    // execute the full query with filter inputs
    const equipmentRes = await db.query(query)
    return equipmentRes.rows;
    }


static async findAllByKeyword(keyword) {
    // Basic query without any filtering applied
    let query = `SELECT model_number AS "modelnumber",
                    description,
                    type
                 FROM equipments WHERE description LIKE '%${keyword}%'`;


    // execute the full query with filter inputs
    const equipmentRes = await db.query(query)
    return equipmentRes.rows;
    }
}

module.exports = Equipment;