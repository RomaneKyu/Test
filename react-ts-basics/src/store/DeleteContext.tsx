import React, { ReactNode, useContext } from 'react';

type IDelFnType = (id:number) => void
interface IDeleteContext {delFn: IDelFnType;}

const DeleteContext = React.createContext<IDeleteContext>({delFn: () => {}});

export function DeleteProvider ({children, delFn}: {children: ReactNode, delFn: IDelFnType}) {
    return (
    <DeleteContext.Provider value={{delFn}}>
        {children}
    </DeleteContext.Provider>
    );
}
export default DeleteContext


export function useDelete () {
    
    const {delFn} = useContext(DeleteContext);
    return {delFn};
}