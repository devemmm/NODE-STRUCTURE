const Student = require('../model/student')
const APIresponse = require('../help/APIresponse')
const { body, validationResult } = require('express-validator')
const { sanitizeBody } = require('express-validator')

function studentData(data) {
    this._id = data._id
    this.id = data.id
    this.fname = data.fname
    this.fname = data.lname
    this.age = data.age
    this.department = data.department
    this.location = data.location
}

// Home

exports.homeRoute = [
    (req, res) => {
        return APIresponse.home(res)
    }
]

// Update

/**
 * @param {Number} id
 * 
 */

exports.updateStudent = [
    body('fname', 'First name must not be null').isLength({ min: 1 }).trim(),

    (req, res) => {
        try {
            var errors = validationResult(req)

            var studentt = new Student({
                fname: req.body.fname
            })

            if (!errors.isEmpty()) {
                return APIresponse.errorResponse(res, 'Varidation Error', errors.array())
            }

            Student.findOneAndUpdate({ id: req.params.id }, student, {}, (error) => {
                if (error) {
                    return APIresponse.errorResponse(res, 'error', e)
                }
                return APIresponse.successResponseWithData(res, 'Updated', studentt)
            })
        } catch (e) {
            return APIresponse.errorResponse(res, e)
        }
    }
]


/**
 * Save Student
 * @param {Number} id
 * @param {string} fname
 * @param {string} lname
 * @param {Number} age
 * @param {string} department
 * @param {String} location
 * 
 * @returns {object}
 */

exports.saveStudent = [
    body('id', 'id should not be null').isLength({ min: 1 }).trim(),
    body('fname', 'id should not be null').isLength({ min: 1 }).trim(),
    body('lname', 'id should not be null').isLength({ min: 1 }).trim(),
    body('age', 'id should not be null').isLength({ min: 1 }).trim(),
    body('department', 'id should not be null').isLength({ min: 1 }).trim(),
    body('location', 'id should not be null').isLength({ min: 1 }).trim(),

    (req, res) => {

        var errors = validationResult(req)

        const student = new Student({
            id: req.body.id,
            fname: req.body.fname,
            lname: req.body.lname,
            age: req.body.age,
            department: req.body.department,
            location: req.body.location
        })

        if (!errors.isEmpty()) {
            return APIresponse.errorResponse(res, "validation Error", errors.array())
        }

        try {
            student.save((error) => {
                if (error) {
                    return APIresponse.errorResponse(res, 'ID expected to be Unique', error)
                }
                let st_Data = new studentData(student)
                return APIresponse.successResponseWithData(res, ' Student Saved', st_Data)
            })
        } catch (e) {
            return APIresponse.errorResponse(res, 'Student Not Saved', e)
        }
    }

]

exports.listStudent = [
    (req, res) => {
        try {
            Student.find({ department: req.body.department }).then((students) => {
                if (students.length > 0) {
                    return APIresponse.successResponseList(res, 'Operation Success', students)
                }
                return APIresponse.successResponseList(res, 'Operation Success', [])
            }).catch((e) => {
                return APIresponse.errorResponse(res, 'List Is Epmty', e)
            })
        } catch (e) {
            return APIresponse.errorResponse(res, 'Error', e)
        }
    }
]