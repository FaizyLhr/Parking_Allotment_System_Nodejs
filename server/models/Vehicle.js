const mongoose = require("mongoose");
const slug = require("slug");

const VehicleSchema = new mongoose.Schema(
	{
		slug: { type: String, unique: true, required: true, trim: true },
		number: { type: Number, unique: true, minlength: 4 },
		type: {
			type: Number,
			required: true,
			default: 2,
			enum: [1, 2, 3], //1-Bike 2-car 3-truck
		},
		allocatedFloor: Number,
		owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
		model: { type: String, trim: true },
	},
	{ timestamps: true }
);

VehicleSchema.pre("validate", function (next) {
	if (!this.slug) {
		this.slugify();
	}
	next();
});

VehicleSchema.methods.slugify = function () {
	this.slug = slug(((Math.random() * Math.pow(36, 6)) | 0).toString(36));
};

VehicleSchema.methods.toJSON = function () {
	return {
		vehicle: {
			slug: this.slug,
			number: this.number,
			type: this.type,
			allocatedFloor: this.allocatedFloor,
			owner: this.owner,
			model: this.model,
		},
	};
};

module.exports = mongoose.model("Vehicle", VehicleSchema);
