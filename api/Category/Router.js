const app = require('express')
const router = app.Router()
const {categoryByName, categoryById, categoryName, createCategory, updateCategory, deleteCategory }  = require('./Controller')

router.get('/categoryByName', categoryByName )
router.get('/categoryById', categoryById )
router.get('/categoryName', categoryName)
router.post('/createCategory', createCategory)
router.put('/updateCategory', updateCategory)
router.delete('/deleteCategory', deleteCategory )
   
  module.exports = router
