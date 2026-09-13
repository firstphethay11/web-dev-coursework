import { doQuery} from "../mysql.db.js";
import { UserModels, TableName } from './user.schema.js'
const UserService = {
createUser: (payload) =>{
return doQuery(`INSERT INTO ${TableName} SET ?`,payload)
}
}
export default UserService
