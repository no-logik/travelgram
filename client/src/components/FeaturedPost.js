import * as React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { ButtonGroup, Button } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import BookmarkIcon from "@mui/icons-material/Bookmark";

function FeaturedPost(props) {
  const { post } = props;

  const [liked, setLiked] = React.useState({ liked: false });
  const [bookmarked, setBookmarked] = React.useState({ bookmarked: false });
  const toggleLike = () => {
    let localLiked = liked.liked;
    localLiked = !localLiked;
    setLiked({ liked: localLiked });
  };
  const toggleBookmarked = () => {
    let localBookmarked = bookmarked.bookmarked;
    localBookmarked = !localBookmarked;
    setBookmarked({ bookmarked: localBookmarked });
  };

  return (
    <Grid item xs={12} md={6} xl={4} marginBottom="20px">
      <CardActionArea component="a" href="#">
        <Card sx={{ display: "flex" }}>
          <CardContent
            sx={{
              flex: 1,
              bgcolor: "black",
              color: "white",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            <Typography component="h2" variant="h5">
              {post.title}
            </Typography>
            <Typography variant="subtitle1" color="inherit">
              {post.date}
            </Typography>
            <Typography variant="subtitle1" paragraph flexWrap={"noWrap"}>
              {post.description}
            </Typography>
            <ButtonGroup size="small" aria-label="small button group">
              <Button onClick={() => toggleLike()}>
                {!liked.liked ? <FavoriteBorderOutlinedIcon /> : <FavoriteIcon />}
              </Button>
              <Button onClick={() => toggleBookmarked()}>
                {!bookmarked.bookmarked ? (
                  <BookmarkBorderOutlinedIcon />
                ) : (
                  <BookmarkIcon />
                )}
              </Button>
            </ButtonGroup>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: "none", sm: "block" } }}
            image={post.image}
            alt={post.imageLabel}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.shape({
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageLabel: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default FeaturedPost;
