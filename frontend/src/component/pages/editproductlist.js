import React, { useEffect, useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./addproduct.css";
import { createProduct, getProduct, getProductDetails, updateProduct } from "../../actions/productactions";
import Swal from 'sweetalert2'

const Editproduct = () => {
    const {product,error:errors} =useSelector((state)=>state.productdetails)
    const {isUpdated,error:errorss}=useSelector((state)=>state.modifiedproductred)
    const {loading,product:products}=useSelector((state)=>state.products)

  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [purchase, setPurchaseprice] = useState("");
  const [retailprice, setRetailprice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [stock, setStock] = useState("");
 console.log("see"+category)
  const dispatch = useDispatch();
const {id}=useParams()
  //   const resetHandler = () => {
  //     setCode("");
  //     setCategory("");
  //     setName("");
  //     setDuration("");
  //   };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!code || !name || !purchase || !retailprice || !category || !quantity || !stock) {
        return Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'All fields are required.',
            showConfirmButton: true
        });
    }
    console.log(code,name,purchase,retailprice,category,quantity,stock)
    dispatch(updateProduct(id,code, name, category,stock,retailprice,purchase,quantity));
  };
useEffect(()=>{
  dispatch(getProduct())
    if (product && product._id !== id) 
    {
        dispatch(getProductDetails(id))
    }
    setCode(product.code);
      setName(product.name);
      setCategory(product.category);
      setPurchaseprice(product.purchaseprice);
      setRetailprice(product.retailprice);
      setQuantity(product.quantitytype);
      setStock(product.stock);
if(isUpdated)
{
    Swal.fire({
        title: 'Product Updated Successfully',
        icon: 'success',
        confirmButtonText: 'Ok'
      })
}

      

   

},[errorss,dispatch,id,product,isUpdated])


  return (
    <>
      <div style={{ position: "absolute", left: "230px", top: "80px" }}>
        <h2>Add Product</h2>
        <Card className=" " style={{ width: "1000px" }}>
          <Card.Body>
            <Form onSubmit={submitHandler} className="formpos">
              <Form.Group controlId="code">
                <Form.Label>Code</Form.Label>
                <Form.Control
                  className="formcontrol"
                  type="code"
                  value={code}
                  placeholder="Enter the Code"
                  onChange={(e) => setCode(e.target.value)}
                />
                 <Form.Label>Category</Form.Label>
                <Form.Select value={category}
                  aria-label="Default select example"
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {products?.map((values,index) => (
                    <option key={index}>{values.category}</option>
                  ))}

                  {/* <option>Open this select menu</option>
                  <option value="">One</option> */}
                </Form.Select>
              </Form.Group>

              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  className="formcontrol"
                  value={name}
                  placeholder="Enter the name"
                  onChange={(e) => setName(e.target.value)}
                />
                <Form.Label>Purchase price</Form.Label>
                <Form.Control
                  className="formcontrol"
                  value={purchase}
                  placeholder="Enter Purchase price"
                  onChange={(e) => setPurchaseprice(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="name">
                <Form.Label>Retail price</Form.Label>
                <Form.Control
                  className="formcontrol"
                  type="name"
                  value={retailprice}
                  placeholder="Enter the Retail price"
                  onChange={(e) => setRetailprice(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="name">
                <Form.Label>Available stock</Form.Label>
                <Form.Control
                  className="formcontrol"
                  type="name"
                  value={stock}
                  placeholder="Enter the Category"
                  onChange={(e) => setStock(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="name">
                <Form.Label>Quantity type</Form.Label>
                <Form.Select value={quantity}
                  aria-label="Default select example"
                  onChange={(e) => setQuantity(e.target.value)}
                >
                  <option value="kg">kg</option>
                  <option value="piece">piece</option>
                  <option value="pack">pack</option>

                  {/* <option>Open this select menu</option>
                  <option value="">One</option> */}
                </Form.Select>
                <Button type="submit" variant="success" className="mt-3">
              Add Product
            </Button>
              </Form.Group>
              {/* {loading && <Loading size={50} />} */}
            
              
            </Form>
           
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Editproduct;
