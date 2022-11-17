import { Box, Grid, Typography } from "@mui/material";

const Services = [
  "Diseño",
  "Remodelacion",
  "Cocinas",
  "SPC y PVC",
  "Driwall",
  "Pintura",
  "Techos",
  "Paredes",
  "Electricos",
  "Interiores",
  "Exteriores",
];

const ListServices = () => {
  return (
    <Box mt={1}>
      <Grid container rowSpacing={1} columnSpacing={1}>
        {Services.map((c, i) => {
          return (
            <Grid key={i} item md={3}>
              <Typography
                color="text.primary"
                sx={{
                  fontSize: "0.8rem",
                  lineHeight: 1.1,
                  my: 1,
                  textAlign: "center",
                  p: 0.5,
                  borderRadius: 1,
                }}
              >
                {c}
              </Typography>
            </Grid>
          );
        })}
        <Grid item md={3}>
          <Typography
            color="text.primary"
            sx={{
              fontSize: "0.8rem",
              lineHeight: 1.1,
              my: 1,
              backgroundColor: "#e26e5f",
              textAlign: "center",
              p: 0.5,
              borderRadius: 1,
            }}
          >
            Ver todo
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ListServices;
