import { Box, Stack, Typography } from "@mui/material";
import Loader from "./Loader";

const ExercisesVideos = ({ exerciseVidoes, exerciseName }) => {
  if (!exerciseVidoes.length) return <Loader />;

  return (
    <Box sx={{ mt: { lg: "200px", xs: "20px" } }} p="20px">
      <Typography variant="h4" mb="33px" fontWeight="600">
        Watch{" "}
        <span
          style={{
            color: "#fa1212",
            textTransform: "capitalize",
          }}
        >
          {exerciseName}
        </span>{" "}
        exercise vidoes
      </Typography>
      <Stack
        justifyContent="flex-start"
        alignItems="center"
        flexWrap="wrap"
        sx={{ flexDirection: { lg: "row" }, gap: { lg: "50px", xs: "30px" } }}
      >
        {exerciseVidoes?.slice(0, 3).map((item) => (
          <a
            key={item.video.videoId}
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrel"
            className="exercise-video"
          >
            <img
              style={{ borderTopLeftRadius: "20px" }}
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
            />
            <Box>
              <Typography
                sx={{ fontSize: { lg: "28px", xs: "18px" } }}
                fontWeight={600}
                color="#000"
              >
                {item.video.title}
              </Typography>
              <Typography fontSize="14px" color="#000">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExercisesVideos;
