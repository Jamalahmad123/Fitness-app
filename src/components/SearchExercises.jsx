import { useEffect, useState } from "react";
import { Box, Stack, Button, TextField, Typography } from "@mui/material";
import { exercisesOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollBar from "./HorizontalScrollBar";

const SearchExercises = ({ bodyPart, setBodyPart, setExercises }) => {
  const [searchText, setSearchText] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const exercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exercisesOptions
      );
      setBodyParts(["all", ...bodyPartsData]);
    };
    exercisesData();
  }, []);

  const handleSearch = async () => {
    if (searchText) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exercisesOptions
      );

      const searchedExercises = exercisesData.filter((exercise) => {
        return (
          exercise.name.toLowerCase().includes(searchText) ||
          exercise.bodyPart.toLowerCase().includes(searchText) ||
          exercise.target.toLowerCase().includes(searchText) ||
          exercise.equipment.toLowerCase().includes(searchText)
        );
      });
      setExercises(searchedExercises);
      setSearchText("");
    }
  };

  return (
    <Stack alignItems="center" justifyItems="center" mt="37px" p="20px">
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: "44px", xs: "30px" },
        }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none" },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          type="text"
          height="76px"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#ff2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollBar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
          isBodyPart
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
