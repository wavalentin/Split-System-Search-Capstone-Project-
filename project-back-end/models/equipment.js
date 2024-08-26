const db = require("../db");



class Equipment {
static async findAll() {
    // Basic query without any filtering applied
    let query = `SELECT model_number AS "modelnumber",
                    description,
                    type,
                    image_url AS "imageUrl"
                 FROM equipments`;
    let queryValues = [];

    // execute the full query with filter inputs
    const equipmentRes = await db.query(query, queryValues)
    return equipmentRes.rows;
    }
}


module.exports = Equipment;