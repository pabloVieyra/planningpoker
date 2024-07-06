import RoomRepository from '../domain/RoomRepository'

class JoinRoom {
    constructor (private roomRepository: RoomRepository) {

    }
    
    async execute(userName: string) {
        await this.roomRepository.joinUser(userName)
    }
}

export default JoinRoom
