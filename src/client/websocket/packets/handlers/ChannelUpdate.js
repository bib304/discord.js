'use strict';

const AbstractHandler = require('./AbstractHandler');
const Structure = name => require(`../../../../structures/${name}`);

const ClientUser = Structure('ClientUser');
const Guild = Structure('Guild');
const ServerChannel = Structure('ServerChannel');

const Constants = require('../../../../util/Constants');
const CloneObject = require('../../../../util/CloneObject');

class ChannelUpdateHandler extends AbstractHandler {

	constructor(packetManager) {
		super(packetManager);
	}

	handle(packet) {
		let data = packet.d;
		let client = this.packetManager.client;

		let channel = client.store.get('channels', data.id);

		if (channel) {
			client.store.UpdateChannel(channel, data);
		}

	}

};

module.exports = ChannelUpdateHandler;
