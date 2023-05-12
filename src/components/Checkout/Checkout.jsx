import {
  Avatar,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";

const Checkout = ({ cart }) => {
  return (
    <div>
      <Grid container>
        <Grid item md={6} sx={{ display: "flex", justifyContent: "center" }}>
          <List sx={{ width: "80%" }}>
            {cart.map((e) => {
              console.log(e);
              return (
                <>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Brunch this weekend?"
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: "inline" }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            Ali Connors
                          </Typography>
                          {
                            " — I'll be in your neighborhood doing errands this…"
                          }
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                </>
              );
            })}
          </List>
        </Grid>
      </Grid>
    </div>
  );
};

export default Checkout;
