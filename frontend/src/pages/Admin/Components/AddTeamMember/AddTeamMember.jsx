import React, { useState } from "react";
import styles from "./add-team-member.module.scss";
import MultiSelect from "react-multi-select-component";

import { Button2 } from "../../../../components/util/Button/index";
import { Grid } from "@material-ui/core";

export function AddTeamMember() {
  const options=[
    {label: 'Open Source', value :"open-source"},
    {label: 'Broadcast', value :"broadcast"},
    {label: 'Design', value :"design"},
    {label: 'Social', value :"social"},
    {label: 'Resource Sharing', value :"resource-sharing"}
  ];
  const [teams,setTeams]=useState([]);
  const [picUrl,setPicUrl] = useState("./images/admin.png");
  const [pic,setPic] = useState();
  const onPicChange = (event) => {
    
    const {target} = event;
    const {files} = target;

    if (files && files[0]){
      setPic(files[0]);
      let reader = new FileReader();
      reader.onload = function (e) {
        setPicUrl(e.target.result);
      };
      reader.readAsDataURL(files[0]);
    }
    return;
  }
  const changePic= () =>{
    return document.getElementById("profile-pic-input")?.click();
  }
  const onSubmit= () =>{
    return pic;
  }
  return (
    <div className={styles["add-team-member-section"]}>
      <div className={styles["add-team-member-parent"]}>
        <div className={styles["add-team-member-child"] + " " + styles["child1"]}>
          <div className={styles["add-team-member-card"]}>
            <h1 className={styles["add-team-member-header-text"]}>Add Team Member</h1>
            <form className={styles["inside-add-team-member"]} onSubmit={onSubmit}>
              <Grid container>
                <Grid xs={12} sm={2} md={3}/>
                <Grid xs={12} sm={8} md={6}>
                  <div className={styles["upload-section"]} onClick={changePic}>
                    <img
                      src={picUrl}
                      className={styles["img-admin"]}
                      alt="admin_img"
                    />
                    <h1 className={styles["h1"]} style={{color:"white", fontSize:"15px"}}>Click to Change</h1>
                    <input
                      id="profile-pic-input"
                      type="file"
                      accept="image/*"
                      capture="camera"
                      onChange={onPicChange}
                      required="required"
                      style={{display:"none"}}
                    />
                  </div>
                </Grid>
              </Grid>
              <div className={styles["add-team-member-input"]}>
                <input
                  id="txt_name"
                  type="text"
                  required="required"
                  name="fullName"
                  placeholder="Full Name"
                />
                <i className="fas fa-signature"></i>
              </div>
              <div className={styles["add-team-member-input"]}>
                <input
                  id="txt_description"
                  type="text"
                  required="required"
                  name="description"
                  placeholder="Short Description"
                />
                <i className="fas fa-prescription"></i>
              </div>
              <div className={styles["add-team-member-input"]}>
                <input
                  id="txt_linkedin"
                  type="url"
                  required="required"
                  name="linkedin"
                  placeholder="LinkedIn URL"
                />
                <i className="fab fa-linkedin-in"></i>
              </div>
              <div className={styles["add-team-member-input"]}>
                <input
                  id="txt_github"
                  type="url"
                  required="required"
                  name="github"
                  placeholder="Github URL"
                />
                <i className="fab fa-github"></i>
              </div>
              <div className={styles["add-team-member-input"]}>
                <input
                  id="txt_twitter"
                  type="url"
                  required="required"
                  name="twitter"
                  placeholder="Twitter URL"
                />
                <i className="fab fa-twitter"></i>
              </div>
              <label className={styles["add-team-member-label-text"]}>Teams :</label>
              <MultiSelect
                options={options} // Options to display in the dropdown
                value={teams} // Preselected value to persist in dropdown
                onChange={setTeams} // Function will trigger on change event
                labelledBy={"Teams"} // Property name to display in the dropdown options
                className={styles["dropdown"]}
              /><br/><br/>
              <div className={styles["submit-btn"]}>
                <Button2
                  className={styles["submit-btn-text"]}
                  label="Submit"
                  type="submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
