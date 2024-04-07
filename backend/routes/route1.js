const express = require("express")
// question: does order matter in the line below? Do the names matter?
// answer: NO, the order does not matter. Thus we know that the program depends on the names, so the
// NAMES DO matter - the names likely matter for all arrays/sets.
const {
    // createWorkout,
    createUser,
    getStatistics,
    updateUser,
    deleteUser,
    // getWorkout,
    // deleteWorkout,
    // updateWorkout
} = require('../workoutController')

const router = express.Router()

// POST a user
router.post('/', createUser);

// DELETE the user
router.delete('/:id', deleteUser);

// GET all statistics
router.get('/stats', getStatistics)

// GET the streak
router.get('/', getStatistics)

// UPDATE the streak
router.patch('/:id', updateUser)

// UPDATE the completion count of a task
// note: turning "id" into a route parameter using a colon attaches it to the "params" property of "req".
router.patch('/:id', updateUser)

module.exports = router