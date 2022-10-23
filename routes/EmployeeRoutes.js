const express = require("express");
const empModel = require("../model/EmployeeModel")
const app = express.Router()

// /api/emp/employees
app.get('/employees', async (req, res) => {
    try {
        const emp = await empModel.find()
        res.status(201).send(emp)
    } catch (error) {
        res.status(500).send(error)
    }
});

// /api/emp/employees
app.post('/employees', async (req, res) => {
    const newEmp = new userModel(req.body)
    try {
        await empModel.save()
        res.status(201).send(newEmp)
    } catch (error) {
        res.status(500).send(error)
    }
});

// /api/emp/employees/{eid}
app.get('/employees/', async (req, res) => {
    const emp_id = req.params.eid
    try {
        await empModel.find()
        res.status(201).send(emp_id)
    } catch (error) {
        res.status(500).send(error)
    }
});

// /api/emp/employees/{eid}
app.put('/employees', async (req, res) => {
    const emp_id = req.params.eid
    try {
        await empModel.findByIdAndUpdate(req.params.emp_id, req.body)
        res.status(201).send(emp_id)
    } catch (error) {
        res.status(500).send(error)
    }
});


// /api/emp/employees?eid=xxx
app.delete('/employees', async(req, res) => {
    const emp_id = req.query.eid
    try {
        const deleteEmp = await empModel.findByIdAndDelete(req.params.emp_id)
        if(!deleteEmp){
            res.status(500).send(error)
        }
        res.status(201).send(deleteEmp)
    } catch (error) {
        res.status(500).send(error)
    }
});

module.exports = app

// {
//     "first_name": "Tam",
//     "last_name": "Harrow",
//     "email": "tam@hollywood.com",
//     "gender": "Male"
// }