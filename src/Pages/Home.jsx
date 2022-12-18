import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <Box>
      <Link to="/signin">Signin</Link>
      <Link to="/hotels/636b4e14df167aefc9537951">Hotel</Link>
    </Box>
  );
};
