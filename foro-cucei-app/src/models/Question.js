import BaseModel from './Base';

class Question extends BaseModel {
    constructor() {
        super({
            model: 'questions',
            relations: ['account']
        });
    }
}

export default Question;