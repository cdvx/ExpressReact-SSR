import React, { useContext } from 'react';
import { StoreContext } from './App';

export default (extraProps)=>(Component) => {
    const WithStore = (props) => {
        const store = useContext(StoreContext);
        return <Component 
                {...props}
                {...extraProps(store, props)}
                store={store} 
                />
    }
    WithStore.displayName = `${Component.name}Container`
    return WithStore;
}
