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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var QuestionService = (function () {
    function QuestionService(http) {
        this.http = http;
        console.log('Question Service Initialized...');
    }
    QuestionService.prototype.getQuestions = function () {
        return this.http.get('/api/questions')
            .map(function (res) { return res.json(); });
    };
    QuestionService.prototype.addQuestion = function (newQuestion) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/question', JSON.stringify(newQuestion), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    QuestionService.prototype.deleteQuestion = function (id) {
        return this.http.delete('/api/question/' + id)
            .map(function (res) { return res.json(); });
    };
    QuestionService.prototype.updateStatus = function (question) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('/api/question/' + question._id, JSON.stringify(question), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return QuestionService;
}());
QuestionService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], QuestionService);
exports.QuestionService = QuestionService;
//# sourceMappingURL=question.service.js.map