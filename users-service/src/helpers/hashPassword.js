import bcrypt from "bcryptjs"

export const hashPassword = password => bcrypt.hashSync(password, bcrypt.genSaltSync(12))

