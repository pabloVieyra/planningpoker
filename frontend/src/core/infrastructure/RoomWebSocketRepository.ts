import RoomRepository from '../domain/RoomRepository';
import socketConnection from '../../ui/SocketConnection';

const DEFAULT_ROOM_NAME = 'default';

class RoomWebSocketRepository implements RoomRepository {
    async joinUser(username: string): Promise<void> {
        socketConnection.joinRoom(DEFAULT_ROOM_NAME, username)
    }
}

export default RoomWebSocketRepository
