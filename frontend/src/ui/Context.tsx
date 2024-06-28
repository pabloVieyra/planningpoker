
import { createContext, useState, useContext as useContextReact } from 'react';
import Vote from '../core/useCases/Vote';

interface ContextType {
    userName: string
    members: string[]
    votes: Vote[]

    addNewMember: (member: string) => void;
}

const Context = createContext<ContextType>({
    userName: '',
    members: [],
    votes: [],

    addNewMember: () => {},
});

export const useContext = () => {
    return useContextReact(Context);
}

interface ContextProviderProps {
    children: React.ReactElement;
    userName: string;
}
export const ContextProvider: React.FC<ContextProviderProps> = ({ children, userName }) => {
    const [state, setState] = useState<ContextType>({
        userName,
        members: [],
        votes: [],

        addNewMember: () => {},
    });

    const addNewMember = (member: string) => {
        setState((prevState) => {
            return ({
                ...prevState,
                members: [...prevState.members, member],
            });
        })
    }

    return (
        <Context.Provider value={{ ...state, addNewMember }}>
            {children}
        </Context.Provider>
    );
};

export default Context
