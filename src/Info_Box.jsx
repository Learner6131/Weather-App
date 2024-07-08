import "./InfoBox.css";
import Card from "@mui/material/Card";
//import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

export default function InfoBox({ info }) {
  const IMG_URL =
    "https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGR1c3R5JTIwd2VhdGhlfGVufDB8fDB8fHww";

  const HOT_URL =
    "https://media.istockphoto.com/id/540761642/photo/thermometer-sun-40-degres-hot-summer-day-high-summer-temperatures.webp?b=1&s=170667a&w=0&k=20&c=RfSoqmPqAg61ZTQc6UdcwFA717gXL5Buk8F4Z_4t6Pw=";
  const COLD_URL =
    "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1632058098906-b947801d0bc9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJhaW55JTIwc2Vhc29ufGVufDB8fDB8fHww";

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 50
                ? HOT_URL
                : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
              {info.humidity > 80 ? (
                <ThunderstormIcon />
              ) : info.temp > 50 ? (
                <WbSunnyIcon />
              ) : (
                <AcUnitIcon />
              )}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <p>Temperature : {info.temp}&deg;C</p>
              <p>Humidity : {info.humidity}</p>
              <p>Max. Temperature : {info.tempMax}&deg;C</p>
              <p>Min. Temperature : {info.tempMin}&deg;C</p>
              <p>
                The weather can be Described as <i>{info.description}</i> and
                feels like : {info.feelsLike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
