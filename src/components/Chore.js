import React from "react";
import { Accordion } from "@mui/material";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container"
import ChoreStep from "./ChoreStep"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Chore(props) {
  const { chore: {name, instructions }} = props;

  console.log(props);
  console.log('name:', name)
  console.log('instructions:', instructions)

  const sampleSteps = [instructions, "Step 2", "Step 3"]
  return (
    <>
    <Container maxWidth="sm">
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ChoreStep sampleSteps={sampleSteps}/>
        </AccordionDetails>
      </Accordion>
      </Container>
    </>
  );
}
