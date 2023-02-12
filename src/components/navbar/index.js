import {
  CommentRounded as CommentRoundedIcon,
  Home as HomeIcon,
  Info as InfoIcon,
  Menu as MenuIcon,
  PhoneRounded as PhoneRoundedIcon,
  ShoppingCartOutlined as ShoppingCartOutlinedIcon,
  ShoppingCartRounded as ShoppingCartRoundedIcon,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Logo from "assets/Logo.svg";
import { useState } from "react";
import "./Navbar.scss";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },
    {
      text: "Testimonials",
      icon: <CommentRoundedIcon />,
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
    },
    {
      text: "Cart",
      icon: <ShoppingCartRoundedIcon />,
    },
  ];

  return (
    <header>
      <Container>
        <nav>
          <div className="navLogo">
            <img src={Logo} alt="" />
          </div>
          <div>
            <ul className="navLink">
              <li>
                <Link underline="none" href="#">
                  Home
                </Link>
              </li>
              <li>
                <Link underline="none" href="#">
                  About
                </Link>
              </li>
              <li>
                <Link underline="none" href="#">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link underline="none" href="#">
                  Contact
                </Link>
              </li>
              <li>
                <Link underline="none" href="#">
                  <ShoppingCartOutlinedIcon />
                </Link>
              </li>
              <li>
                <Button className="btn btn-secondary">Booking Now</Button>
              </li>
            </ul>
          </div>
          <div className="navMenu">
            <MenuIcon onClick={() => setOpenMenu(true)} />
          </div>
          <Drawer
            open={openMenu}
            onClose={() => setOpenMenu(false)}
            anchor="right"
          >
            <Box
              sx={{ width: 250 }}
              role="presentation"
              onClick={() => setOpenMenu(false)}
              onKeyDown={() => setOpenMenu(false)}
            >
              <List>
                {menuOptions.map((item) => (
                  <ListItem key={item.text} disablePadding>
                    <ListItemButton>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.text} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
              <Divider />
            </Box>
          </Drawer>
        </nav>
      </Container>
    </header>
  );
};
export default Navbar;
