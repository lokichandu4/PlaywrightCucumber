Feature: login page validation

@regression @sanity
Scenario: login with valid user name and password
Given Provide valid url
When provide valid username and password
Then click on login button
#And verify login is success


@smoke
Scenario: login with valid user name and password with Params
Given Provide valid url
When provide valid username as "mercury" and password as "mercury"
Then click on login button