import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  ThemeProvider,
  Typography,
  createTheme,
  styled,
} from "@mui/material";
import { GitHub } from "@mui/icons-material";
import avatar from "./assets/avatar.png";

/**
 * CREATE MUI BUTTON THEME
 */
const {
  palette: { augmentColor },
} = createTheme();
const theme = createTheme({
  palette: {
    tile: augmentColor({
      color: { main: "#33353B" },
    }),
  },
});

/**
 * STYLE COMPONENTS
 */
const Avatar = styled("img")({
  backgroundColor: "#2A2C30",
  border: "solid #2A2C30 7px",
  borderRadius: "50%",
  left: "10px",
  position: "absolute",
  top: "10px",
  width: "125px",
});

const Banner = styled(Box)({
  backgroundColor: "#42FF77",
  height: "100px",
  position: "relative",
});

const ButtonTile = styled(Button)({
  color: "white",
  flex: "0 0 48%",
});

const ButtonTileArea = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
});

const Container = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
});

const Header = styled(Box)({
  height: "150px",
});

const InnerCard = styled(Card)({
  backgroundColor: "#18191C",
  color: "#B9BBBE",
  margin: "15px",
});

const InnerDivider = styled(Divider)({
  backgroundColor: "#33353B",
  marginBottom: "10px",
});

const InnerHeading = styled(Typography)({
  color: "#fff",
  marginBottom: "10px",
});

const InnerBody = styled(Typography)({
  marginBottom: "10px",
});

const OuterCard = styled(Card)({
  backgroundColor: "#2A2C30",
  width: "80%",
  maxWidth: "600px",
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <OuterCard>
          <Header>
            <Banner>
              <Avatar alt="avatar" src={avatar} />
            </Banner>
          </Header>
          <InnerCard>
            <CardContent>
              <InnerHeading variant="h5">
                <b>shaditato</b>
              </InnerHeading>
              <InnerDivider />
              <InnerHeading variant="body2">
                <b>ABOUT ME</b>
              </InnerHeading>
              <InnerBody variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                lorem libero, gravida at ultricies sed, convallis in nulla.
                Fusce egestas sem sed dignissim posuere. Nam gravida dolor
                tortor, id auctor elit ullamcorper eget. Integer rhoncus metus
                eget convallis fermentum. 👺
              </InnerBody>
              <InnerHeading variant="body2">
                <b>EXTERNAL LINKS</b>
              </InnerHeading>
              <ButtonTileArea>
                <ButtonTile
                  color="tile"
                  href="https://github.com/shaditato"
                  startIcon={<GitHub />}
                  target="_blank"
                  variant="outlined"
                >
                  GitHub
                </ButtonTile>
              </ButtonTileArea>
            </CardContent>
          </InnerCard>
        </OuterCard>
      </Container>
    </ThemeProvider>
  );
}

export default App;
