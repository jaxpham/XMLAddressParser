## Overview
Wrote a program using javascript, xml2js, and concat-stream to parse a XML file hosted online to return properties from a specific city in the expected format:
properties = [
  {
  property_id: <value>,
  name: <value>,
  email: <value>
  },
  ...
]

## Getting Started

1. Clone this repo or fork to your own repo
2. cd into the directory on your local machine
3. Install dependencies

```
npm install
```
node index.js in the terminal

## Thought Process
(for more details see [JacksonNotes](https://github.com/jaxpham/XMLAddressParser/blob/main/JacksonNotes.MD))

## Future Goals
- Parse out the number of bedrooms (Complete)
- Save data into a database
  - I would use a node sql such as MySql or Postgresql to insert into a database
- Save data into a dynamoDB database. We recommend using dynamoDB in a docker
container, which can be found here:
https://hub.docker.com/r/amazon/dynamodb-local/ however may also use AWS
  hosted dynamoDB via an amazon web services account
- Queue a background job that fetches weather data for the property and update the
database. You can use this weather API:
https://www.weather.gov/documentation/services-web-api
Example: https://api.weather.gov/gridpoints/TOP/31,80/forecast
- Generate statistics on how the run performed and dumping them into a database.
