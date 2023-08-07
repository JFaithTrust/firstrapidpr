import { Stack } from "@mui/material"
import { Home, OndemandVideo, Checkroom, DeveloperMode, FaceRetouchingNatural, FitnessCenter, GraphicEq, LiveTv, MusicNote, School, SportsEsports, TheaterComedy } from "@mui/icons-material"
import { colors } from "../constants/colors"


const category = [
    { name : "New", icon: <Home />},
    { name: "Movie", icon: <OndemandVideo />},
    { name : "Live", icon: <LiveTv />},
    { name : "Gaming", icon: <SportsEsports />},
    { name : "Education", icon: <School />},
    { name : "Sport", icon: <FitnessCenter />},
    { name : "Comedy", icon: <TheaterComedy />},
    { name : "Podcast", icon: <GraphicEq />},
    { name : "Fashion", icon: <Checkroom />},
    { name : "Crypto", icon: <DeveloperMode />},
    { name : "Gym", icon: <FitnessCenter />},
    { name : "Beauty", icon: <FaceRetouchingNatural />},
    { name : "Music", icon: <MusicNote />},
]

const Category = ({selectedCategoryHandler, selectedCategory}) => {
  return (
    <Stack direction={'row'} sx={{ overflowX: 'scroll'}}>
        {category.map(item => (
            <button 
                key={item.name} 
                className="category_btn" 
                style={{ 
                    borderRadius: '0',
                    background: item.name === selectedCategory && colors.secondary,
                    color: item.name === selectedCategory && "#fff"
                }} 
                onClick={() => selectedCategoryHandler(item.name)}>
                <span 
                    style={{ color: item.name === selectedCategory ? "#fff" : colors.secondary, marginRight: '15px'}}>{item.icon}</span>
                <span style={{ opasity: 1}}>{item.name}</span>
            </button>
        ))}
    </Stack>
  )
}

export default Category