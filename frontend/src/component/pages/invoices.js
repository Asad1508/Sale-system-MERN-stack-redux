import React, { useState,useEffect, useRef } from 'react';
import Table from 'react-bootstrap/Table';
import { FcAddDatabase } from "react-icons/fc";
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, getProduct, getProductDetails } from '../../actions/productactions';
import { FiTrash2 } from "react-icons/fi";
import { FcShop } from "react-icons/fc";
import { FcDocument } from "react-icons/fc";
import { FcEditImage } from "react-icons/fc";
import { addTodo, createinvoice, removeTodo } from '../../actions/invoiceactions';
import Swal from 'sweetalert2'
import {useReactToPrint} from 'react-to-print'

const Invoices = ({id,qt,name,price}) => {
  const componentpdf=useRef()
    const dispatch=useDispatch()
    const {product,error:errors}=useSelector((state)=>state.productdetails)
    const {productss}=useSelector((state)=>state.addred)
    const {success,error}=useSelector((state)=>state.invoicedata)
  

    useEffect(()=>{
        // if (product && product._id !== id) 
        // {
        //     dispatch(getProductDetails(id))
        // }
        // agar name agya tu dispatch krdu
        if(name){
          dispatch(addTodo(id,qt,name,price))
        }

    },[dispatch,id,qt,name,price])
    // delete the items
    const deletecart=(id)=>{
     dispatch(removeTodo(id))
    }
  const handlesave=(e)=>{
      
      e.preventDefault();
      dispatch(createinvoice(productss.name,productss.quantity,productss.price))

        Swal.fire({
          title: 'Invoice Created Successfully',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
    
        // console.log(product.name)
    // console.log(product.purchaseprice)
    // console.log(qt)
  }
  // const delt=(()=>{
  //   document.getElementById("reset").reset()
  // })

  const generatepdf=useReactToPrint({
    content:()=>componentpdf.current,
    documentTitle:"Invoice",
  })
  const clears=(e)=>{
    e.preventDefault();
    document.getElementById("reset").reset()

  }
  return (

  
    <>
    <form onSubmit={handlesave} >
    <div ref={componentpdf} style={{width:'100%'}}>
     <Table striped bordered hover >
          <thead>

            <tr>
              <th>Sr</th>
              <th>Name</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          
               {/* {productss.price >0 ?( */}
               {productss.map((items)=>(
                  <tr key={items.id}>
                  <td className='rows' ><input type='text' value='1' readOnly/></td>
                  <td className='row1'><input type='text' value={items.name} readOnly /></td>
                  <td className='rows'><input value={items.quantity} type='text' readOnly/></td>
                  <td className='row1'><input value={items.price} readOnly type='text'/></td>
                  <td style={{fontSize:"1.5rem"}}><a onClick={()=>{deletecart(items.id)}}className="mouse" ><FiTrash2  /></a></td>
                </tr>
                ))
              //   :(
              //   <>
              //   < FcShop style={{fontSize:"8rem",position:'relative',left:"8rem"}}/>
              //  <span style={{position:"relative",left:"8rem",fontFamily:"cursive"}}>You Bucket is empty</span> 
              //   {/* </h3> */}
              //   </>
              //  )
               }
                
          </tbody>

          </Table>
     
          </div>
          <div className='fcontainer'>
            <div className='left'>
              <h5>Sub Total</h5>
              <label>Discount</label>
              <input type="number" />
            </div>
            <div className='right'>
             <h4>Grand Total 0</h4>
             </div>
             <br/>
          </div>
          <div className='bton'>
          <button className='btn btn-info' type='submit'><FcDocument/>Save</button>
          </div>
          </form>
          <button className='btn btn-info secbtn' onClick={generatepdf} ><FcEditImage/> & <FcDocument/></button>

         
    </>
  )
}

export default Invoices