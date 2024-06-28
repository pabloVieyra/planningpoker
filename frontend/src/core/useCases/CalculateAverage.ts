import Estimation from '../domain/Estimation'

class CalculateAverage {
    execute(votes: Estimation[]) {
        console.info('CalculateAverage --> ', votes.map((vote) => vote.getValue()))
    }
}

export default CalculateAverage
