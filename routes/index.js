const express = require("express");
const router = express.Router();
const Msg = require("../models/msgmodel.js")

router.post('/:userid', (req,res)=>{
    var userId = req.params.userid;
    const newMsg = new Msg({
        user:userId,
        msg:req.body.msg,
        isSent : req.body.issent
    })
    newMsg.save((err,info)=>{
        if(err){
            console.log(err);
            return;
        }
        res.json({info});
        console.log("msg saved");
    });
})

router.get('/:userid', (req,res)=>{
    var arr1 = [];
    var userId = req.params.userid;
    var lim = req.params.limit || 10;
    Msg.find({user:userId}).sort({created_date:-1}).limit(lim).exec((err,info)=>{
        for(var i in info){
            arr1.push(info[i].msg)
            console.log(arr1)
        }
        res.send({arr:arr1});
    })
})

router.delete('/:userid', (req,res)=>{
    
    var userId = req.params.userid;
    Msg.remove({user:userId},(err)=>{console.log(null)}).then(res.send("deletion success"));
    
})

router.delete('/:userid/:chatid', (req,res)=>{

    var userId = req.params.userid;
    var msgid = req.params.chatid;
    Msg.findById({_id:msgid}).deleteOne((err)=>{console.log(err)}).then(res.send("deletion 1 success"));
})

module.exports = router;