import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { getMatrixMovies } from "./matrixMovies";
import { MatrixMovies } from "@entities/MatrixMovies";
import { carouselStyles } from "@widgets/carouselStyles";
import { settings } from "../MatrixCarousel/settingsSliderMatrix";

const MatrixCarousel: React.FC = () => {

    const [matrixs, setMatrixs] = useState<MatrixMovies[]>([]);

    useEffect(() => {
        const fetchActors = async () => {
            const actorsData = await getMatrixMovies();
            console.log(actorsData)
            setMatrixs(actorsData)
        };
        fetchActors();
    }, []);


    return (
        <div style={carouselStyles}>
            <Slider dots={settings.dots}
                infinite={settings.infinite}
                speed={settings.speed}
                slidesToShow={settings.slidesToShow}
                slidesToScroll={settings.slidesToScroll}
                responsive={settings.responsive}
            >
                {matrixs.map((matrix) => (
                    <Card key={matrix.id} style={{ margin: '0 5px' }}>
                        <CardMedia
                            component='img'
                            height='300'
                            image={matrix.poster.previewUrl || 'https://via.placeholder.com/300'}
                            alt={matrix.name} />
                        <CardContent>
                            <Typography variant="h6">{matrix.name}</Typography>
                            <Typography variant="body2" color="textSecondary">
                                Год выхода: {matrix.year}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}

            </Slider>
        </div>)
};

export default MatrixCarousel;