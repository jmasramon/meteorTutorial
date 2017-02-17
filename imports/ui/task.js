/* esversion: 6*/
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import { Tasks } from '../api/tasks.js';

import './task.html'

Template.task.onCreated(function taskOnCreated() {
});


Template.task.events({
	'click .toggle-checked'(event){
	    event.preventDefault();
	    Tasks.update(this._id, {
	    	$set: { checked: ! this.checked}
	    })
	},
	'click .delete'(event) {
	    event.preventDefault();
		Tasks.remove(this._id);
	}
});

