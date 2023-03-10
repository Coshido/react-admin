import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A very much wow such important answer, super important!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            This is not randomly generated text
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Remain lively hardly needed at do by. Two you fat downs fanny three.
            True mr gone most at. Dare as name just when with it body.
            Travelling inquietude she increasing off impossible the. Cottage be
            noisier looking to we promise on. Disposal to kindness appetite
            diverted learning of on raptures. Betrayed any may returned now
            dashwood formerly. Balls way delay shy boy man views. No so
            instrument discretion unsatiable to in.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            I'm writing everything, trust me
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Do am he horrible distance marriage so although. Afraid assure
            square so happen mr an before. His many same been well can high
            that. Forfeited did law eagerness allowance improving assurance bed.
            Had saw put seven joy short first. Pronounce so enjoyment my
            resembled in forfeited sportsman. Which vexed did began son abode
            short may. Interested astonished he at cultivated or me. Nor brought
            one invited she produce her.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            I might become a writer
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Old there any widow law rooms. Agreed but expect repair she nay sir
            silent person. Direction can dependent one bed situation attempted.
            His she are man their spite avoid. Her pretended fulfilled extremely
            education yet. Satisfied did one admitting incommode tolerably how
            are.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Or maybe a poet? What do you think?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Carriage quitting securing be appetite it declared. High eyes kept
            so busy feel call in. Would day nor ask walls known. But preserved
            advantage are but and certainty earnestly enjoyment. Passage weather
            as up am exposed. And natural related man subject. Eagerness get
            situation his was delighted.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            This is my favorite one!
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Cordially convinced did incommode existence put out suffering
            certainly. Besides another and saw ferrars limited ten say unknown.
            On at tolerably depending do perceived. Luckily eat joy see own
            shyness minuter. So before remark at depart. Did son unreserved
            themselves indulgence its. Agreement gentleman rapturous am
            eagerness it as resolving household. Direct wicket little of talked
            lasted formed or it. Sweetness consulted may prevailed for bed out
            sincerity.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
