# frontend
QS-Frontend
<br/>
QS is an application for a quesystem for students at NTNU.
<br/>
Start developing on your own
<br/>
To get started developing further on QS yourself, you need to use Git to clone this repository.

Requirements
<br/>
Git
<br/>
Vue
<br/>
IDE of choice


Cloning
<br/>
Using SSH: git@github.com:Prosjekt-IDATT2105/Frontend.git
<br/>
Using HTTPS: https://github.com/Prosjekt-IDATT2105/Frontend.git

How to run QS:
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

How to develop on your own: 
### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


Future development
<br/>
In future development should the page for Lecturrer also be mobileresponsive, and make
it possible for the lecturer to import a csv-file with students and add them to a new subject.
For the student pages will furture work be made to communicate to the studentassistent pages sow the button for go
to queue is disabled when the que is closed and activated when a studenassistent activates the queue.
The application will also need future work on the page where students can se which asigments they miss and how many they 
need to pass the subject. In the studentassistent future work will be made to make it possible to se which student that are getting help when multiple studentassistens work on the same queue. 


Creating releases
<br/>
The release process is automated using a CI/CD pipeline from Azure Static Web Apps CI/CD. To create a release simply create a pull request and merge dev with master. The merge will be detected automatically and a pipeline will be started.

Authors
<br/>
QS was developed by Ida Angell Veglo Klæstad and Vilde Gylterud at NTNU Trondheim for the software engineering course.