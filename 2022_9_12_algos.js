
// /* 
//   Recreate Object.entries method
//   Given an object,
//   return an array of arrays of the object's key value pairs, where each key value pair is a 2 item array
//   Do not include key value pairs from the given objects prototype (these are included by default when looping over an object's keys)
// */

// const obj1 = {
//     name: 'Pizza',
//     calories: 9001,
//   };

//   const expected1 = [
//     ['name', 'Pizza'],
//     ['calories', 9001],
//   ];

//   const proto = { inheritance: 'inherited key', keyOnProto: 'val from proto' };

//   // This object contains inherited key value pairs from the above proto obj.
//   const obj2 = Object.assign(Object.create(proto), {
//     firstName: 'Foo',
//     lastName: 'Bar',
//     age: 13,
//   });

//   const expected2 = [
//     ['firstName', 'Foo'],
//     ['lastName', 'Bar'],
//     ['age', 13],
//   ];

//   /**
//    * Returns a 2d array of key value pairs from the given obj.
//    * - Time: O(?).
//    * - Space: O(?).
//    * @param {Object} obj
//    * @typedef {Array<Array<string, any>>} output The nested array should look
//    *    like [key, val]
//    * @returns {output}
//    */
//   function entries(obj) {
//     const keys = Object.keys(obj)
//     const values = Object.values(obj)
//     const array = []
//     for (i=0; i<keys.length; i++){
//         const temp = []
//         temp.push(keys[i], values[i])
//         array.push(temp)
//     }
//     return array
//   }

// NEILS




// console.log(entries(obj1))
// console.log(entries(obj2))


/* 
  Given a table name string and an object whose key value pairs represent column names and values for the columns
  return a SQL insert statement string
  Tip: string interpolation (using back ticks, the key to the left of num 1 key) make it easy to add variables into a string or to add quotations without needing to escape them.
  Bonus: after solving it, write a 2nd solution focusing on functional programming using built in methods
*/
/**
 * Generates a SQL insert statement from the inputs
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} tableName
 * @param {Object} columnValuePairs
 * @returns {string} A string formatted as a SQL insert statement where the
 *    columns and values are extracted from columnValuePairs.
 */

const table = 'users';
const insertData1 = { first_name: 'John', last_name: 'Doe' };
const expected1 =
    "INSERT INTO users (first_name, last_name) VALUES ('John', 'Doe');";

// Bonus:
const insertData2 = {
    first_name: 'John',
    last_name: 'Doe',
    age: 30,
    is_admin: false,
};
const expected2 =
    "INSERT INTO users (first_name, last_name, age, is_admin) VALUES ('John', 'Doe', 30, false);";
// Explanation: no quotes around the int or the bool, technically in SQL the bool would become a 0 or 1, but don't worry about that here.

// function insert(tableName, columnValuePairs) {
//     const keys = Object.keys(columnValuePairs)
//     const values = Object.values(columnValuePairs)
//     const userString = `INSERT INTO ${tableName} (`
//     const valueString = ") VALUES ("
//     const closingString = ");"
//     userString += keys[0]
//     valueString += values[0]
//     for (let i = 1; i < keys.length; i++) {
//         userString += `, ${keys[i]}`
//         valueString += `, '${values[i]}'`
//     }
//     return userString + valueString + closingString
// }

//NEILS ANSWER

function entries(obj) {
    const keyValPairs = [];

    for (const key in obj) {
        if (obj.hasOwnProperty(key)){
            const val = obj[key];

            keyValPairs.push([key, val]);
        }
    }
    return keyValPairs;
}

function insert(tableName, columnValuePairs) {
    let columns = '';
    let values = '';

    for (const colName in columnValuePairs) {
        if (columnValuePairs.hasOwnProperty(colName)) {
            let val = columnValuePairs[colName];

            if (typeof val === 'string') {
                val = `'${val}'`;
            }

            if (columns === '') {
                columns += colName;
            }
            else {
                columns += `, ${colName}`;
            }

            if (values === '') {
                columns += colName;
            } else {
                columns += `, ${colName}`;
            }

            if (values === '') {
                values += val;
            } else {
                values += `, ${val}`;
            }
        }
    }
    return `INSERT INTO ${tableName} (${columns}) VALUES (${values});`;
}


console.log(insert(table, insertData1))
console.log(insert(table, insertData2))

/**
 * - Time: O(?).
 * - Space: O(?).
 */
function insertFunctional(tableName, columnValuePairs) { }