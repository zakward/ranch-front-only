import React, { useState, useEffect } from "react";
import List from "@mui/material/List";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";
import axios from "axios";
import Chore from "./Chore";
import Stack from "@mui/material/Stack";

export default function Chores() {
  const [choresData, setChoresData] = useState([]);

  //useEffect to fetch data on page load
  useEffect(() => {
    axios
      .get("https://fragile-apron-cow.cyclic.app/chores")
      .then((res) => setChoresData(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log("choresData: ", choresData);

  return (
    <>
      <Stack spacing={1}>
        {choresData?.map((chore, index) => {
          return (
            <div key={chore._id}>
              <Chore chore={chore} />
            </div>
          );
        })}
      </Stack>
    </>
  );
}
