export const formFields = {
	name: {
		name: "name",
		type: "text",
		options: {
			required: {
				value: true,
				message: "messageRequired",
			},
			minLength: {
				value: 3,
				message: "messageMinLength",
			},
		},
	},

	tel: {
		name: "tel",
		type: "text",
		options: {
			required: {
				value: true,
				message: "messageRequired",
			},
		},
	},

	email: {
		name: "email",
		type: "text",
		options: {
			required: {
				value: true,
				message: "messageRequired",
			},
		},
	},

	comment: {
		name: "comment",
		type: "text",
		options: {},
	},
};
