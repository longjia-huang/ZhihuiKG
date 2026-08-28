/*
 * @Author: tangchen 190854524@qq.com
 * @Date: 2023-07-02 16:29:57
 * @LastEditors: tangchen 190854524@qq.com
 * @LastEditTime: 2023-09-14 17:40:39
 * @FilePath: \infectious-disease-care\disease-diagnosis\js\init.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var imgSrcTag = 0;
// 根据格式化的问题数据初始化页面节点
// 喇叭图标更换，达到闪烁效果
function changeImgSrc() {
  if (imgSrcTag == 0) {
    hornIcon.src = "./images/index/notice-icon-default.png";
    imgSrcTag = 1;
  } else {
    hornIcon.src = "./images/index/notice-icon-active.png";
    imgSrcTag = 0;
  }
}
 // 构建dom结构展示问题数据
formatQuestionList.forEach((item) => {
  const questionsElement = $(`<li class="question-item-container">
                              <span class="question-title">
                              ${item.title}
                              </span>
                              <span class="my-answer">
                                你的答案：${item.myAnswer || "（未作答）"}
                              </span>
                              <span class="right-answer"> 参考答案：${item.rightAnswer} </span>
                              </li>`
                            )
                            $('#question-container').append(questionsElement);
 })


console.log('构建列表元素');