// import React from 'react';
// import cx from 'clsx';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import TextInfoContent from '@mui-treasury/components/content/textInfo';
// import { useBlogTextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/blog';
// import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';

// const useStyles = makeStyles(({ breakpoints, spacing }) => ({
//   root: {
//     margin: 'auto',
//     borderRadius: spacing(1), // 16px
//     transition: '0.3s',
//     boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
//     position: 'relative',
//     // maxWidth: 500,
//     // marginLeft: 'auto',
//     // overflow: 'initial',s
//     background: '#ffffff',
//     display: 'block',
//     // flexDirection: 'column',
//     alignItems: 'center',
//     // paddingBottom: spacing(2),
//     [breakpoints.up('md')]: {
//       flexDirection: 'row',
//       // paddingTop: spacing(2),
//     },
//   },
//   media: {
    
//     // width: '80%',
//     // marginLeft: 'auto',
//     // marginRight: 'auto',
//     // marginTop: spacing(-3),
//     // height: '10%',
//     paddingBottom: '17%',
//     borderRadius: spacing(0.5),
//     backgroundColor: '#fff',
//     // position: 'relative',
//     [breakpoints.up('md')]: {
//       width: '100%',
//       // marginLeft: spacing(-3),
//       // marginTop: '5px',
//       // transform: 'translateX(-8px)',
//     },
//     '&:after': {
//       content: '" "',
//       position: 'absolute',
//       top: 0,
//       left: 0,
//       width: '100%',
//       // height: '100%',
//       // backgroundImage: 'linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)',
//       // borderRadius: spacing(2), // 16
//       // opacity: 0,
//     },
//   },
//   // content: {
//   //   padding: 24,
//   // },
//   cta: {
//     marginTop: 24,
//     textTransform: 'initial',
//   },
// }));

// export const ShowcaseCardDemo = React.memo(function BlogCard(props) {
//   const styles = useStyles();
//   const {
//     button: buttonStyles,
//     ...contentStyles
//   } = useBlogTextInfoContentStyles();
//   const shadowStyles = useOverShadowStyles();
//   return (
//     <div>
//     <Card className={cx(styles.root, shadowStyles.root)}>
//       <CardMedia
//         className={styles.media}
//         image={
//           props.image
//         }
//       />
//       <CardContent>
//         <TextInfoContent
//           // classes={contentStyles}
//           overline={props.date}
//           heading={props.name}
          
//         />
//         {/* <Button className={buttonStyles} style={{float:"right"}}>Start course</Button>
//         <br></br> */}
//       </CardContent>
//     </Card>
//     <br></br>
//     <br></br>
//     </div>
//   );
// });

import React from 'react';
import NoSsr from '@material-ui/core/NoSsr';
// import GoogleFontLoader from 'react-google-font-loader';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Row, Item } from '@mui-treasury/components/flex';
import { Info, InfoSubtitle, InfoTitle } from '@mui-treasury/components/info';
import { useNewsInfoStyles } from '@mui-treasury/styles/info/news';
import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(() => ({
  card: {
    minWidth: 320,
    position: 'relative',
    boxShadow: '0 8px 24px 0 rgba(0,0,0,0.12)',
    overflow: 'visible',
    borderRadius: '1.5rem',
    transition: '0.4s',
    '&:hover': {
      transform: 'translateY(-2px)',
      '& $shadow': {
        bottom: '-1.5rem',
      },
      '& $shadow2': {
        bottom: '-2.5rem',
      },
    },
    '&:before': {
      content: '""',
      position: 'absolute',
      zIndex: 0,
      display: 'block',
      width: '100%',
      bottom: -1,
      height: '100%',
      borderRadius: '1.5rem',
      backgroundColor: 'rgba(0,0,0,0.08)',
    },
  },
  main: {
    overflow: 'hidden',
    borderTopLeftRadius: '0.5rem',
    borderTopRightRadius: '0.5rem',
    borderBottomLeftRadius: '0.5rem',
    borderBottomRightRadius: '0.5rem',
    zIndex: 1,
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      display: 'block',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(to top, #014a7d, rgba(0,0,0,0))',
    },
  },
  content: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    zIndex: 1,
    padding: '1.5rem 1.5rem 1rem',
  },
  avatar: {
    width: 48,
    height: 48,
  },
  tag: {
    display: 'inline-block',
    fontFamily: "'Sen', sans-serif",
    backgroundColor: '#28B463',
    borderRadius: '0.5rem',
    padding: '2px 0.5rem',
    color: '#fff',
    fontWeight:"bold",
    fontSize: '0.8rem',
    marginBottom: '0.5rem',
  },
  title: {
    fontFamily: "'Sen', sans-serif",
    fontSize: '1.5rem',
    fontWeight: 800,
    color: '#fff',
  },
  author: {
    zIndex: 1,
    position: 'relative',
    borderBottomLeftRadius: '1.5rem',
    borderBottomRightRadius: '1.5rem',
  },
  shadow: {
    transition: '0.2s',
    position: 'absolute',
    zIndex: 0,
    width: '88%',
    height: '100%',
    bottom: 0,
    borderRadius: '1.5rem',
    backgroundColor: 'rgba(0,0,0,0.06)',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  shadow2: {
    bottom: 0,
    width: '72%',
    backgroundColor: 'rgba(0,0,0,0.04)',
  },
}));

export const ShowcaseCardDemo = React.memo(function News3Card(props) {
  const styles = useStyles();
  const mediaStyles = useCoverCardMediaStyles();
  let history = useHistory();
  function Click(){
    console.log("clicked")
    console.log(props.name)
  console.log(props)
  switch(props.name){
    case "IT Workshop":
      return history.push('/first')
    // case "Master of Science in Information Technology":
    //   return history.push('/course')
    // case "Dummy_alpha":
    //     return history.push('/second')
    default:
      return history.push('/')
  }
  // this.props.history.push("/first");
  // window.location="/second";
  {/* <Link to='/'>Go to Aboutpage</Link> */}
  }
  return (
    <div>
      <NoSsr>
        {/* <GoogleFontLoader fonts={[{ font: 'Sen', weights: [400, 800] }]} /> */}
      </NoSsr>
      <Card className={styles.card} onClick={Click}>
        <Box className={styles.main} minHeight={230} position={'relative'}>
          <CardMedia 
            classes={mediaStyles}
            image={
              props.image
            }
          />
          <div className={styles.content}>
            <div className={styles.tag}>{props.date}</div>&nbsp;
            {/* <div className={styles.tag}>Incomplete</div>&nbsp;
            <div className={styles.tag}>A+</div> */}
            <Typography className={styles.title}>
              {props.name}
            </Typography>
          </div>
        </Box>
        {/* <Row
          className={styles.author}
          m={0}
          p={3}
          pt={2}
          gap={2}
          bgcolor={'common.white'}
        > */}
          {/* <Item>
            <Avatar
              className={styles.avatar}
              src={'https://i.pravatar.cc/300?img=13'}
            />
          </Item> */}
          {/* <Info position={'middle'} useStyles={useNewsInfoStyles}>
            <InfoTitle>Nadine Petrolli</InfoTitle>
            <InfoSubtitle>Jul 20 | 2 Min Read</InfoSubtitle>
          </Info> */}
        {/* </Row> */}
        <div className={styles.shadow} />
        <div className={`${styles.shadow} ${styles.shadow2}`} />
      </Card>
      <br></br>
    </div>
  );
});
export default ShowcaseCardDemo;