Feature: verify login with Scenario Outline
Scenario Outline: verify login success message
Given Provide valid url
When User enter the username as "<username>"
And enetr password as "<password>"
Then click on submit button
And verify login success message as "<message>"
Examples:
| username | password | message |
| mercury1 | mercury1 | Login Successfully |