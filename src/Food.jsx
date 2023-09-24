import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Box,
  Button,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import {
  foodPictures,
  foodNames,
  foodCredits,
  foodCreditNames,
} from "./FoodData";
import genericFoodPic from "./images/generic_food.jpg";

const Food = () => {
  // local state to select a random food, its photo and photo credit details
  const [randomFood, setRandomFood] = useState(0);
  const [foodPic, setFoodPic] = useState();
  const [foodName, setFoodName] = useState();
  const [foodCredit, setFoodCredit] = useState();
  const [foodCreditName, setFoodCreditName] = useState();

  // function to select a random food and its associated details, by picking a random number and then
  // retrieveing that index value from the food list

  const selectRandomFood = () => {
    // set random food
    setRandomFood(Math.floor(Math.random() * (14 - 0 + 1) + 0));
    setFoodPic(foodPictures[randomFood]);
    setFoodName(foodNames[randomFood]);
    setFoodCredit(foodCredits[randomFood]);
    setFoodCreditName(foodCreditNames[randomFood]);
  };

  // credit for the generic food image
  const genericCredit =
    "https://unsplash.com/@eastcoastkitchen?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
  const genericCreditName = "Andy Hay";

  return (
    <div>
      <Box
        className="pattern"
        sx={{
          maxWidth: "600px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          border: "solid #dfc659 1px",
          textAlign: "center",
          borderRadius: "20px",
          boxShadow: "0 4px 8px 0 rgba(0,0,0,0.9)",
        }}
      >
        <Box
          sx={{
            padding: "5px 0px 0px 0px",
            width: { xs: "350px", md: "400px", lg: "600px" },
          }}
        >
          <Typography
            fontSize={{ xs: "22px", md: "28", lg: "38px" }}
            gutterBottom
            color="white"
            fontFamily={"LimeLight"}
          >
            What would you like to make today?
          </Typography>
        </Box>
        <Card sx={{ maxWidth: "500px" }} elevation={4}>
          <CardMedia
            component="img"
            position="cover"
            sx={{
              height: { xs: "310px", md: "400px", lg: "400px" },
              width: { xs: "350px", md: "400px", lg: "600px" },
              border: "solid 1px #a58356 ",
            }}
            image={foodPic ? foodPic : genericFoodPic}
            borderRadius="20px"
            alt={foodCredit}
          ></CardMedia>
          <CardContent
            elevation={1}
            className="pattern"
            sx={{
              border: "solid 2px #a58356",
            }}
          >
            <Typography color="antiquewhite">
              Photo by{" "}
              <a
                className="another_a"
                href={foodCredit ? foodCredit : genericCredit}
              >
                {foodCreditName ? foodCreditName : genericCreditName}
              </a>
            </Typography>
            <Typography
              fontSize={{ xs: "22px", md: "25", lg: "30px" }}
              color="#f9de9d"
              fontFamily={"LimeLight"}
            >
              {foodName ? foodName : "Click Shuffle!"}
            </Typography>
          </CardContent>
        </Card>
        <Box sx={{ maxWidth: "600px", padding: "2px" }}>
          <Button onClick={selectRandomFood} sx={{ color: "white" }}>
            <Typography
              fontSize={{ xs: "22px", md: "25", lg: "30px" }}
              color={"white"}
              fontFamily={"LimeLight"}
            >
              SHUFFLE
            </Typography>
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Food;
