import React, { useEffect, useState } from "react";
import { List, ListItem, ListItemText } from "@mui/material";

const StatusInfo = (props) => {
  const { name, info, Icon } = props;
  const [statusInfo, setStatusInfo] = useState(info);

  useEffect(() => {
    setStatusInfo(info);
  }, [info]);

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
        {Object.keys(statusInfo).map((key) => {
          return (
            <ListItem
              key={`${name}-${key}`}
              secondaryAction={
                <ListItemText
                  primary={statusInfo[key]}
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
