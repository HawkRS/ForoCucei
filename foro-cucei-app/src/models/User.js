import BaseModel from './Base';

class User extends BaseModel {
    constructor() {
        super({
            model: 'users',
            relations: []
        });
    }
}

export default User;