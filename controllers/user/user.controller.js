import User from '../../database/mysql/model/user.model.js';
const createUser = async() => {
const jane = await User.create({ firstName: "Jane", lastName: "Doe" });
console.log("Jane's auto-generated ID:", jane.id);

}
export {createUser};