import React from 'react';
import WithStore from './WithStore';

// if (process.env.NODE_ENV === 'development') {
//     const whyDidYouRender = require('@welldone-software/why-did-you-render');
//     whyDidYouRender(React, {
//       trackAllPureComponents: true,
//     });
//   }


class Timestamp extends React.Component {
    static dateDisplay(timestamp){
        return timestamp.toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})
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

