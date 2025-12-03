export const books = [
  {
    id: 1,
    title: "夜的命名术",
    author: "会说话的肘子",
    cover: "/covers/ye-ming.jpg",  // 稍后上传图片
    tags: ["都市异能", "热血", "高智商"],
    intro: "在里世界与表世界交错的都市，庆尘从贫民窟少年觉醒骑士血脉，一步步成为传说中的“夜游神”……",
    totalChapters: 1800,
    hot: 999999,
    chapters: Array.from({length: 100}, (_, i) => ({
      id: i + 1,
      title: `第${i + 1}章 ${i === 0 ? '穿越之夜' : '骑士觉醒第' + i + '阶段'}`
    })),
    sources: [
      { name: "起点正版", base: "https://vipreader.qidian.com/chapter" },
      { name: "备用源A", base: "https://mirror1.example.com" },
      { name: "备用源B", base: "https://mirror2.example.com" }
    ]
  },
  {
    id: 2,
    title: "国民法医",
    author: "志鸟村",
    cover: "/covers/guomin.jpg",
    tags: ["悬疑", "法医", "系统"],
    intro: "法医专业毕业的江远回到小县城，激活神级法医系统，从一桩家庭灭门案开始，揭开乡村最黑暗的秘密……",
    totalChapters: 1300,
    hot: 850000,
    chapters: Array.from({length: 50}, (_, i) => ({
      id: i + 1,
      title: `第${i + 1}章 ${i < 5 ? ['归乡','第一案','尸体说话','线索'][i] : '破案进行时'}`
    })),
    sources: [
      { name: "番茄免费", base: "https://fanqie.com" },
      { name: "备用源C", base: "https://mirror3.example.com" }
    ]
  }
]

export function getBook(id) {
  return books.find(b => b.id === Number(id))
}
