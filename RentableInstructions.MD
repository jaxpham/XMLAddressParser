Rentable - Integrations Software Engineer - Coding Exercise

What do I need to submit?

Please write a program that meets the conditions outlined in the next section. You can use any
server-side language and libraries you are comfortable with. You can use third party libraries
and we recommend using an existing XML parsing library if you need to. Rentable uses Ruby
on Rails with the Nokogiri Gem.

We must be able to run your program, provide any documentation necessary to accomplish this
as part of the project you submit. Please assume the reviewer has not executed an application
in your language/framework before when developing your documentation.

How much time should I spend on this?

There is no time limit for the exercise. Out of respect for your time, we designed this exercise
with the intent that it should take you a few hours. Typically candidates spend 1-2 hours on this
but please take as much time as you need to complete the work.

What does it need to do?
As a programmer, I’d like to parse and map an XML file to an expected output given the format.
The XML file should be read from
https://s3.amazonaws.com/abodo-misc/sample_abodo_feed.xml and formatted to the expected
format defined below. For each property in the feed, extract each of the following values:

● property_id - Found at ./PropertyID/Identification/@IDValue
● name - Found at ./PropertyID/MarketingName
● email - Found at ./PropertyID/Email

!!!!Only add the property to the output if the property location is in Madison.


Extra credit:
● Parse out the number of bedrooms
● Save data into a database
● Save data into a dynamoDB database. We recommend using dynamoDB in a docker
container, which can be found here:
https://hub.docker.com/r/amazon/dynamodb-local/ however may also use AWS
hosted dynamoDB via an amazon web services account
● Queue a background job that fetches weather data for the property and update the
database. You can use this weather API:
https://www.weather.gov/documentation/services-web-api
Example: https://api.weather.gov/gridpoints/TOP/31,80/forecast
● Generate statistics on how the run performed and dumping them into a database.

Expected Format:

properties = [
{
property_id: <value>,
name: <value>,
email: <value>
},
...
]


How will this exercise be evaluated?
An engineer will review the code you submit. At a minimum they must be able to run the
program and the program must provide the expected results. You should provide any necessary
documentation. While your solution doesn’t need to be fully production ready, you are being
evaluated so put your best foot forward.

I have questions about the problem statement
For any requirements not specified via an example, use your best judgement to determine the
expected result.

How do I submit it?
Please provide a link to a public repository, such as GitHub or BitBucket or zip up the contents
in a zip file.

