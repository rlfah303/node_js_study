const express =require("express")
const router =express.Router()


router.get('/',(req,res)=>{
    res.send("User List")
})

router.post('/',(req,res)=>{
    const isValid =false
    if (isValid){
        users.push({firstName: req.body.firstName})
        res.redirect(`users/${users.length -1}`)
    }else{
        console.log("Error")
        res.render('users/new', {firstName: req.body.firstName})
    }
})

router.get('/new',(req,res)=>{
    res.render("users/new")
})


router.route('/:id')
.get((req,res)=>{
    console.log(req.user)
    res.send(`Get user wit  ID ${req.params.id}`)
})
.put((req,res)=>{
    res.send(`Update user with ID ${req.params.id}`)
})
.delete((req,res)=>{
    res.send(`Delete user with ID ${req.params.id}`)
})

const users = [{name: "Kay"}, {name: "Seth"}]
// param 이 미들웨어 역할로 req,res 중간에서 next 를 부를떄까지 멈춤 req -> next -> res
router.param("id", (req,res,next,id) => {
    req.user = users[id]
    next()
})


// router.get('/:id',(req,res)=>{
//     res.send(`Get user with ID ${req.params.id}`)
// })
// router.put('/:id',(req,res)=>{
//     res.send(`Update user with ID ${req.params.id}`)
// })
// router.delete('/:id',(req,res)=>{
//     res.send(`Delete user with ID ${req.params.id}`)
// })

module.exports = router