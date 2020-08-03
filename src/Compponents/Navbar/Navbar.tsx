import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { AppStateType } from "../../store/redux-store";
import { signOut } from "../../store/reducers/auth-reducer/auth-reducer";
import { clearProfileData } from "../../store/reducers/profile-reducer/profile-reducer";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

interface IProps {
  email: string | null;
  isAuthorized: boolean;
  signOut: () => void;
  clearProfileData: () => void;
}

const Navbar: React.FC<IProps> = (props) => {
  let signOutHandler = () => {
    props.clearProfileData();
    props.signOut();
  };
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.menuButton}>
            <NavLink
              to="/profile"
              style={{ color: "white", textDecoration: "none" }}
            >
              Profile
            </NavLink>
          </Typography>

          <Typography variant="h6" className={classes.title}>
            <NavLink
              to="/blog"
              style={{ color: "white", textDecoration: "none" }}
            >
              Blog
            </NavLink>
          </Typography>

          <div>
            <NavLink
              to="/login"
              style={{ color: "white", textDecoration: "none" }}
            >
              {props.isAuthorized ? (
                <div style={{ display: "flex" }}>
                  <Button color="inherit">
                    <div>{props.email}</div>
                  </Button>
                  <Button color="inherit" onClick={signOutHandler}>
                    Sign Out
                  </Button>
                </div>
              ) : (
                <div>Login</div>
              )}
            </NavLink>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = (state: AppStateType) => {
  return {
    email: state.auth.login,
    isAuthorized: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, { signOut, clearProfileData })(Navbar);
