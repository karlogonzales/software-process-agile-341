var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://soen341ub2:soen341ub2@ds145669.mlab.com:45669/teacher_poll', ['questions']);

// Get All questions
router.get('/questions', function(req, res, next){
    db.questions.find(function(err, questions){
        if(err){
            res.send(err);
        }
        res.json(questions);
    });
});

// Get Single question
router.get('/question/:id', function(req, res, next){
    db.questions.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, question){
        if(err){
            res.send(err);
        }
        res.json(question);
    });
});

//Save question
router.post('/question', function(req, res, next){
    var question = req.body;
    if(!question.title || !(question.isDone + '')){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        db.questions.save(question, function(err, question){
            if(err){
                res.send(err);
            }
            res.json(question);
        });
    }
});

// Delete question
router.delete('/question/:id', function(req, res, next){
    db.questions.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, question){
        if(err){
            res.send(err);
        }
        res.json(question);
    });
});

// Update question
router.put('/question/:id', function(req, res, next){
    var question = req.body;
    var updQuestion = {};
    
    if(question.title){
        updQuestion.title = question.title;
    }
    
    if(!updQuestion){
        res.status(400);
        res.json({
            "error":"Bad Data"
        });
    } else {
        db.questions.update({_id: mongojs.ObjectId(req.params.id)},updQuestion, {}, function(err, question){
        if(err){
            res.send(err);
        }
        res.json(question);
    });
    }
});

module.exports = router;