import React, { useState, useEffect } from "react"
import scrollButtonStyles from './ScrollToTop.module.css';
import arrow from './arrow.svg'

class ScrollToTop extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
          intervalId: 0
      };
    }
    
    scrollStep() {
      if (window.pageYOffset === 0) {
          clearInterval(this.state.intervalId);
      }
      window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    }
    
    scrollToTop() {
      let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
      this.setState({ intervalId: intervalId });
    }
    
    render () {
        return <button title='Back to top' className={scrollButtonStyles.ScrollButton} 
                 onClick={ () => { this.scrollToTop(); }}>
                  <img src={arrow} />
                </button>;
     }
}

// const ScrollToTop = (props) => {

//     const [intervalId, setIntervalId] = useState(0);

//     useEffect(() => {
//         const scrollStep = () => {
//             if (window.pageYOffset === 0) {
//                 clearInterval(setIntervalId(intervalId));
//             }
//             window.scroll(0, window.pageYOffset - props.scrollStepInPx);
//         }
//         const scrollToTop = () => {
//             let intervalId = setInterval(scrollStep.bind(this), props.delayInMs)
//             setIntervalId(intervalId);
            
//         }

//         return () => scrollToTop()

//     }, [intervalId])

//     return  <button title='Back to top' className='scroll' 
//                 onClick={intervalId}>
//                 <span className='arrow-up glyphicon glyphicon-chevron-up'>sss</span>
//             </button>


// }

export default ScrollToTop;