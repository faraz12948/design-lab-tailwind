import './Home.css';
import textImg from '../assets/icons8-text-50.png'
import image from '../assets/icons8-image-50.png'
import upload from '../assets/icons8-upload-to-cloud-50.png'
import colorImg from '../assets/icons8-color-dropper-50.png'
import tImg from '../assets/tImg.png'
import { NavLink, Route, Switch } from 'react-router-dom';
import Upload from '../components/Upload/Upload';
import Addcolor from '../components/Addcolor/Addcolor';
import Addimg from '../components/Addimg/Addimg';
import Addtext from '../components/Addtext/Addtext';
import { fabric } from 'fabric';
import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive'




// drawer







function Home() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 688px)' })

    const [objects, setObjects] = useState({});
    const [text, setText] = useState('');
    const [textColor, setTextColor] = useState("#000000");
    const [color, setColor] = useState(null);
    // const [image, setImage] = useState('');
    const { selectedObjects, editor, onReady } = useFabricJSEditor();
    const [imgURL, setImgURL] = useState('https://cdn.dribbble.com/users/24078/screenshots/15522433/media/e92e58ec9d338a234945ae3d3ffd5be3.jpg?compress=1&resize=400x300');
    const changeTcolor = (e, clr) => {

        document.getElementById("tshirt-backgroundpicture").style.backgroundColor = clr;
        setColor(clr);

    }
    useEffect(() => {
        console.log(editor?.canvas.toObject);
        initCanvas();
    }, [])
    const initCanvas = () => {
        editor?.canvas.setWidth(300);
        editor?.canvas.setHeight(400);
    }
    const addImg = (e, url) => {

        e.preventDefault();
        fabric.Image.fromURL(url, function (oImg) {
            editor?.canvas.setWidth(300);
            editor?.canvas.setHeight(400);
            editor?.canvas.add(oImg);
            const obj = editor?.canvas.getObjects();
            obj?.forEach((o) => {
                if (o.type === "image") {
                    o.scaleToHeight(100);
                    o.scaleToHeight(100);
                }
            });
            editor?.canvas.centerObject(oImg);
            setObjects(editor?.canvas.getObjects());
            console.log(objects);


        });




        // setImgURL('');

    }
    const onAddCircle = () => {
        editor.addCircle();
    };
    const onAddRectangle = () => {
        editor.addRectangle();
    };

    useEffect(() => {

        // console.log(textColor);
        const obj = editor?.canvas.getObjects();
        // console.log(obj);
        obj?.forEach((o) => {

            if (o.type === "textbox") {
                editor?.canvas.getActiveObject().set("fill", textColor);
                editor?.canvas.renderAll();
            }
        });



    }, textColor);
    const deleteObject = () => {
        editor?.canvas.getActiveObjects().forEach((object) => {
            editor?.canvas.remove(object);
        });

    }



    const addText = (e, text) => {
        e.preventDefault();

        try {
            editor?.canvas.add(
                new fabric.Textbox(text, {
                    fill: textColor,
                    fontSize: 20,
                    fontFamily: "Arial",
                    fontWeight: "bold",
                    textAlign: "center",
                    name: "text",
                })
            );
            editor?.canvas.renderAll();
        } catch (error) {
            console.log(error);
        }

        setText('');
        setObjects(editor?.canvas.getObjects());
        // console.log(objects);

    }
    const getObj = () => {
        if (objects) {
            objects.forEach((ob) => {
                console.log(ob);
                editor?.canvas.add(ob);
                editor?.canvas.renderAll();
            })

        }


    }




























    return (
        <div className='main-container min-h-screen bg-gray-300' style={{ paddingTop: '50px', display: 'flex', justifyContent: 'space-between' }}>
            <>
                {
                    isTabletOrMobile ?
                        <div className='controller col-span-1' style={{ display: 'none' }}>
                            <div class="bg-white rounded shadow  grid grid-flow-col grid-cols-5" >
                                <div className='controller-side-bar grid grid grid-flow-row grid-row-4 gap-3 col-span-1'>
                                    <div className='w-9 mx-8 my-5 text-sm ' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                        <NavLink to='addtxt' style={{ width: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyItems: 'center' }}>
                                            <img src={textImg}></img>
                                            <p>Add Text</p></NavLink>
                                    </div>
                                    <div className='w-7 mx-8 my-5 text-sm' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                        <NavLink to='/addimg' style={{ width: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyItems: 'center' }}>
                                            <img src={image}></img>
                                            <p>Add Image</p></NavLink>
                                    </div>
                                    <div className='w-7 mx-8 my-5 text-sm' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

                                        <NavLink to='/Upload' style={{ width: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyItems: 'center' }}>
                                            <img src={upload}></img>
                                            <p>Upload</p>
                                        </NavLink>
                                    </div>
                                    <div className='w-7 mx-8 my-5 text-sm' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

                                        <NavLink to='/addcolor' style={{ width: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyItems: 'center' }}>
                                            <img src={colorImg}></img>
                                            <p>Product Colors</p>
                                        </NavLink>
                                    </div>



                                </div>
                                <div className='controller-main col-span-4 px-20 py-10'>
                                    <>
                                        <Switch>
                                            <Route path='/addcolor'>
                                                <Addcolor changeTcolor={changeTcolor} ></Addcolor>
                                            </Route>
                                            <Route path='/addimg'>
                                                <Addimg></Addimg>
                                            </Route>
                                            <Route path='/Addtxt'>
                                                <Addtext></Addtext>
                                            </Route>
                                            <Route path='/Upload'>
                                                <Upload></Upload>
                                            </Route>
                                        </Switch>
                                    </>
                                </div>


                                {/* <button class="px-4 py-4 bg-purple-700 text-white w-full mt-3 rounded shadow font-bold hover:bg-purple-900">PROCEED TO CHECKOUT SCREEN</button> */}
                            </div>




                        </div>
                        :
                        <div className='controller col-span-1'>
                            <div class="bg-white rounded shadow  grid grid-flow-col grid-cols-5" >
                                <div className='controller-side-bar grid grid grid-flow-row grid-row-4 gap-3 col-span-1'>
                                    <div className='w-9 mx-8 my-5 text-sm ' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                        <NavLink to='addtxt' style={{ width: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyItems: 'center' }}>
                                            <img src={textImg}></img>
                                            <p>Add Text</p></NavLink>
                                    </div>
                                    <div className='w-7 mx-8 my-5 text-sm' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                        <NavLink to='/addimg' style={{ width: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyItems: 'center' }}>
                                            <img src={image}></img>
                                            <p>Add Image</p></NavLink>
                                    </div>
                                    <div className='w-7 mx-8 my-5 text-sm' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

                                        <NavLink to='/Upload' style={{ width: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyItems: 'center' }}>
                                            <img src={upload}></img>
                                            <p>Upload</p>
                                        </NavLink>
                                    </div>
                                    <div className='w-7 mx-8 my-5 text-sm' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

                                        <NavLink to='/addcolor' style={{ width: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyItems: 'center' }}>
                                            <img src={colorImg}></img>
                                            <p>Product Colors</p>
                                        </NavLink>
                                    </div>



                                </div>
                                <div className='controller-main col-span-4 px-20 py-10'>
                                    <>
                                        <Switch>
                                            <Route path='/addcolor'>
                                                <Addcolor changeTcolor={changeTcolor} ></Addcolor>
                                            </Route>
                                            <Route path='/addimg'>
                                                <Addimg></Addimg>
                                            </Route>
                                            <Route path='/Addtxt'>
                                                <Addtext></Addtext>
                                            </Route>
                                            <Route path='/Upload'>
                                                <Upload></Upload>
                                            </Route>
                                        </Switch>
                                    </>
                                </div>


                                {/* <button class="px-4 py-4 bg-purple-700 text-white w-full mt-3 rounded shadow font-bold hover:bg-purple-900">PROCEED TO CHECKOUT SCREEN</button> */}
                            </div>




                        </div>
                }
                <>
                    {
                        isTabletOrMobile && <div className='controller-side-bar grid grid grid-flow-col grid-col-4  col-span-1' style={{ position: 'fixed', bottom: '0', width: '100%' }}>
                            <div className='w-9 mx-8 my-5 text-sm ' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <NavLink to='addtxt' style={{ width: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyItems: 'center' }}>
                                    <img src={textImg}></img>
                                    <p>Add Text</p></NavLink>
                            </div>
                            <div className='w-7 mx-8 my-5 text-sm' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <NavLink to='/addimg' style={{ width: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyItems: 'center' }}>
                                    <img src={image}></img>
                                    <p>Add Image</p></NavLink>
                            </div>
                            <div className='w-7 mx-8 my-5 text-sm' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

                                <NavLink to='/Upload' style={{ width: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyItems: 'center' }}>
                                    <img src={upload}></img>
                                    <p>Upload</p>
                                </NavLink>
                            </div>
                            <div className='w-7 mx-8 my-5 text-sm' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

                                <NavLink to='/addcolor' style={{ width: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyItems: 'center' }}>
                                    <img src={colorImg}></img>
                                    <p>Product Colors</p>
                                </NavLink>
                            </div>



                        </div>
                    }</>
                <>
                    {
                        isTabletOrMobile && <>

                        </>
                    }
                </></>


            <div className='t-shirt-container'>
                <img className='' id="tshirt-backgroundpicture" src={tImg} style={{}} />

            </div>
        </div>
    );
}

export default Home;
