import React, { useContext, useState, useEffect, useMemo } from 'react';
import isEqual from 'lodash.isequal';
import PropTypes from 'prop-types';

// const useForceUpdate =()=> {
//     const [x, setState] = useState(null)
//     return setState
// }

export default (extraProps=()=>{})=>(Component) => {
    return class extends React.Component {
        static displayName = `${Component.name}Container`;
        static contextTypes = {
            store: PropTypes.object
        }
        usedState() {
            return extraProps(this.context.store, this.props)
        }
        state = this.usedState();
        onStoreChange = () => {
            this.setState(this.usedState())
        }

        componentDidMount(){
            this.subscriptionId = this.context.store.subscribe(this.onStoreChange)    
        }
        componentWillUnmount(){
            this.context.store.unSubscribe(this.subscriptionId)
            this.subscriptionId = null;
        }
        shouldComponentUpdate(nextprops, nextState){
            return !isEqual(nextprops, this.props) || !isEqual(nextState, this.state)
        }

        render(){
            return <Component 
                {...this.props}
                {...this.usedState()}
                store={this.context.store} 
                />

        }
        
    }
}
