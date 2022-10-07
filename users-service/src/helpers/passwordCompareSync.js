import bcrypt from "bcryptjs";

export const passwordCompareSync = (passwordToTest, passwordHash) => {
    bcrypt.compareSync(passwordToTest, passwordHash)
}