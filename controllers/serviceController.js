const { Service: ServiceModel } = require('../models/Service');

const serviceController = {

    create: async(req, res) => {
        try {
            const service = {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                image: req.body.image
            };
            const response = await ServiceModel.create(service);
            res.status(201).json({response, msg: 'Service has been created successfully'});
        } catch (error) {
            console.error(error);
        }
    },
    getAll: async (req, res) => {
        try {
            const services = await ServiceModel.find();
            res.json(services);
        } catch (error) {
            console.error(error);
        }
    },
    get: async(req, res) => {
        try {
            const id = req.params.id;
            const service = await ServiceModel.findById(id);
            if(!service) {
                res.status(404).json({ msg: 'Service is not found' });
                return;
            }
            res.json(service);
        } catch (error) {
            console.error(error);
        }
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id;
            const service = await ServiceModel.findById(id);
            if(!service) {
                res.status(404).json({ msg: 'Service is not fount' });
                return;
            }
            const deletedService = await ServiceModel.findByIdAndDelete(id);
            res.status(200).json({deletedService, msg: 'Service has been deleted successfully'});
        } catch (error) {
            console.error(error);
        }
    },
    update: async(req, res) => {
        try {
            const id = req.params.id;
            const service = {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                image: req.body.image
            };
            const updatedService = await ServiceModel.findByIdAndUpdate(id, service);
            if(!updatedService) {
                res.status(404).json({ msg: 'Service is not found' });
                return;
            }
            res.status(200).json({service, msg: 'Service has been updated successfully'});
        } catch (error) {
            console.error(error);
        }
    }

};

module.exports = serviceController;