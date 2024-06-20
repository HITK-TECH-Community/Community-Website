import React, { useEffect, useState } from "react";
import EditIcon from "@material-ui/icons/Edit";
import CloseIcon from "@material-ui/icons/Close";
import Joi from "joi-browser";
import { Button2 } from "../../../../components/util/Button";
import  "../../../../pages/Resources/components/ResourceSharingForm/resource-sharing-form.module.scss"
import  style from "./profile.module.scss";
import Loader from "../../../../components/util/Loader";
import { END_POINT } from "../../../../config/api";
import { SimpleToast } from "../../../../components/util/Toast";
export function Profile(props) {
  const [name, setName] = useState("Super Admin Name");
  const [firstName,setFirstName]=useState("");
  const [lastName,setLastName]=useState("");
  const [email, setEmail] = useState("xyz@gmail.com");
  const [username, setUsername] = useState("xyz");
  const [phone, setPhone] = useState("+91-123456789");
  const [edit, setEdit] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [open, setOpenToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [severity, setSeverity] = useState("success");
  const [picUrl, setPicUrl] = useState(props.adminData.image);
  const [pic, setPic] = useState();

  const errorMessages = {
    firstName: "Invalid First Name",
    lastName: "Invalid Last Name",
    email: "Invalid Email",
    phone: "Invalid Phone Number Format +91XXXXXXXXX",
    username:"Invalid Username"
  };
  
  const validationSchema = {
    firstName: Joi.string().regex(/^[A-Za-z]+$/).required().label("First Name"),
    lastName: Joi.string().regex(/^[A-Za-z]*$/).required().label("Last Name"),
    email: Joi.string().email().required().label("Email"),
    phone: Joi.string().regex(/[+]91[6-9]{1}[0-9]{9}$/).required().label("Contact Number"),
    username: Joi.string().regex(/^[A-Za-z][A-Za-z0-9_]{7,29}$/).required().label("Username")
  };

  const handleCloseToast = () => {
    setTimeout(() => {
      setOpenToast(false);
    }, 500);
  };

  const validateForm = () => {
    const obj = { firstName, lastName, email, phone,username };
    const options = { abortEarly: false };
    const { error } = Joi.validate(obj, validationSchema, options);
    if (!error) return null;

    const errors = {};
    error.details.forEach(err => {
      const field = err.path[0];
      errors[field] = errorMessages[field] || "Invalid Input";
    });
    return errors;
  };
  const updateAdmin = async(e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    setErrors(validationErrors || {});

    if (validationErrors) return;
    setErrors({});

    console.log(firstName,lastName,phone,email);
    const token =localStorage.getItem('token')
    const data = {
      firstName,
      lastName,
      username, 
      contact:phone,   
    };
    const formData = new FormData();
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('username', username);
    formData.append('contact', phone);
    formData.append("image", pic);
    setLoading(true);
    try {
      const response = await fetch(`${END_POINT}/admin/${props.adminData._id}/${token}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body:formData,
      });

      if (!response.ok) {
      setToastMessage("Failed to update admin");
      setOpenToast(true);
      setSeverity("error");
        throw new Error('Failed to update admin');
      }else{
      setToastMessage("Updated Successfully");
      setOpenToast(true);
      setSeverity("success");
      // re-render the Admin Page as it is updated
      props.update();
      }
    } catch (error) {
      console.error('Error updating admin:', error);
      setToastMessage("Failed to update admin");
      setOpenToast(true);
      setSeverity("error");
    } finally {
      setLoading(false);
    }
  };

  const onPicChange = (event) => {
    const { target } = event;
    const { files } = target;

    if (files && files[0]) {
      setPic(files[0]);
      let reader = new FileReader();
      reader.onload = function (e) {
        setPicUrl(e.target.result);
      };
      reader.readAsDataURL(files[0]);
    }
    return;
  };

  const changePic = () => {
    return edit && document.getElementById("profile-pic-input")?.click();
  };

  useEffect(() => {
    let firstName = props.adminData.firstName ? props.adminData.firstName : "";
    let lastName = props.adminData.lastName ? props.adminData.lastName : "";
    let Name = firstName + " " + lastName;
    setName(Name || "xyz");
    setFirstName(firstName || "xyz");
    setLastName(lastName || "");
    setEmail(props.adminData.email || "xyz@gmail.com");
    setPhone(props.adminData.contact || "+919099999990");
    setUsername(props.adminData.username || "xyzIo");
  }, [props]);

  return (
    <div className={style["profile-container"]}>
    <SimpleToast
        open={open}
        message={toastMessage}
        severity={severity}
        handleCloseToast={handleCloseToast}
      />
      <h1>My Profile</h1>
      <div className={style["profile-card"]}>
        <div className={style["icon-container"]} onClick={() => setEdit(!edit)}>
          {edit ? (
            <CloseIcon className={style["icon"]} />
          ) : (
            <EditIcon className={style["icon"]} />
          )}
        </div>
        <div className={style["image-container"]} onClick={changePic}>
          
          <img
            src={picUrl}
            className={style["img-admin"]}
            alt="admin_img"
          />
          <input
                      id="profile-pic-input"
                      type="file"
                      accept="image/*"
                      capture="camera"
                      onChange={onPicChange}
                      style={{ display: "none" }}
                    />
        </div>
        <div className={style["card-info"]}>
          {edit ? (
            <form onSubmit={updateAdmin} noValidate>
              <div className={style["form"]}>
                <div className={style["input-wrapper"]}>
                  <input type="text" placeholder="FirstName" value={firstName} onChange={(e)=>setFirstName(e.target.value)} required/>
                  <div className={style["error-message"]}>
                    {errors.firstName && <span>{errors.firstName}</span>}
                  </div>

                </div>
                <div className={style["input-wrapper"]}>
                  <input type="text" placeholder="LastName" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
                  <div className={style["error-message"]}>
                    {errors.lastName && <span>{errors.lastName}</span>}
                  </div>
                </div>
                <div className={style["input-wrapper"]}>
                  <input type="text" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                  <div className={style["error-message"]}>
                    {errors.username && <span>{errors.username}</span>}
                  </div>
                </div>
                <div className={style["input-wrapper"]}>
                  <input type="tel"  maxLength="13" placeholder="phone number  +91XXXXXXXXX" value={phone} onChange={(e)=>setPhone(e.target.value)} required/>
                  <div className={`${style["error-message"]}`}>
                    {errors.phone && <span>{errors.phone}</span>}
                  </div>
                </div>
                <div className={style["input-wrapper-btn"]}>
                  <div className={"submit-btn"}>
                  <div className="data-loader">
                  {loading ? (
                      <Loader />  
                    ) : (
                      <Button2 id="btn" label="Update" type="submit" className={"submit-btn-text"} />
                    )}
                    </div>
                    </div>
                </div>
              </div>
            </form>
          ) : (
            <>
              <div className={style["name"]}>{name}</div>
              <div className={style["line"]}></div>
              <div className={style["contact"]}>
                <div className={style["contact-details"]}>{username}</div>
                <div className={style["contact-details"]}>{email}</div>
                <div className={style["contact-details"]}>{phone}</div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
