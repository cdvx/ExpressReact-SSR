import React from 'react';
import WithStore from './WithStore';

class Timestamp extends React.Component {
    static dateDisplay(timestamp){
        return timestamp.toLocaleTimeString([], {hour12: true,hour:'2-digit', minute:'2-digit'})
    }
    render(){
        return (<div>{ this.props.timestampDisplay }</div>)
    }
}

const extraProps =(store)=> {
    return {
        timestampDisplay: Timestamp.dateDisplay(store.getState().timestamp)
    };
};

export default WithStore(extraProps)(Timestamp);

