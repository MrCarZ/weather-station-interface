import React from "react";
import { List, ListItem, ListItemText, ListItemIcon } from "@mui/material";

const StatusInfo = (props) => {
  const { name, info, Icon } = props;
  const keys = Object.keys(info);

  return (
    <>
      <List>
        <ListItem key={`${name}-header`} secondaryAction={<Icon />}>
          <ListItemText
            primary={name}
            primaryTypographyProps={{
              variant: "button",
              fontSize: "15px",
              fontWeight: "bolder",
            }}
          />
        </ListItem>
        {keys.map((key) => {
          return (
            <ListItem
              key={`${name}-${key}`}
              secondaryAction={
                <ListItemText
                  primary={info[key]}
                  primaryTypographyProps={{
                    variant: "overline",
                    fontSize: "13px",
                    fontWeight: "medium",
                  }}
                />
              }
            >
              <ListItemText
                primary={key}
                primaryTypographyProps={{
                  variant: "overline",
                }}
              />
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default StatusInfo;
