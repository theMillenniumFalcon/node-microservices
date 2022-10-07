import { UsersService } from '../../adapters/UsersService';

export const UserSession = {
    user: async userSession => {
        return await UsersService.fetchUser({ userId: userSession.userId })
    }
}