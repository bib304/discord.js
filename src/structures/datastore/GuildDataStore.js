'use strict';

const AbstractDataStore = require('./AbstractDataStore');

class GuildDataStore extends AbstractDataStore{
	constructor() {
		super();

		this.memberData = {};

		this.register('members');
		this.register('channels');
	}
}

module.exports = GuildDataStore;
