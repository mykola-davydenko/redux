import { useSelector, useDispatch } from "react-redux";
import { changeSearchValue } from "../../redux/userSlice";
import style from "./SearchUsers.module.css"

function SearchUsers() {
    const dispatch = useDispatch();
    const searchValue = useSelector((state) => state.users.searchValue)
  return <input className={style.input} type="text" value={searchValue} placeholder="Enter name" onChange={(event) => dispatch(changeSearchValue(event.target.value))} />;
}

export default SearchUsers;
