import {Component} from '@angular/core';

import {NavController, ItemSliding} from 'ionic-angular';
import {Task} from "./task";
import {AngularFire, FirebaseListObservable} from 'angularfire2'
import {Dialogs} from "ionic-native";
@Component({
  selector: 'page-tasklist',
  templateUrl: 'tasklist.html'
})
export class TaskListPage {
  tasks: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public af: AngularFire) {
    this.tasks = af.database.list('/tasks');
  }

  addItem() {
    // let theNewTask: string = prompt("New Task");
    // if (theNewTask !== '') {
    //   this.tasks.push({title: theNewTask, status: 'open'});
    // }
    Dialogs.prompt('Add a task', "Ionic2Do", ['Ok', 'Cancel'], '')
      .then(theResult => {
        if ((theResult.buttonIndex == 1) && (theResult.input1 !== '')) {
          this.tasks.push({title: theResult.input1, status: 'open'});
        }
      });
  }

  markAsDone(slidingItem: ItemSliding, task: Task) {
    // task.status = 'done';
    this.tasks.update(task.$key, {status: 'done'});
    slidingItem.close();
  }

  removeTask(slidingItem: ItemSliding, task: Task) {
    // task.status = 'removed';
    // let index = this.tasks.indexOf(task);
    // if (index > -1) {
    //   this.tasks.splice(index, 1);
    // }
    this.tasks.remove(task.$key);
    slidingItem.close();
  }


}
