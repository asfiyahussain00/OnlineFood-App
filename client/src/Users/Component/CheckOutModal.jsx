import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { CartContext } from '../Context/addToCart/Context';
import axios from 'axios';
import { AppRoute } from '../../App';

function CheckOutModal() {
    const {cart_state, cart_dispatch} = useContext(CartContext)

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const[email, setEmail]=useState("");
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [contact, setContact] = useState("")
  const total= cart_state.cart.reduce((accumulator, item) =>  accumulator+(item.Price*item.productQuantity), 0)
const delieveryCharges= 120;
const totalBill = delieveryCharges+total
const Status = "Pending"


 
  const checkOut=(e)=> {
    e.preventDefault();
    const payload ={
        items: cart_state.cart,
        CustomerEmail: email,
    CustomerName: name,
    CoutomerAddress: address,
    CustomerContact: contact,
    DelieveryCharges: delieveryCharges,
    TotalBill: totalBill,
    Status
}
    console.log(payload)
axios.post(`${AppRoute}api/addOrders`, payload)
.then(json => {console.log(json.data)
setShow(false)
})
.catch(err => {console.log(err)})

    
      }

  return (
    <>
    <Button variant="secondary" onClick={handleShow}>
      Check Out
    </Button>

    <Modal show={show} onHide={handleClose} centered backdrop='static' >
      <Modal.Header closeButton>
        <Modal.Title className='modal_head'>User Info</Modal.Title>
      </Modal.Header>
      <Modal.Body className='modal_body'>
        <form onSubmit={checkOut}>
        <div className="mb-3 ">
  <label htmlFor="exampleInputEmail1" className="form-label" >
    User Name
  </label>
  <input value={name} required
      onChange={(e)=> setName(e.target.value)} style={{color:'black'}}
    type="text"  className="form-control"  id="exampleInputEmail1"  aria-describedby="emailHelp"  />
   </div>
   <div className="mb-3 ">
  <label htmlFor="exampleInputEmail1" className="form-label" >
    User Email
  </label>
  <input value={email} required
      onChange={(e)=> setEmail(e.target.value)} style={{color:'black'}}
    type="text"  className="form-control"  id="exampleInputEmail1"  aria-describedby="emailHelp"  />
   </div>
   <div className="mb-3 ">
  <label htmlFor="exampleInputEmail1" className="form-label" >
    Complete Address 
  </label>
  <input value={address} required
      onChange={(e)=> setAddress(e.target.value)} style={{color:'black'}}
    type="text"  className="form-control"  id="exampleInputEmail1"  aria-describedby="emailHelp"  />
   </div>
   <div className="mb-3 ">
  <label htmlFor="exampleInputEmail1" className="form-label" >
    Phone Number
  </label>
  <input required value={contact}  placeholder="+92"
      onChange={(e)=> setContact(e.target.value)} style={{color:'black'}}
    type="text"  className="form-control"  id="exampleInputEmail1"  aria-describedby="emailHelp"  />
   </div>
  
<button type="submit" className="btn btn-primary"  onClick={() => cart_dispatch({
            type : "CLEAR_CART"
           })}>
  Confirm
</button>
        </form>
</Modal.Body>
      
    </Modal>
  </>
  )
}

export default CheckOutModal