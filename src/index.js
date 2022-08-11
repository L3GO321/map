export class ErrorRepository {
    constructor(key, value) {
        this.caseError = new Map().set(key, value);
    };

    translate(code) {
        if (this.caseError.has(code)) {
            return this.caseError.get(code);
        } else {
            return 'Unknown error';
        }
    }
};

