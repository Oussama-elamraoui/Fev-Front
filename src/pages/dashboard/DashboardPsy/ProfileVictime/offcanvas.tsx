import {Offcanvas,Modal} from "react-bootstrap";
import React,{FC} from "react";
interface propsOffcanvas {
    show:boolean;
    handleClose:()=>void;
}
const OffCanvas:React.FC<propsOffcanvas>=({show,handleClose})=>{
    return(
        <>
        <Modal show={show} onHide={handleClose} >
          
        </Modal>
        <Offcanvas show={show} onHide={handleClose} placement='end' style={{zIndex:'1000'}}>
        <Offcanvas.Header closeButton>
          <h5 id="offcanvasTopLabel">Offcanvas </h5>
        </Offcanvas.Header>
        <Offcanvas.Body >
          <div>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </div>
        </Offcanvas.Body>
        </Offcanvas>
        </>
    )
}
export default OffCanvas;