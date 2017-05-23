import BaseModel from './Base';

class Tutorial extends BaseModel {
    constructor() {
        super({
            model: 'tutorials',
            relations: ['account']
        });
    }
}

export default Tutorial;