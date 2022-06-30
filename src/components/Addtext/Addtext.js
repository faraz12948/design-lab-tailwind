import './Addtext.css'
import { SwatchesPicker, TwitterPicker } from 'react-color';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import { NavLink } from 'react-router-dom';

function Addtext() {
    const handleChange = (color, event) => {
        console.log(color);
    }
    return (
        <div>
            <NavLink className="cross-btn" to='/'>

                <ArrowBackIosNewRoundedIcon></ArrowBackIosNewRoundedIcon>
            </NavLink>
            <p className='pb-1' style={{ textAlign: 'center', color: 'grey' }}>Add Text</p>

            <form>
                <input name="Addtext" type="text" className="feedback-input" placeholder="Enter text here" />


                <input type="submit" value="Add text" />
            </form>
            <div className='text-clr pt-10' style={{ height: '260x' }}>
                <>
                    <p className='pb-1' style={{ textAlign: 'center', color: 'grey' }}>Change text color</p>
                </>
                <div>
                    <TwitterPicker className='pt-3' onChange={handleChange} />
                </div>
                <hr className='mt-5' style={{ height: '4px', color: 'red' }} />


            </div>
        </div>
    );
}

export default Addtext;
