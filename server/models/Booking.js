const mongoose = require("mongoose");
const slug = require("slug");

const BookingSchema = new mongoose.Schema(
	{
		slug: { type: String, unique: true, required: true, trim: true },
		allocatedSlot: {
			type: Number,
			default: 0,
		},
		maxTime: {
			type: Date,
			default: new Date(+Date.now() + 5 * 60 * 60 * 1000),
		},
		isPaid: { type: Boolean, default: false },
		vehicle: [{ type: mongoose.Schema.Types.ObjectId, ref: "Vehicle" }],
		owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
		floor: { type: mongoose.Schema.Types.ObjectId, ref: "Floor" },
	},
	{ timestamps: true }
);

BookingSchema.pre("validate", function (next) {
	if (!this.slug) {
		this.slugify();
	}
	next();
});

BookingSchema.methods.slugify = function () {
	this.slug = slug(((Math.random() * Math.pow(36, 6)) | 0).toString(36));
};

BookingSchema.methods.toJSON = function () {
	return {
		booking: {
			slug: this.slug,
			allocatedSlot: this.allocatedSlot,
			maxTime: this.maxTime,
			isPaid: this.isPaid,
			owner: this.owner,
			vehicle: this.vehicle,
			floor: this.floor,
		},
	};
};

module.exports = mongoose.model("Order", BookingSchema);
