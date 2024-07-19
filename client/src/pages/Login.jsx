import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";
import axios from "axios";
import { useContext, useState } from "react";
import { Context } from "../context/Context";

const instance = axios.create({
  baseURL: `${import.meta.env.VITE_LOCAL_API}`,
});

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch, isFetching } = useContext(Context);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await instance.post("/auth/login", {
        username: username,
        password: password,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
      setError("Invalid username or password");
    }
  };

  return (
    <section id="login_page" className="max-w-full">
      <div className="flex justify-center items-center h-[100vh]">
        <form onSubmit={handleSubmit}>
          <Card className="w-96 bg-opacity-40 backdrop:blur-md">
            <CardHeader
              variant="gradient"
              color="gray"
              className="mb-4 grid h-28 place-items-center"
            >
              <Typography variant="h3" color="white">
                Login
              </Typography>
            </CardHeader>
            <CardBody className="flex flex-col gap-4">
              <Input
                label="Email"
                type="text"
                size="lg"
                onChange={(e) => setUsername(e.target.value)}
              />
              <Input
                label="Password"
                type="password"
                size="lg"
                onChange={(e) => setPassword(e.target.value)}
              />
            </CardBody>
            <CardFooter className="pt-0">
              <Button variant="gradient" type="submit" fullWidth>
                Masuk
              </Button>
            </CardFooter>
            {error ? <Typography>{error}</Typography> : ""}
          </Card>
        </form>
      </div>
    </section>
  );
}

export default Login;
