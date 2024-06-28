import Estimation from '../domain/Estimation'

class Vote {
    execute(estimation: Estimation) {
        console.info('Vote --> ', estimation.getValue())
    }
}

export default Vote
