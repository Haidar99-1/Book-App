import * as React from 'react';
import { CardActionArea,Typography ,Button, CardMedia, Card, CardContent} from '@mui/material';
import "../App.css"

interface Props {
    image: string;
    authorName: string;
    description: string;
    link: string;
}

const BookCard: React.FC<Props> = ({ image, authorName, description, link }: Props) => {
    const cardStyle = {
        width: '20rem',
        padding: '20px',
        backgroundColor: '#fff',
        boxShadow: '20px 10px 10px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.2s ease', 
    }

    return (
        <Card sx={{ maxWidth: 350 }} style={cardStyle}
      >
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="250px"
                    image={image}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {authorName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                       {description}
                    </Typography>
                </CardContent>
                <Button size="small" color="primary" href={link} target="_blank">Buy</Button>
            </CardActionArea>
        </Card>
    )
}


export default BookCard;