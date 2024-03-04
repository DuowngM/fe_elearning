import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function HeaderUser() {
  return (
    <div className="max-w-[1500px] h-[70px] mx-auto flex justify-between items-center  ">
      <div className="logo">
        <Link to={"/"}>
          <img
            className="h-[50px] block"
            src="https://rikkei.edu.vn/wp-content/uploads/2024/01/logo-rikkei2.png"
            alt="rikkei edu"
          />
        </Link>
      </div>
      <div className="actions flex gap-3 items-center">
        <Button variant="text" sx={{ color: "#bc2228" }}>
          Sign In
        </Button>
        <Button sx={{ bgcolor: "#bc2228", "&:hover": { bgcolor: "#c14e53" } }} variant="contained">
          Sign Up
        </Button>
      </div>
    </div>
  );
}

export default HeaderUser;
