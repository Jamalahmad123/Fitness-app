import { useEffect, useState } from "react";
import { Stack, Box, Typography } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import ExerciseCard from "./ExerciseCard";
import { exercisesOptions, fetchData } from "../utils/fetchData";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;

  const indexOfLastExercise = currentPage * exercisesPerPage;

  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;

  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (e, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchExercises = async () => {
      let exercisesData = [];

      if (bodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exercisesOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exercisesOptions
        );
      }

      setExercises(exercisesData);
    };

    fetchExercises();
  }, [bodyPart]);

  return (
    <Box
      id="exercises"
      sx={{
        mt: { lg: "122px" },
      }}
      mt="50px"
      p="20px"
    >
      <Typography variant="h4" fontWeight="600" mb="46px">
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{
          gap: { lg: "110px", xs: "50px" },
        }}
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
      >
        {currentExercises.map((exercise, index) => (
          <ExerciseCard exercise={exercise} key={index} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            count={Math.ceil(exercises.length / exercisesPerPage)}
            defaultPage={1}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
