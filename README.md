# VOSS

This is the VOSS Technical Assessment Question 1

# How To Setup

- Ensure Nodejs LTS (https://nodejs.org/en/) Is Installed (Use The LTS If You Are New To Javascript)
- Clone The Project Down Utilising The Following Command `git clone git@github.com:Archangelza1/VOSS.git`
- Execute The Following Command In The Root Directory Of The Project `npm install` ( This Will Install All Dependencies For The Project )
- Execute Either One Of The Following Commands To Run The Entire Suite On Either Chrome Or Firefox 
  - `npm run test:chrome`
  - `npm run test:firefox`
- The Tests Will Execute Across Multiple Threads In Order To Increase The Speed Of The Execution
- Once They Are Complete An HTML Web Page Will Open With The Test Steps Executed And What Passed And What Failed

# Troubleshooting

- I Get An Error Executing On Initial Launch?
  - This Is Due To Since This Execution Is Locally Executed Utilising A Standalone Selenium Server You Will Need To Have Both Firefox And Chrome Installed Locally In Order For It To Work
 
- I Want To Run This On A CI Pipeline Without Chrome And Firefox Installed On A Docker Image
  - You Can Utilise A Cloud Service Such As Saucelabs Or Browserstack In Order To Run On A CI Pipeline However If You Would Like A Self Hosted Solution That Is Scalable You Are Able To Run It On A Zalenium Instance Which Is Hosted In A K8s Cluster


# Question 2 Link

 - https://www.getpostman.com/collections/2d3d4d11ea40ce94709a
