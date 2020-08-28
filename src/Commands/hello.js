const Command = require('../Structures/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			name: 'hello',
			aliases: ['hallo'],
			description: 'A simple help command.'
		});
	}

	// eslint-disable-next-line no-unused-vars
	async run(message, args) {
		message.channel.send('Hello!');
	}

};
