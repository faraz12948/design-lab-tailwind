import TextFieldsIcon from '@mui/icons-material/TextFields';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';


import txt from '../../assets/text.png';
import image from '../../assets/image.png';
import upload from '../../assets/upload.png';
import color from '../../assets/color.png';

import './AddAll.css'
import { NavLink } from 'react-router-dom';
const AddAll = () => {

  return (

    <>
      <div>

        <p className='pb-5 pt-3' style={{ textAlign: 'center', color: 'grey' }}>How do you want to start?</p>
      </div>
      <div style={{ display: 'flex', alignIems: 'center', justifyContent: 'center' }}>
        <div className="grid grid-cols-2 ">

          <NavLink to='/addtxt'>
            <div className='icons'>
              <img src={txt} alt=""></img>
              <p className='pb-5' style={{ fontSize: '10px', textAlign: 'center', color: 'grey' }}>Add text</p>
            </div>
          </NavLink>
          <NavLink to='/addimg'>
            <div className='icons'>
              <img src={image} alt=""></img>
              <p className='pb-5' style={{ fontSize: '10px', textAlign: 'center', color: 'grey' }}>Add text</p>
            </div>
          </NavLink>
          <NavLink to='/Upload'>
            <div className='icons'>
              <img src={upload} alt=""></img>
              <p className='pb-5' style={{ fontSize: '10px', textAlign: 'center', color: 'grey' }}>Add text</p>
            </div>
          </NavLink>
          <NavLink to='/addcolor'>
            <div className='icons'>
              <img src={color} alt=""></img>
              <p className='pb-5' style={{ fontSize: '10px', textAlign: 'center', color: 'grey' }}>Add text</p>
            </div>
          </NavLink>


        </div>
      </div>
    </>


  );
}
export default AddAll;