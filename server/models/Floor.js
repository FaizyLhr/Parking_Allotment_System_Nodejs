const mongoose = require("mongoose");
const slug = require("slug");

const FloorSchema = new mongoose.Schema(
	{
		slug: { type: String, unique: true, required: true, trim: true },
		addFloor: { type: Boolean, default: false },
		numFloor: { type: Number, unique: true, required: true },
		// Method 1
		spots: { type: Array },
		// Method 2
		// spots: { type: mongoose.Schema.Types.Mixed },
		// Method 3
		// spots: [
		// 	{
		// 		isFree: { type: Boolean, default: true },
		// 		spotNum: { type: Number, min: 1, max: 25, required: true },
		// 	},
		// ],
	},
	{ timestamps: true }
);

// FloorSchema.pre("save", function (next) {
// 	for (let i = 0; i < 25; i++) {
// 		this.spots.push({
// 			spotNum: i + 1,
// 		});
// 	}

// 	next();
// });

FloorSchema.pre("validate", function (next) {
	if (!this.slug) {
		this.slugify();
	}
	next();
});

FloorSchema.methods.slugify = function () {
	this.slug = slug(((Math.random() * Math.pow(36, 6)) | 0).toString(36));
};

FloorSchema.methods.toJSON = function () {
	return {
		floor: {
			slug: this.slug,
			numFloor: this.numFloor,
			addFloor: this.addFloor,
			spots: this.spots,
		},
	};
};

module.exports = mongoose.model("Floor", FloorSchema);
