import "./pos.css";
import React, { useState,useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { data } from './dataa.js';
import { FcAddDatabase } from "react-icons/fc";
import {useDispatch,useSelector} from 'react-redux'
import { getProduct, getProductDetails } from "../../actions/productactions";
import Invoices from "./invoices";

const Pos = () => {
    const dispatch=useDispatch()
    const {loading,product,error}=useSelector((state)=>state.products)
    const {product:products,error:errors}=useSelector((state)=>state.productdetails)

    const [search, setSearch] = useState('');
    const [id,setId]=useState()
    const [qty,setQty]=useState()
    const [qt,setQt]=useState()
    const [name,setName]=useState('')
    const [price,setPrice]=useState('')
    const handleicon=((id)=>{
      if (product && product._id !== id) 
      {
          dispatch(getProductDetails(id))
          setQt(qty)
          
          
      }

    })
    useEffect(() => {
     dispatch(getProduct())
    //  agar products agai ha tu set krdu name price id
     if (products) 
     {
       setName(products.name)  
       setPrice(products.purchaseprice)  
       setId(products._id)   
     }
    }, [dispatch,error,products]);
  return (
    <>
      <div className="container">
        <h3 style={{ marginLeft: "40px",fontFamily:"cursive" }}>Invoice Bucket</h3>
          <div className="card1"> 
         <Invoices id={id} qt={qt} name={name} price={price}/>
         
           </div>
        </div>
    
      <div className='card2'>
      
        <Form>
          <InputGroup className='my-3'>

            {/* onChange for search */}
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Search contacts'
            />
          </InputGroup>
        </Form>
        <Table striped bordered hover>
          <thead>

            <tr>
              <th>Sr</th>
              <th>Name</th>
              <th>Category</th>
              <th>Stock</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {product.
             filter((item) => {
              // typeof str === 'string' ? str.toLowerCase() : '';
              return search.toLowerCase() === ''
                ? item
                : item.category.toLowerCase().includes(search);
            })
            .reverse().map((item, index) => (
                <tr key={index}>
                  <td>1</td>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>{item.stock}</td>
                  <td>{item.purchaseprice}</td>
                  <td>
                    <form>
          <input type="number" className="ct" value={qt} onChange={(e) => setQty(e.target.value)}/></form></td>
                  <td style={{fontSize:"1.5rem"}}><a onClick={()=>handleicon(item._id)} ><FcAddDatabase/></a></td>
                </tr>
              ))}
          </tbody>
        </Table>
         </div>
    </>
  );
};

export default Pos;
