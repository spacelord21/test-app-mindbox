import { Home } from "@pages/home";
import { AppThemeProvider, RobotoFontStyle, styled } from "@shared/ui";
import "./styles.css";

const Container = styled.div``;

export const App = () => {
  return (
    <Container>
      <RobotoFontStyle>
        <AppThemeProvider>
          <Home />
        </AppThemeProvider>
      </RobotoFontStyle>
    </Container>
  );
};
