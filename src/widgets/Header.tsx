import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Header: React.FC = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    КИНОПОИСК
                </Typography>
                { }
                <Button color="inherit">Главное</Button>
                <Button color="inherit">Мое</Button>
                <Button color="inherit">Подписки</Button>
                <Button color="inherit">Каналы</Button>
                <Button color="inherit">Спорт</Button>
                <Button color="inherit">Игры</Button>
                { }
                <Button color="inherit">
                    <SearchIcon />
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
