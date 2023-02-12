import { ArrowForward } from "@mui/icons-material";
import { Button, Container } from "@mui/material";
import homepageImage from "assets/home-banner-image.png";
import homepageBg from "../../assets/home-banner-background.svg";
import "./Homepage.scss";

const Homepage = () => {
  return (
    <section className="homepage">
      <div className="homepage__bg-img">
        <img src={homepageBg} alt="" />
      </div>
      <Container>
        <div className="homepage__content">
          <h1 className="homepage__content-header">
            Your Favourite Food Delivered Hot & Fresh
          </h1>
          <p className="homepage__content-body">
            Healthy switcher chefs do all the prep work, like peeding, chopping
            & marinating, so you can cook a fresh food.
          </p>
          <Button className="btn btn-primary" endIcon={<ArrowForward />}>
            Order Now
          </Button>
        </div>
      </Container>
      <div className="homepage__img">
        <img src={homepageImage} alt="" />
      </div>
    </section>
  );
};
export default Homepage;
