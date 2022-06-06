import React from 'react';
import { Box, Typography, Tabs, Tab } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useStoreContext } from "../hooks/GlobalState";
import { SELECT_TAB } from "..//hooks/actions";

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  '& .MuiTabs-indicator': {
    display: "none"
  },
  '& .MuiTabs-indicatorSpan': {
    display: "none"
  },
  "& .MuiButtonBase-root":{
    color: "orange"
  }
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(18),
    marginRight: theme.spacing(1),
    '&.Mui-selected': {
      opacity: '50%',
      color: "grey"
    },
    '&.Mui-focusVisible': {
      
    },
    '@media (max-width:720px)': {
      fontSize: '1.8vh',
    },
    '@media (max-width:480px)': {
      fontSize: '1.3vh',
    }
  }),
);

const Nav = () => {
  const [state, dispatch] = useStoreContext();
  const { tabData, selectTab } = state;

  const handleChange = (event, newValue) => {
    dispatch({
      type: SELECT_TAB,
      selectTab: newValue
    });
  };

  return (
    <Box sx={{
        display: "flex", 
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 20px"
      }}>
      <Typography variant="h3" sx={{
        fontSize: "5vh",
        '@media (max-width:980px)': {
          fontSize: '4vh',
        },
        '@media (max-width:720px)': {
          fontSize: '3vh',
        },
        '@media (max-width:600px)': {
          fontSize: '1.9vh',
        },
        '@media (max-width:480px)': {
          fontSize: '1.6vh',
        }
      }}>
        Please select one font
      </Typography>
      <StyledTabs
        value={selectTab}
        onChange={handleChange}
        aria-label="secondary tabs example"
      >
        {
          tabData.map(font => (
            <StyledTab value={font.id} key={font.id} label={font.label} />
          ))
        }
      </StyledTabs>
    </Box>
  )
}

export default Nav;