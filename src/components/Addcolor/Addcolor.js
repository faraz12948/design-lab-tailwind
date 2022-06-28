import React from 'react';
import { CompactPicker } from 'react-color';
import './Addcolor.css';
import { SwatchesPicker } from 'react-color';
// class Addcolor extends React.Component {
//     state = {
//         background: '#fff',
//     };

//     handleChangeComplete = (color) => {
//         this.setState({ background: color.hex });
//         console.log(this.state.background);
//     };

//     render() {
//         const width = {
//             width: '500px'
//         }
//         return (
//             <div className='container' styles={width}>

//                 <CompactPicker

//                     color={this.state.background}
//                     onChangeComplete={this.handleChangeComplete}
//                 />
//             </div>

//         );
//     }
// }
const Addcolor = (props) => {
    console.log(props)
    const handleChange = (color, event) => {
        console.log(color);

    }
    return (<SwatchesPicker onChange={handleChange} />);
}
export default Addcolor;