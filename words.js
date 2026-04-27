/**
 * 海量词库文件（可持续扩展）
 *
 * 这个文件只负责“存数据”，不写页面逻辑。
 * index.html 会通过 <script src="words.js"></script> 直接加载这里的 wordList。
 */

const wordList = [
  {
    word: "abandon",
    phonetic: "/əˈbændən/",
    meaning: "v. 放弃；遗弃",
    example: "He had to abandon the plan because of the heavy rain."
  },
  {
    word: "accurate",
    phonetic: "/ˈækjərət/",
    meaning: "adj. 准确的；精确的",
    example: "The report provides accurate data about population changes."
  },
  {
    word: "benefit",
    phonetic: "/ˈbenɪfɪt/",
    meaning: "n. 好处；益处 v. 使受益",
    example: "Regular reading will benefit your vocabulary growth."
  },
  {
    word: "challenge",
    phonetic: "/ˈtʃælɪndʒ/",
    meaning: "n. 挑战 v. 向…挑战",
    example: "Learning 20 new words a day is a challenge for beginners."
  },
  {
    word: "define",
    phonetic: "/dɪˈfaɪn/",
    meaning: "v. 定义；解释",
    example: "Can you define this term in simple English?"
  },
  {
    word: "efficient",
    phonetic: "/ɪˈfɪʃənt/",
    meaning: "adj. 高效的；有能力的",
    example: "Spaced repetition is an efficient way to memorize words."
  },
  {
    word: "focus",
    phonetic: "/ˈfəʊkəs/",
    meaning: "v. 集中注意力 n. 焦点",
    example: "Please focus on the pronunciation before checking the meaning."
  },
  {
    word: "ignore",
    phonetic: "/ɪɡˈnɔː(r)/",
    meaning: "v. 忽视；不理会",
    example: "Don’t ignore review sessions, or you will forget quickly."
  },
  {
    word: "maintain",
    phonetic: "/meɪnˈteɪn/",
    meaning: "v. 维持；保持",
    example: "It is hard to maintain progress without a daily plan."
  },
  {
    word: "previous",
    phonetic: "/ˈpriːviəs/",
    meaning: "adj. 之前的；先前的",
    example: "Review the previous words before learning new ones."
  }
];

/**
 * =========================
 * 以后怎么批量导入几百/几千词（大白话教程）
 * =========================
 * 1）你在 Excel 里准备 4 列（顺序建议固定）：
 *    A列: word（英文单词）
 *    B列: phonetic（音标）
 *    C列: meaning（中文释义）
 *    D列: example（例句）
 *
 * 2）每一行就是一个单词。比如：
 *    abandon | /əˈbændən/ | v.放弃 | He had to abandon the plan.
 *
 * 3）最终需要转换成下面这种“对象”格式（一个词一对大括号）：
 *    {
 *      word: "abandon",
 *      phonetic: "/əˈbændən/",
 *      meaning: "v. 放弃",
 *      example: "He had to abandon the plan."
 *    },
 *
 * 4）把很多个对象放进 wordList = [ ... ] 这个数组里。
 *    也就是说：
 *    - 第1个词对象后面加逗号
 *    - 第2个词对象后面加逗号
 *    - ...最后一个词对象后面可以不加逗号
 *
 * 5）最省事的批量方法（推荐）：
 *    - 先让 Excel 导出 CSV
 *    - 再用任意“CSV转JSON”工具转成 JSON
 *    - 把字段名改成 word / phonetic / meaning / example
 *    - 粘贴替换这里的 wordList 内容
 *
 * 6）注意事项（非常重要）：
 *    - 文本里如果有英文双引号 " ，要改成中文引号或转义（\"）
 *    - 每个对象的 key 名必须一致：word、phonetic、meaning、example
 *    - 保存文件编码为 UTF-8（防止中文乱码）
 */
