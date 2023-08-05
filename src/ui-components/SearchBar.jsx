import { Paper } from "@mui/material"
import { colors } from "../constants/colors"

const SearchBar = () => {
  return (
    <Paper component={"form"} sx={{ border: `1px solid ${colors.secondary}`}}>
      <input type="text" placeholder="Searching... " />
    </Paper>
  )
}

export default SearchBar
