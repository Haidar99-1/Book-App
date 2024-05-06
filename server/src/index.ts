import express, { Express, Request, Response } from "express";
const cors = require('cors');
import dotenv from "dotenv";

dotenv.config();
// google api key: AIzaSyDQfIEFE5R_pICozaA7u_wL2HnoqAlPnsk, key=API_KEY 
const app: Express = express();
app.use(cors());
const port = process.env.PORT;
const nyt_api_key = process.env.API_KEY
const google_api_key = process.env.GOOGLE_API_KEY

app.get("/", (req: Request, res: Response) => {
  res.send("My Server");
});

//https://www.googleapis.com/books/v1/volumes?q=inauthor:"Richard+Moreno"

app.get('/authorSearch/', async (req: Request, res: Response) => {
  try {
    const { authorName } = req.query;
    if (!authorName) {
      return res.status(400).json({ error: 'Missing authorName parameter.' });
    }
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=inauthor:${authorName}&key=${google_api_key}`);
    const responseObject = await response.json();

    res.json(responseObject);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

app.get('/bookSearch/', async (req: Request, res: Response) => {
  try{
    const { book } = req.query;
    console.log("book", req.query)
    if(!book){
      return res.status(400).json({error: 'Missing book parameter.'});
    }
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${book}&key=${google_api_key}`);
    const responseObject = await response.json();

    res.json(responseObject);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

app.get('/isbnSearch/', async (req: Request, res: Response) => {
  try{
    const {isbn} = req.query;
    if(!isbn){
      return res.status(400).json({error: 'Missing isbn parameter.'});
    }
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}&key=${google_api_key}`);
    const responseObject = await response.json();

    res.json(responseObject);
  }catch(error){
    console.error('Error fetching data:', error);
    res.status(500).json({error: 'Internal server error.'});
  }

})
app.get('/bestSeller/', async (req: Request, res: Response) => {
  try {
    const { date } = req.query;
    console.log("date", date)

    if (!date) {
      return res.status(400).json({ error: 'Missing date parameter.' });
    }

    const response = await fetch(`https://api.nytimes.com/svc/books/v3/lists/full-overview.json?published_date=${date}&api-key=${nyt_api_key}`);
    const responseData = await response.json();

    res.json(responseData);

  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});