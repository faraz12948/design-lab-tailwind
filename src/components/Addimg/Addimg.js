import SearchIcon from '@mui/icons-material/Search';
import '../Addimg/Addimg.css'
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import PetsIcon from '@mui/icons-material/Pets';
import SportsFootballIcon from '@mui/icons-material/SportsFootball';
import emoji from '../../assets/happy.png'
import { useState } from 'react';
import Catagories from '../Catagories/Catagories';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import { NavLink } from 'react-router-dom';


function Addimg() {
    // const [catagories, setCatagories] = useState([]);


    return (
        <>
            <div>

                <NavLink className="cross-btn" to='/'>

                    <ArrowBackIosNewRoundedIcon></ArrowBackIosNewRoundedIcon>
                </NavLink>
                <p className='pb-3' style={{ textAlign: 'center', color: 'grey' }}>Stock Images</p>
            </div>
            <div className='header-center'>
                <input type='text' placeholder="Search for stock images"></input>
                <SearchIcon></SearchIcon>
            </div>

            <div className=' catag-div grid grid-cols-2 gap-3 mt-5 ' style={{ height: '250px' }}>
                <div className='custom-img' style={{ backgroundColor: '#BA55D3', height: '100px', position: 'relative' }}>
                    <SentimentVerySatisfiedIcon style={{ position: 'absolute', zIndex: '1', color: '#D8BFD8', fontSize: '100px', border: '2px rounded' }}></SentimentVerySatisfiedIcon>
                    <p style={{ color: 'white', position: 'absolute', zIndex: '2' }} >Emojis</p></div>
                <div className='custom-img' style={{ backgroundColor: '#2E8B57', height: '100px', position: 'relative' }}>
                    <PetsIcon style={{ position: 'absolute', zIndex: '1', color: '#3CB371', fontSize: '100px' }}></PetsIcon>
                    <p style={{ color: 'white', position: 'absolute', zIndex: '2' }} >Pets</p></div>
                <div className='custom-img' style={{ backgroundColor: '#20B2AA', height: '100px', position: 'relative' }}>
                    <SportsFootballIcon style={{ position: 'absolute', zIndex: '1', color: '#7FFFD4	', fontSize: '100px' }}></SportsFootballIcon>
                    <p style={{ color: 'white', position: 'absolute', zIndex: '2' }} >Sports</p></div>
                <div className='custom-img' style={{ backgroundColor: '#BA55D3', height: '100px', position: 'relative' }}>
                    <SentimentVerySatisfiedIcon style={{ position: 'absolute', zIndex: '1', color: '#D8BFD8', fontSize: '100px' }}></SentimentVerySatisfiedIcon>
                    <p style={{ color: 'white', position: 'absolute', zIndex: '2' }} >Emojis</p></div>
                <div className='custom-img' style={{ backgroundColor: '#BA55D3', height: '100px', position: 'relative' }}>
                    <SentimentVerySatisfiedIcon style={{ position: 'absolute', zIndex: '1', color: '#D8BFD8', fontSize: '100px', border: '2px rounded' }}></SentimentVerySatisfiedIcon>
                    <p style={{ color: 'white', position: 'absolute', zIndex: '2' }} >Emojis</p></div>
                <div className='custom-img' style={{ backgroundColor: '#2E8B57', height: '100px', position: 'relative' }}>
                    <PetsIcon style={{ position: 'absolute', zIndex: '1', color: '#3CB371', fontSize: '100px' }}></PetsIcon>
                    <p style={{ color: 'white', position: 'absolute', zIndex: '2' }} >Pets</p></div>
                <div className='custom-img' style={{ backgroundColor: '#20B2AA', height: '100px', position: 'relative' }}>
                    <SportsFootballIcon style={{ position: 'absolute', zIndex: '1', color: '#7FFFD4	', fontSize: '100px' }}></SportsFootballIcon>
                    <p style={{ color: 'white', position: 'absolute', zIndex: '2' }} >Sports</p></div>
                <div className='custom-img' style={{ backgroundColor: '#BA55D3', height: '100px', position: 'relative' }}>
                    <SentimentVerySatisfiedIcon style={{ position: 'absolute', zIndex: '1', color: '#D8BFD8', fontSize: '100px' }}></SentimentVerySatisfiedIcon>
                    <p style={{ color: 'white', position: 'absolute', zIndex: '2' }} >Emojis</p></div>
                {/* {
                    catagories.map((catagorie) => <Catagories catagorie={catagorie}></Catagories>)
                } */}


            </div>
        </>
    );
}

export default Addimg;
