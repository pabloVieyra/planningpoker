interface RoomRepository {
    joinUser(username: string): Promise<void>;
}

export default RoomRepository
