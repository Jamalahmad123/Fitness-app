import { Stack, Typography, Button } from "@mui/material";

import bodyPartImg from "../assets/icons/body-part.png";
import targetImg from "../assets/icons/target.png";
import equipmentImg from "../assets/icons/equipment.png";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      id: 1,
      icon: bodyPartImg,
      title: name,
    },
    {
      id: 2,
      icon: targetImg,
      title: target,
    },
    {
      id: 3,
      icon: equipmentImg,
      title: equipment,
    },
  ];

  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />

      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography variant="h3" fontWeight="bold">
          {name}
        </Typography>
        <Typography variant="h6" color="#4f4c4c">
          Exercises keep you strong. {name} bup is one of the best exercises to
          target your {bodyPart}. It will help you improve your mood and gain
          energy.
        </Typography>
        {extraDetail.map((item) => (
          <Stack
            key={item.id}
            direction="row"
            gap="24px"
            alignItems="center"
            justifyItems="center"
          >
            <Button
              sx={{
                background: "#fff2db",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
              }}
            >
              <img
                src={item.icon}
                alt={item.title}
                style={{ width: "50px", height: "50px" }}
              />
            </Button>
            <Typography variant="h5" textTransform="capitalize">
              {item.title}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
