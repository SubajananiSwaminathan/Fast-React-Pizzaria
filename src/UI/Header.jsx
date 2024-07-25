import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header>
      <Link to="/">Fast React Pizzaria</Link>
      <SearchOrder />
      <p>Janani</p>
    </header>
  );
}

export default Header;
