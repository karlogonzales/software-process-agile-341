"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var question_service_1 = require("../../services/question.service");
var QuestionsComponent = (function () {
    function QuestionsComponent(questionService) {
        var _this = this;
        this.questionService = questionService;
        this.questionService.getQuestions()
            .subscribe(function (questions) {
            _this.questions = questions;
        });
    }
    QuestionsComponent.prototype.addQuestion = function (event) {
        var _this = this;
        event.preventDefault();
        var newQuestion = {
            title: this.title,
        };
        this.questionService.addQuestion(newQuestion)
            .subscribe(function (task) {
            _this.questions.push(task);
            _this.title = '';
        });
    };
    QuestionsComponent.prototype.deleteQuestion = function (id) {
        var questions = this.questions;
        this.questionService.deleteQuestion(id).subscribe(function (data) {
            if (data.n == 1) {
                for (var i = 0; i < questions.length; i++) {
                    if (questions[i]._id == id) {
                        questions.splice(i, 1);
                    }
                }
            }
        });
    };
    QuestionsComponent.prototype.updateStatus = function (task) {
        var _task = {
            _id: task._id,
            title: task.title,
        };
        this.questionService.updateStatus(_task).subscribe(function (data) {
        });
    };
    return QuestionsComponent;
}());
QuestionsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'questions',
        templateUrl: 'questions.component.html'
    }),
    __metadata("design:paramtypes", [question_service_1.QuestionService])
], QuestionsComponent);
exports.QuestionsComponent = QuestionsComponent;
//# sourceMappingURL=questions.component.js.map