const express = require('express');
const {
    httpgetAllLaunches, 
    httpAddNewLaunches,
} = require('./launches.controller');


const {launches} = require('../../models/launches.model');


const launchesRouter = express.Router();

launchesRouter.get('/',httpgetAllLaunches);
launchesRouter.post('/', httpAddNewLaunches);
launchesRouter.delete('/:id', httpAbortLaunch);


module.exports = launchesRouter;