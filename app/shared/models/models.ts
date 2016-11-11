import {ICourse} from '../interfaces';

export class Course implements ICourse {
    public courseName : string;
    public courseId : string;
    public courseCompletion : number;
    public courseCompleted : boolean;
    public courseUrl : string;
    
}