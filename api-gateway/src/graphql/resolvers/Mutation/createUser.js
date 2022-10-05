import UsersService from "../../../adapters/UsersService"

const createUserResolver = async (obj, { email, password }) => {
    return await UsersService.createUser({ email, password })
}

export default createUserResolver