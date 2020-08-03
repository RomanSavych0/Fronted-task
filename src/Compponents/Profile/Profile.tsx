import React, { useState, useEffect } from "react";
import { Container, TextField, Grid, Button, Paper } from "@material-ui/core";
import { AppStateType } from "../../store/redux-store";
import { IProfile } from "../../store/reducers/profile-reducer/types";
import { connect } from "react-redux";
import {
  setUserName,
  getUserProfile,
  setUserImage,
  setUserSurname,
  setUserDescription,
} from "../../store/reducers/profile-reducer/profile-reducer";
import classes from "./Profile.module.scss";
import { compose } from "redux";
import { WithAuthRedirect } from "../hoc/withAuthRedirect";
import userPhoto from "../../asserts/images/default-user-icon-20.jpg";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
interface IProps {
  profile: IProfile;
  setUserName: (name: string) => void;
  setUserSurname: (surname: string) => void;
  setUserImage: (image: string) => void;
  getUserProfile: () => void;
  setUserDescription: (description: string) => void;
}
const Profile: React.FC<IProps> = (props) => {
  const [photo, setPhoto] = React.useState<string>(props.profile.photo);
  const [isEditMode, setEditMode] = React.useState<boolean>(false);
  const [userName, setUserName] = React.useState<string>(props.profile.name);
  const [aboutMeToggle, setAboutMeToggle] = React.useState<boolean>(false);
  const [userSurname, setUserSurname] = React.useState<string>(
    props.profile.surname
  );

  const [userDescription, setUserDescription] = React.useState<string>(
    props.profile.description
  );

  useEffect(() => {
    setPhoto(props.profile.photo);
    setUserSurname(props.profile.surname);
    setUserName(props.profile.name);
    setUserDescription(props.profile.description);
  }, [
    props.profile.name,
    props.profile.photo,
    props.profile.description,
    props.profile.surname,
  ]);

  useEffect(() => {
    props.getUserProfile();
  }, []);

  const onMainPhotoChange = (e: any) => {
    if (e.target.files.length) {
      let reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        setPhoto(reader.result as string);
      };
    }
  };
  const onNameChange = (e: any) => {
    setUserName(e.currentTarget.value);
  };
  const onSurnameChange = (e: any) => {
    setUserSurname(e.currentTarget.value);
  };
  const onDescriptionChange = (e: any) => {
    setUserDescription(e.currentTarget.value);
  };
  const saveDataHandler = () => {
    props.setUserName(userName);
    props.setUserSurname(userSurname);
    props.setUserImage(photo as string);
    props.setUserDescription(userDescription);

    setEditMode(false);
  };
  return (
    <div>
      <Container>
        {!isEditMode ? (
          <Grid container className={classes.contentWrapper}>
            <Grid item xs={12}>
              <img
                src={photo === "" ? userPhoto : photo}
                alt=""
                className={classes.image}
              />
              <div className={classes.description}>
                <h2>
                  {userName} {userSurname}
                </h2>
              </div>
            </Grid>
            {/* 
            <Grid item xs={6} className={classes.userInfo}>
            </Grid>
             */}
            <Grid item xs={12}>
              <div className={classes.description}>
                <Button
                  variant="contained"
                  onClick={() => {
                    if (aboutMeToggle === false) setAboutMeToggle(true);
                    else {
                      setAboutMeToggle(false);
                    }
                  }}
                >
                  About Me
                  <div>
                    {aboutMeToggle ? (
                      <ArrowDropDownIcon />
                    ) : (
                      <ArrowDropUpIcon />
                    )}
                  </div>
                </Button>
              </div>
              {aboutMeToggle ? (
                <Paper className={classes.textDescription}>
                  <h4>{props.profile.description}</h4>
                </Paper>
              ) : (
                <div></div>
              )}
            </Grid>
            <Grid item xs={12} className={classes.description}>
              <Button
                onClick={() => setEditMode(true)}
                variant="contained"
                color="primary"
              >
                Edit Profile
              </Button>
            </Grid>
          </Grid>
        ) : (
          <div className={classes.contentWrapper}>
            <img src={photo} alt="" />
            <input type="file" onChange={onMainPhotoChange} />
            <div>
              <TextField
                inputProps={{ maxLength: 12 }}
                onChange={onNameChange}
                autoFocus={true}
                value={userName}
                label="Input name"
              />
            </div>
            <div>
              <TextField
                onChange={onSurnameChange}
                autoFocus={true}
                value={userSurname}
                inputProps={{ maxLength: 12 }}
                label="Input surname"
              />
            </div>
            <div>
              <TextField
                value={userDescription}
                onChange={onDescriptionChange}
                id="filled-multiline-flexible"
                multiline
                rowsMax={4}
                label="Add info"
                inputProps={{ maxLength: 200 }}
              />
            </div>

            <Button
              variant="contained"
              color="primary"
              onClick={saveDataHandler}
            >
              Save
            </Button>
          </div>
        )}
      </Container>
    </div>
  );
};

const mapStateToProps = (state: AppStateType) => {
  return { profile: state.profile.profile };
};

export default connect(mapStateToProps, {
  setUserName,
  getUserProfile,
  setUserSurname,
  setUserDescription,
  setUserImage,
})(WithAuthRedirect(Profile));

// export default compose(
//   connect(mapStateToProps, {
//     setUserName,
//     getUserProfile,
//     setUserSurname,
//     setUserStatus,
//     setUserImage,
//   }),
//   WithAuthRedirect
// )(Profile);
