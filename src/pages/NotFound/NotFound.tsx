import { Box, Typography } from '@mui/material'
import { useParams, useLocation, useNavigate } from "react-router-dom";

const NotFound = () => {
    const { id } = useParams();

    return (
        <Box sx={{ alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant="h1" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
                404 NOT FOUND
            </Typography>
            <Typography variant="h3" component="div" sx={{ flexGrow: 1, textAlign: 'center', mt:1 }}>
                Movie with id {id} does not exist
            </Typography>
        </Box>
    )
}

export default NotFound
