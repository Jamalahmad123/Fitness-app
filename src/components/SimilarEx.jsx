import { Box, Stack, Typography } from "@mui/material";

import HorizontalScrollBar from "./HorizontalScrollBar";
import Loader from "./Loader";

const SimilarEx = ({ targetMusclesExercises, equipmentExercises }) => {
  return (
    <Box p="20px" sx={{ mt: { lg: "100px", xs: "0" } }}>
      <Typography variant="h3" mb="40px">
        Similar <span style={{ color: "#ff1212" }}>Target Muscle</span>{" "}
        exercises
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {targetMusclesExercises.length ? (
          <HorizontalScrollBar data={targetMusclesExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography variant="h3" mt="80px" mb="40px">
        Similar <span style={{ color: "#ff1212" }}>Target Muscle</span>{" "}
        exercises
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {equipmentExercises.length ? (
          <HorizontalScrollBar data={equipmentExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

// Similar Equipment exercises
export default SimilarEx;
