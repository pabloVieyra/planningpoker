import Estimation from './Estimation';

class Vote {
    constructor(private member: string, private estimation: Estimation) {

    }

    getMember() {
        return this.member
    }

    getEstimation() {
        return this.estimation
    }
}

export default Vote
