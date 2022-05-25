import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "../global/Button";
import InputField from "../global/InputField";
import { addUser } from "./userSlice";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Adduser() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: "",
    email: "",
    role: "",
  });

  const [errormsg, setErrormsg] = useState(false);

  const handleAddUser = () => {
    if (
      values === "" ||
      values.name === "" ||
      values.email === "" ||
      values.role === ""
    ) {
      setErrormsg(true);
    } else {
      setValues({ name: "", email: "", role: "" });
      dispatch(
        addUser({
          id: uuidv4(),
          name: values.name,
          email: values.email,
          role: values.role,
        })
      );
      toast.success(` User is added Successfully`, {
        position: "top-right",
      });

      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  };

  return (
    <div>
      <div className="mt-10 max-w-xl mx-auto addUserMobile">
        <h1 className="flex justify-center text-4xl font-extrabold mb-10">
          ADD USER
        </h1>
        <ToastContainer />
        <InputField
          label="Name"
          value={values.name}
          onChange={(e) => setValues({ ...values, name: e.target.value })}
          inputProps={{ type: "text", placeholder: "Name" }}
        />
        <InputField
          label="Email"
          value={values.email}
          onChange={(e) => setValues({ ...values, email: e.target.value })}
          inputProps={{ type: "email", placeholder: "Email" }}
        />
        <InputField
          label="Role"
          value={values.role}
          onChange={(e) => setValues({ ...values, role: e.target.value })}
          inputProps={{ type: "text", placeholder: "Role" }}
        />

        {errormsg ? (
          <p className="text-red-500 ">Please fill all the fields</p>
        ) : null}
        <Button onClick={handleAddUser}>Submit</Button>
      </div>
    </div>
  );
}

export default Adduser;
