import "./productlist.css";
import React, { useState,useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { data } from './dataa.js';
import { FcRightUp } from "react-icons/fc";
import { getProduct } from "../../actions/productactions";
import {useDispatch,useSelector} from 'react-redux'
const Productlist = () => {
    const dispatch=useDispatch()
    const {loading,product,error}=useSelector((state)=>state.products)
    const Sr = product.length + 1;
    const [search, setSearch] = useState('');
    useEffect(() => {
     dispatch(getProduct())
    }, [dispatch,error]);
  return (
<>
<div className="tablelist">
<h2 className="text-center txt">Product List</h2>
<Form>
          <InputGroup className='my-3'>

            {/* onChange for search */}
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Search contacts'
            />
          </InputGroup>
        </Form>
<Table striped bordered hover >

          <thead>

            <tr>
              <th>Sr</th>
              <th>Name</th>
              <th>Category</th>
              <th>Stock</th>
              <th>Enabled</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {product
            ?.filter((item) => {
              // typeof str === 'string' ? str.toLowerCase() : '';
              return search.toLowerCase() === ''
                ? item
                : item.category.toLowerCase().includes(search);
            })
            .reverse().map((item, index) => (
                <tr key={index}>
                  <td>{Sr}</td>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>{item.stock}</td>
                  <td style={{color:"green"}}>Enabled</td>
<td style={{fontSize:"1.5rem"}}><a href={`/editproducts/${item._id}`}><FcRightUp/></a></td>
                </tr>
              ))}
          </tbody>
        </Table>
</div>


</>
  )
}

export default Productlist