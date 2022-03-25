import { Switch, Subheading } from "react-native-paper";
import { Container, Header, SwitchWrapper, Title, Content } from "./SettingsStyled";
import { useSelector, useDispatch } from 'react-redux';
import { IRootState } from "../../interfaces/IRootState";
import { lightMode, darkMode } from "../../config/themeSlice";
import THEME from "../../constants/theme";

export default function Settings() {
  const { value: currentTheme } = useSelector((state: IRootState) => state.theme);
  const dispatch = useDispatch();

  const changeTheme = () => {
    if (currentTheme === 1) {
      dispatch(darkMode());
    } else {
      dispatch(lightMode());
    }
  }

  return (
    <Container>
      <Header>
        <Title>Settings</Title>
      </Header>
      <Content>
        <SwitchWrapper>
          <Subheading>Dark Mode</Subheading>
          <Switch
            value={currentTheme === 0}
            onValueChange={changeTheme}
            color={THEME.LIGHT.PRIMARY}
          />
        </SwitchWrapper>
      </Content>
    </Container>
  );
}
