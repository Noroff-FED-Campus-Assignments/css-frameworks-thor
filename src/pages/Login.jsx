import LogIn from "../components/login-box";
import bgImage from "../assets/gradient-background-shape.svg";

function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="container mx-auto p-8">
        <div className="login-section">
          <LogIn />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
