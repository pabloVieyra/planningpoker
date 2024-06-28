import RoomRepository from "../domain/RoomRepository";

class RoomApiRepository implements RoomRepository {
    joinUser(username: string): Promise<void> {
        throw new Error('Not implemented')
    }
}

export default RoomApiRepository
