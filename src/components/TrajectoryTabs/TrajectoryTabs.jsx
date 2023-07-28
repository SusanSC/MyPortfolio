import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import TodayTwoToneIcon from "@mui/icons-material/TodayTwoTone";
import TrajectoryTabsStyle from "./TrajectoryTabsStyle.css";

function TrajectoryTabs(props) {
  const isLight = props.isLight;

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const stepsEducation = [
    {
      institution: "Udemy",
      date: "July 2023",
      title: "Full Stack Web Development Bootcamp",
    },
    {
      institution: "U.I.A.",
      date: "Ongoing",
      title: "Information Systems Engineering",
    },
  ];

  const stepsWork = [
    {
      organization: "Coopecaja R.L.",
      date: "November 2015-December 2017",
      position: "DBA",
    },
    {
      organization: "BAC Credomatic",
      date: "October 2019-October 2022",
      position: "Regional Incident Manager ",
    },
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <TabContext value={value}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="secondary tabs example"
          TabIndicatorProps={{
            style: {
              backgroundColor: "#9575DE",
            },
          }}
        >
          <Tab
            sx={{
              fontFamily: "monospace",
            }}
            id={isLight ? "trajectoryTabsLight" : "trajectoryTabsDark"}
            value="1"
            icon={
              <img
                className={
                  isLight ? "trajectoryImageLight" : "trajectoryImageDark"
                }
                src="images/education2.png"
              />
            }
            label="Education"
          />
          <Tab
            sx={{ fontFamily: "monospace" }}
            id={isLight ? "trajectoryTabsLight" : "trajectoryTabsDark"}
            value="2"
            icon={
              <img
                className={
                  isLight ? "trajectoryImageLight" : "trajectoryImageDark"
                }
                src="images/work2.png"
              />
            }
            label="Work"
          />
        </Tabs>
        <div className="stepsContainer">
          <TabPanel value="1">
            <Box sx={{ width: "100%", marginTop: "30px" }}>
              <Stepper activeStep={3} alternativeLabel>
                {stepsEducation.map((label) => (
                  <Step
                    key={label.institution}
                    sx={{
                      "& .MuiStepConnector-line": {
                        borderColor: "#9575DE",
                        borderTopWidth: "3px",
                        marginTop: "6px",
                      },
                    }}
                  >
                    <StepLabel
                      StepIconProps={{
                        style: {
                          display: "none",
                        },
                        icon: <TodayTwoToneIcon fontSize="large" />,
                      }}
                    >
                      <p
                        className={
                          isLight ? "trajectoryPLight" : "trajectoryPDark"
                        }
                      >
                        {label.institution}
                      </p>
                      <span className="trajectoryS">{label.date}</span>
                      <p
                        className={
                          isLight ? "trajectoryPLight" : "trajectoryPDark"
                        }
                      >
                        {label.title}
                      </p>
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>
          </TabPanel>

          <TabPanel value="2">
            <Box sx={{ width: "100%", marginTop: "30px" }}>
              <Stepper activeStep={3} alternativeLabel>
                {stepsWork.map((label) => (
                  <Step
                    key={label.organization}
                    sx={{
                      "& .MuiStepConnector-line": {
                        borderColor: "#9575DE",
                        borderTopWidth: "3px",
                        marginTop: "6px",
                      },
                    }}
                  >
                    <StepLabel
                      StepIconProps={{
                        style: {
                          display: "none",
                        },
                        icon: <TodayTwoToneIcon fontSize="large" />,
                      }}
                    >
                      <p
                        className={
                          isLight ? "trajectoryPLight" : "trajectoryPDark"
                        }
                      >
                        {label.organization}
                      </p>
                      <span className="trajectoryS">{label.date}</span>
                      <p
                        className={
                          isLight ? "trajectoryPLight" : "trajectoryPDark"
                        }
                      >
                        {label.position}
                      </p>
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>
          </TabPanel>
        </div>
      </TabContext>
    </Box>
  );
}

export default TrajectoryTabs;
