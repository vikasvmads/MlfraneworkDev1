import { body, validationResult } from 'express-validator'


exports.companyValidation = (method) => {
    console.log("inside validation method",method)
    switch (method) {
        case 'createCompany': {
            return [
               body('name', `Name doesn't exists`).not().isEmpty(),
            ]
        }
    }
}