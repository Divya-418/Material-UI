import { Box, Stack, Skeleton } from "@mui/material";
import React, { useState } from "react";
import Post from "./Post";

const Feed = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, [3000]);

  return (
    <Box flex={4} p={{ xs: 0, md: 2 }}>
      {loading ? (
        <Stack spacing={1}>
          <Skeleton variant="text" height={100} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="rectangular" height={300} />
        </Stack>
      ) : (
        <>
          <Post title="Jane Doe" img="https://cdn.pixabay.com/photo/2022/04/09/05/23/tulip-7120784_960_720.jpg"/>
          <Post title="Richard Banks" img="https://cdn.pixabay.com/photo/2022/01/07/07/13/chicago-6921293_960_720.jpg"/>
          <Post title="Amy Stuart" img="https://cdn.pixabay.com/photo/2022/04/21/19/47/lion-7148207_960_720.jpg"/>
          <Post title="Sarah Holland" img="https://cdn.pixabay.com/photo/2018/08/12/16/59/parrot-3601194_960_720.jpg"/>
        </>
      )}
    </Box>
  );
};

export default Feed;