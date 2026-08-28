/*
 * @Author: tangchen 190854524@qq.com
 * @Date: 2023-06-30 15:13:07
 * @LastEditors: tangchen 190854524@qq.com
 * @LastEditTime: 2023-07-21 09:19:14
 * @FilePath: \传染病护理\disease-diagnosis\js\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 事件绑定
// 训练建议按钮
var practiceAdviceButton = document.getElementsByClassName("detaile-title")[0];
// 答题详情按钮
var answerDetailButton = document.getElementsByClassName("detaile-title")[1];
// 右边盒子
var questionContainer = document.getElementById("question-container");
var practiceContainer = document.getElementById("practice-container");
var answerContainer = document.getElementById("answer-container");
var hornIcon = document.getElementById("horn-icon");
function goToPractice() {
  practiceContainer.style.display = "block";
  answerContainer.style.display = "none";
  practiceAdviceButton.style.background = `url("images/index/practice-advice-active.png")`;
  answerDetailButton.style.background = `url("images/index/practice-advice-default.png")`;
}

function goToAnswer() {
  practiceContainer.style.display = "none";
  answerContainer.style.display = "block";
  answerDetailButton.style.background = `url("images/index/practice-advice-active.png")`;
  practiceAdviceButton.style.background = `url("images/index/practice-advice-default.png")`;
}
