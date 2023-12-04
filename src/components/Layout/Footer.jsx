import React from 'react';
import classes from './Footer.module.scss';
import { Box, Container, Grid, Card,
  CardContent,
  List,
  ListItem,
  ListItemText, Typography, CssBaseline } from '@mui/material';

export default function Footer() {

  const cards = [
    {
      title: "What I can do for you",
      text: "Faster, better products that your users love. Here's all the services I provide:",
      list: [
        "Design Strategy",
        "Web and Mobile App Design",
        "Front-end Development",
      ],
    },
    {
      title: "Applications I'm fluent in",
      text: "Every designer needs the right tools to do the perfect job. Thankfully, I'm multilingual.",
      list: ["Sketch", "Webflow", "Figma"],
    },
    {
      title: "What you can expect",
      text: "I design products that are more than pretty. I make them shippable and usable.",
      list: [
        "Clean and functional",
        "Device and user friendly",
        "Efficient and maintainable",
      ],
    },
    // Add similar objects for other cards...
  ];

  return (
   <>
   <CssBaseline />
   <Box>
   <Container maxWidth='xl'>
      <Grid container spacing={6}  >
          {cards.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card align="center" className={classes.card}>
                <CardContent>
                  <Typography variant="h5" style={{ fontWeight: "bold" }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body1" style={{ marginTop: '20px', marginBottom: '20px' }}>{item.text}</Typography>
                  <List>
                    {item.list.map((text, index) => (
                      <ListItem key={index}>
                        {/* <ListItemText
                          style={{ fontWeight: "bold" }}
                          primary={
                            <>
                              
                            </>
                          }
                        /> */}
                        <ListItemText>
                            <Typography variant="body1" style={{ fontWeight: 'bold' }} >
                              {text}
                            </Typography>
                        </ListItemText>
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
   </Box>
   </>
  );
}
