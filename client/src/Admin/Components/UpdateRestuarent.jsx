import React, { useState } from 'react'
import { AppRoute } from '../../App';
import axios from 'axios';
import {PiNotePencilThin} from 'react-icons/pi'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { storage } from '../utils/FirebaseConfig'
import { ref, uploadBytes, getDownloadURL  } from "firebase/storage";

function UpdateRestuarent({newRestuarent, _id}) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [RestuarentImage, setRestuarentImage] = useState(null)
const update = (e) =>{
e.preventdefault();
const storageRef = ref(storage, `Restuarentimages/${RestuarentImage.name}`);
// 'file' comes from the Blob or File API
uploadBytes(storageRef, RestuarentImage).then((snapshot) => {
getDownloadURL(snapshot.ref)
.then((url) => {
const payload ={ _id: _id,  RestuarentImage : url}
console.log(payload)
axios.put(`${AppRoute}api/updateRestuarent`,payload)
.then(json => {console.log(json.data)
newRestuarent(json.data.restuarent)
setShow(false)
})
.catch(err => console.log(err))


 })
.catch((error) => console.log(error)  );
});

}

  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
      <PiNotePencilThin/>
      </Button>

      <Modal show={show} onHide={handleClose} centered backdrop='static'>
        <Modal.Header closeButton>
          <Modal.Title>Update Restuarent</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={update}>
          <div className='mb-3'>
      <label htmlFor='formFile' className='form_label'> 
        Restuarent Image
      </label>
      <input className='form-control' 
      
      style={{color:'cyan'}} onChange={(e) =>  setRestuarentImage(e.target.files[0])} type='file' id='formFile' />
     </div>
     
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
          </form>
  </Modal.Body>
        
      </Modal>
      </>
  )
}

export default UpdateRestuarent