import { useState, useEffect } from "react";

// Use Params
import { useParams } from "react-router-dom";

// Material UI Import
import { Box } from "@mui/material";

// FetchData Functions
import {
  fetchData,
  exercisesOptions,
  youtubeOptions,
} from "../utils/fetchData";

// Components
import Detail from "../components/Detail";
import SimilarEx from "../components/SimilarEx";
import ExercisesVideos from "../components/ExercisesVideos";

const ExerciseDetails = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVidoes, setExerciseVideos] = useState([]);
  const [targetMusclesExercises, setTargetMusclesExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchedExercisesData = async () => {
      const exerciseDBUrl = "https://exercisedb.p.rapidapi.com";
      const youtVideosUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailData = await fetchData(
        `${exerciseDBUrl}/exercises/exercise/${id}`,
        exercisesOptions
      );
      setExerciseDetail(exerciseDetailData);

      const exerciseVideoData = await fetchData(
        `${youtVideosUrl}/search?query=${exerciseDetailData.name}`,
        youtubeOptions
      );
      setExerciseVideos(exerciseVideoData.contents);

      const targetMuscleExercisesData = await fetchData(
        `${exerciseDBUrl}/exercises/target/${exerciseDetailData.target}`,
        exercisesOptions
      );
      setTargetMusclesExercises(targetMuscleExercisesData);

      const equipmentExercisesData = await fetchData(
        `${exerciseDBUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
        exercisesOptions
      );
      setEquipmentExercises(equipmentExercisesData);
    };

    fetchedExercisesData();
  }, [id]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExercisesVideos
        exerciseVidoes={exerciseVidoes}
        exerciseName={exerciseDetail.name}
      />
      <SimilarEx
        targetMusclesExercises={targetMusclesExercises}
        equipmentExercises={equipmentExercises}
      />
    </Box>
  );
};

export default ExerciseDetails;
