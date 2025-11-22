import type {
  BasicInfo,
  EducationHistory,
  CareerHistory,
} from "../models/profile.model";

export const BASIC_INFO: BasicInfo = {
  name: "中井　克啓",
  nameKana: "なかい　かつひろ",
  phone: "非公開",
  email: "k.nakai.work@gmail.com",
  address: "千葉県",
};

export const EDUCATION_HISTORY: readonly EducationHistory[] = [
  {
    id: 1,
    year: 2013,
    month: 4,
    institution: "兵庫県立明石北高等学校",
    status: "入学",
  },
  {
    id: 2,
    year: 2016,
    month: 3,
    institution: "兵庫県立明石北高等学校",
    status: "卒業",
  },
  {
    id: 3,
    year: 2016,
    month: 4,
    institution: "国立大学法人山口大学",
    department: "理学部　物理情報科学科",
    status: "入学",
  },
  {
    id: 4,
    year: 2020,
    month: 3,
    institution: "国立大学法人山口大学",
    department: "理学部　物理情報科学科",
    status: "卒業",
  },
  {
    id: 5,
    year: 2020,
    month: 4,
    institution: "国立大学法人山口大学大学院",
    department: "創成科学研究科　基盤科学系専攻　情報科学コース",
    status: "入学",
  },
  {
    id: 6,
    year: 2022,
    month: 3,
    institution: "国立大学法人山口大学大学院",
    department: "創成科学研究科　基盤科学系専攻　情報科学コース",
    status: "修了",
  },
];

export const CAREER_HISTORY: readonly CareerHistory[] = [
  {
    id: 1,
    year: 2022,
    month: 4,
    company: "株式会社NID",
    status: "入社",
  },
  {
    id: 2,
    year: 2023,
    month: 12,
    company: "株式会社NID",
    status: "退社",
  },
  {
    id: 3,
    year: 2024,
    month: 1,
    company: "感性AI株式会社",
    status: "入社",
  },
];
