import { IconButton } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const CustomNextArrow = ({ onclick }: { onclick?: () => void }) => {
    return (
        <IconButton
            onClick={onclick}
            style={{
                position: "absolute",
                right: -40,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 1,
                color: "white"
            }}
        >
            <ArrowForwardIosIcon />
        </IconButton>
    );
};