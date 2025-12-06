import type { Publication } from "../models/publications.model";

export const PUBLICATIONS: readonly Publication[] = [
  {
    id: 1,
    type: "award",
    title: "2020卒業論文優秀発表賞",
    year: 2020,
  },
  {
    id: 2,
    type: "domestic-conference",
    title: "改良したSSDを用いた航空写真からsmall scare物体の検出と分類",
    authors: "中井克啓, 韓先花",
    venue: "2020年電子情報通信学会総合大会",
    year: 2020,
  },
  {
    id: 3,
    type: "domestic-conference",
    title:
      "距離学習を導入した深層学習ネットワークによる肝硬変状態分類の検討",
    authors: "中井克啓, 韓先花",
    venue: "2021年度人工知能学会全国大会(第35回)",
    year: 2021,
    link: "https://www.jstage.jst.go.jp/article/pjsai/JSAI2021/0/JSAI2021_4C4OS1b03/_article/-char/ja/#article-overiew-abstract-wrap",
  },
  {
    id: 4,
    type: "domestic-conference",
    title:
      "BAMCL : 双方向角度マージン損失を用いた深層学習モデルによる肝硬変ステージ分類",
    authors: "中井克啓, 韓先花",
    venue: "Meeting on Image Recognition and Understanding (MIRU) 2021",
    year: 2021,
    link: "https://cvim.ipsj.or.jp/MIRU2021/program/",
  },
  {
    id: 5,
    type: "international-conference",
    title:
      "Angular Margin Constrained Loss for Automatic Liver Fibrosis Staging",
    authors: "Katsuhiro Nakai, Xu Qiao, Xian-Hua Han",
    venue: "MVA 2021: 1-5",
    year: 2021,
    link: "https://ieeexplore.ieee.org/document/9511356",
  },
  {
    id: 6,
    type: "domestic-conference",
    title:
      "DenceNetとBottleneck Transformerの融合モデルによる皮膚画像の病変分類",
    authors: "中井克啓, 韓先花",
    venue: "Vision Engineering Workshop (ViEW) 2021",
    year: 2021,
    link: "https://view.tc-iaip.org/view/2021/is2/",
  },
  {
    id: 7,
    type: "domestic-conference",
    title:
      "解析手法：Dual Position Encoding Bottleneck Transformer Network (DPE-BoTNet) を用いた眼底画像の解析",
    authors: "中井克啓, 韓先花",
    venue: "Japan Society of Artificial Intelligence in Ophthalmology (日本眼科AI学会) 2021",
    year: 2021,
  },
  {
    id: 8,
    type: "international-conference",
    title:
      "DPE-BoTNeT: Dual Position Encoding Bottleneck Transformer Network for Skin Lesion Classification",
    authors: "Katsuhiro Nakai, Xian-Hua Han",
    venue: "ISBI 2022: 1-5",
    year: 2022,
    link: "https://ieeexplore.ieee.org/document/9761578",
  },
  {
    id: 9,
    type: "journal",
    title: "Enhanced deep bottleneck transformer model for skin lesion classification",
    authors: "Katsuhiro Nakai, Yen-Wei Chen, Xian-Hua Han",
    venue: "Biomed. Signal Process. Control. 78: 103997 (2022)",
    year: 2022,
    link: "https://www.sciencedirect.com/science/article/abs/pii/S1746809422004451?via%3Dihub",
  },
  {
    id: 10,
    type: "award",
    title: "2022修士論文優秀発表賞",
    year: 2022,
  },
];
