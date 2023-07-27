import React, { useEffect, useState } from "react";
import "./managecategory.css";
import Table from "react-bootstrap/Table";
import { FcRightUp } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { deletecategory, getProduct } from "../../actions/productactions";
import { addCategory } from "../../actions/productactions";
import { updatecategory } from "../../actions/productactions";
import { FcLinux } from "react-icons/fc";
import Swal from "sweetalert2";
import { FiTrash2 } from "react-icons/fi";
const Managecategory = () => {
  const dispatch = useDispatch();
  const [show, toggleShow] = React.useState(true);
  const [category, setCategory] = useState("");
  // const [categor, setCategor] = useState("");
  const { loading, product, error } = useSelector((state) => state.products);
  const { isUpdated, error: errors } = useSelector(
    (state) => state.modifiedproductred
  );

  const submithandle = (e) => {
    e.preventDefault();
    dispatch(addCategory(category));
    Swal.fire({
      title: "Category Add Successfully",
      icon: "success",
      confirmButtonText: "Ok",
    });
  };
  const submitcat=(e)=>{
    e.preventDefault();
  }
  // const updatecat=((id)=>{
  // dispatch(updatecategory(id))
  // if(isUpdated){
  //   Swal.fire({
  //     title: 'Category Updated Successfully',
  //     icon: 'success',
  //     confirmButtonText: 'Ok'
  //   })
  // }
  // })
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch, error]);
  

  return (
    <>
      <div className="cont">
        <h2>Manage Category</h2>
        <button onClick={() => toggleShow(!show)} className="btn btn-success">
          {show ? "Close Category" : "Add Category"}
        </button>
        {show && (
          <div>
            <form onSubmit={submithandle}>
              Category Name
              <br />
              <input
                type="text"
                placeholder="Enter category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                style={{ padding: ".2rem" }}
              />
              <br />
              <button className="btn btn-success" type="submit">
                Add Category
              </button>
            </form>
          </div>
        )}
        <form onSubmit={submitcat}>
        <div className="back">
          <Table striped bordered hover className="tab">
            <thead>
              <tr>
                <th>Sr</th>
                <th>Category</th>
                <th colSpan={2}>Action</th>
              </tr>
            </thead>
            <tbody>
            {product.length > 0 ? (
                product.map((item, index) => (
               
                  <tr key={index}>
                    <td>1</td>

                    <td className="spec">
                      <input
                        type="text"
                        value={item.category}
                        onChange={(e) => setCategory(e.target.value)}
                      />
                    </td>
                    <td style={{ fontSize: "1.5rem" }}>
                      <button type="submit"
                        onClick={() =>
                          dispatch(updatecategory(item._id, category))
                        }
                        className="btn btn-warning"
                      >
                        Update
                      </button>
                    </td>
                    <td style={{ fontSize: "1.5rem" }}>
                      <a
                           onClick={() =>
                            dispatch(deletecategory(item._id))
                          }
                        style={{
                          backgroundColor: "skyblue",
                          borderRadius: "100%",
                          padding: ".5rem",
                        }}
                      >
                        <FiTrash2 className="mouse"/>
                      </a>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3} className="text-center text-muted">
                    <FcLinux /> No Data
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
        </form>
      </div>
    </>
  );
};

export default Managecategory;
