import { useNavigate } from "react-router-dom";
const Filter = () => {
  let navigate = useNavigate();

  const handleChange = (value) => {
    navigate(`/${value}`);
  };
  return (
    <select
      className="select "
      onChange={(event) => handleChange(event.target.value)}
    >
      <option value="">Select category </option>
      <option value="fossil">Fossil</option>
      <option value="Villager">Villager</option>
      <option value="Fish"> Fish</option>
    </select>
  );
};
export default Filter;
