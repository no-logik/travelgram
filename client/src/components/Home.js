import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./Header";
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost";
import { autocompleteClasses } from "@mui/material";
// import Main from "./Main";
// import Sidebar from "./Sidebar";
// import Footer from "./Footer";
// import post1 from "./blog-post.1.md";
// import post2 from "./blog-post.2.md";
// import post3 from "./blog-post.3.md";

const mainFeaturedPost = {
  title: "Welcome to TravelGram",
  description:
    "TravelGram is a browsing platform for you and your friends to share your favourite travel destinations",
  image: "https://source.unsplash.com/random",
  imageText: "",
  linkText: "",
};

const featuredPosts = [
  {
    title: "Switzerland",
    date: "",
    description:
      "Switzerland is a mountainous Central European country, home to numerous lakes, villages and the high peaks of the Alps. Its cities contain medieval quarters.",
    image: "https://source.unsplash.com/random/?productivity,city",
    imageLabel: "",
    isLiked: "false",
    isSaved: "false",
  },
  {
    title: "Denmark",
    date: "",
    description:
      "Denmark is a Scandinavian country comprising the Jutland Peninsula and numerous islands. It's linked to nearby Sweden via the Öresund bridge.",
    image: "https://source.unsplash.com/random/?denmark",
    imageLabel: "",
    isLiked: "false",
    isSaved: "false",
  },
  {
    title: "France",
    date: "",
    description:
      "France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches. Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre and monuments like the Eiffel Tower.",
    image: "https://source.unsplash.com/random/?france",
    imageLabel: "",
    isLiked: "false",
    isSaved: "false",
  },
  {
    title: "New Zealand",
    date: "",
    description:
      "New Zealand is an island country in the southwestern Pacific Ocean. It consists of two main landmasses—the North Island and the South Island —and over 700 smaller islands.",
    image: "https://source.unsplash.com/random/?new+zealand",
    imageLabel: "",
    isLiked: "false",
    isSaved: "false",
  },
  {
    title: "Canada",
    date: "",
    description:
      "Canada is a country in North America. Its ten provinces and three territories extend from the Atlantic Ocean to the Pacific Ocean and northward into the Arctic Ocean",
    image: "https://source.unsplash.com/random/?canada",
    imageLabel: "",
    isLiked: "false",
    isSaved: "false",
  },
  {
    title: "Italy",
    date: "",
    description:
      "Italy, a European country with a long Mediterranean coastline, has left a powerful mark on Western culture and cuisine. Its capital, Rome, is home to the Vatican as well as landmark art and ancient ruins.",
    image: "https://source.unsplash.com/random/?italy",
    imageLabel: "",
    isLiked: "false",
    isSaved: "false",
  },
  {
    title: "Spain",
    date: "",
    description:
      "Spain, a country on Europe’s Iberian Peninsula, includes 17 autonomous regions with diverse geography and cultures. Capital city Madrid is home to the Royal Palace and Prado museum, housing works by European masters.",
    image: "https://source.unsplash.com/random/?spain",
    imageLabel: "",
    isLiked: "false",
    isSaved: "false",
  },
  {
    title: "Greece",
    date: "",
    description:
      "Greece is a country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas. Influential in ancient times, it's often called the cradle of Western civilization.",
    image: "https://source.unsplash.com/random/?greece",
    imageLabel: "",
    isLiked: "false",
    isSaved: "false",
  },
  {
    title: "Australia",
    date: "",
    description:
      "Australia, officially the Commonwealth of Australia, is a sovereign country comprising the mainland of the Australian continent, the island of Tasmania, and numerous smaller islands.",
    image: "https://source.unsplash.com/random/?australia",
    imageLabel: "",
    isLiked: "false",
    isSaved: "false",
  },
  {
    title: "Brazil",
    date: "",
    description:
      "Brazil, officially the Federative Republic of Brazil, is the largest country in both South America and Latin America. At 8.5 million square kilometers and with over 214 million people, Brazil is the world's fifth-largest country by area and the seventh most populous.",
    image: "https://source.unsplash.com/random/?brazil",
    imageLabel: "",
    isLiked: "false",
    isSaved: "false",
  },
  {
    title: "Mexico",
    date: "",
    description:
      "Mexico, officially the United Mexican States, is a country in the southern portion of North America. It is bordered to the north by the United States; to the south and west by the Pacific Ocean; to the southeast by Guatemala, Belize, and the Caribbean Sea; and to the east by the Gulf of Mexico.",
    image: "https://source.unsplash.com/random/?mexico",
    imageLabel: "",
    isLiked: "false",
    isSaved: "false",
  },
];

// const posts = [post1, post2, post3];

const sidebar = {
  title: "About",
  description: "",
  archives: [
    { title: "March 2020", url: "#" },
    { title: "February 2020", url: "#" },
    { title: "January 2020", url: "#" },
    { title: "November 1999", url: "#" },
    { title: "October 1999", url: "#" },
    { title: "September 1999", url: "#" },
    { title: "August 1999", url: "#" },
    { title: "July 1999", url: "#" },
    { title: "June 1999", url: "#" },
    { title: "May 1999", url: "#" },
    { title: "April 1999", url: "#" },
  ],
  social: [
    { name: "GitHub", icon: GitHubIcon },
    { name: "Twitter", icon: TwitterIcon },
    { name: "Facebook", icon: FacebookIcon },
  ],
};

const theme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="xl">
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Container
            xl={12}
            maxWidth="100vw"
            sx={{ display: "flex", flexDirection: "row" }}
          >
            <Box
              sx={{
                width: "33%",
                height: "auto",
                padding: "10px",
              }}
            >
              <Grid item marginBottom="20px">
                {featuredPosts.map((post, index) => {
                  if (index % 3 == 0) {
                    return <FeaturedPost key={post.title} post={post} />;
                  }
                })}
              </Grid>
            </Box>
            <Box
              sx={{
                width: "32%",
                height: "auto",
                padding: "10px",
              }}
            >
              <Grid item>
                {featuredPosts.map((post, index) => {
                  if (index % 3 == 2) {
                    return <FeaturedPost key={post.title} post={post} />;
                  }
                })}
              </Grid>
            </Box>
            <Box
              sx={{
                width: "32%",
                height: "auto",
                padding: "10px",
              }}
            >
              <Grid item>
                {featuredPosts.map((post, index) => {
                  if (index % 3 == 1) {
                    return <FeaturedPost key={post.title} post={post} />;
                  }
                })}
              </Grid>
            </Box>
          </Container>
        </main>
      </Container>
    </ThemeProvider>
  );
}

//////////////////////////////////////////////////////////////////////////////////////////////

// <Grid container spacing={5} sx={{ mt: 3 }}>
//   <Main title="From the firehose" />
//   <Sidebar
//     title={sidebar.title}
//     description={sidebar.description}
//     archives={sidebar.archives}
//     social={sidebar.social}
//   />
// </Grid>;

// <Container maxWidth="xl">
//         <Box sx={{ height: "auto", p: "30px" }}>
//           <Box maxWidth="xl" sx={{ display: "flex", flexDirection: "row" }}>
//             <Avatar
//               alt="Remy Sharp"
//               src="http://source.unsplash.com/random"
//               sx={{ width: 300, height: 300, m: "30px" }}
//             />
//             <Box
//               sx={{
//                 display: "inline-block",
//                 bgcolor: "cyan",
//                 border: "1",
//                 m: "20px",
//                 ms: "100px",
//                 boxShadow: "2",
//               }}
//             >
//               <Typography>Here is some information about the user.</Typography>
//             </Box>
//           </Box>
//         </Box>
//       </Container>
