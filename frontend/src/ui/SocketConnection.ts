import io, { Socket } from 'socket.io-client';

class SocketConnection {
    socket: Socket;

    constructor() {
        this.socket = io.connect( 'http://localhost:3000', { autoConnect: true });
        this.listenEvents();
    }

    joinRoom(roomName: string, username: string) {
        this.socket.emit('join-me', { roomName, username })
    }


    private listenEvents() {
        this.socket.on('users-updated', (payload) => {
            console.info('users-updated --> ', payload.users)
        })
    }
    
}

export default new SocketConnection();
