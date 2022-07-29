# Football Team Generator

A website developed to help users create and visualise a football team.

## Prerequisites

The following software and tools required.

* Java JDK (version 11.0 or higher)
* Apache Maven
* Git (version control
* MySQL (database)
* Eclipse IDE 

## Project Management

I used Jira to track progress and implemented Agile.

![image](https://user-images.githubusercontent.com/105277382/181747390-e6769a95-08e1-41a9-9c3a-95ce89f405e7.png)

## Installation

### Clone the repository
```
git@github.com:MuhammadShayekurRahman/Football-Team-Generator.git

```
### Create Schema in SQLWorkBench with the name: *footballteamgenerator*

```
create database footballTeamGenerator;

```

### Execute the Jar file to start application

```
java -jar 1.0-fat.jar
```

### Running the website

The website can be found in ``` "/src/main/resources/static/index.html" ``` or by clicking [here](https://github.com/MuhammadShayekurRahman/Football-Team-Generator/blob/dev/src/main/resources/static/index.html)

User can open this with a browser or with a live server via VSCode.

## Database

**Current ERD**

![Initial ERD](https://user-images.githubusercontent.com/105277382/181748413-1b03609d-1c20-451c-a4e4-489ee4cb1de6.PNG)

**Future Improvements** : The table below is ideal for the website as it would allow for different users to have the same team name if they wish.

![Future ERD](https://user-images.githubusercontent.com/105277382/181748655-cd49326b-ffd4-4e96-9b73-9d9089c89974.PNG)

## Back-End Development

![image](https://user-images.githubusercontent.com/105277382/181749042-4e9f792a-d8e7-430a-82ec-5451733b5ae8.png)

Example: [Create Method]

![image](https://user-images.githubusercontent.com/105277382/181749093-da452860-b28f-4eb7-9d2f-ee7bd4e91506.png)


## Front-End Development
 - Used HTML to create the fundamental layout of page.

**Front-end wire frame**

![image](https://user-images.githubusercontent.com/105277382/181750384-e13fd122-fdc5-43e5-a933-e23edd28b8c9.png)


 - CSS and BootStrap were used for styling.
 - JavaScript was used in order to retrieve and handle information via axios and would display information onto page through DOM manipulation.
 - Here is an example of code which I used data in my table to refer to an element in HTML, this allowed me to display players in a formation which is useful for the user:

![image](https://user-images.githubusercontent.com/105277382/181750003-9d7d0333-9902-4219-bfff-f9658a5cdf0d.png)

### Front-End Testing

In future, I am to implement front-end testing via Selenium and SonarQube. As front-end testing was removed from the scope, it has been left out. 

## Using the Website

### Home page

![image](https://user-images.githubusercontent.com/105277382/181750676-12cadce7-22b8-4400-ac29-04bf1cfc357d.png)

### Create Team Page

![image](https://user-images.githubusercontent.com/105277382/181750835-65c9b453-efee-492a-bc27-a0eca3a28e74.png)

### View Team Page

![127 0 0 1_5500_view-team html](https://user-images.githubusercontent.com/105277382/181756665-1105c35c-36b4-4b90-bee2-c7bb9cc0cab0.png)

### Update Page

![127 0 0 1_5500_update-player html_id=25 firstName=E surname=Cavani position=ST-L shirtNumber=21 teamName=Manchester%20United](https://user-images.githubusercontent.com/105277382/181756821-b5ad4ad0-39c4-4780-bc4b-e133929bbdb5.png)


## Testing

![image](https://user-images.githubusercontent.com/105277382/181748098-377991b3-1ba7-40f7-9103-4297910a1c71.png)

**Coverage: 97.2%**

JUnit:

![image](https://user-images.githubusercontent.com/105277382/181757313-5ddbcaef-009b-4757-9e29-bb0fe8f9ebf3.png)

Mockito:

![image](https://user-images.githubusercontent.com/105277382/181757336-a72990b8-4033-458d-8b19-7951d7ca6926.png)


## Built With

* [Maven](https://maven.apache.org/) - Dependency Management

## Versioning

GitHub Version Control [GitHub](http://github.com) for versioning.

## Authors

* **Muhammad Shayekur Rahman** - [Git](http://github.com/muhammadShayekurRahman)

## License

This project is licensed under the MIT license - see the [LICENSE.md](LICENSE.md) file for details 

## Acknowledgements

* Special thanks to QA, Jordan Harrison and Jordan Benbelaid.