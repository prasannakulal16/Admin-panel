import React, { useEffect, useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import "../../assets/css/Admin.css";
import Button from "../global/Button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../../redux/store";
import { deleteUser } from "./userSlice";
import {deleteSelectedUser} from "./userSlice"
import ReactPaginate from "react-paginate";

function Admin() {
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users);




  const [List,setList] =useState(users)
  useEffect(()=>{
    setList(users)
  },[users])

  const [selectedList,setSelectedList] =useState([])
  const [MasterChecked,setMasterChecked] =useState(false)
  
  const handleUserDelete = (id) => {
    console.log("id is",id)
    
    dispatch(deleteUser({ id }));
  
  };


  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;

  const [searchTerm, setSearchTerm] = useState("");

  const handleAllCheck =(e)=>{
    let templList=List;
    const user = templList.map((user)=>(
      {...user,selected:e.target.checked}

    ))
    setMasterChecked(e.target.checked)
    setList(user)
    setSelectedList(user.filter((e)=>e.selected))
    console.log("selected list",selectedList)
  }

  const onItemCheck=(e,item)=>{
    let templList = List;
    const user= templList.map((user)=>{
      if(user.id===item.id){
        user={...user}
        user.selected=e.target.checked
        
        console.log("user",user)

      }
      return user;
    });
    console.log("templist",user)
    const totalItems = List.length;
    console.log("totalitems",totalItems)
    const totalCheckedItems = user.filter((e) => e.selected).length;
    console.log("totalitems length",totalCheckedItems)
    setMasterChecked(totalItems===totalCheckedItems)
    setList(user)
    setSelectedList(user.filter((e)=>e.selected))
    


  }


  const selectedUserDelete=()=> {

    setSelectedList(List.filter((e)=>(e.selected)))
    const temp= selectedList.map((item)=>(
      item.id
    ))
      console.log("temp is",temp)

      dispatch(deleteSelectedUser(selectedList))
  }

  const displayUsers = Object.values(List)
    .filter((SingleUser) => {
      if (searchTerm === "") {
        return SingleUser;
      } else if (
        SingleUser.name.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return SingleUser;
      } else if (
        SingleUser.email.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return SingleUser;
      } else if (
        SingleUser.role.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return SingleUser;
      }
    })
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user) => {
     
      return (
        
        <tbody key={user.id} className={user.selected ? "selected" : ""}>
          <tr>
            <td scope="row" className="border-transparent pl-10">
              <input
                className="h-5 w-5"
                type="checkbox"
                name="foo"
                checked={user.selected} 
                onChange={(e) => onItemCheck(e,user)}
                id={user.id}
                
              />
            </td>
            <td className="border-transparent">{user.name}</td>
            <td className="border-transparent">{user.email}</td>
            <td className="border-transparent">{user.role}</td>
            <td className="border-transparent">
              <Link to={`edit-user/${user.id}`}>
                <EditOutlined className="text-xl" />
              </Link>
              <DeleteOutlined
                className="text-red-600 ml-[20px] text-xl"
                onClick={() => handleUserDelete(user.id)}
              />
            </td>
          </tr>
        </tbody>
      );
    });

    //"even:bg-[#EDF2F7] odd:bg-white"
  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };




  const renderUser = () => (
    <>
      <table className="table">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th scope="col" className="pl-10">
              <input
                type="checkbox"
                className="h-5 w-5"
                checked={MasterChecked}
                id="mastercheck"
                onChange={(e)=>handleAllCheck(e)}
                
              />
            </th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        {displayUsers}
      </table>
   
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginatonButton"}
        previousLinkClassName={"previousButton"}
        nextLinkClassName={"nextButton"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </>
  );
  
  return (
    <div className="adminPanel bg-cyan-300 pt-4 pb-4">
      <div className="container">
        <div className="bg-blue-600 p-3">
          <Link to="/add-user">
            <Button>Add User</Button>
          </Link>
        </div>
        <input
          type="text"
          placeholder=" Search by name,email or role"
          className="searchbox p-2"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        ></input>

        {users.length ? renderUser() : <p>No user</p>}
      
        <div className="row">
          <div className="col-lg-3">
            <Button onClick={() => selectedUserDelete()}>Delete selected </Button>
          </div>
          <div className="col-lg-9"></div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
