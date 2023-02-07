import app from "./app";
import dotenv from 'dotenv'

dotenv.config();

app.listen(process.env.PORT, () => {
  console.log(`Server is running at http://localhost:${process.env.PORT}`);
});