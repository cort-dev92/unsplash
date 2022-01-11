import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import * as imageService from "./ImageService";
import ImageItem from "./ImageItem";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { darkTheme, lightTheme } from "../../utils/Themes";

type ImageListProps = {
  theme: string;
  text: string;
};

const ImageList = (props: ImageListProps) => {
  const theme = createTheme({
    components: {
      MuiPaginationItem: {
        styleOverrides: {
          root: {
            color: props.theme === "light" ? lightTheme.text : darkTheme.text,
          },
        },
      },
    },
  });

  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState<any[]>([]);
  const [count, setCount] = useState(1000);
  const [pageNum, setPageNum] = useState(1);

  const initLoadImages = async () => {
    const res = await imageService.getImages(pageNum);
    const imageData = res.data as { data: any[] };
    console.log(imageData.data);
    setLoading(false);
    setImages(imageData.data);
  };

  const searchLoadImages = async () => {
    const res = await imageService.getImages(pageNum, props.text);
    const imageData = res.data as { data: any };
    console.log(imageData.data);
    setCount(Math.ceil(imageData.data.total / 9));
    setLoading(false);
    setImages(imageData.data.results);
  };

  const handleChange = (event: any, page: number) => {
    setPageNum(page);
  };

  useEffect(() => {
    setLoading(true);
    if (props.text) {
      searchLoadImages();
    } else {
      initLoadImages();
    }
  }, [props.text, pageNum]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center">
        <ReactLoading type={"bubbles"} color={"grey"} height={60} width={100} />
      </div>
    );
  }

  return (
    <div>
      <div className="row">
        {images.map((image) => (
          <ImageItem image={image} key={image.id} />
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
        <Stack spacing={2}>
          <ThemeProvider theme={theme}>
            <Pagination count={count} page={pageNum} variant="outlined" shape="rounded" onChange={handleChange} />
          </ThemeProvider>
        </Stack>
      </div>
    </div>
  );
};

export default ImageList;
