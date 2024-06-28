import EstimationBadValueError from './EstimationBadValueError';

const ALLOWED_VALUES = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'coffee', '?', 'infinite']

class Estimation {
    constructor(private value: string) {
        this.validateValue(value)
    }

    getValue() {
        return this.value
    }

    private validateValue(value: string) {
        if (!ALLOWED_VALUES.includes(value)){
            throw new EstimationBadValueError();
        }
    }
}

export default Estimation
