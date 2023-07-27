import React, { useState,useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {useDispatch,useSelector} from 'react-redux'
import { FcRightUp } from "react-icons/fc";
import { getAllinvoices } from '../../actions/invoiceactions';

const Salereport = () => {
    const dispatch=useDispatch()
    const {loading,invoices}=useSelector((state)=>state.allinvoice)
    const Sr = 1
    const [search, setSearch] = useState('');
    useEffect(() => {
     dispatch(getAllinvoices())
    }, [dispatch]);
  return (
<>
<div className="tablelist">
<h2 className="text-center txt">Sales Report</h2>
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
              <th>Quantity</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {invoices
            ?.filter((item) => {
              // typeof str === 'string' ? str.toLowerCase() : '';
              return search?.toLowerCase() === ''
                ? item
                : item.name.toLowerCase().includes(search);
            })
            .map((item, index) => (
                <tr key={index}>
                  <td>{Sr}</td>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.purchaseprice}</td>
<td style={{fontSize:"1.5rem"}}><a href={`/editproducts/${item._id}`}><FcRightUp/></a></td>
                </tr>
              ))}
          </tbody>
        </Table>
</div>


</>
  )
}

export default Salereport