/*'use strict';

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
require('mongoose-type-email');

const borrowedSchema = mongoose.Schema({
	loanlist: {
		itemType: {type: String, required: true},
        item: {type: String, required: true},
        borrower: {type: String, required: true},
        email: {type: mongoose.SchemaTypes.Email, required: true},
        phone: {type: Number, required: true},
        returnDate: {type: Date, required: true, default: null},
        dateAdded: {type: Date, required: true, default: null}
	},
	items: {
		itemType: {type: String, required: true},
        item: {type: String, required: true}
	},
	borrowList: {
		itemType: {type: String, required: true},
        item: {type: String, required: true},
        loaner: {type: String, required: true},
        email: {type: mongoose.SchemaTypes.Email, required: true},
        phone: {type: Number, required: true},
        returnDate: {type: Date, required: true},
        dateAdded: {type: Date, required: true}
	}

	borrowed.methods.serialize = function() {
  return {
  	loanlist: {
  		id: this._id,
		itemType: this.itemType,
        item: this.item,
        borrower: this.borrower,
        email: this.email,
        phone: this.phone,
        returnDate: this.returnDate,
        dateAdded: this.dateAdded
	},
	items: {
		id: this._id,
		itemType: this.itemType,
        item: this.item
	},
	borrowList: {
		id: this._id,
		itemType: this.itemType,
        item: this.item,
        loaner: this.borrower,
        email: this.email,
        phone: this.phone,
        returnDate: this.returnDate,
        dateAdded: this.dateAdded
	}*/