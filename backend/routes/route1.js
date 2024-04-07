const express = require("express")
// question: does order matter in the line below? Do the names matter?
// answer: NO, the order does not matter. Thus we know that the program depends on the names, so the
// NAMES DO matter - the names likely matter for all arrays/sets.
const {
    // createWorkout,
    createUser,
    getStreak, 
    getStatistics,
    updateStreak,
    updateTaskCompletionCount,
    // getWorkout,
    // deleteWorkout,
    // updateWorkout
} = require('../workoutController')

const router = express.Router()

// POST a user
router.post('/', createUser);

// GET all statistics
router.get('/stats', getStatistics)

// GET all statistics
router.get('/', getStreak)

// UPDATE the streak
router.patch('/:id', updateStreak)

// UPDATE the completion count of a task
// note: turning "id" into a route parameter using a colon attaches it to the "params" property of "req".
router.patch('/:id', updateTaskCompletionCount)

module.exports = router