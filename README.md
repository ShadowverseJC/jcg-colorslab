# **COLORS Application**

A web-based color management system that allows users to login and manage their personal collection of colors. Users can add new colors to their collection and search through their saved colors.

##### 

##### Technologies Used

###### 

###### Backend



* PHP 7.4+ - Server-side scripting language
* MySQL 8.0+ - Relational database management system
* Apache Web Server - HTTP server for hosting the application



###### Frontend



* HTML5 - Markup structure
* CSS3 - Application styling
* JavaScript (ES6) - Client-side interactivity and AJAX requests
* MD5.js - Third-party library for password hashing (currently commented out)



###### Architecture



* RESTful API - JSON-based communication between frontend and backend
* Session Management - Cookie-based user authentication
* AJAX - Asynchronous client-server communication



##### Setup Instructions

###### Prerequisites



* Apache web server with PHP 7.4+
* MySQL 8.0+ database server
* Modern web browser



###### Database Configuration



1. Create the database and tables using the following SQL:



CREATE DATABASE COP4331;

USE COP4331;



CREATE TABLE `Users` (

&nbsp;   `ID` INT NOT NULL AUTO\_INCREMENT,

&nbsp;   `FirstName` VARCHAR(50) NOT NULL DEFAULT '',

&nbsp;   `LastName` VARCHAR(50) NOT NULL DEFAULT '',

&nbsp;   `Login` VARCHAR(50) NOT NULL DEFAULT '',

&nbsp;   `Password` VARCHAR(50) NOT NULL DEFAULT '',

&nbsp;   PRIMARY KEY (`ID`)

) ENGINE = InnoDB;



CREATE TABLE `Colors` (

&nbsp;   `ID` INT NOT NULL AUTO\_INCREMENT,

&nbsp;   `Name` VARCHAR(50) NOT NULL DEFAULT '',

&nbsp;   `UserID` INT NOT NULL DEFAULT '0',

&nbsp;   PRIMARY KEY (`ID`)

) ENGINE = InnoDB;



2\. Create database user:



CREATE USER 'TheBeast'@'localhost' IDENTIFIED BY 'WeLoveCOP4331';

GRANT ALL PRIVILEGES ON COP4331.\* TO 'TheBeast'@'%';

FLUSH PRIVILEGES;



3\. Insert test data:



-- Test user (Username: AYadavally, Password: COP4331)

INSERT INTO Users (FirstName, LastName, Login, Password)

VALUES ('Aashish', 'Yadavally', 'AYadavally', 'COP4331');



-- Sample colors

INSERT INTO Colors (Name, UserID) VALUES

('Blue', 1), ('Red', 1), ('Green', 1), ('Yellow', 1);



###### File Deployment

Deploy the application files to your web server's document root (/var/www/html or equivalent):



/var/www/html/

├── css/

│   └── styles.css

├── images/

│   └── background.png

├── js/

│   ├── code.js

│   └── md5.js

├── LAMPAPI/

│   ├── AddColor.php

│   ├── Login.php

│   └── SearchColors.php

├── index.html

└── color.html

###### 

###### Configuration

Update the API endpoint in js/code.js if your domain differs:



const urlBase = 'http://your-domain.com/LAMPAPI';

The PHP files in LAMPAPI/ are configured to connect using:



* Host: localhost
* Username: TheBeast
* Password: WeLoveCOP4331
* Database: COP4331



###### Running the Application



1. Ensure Apache and MySQL services are running
2. Access the application at: http://your-domain.com/index.html
3. Login with test credentials:	

&nbsp;	Username: AYadavally

&nbsp;	Password: COP4331







###### Using the Application

**Login Page**



* Enter your username and password
* Click login to authenticate
* Upon success, you'll be redirected to the color management page



**Color Management Page**



* Add Color: Enter a color name and click "Add Color"
* Search Colors: Type in the search box to filter your colors by name
* Logout: End your session



**API Endpoints**



The application exposes three RESTful API endpoints (all POST requests):



* /LAMPAPI/Login.php - Authenticates user credentials
* /LAMPAPI/AddColor.php - Adds a new color to user's collection
* /LAMPAPI/SearchColors.php - Searches user's colors by name (partial match)



###### Assumptions and Limitations

**Assumptions**



* MySQL database runs on localhost:3306
* Database credentials are as configured (TheBeast/WeLoveCOP4331)
* Application accessed via HTTP (not HTTPS)
* Cookies enabled in browser
* User accounts created manually via SQL



**Known Limitations**

Security:



* Passwords stored in plain text (MD5 hashing code exists but is commented out)
* Database credentials hardcoded in PHP files
* No HTTPS encryption
* No CSRF protection
* Basic cookie-based sessions without secure flags



Functionality:



* No user registration interface
* No password reset capability
* No ability to delete or edit colors after creation
* No pagination for large color lists
* Limited client-side input validation



Deployment:



* Requires manual database setup
* No automated deployment process
* Assumes standard LAMP stack configuration
