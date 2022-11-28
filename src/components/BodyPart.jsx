import { Typography } from "@mui/material";
import { Stack } from "@mui/system";

import iconGym from "../assets/icons/gym.png";

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item && "4px solid #ff2625",
        bgcolor: "#fff",

        cursor: "pointer",
        gap: "47px",
      }}
      onClick={() => {
        setBodyPart(item);
      }}
    >
      <img
        src={iconGym}
        alt="gym-icon"
        style={{
          width: "40px",
          height: "40px",
        }}
      />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        color="#3A1212"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
