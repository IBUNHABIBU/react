import React, { Component } from 'react'
// import ErrorComponent from './ErrorComponent'

const ErrorComponent = (props) => <div> {props.ignore} Hello Hello</div>

export default class Counter extends Component {
    constructor(props) {
        console.log("constructor")
        super(props)
    
        this.state = {
             counter: 0,
             initializing: true
        }
        this.increment = () => this.setState({ counter: this.state.counter + 1 })
        this.decrement = () => this.setState({ counter: this.state.counter -1 })  
    }
    static getDerivedStateFromProps(props, state){
        if(props.seed && state.seed !== props.seed ){
            return {
                seed: props.seed,
                counter: props.seed 
            }
        }
        return null;
    }
    componentDidCatch(error, info){
        console.log("component did catch")
        console.log('++++++++++++++++++++++++ERROR+++++++++++++++++++++++++')
        this.setState({ error, info })
    }
    componentDidMount(){
        console.log("Component did mount")
        this.setTimeout(() => {
            this.setState({ initializing: false })
        }, 500);
        console.log("******************************************")
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("Get snap before update")
        console.log("``````````````````````````````````````````````")
        return null 
    }

    render() {
        console.log("render", this.state.error)
        if(this.state.initializing) {
            return <div> initializing ...</div>
        }
        if(this.props.showErrorComponent && this.state.error){
            return <div>We have encountered an {this.state.error.message} </div>
        }
        return (
            <div>
        <div className="counter">
          <h1>Counter: {this.state.counter} </h1>
        </div>
        {this.props.showErrorComponent ?  <ErrorComponent /> : null }
        <div>
        <button className="btn" onClick = { this.increment }> Increment </button>
        <button className="btn" onClick = { this.decrement }> Decrement </button>
        </div>
        
            </div>
        )
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("component Did Update")
        console.log("--------------------------------------")
    }
    componentWillUnmount(){
        console.log("component will unmound")
        console.log("########################################")
    }
    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.ignoreProp && this.props.ignoreProp !== nextProps.ignoreProp){
            console.log('should component update - DO NOT RENDER')
            console.log('________________Do not____________________')
            return false;
        }
        
        console.log('should component update - RENDER')
        console.log('_________________________________________')
        return true;
    }
  
}

Name: Leibinger-PRM-6K - Print head Description:
 1- Clean nozzle 
 2- Clean and lubricate the spindle of the nozzle seal
  3- Check the nozzle seal for leak tightness and function
   4- Change O-ring of the nozzle seal
    5- Change head filter 
    6- Check adjustment of the print head units
     7- Clean all the parts 
     8- Check all screwing and if necessary re tighten
      Name: Leibinger-PRM-6K - Hydraulic unit Description: 1- Install Refurbish-Kit for main pump 
      2- Install Refurbish-Kit for suction pump 3- Rinse / flush the drop ball viscometer very well 4- Change main filter 5- Check ventilation tube (from the ink reservoir tank) for soiling which can cause clogging 6- Check inlet filter for head ventilation and if necessary replace it (for double reciprocating pump) 7- Check all tubes, connections and fitting screwing for a fix seat and leak tightness 8- Check hydraulic for air-and liquid leakage and if necessary repair and clean the printer 9 - Check leakage sensor for cleanliness and function 10 - Check function of stirring device (only for pigmented machines) 11 - Inspect reservoir tank and if necessary remove dirt and accumulation of mud 12- Change sponge of the ventilation lead Name: Leibinger-PRM-6K - Electronics Description: 1- Check touch function and if necessary recalibrate 2- Check display contrast and if necessary readjust 3- Check battery condition if necessary Name: Leibinger-PRM-6K - Device in general Description: 1- Check all settings and if necessary set up again (drop control, cam, actual pressure and requested pressure, make samples 2- Clean the housing