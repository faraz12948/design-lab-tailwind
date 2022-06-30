import { Drawer } from "@mui/material";
import { useEffect, useState } from "react";

const MuiDrawer = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    // console.log(props.children);
    useEffect(() => {
        setIsOpen(props.open);

    }, [props.open])


    return (<>
        {/* <button onClick={() => setIsOpen(true)}></button> */}
        <Drawer anchor="bottom" open={isOpen} onClose={() => { setIsOpen(false); props.toggleDrawer(false) }}>
            {props.children}
        </Drawer>
    </>);
}
export default MuiDrawer;