const express = require('express')
const router = express.Router()

const Student = require('../model/student')
const studentCont = require('../controler/studentCont')

router.get('/', studentCont.homeRoute)
router.get('/students', studentCont.listStudent)
router.post('/student', studentCont.saveStudent)
router.patch('/student/:id', studentCont.updateStudent)

module.exports = router