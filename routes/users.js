import express from 'express'

const router = express.Router()
const users = [{
        id: 0,
        productName: "Fresh Avocados",
        price: 6.50,
        from: "Spain",
    },
    {
        id: 0,
        productName: "Fresh Avocados",
        price: 6.50,
        from: "Spain",
    }
]

// all routes in here start with /users
router.get('/', (req, res) => {
    console.log(users)
    res.send(users)
})

router.post()

export default router