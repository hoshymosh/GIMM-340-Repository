const connection = require('./connection');

async function getAll(parameters = {}) {
    let selectSql = `SELECT 
    sc.*, 
    d1.category AS diet_one_id_category,
    d2.category AS diet_two_id_category
    FROM slime_combos sc
    INNER JOIN diet d1 ON sc.diet_one_id = d1.id
    INNER JOIN diet d2 ON sc.diet_two_id = d2.id`,
        whereStatements = [],
        orderByStatements = [],
        queryParameters = [];

    if (typeof parameters.id !== 'undefined' && parameters.id.length > 0) {
        whereStatements.push('d.id = ?');
        queryParameters.push(parameters.id);
    }
    if (typeof parameters.name !== 'undefined' && parameters.name.length > 0) {
        whereStatements.push('name LIKE ?');
        queryParameters.push(`%${parameters.name}%`);
    }
    if (typeof parameters.slime_one !== 'undefined' && parameters.slime_one.length > 0) {
        whereStatements.push('slime_one = ?');
        queryParameters.push(parameters.slime_one);
    }
    if (typeof parameters.slime_two !== 'undefined' && parameters.slime_two.length > 0) {
        whereStatements.push('slime_two = ?');
        queryParameters.push(parameters.slime_two);
    }

    if (typeof parameters.diet_one_id !== 'undefined' && parameters.diet_one_id.length > 0) {
        whereStatements.push('diet_one_id = ?');
        queryParameters.push(parameters.diet_one_id);
    }
    if (typeof parameters.diet_two_id !== 'undefined' && parameters.diet_two_id.length > 0) {
        whereStatements.push('diet_two_id = ?');
        queryParameters.push(parameters.diet_two_id);
    }
    if (typeof parameters.food_one !== 'undefined' && parameters.food_one.length > 0) {
        whereStatements.push('food_one = ?');
        queryParameters.push(parameters.food_one);
    }
    if (typeof parameters.food_two !== 'undefined' && parameters.food_two.length > 0) {
        whereStatements.push('food_two = ?');
        queryParameters.push(parameters.food_two);
    }
    if (typeof parameters.toy_one !== 'undefined' && parameters.toy_one.length > 0) {
        whereStatements.push('toy_one = ?');
        queryParameters.push(parameters.toy_one);
    }
    if (typeof parameters.toy_two !== 'undefined' && parameters.toy_two.length > 0) {
        whereStatements.push('toy_two = ?');
        queryParameters.push(parameters.toy_two);

    }

    if (typeof parameters.sort_by !== 'undefined' && typeof parameters.sort !== 'undefined') {
        orderByStatements.push(`${parameters.sort_by} ${parameters.sort}`);
    }

    if (whereStatements.length > 0) {
        selectSql = selectSql + ' WHERE ' + whereStatements.join(' AND ');
    }

    if (orderByStatements.length > 0) {
        selectSql = selectSql + ' ORDER BY ' + orderByStatements.join(', ');
    }

    if (typeof parameters.limit !== 'undefined' && parameters.limit > 0) {
        selectSql = selectSql + ' LIMIT ' + parseInt(parameters.limit);
    }



    console.log('Generated SQL:', selectSql);
    console.log('Query Parameters:', queryParameters);

    return await connection.query(selectSql, queryParameters);


}

async function getById(id) {
    let selectSql = `SELECT * FROM slime_combos WHERE id = ?`,

        queryParameters = [id];


    return await connection.query(selectSql, queryParameters);
}

async function insert(paramaters = {}) {
    let insertSQL = `INSERT INTO slime_combos ( name, slime_one, image_one, slime_two, image_two, diet_one_id, diet_two_id, food_one, food_two, toy_one, toy_two) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        queryParameters = [
            paramaters.name,
            paramaters.slime_one,
            paramaters.image_one,
            paramaters.slime_two,
            paramaters.image_two,
            parseInt(paramaters.diet_one_id),
            parseInt(paramaters.diet_two_id),
            paramaters.food_one,
            paramaters.food_two,
            paramaters.toy_one,
            paramaters.toy_two
        ];
    return await connection.query(insertSQL, queryParameters);
}

async function edit(id, paramaters = {}) {
    console.log('edit', id, paramaters);
    let updateSQL = `UPDATE slime_combos 
                        SET name = ?,
                            slime_one = ?,
                            image_one = ?,
                            slime_two = ?,
                            image_two = ?,
                            diet_one_id = ?,
                            diet_two_id = ?,
                            food_one = ?,
                            food_two = ?,
                            toy_one = ?,
                            toy_two = ?
                        WHERE id = ?`;
    queryParameters = [
        paramaters.name,
        paramaters.slime_one,
        paramaters.image_one,
        paramaters.slime_two,
        paramaters.image_two,
        parseInt(paramaters.diet_one_id),
        parseInt(paramaters.diet_two_id),
        paramaters.food_one,
        paramaters.food_two,
        paramaters.toy_one,
        paramaters.toy_two,
        parseInt(id)
    ];
    return await connection.query(updateSQL, queryParameters);

}

async function remove(id) {
    let removeSql = `DELETE FROM slime_combos WHERE id = ?`, queryParameters = [parseInt(id)];
    return await connection.query(removeSql, queryParameters);
}

module.exports = {
    getAll,
    getById,
    insert,
    edit,
    remove
}
