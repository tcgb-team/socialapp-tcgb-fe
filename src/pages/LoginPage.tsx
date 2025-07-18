import LoginPanel from "../components/authentication/login/LoginPanel";
import BrandPanel from "../components/authentication/BrandPanel";
import { StyledAuthPage } from "../components/authentication/styles";

export default function LoginPage() {
  return (
    <StyledAuthPage>
      <LoginPanel />
      <BrandPanel />
    </StyledAuthPage>
  );
}
