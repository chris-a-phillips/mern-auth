const express = require('express');
const Job = require('../models/Job');
const router = express.Router();
const {
	handleValidateId,
	handleRecordExists,
	handleValidateOwnership,
} = require('../middleware/custom_errors');
const { requireToken } = require('../middleware/auth');

// INDEX
// GET api/jobs
router.get('/', (req, res, next) => {
	// Use our Job model to find all of the documents
	// in the jobs collection
	// Then send all of the jobs back as json
  Job.find()
		.populate('owner', 'email -_id')
    .then((jobs) => res.json(jobs));
  });

// SHOW
// GET api/jobs/:id
router.get('/:id', handleValidateId, (req, res, next) => {
  Job.findById(req.params.id)
    .populate('owner')
		.then(handleRecordExists)
		.then((job) => {
			res.json(job);
		})
		.catch(next);
});

// CREATE
// POST api/jobs
router.post('/', requireToken, (req, res, next) => {
	Job.create(req.body)
		.then((job) => res.status(201).json(job))
		.catch(next);
});

// UPDATE
// PUT api/jobs/:id
router.put('/:id', handleValidateId, (req, res, next) => {
	Job.findOneAndUpdate({ _id: req.params.id }, req.body, {
		new: true,
	})
		.then(handleRecordExists)
		.then((job) => handleValidateOwnership(req, job))
		.then((job) => {
			res.json(job);
		})
		.catch(next);
});

// DESTROY
// DELETE api/jobs/:id
router.delete('/:id', handleValidateId, (req, res, next) => {
	Job.findOneAndDelete({
		_id: req.params.id,
	})
		.then(handleRecordExists)
		.then((job) => handleValidateOwnership(req, job))
		.then((job) => {
			res.sendStatus(204);
		})
		.catch(next);
});

module.exports = router;
