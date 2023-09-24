import { Box, Stack } from "@mui/material";
// import "./App.css";
import Food from "./Food";
//Photo by <a href="https://unsplash.com/@nicknice?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nick Nice</a> on <a href="https://unsplash.com/photos/gPm8h3DS1s4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
/// Photo by <a href="https://unsplash.com/@dancristianpaduret?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Dan Cristian Pădureț</a> on <a href="https://unsplash.com/photos/EpNlkyXiiPs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

//Image by <a href="https://pixabay.com/users/darkmoon_art-1664300/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3561709">Dorothe</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3561709">Pixabay</a>
import charcoa from "./images/purple_background.jpg";

function App() {
  document.title = "Random Dinner";
  return (
    <div>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        minHeight={"100vh"}
        sx={{
          backgroundImage: `url(${charcoa})`,
          backgroundSize: "cover",
        }}
      >
        <Food></Food>
        <Stack direction={"row"} spacing={1} margin={"10px 0px 0px 0px"}>
          <p>Photo by </p>
          <a href="https://pixabay.com/users/darkmoon_art-1664300/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3561709">
            Dorothe
          </a>
        </Stack>
      </Box>
    </div>
  );
}

export default App;
