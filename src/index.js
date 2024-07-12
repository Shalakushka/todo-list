import './css/style.css';
import Container from './js/Container';
import Project from './js/Project';
import Task from './js/Task';

function defaultProjectList() {
    let sampleTask = new Task("Click this checkbox", false);
    let sampleProject = new Project("Visit this page");

    sampleProject.addTask(sampleTask);
    return [sampleProject];
}

const projectList = defaultProjectList();
console.log(projectList);