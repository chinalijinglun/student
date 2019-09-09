export const VALID_ENUM = {
  VALID: 98,
  INVALID: 99
};

export const DELETE_FLAG = {
  IN_FORCE: 'IN_FORCE',
  DELETED: 'DELETED'
};

export const COURSE_TYPE = {
  ALL: 1,
  ONLINE: 2,
  PUBLIC: 3
};

export const CLASS_TYPE = {
  '1 v 1': 1,
  '1 v 4': 2,
  '1 v n': 3
};

// 手机区号
export const NATIONAL_CODE = [
  {
    name_zh: "美国",
    name: "U.S.A",
    code: "1",
    time: "-13.00"
  },
  {
    name_zh: "加拿大",
    name: "Canada",
    code: "1",
    time: "-13.00"
  },
  {
    name_zh: "澳大利亚",
    name: "Australia",
    code: "61",
    time: "2.00"
  },
  {
    name_zh: "中国",
    name: "China",
    code: "86",
    time: "0"
  },
  {
    name_zh: "阿富汗",
    name: "Afghanistan",
    code: "93",
    time: "-3.50"
  },
  {
    name_zh: "阿拉斯加",
    name: "Alaska(U.S.A)",
    code: "1907",
    time: "3.00"
  },
  {
    name_zh: "阿尔巴尼亚",
    name: "Albania",
    code: "355",
    time: "-7.00"
  },
  {
    name_zh: "阿尔及利亚",
    name: "Algeria",
    code: "213",
    time: "-8.00"
  },
  {
    name_zh: "安道尔",
    name: "Andorra",
    code: "376",
    time: "-8.00"
  },
  {
    name_zh: "安哥拉",
    name: "Angola",
    code: "244",
    time: "-7.00"
  },
  {
    name_zh: "安圭拉岛(英)",
    name: "Anguilla I.",
    code: "1264",
    time: "-12.00"
  },
  {
    name_zh: "安提瓜和巴布达",
    name: "Antigua and Barbuda",
    code: "1268",
    time: "-12.00"
  },
  {
    name_zh: "阿根廷",
    name: "Argentina",
    code: "54",
    time: "-11.00"
  },
  {
    name_zh: "亚美尼亚",
    name: "Armenia",
    code: "374",
    time: "0.00"
  },
  {
    name_zh: "阿鲁巴岛",
    name: "Aruba I.",
    code: "297",
    time: "-12.00"
  },
  {
    name_zh: "阿森松(英)",
    name: "Ascension",
    code: "247",
    time: "-8.00"
  },
  {
    name_zh: "奥地利",
    name: "Austria",
    code: "43",
    time: "-7.00"
  },
  {
    name_zh: "阿塞拜疆",
    name: "Azerbaijan",
    code: "994",
    time: "-5.00"
  },
  {
    name_zh: "巴林",
    name: "Bahrain",
    code: "973",
    time: "-5.00"
  },
  {
    name_zh: "孟加拉国",
    name: "Bangladesh",
    code: "880",
    time: "-2.00"
  },
  {
    name_zh: "巴巴多斯",
    name: "Barbados",
    code: "1246",
    time: "-12.00"
  },
  {
    name_zh: "白俄罗斯",
    name: "Belarus",
    code: "375",
    time: "-5.00"
  },
  {
    name_zh: "比利时",
    name: "Belgium",
    code: "32",
    time: "-7.00"
  },
  {
    name_zh: "伯利兹",
    name: "Belize",
    code: "501",
    time: "-14.00"
  },
  {
    name_zh: "贝宁",
    name: "Benin",
    code: "229",
    time: "-7.00"
  },
  {
    name_zh: "百慕大群岛(英)",
    name: "Bermuda Is.",
    code: "1441",
    time: "-12.00"
  },
  {
    name_zh: "不丹",
    name: "Bhutan",
    code: "975",
    time: "0.00"
  },
  {
    name_zh: "玻利维亚",
    name: "Bolivia",
    code: "591",
    time: "-12.00"
  },
  {
    name_zh: "波斯尼亚和黑塞哥维那",
    name: "Bosnia And Herzegovina",
    code: "387",
    time: "0.00"
  },
  {
    name_zh: "博茨瓦纳",
    name: "Botswana",
    code: "267",
    time: "-6.00"
  },
  {
    name_zh: "巴西",
    name: "Brazil",
    code: "55",
    time: "-11.00"
  },
  {
    name_zh: "保加利亚",
    name: "Bulgaria",
    code: "359",
    time: "-6.00"
  },
  {
    name_zh: "布基纳法索",
    name: "Burkina Faso",
    code: "226",
    time: "-8.00"
  },
  {
    name_zh: "布隆迪",
    name: "Burundi",
    code: "257",
    time: "-6.00"
  },
  {
    name_zh: "喀麦隆",
    name: "Cameroon",
    code: "237",
    time: "-7.00"
  },
  {
    name_zh: "加那利群岛",
    name: "Canaries Is.",
    code: "34",
    time: "-8.00"
  },
  {
    name_zh: "佛得角",
    name: "Cape Verde",
    code: "238",
    time: "-9.00"
  },
  {
    name_zh: "开曼群岛(英)",
    name: "Cayman Is.",
    code: "1345",
    time: "-13.00"
  },
  {
    name_zh: "中非",
    name: "Central Africa",
    code: "236",
    time: "-7.00"
  },
  {
    name_zh: "乍得",
    name: "Chad",
    code: "235",
    time: "-7.00"
  },
  {
    name_zh: "智利",
    name: "Chile",
    code: "56",
    time: "-12.00"
  },
  {
    name_zh: "圣诞岛",
    name: "Christmas I.",
    code: "61 9164",
    time: "-1.30"
  },
  {
    name_zh: "科科斯岛",
    name: "Cocos I.",
    code: "61 9162",
    time: "-13.00"
  },
  {
    name_zh: "哥伦比亚",
    name: "Colombia",
    code: "57",
    time: "0.00"
  },
  {
    name_zh: "巴哈马国",
    name: "Commonwealth of The Bahamas",
    code: "1809",
    time: "0.00"
  },
  {
    name_zh: "多米尼克国",
    name: "Commonwealth of Dominica",
    code: "1809",
    time: "0.00"
  },
  {
    name_zh: "科摩罗",
    name: "Comoro",
    code: "269",
    time: "-5.00"
  },
  {
    name_zh: "刚果",
    name: "Congo",
    code: "242",
    time: "-7.00"
  },
  {
    name_zh: "科克群岛(新)",
    name: "Cook IS.",
    code: "682",
    time: "-18.30"
  },
  {
    name_zh: "哥斯达黎加",
    name: "Costa Rica",
    code: "506",
    time: "-14.00"
  },
  {
    name_zh: "克罗地亚",
    name: "Croatia",
    code: "383 385",
    time: "-7.00"
  },
  {
    name_zh: "古巴",
    name: "Cuba",
    code: "53",
    time: "-13.00"
  },
  {
    name_zh: "塞浦路斯",
    name: "Cyprus",
    code: "357",
    time: "-6.00"
  },
  {
    name_zh: "捷克",
    name: "Czech",
    code: "420",
    time: "-7.00"
  },
  {
    name_zh: "丹麦",
    name: "Denmark",
    code: "45",
    time: "-7.00"
  },
  {
    name_zh: "迪戈加西亚岛",
    name: "Diego Garcia I.",
    code: "246",
    time: "0.00"
  },
  {
    name_zh: "吉布提",
    name: "Djibouti",
    code: "253",
    time: "-5.00"
  },
  {
    name_zh: "多米尼加共和国",
    name: "Dominican Rep.",
    code: "1809",
    time: "-13.00"
  },
  {
    name_zh: "厄瓜多尔",
    name: "Ecuador",
    code: "593",
    time: "-13.00"
  },
  {
    name_zh: "埃及",
    name: "Egypt",
    code: "20",
    time: "-6.00"
  },
  {
    name_zh: "萨尔瓦多",
    name: "El Salvador",
    code: "503",
    time: "-14.00"
  },
  {
    name_zh: "赤道几内亚",
    name: "Equatorial Guinea",
    code: "240",
    time: "-8.00"
  },
  {
    name_zh: "厄立特里亚",
    name: "Eritrea",
    code: "291",
    time: "0.00"
  },
  {
    name_zh: "爱沙尼亚",
    name: "Es" +
    "stonia",
    code: "372",
    time: "-5.00"
  },
  {
    name_zh: "埃塞俄比亚",
    name: "Ethiopia",
    code: "251",
    time: "-5.00"
  },
  {
    name_zh: "福克兰群岛",
    name: "Falkland Is.",
    code: "500",
    time: "-11.00"
  },
  {
    name_zh: "法罗群岛(丹)",
    name: "Faroe Is.",
    code: "298",
    time: "0.00"
  },
  {
    name_zh: "斐济",
    name: "Fiji",
    code: "679",
    time: "4.00"
  },
  {
    name_zh: "芬兰",
    name: "Finland",
    code: "358",
    time: "-6.00"
  },
  {
    name_zh: "法国",
    name: "France",
    code: "33",
    time: "-8.00"
  },
  {
    name_zh: "法属圭亚那",
    name: "French Guiana",
    code: "594",
    time: "-12.00"
  },
  {
    name_zh: "法属波里尼西亚",
    name: "French Polynesia",
    code: "689",
    time: "3.00"
  },
  {
    name_zh: "加蓬",
    name: "Gabon",
    code: "241",
    time: "-7.00"
  },
  {
    name_zh: "冈比亚",
    name: "Gambia",
    code: "220",
    time: "-8.00"
  },
  {
    name_zh: "格鲁吉亚",
    name: "Georgia",
    code: "995",
    time: "0.00"
  },
  {
    name_zh: "德国",
    name: "Germany",
    code: "49",
    time: "-7.00"
  },
  {
    name_zh: "加纳",
    name: "Ghana",
    code: "233",
    time: "-8.00"
  },
  {
    name_zh: "直布罗陀(英)",
    name: "Gibraltar",
    code: "350",
    time: "-8.00"
  },
  {
    name_zh: "希腊",
    name: "Greece",
    code: "30",
    time: "-6.00"
  },
  {
    name_zh: "格陵兰岛",
    name: "Greenland",
    code: "299",
    time: "0.00"
  },
  {
    name_zh: "格林纳达",
    name: "Grenada",
    code: "1809",
    time: "-14.00"
  },
  {
    name_zh: "瓜德罗普岛(法)",
    name: "Guadeloupe I.",
    code: "590",
    time: "0.00"
  },
  {
    name_zh: "关岛(美)",
    name: "Guam",
    code: "671",
    time: "2.00"
  },
  {
    name_zh: "危地马拉",
    name: "Guatemala",
    code: "502",
    time: "-14.00"
  },
  {
    name_zh: "几内亚",
    name: "Guinea",
    code: "224",
    time: "-8.00"
  },
  {
    name_zh: "几内亚比绍",
    name: "Guinea-Bissau",
    code: "245",
    time: "0.00"
  },
  {
    name_zh: "圭亚那",
    name: "Guyana",
    code: "592",
    time: "-11.00"
  },
  {
    name_zh: "海地",
    name: "Haiti",
    code: "509",
    time: "-13.00"
  },
  {
    name_zh: "夏威夷",
    name: "Hawaii",
    code: "1808",
    time: "0.00"
  },
  {
    name_zh: "洪都拉斯",
    name: "Honduras",
    code: "504",
    time: "-14.00"
  },
  {
    name_zh: "匈牙利",
    name: "Hungary",
    code: "36",
    time: "-7.00"
  },
  {
    name_zh: "冰岛",
    name: "Iceland",
    code: "354",
    time: "-9.00"
  },
  {
    name_zh: "印度",
    name: "India",
    code: "91",
    time: "-2.30"
  },
  {
    name_zh: "印度尼西亚",
    name: "Indonesia",
    code: "62",
    time: "-0.30"
  },
  {
    name_zh: "伊朗",
    name: "Iran",
    code: "98",
    time: "-4.30"
  },
  {
    name_zh: "伊拉克",
    name: "Iraq",
    code: "964",
    time: "-5.00"
  },
  {
    name_zh: "爱尔兰",
    name: "Ireland",
    code: "353",
    time: "-8.00"
  },
  {
    name_zh: "以色列",
    name: "Israel",
    code: "972",
    time: "-6.00"
  },
  {
    name_zh: "意大利",
    name: "Italy",
    code: "39",
    time: "-7.00"
  },
  {
    name_zh: "科特迪瓦",
    name: "Ivory Coast",
    code: "225",
    time: "-8.00"
  },
  {
    name_zh: "牙买加",
    name: "Jamaica",
    code: "1876",
    time: "-12.00"
  },
  {
    name_zh: "日本",
    name: "Japan",
    code: "81",
    time: "1.00"
  },
  {
    name_zh: "约旦",
    name: "Jordan",
    code: "962",
    time: "-6.00"
  },
  {
    name_zh: "柬埔寨",
    name: "Kampuchea",
    code: "855",
    time: "-1.00"
  },
  {
    name_zh: "哈萨克斯坦",
    name: "Kazakhstan",
    code: "7",
    time: "-5.00"
  },
  {
    name_zh: "肯尼亚",
    name: "Kenya",
    code: "254",
    time: "-5.00"
  },
  {
    name_zh: "基里巴斯",
    name: "Kiribati",
    code: "686",
    time: "4.00"
  },
  {
    name_zh: "朝鲜",
    name: "Korea(dpr of)",
    code: "85",
    time: "1.00"
  },
  {
    name_zh: "韩国",
    name: "Korea(republic of)",
    code: "82",
    time: "1.00"
  },
  {
    name_zh: "科威特",
    name: "Kuwait",
    code: "965",
    time: "-5.00"
  },
  {
    name_zh: "吉尔吉斯斯坦",
    name: "Kyrgyzstan",
    code: "996",
    time: "-5.00"
  },
  {
    name_zh: "老挝",
    name: "Laos",
    code: "856",
    time: "-1.00"
  },
  {
    name_zh: "拉脱维亚",
    name: "Latvia",
    code: "371",
    time: "-5.00"
  },
  {
    name_zh: "黎巴嫩",
    name: "Lebanon",
    code: "961",
    time: "-6.00"
  },
  {
    name_zh: "莱索托",
    name: "Lesotho",
    code: "266",
    time: "-6.00"
  },
  {
    name_zh: "利比里亚",
    name: "Liberia",
    code: "231",
    time: "-8.00"
  },
  {
    name_zh: "利比亚",
    name: "Libya",
    code: "218",
    time: "-6.00"
  },
  {
    name_zh: "列支敦士登",
    name: "Liechtenstein",
    code: "41 75",
    time: "-7.00"
  },
  {
    name_zh: "立陶宛",
    name: "Lithuania",
    code: "370",
    time: "-5.00"
  },
  {
    name_zh: "卢森堡",
    name: "Luxembourg",
    code: "352",
    time: "-7.00"
  },
  {
    name_zh: "马其顿",
    name: "Macedonia",
    code: "389",
    time: "0.00"
  },
  {
    name_zh: "马达加斯加",
    name: "Madagascar",
    code: "261",
    time: "-5.00"
  },
  {
    name_zh: "马拉维",
    name: "Malawi",
    code: "265",
    time: "-6.00"
  },
  {
    name_zh: "马来西亚",
    name: "Malaysia",
    code: "60",
    time: "-0.30"
  },
  {
    name_zh: "马尔代夫",
    name: "Maldive",
    code: "960",
    time: "-2.30"
  },
  {
    name_zh: "马里",
    name: "Mali",
    code: "223",
    time: "-8.00"
  },
  {
    name_zh: "马耳他",
    name: "Malta",
    code: "356",
    time: "-7.00"
  },
  {
    name_zh: "马里亚纳群岛",
    name: "Mariana Is.",
    code: "670",
    time: "2.00"
  },
  {
    name_zh: "马绍尔群岛",
    name: "Marshall Is.",
    code: "692",
    time: "4.00"
  },
  {
    name_zh: "马提尼克(法)",
    name: "Martinique",
    code: "596",
    time: "-12.00"
  },
  {
    name_zh: "毛里塔尼亚",
    name: "Mauritania",
    code: "222",
    time: "0.00"
  },
  {
    name_zh: "毛里求斯",
    name: "Mauritius",
    code: "230",
    time: "-4.00"
  },
  {
    name_zh: "马约特岛",
    name: "Mayotte I.",
    code: "269",
    time: "0.00"
  },
  {
    name_zh: "墨西哥",
    name: "Mexico",
    code: "52",
    time: "-15.00"
  },
  {
    name_zh: "密克罗尼西亚(美)",
    name: "Micronesia",
    code: "691",
    time: "1.00"
  },
  {
    name_zh: "中途岛(美)",
    name: "Midway I.",
    code: "1808",
    time: "-19.00"
  },
  {
    name_zh: "摩尔多瓦",
    name: "Moldova",
    code: "373",
    time: "-5.00"
  },
  {
    name_zh: "摩纳哥",
    name: "Monaco",
    code: "377",
    time: "-7.00"
  },
  {
    name_zh: "蒙古",
    name: "Mongolia",
    code: "976",
    time: "0.00"
  },
  {
    name_zh: "蒙特塞拉特岛(英)",
    name: "Montserrat I.",
    code: "1664",
    time: "-12.00"
  },
  {
    name_zh: "摩洛哥",
    name: "Morocco",
    code: "212",
    time: "-6.00"
  },
  {
    name_zh: "莫桑比克",
    name: "Mozambique",
    code: "258",
    time: "-6.00"
  },
  {
    name_zh: "缅甸",
    name: "Myanmar",
    code: "95",
    time: "-1.30"
  },
  {
    name_zh: "纳米比亚",
    name: "Namibia",
    code: "264",
    time: "-7.00"
  },
  {
    name_zh: "瑙鲁",
    name: "Nauru",
    code: "674",
    time: "4.00"
  },
  {
    name_zh: "尼泊尔",
    name: "Nepal",
    code: "977",
    time: "-2.30"
  },
  {
    name_zh: "荷兰",
    name: "Netherlands",
    code: "31",
    time: "-7.00"
  },
  {
    name_zh: "荷属安的列斯群岛",
    name: "Netherlandsantilles Is.",
    code: "599",
    time: "-12.00"
  },
  {
    name_zh: "新喀里多尼亚群岛(法)",
    name: "New Caledonia Is.",
    code: "687",
    time: "3.00"
  },
  {
    name_zh: "新西兰",
    name: "New Zealand",
    code: "64",
    time: "4.00"
  },
  {
    name_zh: "尼加拉瓜",
    name: "Nicaragua",
    code: "505",
    time: "-14.00"
  },
  {
    name_zh: "尼日尔",
    name: "Niger",
    code: "227",
    time: "-8.00"
  },
  {
    name_zh: "尼日利亚",
    name: "Nigeria",
    code: "234",
    time: "-7.00"
  },
  {
    name_zh: "纽埃岛(新)",
    name: "Niue I.",
    code: "683",
    time: "-19.00"
  },
  {
    name_zh: "诺福克岛(澳)",
    name: "Norfolk I,",
    code: "6723",
    time: "3.30"
  },
  {
    name_zh: "挪威",
    name: "Norway",
    code: "47",
    time: "-7.00"
  },
  {
    name_zh: "阿曼",
    name: "Oman",
    code: "968",
    time: "-4.00"
  },
  {
    name_zh: "帕劳(美)",
    name: "Palau",
    code: "680",
    time: "0.00"
  },
  {
    name_zh: "巴拿马",
    name: "Panama",
    code: "507",
    time: "-13.00"
  },
  {
    name_zh: "巴布亚新几内亚",
    name: "Papua New Guinea",
    code: "675",
    time: "2.00"
  },
  {
    name_zh: "巴拉圭",
    name: "Paraguay",
    code: "595",
    time: "-12.00"
  },
  {
    name_zh: "秘鲁",
    name: "Peru",
    code: "51",
    time: "-13.00"
  },
  {
    name_zh: "菲律宾",
    name: "Philippines",
    code: "63",
    time: "0.00"
  },
  {
    name_zh: "波兰",
    name: "Poland",
    code: "48",
    time: "-7.00"
  },
  {
    name_zh: "葡萄牙",
    name: "Portugal",
    code: "351",
    time: "-8.00"
  },
  {
    name_zh: "巴基斯坦",
    name: "Pakistan",
    code: "92",
    time: "-2.30"
  },
  {
    name_zh: "波多黎各(美)",
    name: "Puerto Rico",
    code: "1787",
    time: "-12.00"
  },
  {
    name_zh: "卡塔尔",
    name: "Qatar",
    code: "974",
    time: "-5.00"
  },
  {
    name_zh: "留尼汪岛",
    name: "Reunion I.",
    code: "262",
    time: "-4.00"
  },
  {
    name_zh: "罗马尼亚",
    name: "Romania",
    code: "40",
    time: "-6.00"
  },
  {
    name_zh: "俄罗斯",
    name: "Russia",
    code: "7",
    time: "-5.00"
  },
  {
    name_zh: "卢旺达",
    name: "Rwanda",
    code: "250",
    time: "-6.00"
  },
  {
    name_zh: "东萨摩亚(美)",
    name: "Samoa,Eastern",
    code: "684",
    time: "-19.00"
  },
  {
    name_zh: "西萨摩亚",
    name: "Samoa,Western",
    code: "685",
    time: "-19.00"
  },
  {
    name_zh: "圣马力诺",
    name: "San.Marino",
    code: "378",
    time: "-7.00"
  },
  {
    name_zh: "圣皮埃尔岛及密克隆岛",
    name: "San.Pierre And Miquelon I.",
    code: "508",
    time: "-2.00"
  },
  {
    name_zh: "圣多美和普林西比",
    name: "San.Tome And Principe",
    code: "239",
    time: "-8.00"
  },
  {
    name_zh: "沙特阿拉伯",
    name: "Saudi Arabia",
    code: "966",
    time: "-5.00"
  },
  {
    name_zh: "塞内加尔",
    name: "Senegal",
    code: "221",
    time: "-8.00"
  },
  {
    name_zh: "塞舌尔",
    name: "Seychelles",
    code: "248",
    time: "-4.00"
  },
  {
    name_zh: "新加坡",
    name: "Singapore",
    code: "65",
    time: "0.30"
  },
  {
    name_zh: "斯洛伐克",
    name: "Slovak",
    code: "421",
    time: "-7.00"
  },
  {
    name_zh: "斯洛文尼亚",
    name: "Slovenia",
    code: "386",
    time: "-7.00"
  },
  {
    name_zh: "所罗门群岛",
    name: "Solomon Is.",
    code: "677",
    time: "3.00"
  },
  {
    name_zh: "索马里",
    name: "Somali",
    code: "252",
    time: "-5.00"
  },
  {
    name_zh: "南非",
    name: "South Africa",
    code: "27",
    time: "-6.00"
  },
  {
    name_zh: "西班牙",
    name: "Spain",
    code: "34",
    time: "-8.00"
  },
  {
    name_zh: "斯里兰卡",
    name: "Sri Lanka",
    code: "94",
    time: "0.00"
  },
  {
    name_zh: "圣克里斯托弗和尼维斯",
    name: "St.Christopher and Nevis",
    code: "1809",
    time: "-12.30"
  },
  {
    name_zh: "圣赫勒拿",
    name: "St.Helena",
    code: "290",
    time: "-8.00"
  },
  {
    name_zh: "圣卢西亚",
    name: "St.Lucia",
    code: "1758",
    time: "-12.00"
  },
  {
    name_zh: "圣文森特岛(英)",
    name: "St.Vincent I.",
    code: "1784",
    time: "-12.00"
  },
  {
    name_zh: "苏丹",
    name: "Sudan",
    code: "249",
    time: "-6.00"
  },
  {
    name_zh: "苏里南",
    name: "Suriname",
    code: "597",
    time: "-11.30"
  },
  {
    name_zh: "斯威士兰",
    name: "Swaziland",
    code: "268",
    time: "-6.00"
  },
  {
    name_zh: "瑞典",
    name: "Sweden",
    code: "46",
    time: "-7.00"
  },
  {
    name_zh: "瑞士",
    name: "Switzerland",
    code: "41",
    time: "-7.00"
  },
  {
    name_zh: "叙利亚",
    name: "Syria",
    code: "963",
    time: "-6.00"
  },
  {
    name_zh: "塔吉克斯坦",
    name: "Tajikistan",
    code: "992",
    time: "-5.00"
  },
  {
    name_zh: "坦桑尼亚",
    name: "Tanzania",
    code: "255",
    time: "-5.00"
  },
  {
    name_zh: "泰国",
    name: "Thailand",
    code: "66",
    time: "-1.00"
  },
  {
    name_zh: "阿拉伯联合酋长国",
    name: "The United Arab Emirates",
    code: "971",
    time: "-5.00"
  },
  {
    name_zh: "多哥",
    name: "Togo",
    code: "228",
    time: "-8.00"
  },
  {
    name_zh: "托克劳群岛(新)",
    name: "Tokelau Is.",
    code: "690",
    time: "-19.00"
  },
  {
    name_zh: "汤加",
    name: "Tonga",
    code: "676",
    time: "5.00"
  },
  {
    name_zh: "特立尼达和多巴哥",
    name: "Trinidad and Tobago",
    code: "1809",
    time: "-12.00"
  },
  {
    name_zh: "突尼斯",
    name: "Tunisia",
    code: "216",
    time: "-7.00"
  },
  {
    name_zh: "土耳其",
    name: "Turkey",
    code: "90",
    time: "-6.00"
  },
  {
    name_zh: "土库曼斯坦",
    name: "Turkmenistan",
    code: "993",
    time: "-5.00"
  },
  {
    name_zh: "特克斯和凯科斯群岛",
    name: "Turks and Caicos Is.",
    code: "1809",
    time: "-13.00"
  },
  {
    name_zh: "图瓦卢",
    name: "Tuvalu",
    code: "688",
    time: "4.00"
  },
  {
    name_zh: "乌干达",
    name: "Uganda",
    code: "256",
    time: "-5.00"
  },
  {
    name_zh: "乌克兰",
    name: "Ukraine",
    code: "380",
    time: "-5.00"
  },
  {
    name_zh: "英国",
    name: "United Kingdom",
    code: "44",
    time: "-8.00"
  },
  {
    name_zh: "乌拉圭",
    name: "Uruguay",
    code: "598",
    time: "-10.30"
  },
  {
    name_zh: "乌兹别克斯坦",
    name: "Uzbekistan",
    code: "998",
    time: "-5.00"
  },
  {
    name_zh: "瓦努阿图",
    name: "Vanuatu",
    code: "678",
    time: "3.00"
  },
  {
    name_zh: "梵蒂冈",
    name: "Vatican",
    code: "379",
    time: "-7.00"
  },
  {
    name_zh: "委内瑞拉",
    name: "Venezuela",
    code: "58",
    time: "-12.30"
  },
  {
    name_zh: "越南",
    name: "Vietnam",
    code: "84",
    time: "-1.00"
  },
  {
    name_zh: "维尔京群岛(英)",
    name: "Virgin Is.",
    code: "1809",
    time: "-12.00"
  },
  {
    name_zh: "维尔京群岛和圣罗克伊",
    name: "Virgin Is. and St.Croix I.",
    code: "1809",
    time: "0.00"
  },
  {
    name_zh: "威克岛(美)",
    name: "Wake I.",
    code: "1808",
    time: "4.00"
  },
  {
    name_zh: "瓦里斯和富士那群岛",
    name: "Wallis And Futuna Is.",
    code: "681",
    time: "4.00"
  },
  {
    name_zh: "西撒哈拉",
    name: "Western sahara",
    code: "967",
    time: "0.00"
  },
  {
    name_zh: "也门",
    name: "Yemen",
    code: "967",
    time: "-5.00"
  },
  {
    name_zh: "南斯拉夫",
    name: "Yugoslavia",
    code: "381",
    time: "-7.00"
  },
  {
    name_zh: "扎伊尔",
    name: "Zaire",
    code: "243",
    time: "-7.00"
  },
  {
    name_zh: "赞比亚",
    name: "Zambia",
    code: "260",
    time: "-6.00"
  },
  {
    name_zh: "桑给巴尔",
    name: "Zanzibar",
    code: "259",
    time: "0.00"
  },
  {
    name_zh: "津巴布韦",
    name: "Zimbabwe",
    code: "263",
    time: "-6.00"
  }
]

//全部地区
export const COUNTRY_CODE= [
  {
    "id": 7,
    "name": "China",
    "name_zh": "中国",
    "pid": 1
  },
  {
    "id": 140,
    "name": "United States",
    "name_zh": "美国",
    "pid": 4
  },
  {
    "id": 99,
    "name": "Canada",
    "name_zh": "加拿大",
    "pid": 4
  },
  {
    "id": 25,
    "name": "Australia",
    "name_zh": "澳大利亚",
    "pid": 6
  },
  {
    "id": 8,
    "name": "Albania",
    "name_zh": "阿尔巴尼亚",
    "pid": 2
  },
  {
    "id": 9,
    "name": "Algeria",
    "name_zh": "阿尔及利亚",
    "pid": 3
  },
  {
    "id": 10,
    "name": "Afghanistan",
    "name_zh": "阿富汗",
    "pid": 1
  },
  {
    "id": 11,
    "name": "Argentina",
    "name_zh": "阿根廷",
    "pid": 5
  },
  {
    "id": 12,
    "name": "United Arab Emirates",
    "name_zh": "阿拉伯联合酋长国",
    "pid": 1
  },
  {
    "id": 13,
    "name": "Aruba",
    "name_zh": "阿鲁巴",
    "pid": 5
  },
  {
    "id": 14,
    "name": "Oman",
    "name_zh": "阿曼",
    "pid": 1
  },
  {
    "id": 15,
    "name": "Azerbaijan",
    "name_zh": "阿塞拜疆",
    "pid": 1
  },
  {
    "id": 16,
    "name": "Ascension Island",
    "name_zh": "阿森松岛",
    "pid": 3
  },
  {
    "id": 17,
    "name": "Egypt",
    "name_zh": "埃及",
    "pid": 3
  },
  {
    "id": 18,
    "name": "Ethiopia",
    "name_zh": "埃塞俄比亚",
    "pid": 3
  },
  {
    "id": 19,
    "name": "Ireland",
    "name_zh": "爱尔兰",
    "pid": 2
  },
  {
    "id": 20,
    "name": "Estonia",
    "name_zh": "爱沙尼亚",
    "pid": 2
  },
  {
    "id": 21,
    "name": "Andorra",
    "name_zh": "安道尔",
    "pid": 2
  },
  {
    "id": 22,
    "name": "Angola",
    "name_zh": "安哥拉",
    "pid": 3
  },
  {
    "id": 23,
    "name": "Anguilla",
    "name_zh": "安圭拉",
    "pid": 5
  },
  {
    "id": 24,
    "name": "Antigua and Barbuda",
    "name_zh": "安提瓜岛和巴布达",
    "pid": 4
  },

  {
    "id": 26,
    "name": "Austria",
    "name_zh": "奥地利",
    "pid": 2
  },
  {
    "id": 27,
    "name": "Aland lslands",
    "name_zh": "奥兰群岛",
    "pid": 2
  },
  {
    "id": 28,
    "name": "Barbados",
    "name_zh": "巴巴多斯岛",
    "pid": 5
  },
  {
    "id": 29,
    "name": "Papua New Guinea",
    "name_zh": "巴布亚新几内亚",
    "pid": 6
  },
  {
    "id": 30,
    "name": "Bahamas",
    "name_zh": "巴哈马",
    "pid": 4
  },
  {
    "id": 31,
    "name": "Pakistan",
    "name_zh": "巴基斯坦",
    "pid": 1
  },
  {
    "id": 32,
    "name": "Paraguay",
    "name_zh": "巴拉圭",
    "pid": 5
  },
  {
    "id": 33,
    "name": "Palestinian Authority",
    "name_zh": "巴勒斯坦",
    "pid": 1
  },
  {
    "id": 34,
    "name": "Bahrain",
    "name_zh": "巴林",
    "pid": 1
  },
  {
    "id": 35,
    "name": "Panama",
    "name_zh": "巴拿马",
    "pid": 4
  },
  {
    "id": 36,
    "name": "Brazil",
    "name_zh": "巴西",
    "pid": 5
  },
  {
    "id": 37,
    "name": "Belarus",
    "name_zh": "白俄罗斯",
    "pid": 2
  },
  {
    "id": 38,
    "name": "Bermuda",
    "name_zh": "百慕大",
    "pid": 4
  },
  {
    "id": 39,
    "name": "Bulgaria",
    "name_zh": "保加利亚",
    "pid": 2
  },
  {
    "id": 40,
    "name": "Northern Mariana Islands",
    "name_zh": "北马里亚纳群岛",
    "pid": 4
  },
  {
    "id": 41,
    "name": "Benin",
    "name_zh": "贝宁",
    "pid": 3
  },
  {
    "id": 42,
    "name": "Belgium",
    "name_zh": "比利时",
    "pid": 2
  },
  {
    "id": 43,
    "name": "Iceland",
    "name_zh": "冰岛",
    "pid": 2
  },
  {
    "id": 44,
    "name": "Puerto Rico",
    "name_zh": "波多黎各",
    "pid": 4
  },
  {
    "id": 45,
    "name": "Poland",
    "name_zh": "波兰",
    "pid": 2
  },
  {
    "id": 46,
    "name": "Bolivia",
    "name_zh": "玻利维亚",
    "pid": 5
  },
  {
    "id": 47,
    "name": "Bosnia and Herzegovina",
    "name_zh": "波斯尼亚和黑塞哥维那",
    "pid": 2
  },
  {
    "id": 48,
    "name": "Botswana",
    "name_zh": "博茨瓦纳",
    "pid": 3
  },
  {
    "id": 49,
    "name": "Belize",
    "name_zh": "伯利兹",
    "pid": 4
  },
  {
    "id": 50,
    "name": "Bhutan",
    "name_zh": "不丹",
    "pid": 1
  },
  {
    "id": 51,
    "name": "Burkina Faso",
    "name_zh": "布基纳法索",
    "pid": 3
  },
  {
    "id": 52,
    "name": "Burundi",
    "name_zh": "布隆迪",
    "pid": 3
  },
  {
    "id": 53,
    "name": "Bouvet Island",
    "name_zh": "布韦岛",
    "pid": 2
  },
  {
    "id": 54,
    "name": "North Korea",
    "name_zh": "朝鲜",
    "pid": 1
  },
  {
    "id": 55,
    "name": "Denmark",
    "name_zh": "丹麦",
    "pid": 2
  },
  {
    "id": 56,
    "name": "Germany",
    "name_zh": "德国",
    "pid": 2
  },
  {
    "id": 57,
    "name": "Timor-Leste",
    "name_zh": "东帝汶",
    "pid": 1
  },
  {
    "id": 58,
    "name": "Togo",
    "name_zh": "多哥",
    "pid": 3
  },
  {
    "id": 59,
    "name": "Dominica",
    "name_zh": "多米尼加",
    "pid": 4
  },
  {
    "id": 60,
    "name": "Dominican Republic",
    "name_zh": "多米尼加共和国",
    "pid": 4
  },
  {
    "id": 61,
    "name": "Russia",
    "name_zh": "俄罗斯",
    "pid": 2
  },
  {
    "id": 62,
    "name": "Ecuador",
    "name_zh": "厄瓜多尔",
    "pid": 5
  },
  {
    "id": 63,
    "name": "Eritrea",
    "name_zh": "厄立特里亚",
    "pid": 3
  },
  {
    "id": 64,
    "name": "France",
    "name_zh": "法国",
    "pid": 2
  },
  {
    "id": 65,
    "name": "Faroe Islands",
    "name_zh": "法罗群岛",
    "pid": 2
  },
  {
    "id": 66,
    "name": "Frech Polynesia",
    "name_zh": "法属波利尼西亚",
    "pid": 6
  },
  {
    "id": 67,
    "name": "French Guiana",
    "name_zh": "法属圭亚那",
    "pid": 5
  },
  {
    "id": 68,
    "name": "French Southern and Antarctic Lands",
    "name_zh": "法属南部领地",
    "pid": 2
  },
  {
    "id": 69,
    "name": "Vatican City",
    "name_zh": "梵蒂冈",
    "pid": 2
  },
  {
    "id": 70,
    "name": "Philippines",
    "name_zh": "菲律宾",
    "pid": 1
  },
  {
    "id": 71,
    "name": "Fiji Islands",
    "name_zh": "斐济",
    "pid": 6
  },
  {
    "id": 72,
    "name": "Finland",
    "name_zh": "芬兰",
    "pid": 2
  },
  {
    "id": 73,
    "name": "Cape Verde",
    "name_zh": "佛得角",
    "pid": 3
  },
  {
    "id": 74,
    "name": "Falkland Islands",
    "name_zh": "弗兰克群岛",
    "pid": 2
  },
  {
    "id": 75,
    "name": "Gambia",
    "name_zh": "冈比亚",
    "pid": 3
  },
  {
    "id": 76,
    "name": "Congo(Brazzaville)",
    "name_zh": "刚果(布)",
    "pid": 3
  },
  {
    "id": 77,
    "name": "Congo(Kinshasa)",
    "name_zh": "刚果(金)",
    "pid": 3
  },
  {
    "id": 78,
    "name": "Colombia",
    "name_zh": "哥伦比亚",
    "pid": 5
  },
  {
    "id": 79,
    "name": "Costa Rica",
    "name_zh": "哥斯达黎加",
    "pid": 4
  },
  {
    "id": 80,
    "name": "Guernsey",
    "name_zh": "格恩西岛",
    "pid": 2
  },
  {
    "id": 81,
    "name": "Grenada",
    "name_zh": "格林纳达",
    "pid": 4
  },
  {
    "id": 82,
    "name": "Greenland",
    "name_zh": "格陵兰",
    "pid": 4
  },
  {
    "id": 83,
    "name": "Cuba",
    "name_zh": "古巴",
    "pid": 4
  },
  {
    "id": 84,
    "name": "Guadeloupe",
    "name_zh": "瓜德罗普",
    "pid": 4
  },
  {
    "id": 85,
    "name": "Guam",
    "name_zh": "关岛",
    "pid": 6
  },
  {
    "id": 86,
    "name": "Guyana",
    "name_zh": "圭亚那",
    "pid": 5
  },
  {
    "id": 87,
    "name": "Kazakhstan",
    "name_zh": "哈萨克斯坦",
    "pid": 1
  },
  {
    "id": 88,
    "name": "Haiti",
    "name_zh": "海地",
    "pid": 4
  },
  {
    "id": 89,
    "name": "Korea",
    "name_zh": "韩国",
    "pid": 1
  },
  {
    "id": 90,
    "name": "Netherlands",
    "name_zh": "荷兰",
    "pid": 2
  },
  {
    "id": 91,
    "name": "Netherlands Antilles",
    "name_zh": "荷属安地列斯",
    "pid": 5
  },
  {
    "id": 92,
    "name": "Heard Island and McDonald Islands",
    "name_zh": "赫德和麦克唐纳群岛",
    "pid": 6
  },
  {
    "id": 93,
    "name": "Honduras",
    "name_zh": "洪都拉斯",
    "pid": 4
  },
  {
    "id": 94,
    "name": "Kiribati",
    "name_zh": "基里巴斯",
    "pid": 6
  },
  {
    "id": 95,
    "name": "Djibouti",
    "name_zh": "吉布提",
    "pid": 3
  },
  {
    "id": 96,
    "name": "Kyrgyzstan",
    "name_zh": "吉尔吉斯斯坦",
    "pid": 1
  },
  {
    "id": 97,
    "name": "Guinea",
    "name_zh": "几内亚",
    "pid": 3
  },
  {
    "id": 98,
    "name": "Guinea-Bissau",
    "name_zh": "几内亚比绍",
    "pid": 3
  },

  {
    "id": 100,
    "name": "Ghana",
    "name_zh": "加纳",
    "pid": 3
  },
  {
    "id": 101,
    "name": "Gabon",
    "name_zh": "加蓬",
    "pid": 3
  },
  {
    "id": 102,
    "name": "Cambodia",
    "name_zh": "柬埔寨",
    "pid": 1
  },
  {
    "id": 103,
    "name": "Czech",
    "name_zh": "捷克共和国",
    "pid": 2
  },
  {
    "id": 104,
    "name": "Zimbabwe",
    "name_zh": "津巴布韦",
    "pid": 3
  },
  {
    "id": 105,
    "name": "Cameroon",
    "name_zh": "喀麦隆",
    "pid": 3
  },
  {
    "id": 106,
    "name": "Qatar",
    "name_zh": "卡塔尔",
    "pid": 1
  },
  {
    "id": 107,
    "name": "Cayman Islands",
    "name_zh": "开曼群岛",
    "pid": 4
  },
  {
    "id": 108,
    "name": "Cocos(Keeling)Islands",
    "name_zh": "科科斯群岛",
    "pid": 6
  },
  {
    "id": 109,
    "name": "Comoros",
    "name_zh": "科摩罗",
    "pid": 3
  },
  {
    "id": 110,
    "name": "Cote d'Ivoire",
    "name_zh": "科特迪瓦",
    "pid": 3
  },
  {
    "id": 111,
    "name": "Kuwait",
    "name_zh": "科威特",
    "pid": 1
  },
  {
    "id": 112,
    "name": "Croatia",
    "name_zh": "克罗地亚",
    "pid": 2
  },
  {
    "id": 113,
    "name": "Kenya",
    "name_zh": "肯尼亚",
    "pid": 3
  },
  {
    "id": 114,
    "name": "Cook Islands",
    "name_zh": "库克群岛",
    "pid": 6
  },
  {
    "id": 115,
    "name": "Latvia",
    "name_zh": "拉脱维亚",
    "pid": 2
  },
  {
    "id": 116,
    "name": "Lesotho",
    "name_zh": "莱索托",
    "pid": 3
  },
  {
    "id": 117,
    "name": "Laos",
    "name_zh": "老挝",
    "pid": 1
  },
  {
    "id": 118,
    "name": "Lebanon",
    "name_zh": "黎巴嫩",
    "pid": 1
  },
  {
    "id": 119,
    "name": "Liberia",
    "name_zh": "利比里亚",
    "pid": 3
  },
  {
    "id": 120,
    "name": "Libya",
    "name_zh": "利比亚",
    "pid": 3
  },
  {
    "id": 121,
    "name": "Lithuania",
    "name_zh": "立陶宛",
    "pid": 2
  },
  {
    "id": 122,
    "name": "Liechtenstein",
    "name_zh": "列支敦士登",
    "pid": 2
  },
  {
    "id": 123,
    "name": "Reunion",
    "name_zh": "留尼旺岛",
    "pid": 2
  },
  {
    "id": 124,
    "name": "Luxembourg",
    "name_zh": "卢森堡",
    "pid": 2
  },
  {
    "id": 125,
    "name": "Rwanda",
    "name_zh": "卢旺达",
    "pid": 3
  },
  {
    "id": 126,
    "name": "Romania",
    "name_zh": "罗马尼亚",
    "pid": 2
  },
  {
    "id": 127,
    "name": "Madagascar",
    "name_zh": "马达加斯加",
    "pid": 3
  },
  {
    "id": 128,
    "name": "Maldives",
    "name_zh": "马尔代夫",
    "pid": 1
  },
  {
    "id": 129,
    "name": "Malta",
    "name_zh": "马耳他",
    "pid": 2
  },
  {
    "id": 130,
    "name": "Malawi",
    "name_zh": "马拉维",
    "pid": 3
  },
  {
    "id": 131,
    "name": "Malaysia",
    "name_zh": "马来西亚",
    "pid": 1
  },
  {
    "id": 132,
    "name": "Mali",
    "name_zh": "马里",
    "pid": 3
  },
  {
    "id": 133,
    "name": "Macedonia",
    "name_zh": "马其顿",
    "pid": 2
  },
  {
    "id": 134,
    "name": "Marshall Islands",
    "name_zh": "马绍尔群岛",
    "pid": 6
  },
  {
    "id": 135,
    "name": "Martinique",
    "name_zh": "马提尼克",
    "pid": 4
  },
  {
    "id": 136,
    "name": "Mayotte",
    "name_zh": "马约特岛",
    "pid": 3
  },
  {
    "id": 137,
    "name": "Isle of Man",
    "name_zh": "曼岛",
    "pid": 2
  },
  {
    "id": 138,
    "name": "Mauritius",
    "name_zh": "毛里求斯",
    "pid": 3
  },
  {
    "id": 139,
    "name": "Mauritania",
    "name_zh": "毛里塔尼亚",
    "pid": 3
  },

  {
    "id": 141,
    "name": "American Samoa",
    "name_zh": "美属萨摩亚",
    "pid": 6
  },
  {
    "id": 142,
    "name": "United States Minor Outlying Islands",
    "name_zh": "美属外岛",
    "pid": 4
  },
  {
    "id": 143,
    "name": "Mongolia",
    "name_zh": "蒙古",
    "pid": 1
  },
  {
    "id": 144,
    "name": "Montserrat",
    "name_zh": "蒙特塞拉特",
    "pid": 4
  },
  {
    "id": 145,
    "name": "Bangladesh",
    "name_zh": "孟加拉",
    "pid": 1
  },
  {
    "id": 146,
    "name": "Micronesia",
    "name_zh": "密克罗尼西亚",
    "pid": 6
  },
  {
    "id": 147,
    "name": "Peru",
    "name_zh": "秘鲁",
    "pid": 5
  },
  {
    "id": 148,
    "name": "Myanmar",
    "name_zh": "缅甸",
    "pid": 1
  },
  {
    "id": 149,
    "name": "Moldova",
    "name_zh": "摩尔多瓦",
    "pid": 2
  },
  {
    "id": 150,
    "name": "Morocco",
    "name_zh": "摩洛哥",
    "pid": 3
  },
  {
    "id": 151,
    "name": "Monaco",
    "name_zh": "摩纳哥",
    "pid": 2
  },
  {
    "id": 152,
    "name": "Mozambique",
    "name_zh": "莫桑比克",
    "pid": 3
  },
  {
    "id": 153,
    "name": "Mexico",
    "name_zh": "墨西哥",
    "pid": 4
  },
  {
    "id": 154,
    "name": "Namibia",
    "name_zh": "纳米比亚",
    "pid": 3
  },
  {
    "id": 155,
    "name": "South Africa",
    "name_zh": "南非",
    "pid": 3
  },
  {
    "id": 157,
    "name": "South Georgia and South Sandwich Islands",
    "name_zh": "南乔治亚和南桑德威奇群岛",
    "pid": 156
  },
  {
    "id": 158,
    "name": "Nauru",
    "name_zh": "瑙鲁",
    "pid": 6
  },
  {
    "id": 159,
    "name": "Nepal",
    "name_zh": "尼泊尔",
    "pid": 1
  },
  {
    "id": 160,
    "name": "Nicaragua",
    "name_zh": "尼加拉瓜",
    "pid": 4
  },
  {
    "id": 161,
    "name": "Niger",
    "name_zh": "尼日尔",
    "pid": 3
  },
  {
    "id": 162,
    "name": "Nigeria",
    "name_zh": "尼日利亚",
    "pid": 3
  },
  {
    "id": 163,
    "name": "Niue",
    "name_zh": "纽埃",
    "pid": 6
  },
  {
    "id": 164,
    "name": "Norway",
    "name_zh": "挪威",
    "pid": 2
  },
  {
    "id": 165,
    "name": "Norfolk Island",
    "name_zh": "诺福克",
    "pid": 4
  },
  {
    "id": 166,
    "name": "Palau",
    "name_zh": "帕劳群岛",
    "pid": 6
  },
  {
    "id": 167,
    "name": "Pitcairn Islands",
    "name_zh": "皮特凯恩",
    "pid": 6
  },
  {
    "id": 168,
    "name": "Portugal",
    "name_zh": "葡萄牙",
    "pid": 2
  },
  {
    "id": 169,
    "name": "Georgia",
    "name_zh": "乔治亚",
    "pid": 156
  },
  {
    "id": 170,
    "name": "Japan",
    "name_zh": "日本",
    "pid": 1
  },
  {
    "id": 171,
    "name": "Sweden",
    "name_zh": "瑞典",
    "pid": 2
  },
  {
    "id": 172,
    "name": "Switzerland",
    "name_zh": "瑞士",
    "pid": 2
  },
  {
    "id": 173,
    "name": "El Salvador",
    "name_zh": "萨尔瓦多",
    "pid": 4
  },
  {
    "id": 174,
    "name": "Samoa",
    "name_zh": "萨摩亚",
    "pid": 6
  },
  {
    "id": 175,
    "name": "Serbia",
    "name_zh": "塞尔维亚共和国",
    "pid": 2
  },
  {
    "id": 176,
    "name": "Sierra Leone",
    "name_zh": "塞拉利昂",
    "pid": 3
  },
  {
    "id": 177,
    "name": "Senegal",
    "name_zh": "塞内加尔",
    "pid": 3
  },
  {
    "id": 178,
    "name": "Cyprus",
    "name_zh": "塞浦路斯",
    "pid": 1
  },
  {
    "id": 179,
    "name": "Seychelles",
    "name_zh": "塞舌尔",
    "pid": 3
  },
  {
    "id": 180,
    "name": "Saudi Arabia",
    "name_zh": "沙特阿拉伯",
    "pid": 1
  },
  {
    "id": 181,
    "name": "Christmas Island",
    "name_zh": "圣诞岛",
    "pid": 6
  },
  {
    "id": 182,
    "name": "Sao Tome and Principe",
    "name_zh": "圣多美和普林西比",
    "pid": 3
  },
  {
    "id": 183,
    "name": "St.Helena",
    "name_zh": "圣赫勒拿",
    "pid": 3
  },
  {
    "id": 184,
    "name": "St.Kitts and Nevis",
    "name_zh": "圣基茨和尼维斯",
    "pid": 4
  },
  {
    "id": 185,
    "name": "St.Lucia",
    "name_zh": "圣卢西亚",
    "pid": 4
  },
  {
    "id": 186,
    "name": "San Marino",
    "name_zh": "圣马力诺",
    "pid": 2
  },
  {
    "id": 187,
    "name": "St.Pierre and Miquelon",
    "name_zh": "圣皮埃尔和米克隆群岛",
    "pid": 4
  },
  {
    "id": 188,
    "name": "St.Vincent and the Grenadines",
    "name_zh": "圣文森特和格林纳丁斯",
    "pid": 4
  },
  {
    "id": 189,
    "name": "Sri Lanka",
    "name_zh": "斯里兰卡",
    "pid": 1
  },
  {
    "id": 190,
    "name": "Slovakia",
    "name_zh": "斯洛伐克",
    "pid": 2
  },
  {
    "id": 191,
    "name": "Slovenia",
    "name_zh": "斯洛文尼亚",
    "pid": 2
  },
  {
    "id": 192,
    "name": "Svalbard and Jan Mayen",
    "name_zh": "斯瓦尔巴和扬马廷",
    "pid": 2
  },
  {
    "id": 193,
    "name": "Swaziland",
    "name_zh": "斯威士兰",
    "pid": 3
  },
  {
    "id": 194,
    "name": "Sudan",
    "name_zh": "苏丹",
    "pid": 3
  },
  {
    "id": 195,
    "name": "Suriname",
    "name_zh": "苏里南",
    "pid": 5
  },
  {
    "id": 196,
    "name": "Solomon Islands",
    "name_zh": "所罗门群岛",
    "pid": 6
  },
  {
    "id": 197,
    "name": "Somalia",
    "name_zh": "索马里",
    "pid": 3
  },
  {
    "id": 198,
    "name": "Tajikistan",
    "name_zh": "塔吉克斯坦",
    "pid": 1
  },
  {
    "id": 199,
    "name": "Thailand",
    "name_zh": "泰国",
    "pid": 1
  },
  {
    "id": 200,
    "name": "Tanzania",
    "name_zh": "坦桑尼亚",
    "pid": 3
  },
  {
    "id": 201,
    "name": "Tonga",
    "name_zh": "汤加",
    "pid": 6
  },
  {
    "id": 202,
    "name": "Turks and Caicos Islands",
    "name_zh": "特克斯和凯克特斯群岛",
    "pid": 4
  },
  {
    "id": 203,
    "name": "Tristan da Cunha",
    "name_zh": "特里斯坦达昆哈",
    "pid": 5
  },
  {
    "id": 204,
    "name": "Trinidad and Tobago",
    "name_zh": "特立尼达和多巴哥",
    "pid": 4
  },
  {
    "id": 205,
    "name": "Tunisia",
    "name_zh": "突尼斯",
    "pid": 3
  },
  {
    "id": 206,
    "name": "Tuvalu",
    "name_zh": "图瓦卢",
    "pid": 6
  },
  {
    "id": 207,
    "name": "Turkey",
    "name_zh": "土耳其",
    "pid": 1
  },
  {
    "id": 208,
    "name": "Turkmenistan",
    "name_zh": "土库曼斯坦",
    "pid": 1
  },
  {
    "id": 209,
    "name": "Tokelau",
    "name_zh": "托克劳",
    "pid": 6
  },
  {
    "id": 210,
    "name": "Wallis and Futuna",
    "name_zh": "瓦利斯和福图纳",
    "pid": 6
  },
  {
    "id": 211,
    "name": "Vanuatu",
    "name_zh": "瓦努阿图",
    "pid": 6
  },
  {
    "id": 212,
    "name": "Guatemala",
    "name_zh": "危地马拉",
    "pid": 4
  },
  {
    "id": 213,
    "name": "Virgin Islands",
    "name_zh": "维尔京群岛，美属",
    "pid": 4
  },
  {
    "id": 214,
    "name": "Virgin Islands,British",
    "name_zh": "维尔京群岛，英属",
    "pid": 4
  },
  {
    "id": 215,
    "name": "Venezuela",
    "name_zh": "委内瑞拉",
    "pid": 5
  },
  {
    "id": 216,
    "name": "Brunei",
    "name_zh": "文莱",
    "pid": 1
  },
  {
    "id": 217,
    "name": "Uganda",
    "name_zh": "乌干达",
    "pid": 3
  },
  {
    "id": 218,
    "name": "Ukraine",
    "name_zh": "乌克兰",
    "pid": 2
  },
  {
    "id": 219,
    "name": "Uruguay",
    "name_zh": "乌拉圭",
    "pid": 5
  },
  {
    "id": 220,
    "name": "Uzbekistan",
    "name_zh": "乌兹别克斯坦",
    "pid": 1
  },
  {
    "id": 221,
    "name": "Spain",
    "name_zh": "西班牙",
    "pid": 2
  },
  {
    "id": 222,
    "name": "Greece",
    "name_zh": "希腊",
    "pid": 2
  },
  {
    "id": 223,
    "name": "Singapore",
    "name_zh": "新加坡",
    "pid": 1
  },
  {
    "id": 224,
    "name": "New Caledonia",
    "name_zh": "新喀里多尼亚",
    "pid": 6
  },
  {
    "id": 225,
    "name": "New Zealand",
    "name_zh": "新西兰",
    "pid": 6
  },
  {
    "id": 226,
    "name": "Hungary",
    "name_zh": "匈牙利",
    "pid": 2
  },
  {
    "id": 227,
    "name": "Syria",
    "name_zh": "叙利亚",
    "pid": 1
  },
  {
    "id": 228,
    "name": "Jamaica",
    "name_zh": "牙买加",
    "pid": 4
  },
  {
    "id": 229,
    "name": "Armenia",
    "name_zh": "亚美尼亚",
    "pid": 1
  },
  {
    "id": 230,
    "name": "Yemen",
    "name_zh": "也门",
    "pid": 1
  },
  {
    "id": 231,
    "name": "Iraq",
    "name_zh": "伊拉克",
    "pid": 1
  },
  {
    "id": 232,
    "name": "Iran",
    "name_zh": "伊朗",
    "pid": 1
  },
  {
    "id": 233,
    "name": "Israel",
    "name_zh": "以色列",
    "pid": 1
  },
  {
    "id": 234,
    "name": "Italy",
    "name_zh": "意大利",
    "pid": 2
  },
  {
    "id": 235,
    "name": "India",
    "name_zh": "印度",
    "pid": 1
  },
  {
    "id": 236,
    "name": "Indonesia",
    "name_zh": "印度尼西亚",
    "pid": 1
  },
  {
    "id": 237,
    "name": "United Kingdom",
    "name_zh": "英国",
    "pid": 2
  },
  {
    "id": 238,
    "name": "British Indian Ocean Territory",
    "name_zh": "英属印度洋领地",
    "pid": 3
  },
  {
    "id": 239,
    "name": "Jordan",
    "name_zh": "约旦",
    "pid": 1
  },
  {
    "id": 240,
    "name": "Vietnam",
    "name_zh": "越南",
    "pid": 1
  },
  {
    "id": 241,
    "name": "Zambia",
    "name_zh": "赞比亚",
    "pid": 3
  },
  {
    "id": 242,
    "name": "Jersey",
    "name_zh": "泽西岛",
    "pid": 2
  },
  {
    "id": 243,
    "name": "Chad",
    "name_zh": "乍得",
    "pid": 3
  },
  {
    "id": 244,
    "name": "Gibraltar",
    "name_zh": "直布罗陀",
    "pid": 3
  },
  {
    "id": 245,
    "name": "Chile",
    "name_zh": "智利",
    "pid": 5
  },
  {
    "id": 246,
    "name": "Central African Republic",
    "name_zh": "中非共和国",
    "pid": 3
  },
  {
    "id": 247,
    "name": "Beijing",
    "name_zh": "北京",
    "pid": 7
  },
  {
    "id": 248,
    "name": "Tianjin",
    "name_zh": "天津",
    "pid": 7
  },
  {
    "id": 249,
    "name": "Hebei",
    "name_zh": "河北",
    "pid": 7
  },
  {
    "id": 250,
    "name": "Shanxi",
    "name_zh": "山西",
    "pid": 7
  },
  {
    "id": 251,
    "name": "Inner Mongolia",
    "name_zh": "内蒙古",
    "pid": 7
  },
  {
    "id": 252,
    "name": "Liaoning",
    "name_zh": "辽宁",
    "pid": 7
  },
  {
    "id": 253,
    "name": "Jilin",
    "name_zh": "吉林",
    "pid": 7
  },
  {
    "id": 254,
    "name": "Heilongjiang",
    "name_zh": "黑龙江",
    "pid": 7
  },
  {
    "id": 255,
    "name": "Shanghai",
    "name_zh": "上海",
    "pid": 7
  },
  {
    "id": 256,
    "name": "Jiangsu",
    "name_zh": "江苏",
    "pid": 7
  },
  {
    "id": 257,
    "name": "Zhejiang",
    "name_zh": "浙江",
    "pid": 7
  },
  {
    "id": 258,
    "name": "Anhui",
    "name_zh": "安徽",
    "pid": 7
  },
  {
    "id": 259,
    "name": "Fujian",
    "name_zh": "福建",
    "pid": 7
  },
  {
    "id": 260,
    "name": "Jiangxi",
    "name_zh": "江西",
    "pid": 7
  },
  {
    "id": 261,
    "name": "Shandong",
    "name_zh": "山东",
    "pid": 7
  },
  {
    "id": 262,
    "name": "Henan",
    "name_zh": "河南",
    "pid": 7
  },
  {
    "id": 263,
    "name": "Hubei",
    "name_zh": "湖北",
    "pid": 7
  },
  {
    "id": 264,
    "name": "Hunan",
    "name_zh": "湖南",
    "pid": 7
  },
  {
    "id": 265,
    "name": "Guangdong",
    "name_zh": "广东",
    "pid": 7
  },
  {
    "id": 266,
    "name": "Guangxi",
    "name_zh": "广西",
    "pid": 7
  },
  {
    "id": 267,
    "name": "Hainan",
    "name_zh": "海南",
    "pid": 7
  },
  {
    "id": 268,
    "name": "Chongqing",
    "name_zh": "重庆",
    "pid": 7
  },
  {
    "id": 269,
    "name": "Sichuan",
    "name_zh": "四川",
    "pid": 7
  },
  {
    "id": 270,
    "name": "Guizhou",
    "name_zh": "贵州",
    "pid": 7
  },
  {
    "id": 271,
    "name": "Yunnan",
    "name_zh": "云南",
    "pid": 7
  },
  {
    "id": 272,
    "name": "Tibet",
    "name_zh": "西藏",
    "pid": 7
  },
  {
    "id": 273,
    "name": "Shaanxi",
    "name_zh": "陕西",
    "pid": 7
  },
  {
    "id": 274,
    "name": "Gansu",
    "name_zh": "甘肃",
    "pid": 7
  },
  {
    "id": 275,
    "name": "Qinghai",
    "name_zh": "青海",
    "pid": 7
  },
  {
    "id": 276,
    "name": "Ningxia",
    "name_zh": "宁夏",
    "pid": 7
  },
  {
    "id": 277,
    "name": "Xinjiang",
    "name_zh": "新疆",
    "pid": 7
  },
  {
    "id": 278,
    "name": "Taiwan",
    "name_zh": "台湾",
    "pid": 7
  },
  {
    "id": 279,
    "name": "Hongkong SAR",
    "name_zh": "香港",
    "pid": 7
  },
  {
    "id": 280,
    "name": "Macao SAR",
    "name_zh": "澳门",
    "pid": 7
  },
  {
    "id": 281,
    "name": "Northern Territory",
    "name_zh": "北部地区",
    "pid": 25
  },
  {
    "id": 282,
    "name": "Canberra",
    "name_zh": "堪培拉",
    "pid": 25
  },
  {
    "id": 283,
    "name": "Queensland",
    "name_zh": "昆士兰",
    "pid": 25
  },
  {
    "id": 284,
    "name": "South Australia",
    "name_zh": "南澳大利亚",
    "pid": 25
  },
  {
    "id": 285,
    "name": "Tasmania",
    "name_zh": "塔斯马尼亚",
    "pid": 25
  },
  {
    "id": 286,
    "name": "Victoria",
    "name_zh": "维多利亚",
    "pid": 25
  },
  {
    "id": 287,
    "name": "Western Australia",
    "name_zh": "西澳大利亚",
    "pid": 25
  },
  {
    "id": 288,
    "name": "New South Wales",
    "name_zh": "新南威尔士",
    "pid": 25
  },
  {
    "id": 289,
    "name": "Daegu",
    "name_zh": "大邱",
    "pid": 89
  },
  {
    "id": 290,
    "name": "Daejeon",
    "name_zh": "大田",
    "pid": 89
  },
  {
    "id": 291,
    "name": "Busan",
    "name_zh": "釜山",
    "pid": 89
  },
  {
    "id": 292,
    "name": "Gwangju",
    "name_zh": "光州",
    "pid": 89
  },
  {
    "id": 293,
    "name": "Jeju-do",
    "name_zh": "济州特别自治道",
    "pid": 89
  },
  {
    "id": 294,
    "name": "Gangwon-do",
    "name_zh": "江原道",
    "pid": 89
  },
  {
    "id": 295,
    "name": "Gyeonggi-do",
    "name_zh": "京畿道",
    "pid": 89
  },
  {
    "id": 296,
    "name": "Chungcheongbuk-do",
    "name_zh": "庆尚北道",
    "pid": 89
  },
  {
    "id": 297,
    "name": "Chungcheongnam-do",
    "name_zh": "庆尚南道",
    "pid": 89
  },
  {
    "id": 298,
    "name": "Gyeongsangbuk-do",
    "name_zh": "全罗北道",
    "pid": 89
  },
  {
    "id": 299,
    "name": "Gyeongsangnam-do",
    "name_zh": "全罗南道",
    "pid": 89
  },
  {
    "id": 300,
    "name": "Incheon",
    "name_zh": "仁川",
    "pid": 89
  },
  {
    "id": 301,
    "name": "Seoul",
    "name_zh": "首尔",
    "pid": 89
  },
  {
    "id": 302,
    "name": "Ulsan",
    "name_zh": "蔚山",
    "pid": 89
  },
  {
    "id": 303,
    "name": "Jeollabuk-do",
    "name_zh": "忠清北道",
    "pid": 89
  },
  {
    "id": 304,
    "name": "Jeollanam-do",
    "name_zh": "忠清南道",
    "pid": 89
  },
  {
    "id": 305,
    "name": "Pulau Pinang",
    "name_zh": "槟榔屿",
    "pid": 131
  },
  {
    "id": 306,
    "name": "Perlis",
    "name_zh": "玻璃市",
    "pid": 131
  },
  {
    "id": 307,
    "name": "Terengganu",
    "name_zh": "丁加奴",
    "pid": 131
  },
  {
    "id": 308,
    "name": "Kedah",
    "name_zh": "吉打",
    "pid": 131
  },
  {
    "id": 309,
    "name": "Kelantan",
    "name_zh": "吉兰丹",
    "pid": 131
  },
  {
    "id": 310,
    "name": "Kuala Lumpur",
    "name_zh": "吉隆坡",
    "pid": 131
  },
  {
    "id": 311,
    "name": "Malacca",
    "name_zh": "马六甲",
    "pid": 131
  },
  {
    "id": 312,
    "name": "Labuan",
    "name_zh": "纳闽",
    "pid": 131
  },
  {
    "id": 313,
    "name": "Pahang",
    "name_zh": "彭亨",
    "pid": 131
  },
  {
    "id": 314,
    "name": "Perak",
    "name_zh": "霹雳",
    "pid": 131
  },
  {
    "id": 315,
    "name": "Johor",
    "name_zh": "柔佛",
    "pid": 131
  },
  {
    "id": 316,
    "name": "Negeri Sembilan",
    "name_zh": "森美兰",
    "pid": 131
  },
  {
    "id": 317,
    "name": "Sabah",
    "name_zh": "沙巴",
    "pid": 131
  },
  {
    "id": 318,
    "name": "Sarawak",
    "name_zh": "沙捞越",
    "pid": 131
  },
  {
    "id": 319,
    "name": "Selangor",
    "name_zh": "雪兰莪",
    "pid": 131
  },
  {
    "id": 320,
    "name": "Arkansas",
    "name_zh": "阿肯色",
    "pid": 140
  },
  {
    "id": 321,
    "name": "Alabama",
    "name_zh": "阿拉巴马",
    "pid": 140
  },
  {
    "id": 322,
    "name": "Alaska",
    "name_zh": "阿拉斯加",
    "pid": 140
  },
  {
    "id": 323,
    "name": "Idaho",
    "name_zh": "爱达荷",
    "pid": 140
  },
  {
    "id": 324,
    "name": "Iowa",
    "name_zh": "爱荷华",
    "pid": 140
  },
  {
    "id": 325,
    "name": "North Dakota",
    "name_zh": "北达科他",
    "pid": 140
  },
  {
    "id": 326,
    "name": "North Carolina",
    "name_zh": "北卡罗来纳",
    "pid": 140
  },
  {
    "id": 327,
    "name": "Pennsylvania",
    "name_zh": "宾夕法尼亚",
    "pid": 140
  },
  {
    "id": 328,
    "name": "Texas",
    "name_zh": "德克萨斯",
    "pid": 140
  },
  {
    "id": 329,
    "name": "Ohio",
    "name_zh": "俄亥俄",
    "pid": 140
  },
  {
    "id": 330,
    "name": "Oklahoma",
    "name_zh": "俄克拉荷马",
    "pid": 140
  },
  {
    "id": 331,
    "name": "Oregon",
    "name_zh": "俄勒冈",
    "pid": 140
  },
  {
    "id": 332,
    "name": "Florida",
    "name_zh": "佛罗里达",
    "pid": 140
  },
  {
    "id": 333,
    "name": "Vermont",
    "name_zh": "佛蒙特",
    "pid": 140
  },
  {
    "id": 334,
    "name": "District of Columbia",
    "name_zh": "哥伦比亚特区",
    "pid": 140
  },
  {
    "id": 335,
    "name": "Washington",
    "name_zh": "华盛顿",
    "pid": 140
  },
  {
    "id": 336,
    "name": "Wyoming",
    "name_zh": "怀俄明",
    "pid": 140
  },
  {
    "id": 337,
    "name": "California",
    "name_zh": "加利福尼亚",
    "pid": 140
  },
  {
    "id": 338,
    "name": "Kansas",
    "name_zh": "堪萨斯",
    "pid": 140
  },
  {
    "id": 339,
    "name": "Connecticut",
    "name_zh": "康涅狄格",
    "pid": 140
  },
  {
    "id": 340,
    "name": "Colorado",
    "name_zh": "科罗拉多",
    "pid": 140
  },
  {
    "id": 341,
    "name": "Kentucky",
    "name_zh": "肯塔基",
    "pid": 140
  },
  {
    "id": 342,
    "name": "Louisiana",
    "name_zh": "路易斯安那",
    "pid": 140
  },
  {
    "id": 343,
    "name": "Rhode Island",
    "name_zh": "罗德岛",
    "pid": 140
  },
  {
    "id": 344,
    "name": "Maryland",
    "name_zh": "马里兰",
    "pid": 140
  },
  {
    "id": 345,
    "name": "Massachusetts",
    "name_zh": "马萨诸塞",
    "pid": 140
  },
  {
    "id": 346,
    "name": "Montana",
    "name_zh": "蒙大拿",
    "pid": 140
  },
  {
    "id": 347,
    "name": "Missouri",
    "name_zh": "密苏里",
    "pid": 140
  },
  {
    "id": 348,
    "name": "Mississippi",
    "name_zh": "密西西比",
    "pid": 140
  },
  {
    "id": 349,
    "name": "Michigan",
    "name_zh": "密歇根",
    "pid": 140
  },
  {
    "id": 350,
    "name": "Maine",
    "name_zh": "缅因",
    "pid": 140
  },
  {
    "id": 351,
    "name": "Minnesota",
    "name_zh": "明尼苏达",
    "pid": 140
  },
  {
    "id": 352,
    "name": "South Dakota",
    "name_zh": "南达科他",
    "pid": 140
  },
  {
    "id": 353,
    "name": "South Carolina",
    "name_zh": "南卡罗来纳",
    "pid": 140
  },
  {
    "id": 354,
    "name": "Nebraska",
    "name_zh": "内布拉斯加",
    "pid": 140
  },
  {
    "id": 355,
    "name": "Nevada",
    "name_zh": "内华达",
    "pid": 140
  },
  {
    "id": 356,
    "name": "New York",
    "name_zh": "纽约",
    "pid": 140
  },
  {
    "id": 357,
    "name": "Delaware",
    "name_zh": "特拉华",
    "pid": 140
  },
  {
    "id": 358,
    "name": "Tennessee",
    "name_zh": "田纳西",
    "pid": 140
  },
  {
    "id": 359,
    "name": "Wisconsin",
    "name_zh": "威斯康星",
    "pid": 140
  },
  {
    "id": 360,
    "name": "Virginia",
    "name_zh": "维吉尼亚",
    "pid": 140
  },
  {
    "id": 361,
    "name": "West Virginia",
    "name_zh": "西佛吉尼亚",
    "pid": 140
  },
  {
    "id": 362,
    "name": "Hawaii",
    "name_zh": "夏威夷",
    "pid": 140
  },
  {
    "id": 363,
    "name": "New Hampshire",
    "name_zh": "新罕布什尔",
    "pid": 140
  },
  {
    "id": 364,
    "name": "New Mexico",
    "name_zh": "新墨西哥",
    "pid": 140
  },
  {
    "id": 365,
    "name": "New Jersey",
    "name_zh": "新泽西",
    "pid": 140
  },
  {
    "id": 366,
    "name": "Arizona",
    "name_zh": "亚利桑那",
    "pid": 140
  },
  {
    "id": 367,
    "name": "Illinois",
    "name_zh": "伊利诺斯",
    "pid": 140
  },
  {
    "id": 368,
    "name": "Indiana",
    "name_zh": "印第安那",
    "pid": 140
  },
  {
    "id": 369,
    "name": "Utah",
    "name_zh": "犹他",
    "pid": 140
  },
  {
    "id": 370,
    "name": "Georgia",
    "name_zh": "佐治亚",
    "pid": 140
  },
  {
    "id": 371,
    "name": "Northern Ireland",
    "name_zh": "北爱尔兰",
    "pid": 237
  },
  {
    "id": 372,
    "name": "Scotland",
    "name_zh": "苏格兰",
    "pid": 237
  },
  {
    "id": 373,
    "name": "Wales",
    "name_zh": "威尔士",
    "pid": 237
  },
  {
    "id": 374,
    "name": "England",
    "name_zh": "英格兰",
    "pid": 237
  },
  {
    "id": 375,
    "name": "Elbasan",
    "name_zh": "爱尔巴桑",
    "pid": 8
  },
  {
    "id": 376,
    "name": "Diber",
    "name_zh": "迪勃拉",
    "pid": 8
  },
  {
    "id": 377,
    "name": "Tirane",
    "name_zh": "地拉那",
    "pid": 8
  },
  {
    "id": 378,
    "name": "Durres",
    "name_zh": "都拉斯",
    "pid": 8
  },
  {
    "id": 379,
    "name": "Vlore",
    "name_zh": "发罗拉",
    "pid": 8
  },
  {
    "id": 380,
    "name": "Fier",
    "name_zh": "费里",
    "pid": 8
  },
  {
    "id": 381,
    "name": "Gjirokaster",
    "name_zh": "吉诺卡斯特",
    "pid": 8
  },
  {
    "id": 382,
    "name": "Korce",
    "name_zh": "科尔察",
    "pid": 8
  },
  {
    "id": 383,
    "name": "Kukes",
    "name_zh": "库克斯",
    "pid": 8
  },
  {
    "id": 384,
    "name": "Lezhe",
    "name_zh": "莱什",
    "pid": 8
  },
  {
    "id": 385,
    "name": "Berat",
    "name_zh": "培拉特",
    "pid": 8
  },
  {
    "id": 386,
    "name": "Shkoder",
    "name_zh": "斯库台",
    "pid": 8
  },
  {
    "id": 387,
    "name": "Adrar",
    "name_zh": "阿德拉尔",
    "pid": 9
  },
  {
    "id": 388,
    "name": "Alger",
    "name_zh": "阿尔及尔",
    "pid": 9
  },
  {
    "id": 389,
    "name": "Ain Defla",
    "name_zh": "艾因·德夫拉",
    "pid": 9
  },
  {
    "id": 390,
    "name": "Ain Temouchent",
    "name_zh": "艾因·蒂姆尚特",
    "pid": 9
  },
  {
    "id": 391,
    "name": "Annaba",
    "name_zh": "安纳巴",
    "pid": 9
  },
  {
    "id": 392,
    "name": "Oran",
    "name_zh": "奥兰",
    "pid": 9
  },
  {
    "id": 393,
    "name": "Batna",
    "name_zh": "巴特纳",
    "pid": 9
  },
  {
    "id": 394,
    "name": "Bejaia",
    "name_zh": "贝贾亚",
    "pid": 9
  },
  {
    "id": 395,
    "name": "Bechar",
    "name_zh": "贝沙尔",
    "pid": 9
  },
  {
    "id": 396,
    "name": "El Bayadh",
    "name_zh": "贝伊德",
    "pid": 9
  },
  {
    "id": 397,
    "name": "Biskra",
    "name_zh": "比斯克拉",
    "pid": 9
  },
  {
    "id": 398,
    "name": "Bordj Bou Arreridj",
    "name_zh": "布尔吉·布阿雷里吉",
    "pid": 9
  },
  {
    "id": 399,
    "name": "Blida",
    "name_zh": "布利达",
    "pid": 9
  },
  {
    "id": 400,
    "name": "Boumerdes",
    "name_zh": "布迈德斯",
    "pid": 9
  },
  {
    "id": 401,
    "name": "Bouira",
    "name_zh": "布依拉",
    "pid": 9
  },
  {
    "id": 402,
    "name": "Tipaza",
    "name_zh": "蒂巴扎",
    "pid": 9
  },
  {
    "id": 403,
    "name": "Tissemsilt",
    "name_zh": "蒂斯姆西勒特",
    "pid": 9
  },
  {
    "id": 404,
    "name": "Ghardaia",
    "name_zh": "盖尔达耶",
    "pid": 9
  },
  {
    "id": 405,
    "name": "Guelma",
    "name_zh": "盖尔马",
    "pid": 9
  },
  {
    "id": 406,
    "name": "Khenchela",
    "name_zh": "罕西拉",
    "pid": 9
  },
  {
    "id": 407,
    "name": "Relizane",
    "name_zh": "赫利赞",
    "pid": 9
  },
  {
    "id": 408,
    "name": "Jijel",
    "name_zh": "吉杰尔",
    "pid": 9
  },
  {
    "id": 409,
    "name": "Djelfa",
    "name_zh": "杰勒法",
    "pid": 9
  },
  {
    "id": 410,
    "name": "Constantine",
    "name_zh": "君士坦丁",
    "pid": 9
  },
  {
    "id": 411,
    "name": "Laghouat",
    "name_zh": "拉格瓦特",
    "pid": 9
  },
  {
    "id": 412,
    "name": "Mascara",
    "name_zh": "马斯卡拉",
    "pid": 9
  },
  {
    "id": 413,
    "name": "Medea",
    "name_zh": "麦迪亚",
    "pid": 9
  },
  {
    "id": 414,
    "name": "Mila",
    "name_zh": "密拉",
    "pid": 9
  },
  {
    "id": 415,
    "name": "Mostaganem",
    "name_zh": "莫斯塔加纳姆",
    "pid": 9
  },
  {
    "id": 416,
    "name": "Msila",
    "name_zh": "姆西拉",
    "pid": 9
  },
  {
    "id": 417,
    "name": "Naama",
    "name_zh": "纳阿马",
    "pid": 9
  },
  {
    "id": 418,
    "name": "Setif",
    "name_zh": "塞蒂夫",
    "pid": 9
  },
  {
    "id": 419,
    "name": "Saida",
    "name_zh": "赛伊达",
    "pid": 9
  },
  {
    "id": 420,
    "name": "Skikda",
    "name_zh": "斯基克达",
    "pid": 9
  },
  {
    "id": 421,
    "name": "Souk Ahras",
    "name_zh": "苏克·阿赫拉斯",
    "pid": 9
  },
  {
    "id": 422,
    "name": "El Tarf",
    "name_zh": "塔里夫",
    "pid": 9
  },
  {
    "id": 423,
    "name": "Tamanghasset",
    "name_zh": "塔曼拉塞特",
    "pid": 9
  },
  {
    "id": 424,
    "name": "Tebessa",
    "name_zh": "特贝萨",
    "pid": 9
  },
  {
    "id": 425,
    "name": "Tlemcen",
    "name_zh": "特莱姆森",
    "pid": 9
  },
  {
    "id": 426,
    "name": "Tizi Ouzou",
    "name_zh": "提济乌祖",
    "pid": 9
  },
  {
    "id": 427,
    "name": "Tiaret",
    "name_zh": "提亚雷特",
    "pid": 9
  },
  {
    "id": 428,
    "name": "Tindouf",
    "name_zh": "廷杜夫",
    "pid": 9
  },
  {
    "id": 429,
    "name": "El Oued",
    "name_zh": "瓦德",
    "pid": 9
  },
  {
    "id": 430,
    "name": "Ouargla",
    "name_zh": "瓦尔格拉",
    "pid": 9
  },
  {
    "id": 431,
    "name": "Oum el Bouaghi",
    "name_zh": "乌姆布阿基",
    "pid": 9
  },
  {
    "id": 432,
    "name": "Sidi Bel Abbes",
    "name_zh": "西迪贝勒阿贝斯",
    "pid": 9
  },
  {
    "id": 433,
    "name": "Chlef",
    "name_zh": "谢里夫",
    "pid": 9
  },
  {
    "id": 434,
    "name": "Illizi",
    "name_zh": "伊利齐",
    "pid": 9
  },
  {
    "id": 435,
    "name": "Herat",
    "name_zh": "赫拉特",
    "pid": 10
  },
  {
    "id": 436,
    "name": "Kabul",
    "name_zh": "喀布尔",
    "pid": 10
  },
  {
    "id": 437,
    "name": "Kandahar",
    "name_zh": "坎大哈",
    "pid": 10
  },
  {
    "id": 438,
    "name": "Mazar-i Sharif",
    "name_zh": "马扎里沙里夫",
    "pid": 10
  },
  {
    "id": 439,
    "name": "Parana",
    "name_zh": "巴拉那",
    "pid": 11
  },
  {
    "id": 440,
    "name": "Viedma",
    "name_zh": "别德马",
    "pid": 11
  },
  {
    "id": 441,
    "name": "Posadas",
    "name_zh": "波萨达斯",
    "pid": 11
  },
  {
    "id": 442,
    "name": "Bahia Blanca",
    "name_zh": "布兰卡港",
    "pid": 11
  },
  {
    "id": 443,
    "name": "Buenos Aires",
    "name_zh": "布宜诺斯艾利斯",
    "pid": 11
  },
  {
    "id": 444,
    "name": "Formosa",
    "name_zh": "福莫萨",
    "pid": 11
  },
  {
    "id": 445,
    "name": "Jujuy",
    "name_zh": "胡胡伊",
    "pid": 11
  },
  {
    "id": 446,
    "name": "Catamarca",
    "name_zh": "卡塔马卡",
    "pid": 11
  },
  {
    "id": 447,
    "name": "Cordoba",
    "name_zh": "科尔多瓦",
    "pid": 11
  },
  {
    "id": 448,
    "name": "Corrientes",
    "name_zh": "科连特斯",
    "pid": 11
  },
  {
    "id": 449,
    "name": "Villa Krause",
    "name_zh": "克劳斯城",
    "pid": 11
  },
  {
    "id": 450,
    "name": "Concordia",
    "name_zh": "肯考迪娅",
    "pid": 11
  },
  {
    "id": 451,
    "name": "La Rioja",
    "name_zh": "拉里奥哈",
    "pid": 11
  },
  {
    "id": 452,
    "name": "La Plata",
    "name_zh": "拉普拉塔",
    "pid": 11
  },
  {
    "id": 453,
    "name": "Resistencia",
    "name_zh": "雷西斯滕匹亚",
    "pid": 11
  },
  {
    "id": 454,
    "name": "Rio Gallegos",
    "name_zh": "里奥加耶戈斯",
    "pid": 11
  },
  {
    "id": 455,
    "name": "Rio Cuarto",
    "name_zh": "里奥夸尔托",
    "pid": 11
  },
  {
    "id": 456,
    "name": "Comodoro Rivadavia",
    "name_zh": "里瓦达维亚海军准将城",
    "pid": 11
  },
  {
    "id": 457,
    "name": "Rosario",
    "name_zh": "罗萨里奥",
    "pid": 11
  },
  {
    "id": 458,
    "name": "Rawson",
    "name_zh": "罗森",
    "pid": 11
  },
  {
    "id": 459,
    "name": "Mar del Plata",
    "name_zh": "马德普拉塔",
    "pid": 11
  },
  {
    "id": 460,
    "name": "Mendoza",
    "name_zh": "门多萨",
    "pid": 11
  },
  {
    "id": 461,
    "name": "Neuquen",
    "name_zh": "内乌肯",
    "pid": 11
  },
  {
    "id": 462,
    "name": "Salta",
    "name_zh": "萨尔塔",
    "pid": 11
  },
  {
    "id": 463,
    "name": "Santiago del Estero",
    "name_zh": "圣地亚哥-德尔埃斯特罗",
    "pid": 11
  },
  {
    "id": 464,
    "name": "Santa Fe",
    "name_zh": "圣菲",
    "pid": 11
  },
  {
    "id": 465,
    "name": "San Juan",
    "name_zh": "圣胡安",
    "pid": 11
  },
  {
    "id": 466,
    "name": "San Rafael",
    "name_zh": "圣拉斐尔",
    "pid": 11
  },
  {
    "id": 467,
    "name": "San Luis",
    "name_zh": "圣路易斯",
    "pid": 11
  },
  {
    "id": 468,
    "name": "Santa Rosa",
    "name_zh": "圣罗莎",
    "pid": 11
  },
  {
    "id": 469,
    "name": "San Miguel de Tucuman",
    "name_zh": "圣米格尔-德图库曼",
    "pid": 11
  },
  {
    "id": 470,
    "name": "San Nicolas",
    "name_zh": "圣尼古拉斯",
    "pid": 11
  },
  {
    "id": 471,
    "name": "Trelew",
    "name_zh": "特雷利乌",
    "pid": 11
  },
  {
    "id": 472,
    "name": "Ushuaia",
    "name_zh": "乌斯怀亚",
    "pid": 11
  },
  {
    "id": 473,
    "name": "Abu Dhabi",
    "name_zh": "阿布扎比",
    "pid": 12
  },
  {
    "id": 474,
    "name": "Al l'Ayn",
    "name_zh": "艾因",
    "pid": 12
  },
  {
    "id": 475,
    "name": "Dubai",
    "name_zh": "迪拜",
    "pid": 12
  },
  {
    "id": 476,
    "name": "Ash Shariqah",
    "name_zh": "沙迦",
    "pid": 12
  },
  {
    "id": 477,
    "name": "Al-Batinah",
    "name_zh": "巴提奈地区",
    "pid": 14
  },
  {
    "id": 478,
    "name": "Az-Zahirah",
    "name_zh": "达希莱地区",
    "pid": 14
  },
  {
    "id": 479,
    "name": "Ash-Sharqiyah",
    "name_zh": "东部地区",
    "pid": 14
  },
  {
    "id": 480,
    "name": "Masqat",
    "name_zh": "马斯喀特省",
    "pid": 14
  },
  {
    "id": 481,
    "name": "Musandam",
    "name_zh": "穆桑达姆省",
    "pid": 14
  },
  {
    "id": 482,
    "name": "Ad-Dakhiliyah",
    "name_zh": "内地地区",
    "pid": 14
  },
  {
    "id": 483,
    "name": "Al-Wusta",
    "name_zh": "中部地区",
    "pid": 14
  },
  {
    "id": 484,
    "name": "Zufar",
    "name_zh": "佐法尔省",
    "pid": 14
  },
  {
    "id": 485,
    "name": "Abseron",
    "name_zh": "阿布歇隆",
    "pid": 15
  },
  {
    "id": 486,
    "name": "Xacmaz",
    "name_zh": "哈奇马斯",
    "pid": 15
  },
  {
    "id": 487,
    "name": "Kalbacar",
    "name_zh": "卡尔巴卡尔",
    "pid": 15
  },
  {
    "id": 488,
    "name": "Qazax",
    "name_zh": "卡扎赫",
    "pid": 15
  },
  {
    "id": 489,
    "name": "Lankaran",
    "name_zh": "连科兰",
    "pid": 15
  },
  {
    "id": 490,
    "name": "Mil-Qarabax",
    "name_zh": "密尔-卡拉巴赫",
    "pid": 15
  },
  {
    "id": 491,
    "name": "Mugan-Salyan",
    "name_zh": "穆甘-萨连",
    "pid": 15
  },
  {
    "id": 492,
    "name": "Nagorni-Qarabax",
    "name_zh": "纳戈尔诺－卡拉巴赫",
    "pid": 15
  },
  {
    "id": 493,
    "name": "Naxcivan",
    "name_zh": "纳希切万",
    "pid": 15
  },
  {
    "id": 494,
    "name": "Priaraks",
    "name_zh": "普利亚拉克斯",
    "pid": 15
  },
  {
    "id": 495,
    "name": "Saki",
    "name_zh": "舍基",
    "pid": 15
  },
  {
    "id": 496,
    "name": "Sumqayit",
    "name_zh": "苏姆盖特",
    "pid": 15
  },
  {
    "id": 497,
    "name": "Sirvan",
    "name_zh": "锡尔万",
    "pid": 15
  },
  {
    "id": 498,
    "name": "Ganca",
    "name_zh": "占贾",
    "pid": 15
  },
  {
    "id": 499,
    "name": "Aswan",
    "name_zh": "阿斯旺",
    "pid": 17
  },
  {
    "id": 500,
    "name": "Al Ghurdaqah",
    "name_zh": "古尔代盖",
    "pid": 17
  },
  {
    "id": 501,
    "name": "Cairo",
    "name_zh": "开罗",
    "pid": 17
  },
  {
    "id": 502,
    "name": "Shubra al Khaymah",
    "name_zh": "苏布拉开马",
    "pid": 17
  },
  {
    "id": 503,
    "name": "Alexandria",
    "name_zh": "亚历山大",
    "pid": 17
  },
  {
    "id": 504,
    "name": "Afar",
    "name_zh": "阿法尔",
    "pid": 18
  },
  {
    "id": 505,
    "name": "Amara",
    "name_zh": "阿姆哈拉",
    "pid": 18
  },
  {
    "id": 506,
    "name": "Oromiya",
    "name_zh": "奥罗米亚",
    "pid": 18
  },
  {
    "id": 507,
    "name": "Binshangul Gumuz",
    "name_zh": "宾香古尔",
    "pid": 18
  },
  {
    "id": 508,
    "name": "Dire Dawa",
    "name_zh": "德雷达瓦",
    "pid": 18
  },
  {
    "id": 509,
    "name": "Gambela Hizboch",
    "name_zh": "甘贝拉各族",
    "pid": 18
  },
  {
    "id": 510,
    "name": "Hareri  Hizb",
    "name_zh": "哈勒里民族",
    "pid": 18
  },
  {
    "id": 511,
    "name": "YeDebub Biheroch",
    "name_zh": "南方各族",
    "pid": 18
  },
  {
    "id": 512,
    "name": "Sumale",
    "name_zh": "索马里",
    "pid": 18
  },
  {
    "id": 513,
    "name": "Tigray",
    "name_zh": "提格雷",
    "pid": 18
  },
  {
    "id": 514,
    "name": "Adis abeba",
    "name_zh": "亚的斯亚贝巴",
    "pid": 18
  },
  {
    "id": 515,
    "name": "Offaly",
    "name_zh": "奥法利",
    "pid": 19
  },
  {
    "id": 516,
    "name": "Tipperary",
    "name_zh": "蒂珀雷里",
    "pid": 19
  },
  {
    "id": 517,
    "name": "Dublin",
    "name_zh": "都柏林",
    "pid": 19
  },
  {
    "id": 518,
    "name": "Donegal",
    "name_zh": "多内加尔",
    "pid": 19
  },
  {
    "id": 519,
    "name": "Galway",
    "name_zh": "戈尔韦",
    "pid": 19
  },
  {
    "id": 520,
    "name": "Kildare",
    "name_zh": "基尔代尔",
    "pid": 19
  },
  {
    "id": 521,
    "name": "Kilkenny",
    "name_zh": "基尔肯尼",
    "pid": 19
  },
  {
    "id": 522,
    "name": "Cavan",
    "name_zh": "卡范",
    "pid": 19
  },
  {
    "id": 523,
    "name": "Carlow",
    "name_zh": "卡洛",
    "pid": 19
  },
  {
    "id": 524,
    "name": "Kerry",
    "name_zh": "凯里",
    "pid": 19
  },
  {
    "id": 525,
    "name": "Cork",
    "name_zh": "科克",
    "pid": 19
  },
  {
    "id": 526,
    "name": "Clare",
    "name_zh": "克莱尔",
    "pid": 19
  },
  {
    "id": 527,
    "name": "Longford",
    "name_zh": "朗福德",
    "pid": 19
  },
  {
    "id": 528,
    "name": "Louth",
    "name_zh": "劳斯",
    "pid": 19
  },
  {
    "id": 529,
    "name": "Laois",
    "name_zh": "崂斯",
    "pid": 19
  },
  {
    "id": 530,
    "name": "Limerick",
    "name_zh": "利默里克",
    "pid": 19
  },
  {
    "id": 531,
    "name": "Leitrim",
    "name_zh": "利特里姆",
    "pid": 19
  },
  {
    "id": 532,
    "name": "Roscommon",
    "name_zh": "罗斯康芒",
    "pid": 19
  },
  {
    "id": 533,
    "name": "Mayo",
    "name_zh": "梅奥",
    "pid": 19
  },
  {
    "id": 534,
    "name": "Meath",
    "name_zh": "米斯",
    "pid": 19
  },
  {
    "id": 535,
    "name": "Monaghan",
    "name_zh": "莫内根",
    "pid": 19
  },
  {
    "id": 536,
    "name": "Sligo",
    "name_zh": "斯莱戈",
    "pid": 19
  },
  {
    "id": 537,
    "name": "Wicklow",
    "name_zh": "威克洛",
    "pid": 19
  },
  {
    "id": 538,
    "name": "Wexford",
    "name_zh": "韦克斯福德",
    "pid": 19
  },
  {
    "id": 539,
    "name": "Waterford",
    "name_zh": "沃特福德",
    "pid": 19
  },
  {
    "id": 540,
    "name": "Westmeath",
    "name_zh": "西米斯",
    "pid": 19
  },
  {
    "id": 541,
    "name": "Polva",
    "name_zh": "贝尔瓦",
    "pid": 20
  },
  {
    "id": 542,
    "name": "Harju",
    "name_zh": "哈留",
    "pid": 20
  },
  {
    "id": 543,
    "name": "Rapla",
    "name_zh": "拉普拉",
    "pid": 20
  },
  {
    "id": 544,
    "name": "Laane",
    "name_zh": "里亚内",
    "pid": 20
  },
  {
    "id": 545,
    "name": "Parnu",
    "name_zh": "帕尔努",
    "pid": 20
  },
  {
    "id": 546,
    "name": "Saare",
    "name_zh": "萨雷",
    "pid": 20
  },
  {
    "id": 547,
    "name": "Tartu",
    "name_zh": "塔尔图",
    "pid": 20
  },
  {
    "id": 548,
    "name": "Valga",
    "name_zh": "瓦尔加",
    "pid": 20
  },
  {
    "id": 549,
    "name": "Viljandi",
    "name_zh": "维良地",
    "pid": 20
  },
  {
    "id": 550,
    "name": "Laane-Viru",
    "name_zh": "维鲁",
    "pid": 20
  },
  {
    "id": 551,
    "name": "Voru",
    "name_zh": "沃鲁",
    "pid": 20
  },
  {
    "id": 552,
    "name": "Hiiu",
    "name_zh": "希尤",
    "pid": 20
  },
  {
    "id": 553,
    "name": "Jarva",
    "name_zh": "耶尔韦",
    "pid": 20
  },
  {
    "id": 554,
    "name": "Jogeva",
    "name_zh": "耶盖瓦",
    "pid": 20
  },
  {
    "id": 555,
    "name": "Ida-Viru",
    "name_zh": "依达－维鲁",
    "pid": 20
  },
  {
    "id": 556,
    "name": "Andorra la Vella",
    "name_zh": "安道尔城",
    "pid": 21
  },
  {
    "id": 557,
    "name": "Ordino",
    "name_zh": "奥尔迪诺",
    "pid": 21
  },
  {
    "id": 558,
    "name": "Encamp",
    "name_zh": "恩坎普",
    "pid": 21
  },
  {
    "id": 559,
    "name": "Canillo",
    "name_zh": "卡尼略",
    "pid": 21
  },
  {
    "id": 560,
    "name": "Escaldes-Engordany",
    "name_zh": "莱塞斯卡尔德－恩戈尔达",
    "pid": 21
  },
  {
    "id": 561,
    "name": "La Massana",
    "name_zh": "马萨纳",
    "pid": 21
  },
  {
    "id": 562,
    "name": "Sant Julia de Laria",
    "name_zh": "圣胡利娅－德洛里亚",
    "pid": 21
  },
  {
    "id": 563,
    "name": "Cuanza Norte",
    "name_zh": "北宽扎",
    "pid": 22
  },
  {
    "id": 564,
    "name": "Lunda Norte",
    "name_zh": "北隆达",
    "pid": 22
  },
  {
    "id": 565,
    "name": "Bengo",
    "name_zh": "本戈",
    "pid": 22
  },
  {
    "id": 566,
    "name": "Benguela",
    "name_zh": "本格拉",
    "pid": 22
  },
  {
    "id": 567,
    "name": "Bie",
    "name_zh": "比耶",
    "pid": 22
  },
  {
    "id": 568,
    "name": "Cabinda",
    "name_zh": "卡宾达",
    "pid": 22
  },
  {
    "id": 569,
    "name": "Cunene",
    "name_zh": "库内内",
    "pid": 22
  },
  {
    "id": 570,
    "name": "Cuando Cubango",
    "name_zh": "宽多库邦戈",
    "pid": 22
  },
  {
    "id": 571,
    "name": "Luanda",
    "name_zh": "罗安达",
    "pid": 22
  },
  {
    "id": 572,
    "name": "Malanje",
    "name_zh": "马兰热",
    "pid": 22
  },
  {
    "id": 573,
    "name": "Moxico",
    "name_zh": "莫希科",
    "pid": 22
  },
  {
    "id": 574,
    "name": "Namibe",
    "name_zh": "纳米贝",
    "pid": 22
  },
  {
    "id": 575,
    "name": "Cuanza Sul",
    "name_zh": "南宽扎",
    "pid": 22
  },
  {
    "id": 576,
    "name": "Lunda Sul",
    "name_zh": "南隆达",
    "pid": 22
  },
  {
    "id": 577,
    "name": "Huambo",
    "name_zh": "万博",
    "pid": 22
  },
  {
    "id": 578,
    "name": "Huila",
    "name_zh": "威拉",
    "pid": 22
  },
  {
    "id": 579,
    "name": "Uige",
    "name_zh": "威热",
    "pid": 22
  },
  {
    "id": 580,
    "name": "Zaire",
    "name_zh": "扎伊尔",
    "pid": 22
  },
  {
    "id": 581,
    "name": "Burgenland",
    "name_zh": "布尔根兰",
    "pid": 26
  },
  {
    "id": 582,
    "name": "Tyrol",
    "name_zh": "蒂罗尔",
    "pid": 26
  },
  {
    "id": 583,
    "name": "Vorarlberg",
    "name_zh": "福拉尔贝格",
    "pid": 26
  },
  {
    "id": 584,
    "name": "Carinthia",
    "name_zh": "克恩顿",
    "pid": 26
  },
  {
    "id": 585,
    "name": "Salzburg",
    "name_zh": "萨尔茨堡",
    "pid": 26
  },
  {
    "id": 586,
    "name": "Upper Austria",
    "name_zh": "上奥地利",
    "pid": 26
  },
  {
    "id": 587,
    "name": "Styria",
    "name_zh": "施蒂利亚",
    "pid": 26
  },
  {
    "id": 588,
    "name": "Vienna",
    "name_zh": "维也纳",
    "pid": 26
  },
  {
    "id": 589,
    "name": "Lower Austria",
    "name_zh": "下奥地利",
    "pid": 26
  },
  {
    "id": 590,
    "name": "Northern",
    "name_zh": "北部",
    "pid": 29
  },
  {
    "id": 591,
    "name": "Bougainville",
    "name_zh": "布干维尔",
    "pid": 29
  },
  {
    "id": 592,
    "name": "Eastern Highlands",
    "name_zh": "东部高地",
    "pid": 29
  },
  {
    "id": 593,
    "name": "East Sepik",
    "name_zh": "东塞皮克",
    "pid": 29
  },
  {
    "id": 594,
    "name": "East New Britain",
    "name_zh": "东新不列颠",
    "pid": 29
  },
  {
    "id": 595,
    "name": "Enga",
    "name_zh": "恩加",
    "pid": 29
  },
  {
    "id": 596,
    "name": "Gulf",
    "name_zh": "海湾",
    "pid": 29
  },
  {
    "id": 597,
    "name": "Madang",
    "name_zh": "马当",
    "pid": 29
  },
  {
    "id": 598,
    "name": "Manus",
    "name_zh": "马努斯",
    "pid": 29
  },
  {
    "id": 599,
    "name": "Milne Bay",
    "name_zh": "米尔恩湾",
    "pid": 29
  },
  {
    "id": 600,
    "name": "Port Moresby",
    "name_zh": "莫尔兹比港",
    "pid": 29
  },
  {
    "id": 601,
    "name": "Morobe",
    "name_zh": "莫罗贝",
    "pid": 29
  },
  {
    "id": 602,
    "name": "Southern Highlands",
    "name_zh": "南部高地",
    "pid": 29
  },
  {
    "id": 603,
    "name": "Simbu",
    "name_zh": "钦布",
    "pid": 29
  },
  {
    "id": 604,
    "name": "Sandaun",
    "name_zh": "桑道恩",
    "pid": 29
  },
  {
    "id": 605,
    "name": "Western",
    "name_zh": "西部",
    "pid": 29
  },
  {
    "id": 606,
    "name": "Western Highlands",
    "name_zh": "西部高地",
    "pid": 29
  },
  {
    "id": 607,
    "name": "West New Britain",
    "name_zh": "西新不列颠",
    "pid": 29
  },
  {
    "id": 608,
    "name": "New Ireland",
    "name_zh": "新爱尔兰",
    "pid": 29
  },
  {
    "id": 609,
    "name": "Peshawar",
    "name_zh": "白沙瓦",
    "pid": 31
  },
  {
    "id": 610,
    "name": "Faisalabad",
    "name_zh": "费萨拉巴德",
    "pid": 31
  },
  {
    "id": 611,
    "name": "Gujranwala",
    "name_zh": "故吉软瓦拉",
    "pid": 31
  },
  {
    "id": 612,
    "name": "Hyderabad",
    "name_zh": "海德拉巴",
    "pid": 31
  },
  {
    "id": 613,
    "name": "Karachi",
    "name_zh": "卡拉奇",
    "pid": 31
  },
  {
    "id": 614,
    "name": "Lahore",
    "name_zh": "拉合尔",
    "pid": 31
  },
  {
    "id": 615,
    "name": "Rawalpindi",
    "name_zh": "拉瓦尔品第",
    "pid": 31
  },
  {
    "id": 616,
    "name": "Multan",
    "name_zh": "木尔坦",
    "pid": 31
  },
  {
    "id": 617,
    "name": "Islamabad",
    "name_zh": "伊斯兰堡",
    "pid": 31
  },
  {
    "id": 618,
    "name": "Amambay",
    "name_zh": "阿曼拜",
    "pid": 32
  },
  {
    "id": 619,
    "name": "Presidente Hayes",
    "name_zh": "阿耶斯总统省",
    "pid": 32
  },
  {
    "id": 620,
    "name": "Paraguari",
    "name_zh": "巴拉瓜里",
    "pid": 32
  },
  {
    "id": 621,
    "name": "Boqueron",
    "name_zh": "博克龙",
    "pid": 32
  },
  {
    "id": 622,
    "name": "Guaira",
    "name_zh": "瓜伊拉",
    "pid": 32
  },
  {
    "id": 623,
    "name": "Caaguazu",
    "name_zh": "卡瓜苏",
    "pid": 32
  },
  {
    "id": 624,
    "name": "Canindeyu",
    "name_zh": "卡嫩迪尤",
    "pid": 32
  },
  {
    "id": 625,
    "name": "Caazapa",
    "name_zh": "卡萨帕",
    "pid": 32
  },
  {
    "id": 626,
    "name": "Concepcion",
    "name_zh": "康塞普西翁",
    "pid": 32
  },
  {
    "id": 627,
    "name": "Cordillera",
    "name_zh": "科迪勒拉",
    "pid": 32
  },
  {
    "id": 628,
    "name": "Misiones",
    "name_zh": "米西奥内斯",
    "pid": 32
  },
  {
    "id": 629,
    "name": "Neembucu",
    "name_zh": "涅恩布库",
    "pid": 32
  },
  {
    "id": 630,
    "name": "Alto Paraguay",
    "name_zh": "上巴拉圭",
    "pid": 32
  },
  {
    "id": 631,
    "name": "Alto Parana",
    "name_zh": "上巴拉那",
    "pid": 32
  },
  {
    "id": 632,
    "name": "San Pedro",
    "name_zh": "圣佩德罗",
    "pid": 32
  },
  {
    "id": 633,
    "name": "Asuncion",
    "name_zh": "亚松森特别区",
    "pid": 32
  },
  {
    "id": 634,
    "name": "Itapua",
    "name_zh": "伊塔普亚",
    "pid": 32
  },
  {
    "id": 635,
    "name": "Central",
    "name_zh": "中央",
    "pid": 32
  },
  {
    "id": 636,
    "name": "Gaza Strip",
    "name_zh": "加沙地带",
    "pid": 33
  },
  {
    "id": 637,
    "name": "West Bank",
    "name_zh": "西岸",
    "pid": 33
  },
  {
    "id": 638,
    "name": "Ash-Shamaliyah",
    "name_zh": "北部",
    "pid": 34
  },
  {
    "id": 639,
    "name": "Al-Hadd",
    "name_zh": "哈德",
    "pid": 34
  },
  {
    "id": 640,
    "name": "Hammad",
    "name_zh": "哈马德",
    "pid": 34
  },
  {
    "id": 641,
    "name": "Ar-Rifa",
    "name_zh": "里法",
    "pid": 34
  },
  {
    "id": 642,
    "name": "Al-Manamah",
    "name_zh": "麦纳麦",
    "pid": 34
  },
  {
    "id": 643,
    "name": "Al-Muharraq",
    "name_zh": "穆哈拉格",
    "pid": 34
  },
  {
    "id": 644,
    "name": "Al-Gharbiyah",
    "name_zh": "西部",
    "pid": 34
  },
  {
    "id": 645,
    "name": "Isa",
    "name_zh": "伊萨城",
    "pid": 34
  },
  {
    "id": 646,
    "name": "Al-Wusta",
    "name_zh": "中部",
    "pid": 34
  },
  {
    "id": 647,
    "name": "Acre",
    "name_zh": "阿克里",
    "pid": 36
  },
  {
    "id": 648,
    "name": "Alagoas",
    "name_zh": "阿拉戈斯",
    "pid": 36
  },
  {
    "id": 649,
    "name": "Amapa",
    "name_zh": "阿马帕",
    "pid": 36
  },
  {
    "id": 650,
    "name": "Parana",
    "name_zh": "巴拉那",
    "pid": 36
  },
  {
    "id": 651,
    "name": "Brasilia",
    "name_zh": "巴西利亚",
    "pid": 36
  },
  {
    "id": 652,
    "name": "Bahia",
    "name_zh": "巴伊亚",
    "pid": 36
  },
  {
    "id": 653,
    "name": "Rio Grande do Norte",
    "name_zh": "北里奥格兰德",
    "pid": 36
  },
  {
    "id": 654,
    "name": "Pernambuco",
    "name_zh": "伯南布哥",
    "pid": 36
  },
  {
    "id": 655,
    "name": "Goias",
    "name_zh": "戈亚斯",
    "pid": 36
  },
  {
    "id": 656,
    "name": "Rondonia",
    "name_zh": "朗多尼亚",
    "pid": 36
  },
  {
    "id": 657,
    "name": "Rio de Janeiro",
    "name_zh": "里约热内卢",
    "pid": 36
  },
  {
    "id": 658,
    "name": "Roraima",
    "name_zh": "罗赖马",
    "pid": 36
  },
  {
    "id": 659,
    "name": "Maranhao",
    "name_zh": "马拉尼昂",
    "pid": 36
  },
  {
    "id": 660,
    "name": "Mato Grosso",
    "name_zh": "马托格罗索",
    "pid": 36
  },
  {
    "id": 661,
    "name": "Minas Gerais",
    "name_zh": "米纳斯吉拉斯",
    "pid": 36
  },
  {
    "id": 662,
    "name": "Rio Grande do Sul",
    "name_zh": "南里奥格兰德",
    "pid": 36
  },
  {
    "id": 663,
    "name": "Mato Grosso do Sul",
    "name_zh": "南马托格罗索",
    "pid": 36
  },
  {
    "id": 664,
    "name": "Para",
    "name_zh": "帕拉",
    "pid": 36
  },
  {
    "id": 665,
    "name": "Paraiba",
    "name_zh": "帕拉伊巴",
    "pid": 36
  },
  {
    "id": 666,
    "name": "Piaui",
    "name_zh": "皮奥伊",
    "pid": 36
  },
  {
    "id": 667,
    "name": "Ceara",
    "name_zh": "塞阿拉",
    "pid": 36
  },
  {
    "id": 668,
    "name": "Sergipe",
    "name_zh": "塞尔希培",
    "pid": 36
  },
  {
    "id": 669,
    "name": "Espirito Santo",
    "name_zh": "圣埃斯皮里图",
    "pid": 36
  },
  {
    "id": 670,
    "name": "Sao Paulo",
    "name_zh": "圣保罗",
    "pid": 36
  },
  {
    "id": 671,
    "name": "Santa Catarina",
    "name_zh": "圣卡塔琳娜",
    "pid": 36
  },
  {
    "id": 672,
    "name": "Tocantins",
    "name_zh": "托坎廷斯",
    "pid": 36
  },
  {
    "id": 673,
    "name": "Amazonas",
    "name_zh": "亚马孙",
    "pid": 36
  },
  {
    "id": 674,
    "name": "Bresckaja",
    "name_zh": "布列斯特",
    "pid": 37
  },
  {
    "id": 675,
    "name": "Homelskaja",
    "name_zh": "戈梅利",
    "pid": 37
  },
  {
    "id": 676,
    "name": "Hrodzenskaja",
    "name_zh": "格罗德诺",
    "pid": 37
  },
  {
    "id": 677,
    "name": "Minsk",
    "name_zh": "明斯克市",
    "pid": 37
  },
  {
    "id": 678,
    "name": "Mahileuskaja",
    "name_zh": "莫吉廖夫",
    "pid": 37
  },
  {
    "id": 679,
    "name": "Vicebskaja",
    "name_zh": "维捷布斯克",
    "pid": 37
  },
  {
    "id": 680,
    "name": "Burgas",
    "name_zh": "布尔加斯",
    "pid": 39
  },
  {
    "id": 681,
    "name": "Khaskovo",
    "name_zh": "卡斯科伏",
    "pid": 39
  },
  {
    "id": 682,
    "name": "Ruse",
    "name_zh": "鲁塞",
    "pid": 39
  },
  {
    "id": 683,
    "name": "Lovech",
    "name_zh": "洛维奇",
    "pid": 39
  },
  {
    "id": 684,
    "name": "Montana",
    "name_zh": "蒙塔纳",
    "pid": 39
  },
  {
    "id": 685,
    "name": "Plovdiv",
    "name_zh": "普罗夫迪夫",
    "pid": 39
  },
  {
    "id": 686,
    "name": "Sofiya",
    "name_zh": "索非亚",
    "pid": 39
  },
  {
    "id": 687,
    "name": "Grad Sofiya",
    "name_zh": "索非亚市",
    "pid": 39
  },
  {
    "id": 688,
    "name": "Varna",
    "name_zh": "瓦尔纳",
    "pid": 39
  },
  {
    "id": 689,
    "name": "Alibori",
    "name_zh": "阿黎博里",
    "pid": 41
  },
  {
    "id": 690,
    "name": "Atakora",
    "name_zh": "阿塔科拉",
    "pid": 41
  },
  {
    "id": 691,
    "name": "Littoral",
    "name_zh": "滨海",
    "pid": 41
  },
  {
    "id": 692,
    "name": "Bohicon",
    "name_zh": "波希康市",
    "pid": 41
  },
  {
    "id": 693,
    "name": "Borgou",
    "name_zh": "博尔古",
    "pid": 41
  },
  {
    "id": 694,
    "name": "Atlantique",
    "name_zh": "大西洋",
    "pid": 41
  },
  {
    "id": 695,
    "name": "Plateau",
    "name_zh": "高原",
    "pid": 41
  },
  {
    "id": 696,
    "name": "Kouffo",
    "name_zh": "库福",
    "pid": 41
  },
  {
    "id": 697,
    "name": "Mono",
    "name_zh": "莫诺",
    "pid": 41
  },
  {
    "id": 698,
    "name": "Collines",
    "name_zh": "丘陵",
    "pid": 41
  },
  {
    "id": 699,
    "name": "Oueme",
    "name_zh": "韦梅",
    "pid": 41
  },
  {
    "id": 700,
    "name": "Donga",
    "name_zh": "峡谷",
    "pid": 41
  },
  {
    "id": 701,
    "name": "Zou",
    "name_zh": "祖",
    "pid": 41
  },
  {
    "id": 702,
    "name": "Hainaut",
    "name_zh": "埃诺",
    "pid": 42
  },
  {
    "id": 703,
    "name": "Antwerpen",
    "name_zh": "安特卫普",
    "pid": 42
  },
  {
    "id": 704,
    "name": "Brabant-Wallone",
    "name_zh": "布拉班特-瓦隆",
    "pid": 42
  },
  {
    "id": 705,
    "name": "Brussels",
    "name_zh": "布鲁塞尔",
    "pid": 42
  },
  {
    "id": 706,
    "name": "Oost-Vlaanderen",
    "name_zh": "东佛兰德",
    "pid": 42
  },
  {
    "id": 707,
    "name": "Vlaams-Brabant",
    "name_zh": "佛兰芒-布拉班特",
    "pid": 42
  },
  {
    "id": 708,
    "name": "Liege",
    "name_zh": "列日",
    "pid": 42
  },
  {
    "id": 709,
    "name": "Limburg",
    "name_zh": "林堡",
    "pid": 42
  },
  {
    "id": 710,
    "name": "Luxembourg",
    "name_zh": "卢森堡",
    "pid": 42
  },
  {
    "id": 711,
    "name": "Namur",
    "name_zh": "那慕尔",
    "pid": 42
  },
  {
    "id": 712,
    "name": "West-Vlaanderen",
    "name_zh": "西佛兰德",
    "pid": 42
  },
  {
    "id": 713,
    "name": "Elbląg",
    "name_zh": "埃尔布隆格",
    "pid": 45
  },
  {
    "id": 714,
    "name": "Olsztyn",
    "name_zh": "奥尔什丁",
    "pid": 45
  },
  {
    "id": 715,
    "name": "Ostrołeka",
    "name_zh": "奥斯特罗文卡",
    "pid": 45
  },
  {
    "id": 716,
    "name": "Bydgoszcz",
    "name_zh": "比得哥什",
    "pid": 45
  },
  {
    "id": 717,
    "name": "Piotrkow",
    "name_zh": "彼得库夫",
    "pid": 45
  },
  {
    "id": 718,
    "name": "Bytom",
    "name_zh": "比托姆",
    "pid": 45
  },
  {
    "id": 719,
    "name": "Biała Podlaska",
    "name_zh": "比亚瓦波德拉斯卡",
    "pid": 45
  },
  {
    "id": 720,
    "name": "Białystok",
    "name_zh": "比亚维斯托克",
    "pid": 45
  },
  {
    "id": 721,
    "name": "Opole",
    "name_zh": "波莱",
    "pid": 45
  },
  {
    "id": 722,
    "name": "Poznan",
    "name_zh": "波兹南",
    "pid": 45
  },
  {
    "id": 723,
    "name": "Dabrowa Gornicza",
    "name_zh": "达布罗瓦戈尼察",
    "pid": 45
  },
  {
    "id": 724,
    "name": "Gorzow Wlkp",
    "name_zh": "大波兰地区戈茹夫",
    "pid": 45
  },
  {
    "id": 725,
    "name": "Wroclaw",
    "name_zh": "弗罗茨瓦夫",
    "pid": 45
  },
  {
    "id": 726,
    "name": "Wlocławek",
    "name_zh": "弗沃茨瓦韦克",
    "pid": 45
  },
  {
    "id": 727,
    "name": "Gdansk",
    "name_zh": "格但斯克",
    "pid": 45
  },
  {
    "id": 728,
    "name": "Gdynia",
    "name_zh": "格丁尼亚",
    "pid": 45
  },
  {
    "id": 729,
    "name": "Gliwice",
    "name_zh": "格利维采",
    "pid": 45
  },
  {
    "id": 730,
    "name": "Grudziadz",
    "name_zh": "格鲁琼兹",
    "pid": 45
  },
  {
    "id": 731,
    "name": "Chełm",
    "name_zh": "海乌姆",
    "pid": 45
  },
  {
    "id": 732,
    "name": "Warszawa",
    "name_zh": "华沙",
    "pid": 45
  },
  {
    "id": 733,
    "name": "Chorzow",
    "name_zh": "霍茹夫",
    "pid": 45
  },
  {
    "id": 734,
    "name": "Kalisz",
    "name_zh": "卡利什",
    "pid": 45
  },
  {
    "id": 735,
    "name": "Katowice",
    "name_zh": "卡托维兹",
    "pid": 45
  },
  {
    "id": 736,
    "name": "Kielce",
    "name_zh": "凯尔采",
    "pid": 45
  },
  {
    "id": 737,
    "name": "Konin",
    "name_zh": "科宁",
    "pid": 45
  },
  {
    "id": 738,
    "name": "Koszalin",
    "name_zh": "科沙林",
    "pid": 45
  },
  {
    "id": 739,
    "name": "Krakow",
    "name_zh": "克拉科夫",
    "pid": 45
  },
  {
    "id": 740,
    "name": "Krosno",
    "name_zh": "克罗斯诺",
    "pid": 45
  },
  {
    "id": 741,
    "name": "Radom",
    "name_zh": "拉多姆",
    "pid": 45
  },
  {
    "id": 742,
    "name": "Legnica",
    "name_zh": "莱格尼察",
    "pid": 45
  },
  {
    "id": 743,
    "name": "Leszno",
    "name_zh": "莱什诺",
    "pid": 45
  },
  {
    "id": 744,
    "name": "Lublin",
    "name_zh": "卢布林",
    "pid": 45
  },
  {
    "id": 745,
    "name": "Ruda Sl",
    "name_zh": "鲁达",
    "pid": 45
  },
  {
    "id": 746,
    "name": "Lodz",
    "name_zh": "罗兹",
    "pid": 45
  },
  {
    "id": 747,
    "name": "Zielona Gora",
    "name_zh": "绿山城",
    "pid": 45
  },
  {
    "id": 748,
    "name": "Mysłowice",
    "name_zh": "米什洛维采",
    "pid": 45
  },
  {
    "id": 749,
    "name": "Piła",
    "name_zh": "皮瓦",
    "pid": 45
  },
  {
    "id": 750,
    "name": "Przemysl",
    "name_zh": "普热梅希尔",
    "pid": 45
  },
  {
    "id": 751,
    "name": "Plock",
    "name_zh": "普沃茨克",
    "pid": 45
  },
  {
    "id": 752,
    "name": "Ciechanow",
    "name_zh": "切哈努夫",
    "pid": 45
  },
  {
    "id": 753,
    "name": "Rzeszow",
    "name_zh": "热舒夫",
    "pid": 45
  },
  {
    "id": 754,
    "name": "Szczecin",
    "name_zh": "什切青",
    "pid": 45
  },
  {
    "id": 755,
    "name": "Skierniewice",
    "name_zh": "斯凯尔涅维采",
    "pid": 45
  },
  {
    "id": 756,
    "name": "Slupsk",
    "name_zh": "斯武普斯克",
    "pid": 45
  },
  {
    "id": 757,
    "name": "Suwałki",
    "name_zh": "苏瓦乌基",
    "pid": 45
  },
  {
    "id": 758,
    "name": "Sopot",
    "name_zh": "索波特",
    "pid": 45
  },
  {
    "id": 759,
    "name": "Sosnowiec",
    "name_zh": "索斯诺维茨",
    "pid": 45
  },
  {
    "id": 760,
    "name": "Tarnow",
    "name_zh": "塔尔努夫",
    "pid": 45
  },
  {
    "id": 761,
    "name": "Tarnobrzeg",
    "name_zh": "塔尔诺布热格",
    "pid": 45
  },
  {
    "id": 762,
    "name": "Tychy",
    "name_zh": "特切",
    "pid": 45
  },
  {
    "id": 763,
    "name": "Torun",
    "name_zh": "托伦",
    "pid": 45
  },
  {
    "id": 764,
    "name": "Walbrzych",
    "name_zh": "瓦乌布日赫",
    "pid": 45
  },
  {
    "id": 765,
    "name": "Lomza",
    "name_zh": "沃姆扎",
    "pid": 45
  },
  {
    "id": 766,
    "name": "Siemianowice Sl",
    "name_zh": "希米亚诺维采",
    "pid": 45
  },
  {
    "id": 767,
    "name": "Swinoujscie",
    "name_zh": "希维诺乌伊希切",
    "pid": 45
  },
  {
    "id": 768,
    "name": "Swietochłowice",
    "name_zh": "希维托赫洛维采",
    "pid": 45
  },
  {
    "id": 769,
    "name": "Siedlce",
    "name_zh": "谢德尔采",
    "pid": 45
  },
  {
    "id": 770,
    "name": "Sieradz",
    "name_zh": "谢拉兹",
    "pid": 45
  },
  {
    "id": 771,
    "name": "Nowy Sacz",
    "name_zh": "新松奇",
    "pid": 45
  },
  {
    "id": 772,
    "name": "Jaworzno",
    "name_zh": "雅沃兹诺",
    "pid": 45
  },
  {
    "id": 773,
    "name": "Jelenia Gora",
    "name_zh": "耶莱尼亚古拉",
    "pid": 45
  },
  {
    "id": 774,
    "name": "Zabrze",
    "name_zh": "扎布热",
    "pid": 45
  },
  {
    "id": 775,
    "name": "Zamosc",
    "name_zh": "扎莫希奇",
    "pid": 45
  },
  {
    "id": 776,
    "name": "El Alto",
    "name_zh": "奥尔托",
    "pid": 46
  },
  {
    "id": 777,
    "name": "Oruro",
    "name_zh": "奥鲁罗",
    "pid": 46
  },
  {
    "id": 778,
    "name": "El Beni",
    "name_zh": "贝尼",
    "pid": 46
  },
  {
    "id": 779,
    "name": "Potosi",
    "name_zh": "波多西",
    "pid": 46
  },
  {
    "id": 780,
    "name": "Quillacollo",
    "name_zh": "基拉科洛",
    "pid": 46
  },
  {
    "id": 781,
    "name": "Cochabamba",
    "name_zh": "科恰班巴",
    "pid": 46
  },
  {
    "id": 782,
    "name": "La Paz",
    "name_zh": "拉巴斯",
    "pid": 46
  },
  {
    "id": 783,
    "name": "Pando",
    "name_zh": "潘多",
    "pid": 46
  },
  {
    "id": 784,
    "name": "Chuquisaca",
    "name_zh": "丘基萨卡",
    "pid": 46
  },
  {
    "id": 785,
    "name": "Sacaba",
    "name_zh": "萨卡巴",
    "pid": 46
  },
  {
    "id": 786,
    "name": "Santa Cruz",
    "name_zh": "圣克鲁斯",
    "pid": 46
  },
  {
    "id": 787,
    "name": "Tarija",
    "name_zh": "塔里哈",
    "pid": 46
  },
  {
    "id": 788,
    "name": "Posavski",
    "name_zh": "波萨维纳",
    "pid": 47
  },
  {
    "id": 789,
    "name": "Bosansko-Podrinjski",
    "name_zh": "波斯尼亚－波德里涅",
    "pid": 47
  },
  {
    "id": 790,
    "name": "Tomislavgrad",
    "name_zh": "多米斯拉夫格勒",
    "pid": 47
  },
  {
    "id": 791,
    "name": "Hercegovacko-Neretvanski",
    "name_zh": "黑塞哥维那－涅雷特瓦",
    "pid": 47
  },
  {
    "id": 792,
    "name": "Sarajevo",
    "name_zh": "萨拉热窝",
    "pid": 47
  },
  {
    "id": 793,
    "name": "Tuzlanski-Podrinjski",
    "name_zh": "图兹拉－波德里涅",
    "pid": 47
  },
  {
    "id": 794,
    "name": "Unsko-Sanski",
    "name_zh": "乌纳－萨纳",
    "pid": 47
  },
  {
    "id": 795,
    "name": "Hercegovacko-Bosanski",
    "name_zh": "西波斯尼亚",
    "pid": 47
  },
  {
    "id": 796,
    "name": "Zapadno-Hercegovaki",
    "name_zh": "西黑塞哥维那",
    "pid": 47
  },
  {
    "id": 797,
    "name": "Zenicko-Dobojski",
    "name_zh": "泽尼察－多博伊",
    "pid": 47
  },
  {
    "id": 798,
    "name": "Srednjo-Bosanski",
    "name_zh": "中波斯尼亚",
    "pid": 47
  },
  {
    "id": 799,
    "name": "Belize",
    "name_zh": "伯利兹",
    "pid": 49
  },
  {
    "id": 800,
    "name": "Orange Walk",
    "name_zh": "橘园",
    "pid": 49
  },
  {
    "id": 801,
    "name": "Cayo",
    "name_zh": "卡约",
    "pid": 49
  },
  {
    "id": 802,
    "name": "Corozal",
    "name_zh": "科罗萨尔",
    "pid": 49
  },
  {
    "id": 803,
    "name": "Stann Creek",
    "name_zh": "斯坦港",
    "pid": 49
  },
  {
    "id": 804,
    "name": "Toledo",
    "name_zh": "托莱多",
    "pid": 49
  },
  {
    "id": 805,
    "name": "Bale",
    "name_zh": "巴雷",
    "pid": 51
  },
  {
    "id": 806,
    "name": "Bam",
    "name_zh": "巴姆",
    "pid": 51
  },
  {
    "id": 807,
    "name": "Banwa",
    "name_zh": "巴瓦",
    "pid": 51
  },
  {
    "id": 808,
    "name": "Bazega",
    "name_zh": "巴泽加",
    "pid": 51
  },
  {
    "id": 809,
    "name": "Poni",
    "name_zh": "波尼",
    "pid": 51
  },
  {
    "id": 810,
    "name": "Boulgou",
    "name_zh": "布尔古",
    "pid": 51
  },
  {
    "id": 811,
    "name": "Boulkiemde",
    "name_zh": "布尔基恩德",
    "pid": 51
  },
  {
    "id": 812,
    "name": "Bougouriba",
    "name_zh": "布古里巴",
    "pid": 51
  },
  {
    "id": 813,
    "name": "Ganzourgou",
    "name_zh": "冈祖尔古",
    "pid": 51
  },
  {
    "id": 814,
    "name": "Gourma",
    "name_zh": "古尔马",
    "pid": 51
  },
  {
    "id": 815,
    "name": "Ziro",
    "name_zh": "济罗",
    "pid": 51
  },
  {
    "id": 816,
    "name": "Kadiogo",
    "name_zh": "卡焦戈",
    "pid": 51
  },
  {
    "id": 817,
    "name": "Kenedougou",
    "name_zh": "凯内杜古",
    "pid": 51
  },
  {
    "id": 818,
    "name": "Komondjari",
    "name_zh": "科蒙加里",
    "pid": 51
  },
  {
    "id": 819,
    "name": "Comoe",
    "name_zh": "科莫埃",
    "pid": 51
  },
  {
    "id": 820,
    "name": "Kompienga",
    "name_zh": "孔皮恩加",
    "pid": 51
  },
  {
    "id": 821,
    "name": "Kossi",
    "name_zh": "孔西",
    "pid": 51
  },
  {
    "id": 822,
    "name": "Koulpelogo",
    "name_zh": "库尔佩罗戈",
    "pid": 51
  },
  {
    "id": 823,
    "name": "Kourweogo",
    "name_zh": "库尔维奥戈",
    "pid": 51
  },
  {
    "id": 824,
    "name": "Kouritenga",
    "name_zh": "库里滕加",
    "pid": 51
  },
  {
    "id": 825,
    "name": "Leraba",
    "name_zh": "雷拉巴",
    "pid": 51
  },
  {
    "id": 826,
    "name": "Loroum",
    "name_zh": "罗卢姆",
    "pid": 51
  },
  {
    "id": 827,
    "name": "Mouhoun",
    "name_zh": "穆翁",
    "pid": 51
  },
  {
    "id": 828,
    "name": "Namentenga",
    "name_zh": "纳门滕加",
    "pid": 51
  },
  {
    "id": 829,
    "name": "Nahouri",
    "name_zh": "纳乌里",
    "pid": 51
  },
  {
    "id": 830,
    "name": "Nayala",
    "name_zh": "纳亚拉",
    "pid": 51
  },
  {
    "id": 831,
    "name": "Gnagna",
    "name_zh": "尼亚尼亚",
    "pid": 51
  },
  {
    "id": 832,
    "name": "Noumbiel",
    "name_zh": "努姆比埃尔",
    "pid": 51
  },
  {
    "id": 833,
    "name": "Passore",
    "name_zh": "帕索雷",
    "pid": 51
  },
  {
    "id": 834,
    "name": "Seno",
    "name_zh": "塞诺",
    "pid": 51
  },
  {
    "id": 835,
    "name": "Sanguie",
    "name_zh": "桑吉",
    "pid": 51
  },
  {
    "id": 836,
    "name": "Sanmatenga",
    "name_zh": "桑马滕加",
    "pid": 51
  },
  {
    "id": 837,
    "name": "Sourou",
    "name_zh": "苏鲁",
    "pid": 51
  },
  {
    "id": 838,
    "name": "Soum",
    "name_zh": "苏姆",
    "pid": 51
  },
  {
    "id": 839,
    "name": "Tapoa",
    "name_zh": "塔波阿",
    "pid": 51
  },
  {
    "id": 840,
    "name": "Tuy",
    "name_zh": "图伊",
    "pid": 51
  },
  {
    "id": 841,
    "name": "Houet",
    "name_zh": "乌埃",
    "pid": 51
  },
  {
    "id": 842,
    "name": "Oubritenga",
    "name_zh": "乌布里滕加",
    "pid": 51
  },
  {
    "id": 843,
    "name": "Oudalan",
    "name_zh": "乌达兰",
    "pid": 51
  },
  {
    "id": 844,
    "name": "Sissili",
    "name_zh": "锡西里",
    "pid": 51
  },
  {
    "id": 845,
    "name": "Yagha",
    "name_zh": "亚加",
    "pid": 51
  },
  {
    "id": 846,
    "name": "Yatenga",
    "name_zh": "亚滕加",
    "pid": 51
  },
  {
    "id": 847,
    "name": "Ioba",
    "name_zh": "伊奥巴",
    "pid": 51
  },
  {
    "id": 848,
    "name": "Zoundweogo",
    "name_zh": "宗德韦奥戈",
    "pid": 51
  },
  {
    "id": 849,
    "name": "Zondoma",
    "name_zh": "宗多马",
    "pid": 51
  },
  {
    "id": 850,
    "name": "Bubanza",
    "name_zh": "布班扎",
    "pid": 52
  },
  {
    "id": 851,
    "name": "Bururi",
    "name_zh": "布鲁里",
    "pid": 52
  },
  {
    "id": 852,
    "name": "Bujumbura Mairie",
    "name_zh": "布琼布拉城市",
    "pid": 52
  },
  {
    "id": 853,
    "name": "Bujumbura Rural",
    "name_zh": "布琼布拉乡村",
    "pid": 52
  },
  {
    "id": 854,
    "name": "Ngozi",
    "name_zh": "恩戈齐",
    "pid": 52
  },
  {
    "id": 855,
    "name": "Kirundo",
    "name_zh": "基龙多",
    "pid": 52
  },
  {
    "id": 856,
    "name": "Gitega",
    "name_zh": "基特加",
    "pid": 52
  },
  {
    "id": 857,
    "name": "Karuzi",
    "name_zh": "卡鲁济",
    "pid": 52
  },
  {
    "id": 858,
    "name": "Kayanza",
    "name_zh": "卡扬扎",
    "pid": 52
  },
  {
    "id": 859,
    "name": "Cankuzo",
    "name_zh": "坎库佐",
    "pid": 52
  },
  {
    "id": 860,
    "name": "Rutana",
    "name_zh": "鲁塔纳",
    "pid": 52
  },
  {
    "id": 861,
    "name": "Ruyigi",
    "name_zh": "鲁伊吉",
    "pid": 52
  },
  {
    "id": 862,
    "name": "Makamba",
    "name_zh": "马坎巴",
    "pid": 52
  },
  {
    "id": 863,
    "name": "Muramvya",
    "name_zh": "穆拉姆维亚",
    "pid": 52
  },
  {
    "id": 864,
    "name": "Mwaro",
    "name_zh": "穆瓦洛",
    "pid": 52
  },
  {
    "id": 865,
    "name": "Muyinga",
    "name_zh": "穆因加",
    "pid": 52
  },
  {
    "id": 866,
    "name": "Cibitoke",
    "name_zh": "锡比托凯",
    "pid": 52
  },
  {
    "id": 867,
    "name": "Haeju",
    "name_zh": "海州",
    "pid": 54
  },
  {
    "id": 868,
    "name": "Hyesan",
    "name_zh": "惠山",
    "pid": 54
  },
  {
    "id": 869,
    "name": "Kanggye",
    "name_zh": "江界",
    "pid": 54
  },
  {
    "id": 870,
    "name": "Kaesong",
    "name_zh": "开城",
    "pid": 54
  },
  {
    "id": 871,
    "name": "Naseon",
    "name_zh": "罗先",
    "pid": 54
  },
  {
    "id": 872,
    "name": "Namp'o",
    "name_zh": "南浦",
    "pid": 54
  },
  {
    "id": 873,
    "name": "Pyongyang",
    "name_zh": "平壤",
    "pid": 54
  },
  {
    "id": 874,
    "name": "Ch'ongjin",
    "name_zh": "清津",
    "pid": 54
  },
  {
    "id": 875,
    "name": "Sariwon",
    "name_zh": "沙里院",
    "pid": 54
  },
  {
    "id": 876,
    "name": "Hamhung",
    "name_zh": "咸兴",
    "pid": 54
  },
  {
    "id": 877,
    "name": "Sinuiju",
    "name_zh": "新义州",
    "pid": 54
  },
  {
    "id": 878,
    "name": "Wonsan",
    "name_zh": "元山",
    "pid": 54
  },
  {
    "id": 879,
    "name": "Aarhus",
    "name_zh": "奥胡斯",
    "pid": 55
  },
  {
    "id": 880,
    "name": "Nordjylland",
    "name_zh": "北日德兰",
    "pid": 55
  },
  {
    "id": 881,
    "name": "Bornholm",
    "name_zh": "博恩霍尔姆",
    "pid": 55
  },
  {
    "id": 882,
    "name": "Frederiksborg",
    "name_zh": "菲特烈堡",
    "pid": 55
  },
  {
    "id": 883,
    "name": "Fyn",
    "name_zh": "菲茵",
    "pid": 55
  },
  {
    "id": 884,
    "name": "Copenhagen",
    "name_zh": "哥本哈根",
    "pid": 55
  },
  {
    "id": 885,
    "name": "Ribe",
    "name_zh": "里伯",
    "pid": 55
  },
  {
    "id": 886,
    "name": "Ringkoebing",
    "name_zh": "灵克宾",
    "pid": 55
  },
  {
    "id": 887,
    "name": "Roskilde",
    "name_zh": "罗斯基勒",
    "pid": 55
  },
  {
    "id": 888,
    "name": "Soenderjylland",
    "name_zh": "南日德兰",
    "pid": 55
  },
  {
    "id": 889,
    "name": "Storstroem",
    "name_zh": "斯多斯特姆",
    "pid": 55
  },
  {
    "id": 890,
    "name": "Viborg",
    "name_zh": "维堡",
    "pid": 55
  },
  {
    "id": 891,
    "name": "Vejle",
    "name_zh": "维厄勒",
    "pid": 55
  },
  {
    "id": 892,
    "name": "Vestsjaelland",
    "name_zh": "西希兰",
    "pid": 55
  },
  {
    "id": 893,
    "name": "Arnsberg",
    "name_zh": "阿恩斯贝格",
    "pid": 56
  },
  {
    "id": 894,
    "name": "Erfurt",
    "name_zh": "爱尔福特",
    "pid": 56
  },
  {
    "id": 895,
    "name": "Ansbach",
    "name_zh": "安斯巴格",
    "pid": 56
  },
  {
    "id": 896,
    "name": "Augsburg",
    "name_zh": "奥格斯堡",
    "pid": 56
  },
  {
    "id": 897,
    "name": "Berlin",
    "name_zh": "柏林",
    "pid": 56
  },
  {
    "id": 898,
    "name": "Bayreuth",
    "name_zh": "拜伊罗特",
    "pid": 56
  },
  {
    "id": 899,
    "name": "Bielefeld",
    "name_zh": "比勒费尔德",
    "pid": 56
  },
  {
    "id": 900,
    "name": "Potsdam",
    "name_zh": "波茨坦",
    "pid": 56
  },
  {
    "id": 901,
    "name": "Bochum",
    "name_zh": "波鸿",
    "pid": 56
  },
  {
    "id": 902,
    "name": "Bremen",
    "name_zh": "不来梅",
    "pid": 56
  },
  {
    "id": 903,
    "name": "Brunswick",
    "name_zh": "不伦瑞克",
    "pid": 56
  },
  {
    "id": 904,
    "name": "Darmstadt",
    "name_zh": "达姆施塔特",
    "pid": 56
  },
  {
    "id": 905,
    "name": "Detmold",
    "name_zh": "代特莫尔特",
    "pid": 56
  },
  {
    "id": 906,
    "name": "Dresden",
    "name_zh": "德累斯顿",
    "pid": 56
  },
  {
    "id": 907,
    "name": "Dessau",
    "name_zh": "德绍",
    "pid": 56
  },
  {
    "id": 908,
    "name": "Dusseldorf",
    "name_zh": "杜塞尔多夫",
    "pid": 56
  },
  {
    "id": 909,
    "name": "Frankfurt",
    "name_zh": "法兰克福",
    "pid": 56
  },
  {
    "id": 910,
    "name": "Freiburg",
    "name_zh": "弗赖堡",
    "pid": 56
  },
  {
    "id": 911,
    "name": "Halle",
    "name_zh": "哈雷",
    "pid": 56
  },
  {
    "id": 912,
    "name": "Hamburg",
    "name_zh": "汉堡",
    "pid": 56
  },
  {
    "id": 913,
    "name": "Hannover",
    "name_zh": "汉诺威",
    "pid": 56
  },
  {
    "id": 914,
    "name": "Kiel",
    "name_zh": "基尔",
    "pid": 56
  },
  {
    "id": 915,
    "name": "GieBen",
    "name_zh": "吉森",
    "pid": 56
  },
  {
    "id": 916,
    "name": "Karlsruhe",
    "name_zh": "卡尔斯鲁厄",
    "pid": 56
  },
  {
    "id": 917,
    "name": "Kassel",
    "name_zh": "卡塞尔",
    "pid": 56
  },
  {
    "id": 918,
    "name": "Chemnitz",
    "name_zh": "开姆尼斯",
    "pid": 56
  },
  {
    "id": 919,
    "name": "Koblenz",
    "name_zh": "科布伦次",
    "pid": 56
  },
  {
    "id": 920,
    "name": "Cologne",
    "name_zh": "科隆",
    "pid": 56
  },
  {
    "id": 921,
    "name": "Leipzig",
    "name_zh": "莱比锡",
    "pid": 56
  },
  {
    "id": 922,
    "name": "Landshut",
    "name_zh": "兰茨胡特",
    "pid": 56
  },
  {
    "id": 923,
    "name": "Luneburg",
    "name_zh": "吕讷堡",
    "pid": 56
  },
  {
    "id": 924,
    "name": "Magdeburg",
    "name_zh": "马格德堡",
    "pid": 56
  },
  {
    "id": 925,
    "name": "Mannheim",
    "name_zh": "曼海姆",
    "pid": 56
  },
  {
    "id": 926,
    "name": "Mainz",
    "name_zh": "美因兹",
    "pid": 56
  },
  {
    "id": 927,
    "name": "Muenster",
    "name_zh": "明斯特",
    "pid": 56
  },
  {
    "id": 928,
    "name": "Munich",
    "name_zh": "慕尼黑",
    "pid": 56
  },
  {
    "id": 929,
    "name": "Nuremberg",
    "name_zh": "纽伦堡",
    "pid": 56
  },
  {
    "id": 930,
    "name": "Schwerin",
    "name_zh": "什未林",
    "pid": 56
  },
  {
    "id": 931,
    "name": "Stuttgart",
    "name_zh": "斯图加特",
    "pid": 56
  },
  {
    "id": 932,
    "name": "Trier",
    "name_zh": "特里尔",
    "pid": 56
  },
  {
    "id": 933,
    "name": "Wiesbaden",
    "name_zh": "威斯巴登",
    "pid": 56
  },
  {
    "id": 934,
    "name": "Wuerzburg",
    "name_zh": "维尔茨堡",
    "pid": 56
  },
  {
    "id": 935,
    "name": "Aileu",
    "name_zh": "阿伊莱乌",
    "pid": 57
  },
  {
    "id": 936,
    "name": "Ainaro",
    "name_zh": "阿伊纳罗",
    "pid": 57
  },
  {
    "id": 937,
    "name": "Ermera",
    "name_zh": "埃尔梅拉",
    "pid": 57
  },
  {
    "id": 938,
    "name": "Ambeno",
    "name_zh": "安贝诺",
    "pid": 57
  },
  {
    "id": 939,
    "name": "Baucau",
    "name_zh": "包考",
    "pid": 57
  },
  {
    "id": 940,
    "name": "Bobonaro",
    "name_zh": "博博纳罗",
    "pid": 57
  },
  {
    "id": 941,
    "name": "Dili",
    "name_zh": "帝力",
    "pid": 57
  },
  {
    "id": 942,
    "name": "Kovalima",
    "name_zh": "科瓦利马",
    "pid": 57
  },
  {
    "id": 943,
    "name": "Lautem",
    "name_zh": "劳滕",
    "pid": 57
  },
  {
    "id": 944,
    "name": "Liquica",
    "name_zh": "利基卡",
    "pid": 57
  },
  {
    "id": 945,
    "name": "Manatuto",
    "name_zh": "马纳图托",
    "pid": 57
  },
  {
    "id": 946,
    "name": "Manofahi",
    "name_zh": "马努法伊",
    "pid": 57
  },
  {
    "id": 947,
    "name": "Viqueque",
    "name_zh": "维克克",
    "pid": 57
  },
  {
    "id": 948,
    "name": "Maritime",
    "name_zh": "滨海区",
    "pid": 58
  },
  {
    "id": 949,
    "name": "Savanes",
    "name_zh": "草原区",
    "pid": 58
  },
  {
    "id": 950,
    "name": "Plateaux",
    "name_zh": "高原区",
    "pid": 58
  },
  {
    "id": 951,
    "name": "Kara",
    "name_zh": "卡拉区",
    "pid": 58
  },
  {
    "id": 952,
    "name": "Centre",
    "name_zh": "中部区",
    "pid": 58
  },
  {
    "id": 953,
    "name": "Abakan",
    "name_zh": "阿巴坎",
    "pid": 61
  },
  {
    "id": 954,
    "name": "Arkhangelsk",
    "name_zh": "阿尔汉格尔斯克",
    "pid": 61
  },
  {
    "id": 955,
    "name": "Aginskoye",
    "name_zh": "阿金斯科耶",
    "pid": 61
  },
  {
    "id": 956,
    "name": "Anadyr",
    "name_zh": "阿纳德尔",
    "pid": 61
  },
  {
    "id": 957,
    "name": "Astrakhan",
    "name_zh": "阿斯特拉罕",
    "pid": 61
  },
  {
    "id": 958,
    "name": "Elista",
    "name_zh": "埃利斯塔",
    "pid": 61
  },
  {
    "id": 959,
    "name": "Orel",
    "name_zh": "奥廖尔",
    "pid": 61
  },
  {
    "id": 960,
    "name": "Orenburg",
    "name_zh": "奥伦堡",
    "pid": 61
  },
  {
    "id": 961,
    "name": "Barnaul",
    "name_zh": "巴尔瑙尔",
    "pid": 61
  },
  {
    "id": 962,
    "name": "Penza",
    "name_zh": "奔萨",
    "pid": 61
  },
  {
    "id": 963,
    "name": "Petropavlovsk-Kamchatskiy",
    "name_zh": "彼得罗巴甫洛夫斯克",
    "pid": 61
  },
  {
    "id": 964,
    "name": "Petrozavodsk",
    "name_zh": "彼得罗扎沃茨克",
    "pid": 61
  },
  {
    "id": 965,
    "name": "Perm",
    "name_zh": "彼尔姆",
    "pid": 61
  },
  {
    "id": 966,
    "name": "Birobidzan",
    "name_zh": "比罗比詹",
    "pid": 61
  },
  {
    "id": 967,
    "name": "Belgorod",
    "name_zh": "别尔哥罗德",
    "pid": 61
  },
  {
    "id": 968,
    "name": "Chabarovsk",
    "name_zh": "伯力",
    "pid": 61
  },
  {
    "id": 969,
    "name": "Blagoveshchensk",
    "name_zh": "布拉戈维申斯克",
    "pid": 61
  },
  {
    "id": 970,
    "name": "Bryansk",
    "name_zh": "布良斯克",
    "pid": 61
  },
  {
    "id": 971,
    "name": "Chelyabinsk",
    "name_zh": "车里雅宾斯克",
    "pid": 61
  },
  {
    "id": 972,
    "name": "Chita",
    "name_zh": "赤塔",
    "pid": 61
  },
  {
    "id": 973,
    "name": "Rostov-na-Donu",
    "name_zh": "顿河畔罗斯托夫",
    "pid": 61
  },
  {
    "id": 974,
    "name": "Omsk",
    "name_zh": "鄂木斯克",
    "pid": 61
  },
  {
    "id": 975,
    "name": "Volgograd",
    "name_zh": "伏尔加格勒",
    "pid": 61
  },
  {
    "id": 976,
    "name": "Vladimir",
    "name_zh": "弗拉基米尔",
    "pid": 61
  },
  {
    "id": 977,
    "name": "Vladikavkaz",
    "name_zh": "弗拉季高加索",
    "pid": 61
  },
  {
    "id": 978,
    "name": "Gorno-Altajsk",
    "name_zh": "戈尔诺－阿尔泰斯克",
    "pid": 61
  },
  {
    "id": 979,
    "name": "Grozny",
    "name_zh": "格罗兹尼",
    "pid": 61
  },
  {
    "id": 980,
    "name": "Vladivostok",
    "name_zh": "海参崴",
    "pid": 61
  },
  {
    "id": 981,
    "name": "Khanty-Mansiysk",
    "name_zh": "汉特－曼西斯克",
    "pid": 61
  },
  {
    "id": 982,
    "name": "Kirov",
    "name_zh": "基洛夫",
    "pid": 61
  },
  {
    "id": 983,
    "name": "Kaliningrad",
    "name_zh": "加里宁格勒",
    "pid": 61
  },
  {
    "id": 984,
    "name": "Kazan",
    "name_zh": "喀山",
    "pid": 61
  },
  {
    "id": 985,
    "name": "Kaluga",
    "name_zh": "卡卢加",
    "pid": 61
  },
  {
    "id": 986,
    "name": "Kostroma",
    "name_zh": "科斯特罗马",
    "pid": 61
  },
  {
    "id": 987,
    "name": "Krasnodar",
    "name_zh": "克拉斯诺达尔",
    "pid": 61
  },
  {
    "id": 988,
    "name": "Krasnojarsk",
    "name_zh": "克拉斯诺亚尔斯克",
    "pid": 61
  },
  {
    "id": 989,
    "name": "Kemerovo",
    "name_zh": "克麦罗沃",
    "pid": 61
  },
  {
    "id": 990,
    "name": "Kyzyl",
    "name_zh": "克孜勒",
    "pid": 61
  },
  {
    "id": 991,
    "name": "Kudymkar",
    "name_zh": "库德姆卡尔",
    "pid": 61
  },
  {
    "id": 992,
    "name": "Kurgan",
    "name_zh": "库尔干",
    "pid": 61
  },
  {
    "id": 993,
    "name": "Kursk",
    "name_zh": "库尔斯克",
    "pid": 61
  },
  {
    "id": 994,
    "name": "Lipeck",
    "name_zh": "利佩茨克",
    "pid": 61
  },
  {
    "id": 995,
    "name": "Ryazan",
    "name_zh": "梁赞",
    "pid": 61
  },
  {
    "id": 996,
    "name": "Makhachkala",
    "name_zh": "马哈奇卡拉",
    "pid": 61
  },
  {
    "id": 997,
    "name": "Magadan",
    "name_zh": "马加丹",
    "pid": 61
  },
  {
    "id": 998,
    "name": "Magas",
    "name_zh": "马加斯",
    "pid": 61
  },
  {
    "id": 999,
    "name": "Maykop",
    "name_zh": "迈科普",
    "pid": 61
  },
  {
    "id": 1000,
    "name": "Murmansk",
    "name_zh": "摩尔曼斯克",
    "pid": 61
  },
  {
    "id": 1001,
    "name": "Moscow",
    "name_zh": "莫斯科",
    "pid": 61
  },
  {
    "id": 1002,
    "name": "Nalchik",
    "name_zh": "纳尔奇克",
    "pid": 61
  },
  {
    "id": 1003,
    "name": "Naryan-Mar",
    "name_zh": "纳里扬马尔",
    "pid": 61
  },
  {
    "id": 1004,
    "name": "Juzno-Sachalinsk",
    "name_zh": "南萨哈林斯克",
    "pid": 61
  },
  {
    "id": 1005,
    "name": "Velikij Novgorod",
    "name_zh": "诺夫哥罗德",
    "pid": 61
  },
  {
    "id": 1006,
    "name": "Palana",
    "name_zh": "帕拉纳",
    "pid": 61
  },
  {
    "id": 1007,
    "name": "Pskov",
    "name_zh": "普斯科夫",
    "pid": 61
  },
  {
    "id": 1008,
    "name": "Cheboksary",
    "name_zh": "切博克萨雷",
    "pid": 61
  },
  {
    "id": 1009,
    "name": "Cherkessk",
    "name_zh": "切尔克斯克",
    "pid": 61
  },
  {
    "id": 1010,
    "name": "Tyumen",
    "name_zh": "秋明",
    "pid": 61
  },
  {
    "id": 1011,
    "name": "Saratov",
    "name_zh": "萨拉托夫",
    "pid": 61
  },
  {
    "id": 1012,
    "name": "Saransk",
    "name_zh": "萨兰斯克",
    "pid": 61
  },
  {
    "id": 1013,
    "name": "Salekhard",
    "name_zh": "萨列哈尔德",
    "pid": 61
  },
  {
    "id": 1014,
    "name": "Samara",
    "name_zh": "萨马拉",
    "pid": 61
  },
  {
    "id": 1015,
    "name": "Syktyvkar",
    "name_zh": "瑟克特夫卡尔",
    "pid": 61
  },
  {
    "id": 1016,
    "name": "St. Peterburg",
    "name_zh": "圣彼得堡",
    "pid": 61
  },
  {
    "id": 1017,
    "name": "Smolensk",
    "name_zh": "斯摩棱斯克",
    "pid": 61
  },
  {
    "id": 1018,
    "name": "Stavropol",
    "name_zh": "斯塔夫罗波尔",
    "pid": 61
  },
  {
    "id": 1019,
    "name": "Tambov",
    "name_zh": "坦波夫",
    "pid": 61
  },
  {
    "id": 1020,
    "name": "Tver",
    "name_zh": "特维尔",
    "pid": 61
  },
  {
    "id": 1021,
    "name": "Tula",
    "name_zh": "图拉",
    "pid": 61
  },
  {
    "id": 1022,
    "name": "Tomsk",
    "name_zh": "托木斯克",
    "pid": 61
  },
  {
    "id": 1023,
    "name": "Voronezh",
    "name_zh": "沃罗涅什",
    "pid": 61
  },
  {
    "id": 1024,
    "name": "Vologda",
    "name_zh": "沃洛格达",
    "pid": 61
  },
  {
    "id": 1025,
    "name": "Ufa",
    "name_zh": "乌法",
    "pid": 61
  },
  {
    "id": 1026,
    "name": "Ulan-Ude",
    "name_zh": "乌兰乌德",
    "pid": 61
  },
  {
    "id": 1027,
    "name": "Uljanovsk",
    "name_zh": "乌里扬诺夫斯克",
    "pid": 61
  },
  {
    "id": 1028,
    "name": "Ust-Ordynsky",
    "name_zh": "乌斯季奥尔登斯基",
    "pid": 61
  },
  {
    "id": 1029,
    "name": "Niznij Novgorod",
    "name_zh": "下诺夫哥罗德",
    "pid": 61
  },
  {
    "id": 1030,
    "name": "Novosibirsk",
    "name_zh": "新西伯利亚",
    "pid": 61
  },
  {
    "id": 1031,
    "name": "Jakutsk",
    "name_zh": "雅库茨克",
    "pid": 61
  },
  {
    "id": 1032,
    "name": "Jaroslavl",
    "name_zh": "雅罗斯拉夫尔",
    "pid": 61
  },
  {
    "id": 1033,
    "name": "Jekaterinburg",
    "name_zh": "叶卡捷林堡",
    "pid": 61
  },
  {
    "id": 1034,
    "name": "Irkutsk",
    "name_zh": "伊尔库茨克",
    "pid": 61
  },
  {
    "id": 1035,
    "name": "Izhevsk",
    "name_zh": "伊热夫斯克",
    "pid": 61
  },
  {
    "id": 1036,
    "name": "Ivanovo",
    "name_zh": "伊万诺沃",
    "pid": 61
  },
  {
    "id": 1037,
    "name": "Yoshkar-Ola",
    "name_zh": "约什卡尔奥拉",
    "pid": 61
  },
  {
    "id": 1038,
    "name": "Azuay",
    "name_zh": "阿苏艾",
    "pid": 62
  },
  {
    "id": 1039,
    "name": "El Oro",
    "name_zh": "埃尔奥罗",
    "pid": 62
  },
  {
    "id": 1040,
    "name": "Esmeraldas",
    "name_zh": "埃斯梅拉尔达斯",
    "pid": 62
  },
  {
    "id": 1041,
    "name": "Bolivar",
    "name_zh": "玻利瓦尔",
    "pid": 62
  },
  {
    "id": 1042,
    "name": "Guayas",
    "name_zh": "瓜亚斯",
    "pid": 62
  },
  {
    "id": 1043,
    "name": "Galapagos",
    "name_zh": "加拉帕戈斯",
    "pid": 62
  },
  {
    "id": 1044,
    "name": "Carchi",
    "name_zh": "卡尔奇",
    "pid": 62
  },
  {
    "id": 1045,
    "name": "Canar",
    "name_zh": "卡尼亚尔",
    "pid": 62
  },
  {
    "id": 1046,
    "name": "Cotopaxi",
    "name_zh": "科托帕希",
    "pid": 62
  },
  {
    "id": 1047,
    "name": "Loja",
    "name_zh": "洛哈",
    "pid": 62
  },
  {
    "id": 1048,
    "name": "Los Rios",
    "name_zh": "洛斯里奥斯",
    "pid": 62
  },
  {
    "id": 1049,
    "name": "Manabi",
    "name_zh": "马纳比",
    "pid": 62
  },
  {
    "id": 1050,
    "name": "Morona-Santiago",
    "name_zh": "莫罗纳－圣地亚哥",
    "pid": 62
  },
  {
    "id": 1051,
    "name": "Napo, Orellana",
    "name_zh": "纳波，奥雷利亚纳",
    "pid": 62
  },
  {
    "id": 1052,
    "name": "Pastaza",
    "name_zh": "帕斯塔萨",
    "pid": 62
  },
  {
    "id": 1053,
    "name": "Pichincha",
    "name_zh": "皮钦查",
    "pid": 62
  },
  {
    "id": 1054,
    "name": "Chimborazo",
    "name_zh": "钦博拉索",
    "pid": 62
  },
  {
    "id": 1055,
    "name": "Zamora-Chinchipe",
    "name_zh": "萨莫拉－钦奇佩",
    "pid": 62
  },
  {
    "id": 1056,
    "name": "Sucumbios",
    "name_zh": "苏昆毕奥斯",
    "pid": 62
  },
  {
    "id": 1057,
    "name": "Tungurahua",
    "name_zh": "通古拉瓦",
    "pid": 62
  },
  {
    "id": 1058,
    "name": "Imbabura",
    "name_zh": "因巴布拉",
    "pid": 62
  },
  {
    "id": 1059,
    "name": "Anseba",
    "name_zh": "安塞巴",
    "pid": 63
  },
  {
    "id": 1060,
    "name": "Semenawi Keyih Bahri",
    "name_zh": "北红海",
    "pid": 63
  },
  {
    "id": 1061,
    "name": "Gash Barka",
    "name_zh": "加什·巴尔卡",
    "pid": 63
  },
  {
    "id": 1062,
    "name": "Debub",
    "name_zh": "南部",
    "pid": 63
  },
  {
    "id": 1063,
    "name": "Debubawi Keyih Bahri",
    "name_zh": "南红海",
    "pid": 63
  },
  {
    "id": 1064,
    "name": "Maekel",
    "name_zh": "中部",
    "pid": 63
  },
  {
    "id": 1065,
    "name": "Arles",
    "name_zh": "阿尔勒",
    "pid": 64
  },
  {
    "id": 1066,
    "name": "Ajaccio",
    "name_zh": "阿雅克修",
    "pid": 64
  },
  {
    "id": 1067,
    "name": "Aix-en-Provence",
    "name_zh": "艾克斯",
    "pid": 64
  },
  {
    "id": 1068,
    "name": "Orleans",
    "name_zh": "奥尔良",
    "pid": 64
  },
  {
    "id": 1069,
    "name": "Paris",
    "name_zh": "巴黎",
    "pid": 64
  },
  {
    "id": 1070,
    "name": "Besancon",
    "name_zh": "贝桑松",
    "pid": 64
  },
  {
    "id": 1071,
    "name": "Dijon",
    "name_zh": "第戎",
    "pid": 64
  },
  {
    "id": 1072,
    "name": "Frejus",
    "name_zh": "弗雷瑞斯",
    "pid": 64
  },
  {
    "id": 1073,
    "name": "Caen",
    "name_zh": "卡昂",
    "pid": 64
  },
  {
    "id": 1074,
    "name": "Rennes",
    "name_zh": "雷恩",
    "pid": 64
  },
  {
    "id": 1075,
    "name": "Lyon",
    "name_zh": "里昂",
    "pid": 64
  },
  {
    "id": 1076,
    "name": "Lille",
    "name_zh": "里尔",
    "pid": 64
  },
  {
    "id": 1077,
    "name": "Limoges",
    "name_zh": "利摩日",
    "pid": 64
  },
  {
    "id": 1078,
    "name": "Rouen",
    "name_zh": "鲁昂",
    "pid": 64
  },
  {
    "id": 1079,
    "name": "Marseille",
    "name_zh": "马赛",
    "pid": 64
  },
  {
    "id": 1080,
    "name": "Metz",
    "name_zh": "梅斯",
    "pid": 64
  },
  {
    "id": 1081,
    "name": "Montpellier",
    "name_zh": "蒙彼利埃",
    "pid": 64
  },
  {
    "id": 1082,
    "name": "Nantes",
    "name_zh": "南特",
    "pid": 64
  },
  {
    "id": 1083,
    "name": "Nice",
    "name_zh": "尼斯",
    "pid": 64
  },
  {
    "id": 1084,
    "name": "Chalons-en-Champagne",
    "name_zh": "沙隆",
    "pid": 64
  },
  {
    "id": 1085,
    "name": "Toulouse",
    "name_zh": "图卢兹",
    "pid": 64
  },
  {
    "id": 1086,
    "name": "Valence",
    "name_zh": "瓦朗斯",
    "pid": 64
  },
  {
    "id": 1087,
    "name": "Amiens",
    "name_zh": "亚眠",
    "pid": 64
  },
  {
    "id": 1088,
    "name": "Davao",
    "name_zh": "达沃",
    "pid": 70
  },
  {
    "id": 1089,
    "name": "Caloocan",
    "name_zh": "卡卢坎",
    "pid": 70
  },
  {
    "id": 1090,
    "name": "Manila",
    "name_zh": "马尼拉",
    "pid": 70
  },
  {
    "id": 1091,
    "name": "Cebu",
    "name_zh": "宿务",
    "pid": 70
  },
  {
    "id": 1092,
    "name": "Espoo",
    "name_zh": "埃斯波",
    "pid": 72
  },
  {
    "id": 1093,
    "name": "Oulu",
    "name_zh": "奥卢",
    "pid": 72
  },
  {
    "id": 1094,
    "name": "Pori",
    "name_zh": "波里",
    "pid": 72
  },
  {
    "id": 1095,
    "name": "Porvoo",
    "name_zh": "博尔沃",
    "pid": 72
  },
  {
    "id": 1096,
    "name": "Hameenlinna",
    "name_zh": "海门林纳",
    "pid": 72
  },
  {
    "id": 1097,
    "name": "Helsinki",
    "name_zh": "赫尔辛基",
    "pid": 72
  },
  {
    "id": 1098,
    "name": "Kajaani",
    "name_zh": "卡亚尼",
    "pid": 72
  },
  {
    "id": 1099,
    "name": "Kokkola",
    "name_zh": "科科拉",
    "pid": 72
  },
  {
    "id": 1100,
    "name": "Kotka",
    "name_zh": "科特卡",
    "pid": 72
  },
  {
    "id": 1101,
    "name": "Kuopio",
    "name_zh": "库奥皮奥",
    "pid": 72
  },
  {
    "id": 1102,
    "name": "Lahti",
    "name_zh": "拉赫蒂",
    "pid": 72
  },
  {
    "id": 1103,
    "name": "Lappeenranta",
    "name_zh": "拉彭兰塔",
    "pid": 72
  },
  {
    "id": 1104,
    "name": "Rovaniemi",
    "name_zh": "罗瓦涅米",
    "pid": 72
  },
  {
    "id": 1105,
    "name": "Mariehamn",
    "name_zh": "玛丽港",
    "pid": 72
  },
  {
    "id": 1106,
    "name": "Mikkeli",
    "name_zh": "米凯利",
    "pid": 72
  },
  {
    "id": 1107,
    "name": "Tampere",
    "name_zh": "坦佩雷",
    "pid": 72
  },
  {
    "id": 1108,
    "name": "Turku",
    "name_zh": "图尔库",
    "pid": 72
  },
  {
    "id": 1109,
    "name": "Vaasa",
    "name_zh": "瓦萨",
    "pid": 72
  },
  {
    "id": 1110,
    "name": "Vantaa",
    "name_zh": "万塔",
    "pid": 72
  },
  {
    "id": 1111,
    "name": "Joensuu",
    "name_zh": "约恩苏",
    "pid": 72
  },
  {
    "id": 1112,
    "name": "Paul",
    "name_zh": "保尔",
    "pid": 73
  },
  {
    "id": 1113,
    "name": "Porto Novo",
    "name_zh": "波多诺伏",
    "pid": 73
  },
  {
    "id": 1114,
    "name": "Boa Vista",
    "name_zh": "博阿维斯塔岛",
    "pid": 73
  },
  {
    "id": 1115,
    "name": "Brava",
    "name_zh": "布拉瓦岛",
    "pid": 73
  },
  {
    "id": 1116,
    "name": "Ribeira Grande",
    "name_zh": "大里贝拉",
    "pid": 73
  },
  {
    "id": 1117,
    "name": "Fogo",
    "name_zh": "福古岛",
    "pid": 73
  },
  {
    "id": 1118,
    "name": "Maio",
    "name_zh": "马尤岛",
    "pid": 73
  },
  {
    "id": 1119,
    "name": "Mosteiros",
    "name_zh": "莫斯特罗",
    "pid": 73
  },
  {
    "id": 1120,
    "name": "Praia",
    "name_zh": "普拉亚",
    "pid": 73
  },
  {
    "id": 1121,
    "name": "Sal",
    "name_zh": "萨尔岛",
    "pid": 73
  },
  {
    "id": 1122,
    "name": "Santo Antao",
    "name_zh": "圣安唐岛",
    "pid": 73
  },
  {
    "id": 1123,
    "name": "Santiago",
    "name_zh": "圣地亚哥岛",
    "pid": 73
  },
  {
    "id": 1124,
    "name": "Sao Domingos",
    "name_zh": "圣多明戈",
    "pid": 73
  },
  {
    "id": 1125,
    "name": "Sao Filipe",
    "name_zh": "圣菲利普",
    "pid": 73
  },
  {
    "id": 1126,
    "name": "Santa Catarina",
    "name_zh": "圣卡塔琳娜",
    "pid": 73
  },
  {
    "id": 1127,
    "name": "Santa Cruz",
    "name_zh": "圣克鲁斯",
    "pid": 73
  },
  {
    "id": 1128,
    "name": "Sao Miguel",
    "name_zh": "圣米戈尔",
    "pid": 73
  },
  {
    "id": 1129,
    "name": "Sao Nicolau",
    "name_zh": "圣尼古拉岛",
    "pid": 73
  },
  {
    "id": 1130,
    "name": "Sao Vicente",
    "name_zh": "圣维森特岛",
    "pid": 73
  },
  {
    "id": 1131,
    "name": "Tarrafal",
    "name_zh": "塔拉法尔",
    "pid": 73
  },
  {
    "id": 1132,
    "name": "Arauca",
    "name_zh": "阿劳卡",
    "pid": 78
  },
  {
    "id": 1133,
    "name": "Antioquia",
    "name_zh": "安提奥基亚",
    "pid": 78
  },
  {
    "id": 1134,
    "name": "Norte de Santander",
    "name_zh": "北桑坦德",
    "pid": 78
  },
  {
    "id": 1135,
    "name": "Bogota",
    "name_zh": "波哥大首都区",
    "pid": 78
  },
  {
    "id": 1136,
    "name": "Bolivar",
    "name_zh": "博利瓦尔",
    "pid": 78
  },
  {
    "id": 1137,
    "name": "Boyaca",
    "name_zh": "博亚卡",
    "pid": 78
  },
  {
    "id": 1138,
    "name": "Atlantico",
    "name_zh": "大西洋",
    "pid": 78
  },
  {
    "id": 1139,
    "name": "Guaviare",
    "name_zh": "瓜维亚雷",
    "pid": 78
  },
  {
    "id": 1140,
    "name": "La Guajira",
    "name_zh": "瓜希拉",
    "pid": 78
  },
  {
    "id": 1141,
    "name": "Guainia",
    "name_zh": "瓜伊尼亚",
    "pid": 78
  },
  {
    "id": 1142,
    "name": "Quindio",
    "name_zh": "金迪奥",
    "pid": 78
  },
  {
    "id": 1143,
    "name": "Caldas",
    "name_zh": "卡尔达斯",
    "pid": 78
  },
  {
    "id": 1144,
    "name": "Caqueta",
    "name_zh": "卡克塔",
    "pid": 78
  },
  {
    "id": 1145,
    "name": "Casanare",
    "name_zh": "卡萨纳雷",
    "pid": 78
  },
  {
    "id": 1146,
    "name": "Cauca",
    "name_zh": "考卡",
    "pid": 78
  },
  {
    "id": 1147,
    "name": "Valle del Cauca",
    "name_zh": "考卡山谷",
    "pid": 78
  },
  {
    "id": 1148,
    "name": "Cordoba",
    "name_zh": "科尔多巴",
    "pid": 78
  },
  {
    "id": 1149,
    "name": "Cundinamarca",
    "name_zh": "昆迪纳马卡",
    "pid": 78
  },
  {
    "id": 1150,
    "name": "Risaralda",
    "name_zh": "利萨拉尔达",
    "pid": 78
  },
  {
    "id": 1151,
    "name": "Magdalena",
    "name_zh": "马格达雷那",
    "pid": 78
  },
  {
    "id": 1152,
    "name": "Meta",
    "name_zh": "梅塔",
    "pid": 78
  },
  {
    "id": 1153,
    "name": "Narino",
    "name_zh": "纳里尼奥",
    "pid": 78
  },
  {
    "id": 1154,
    "name": "Putumayo",
    "name_zh": "普图马约",
    "pid": 78
  },
  {
    "id": 1155,
    "name": "Choco",
    "name_zh": "乔科",
    "pid": 78
  },
  {
    "id": 1156,
    "name": "Cesar",
    "name_zh": "塞萨尔",
    "pid": 78
  },
  {
    "id": 1157,
    "name": "Santander",
    "name_zh": "桑坦德",
    "pid": 78
  },
  {
    "id": 1158,
    "name": "San Andres y Providencia",
    "name_zh": "圣安德烈斯-普罗维登西亚",
    "pid": 78
  },
  {
    "id": 1159,
    "name": "Sucre",
    "name_zh": "苏克雷",
    "pid": 78
  },
  {
    "id": 1160,
    "name": "Tolima",
    "name_zh": "托利马",
    "pid": 78
  },
  {
    "id": 1161,
    "name": "Vichada",
    "name_zh": "维查达",
    "pid": 78
  },
  {
    "id": 1162,
    "name": "Vaupes",
    "name_zh": "沃佩斯",
    "pid": 78
  },
  {
    "id": 1163,
    "name": "Huila",
    "name_zh": "乌伊拉",
    "pid": 78
  },
  {
    "id": 1164,
    "name": "Amazonas",
    "name_zh": "亚马孙",
    "pid": 78
  },
  {
    "id": 1165,
    "name": "Alajuela",
    "name_zh": "阿拉胡埃拉",
    "pid": 79
  },
  {
    "id": 1166,
    "name": "Heredia",
    "name_zh": "埃雷迪亚",
    "pid": 79
  },
  {
    "id": 1167,
    "name": "Guanacaste",
    "name_zh": "瓜纳卡斯特",
    "pid": 79
  },
  {
    "id": 1168,
    "name": "Cartago",
    "name_zh": "卡塔戈",
    "pid": 79
  },
  {
    "id": 1169,
    "name": "Limon",
    "name_zh": "利蒙",
    "pid": 79
  },
  {
    "id": 1170,
    "name": "Puntarenas",
    "name_zh": "蓬塔雷纳斯",
    "pid": 79
  },
  {
    "id": 1171,
    "name": "San Jose",
    "name_zh": "圣何塞",
    "pid": 79
  },
  {
    "id": 1172,
    "name": "Holguin",
    "name_zh": "奥尔金",
    "pid": 83
  },
  {
    "id": 1173,
    "name": "Pinar del Rio",
    "name_zh": "比那尔德里奥",
    "pid": 83
  },
  {
    "id": 1174,
    "name": "Villa Clara",
    "name_zh": "比亚克拉拉",
    "pid": 83
  },
  {
    "id": 1175,
    "name": "Granma",
    "name_zh": "格拉玛",
    "pid": 83
  },
  {
    "id": 1176,
    "name": "Guantanamo",
    "name_zh": "关塔那摩",
    "pid": 83
  },
  {
    "id": 1177,
    "name": "La Habana",
    "name_zh": "哈瓦那",
    "pid": 83
  },
  {
    "id": 1178,
    "name": "Ciudad de la Habana",
    "name_zh": "哈瓦那城",
    "pid": 83
  },
  {
    "id": 1179,
    "name": "Camaguey",
    "name_zh": "卡马圭",
    "pid": 83
  },
  {
    "id": 1180,
    "name": "Las Tunas",
    "name_zh": "拉斯图纳斯",
    "pid": 83
  },
  {
    "id": 1181,
    "name": "Matanzas",
    "name_zh": "马坦萨斯",
    "pid": 83
  },
  {
    "id": 1182,
    "name": "Mayari",
    "name_zh": "马亚里",
    "pid": 83
  },
  {
    "id": 1183,
    "name": "Manzanillo",
    "name_zh": "曼萨尼罗",
    "pid": 83
  },
  {
    "id": 1184,
    "name": "Isla de la Juventud",
    "name_zh": "青年岛特区",
    "pid": 83
  },
  {
    "id": 1185,
    "name": "Santiago de Cuba",
    "name_zh": "圣地亚哥",
    "pid": 83
  },
  {
    "id": 1186,
    "name": "Sancti Spiritus",
    "name_zh": "圣斯皮里图斯",
    "pid": 83
  },
  {
    "id": 1187,
    "name": "Cienfuegos",
    "name_zh": "西恩富戈斯",
    "pid": 83
  },
  {
    "id": 1188,
    "name": "Ciego de Avila",
    "name_zh": "谢戈德阿维拉",
    "pid": 83
  },
  {
    "id": 1189,
    "name": "Essequibo Islands-West Demerara",
    "name_zh": "埃塞奎博群岛-西德梅拉拉",
    "pid": 86
  },
  {
    "id": 1190,
    "name": "Barima-Waini",
    "name_zh": "巴里马-瓦伊尼",
    "pid": 86
  },
  {
    "id": 1191,
    "name": "Pomeroon-Supenaam",
    "name_zh": "波默伦-苏佩纳姆",
    "pid": 86
  },
  {
    "id": 1192,
    "name": "Potaro-Siparuni",
    "name_zh": "波塔罗-锡帕鲁尼",
    "pid": 86
  },
  {
    "id": 1193,
    "name": "Demerara-Mahaica",
    "name_zh": "德梅拉拉-马海卡",
    "pid": 86
  },
  {
    "id": 1194,
    "name": "East Berbice-Corentyne",
    "name_zh": "东伯比斯-科兰太因",
    "pid": 86
  },
  {
    "id": 1195,
    "name": "Cuyuni-Mazaruni",
    "name_zh": "库尤尼-马扎鲁尼",
    "pid": 86
  },
  {
    "id": 1196,
    "name": "Mahaica-Berbice",
    "name_zh": "马海卡-伯比斯",
    "pid": 86
  },
  {
    "id": 1197,
    "name": "Upper Demerara-Berbice",
    "name_zh": "上德梅拉拉-伯比斯",
    "pid": 86
  },
  {
    "id": 1198,
    "name": "Upper Takutu-Upper Essequibo",
    "name_zh": "上塔库图-上埃塞奎博",
    "pid": 86
  },
  {
    "id": 1199,
    "name": "Arkalyk",
    "name_zh": "阿尔卡累克",
    "pid": 87
  },
  {
    "id": 1200,
    "name": "Aqmola",
    "name_zh": "阿克莫拉",
    "pid": 87
  },
  {
    "id": 1201,
    "name": "Aksu",
    "name_zh": "阿克苏",
    "pid": 87
  },
  {
    "id": 1202,
    "name": "Aqtobe",
    "name_zh": "阿克托别",
    "pid": 87
  },
  {
    "id": 1203,
    "name": "Almaty",
    "name_zh": "阿拉木图",
    "pid": 87
  },
  {
    "id": 1204,
    "name": "Arys",
    "name_zh": "阿雷斯",
    "pid": 87
  },
  {
    "id": 1205,
    "name": "Astana",
    "name_zh": "阿斯塔纳市",
    "pid": 87
  },
  {
    "id": 1206,
    "name": "Atyrau",
    "name_zh": "阿特劳",
    "pid": 87
  },
  {
    "id": 1207,
    "name": "Ekibastuz",
    "name_zh": "埃基巴斯图兹",
    "pid": 87
  },
  {
    "id": 1208,
    "name": "Balkhash",
    "name_zh": "巴尔喀什",
    "pid": 87
  },
  {
    "id": 1209,
    "name": "Pavlodar",
    "name_zh": "巴甫洛达尔",
    "pid": 87
  },
  {
    "id": 1210,
    "name": "Soltustik Qazaqstan",
    "name_zh": "北哈萨克斯坦",
    "pid": 87
  },
  {
    "id": 1211,
    "name": "Shyghys Qazaqstan",
    "name_zh": "东哈萨克斯坦",
    "pid": 87
  },
  {
    "id": 1212,
    "name": "Zyryanovsk",
    "name_zh": "济良诺夫斯克",
    "pid": 87
  },
  {
    "id": 1213,
    "name": "Zhambyl",
    "name_zh": "江布尔",
    "pid": 87
  },
  {
    "id": 1214,
    "name": "Zhezkazgan",
    "name_zh": "杰兹卡兹甘",
    "pid": 87
  },
  {
    "id": 1215,
    "name": "Qaraghandy",
    "name_zh": "卡拉干达",
    "pid": 87
  },
  {
    "id": 1216,
    "name": "Karazhal",
    "name_zh": "卡拉扎尔",
    "pid": 87
  },
  {
    "id": 1217,
    "name": "Kapchagay",
    "name_zh": "卡普恰盖",
    "pid": 87
  },
  {
    "id": 1218,
    "name": "Qostanay",
    "name_zh": "科斯塔奈",
    "pid": 87
  },
  {
    "id": 1219,
    "name": "Qyzylorda",
    "name_zh": "克孜勒奥尔达",
    "pid": 87
  },
  {
    "id": 1220,
    "name": "Kentau",
    "name_zh": "肯套",
    "pid": 87
  },
  {
    "id": 1221,
    "name": "Kurchatov",
    "name_zh": "库尔恰托夫",
    "pid": 87
  },
  {
    "id": 1222,
    "name": "Lisakovsk",
    "name_zh": "利萨科夫斯克",
    "pid": 87
  },
  {
    "id": 1223,
    "name": "Leninogorsk",
    "name_zh": "列宁诺戈尔斯克",
    "pid": 87
  },
  {
    "id": 1224,
    "name": "Rudny",
    "name_zh": "鲁德内",
    "pid": 87
  },
  {
    "id": 1225,
    "name": "Mangghystau",
    "name_zh": "曼格斯套",
    "pid": 87
  },
  {
    "id": 1226,
    "name": "Ongtustik Qazaqstan",
    "name_zh": "南哈萨克斯坦",
    "pid": 87
  },
  {
    "id": 1227,
    "name": "Saran",
    "name_zh": "萨兰",
    "pid": 87
  },
  {
    "id": 1228,
    "name": "Semey",
    "name_zh": "塞梅伊",
    "pid": 87
  },
  {
    "id": 1229,
    "name": "Shakhtinsk",
    "name_zh": "沙赫京斯克",
    "pid": 87
  },
  {
    "id": 1230,
    "name": "Stepnogorsk",
    "name_zh": "斯捷普诺戈尔斯克",
    "pid": 87
  },
  {
    "id": 1231,
    "name": "Tekeli",
    "name_zh": "铁克利",
    "pid": 87
  },
  {
    "id": 1232,
    "name": "Temirtau",
    "name_zh": "铁米尔套",
    "pid": 87
  },
  {
    "id": 1233,
    "name": "Turkestan",
    "name_zh": "突厥斯坦",
    "pid": 87
  },
  {
    "id": 1234,
    "name": "Batys Qazaqstan",
    "name_zh": "西哈萨克斯坦",
    "pid": 87
  },
  {
    "id": 1235,
    "name": "Zhanaozen",
    "name_zh": "扎纳奥津",
    "pid": 87
  },
  {
    "id": 1236,
    "name": "Almere",
    "name_zh": "阿尔梅勒",
    "pid": 90
  },
  {
    "id": 1237,
    "name": "Amersfoort",
    "name_zh": "阿默斯福特",
    "pid": 90
  },
  {
    "id": 1238,
    "name": "Amsterdam",
    "name_zh": "阿姆斯特丹",
    "pid": 90
  },
  {
    "id": 1239,
    "name": "Arnhem",
    "name_zh": "阿纳姆",
    "pid": 90
  },
  {
    "id": 1240,
    "name": "Apeldoorn",
    "name_zh": "阿珀尔多伦",
    "pid": 90
  },
  {
    "id": 1241,
    "name": "Assen",
    "name_zh": "阿森",
    "pid": 90
  },
  {
    "id": 1242,
    "name": "Ede",
    "name_zh": "埃德",
    "pid": 90
  },
  {
    "id": 1243,
    "name": "Emmen",
    "name_zh": "埃门",
    "pid": 90
  },
  {
    "id": 1244,
    "name": "Eindhoven",
    "name_zh": "埃因霍芬",
    "pid": 90
  },
  {
    "id": 1245,
    "name": "Breda",
    "name_zh": "布雷达",
    "pid": 90
  },
  {
    "id": 1246,
    "name": "Tilburg",
    "name_zh": "蒂尔堡",
    "pid": 90
  },
  {
    "id": 1247,
    "name": "Dordrecht",
    "name_zh": "多德雷赫特",
    "pid": 90
  },
  {
    "id": 1248,
    "name": "Enschede",
    "name_zh": "恩斯赫德",
    "pid": 90
  },
  {
    "id": 1249,
    "name": "Groningen",
    "name_zh": "格罗宁根",
    "pid": 90
  },
  {
    "id": 1250,
    "name": "Haarlem",
    "name_zh": "哈勒姆",
    "pid": 90
  },
  {
    "id": 1251,
    "name": "Hague",
    "name_zh": "海牙",
    "pid": 90
  },
  {
    "id": 1252,
    "name": "Hoofddorp",
    "name_zh": "霍夫多尔普",
    "pid": 90
  },
  {
    "id": 1253,
    "name": "Leiden",
    "name_zh": "莱顿",
    "pid": 90
  },
  {
    "id": 1254,
    "name": "Lelystad",
    "name_zh": "莱利斯塔德",
    "pid": 90
  },
  {
    "id": 1255,
    "name": "Rotterdam",
    "name_zh": "鹿特丹",
    "pid": 90
  },
  {
    "id": 1256,
    "name": "Leeuwarden",
    "name_zh": "吕伐登",
    "pid": 90
  },
  {
    "id": 1257,
    "name": "Maastricht",
    "name_zh": "马斯特里赫特",
    "pid": 90
  },
  {
    "id": 1258,
    "name": "Middelburg",
    "name_zh": "米德尔堡",
    "pid": 90
  },
  {
    "id": 1259,
    "name": "Nijmegen",
    "name_zh": "奈梅亨",
    "pid": 90
  },
  {
    "id": 1260,
    "name": "'s-Hertogenbosch",
    "name_zh": "斯海尔托亨博思",
    "pid": 90
  },
  {
    "id": 1261,
    "name": "Utrecht",
    "name_zh": "乌得勒支",
    "pid": 90
  },
  {
    "id": 1262,
    "name": "Zwolle",
    "name_zh": "兹沃勒",
    "pid": 90
  },
  {
    "id": 1263,
    "name": "Zoetermeer",
    "name_zh": "佐特尔梅",
    "pid": 90
  },
  {
    "id": 1264,
    "name": "Atlantida",
    "name_zh": "阿特兰蒂达",
    "pid": 93
  },
  {
    "id": 1265,
    "name": "El Paraiso",
    "name_zh": "埃尔帕拉伊索",
    "pid": 93
  },
  {
    "id": 1266,
    "name": "Ocotepeque",
    "name_zh": "奥科特佩克",
    "pid": 93
  },
  {
    "id": 1267,
    "name": "Olancho",
    "name_zh": "奥兰乔",
    "pid": 93
  },
  {
    "id": 1268,
    "name": "Francisco Morazan",
    "name_zh": "弗朗西斯科-莫拉桑",
    "pid": 93
  },
  {
    "id": 1269,
    "name": "Gracias a Dios",
    "name_zh": "格拉西亚斯-阿迪奥斯",
    "pid": 93
  },
  {
    "id": 1270,
    "name": "Islas de la Bahia",
    "name_zh": "海湾群岛",
    "pid": 93
  },
  {
    "id": 1271,
    "name": "Cortes",
    "name_zh": "科尔特斯",
    "pid": 93
  },
  {
    "id": 1272,
    "name": "Colon",
    "name_zh": "科隆",
    "pid": 93
  },
  {
    "id": 1273,
    "name": "Comayagua",
    "name_zh": "科马亚瓜",
    "pid": 93
  },
  {
    "id": 1274,
    "name": "Copan",
    "name_zh": "科潘",
    "pid": 93
  },
  {
    "id": 1275,
    "name": "La Paz",
    "name_zh": "拉巴斯",
    "pid": 93
  },
  {
    "id": 1276,
    "name": "Lempira",
    "name_zh": "伦皮拉",
    "pid": 93
  },
  {
    "id": 1277,
    "name": "Choluteca",
    "name_zh": "乔卢特卡",
    "pid": 93
  },
  {
    "id": 1278,
    "name": "Choloma",
    "name_zh": "乔罗马",
    "pid": 93
  },
  {
    "id": 1279,
    "name": "Valle",
    "name_zh": "山谷",
    "pid": 93
  },
  {
    "id": 1280,
    "name": "Santa Barbara",
    "name_zh": "圣巴巴拉",
    "pid": 93
  },
  {
    "id": 1281,
    "name": "Intibuca",
    "name_zh": "因蒂布卡",
    "pid": 93
  },
  {
    "id": 1282,
    "name": "Yoro",
    "name_zh": "约罗",
    "pid": 93
  },
  {
    "id": 1283,
    "name": "Phoenix Islands",
    "name_zh": "菲尼克斯群岛",
    "pid": 94
  },
  {
    "id": 1284,
    "name": "Gilberts Islands",
    "name_zh": "吉尔伯特群岛",
    "pid": 94
  },
  {
    "id": 1285,
    "name": "Line Islands",
    "name_zh": "莱恩群岛",
    "pid": 94
  },
  {
    "id": 1286,
    "name": "Ali Sabih",
    "name_zh": "阿里萨比赫区",
    "pid": 95
  },
  {
    "id": 1287,
    "name": "Obock",
    "name_zh": "奥博克区",
    "pid": 95
  },
  {
    "id": 1288,
    "name": "Dikhil",
    "name_zh": "迪基勒区",
    "pid": 95
  },
  {
    "id": 1289,
    "name": "Tadjoura",
    "name_zh": "塔朱拉区",
    "pid": 95
  },
  {
    "id": 1290,
    "name": "Osh",
    "name_zh": "奥什",
    "pid": 96
  },
  {
    "id": 1291,
    "name": "Batken",
    "name_zh": "巴特肯",
    "pid": 96
  },
  {
    "id": 1292,
    "name": "Bishkek",
    "name_zh": "比什凯克市",
    "pid": 96
  },
  {
    "id": 1293,
    "name": "Chuy",
    "name_zh": "楚河",
    "pid": 96
  },
  {
    "id": 1294,
    "name": "Jalal-Abad",
    "name_zh": "贾拉拉巴德",
    "pid": 96
  },
  {
    "id": 1295,
    "name": "Karabalta",
    "name_zh": "卡拉巴尔塔",
    "pid": 96
  },
  {
    "id": 1296,
    "name": "Kara-Kol",
    "name_zh": "卡拉库尔",
    "pid": 96
  },
  {
    "id": 1297,
    "name": "Kant",
    "name_zh": "坎特",
    "pid": 96
  },
  {
    "id": 1298,
    "name": "Kok-Jangak",
    "name_zh": "科克扬加克",
    "pid": 96
  },
  {
    "id": 1299,
    "name": "Mailuu-Suu",
    "name_zh": "迈利赛",
    "pid": 96
  },
  {
    "id": 1300,
    "name": "Naryn",
    "name_zh": "纳伦",
    "pid": 96
  },
  {
    "id": 1301,
    "name": "Suluktu",
    "name_zh": "苏卢克图",
    "pid": 96
  },
  {
    "id": 1302,
    "name": "Talas",
    "name_zh": "塔拉斯",
    "pid": 96
  },
  {
    "id": 1303,
    "name": "Tash-Kumyr",
    "name_zh": "塔什库梅尔",
    "pid": 96
  },
  {
    "id": 1304,
    "name": "Uzgen",
    "name_zh": "乌兹根",
    "pid": 96
  },
  {
    "id": 1305,
    "name": "Ysyk-Kol",
    "name_zh": "伊塞克湖",
    "pid": 96
  },
  {
    "id": 1306,
    "name": "Boke",
    "name_zh": "博凯",
    "pid": 97
  },
  {
    "id": 1307,
    "name": "Nzerekore",
    "name_zh": "恩泽雷科雷",
    "pid": 97
  },
  {
    "id": 1308,
    "name": "Faranah",
    "name_zh": "法拉纳",
    "pid": 97
  },
  {
    "id": 1309,
    "name": "Kindia",
    "name_zh": "金迪亚",
    "pid": 97
  },
  {
    "id": 1310,
    "name": "Kankan",
    "name_zh": "康康",
    "pid": 97
  },
  {
    "id": 1311,
    "name": "Conakry",
    "name_zh": "科纳克里",
    "pid": 97
  },
  {
    "id": 1312,
    "name": "Labe",
    "name_zh": "拉贝",
    "pid": 97
  },
  {
    "id": 1313,
    "name": "Mamou",
    "name_zh": "玛木",
    "pid": 97
  },
  {
    "id": 1314,
    "name": "Abbotsford",
    "name_zh": "阿伯茨福",
    "pid": 99
  },
  {
    "id": 1315,
    "name": "Edmonton",
    "name_zh": "埃德蒙顿",
    "pid": 99
  },
  {
    "id": 1316,
    "name": "Oshawa",
    "name_zh": "奥沙瓦",
    "pid": 99
  },
  {
    "id": 1317,
    "name": "Barrie",
    "name_zh": "巴里",
    "pid": 99
  },
  {
    "id": 1318,
    "name": "Cape Breton",
    "name_zh": "布列塔尼角",
    "pid": 99
  },
  {
    "id": 1319,
    "name": "Toronto",
    "name_zh": "多伦多",
    "pid": 99
  },
  {
    "id": 1320,
    "name": "Fredericton",
    "name_zh": "弗雷德里顿",
    "pid": 99
  },
  {
    "id": 1321,
    "name": "Guelph",
    "name_zh": "圭尔夫",
    "pid": 99
  },
  {
    "id": 1322,
    "name": "Halifax",
    "name_zh": "哈利法克斯",
    "pid": 99
  },
  {
    "id": 1323,
    "name": "Hamilton",
    "name_zh": "哈密尔顿",
    "pid": 99
  },
  {
    "id": 1324,
    "name": "Whitehorse",
    "name_zh": "怀特霍斯",
    "pid": 99
  },
  {
    "id": 1325,
    "name": "Kelowna",
    "name_zh": "基劳纳",
    "pid": 99
  },
  {
    "id": 1326,
    "name": "Brampton",
    "name_zh": "基奇纳",
    "pid": 99
  },
  {
    "id": 1327,
    "name": "Kingston",
    "name_zh": "金斯敦",
    "pid": 99
  },
  {
    "id": 1328,
    "name": "Calgary",
    "name_zh": "卡里加里",
    "pid": 99
  },
  {
    "id": 1329,
    "name": "Quebec",
    "name_zh": "魁北克",
    "pid": 99
  },
  {
    "id": 1330,
    "name": "Regina",
    "name_zh": "里贾纳",
    "pid": 99
  },
  {
    "id": 1331,
    "name": "London",
    "name_zh": "伦敦",
    "pid": 99
  },
  {
    "id": 1332,
    "name": "Montreal",
    "name_zh": "蒙特利尔",
    "pid": 99
  },
  {
    "id": 1333,
    "name": "Sudbury",
    "name_zh": "萨德伯里",
    "pid": 99
  },
  {
    "id": 1334,
    "name": "Saskatoon",
    "name_zh": "萨斯卡通",
    "pid": 99
  },
  {
    "id": 1335,
    "name": "Trois-Rivieres",
    "name_zh": "三河城",
    "pid": 99
  },
  {
    "id": 1336,
    "name": "Thunder Bay",
    "name_zh": "桑德贝",
    "pid": 99
  },
  {
    "id": 1337,
    "name": "Sherbrooke",
    "name_zh": "舍布鲁克",
    "pid": 99
  },
  {
    "id": 1338,
    "name": "St. Catharines",
    "name_zh": "圣卡塔琳娜",
    "pid": 99
  },
  {
    "id": 1339,
    "name": "Saint-John's",
    "name_zh": "圣约翰斯",
    "pid": 99
  },
  {
    "id": 1340,
    "name": "Victoria",
    "name_zh": "维多利亚",
    "pid": 99
  },
  {
    "id": 1341,
    "name": "Vancouver",
    "name_zh": "温哥华",
    "pid": 99
  },
  {
    "id": 1342,
    "name": "Winnipeg",
    "name_zh": "温尼伯",
    "pid": 99
  },
  {
    "id": 1343,
    "name": "Windsor",
    "name_zh": "温莎",
    "pid": 99
  },
  {
    "id": 1344,
    "name": "Ottawa",
    "name_zh": "渥太华",
    "pid": 99
  },
  {
    "id": 1345,
    "name": "Charlottetown",
    "name_zh": "夏洛特敦",
    "pid": 99
  },
  {
    "id": 1346,
    "name": "Yellowknife",
    "name_zh": "耶洛奈夫",
    "pid": 99
  },
  {
    "id": 1347,
    "name": "Iqaluit",
    "name_zh": "伊魁特",
    "pid": 99
  },
  {
    "id": 1348,
    "name": "Ashanti",
    "name_zh": "阿散蒂",
    "pid": 100
  },
  {
    "id": 1349,
    "name": "Obuasi",
    "name_zh": "奥布阿西",
    "pid": 100
  },
  {
    "id": 1350,
    "name": "Northern",
    "name_zh": "北部",
    "pid": 100
  },
  {
    "id": 1351,
    "name": "Brong Ahafo",
    "name_zh": "布朗阿哈福",
    "pid": 100
  },
  {
    "id": 1352,
    "name": "Greater Accra",
    "name_zh": "大阿克拉",
    "pid": 100
  },
  {
    "id": 1353,
    "name": "Eastern",
    "name_zh": "东部",
    "pid": 100
  },
  {
    "id": 1354,
    "name": "Upper East",
    "name_zh": "上东部",
    "pid": 100
  },
  {
    "id": 1355,
    "name": "Upper West",
    "name_zh": "上西部",
    "pid": 100
  },
  {
    "id": 1356,
    "name": "Volta",
    "name_zh": "沃尔特",
    "pid": 100
  },
  {
    "id": 1357,
    "name": "Western",
    "name_zh": "西部",
    "pid": 100
  },
  {
    "id": 1358,
    "name": "Central",
    "name_zh": "中部",
    "pid": 100
  },
  {
    "id": 1359,
    "name": "Ogooue-Lolo",
    "name_zh": "奥果韦-洛洛",
    "pid": 101
  },
  {
    "id": 1360,
    "name": "Ogooue-Ivindo",
    "name_zh": "奥果韦-伊温多",
    "pid": 101
  },
  {
    "id": 1361,
    "name": "Ogooue-Maritime",
    "name_zh": "滨海奥果韦",
    "pid": 101
  },
  {
    "id": 1362,
    "name": "Ngounie",
    "name_zh": "恩古涅",
    "pid": 101
  },
  {
    "id": 1363,
    "name": "Estuaire",
    "name_zh": "河口",
    "pid": 101
  },
  {
    "id": 1364,
    "name": "Nyanga",
    "name_zh": "尼扬加",
    "pid": 101
  },
  {
    "id": 1365,
    "name": "Haut-Ogooue",
    "name_zh": "上奥果韦",
    "pid": 101
  },
  {
    "id": 1366,
    "name": "Woleu-Ntem",
    "name_zh": "沃勒-恩特姆",
    "pid": 101
  },
  {
    "id": 1367,
    "name": "Moyen-Ogooue",
    "name_zh": "中奥果韦",
    "pid": 101
  },
  {
    "id": 1368,
    "name": "Otdar Mean Chey",
    "name_zh": "奥多棉吉",
    "pid": 102
  },
  {
    "id": 1369,
    "name": "Krong Keb",
    "name_zh": "白马市",
    "pid": 102
  },
  {
    "id": 1370,
    "name": "Preah Vihear",
    "name_zh": "柏威夏",
    "pid": 102
  },
  {
    "id": 1371,
    "name": "Krong Pailin",
    "name_zh": "拜林市",
    "pid": 102
  },
  {
    "id": 1372,
    "name": "Banteay Mean Chey",
    "name_zh": "班迭棉吉",
    "pid": 102
  },
  {
    "id": 1373,
    "name": "Kampong Chhnang",
    "name_zh": "磅清扬",
    "pid": 102
  },
  {
    "id": 1374,
    "name": "Kampong Spoe",
    "name_zh": "磅士卑",
    "pid": 102
  },
  {
    "id": 1375,
    "name": "Kampong Thum",
    "name_zh": "磅同",
    "pid": 102
  },
  {
    "id": 1376,
    "name": "Kampong Cham",
    "name_zh": "磅湛",
    "pid": 102
  },
  {
    "id": 1377,
    "name": "Prey Veng",
    "name_zh": "波罗勉",
    "pid": 102
  },
  {
    "id": 1378,
    "name": "Takev",
    "name_zh": "茶胶",
    "pid": 102
  },
  {
    "id": 1379,
    "name": "Svay Rieng",
    "name_zh": "柴桢",
    "pid": 102
  },
  {
    "id": 1380,
    "name": "Kandal",
    "name_zh": "干丹",
    "pid": 102
  },
  {
    "id": 1381,
    "name": "Kaoh Kong",
    "name_zh": "戈公",
    "pid": 102
  },
  {
    "id": 1382,
    "name": "Kampot",
    "name_zh": "贡布",
    "pid": 102
  },
  {
    "id": 1383,
    "name": "Phnum Penh",
    "name_zh": "金边市",
    "pid": 102
  },
  {
    "id": 1384,
    "name": "Kracheh",
    "name_zh": "桔井",
    "pid": 102
  },
  {
    "id": 1385,
    "name": "Rotanak Kiri",
    "name_zh": "腊塔纳基里",
    "pid": 102
  },
  {
    "id": 1386,
    "name": "Bat Dambang",
    "name_zh": "马德望",
    "pid": 102
  },
  {
    "id": 1387,
    "name": "Mondol Kiri",
    "name_zh": "蒙多基里",
    "pid": 102
  },
  {
    "id": 1388,
    "name": "Pouthĭsat",
    "name_zh": "菩萨",
    "pid": 102
  },
  {
    "id": 1389,
    "name": "Stoeng Treng",
    "name_zh": "上丁",
    "pid": 102
  },
  {
    "id": 1390,
    "name": "Krong Preah",
    "name_zh": "西哈努克市",
    "pid": 102
  },
  {
    "id": 1391,
    "name": "Siem Reab",
    "name_zh": "暹粒",
    "pid": 102
  },
  {
    "id": 1392,
    "name": "Olomoucky",
    "name_zh": "奥洛穆茨",
    "pid": 103
  },
  {
    "id": 1393,
    "name": "Plzensky",
    "name_zh": "比尔森",
    "pid": 103
  },
  {
    "id": 1394,
    "name": "Prague",
    "name_zh": "布拉格直辖市",
    "pid": 103
  },
  {
    "id": 1395,
    "name": "Kralovehradecky",
    "name_zh": "赫拉德茨-克拉洛韦",
    "pid": 103
  },
  {
    "id": 1396,
    "name": "Karlovarsky",
    "name_zh": "卡罗维发利",
    "pid": 103
  },
  {
    "id": 1397,
    "name": "Liberecky",
    "name_zh": "利贝雷克",
    "pid": 103
  },
  {
    "id": 1398,
    "name": "Moravskoslezsky",
    "name_zh": "摩拉维亚-西里西亚",
    "pid": 103
  },
  {
    "id": 1399,
    "name": "Jihomoravsky",
    "name_zh": "南摩拉维亚",
    "pid": 103
  },
  {
    "id": 1400,
    "name": "Pardubicky",
    "name_zh": "帕尔杜比采",
    "pid": 103
  },
  {
    "id": 1401,
    "name": "Vysocina",
    "name_zh": "维索基纳",
    "pid": 103
  },
  {
    "id": 1402,
    "name": "Ustecky",
    "name_zh": "乌斯季",
    "pid": 103
  },
  {
    "id": 1403,
    "name": "Stredocesky",
    "name_zh": "中捷克",
    "pid": 103
  },
  {
    "id": 1404,
    "name": "Zlinsky",
    "name_zh": "兹林",
    "pid": 103
  },
  {
    "id": 1405,
    "name": "Matabeleland North",
    "name_zh": "北马塔贝莱兰",
    "pid": 104
  },
  {
    "id": 1406,
    "name": "Bulawayo",
    "name_zh": "布拉瓦约",
    "pid": 104
  },
  {
    "id": 1407,
    "name": "Mashonaland East",
    "name_zh": "东马绍纳兰",
    "pid": 104
  },
  {
    "id": 1408,
    "name": "Harare",
    "name_zh": "哈拉雷",
    "pid": 104
  },
  {
    "id": 1409,
    "name": "Manicaland",
    "name_zh": "马尼卡兰",
    "pid": 104
  },
  {
    "id": 1410,
    "name": "Masvingo",
    "name_zh": "马斯温戈",
    "pid": 104
  },
  {
    "id": 1411,
    "name": "Matabeleland South",
    "name_zh": "南马塔贝莱兰",
    "pid": 104
  },
  {
    "id": 1412,
    "name": "Mashonaland West",
    "name_zh": "西马绍纳兰",
    "pid": 104
  },
  {
    "id": 1413,
    "name": "Midlands",
    "name_zh": "中部",
    "pid": 104
  },
  {
    "id": 1414,
    "name": "Mashonaland Central",
    "name_zh": "中马绍纳兰",
    "pid": 104
  },
  {
    "id": 1415,
    "name": "Adamaoua",
    "name_zh": "阿达马瓦",
    "pid": 105
  },
  {
    "id": 1416,
    "name": "Nord",
    "name_zh": "北部",
    "pid": 105
  },
  {
    "id": 1417,
    "name": "Extreme-Nord",
    "name_zh": "北端",
    "pid": 105
  },
  {
    "id": 1418,
    "name": "Littoral",
    "name_zh": "滨海",
    "pid": 105
  },
  {
    "id": 1419,
    "name": "Est",
    "name_zh": "东部",
    "pid": 105
  },
  {
    "id": 1420,
    "name": "Sud",
    "name_zh": "南部",
    "pid": 105
  },
  {
    "id": 1421,
    "name": "Nord-Oueste",
    "name_zh": "西北",
    "pid": 105
  },
  {
    "id": 1422,
    "name": "Ouest",
    "name_zh": "西部",
    "pid": 105
  },
  {
    "id": 1423,
    "name": "Sud-Oueste",
    "name_zh": "西南",
    "pid": 105
  },
  {
    "id": 1424,
    "name": "Centre",
    "name_zh": "中央",
    "pid": 105
  },
  {
    "id": 1425,
    "name": "Madinat ach Shamal",
    "name_zh": "北部",
    "pid": 106
  },
  {
    "id": 1426,
    "name": "Ad Dawhah",
    "name_zh": "多哈",
    "pid": 106
  },
  {
    "id": 1427,
    "name": "Al Ghuwariyah",
    "name_zh": "古韦里耶",
    "pid": 106
  },
  {
    "id": 1428,
    "name": "Al Khawr",
    "name_zh": "豪尔",
    "pid": 106
  },
  {
    "id": 1429,
    "name": "Jariyan al Batnah",
    "name_zh": "杰里扬拜特奈",
    "pid": 106
  },
  {
    "id": 1430,
    "name": "Ar Rayyan",
    "name_zh": "赖扬",
    "pid": 106
  },
  {
    "id": 1431,
    "name": "Al Wakrah",
    "name_zh": "沃克拉",
    "pid": 106
  },
  {
    "id": 1432,
    "name": "Umm Salal",
    "name_zh": "乌姆锡拉勒",
    "pid": 106
  },
  {
    "id": 1433,
    "name": "Al Jumaliyah",
    "name_zh": "朱迈利耶",
    "pid": 106
  },
  {
    "id": 1434,
    "name": "Agnebi",
    "name_zh": "阿涅比",
    "pid": 110
  },
  {
    "id": 1435,
    "name": "Bafing",
    "name_zh": "巴芬",
    "pid": 110
  },
  {
    "id": 1436,
    "name": "Vallee du Bandama",
    "name_zh": "邦达马河谷",
    "pid": 110
  },
  {
    "id": 1437,
    "name": "Denguele",
    "name_zh": "登盖莱",
    "pid": 110
  },
  {
    "id": 1438,
    "name": "Nzi-Comoe",
    "name_zh": "恩济－科莫埃",
    "pid": 110
  },
  {
    "id": 1439,
    "name": "Fromager",
    "name_zh": "弗罗马格尔",
    "pid": 110
  },
  {
    "id": 1440,
    "name": "Lacs",
    "name_zh": "湖泊",
    "pid": 110
  },
  {
    "id": 1441,
    "name": "Marahoue",
    "name_zh": "马拉韦",
    "pid": 110
  },
  {
    "id": 1442,
    "name": "Sud-Bandama",
    "name_zh": "南邦达马",
    "pid": 110
  },
  {
    "id": 1443,
    "name": "Sud-Comoe",
    "name_zh": "南科莫埃",
    "pid": 110
  },
  {
    "id": 1444,
    "name": "Haut-Sassandra",
    "name_zh": "萨桑德拉",
    "pid": 110
  },
  {
    "id": 1445,
    "name": "Savanes",
    "name_zh": "萨瓦纳",
    "pid": 110
  },
  {
    "id": 1446,
    "name": "Montagnes",
    "name_zh": "山地",
    "pid": 110
  },
  {
    "id": 1447,
    "name": "Worodougou",
    "name_zh": "沃罗杜古",
    "pid": 110
  },
  {
    "id": 1448,
    "name": "Bas-Sassandra",
    "name_zh": "下萨桑德拉",
    "pid": 110
  },
  {
    "id": 1449,
    "name": "Lagunes",
    "name_zh": "泻湖",
    "pid": 110
  },
  {
    "id": 1450,
    "name": "Zanzan",
    "name_zh": "赞赞",
    "pid": 110
  },
  {
    "id": 1451,
    "name": "Moyen-Cavally",
    "name_zh": "中卡瓦利",
    "pid": 110
  },
  {
    "id": 1452,
    "name": "Moyen-Comoe",
    "name_zh": "中科莫埃",
    "pid": 110
  },
  {
    "id": 1453,
    "name": "Osjecko-Baranjska",
    "name_zh": "奥西耶克-巴拉尼亚",
    "pid": 112
  },
  {
    "id": 1454,
    "name": "Bjelovarsko-Bilogorska",
    "name_zh": "别洛瓦尔-比洛戈拉",
    "pid": 112
  },
  {
    "id": 1455,
    "name": "Primorsko-Goranska",
    "name_zh": "滨海和山区",
    "pid": 112
  },
  {
    "id": 1456,
    "name": "Pozega-Slavonia",
    "name_zh": "波热加-斯拉沃尼亚",
    "pid": 112
  },
  {
    "id": 1457,
    "name": "Brodsko-Posavska",
    "name_zh": "布罗德-波萨维纳",
    "pid": 112
  },
  {
    "id": 1458,
    "name": "Dubrovacko-Neretvanska",
    "name_zh": "杜布罗夫斯克-内雷特瓦",
    "pid": 112
  },
  {
    "id": 1459,
    "name": "Karlovacka",
    "name_zh": "卡尔洛瓦茨",
    "pid": 112
  },
  {
    "id": 1460,
    "name": "Koprivnicko-Krizevacka",
    "name_zh": "科普里夫尼察-克里热夫齐",
    "pid": 112
  },
  {
    "id": 1461,
    "name": "Krapinsko-Zagorska",
    "name_zh": "克拉皮纳-扎戈列",
    "pid": 112
  },
  {
    "id": 1462,
    "name": "Licko-Senjska",
    "name_zh": "利卡-塞尼",
    "pid": 112
  },
  {
    "id": 1463,
    "name": "Medimurska",
    "name_zh": "梅吉穆列",
    "pid": 112
  },
  {
    "id": 1464,
    "name": "Zagrebacka",
    "name_zh": "萨格勒布",
    "pid": 112
  },
  {
    "id": 1465,
    "name": "Grad Zagreb",
    "name_zh": "萨格勒布市",
    "pid": 112
  },
  {
    "id": 1466,
    "name": "Splitsko-Dalmatinska",
    "name_zh": "斯普利特-达尔马提亚",
    "pid": 112
  },
  {
    "id": 1467,
    "name": "Varazdinska",
    "name_zh": "瓦拉日丁",
    "pid": 112
  },
  {
    "id": 1468,
    "name": "Viroviticko-Podravska",
    "name_zh": "维罗维蒂察-波德拉维纳",
    "pid": 112
  },
  {
    "id": 1469,
    "name": "Vukovarsko-Srijemska",
    "name_zh": "武科瓦尔-斯里耶姆",
    "pid": 112
  },
  {
    "id": 1470,
    "name": "Sibensko-Kninska",
    "name_zh": "希贝尼克-克宁",
    "pid": 112
  },
  {
    "id": 1471,
    "name": "Sisacko-Moslavacka",
    "name_zh": "锡萨克-莫斯拉维纳",
    "pid": 112
  },
  {
    "id": 1472,
    "name": "Istarska",
    "name_zh": "伊斯特拉",
    "pid": 112
  },
  {
    "id": 1473,
    "name": "Zadarska",
    "name_zh": "扎达尔",
    "pid": 112
  },
  {
    "id": 1474,
    "name": "Elgeyo-Marakwet",
    "name_zh": "埃尔格约-马拉奎特",
    "pid": 113
  },
  {
    "id": 1475,
    "name": "Baringo",
    "name_zh": "巴林戈",
    "pid": 113
  },
  {
    "id": 1476,
    "name": "Bungoma",
    "name_zh": "邦戈马",
    "pid": 113
  },
  {
    "id": 1477,
    "name": "Bomet",
    "name_zh": "博美特",
    "pid": 113
  },
  {
    "id": 1478,
    "name": "Busia",
    "name_zh": "布希亚",
    "pid": 113
  },
  {
    "id": 1479,
    "name": "Embu",
    "name_zh": "恩布",
    "pid": 113
  },
  {
    "id": 1480,
    "name": "Homa Bay",
    "name_zh": "霍马湾",
    "pid": 113
  },
  {
    "id": 1481,
    "name": "Kiambu",
    "name_zh": "基安布",
    "pid": 113
  },
  {
    "id": 1482,
    "name": "Kilifi",
    "name_zh": "基里菲",
    "pid": 113
  },
  {
    "id": 1483,
    "name": "Kirinyaga",
    "name_zh": "基里尼亚加",
    "pid": 113
  },
  {
    "id": 1484,
    "name": "Kisumu",
    "name_zh": "基苏木",
    "pid": 113
  },
  {
    "id": 1485,
    "name": "Kitui",
    "name_zh": "基图伊",
    "pid": 113
  },
  {
    "id": 1486,
    "name": "Kisii",
    "name_zh": "基西",
    "pid": 113
  },
  {
    "id": 1487,
    "name": "Garissa",
    "name_zh": "加里萨",
    "pid": 113
  },
  {
    "id": 1488,
    "name": "Kakamega",
    "name_zh": "卡卡梅加",
    "pid": 113
  },
  {
    "id": 1489,
    "name": "Kajiado",
    "name_zh": "卡耶亚多",
    "pid": 113
  },
  {
    "id": 1490,
    "name": "Kericho",
    "name_zh": "凯里乔",
    "pid": 113
  },
  {
    "id": 1491,
    "name": "Kwale",
    "name_zh": "夸勒",
    "pid": 113
  },
  {
    "id": 1492,
    "name": "Lamu",
    "name_zh": "拉木",
    "pid": 113
  },
  {
    "id": 1493,
    "name": "Laikipia",
    "name_zh": "莱基皮亚",
    "pid": 113
  },
  {
    "id": 1494,
    "name": "Machakos",
    "name_zh": "马查科斯",
    "pid": 113
  },
  {
    "id": 1495,
    "name": "Makueni",
    "name_zh": "马瓜尼",
    "pid": 113
  },
  {
    "id": 1496,
    "name": "Marsabit",
    "name_zh": "马萨布布",
    "pid": 113
  },
  {
    "id": 1497,
    "name": "Mandera",
    "name_zh": "曼德拉",
    "pid": 113
  },
  {
    "id": 1498,
    "name": "Meru",
    "name_zh": "梅鲁",
    "pid": 113
  },
  {
    "id": 1499,
    "name": "Mombasa",
    "name_zh": "蒙巴萨",
    "pid": 113
  },
  {
    "id": 1500,
    "name": "Migori",
    "name_zh": "米戈利",
    "pid": 113
  },
  {
    "id": 1501,
    "name": "Muranga",
    "name_zh": "穆兰卡",
    "pid": 113
  },
  {
    "id": 1502,
    "name": "Nakuru",
    "name_zh": "纳库鲁",
    "pid": 113
  },
  {
    "id": 1503,
    "name": "Narok",
    "name_zh": "纳罗克",
    "pid": 113
  },
  {
    "id": 1504,
    "name": "Nandi",
    "name_zh": "南迪",
    "pid": 113
  },
  {
    "id": 1505,
    "name": "Nairobi",
    "name_zh": "内罗毕",
    "pid": 113
  },
  {
    "id": 1506,
    "name": "Nithi",
    "name_zh": "尼蒂",
    "pid": 113
  },
  {
    "id": 1507,
    "name": "Nyamira",
    "name_zh": "尼亚米拉",
    "pid": 113
  },
  {
    "id": 1508,
    "name": "Nyandarua",
    "name_zh": "年达鲁阿",
    "pid": 113
  },
  {
    "id": 1509,
    "name": "Nyeri",
    "name_zh": "涅里",
    "pid": 113
  },
  {
    "id": 1510,
    "name": "Samburu",
    "name_zh": "桑布卢",
    "pid": 113
  },
  {
    "id": 1511,
    "name": "Tana River",
    "name_zh": "塔纳河",
    "pid": 113
  },
  {
    "id": 1512,
    "name": "Taita-Taveta",
    "name_zh": "泰塔塔维塔",
    "pid": 113
  },
  {
    "id": 1513,
    "name": "Trans-Nzoia",
    "name_zh": "特兰斯-恩佐亚",
    "pid": 113
  },
  {
    "id": 1514,
    "name": "Turkana",
    "name_zh": "图尔卡纳",
    "pid": 113
  },
  {
    "id": 1515,
    "name": "Wajir",
    "name_zh": "瓦吉尔",
    "pid": 113
  },
  {
    "id": 1516,
    "name": "Uasin Gishu",
    "name_zh": "瓦辛基苏",
    "pid": 113
  },
  {
    "id": 1517,
    "name": "Vihiga",
    "name_zh": "韦希加",
    "pid": 113
  },
  {
    "id": 1518,
    "name": "West Pokot",
    "name_zh": "西波克特",
    "pid": 113
  },
  {
    "id": 1519,
    "name": "Siaya",
    "name_zh": "夏亚",
    "pid": 113
  },
  {
    "id": 1520,
    "name": "Isiolo",
    "name_zh": "伊希约洛",
    "pid": 113
  },
  {
    "id": 1521,
    "name": "Central",
    "name_zh": "中央",
    "pid": 113
  },
  {
    "id": 1522,
    "name": "Aluksnes",
    "name_zh": "阿卢克斯内",
    "pid": 115
  },
  {
    "id": 1523,
    "name": "Aizkraukles",
    "name_zh": "爱兹克劳克雷",
    "pid": 115
  },
  {
    "id": 1524,
    "name": "Ogres",
    "name_zh": "奥格雷",
    "pid": 115
  },
  {
    "id": 1525,
    "name": "Balvu",
    "name_zh": "巴尔维",
    "pid": 115
  },
  {
    "id": 1526,
    "name": "Bauskas",
    "name_zh": "包斯卡",
    "pid": 115
  },
  {
    "id": 1527,
    "name": "Cesu",
    "name_zh": "采西斯",
    "pid": 115
  },
  {
    "id": 1528,
    "name": "Dobeles",
    "name_zh": "多贝莱",
    "pid": 115
  },
  {
    "id": 1529,
    "name": "Gulbenes",
    "name_zh": "古尔贝内",
    "pid": 115
  },
  {
    "id": 1530,
    "name": "Jekabpils",
    "name_zh": "杰卡布皮尔斯",
    "pid": 115
  },
  {
    "id": 1531,
    "name": "Kraslavas",
    "name_zh": "克拉斯拉瓦",
    "pid": 115
  },
  {
    "id": 1532,
    "name": "Kuldigas",
    "name_zh": "库尔迪加",
    "pid": 115
  },
  {
    "id": 1533,
    "name": "Rezeknes",
    "name_zh": "雷泽克内",
    "pid": 115
  },
  {
    "id": 1534,
    "name": "Rigas",
    "name_zh": "里加",
    "pid": 115
  },
  {
    "id": 1535,
    "name": "Liepajas",
    "name_zh": "利耶帕亚",
    "pid": 115
  },
  {
    "id": 1536,
    "name": "Limbazu",
    "name_zh": "林巴济",
    "pid": 115
  },
  {
    "id": 1537,
    "name": "Ludzas",
    "name_zh": "卢扎",
    "pid": 115
  },
  {
    "id": 1538,
    "name": "Madonas",
    "name_zh": "马多纳",
    "pid": 115
  },
  {
    "id": 1539,
    "name": "Preilu",
    "name_zh": "普雷利",
    "pid": 115
  },
  {
    "id": 1540,
    "name": "Saldus",
    "name_zh": "萨尔杜斯",
    "pid": 115
  },
  {
    "id": 1541,
    "name": "Talsu",
    "name_zh": "塔尔西",
    "pid": 115
  },
  {
    "id": 1542,
    "name": "Daugavpils",
    "name_zh": "陶格夫皮尔斯",
    "pid": 115
  },
  {
    "id": 1543,
    "name": "Tukuma",
    "name_zh": "图库马",
    "pid": 115
  },
  {
    "id": 1544,
    "name": "Valkas",
    "name_zh": "瓦尔加",
    "pid": 115
  },
  {
    "id": 1545,
    "name": "Valmieras",
    "name_zh": "瓦尔米耶拉",
    "pid": 115
  },
  {
    "id": 1546,
    "name": "Ventspils",
    "name_zh": "文茨皮尔斯",
    "pid": 115
  },
  {
    "id": 1547,
    "name": "Jelgavas",
    "name_zh": "叶尔加瓦",
    "pid": 115
  },
  {
    "id": 1548,
    "name": "Berea",
    "name_zh": "伯里亚",
    "pid": 116
  },
  {
    "id": 1549,
    "name": "Butha-Buthe",
    "name_zh": "布塔布泰",
    "pid": 116
  },
  {
    "id": 1550,
    "name": "Quthing",
    "name_zh": "古廷",
    "pid": 116
  },
  {
    "id": 1551,
    "name": "Qachas Nek",
    "name_zh": "加查斯内克",
    "pid": 116
  },
  {
    "id": 1552,
    "name": "Leribe",
    "name_zh": "莱里贝",
    "pid": 116
  },
  {
    "id": 1553,
    "name": "Mafeteng",
    "name_zh": "马费滕",
    "pid": 116
  },
  {
    "id": 1554,
    "name": "Maseru",
    "name_zh": "马塞卢",
    "pid": 116
  },
  {
    "id": 1555,
    "name": "Mohales Hoek",
    "name_zh": "莫哈莱斯胡克",
    "pid": 116
  },
  {
    "id": 1556,
    "name": "Mokhotlong",
    "name_zh": "莫霍特隆",
    "pid": 116
  },
  {
    "id": 1557,
    "name": "Thaba-Tseka",
    "name_zh": "塔巴采卡",
    "pid": 116
  },
  {
    "id": 1558,
    "name": "Attapu",
    "name_zh": "阿速坡",
    "pid": 117
  },
  {
    "id": 1559,
    "name": "Bolikhamxai",
    "name_zh": "波里坎赛",
    "pid": 117
  },
  {
    "id": 1560,
    "name": "Bokeo",
    "name_zh": "博乔",
    "pid": 117
  },
  {
    "id": 1561,
    "name": "Xiangkhoang",
    "name_zh": "川圹",
    "pid": 117
  },
  {
    "id": 1562,
    "name": "Phongsali",
    "name_zh": "丰沙里",
    "pid": 117
  },
  {
    "id": 1563,
    "name": "Khammouan",
    "name_zh": "甘蒙",
    "pid": 117
  },
  {
    "id": 1564,
    "name": "Houaphan",
    "name_zh": "华潘",
    "pid": 117
  },
  {
    "id": 1565,
    "name": "Louangphrabang",
    "name_zh": "琅勃拉邦",
    "pid": 117
  },
  {
    "id": 1566,
    "name": "Louang Namtha",
    "name_zh": "琅南塔",
    "pid": 117
  },
  {
    "id": 1567,
    "name": "Xaisomboun",
    "name_zh": "赛宋本行政特区",
    "pid": 117
  },
  {
    "id": 1568,
    "name": "Xekong",
    "name_zh": "色贡",
    "pid": 117
  },
  {
    "id": 1569,
    "name": "Saravan",
    "name_zh": "沙拉湾",
    "pid": 117
  },
  {
    "id": 1570,
    "name": "Savannakhet",
    "name_zh": "沙湾拿吉",
    "pid": 117
  },
  {
    "id": 1571,
    "name": "Xaignabouri",
    "name_zh": "沙耶武里",
    "pid": 117
  },
  {
    "id": 1572,
    "name": "Vientiane",
    "name_zh": "万象",
    "pid": 117
  },
  {
    "id": 1573,
    "name": "Oudomxai",
    "name_zh": "乌多姆赛",
    "pid": 117
  },
  {
    "id": 1574,
    "name": "Champasak",
    "name_zh": "占巴塞",
    "pid": 117
  },
  {
    "id": 1575,
    "name": "Ash-Shamal",
    "name_zh": "北部",
    "pid": 118
  },
  {
    "id": 1576,
    "name": "Al-Biqa",
    "name_zh": "贝卡",
    "pid": 118
  },
  {
    "id": 1577,
    "name": "Bayrut",
    "name_zh": "贝鲁特",
    "pid": 118
  },
  {
    "id": 1578,
    "name": "Jabal Lubnan",
    "name_zh": "黎巴嫩山",
    "pid": 118
  },
  {
    "id": 1579,
    "name": "An-Nabatiyah",
    "name_zh": "奈拜提耶市",
    "pid": 118
  },
  {
    "id": 1580,
    "name": "Al-Janub",
    "name_zh": "南部",
    "pid": 118
  },
  {
    "id": 1581,
    "name": "Gbarpolu",
    "name_zh": "巴波卢",
    "pid": 119
  },
  {
    "id": 1582,
    "name": "Bong",
    "name_zh": "邦",
    "pid": 119
  },
  {
    "id": 1583,
    "name": "Bopolu",
    "name_zh": "博波卢",
    "pid": 119
  },
  {
    "id": 1584,
    "name": "Bomi",
    "name_zh": "博米",
    "pid": 119
  },
  {
    "id": 1585,
    "name": "Grand Bassa",
    "name_zh": "大巴萨",
    "pid": 119
  },
  {
    "id": 1586,
    "name": "Grand Gedeh",
    "name_zh": "大吉德",
    "pid": 119
  },
  {
    "id": 1587,
    "name": "Grand Cape Mount",
    "name_zh": "大角山",
    "pid": 119
  },
  {
    "id": 1588,
    "name": "Grand Kru",
    "name_zh": "大克鲁",
    "pid": 119
  },
  {
    "id": 1589,
    "name": "Fish Town",
    "name_zh": "菲什敦",
    "pid": 119
  },
  {
    "id": 1590,
    "name": "River Gee",
    "name_zh": "吉河",
    "pid": 119
  },
  {
    "id": 1591,
    "name": "River Cess",
    "name_zh": "里弗塞斯",
    "pid": 119
  },
  {
    "id": 1592,
    "name": "Lofa",
    "name_zh": "洛法",
    "pid": 119
  },
  {
    "id": 1593,
    "name": "Margibi",
    "name_zh": "马吉比",
    "pid": 119
  },
  {
    "id": 1594,
    "name": "Maryland",
    "name_zh": "马里兰",
    "pid": 119
  },
  {
    "id": 1595,
    "name": "Montserrado",
    "name_zh": "蒙特塞拉多",
    "pid": 119
  },
  {
    "id": 1596,
    "name": "Nimba",
    "name_zh": "宁巴",
    "pid": 119
  },
  {
    "id": 1597,
    "name": "Sinoe",
    "name_zh": "锡诺",
    "pid": 119
  },
  {
    "id": 1598,
    "name": "Alytus",
    "name_zh": "阿利图斯",
    "pid": 121
  },
  {
    "id": 1599,
    "name": "Kaunas",
    "name_zh": "考纳斯",
    "pid": 121
  },
  {
    "id": 1600,
    "name": "Klaipeda",
    "name_zh": "克莱佩达",
    "pid": 121
  },
  {
    "id": 1601,
    "name": "Marijampole",
    "name_zh": "马里扬泊列",
    "pid": 121
  },
  {
    "id": 1602,
    "name": "Panevezys",
    "name_zh": "帕涅韦日斯",
    "pid": 121
  },
  {
    "id": 1603,
    "name": "Taurages",
    "name_zh": "陶拉格",
    "pid": 121
  },
  {
    "id": 1604,
    "name": "Telsiu",
    "name_zh": "特尔希艾",
    "pid": 121
  },
  {
    "id": 1605,
    "name": "Vilnius",
    "name_zh": "维尔纽斯",
    "pid": 121
  },
  {
    "id": 1606,
    "name": "Utenos",
    "name_zh": "乌田纳",
    "pid": 121
  },
  {
    "id": 1607,
    "name": "Siauliai",
    "name_zh": "希奥利艾",
    "pid": 121
  },
  {
    "id": 1608,
    "name": "Akmenes",
    "name_zh": "亚克曼",
    "pid": 121
  },
  {
    "id": 1609,
    "name": "Diekirch",
    "name_zh": "迪基希",
    "pid": 124
  },
  {
    "id": 1610,
    "name": "Grevenmacher",
    "name_zh": "格雷文马赫",
    "pid": 124
  },
  {
    "id": 1611,
    "name": "Luxembourg",
    "name_zh": "卢森堡",
    "pid": 124
  },
  {
    "id": 1612,
    "name": "Byumba",
    "name_zh": "比温巴",
    "pid": 125
  },
  {
    "id": 1613,
    "name": "Butare",
    "name_zh": "布塔雷",
    "pid": 125
  },
  {
    "id": 1614,
    "name": "Nyanza",
    "name_zh": "恩延扎",
    "pid": 125
  },
  {
    "id": 1615,
    "name": "Kibungo",
    "name_zh": "基本古",
    "pid": 125
  },
  {
    "id": 1616,
    "name": "Kibuye",
    "name_zh": "基布耶",
    "pid": 125
  },
  {
    "id": 1617,
    "name": "Kigali-Ngali",
    "name_zh": "基加利-恩加利",
    "pid": 125
  },
  {
    "id": 1618,
    "name": "Kigali-Ville",
    "name_zh": "基加利市",
    "pid": 125
  },
  {
    "id": 1619,
    "name": "Gikongoro",
    "name_zh": "吉孔戈罗",
    "pid": 125
  },
  {
    "id": 1620,
    "name": "Gisenyi",
    "name_zh": "吉塞尼",
    "pid": 125
  },
  {
    "id": 1621,
    "name": "Gitarama",
    "name_zh": "吉塔拉马",
    "pid": 125
  },
  {
    "id": 1622,
    "name": "Kabuga",
    "name_zh": "卡布加",
    "pid": 125
  },
  {
    "id": 1623,
    "name": "Rwamagana",
    "name_zh": "卢瓦马加纳",
    "pid": 125
  },
  {
    "id": 1624,
    "name": "Ruhango",
    "name_zh": "鲁汉戈",
    "pid": 125
  },
  {
    "id": 1625,
    "name": "Ruhengeri",
    "name_zh": "鲁亨盖里",
    "pid": 125
  },
  {
    "id": 1626,
    "name": "Cyangugu",
    "name_zh": "尚古古",
    "pid": 125
  },
  {
    "id": 1627,
    "name": "Umutara",
    "name_zh": "乌姆塔拉",
    "pid": 125
  },
  {
    "id": 1628,
    "name": "Alba Iulia",
    "name_zh": "阿尔巴尤利亚",
    "pid": 126
  },
  {
    "id": 1629,
    "name": "Arad",
    "name_zh": "阿拉德",
    "pid": 126
  },
  {
    "id": 1630,
    "name": "Oradea",
    "name_zh": "奥拉迪亚",
    "pid": 126
  },
  {
    "id": 1631,
    "name": "Bacau",
    "name_zh": "巴克乌",
    "pid": 126
  },
  {
    "id": 1632,
    "name": "Baia Mare",
    "name_zh": "巴亚马雷",
    "pid": 126
  },
  {
    "id": 1633,
    "name": "Bistrita",
    "name_zh": "比斯特里察",
    "pid": 126
  },
  {
    "id": 1634,
    "name": "Botosani",
    "name_zh": "博托沙尼",
    "pid": 126
  },
  {
    "id": 1635,
    "name": "Bucuresti",
    "name_zh": "布加勒斯特",
    "pid": 126
  },
  {
    "id": 1636,
    "name": "Brasov",
    "name_zh": "布拉索夫",
    "pid": 126
  },
  {
    "id": 1637,
    "name": "Braila",
    "name_zh": "布勒伊拉",
    "pid": 126
  },
  {
    "id": 1638,
    "name": "Buzau",
    "name_zh": "布泽乌",
    "pid": 126
  },
  {
    "id": 1639,
    "name": "Drobeta-Turnu Severin",
    "name_zh": "德罗贝塔-塞维林堡",
    "pid": 126
  },
  {
    "id": 1640,
    "name": "Deva",
    "name_zh": "德瓦",
    "pid": 126
  },
  {
    "id": 1641,
    "name": "Timisoara",
    "name_zh": "蒂米什瓦拉",
    "pid": 126
  },
  {
    "id": 1642,
    "name": "Focsani",
    "name_zh": "福克沙尼",
    "pid": 126
  },
  {
    "id": 1643,
    "name": "Galati",
    "name_zh": "加拉茨",
    "pid": 126
  },
  {
    "id": 1644,
    "name": "Giurgiu",
    "name_zh": "久尔久",
    "pid": 126
  },
  {
    "id": 1645,
    "name": "Constanta",
    "name_zh": "康斯坦察",
    "pid": 126
  },
  {
    "id": 1646,
    "name": "Craiova",
    "name_zh": "克拉约瓦",
    "pid": 126
  },
  {
    "id": 1647,
    "name": "Calarasi",
    "name_zh": "克勒拉希",
    "pid": 126
  },
  {
    "id": 1648,
    "name": "Cluj-Napoca",
    "name_zh": "克卢日纳波卡",
    "pid": 126
  },
  {
    "id": 1649,
    "name": "XRimnicu Vilcea",
    "name_zh": "勒姆尼库沃尔恰",
    "pid": 126
  },
  {
    "id": 1650,
    "name": "Resita",
    "name_zh": "雷希察",
    "pid": 126
  },
  {
    "id": 1651,
    "name": "Miercurea-Ciuc",
    "name_zh": "梅尔库里亚丘克",
    "pid": 126
  },
  {
    "id": 1652,
    "name": "Pitesti",
    "name_zh": "皮特什蒂",
    "pid": 126
  },
  {
    "id": 1653,
    "name": "Piatra Neamt",
    "name_zh": "皮亚特拉尼亚姆茨",
    "pid": 126
  },
  {
    "id": 1654,
    "name": "Ploiesti",
    "name_zh": "普洛耶什蒂",
    "pid": 126
  },
  {
    "id": 1655,
    "name": "Satu Mare",
    "name_zh": "萨图·马雷",
    "pid": 126
  },
  {
    "id": 1656,
    "name": "Sfantu-Gheorghe",
    "name_zh": "圣格奥尔基",
    "pid": 126
  },
  {
    "id": 1657,
    "name": "Slatina",
    "name_zh": "斯拉蒂纳",
    "pid": 126
  },
  {
    "id": 1658,
    "name": "Slobozia",
    "name_zh": "斯洛博齐亚",
    "pid": 126
  },
  {
    "id": 1659,
    "name": "Suceava",
    "name_zh": "苏恰瓦",
    "pid": 126
  },
  {
    "id": 1660,
    "name": "Targovişte",
    "name_zh": "特尔戈维什泰",
    "pid": 126
  },
  {
    "id": 1661,
    "name": "Tirgu Mures",
    "name_zh": "特尔古穆列什",
    "pid": 126
  },
  {
    "id": 1662,
    "name": "Tirgu-Jiu",
    "name_zh": "特尔古日乌",
    "pid": 126
  },
  {
    "id": 1663,
    "name": "Tulcea",
    "name_zh": "图尔恰",
    "pid": 126
  },
  {
    "id": 1664,
    "name": "Vaslui",
    "name_zh": "瓦斯卢伊",
    "pid": 126
  },
  {
    "id": 1665,
    "name": "Sibiu",
    "name_zh": "锡比乌",
    "pid": 126
  },
  {
    "id": 1666,
    "name": "Iasi",
    "name_zh": "雅西",
    "pid": 126
  },
  {
    "id": 1667,
    "name": "Alexandria",
    "name_zh": "亚厉山德里亚",
    "pid": 126
  },
  {
    "id": 1668,
    "name": "Zalau",
    "name_zh": "扎勒乌",
    "pid": 126
  },
  {
    "id": 1669,
    "name": "Antsiranana",
    "name_zh": "安齐拉纳纳",
    "pid": 127
  },
  {
    "id": 1670,
    "name": "Fianarantsoa",
    "name_zh": "菲亚纳兰楚阿",
    "pid": 127
  },
  {
    "id": 1671,
    "name": "Mahajanga",
    "name_zh": "马哈赞加",
    "pid": 127
  },
  {
    "id": 1672,
    "name": "Antananarivo",
    "name_zh": "塔那那利佛",
    "pid": 127
  },
  {
    "id": 1673,
    "name": "Toamasina",
    "name_zh": "图阿马西拉",
    "pid": 127
  },
  {
    "id": 1674,
    "name": "Toliary",
    "name_zh": "图利亚拉",
    "pid": 127
  },
  {
    "id": 1675,
    "name": "Addu Atoll",
    "name_zh": "阿杜",
    "pid": 128
  },
  {
    "id": 1676,
    "name": "North Ari Atoll",
    "name_zh": "北阿里",
    "pid": 128
  },
  {
    "id": 1677,
    "name": "North Thiladhunmathi",
    "name_zh": "北蒂拉杜马蒂",
    "pid": 128
  },
  {
    "id": 1678,
    "name": "North Maalhosmadhulu",
    "name_zh": "北马洛斯马杜卢",
    "pid": 128
  },
  {
    "id": 1679,
    "name": "North Miladhunmadhulu",
    "name_zh": "北米拉杜马杜卢",
    "pid": 128
  },
  {
    "id": 1680,
    "name": "North Nilandhe Atoll",
    "name_zh": "北尼兰杜",
    "pid": 128
  },
  {
    "id": 1681,
    "name": "North Huvadhu Atoll",
    "name_zh": "北苏瓦迪瓦",
    "pid": 128
  },
  {
    "id": 1682,
    "name": "Faadhippolhu",
    "name_zh": "法迪福卢",
    "pid": 128
  },
  {
    "id": 1683,
    "name": "Felidhu Atoll",
    "name_zh": "费利杜",
    "pid": 128
  },
  {
    "id": 1684,
    "name": "Foammulah",
    "name_zh": "福阿穆拉库",
    "pid": 128
  },
  {
    "id": 1685,
    "name": "Hadhdhunmathi",
    "name_zh": "哈杜马蒂",
    "pid": 128
  },
  {
    "id": 1686,
    "name": "Kolhumadulu",
    "name_zh": "科卢马杜卢",
    "pid": 128
  },
  {
    "id": 1687,
    "name": "Male",
    "name_zh": "马累",
    "pid": 128
  },
  {
    "id": 1688,
    "name": "Male Atoll",
    "name_zh": "马累岛",
    "pid": 128
  },
  {
    "id": 1689,
    "name": "Mulakatholhu",
    "name_zh": "穆拉库",
    "pid": 128
  },
  {
    "id": 1690,
    "name": "South Ari Atoll",
    "name_zh": "南阿里",
    "pid": 128
  },
  {
    "id": 1691,
    "name": "South Thiladhunmathi",
    "name_zh": "南蒂拉杜马蒂",
    "pid": 128
  },
  {
    "id": 1692,
    "name": "South Maalhosmadulu",
    "name_zh": "南马洛斯马杜卢",
    "pid": 128
  },
  {
    "id": 1693,
    "name": "South Miladhunmadhulu",
    "name_zh": "南米拉杜马杜卢",
    "pid": 128
  },
  {
    "id": 1694,
    "name": "South Nilandhe Atoll",
    "name_zh": "南尼兰杜",
    "pid": 128
  },
  {
    "id": 1695,
    "name": "South Huvadhu Atoll",
    "name_zh": "南苏瓦迪瓦",
    "pid": 128
  },
  {
    "id": 1696,
    "name": "Northern",
    "name_zh": "北部区",
    "pid": 130
  },
  {
    "id": 1697,
    "name": "Southern",
    "name_zh": "南部区",
    "pid": 130
  },
  {
    "id": 1698,
    "name": "Central",
    "name_zh": "中央区",
    "pid": 130
  },
  {
    "id": 1699,
    "name": "Bamako",
    "name_zh": "巴马科首都区",
    "pid": 132
  },
  {
    "id": 1700,
    "name": "Kidal",
    "name_zh": "基达尔",
    "pid": 132
  },
  {
    "id": 1701,
    "name": "Gao",
    "name_zh": "加奥",
    "pid": 132
  },
  {
    "id": 1702,
    "name": "Kayes",
    "name_zh": "卡伊",
    "pid": 132
  },
  {
    "id": 1703,
    "name": "Koulikoro",
    "name_zh": "库利科罗",
    "pid": 132
  },
  {
    "id": 1704,
    "name": "Mopti",
    "name_zh": "莫普提",
    "pid": 132
  },
  {
    "id": 1705,
    "name": "Segou",
    "name_zh": "塞古",
    "pid": 132
  },
  {
    "id": 1706,
    "name": "Tombouctou",
    "name_zh": "通布图",
    "pid": 132
  },
  {
    "id": 1707,
    "name": "Sikasso",
    "name_zh": "锡卡索",
    "pid": 132
  },
  {
    "id": 1708,
    "name": "Adrar",
    "name_zh": "阿德拉尔",
    "pid": 139
  },
  {
    "id": 1709,
    "name": "El-Acaba",
    "name_zh": "阿萨巴",
    "pid": 139
  },
  {
    "id": 1710,
    "name": "Brakna",
    "name_zh": "卜拉克纳",
    "pid": 139
  },
  {
    "id": 1711,
    "name": "Hodh el-Gharbi",
    "name_zh": "东胡德",
    "pid": 139
  },
  {
    "id": 1712,
    "name": "Gorgol",
    "name_zh": "戈尔戈勒",
    "pid": 139
  },
  {
    "id": 1713,
    "name": "Guidimaka",
    "name_zh": "吉迪马卡",
    "pid": 139
  },
  {
    "id": 1714,
    "name": "Dakhlet Nouadhibou",
    "name_zh": "努瓦迪布湾",
    "pid": 139
  },
  {
    "id": 1715,
    "name": "Nouakchott",
    "name_zh": "努瓦克肖特特区",
    "pid": 139
  },
  {
    "id": 1716,
    "name": "Tagant",
    "name_zh": "塔甘特",
    "pid": 139
  },
  {
    "id": 1717,
    "name": "Trarza",
    "name_zh": "特拉扎",
    "pid": 139
  },
  {
    "id": 1718,
    "name": "Tiris Zemmour",
    "name_zh": "提里斯-宰穆尔",
    "pid": 139
  },
  {
    "id": 1719,
    "name": "Hodh ech-Chargui",
    "name_zh": "西胡德",
    "pid": 139
  },
  {
    "id": 1720,
    "name": "Inchiri",
    "name_zh": "因希里",
    "pid": 139
  },
  {
    "id": 1721,
    "name": "Aana",
    "name_zh": "阿纳",
    "pid": 141
  },
  {
    "id": 1722,
    "name": "Atua",
    "name_zh": "阿图阿",
    "pid": 141
  },
  {
    "id": 1723,
    "name": "Aigaile Tai",
    "name_zh": "艾加伊勒泰",
    "pid": 141
  },
  {
    "id": 1724,
    "name": "Faasaleleaga",
    "name_zh": "法塞莱莱阿加",
    "pid": 141
  },
  {
    "id": 1725,
    "name": "Gagaifomauga",
    "name_zh": "加盖福毛加",
    "pid": 141
  },
  {
    "id": 1726,
    "name": "Gagaemauga",
    "name_zh": "加加埃毛加",
    "pid": 141
  },
  {
    "id": 1727,
    "name": "Palauli",
    "name_zh": "帕劳利",
    "pid": 141
  },
  {
    "id": 1728,
    "name": "Satupaitea",
    "name_zh": "萨图帕伊泰阿",
    "pid": 141
  },
  {
    "id": 1729,
    "name": "Savaii",
    "name_zh": "萨瓦伊岛",
    "pid": 141
  },
  {
    "id": 1730,
    "name": "Tuamasaga",
    "name_zh": "图阿马萨加",
    "pid": 141
  },
  {
    "id": 1731,
    "name": "Vaao Fonoti",
    "name_zh": "瓦奥福诺蒂",
    "pid": 141
  },
  {
    "id": 1732,
    "name": "Vaisigano",
    "name_zh": "韦西加诺",
    "pid": 141
  },
  {
    "id": 1733,
    "name": "Upolu",
    "name_zh": "乌波卢岛",
    "pid": 141
  },
  {
    "id": 1734,
    "name": "Bayanhongor",
    "name_zh": "巴彦洪格尔",
    "pid": 143
  },
  {
    "id": 1735,
    "name": "Bayan-Ulgiy",
    "name_zh": "巴彦乌勒盖",
    "pid": 143
  },
  {
    "id": 1736,
    "name": "Bulgan",
    "name_zh": "布尔干",
    "pid": 143
  },
  {
    "id": 1737,
    "name": "Darhan-Uul",
    "name_zh": "达尔汗乌勒",
    "pid": 143
  },
  {
    "id": 1738,
    "name": "Dornod",
    "name_zh": "东方",
    "pid": 143
  },
  {
    "id": 1739,
    "name": "Dornogovi",
    "name_zh": "东戈壁",
    "pid": 143
  },
  {
    "id": 1740,
    "name": "Orhon",
    "name_zh": "鄂尔浑",
    "pid": 143
  },
  {
    "id": 1741,
    "name": "Govi-Altay",
    "name_zh": "戈壁阿尔泰",
    "pid": 143
  },
  {
    "id": 1742,
    "name": "Govisumber",
    "name_zh": "戈壁苏木贝尔",
    "pid": 143
  },
  {
    "id": 1743,
    "name": "Arhangay",
    "name_zh": "后杭爱",
    "pid": 143
  },
  {
    "id": 1744,
    "name": "Hovd",
    "name_zh": "科布多",
    "pid": 143
  },
  {
    "id": 1745,
    "name": "Hentiy",
    "name_zh": "肯特",
    "pid": 143
  },
  {
    "id": 1746,
    "name": "Hovsgol",
    "name_zh": "库苏古尔",
    "pid": 143
  },
  {
    "id": 1747,
    "name": "Umnogovi",
    "name_zh": "南戈壁",
    "pid": 143
  },
  {
    "id": 1748,
    "name": "Uvorhangay",
    "name_zh": "前杭爱",
    "pid": 143
  },
  {
    "id": 1749,
    "name": "Selenge",
    "name_zh": "色楞格",
    "pid": 143
  },
  {
    "id": 1750,
    "name": "Suhbaatar",
    "name_zh": "苏赫巴托尔",
    "pid": 143
  },
  {
    "id": 1751,
    "name": "Uvs",
    "name_zh": "乌布苏",
    "pid": 143
  },
  {
    "id": 1752,
    "name": "Ulaanbaatar hot",
    "name_zh": "乌兰巴托市",
    "pid": 143
  },
  {
    "id": 1753,
    "name": "Dzavhan",
    "name_zh": "扎布汗",
    "pid": 143
  },
  {
    "id": 1754,
    "name": "Dundgovi",
    "name_zh": "中戈壁",
    "pid": 143
  },
  {
    "id": 1755,
    "name": "Tov",
    "name_zh": "中央",
    "pid": 143
  },
  {
    "id": 1756,
    "name": "Dhaka",
    "name_zh": "达卡",
    "pid": 145
  },
  {
    "id": 1757,
    "name": "Chittagong",
    "name_zh": "吉大港",
    "pid": 145
  },
  {
    "id": 1758,
    "name": "Khulna",
    "name_zh": "库尔纳",
    "pid": 145
  },
  {
    "id": 1759,
    "name": "Arequipa",
    "name_zh": "阿雷基帕",
    "pid": 147
  },
  {
    "id": 1760,
    "name": "Apurimac",
    "name_zh": "阿普里马克",
    "pid": 147
  },
  {
    "id": 1761,
    "name": "Ayacucho",
    "name_zh": "阿亚库乔",
    "pid": 147
  },
  {
    "id": 1762,
    "name": "Ancash",
    "name_zh": "安卡什",
    "pid": 147
  },
  {
    "id": 1763,
    "name": "Juliaca",
    "name_zh": "胡利亚卡",
    "pid": 147
  },
  {
    "id": 1764,
    "name": "Junin",
    "name_zh": "胡宁",
    "pid": 147
  },
  {
    "id": 1765,
    "name": "Cajamarca",
    "name_zh": "卡哈马卡",
    "pid": 147
  },
  {
    "id": 1766,
    "name": "Callao",
    "name_zh": "卡亚俄",
    "pid": 147
  },
  {
    "id": 1767,
    "name": "Cusco",
    "name_zh": "库斯科",
    "pid": 147
  },
  {
    "id": 1768,
    "name": "La Libertad",
    "name_zh": "拉利伯塔德",
    "pid": 147
  },
  {
    "id": 1769,
    "name": "Lambayeque",
    "name_zh": "兰巴耶克",
    "pid": 147
  },
  {
    "id": 1770,
    "name": "Lima",
    "name_zh": "利马",
    "pid": 147
  },
  {
    "id": 1771,
    "name": "Loreto",
    "name_zh": "洛雷托",
    "pid": 147
  },
  {
    "id": 1772,
    "name": "Madre de Dios",
    "name_zh": "马德雷德迪奥斯",
    "pid": 147
  },
  {
    "id": 1773,
    "name": "Moquegua",
    "name_zh": "莫克瓜",
    "pid": 147
  },
  {
    "id": 1774,
    "name": "Pasco",
    "name_zh": "帕斯科",
    "pid": 147
  },
  {
    "id": 1775,
    "name": "Piura",
    "name_zh": "皮乌拉",
    "pid": 147
  },
  {
    "id": 1776,
    "name": "Puno",
    "name_zh": "普诺",
    "pid": 147
  },
  {
    "id": 1777,
    "name": "Chimbote",
    "name_zh": "钦博特",
    "pid": 147
  },
  {
    "id": 1778,
    "name": "Chincha Alta",
    "name_zh": "钦查阿尔塔",
    "pid": 147
  },
  {
    "id": 1779,
    "name": "San Martin",
    "name_zh": "圣马丁",
    "pid": 147
  },
  {
    "id": 1780,
    "name": "Sullana",
    "name_zh": "苏拉纳",
    "pid": 147
  },
  {
    "id": 1781,
    "name": "Tacna",
    "name_zh": "塔克纳",
    "pid": 147
  },
  {
    "id": 1782,
    "name": "Tumbes",
    "name_zh": "通贝斯",
    "pid": 147
  },
  {
    "id": 1783,
    "name": "Huanuco",
    "name_zh": "瓦努科",
    "pid": 147
  },
  {
    "id": 1784,
    "name": "Huancavelica",
    "name_zh": "万卡维利卡",
    "pid": 147
  },
  {
    "id": 1785,
    "name": "Ucayali",
    "name_zh": "乌卡亚利",
    "pid": 147
  },
  {
    "id": 1786,
    "name": "Amazonas",
    "name_zh": "亚马孙",
    "pid": 147
  },
  {
    "id": 1787,
    "name": "Ica",
    "name_zh": "伊卡",
    "pid": 147
  },
  {
    "id": 1788,
    "name": "Bago",
    "name_zh": "勃固省",
    "pid": 148
  },
  {
    "id": 1789,
    "name": "Shan",
    "name_zh": "掸邦",
    "pid": 148
  },
  {
    "id": 1790,
    "name": "Tanintharyi",
    "name_zh": "德林达依省",
    "pid": 148
  },
  {
    "id": 1791,
    "name": "Kayin",
    "name_zh": "克伦邦",
    "pid": 148
  },
  {
    "id": 1792,
    "name": "Kachin",
    "name_zh": "克钦邦",
    "pid": 148
  },
  {
    "id": 1793,
    "name": "Kayah",
    "name_zh": "克耶邦",
    "pid": 148
  },
  {
    "id": 1794,
    "name": "Magway",
    "name_zh": "马圭省",
    "pid": 148
  },
  {
    "id": 1795,
    "name": "Mandalay",
    "name_zh": "曼德勒省",
    "pid": 148
  },
  {
    "id": 1796,
    "name": "Mon",
    "name_zh": "孟邦",
    "pid": 148
  },
  {
    "id": 1797,
    "name": "Chin",
    "name_zh": "钦邦",
    "pid": 148
  },
  {
    "id": 1798,
    "name": "Rakhine",
    "name_zh": "若开邦",
    "pid": 148
  },
  {
    "id": 1799,
    "name": "Sagaing",
    "name_zh": "实皆省",
    "pid": 148
  },
  {
    "id": 1800,
    "name": "Yangon",
    "name_zh": "仰光省",
    "pid": 148
  },
  {
    "id": 1801,
    "name": "Ayeyarwady",
    "name_zh": "伊洛瓦底省",
    "pid": 148
  },
  {
    "id": 1802,
    "name": "Tangier",
    "name_zh": "丹吉尔",
    "pid": 150
  },
  {
    "id": 1803,
    "name": "Tetouan",
    "name_zh": "得土安",
    "pid": 150
  },
  {
    "id": 1804,
    "name": "Fes",
    "name_zh": "非斯",
    "pid": 150
  },
  {
    "id": 1805,
    "name": "Casablanca",
    "name_zh": "卡萨布兰卡",
    "pid": 150
  },
  {
    "id": 1806,
    "name": "Rabat",
    "name_zh": "拉巴特",
    "pid": 150
  },
  {
    "id": 1807,
    "name": "Marrakech",
    "name_zh": "马拉喀什",
    "pid": 150
  },
  {
    "id": 1808,
    "name": "Meknes",
    "name_zh": "梅克内斯",
    "pid": 150
  },
  {
    "id": 1809,
    "name": "Oujda",
    "name_zh": "乌季达",
    "pid": 150
  },
  {
    "id": 1810,
    "name": "Western Sahara",
    "name_zh": "西撒哈拉",
    "pid": 150
  },
  {
    "id": 1811,
    "name": "Aguascalientes",
    "name_zh": "阿瓜斯卡连斯特",
    "pid": 153
  },
  {
    "id": 1812,
    "name": "Acapulco",
    "name_zh": "阿卡普尔科",
    "pid": 153
  },
  {
    "id": 1813,
    "name": "Hermosillo",
    "name_zh": "埃莫西约",
    "pid": 153
  },
  {
    "id": 1814,
    "name": "Campeche",
    "name_zh": "埃佩切",
    "pid": 153
  },
  {
    "id": 1815,
    "name": "Obregon",
    "name_zh": "奥夫雷贡城",
    "pid": 153
  },
  {
    "id": 1816,
    "name": "Orizaba",
    "name_zh": "奥里萨巴",
    "pid": 153
  },
  {
    "id": 1817,
    "name": "Valles",
    "name_zh": "巴利城",
    "pid": 153
  },
  {
    "id": 1818,
    "name": "Puerto Vallarta",
    "name_zh": "巴亚尔塔港",
    "pid": 153
  },
  {
    "id": 1819,
    "name": "Villahermosa",
    "name_zh": "比利亚埃尔莫萨",
    "pid": 153
  },
  {
    "id": 1820,
    "name": "Poza Rica de Hidalgo",
    "name_zh": "波萨里卡",
    "pid": 153
  },
  {
    "id": 1821,
    "name": "Tijuana",
    "name_zh": "蒂华纳",
    "pid": 153
  },
  {
    "id": 1822,
    "name": "Durango",
    "name_zh": "杜兰戈",
    "pid": 153
  },
  {
    "id": 1823,
    "name": "Ensenada",
    "name_zh": "恩塞纳达",
    "pid": 153
  },
  {
    "id": 1824,
    "name": "Guadalajara",
    "name_zh": "瓜达拉哈拉",
    "pid": 153
  },
  {
    "id": 1825,
    "name": "Guanajuato",
    "name_zh": "瓜纳华托",
    "pid": 153
  },
  {
    "id": 1826,
    "name": "Jalapa",
    "name_zh": "哈拉帕",
    "pid": 153
  },
  {
    "id": 1827,
    "name": "Juarez",
    "name_zh": "华雷斯",
    "pid": 153
  },
  {
    "id": 1828,
    "name": "Benito Juare",
    "name_zh": "华雷斯港",
    "pid": 153
  },
  {
    "id": 1829,
    "name": "Carmen",
    "name_zh": "卡门",
    "pid": 153
  },
  {
    "id": 1830,
    "name": "Colima",
    "name_zh": "科利马",
    "pid": 153
  },
  {
    "id": 1831,
    "name": "Queretaro",
    "name_zh": "克雷塔罗",
    "pid": 153
  },
  {
    "id": 1832,
    "name": "Cuernavaca",
    "name_zh": "库埃纳瓦卡",
    "pid": 153
  },
  {
    "id": 1833,
    "name": "Culiacan",
    "name_zh": "库利阿坎",
    "pid": 153
  },
  {
    "id": 1834,
    "name": "Coatzacoalcos",
    "name_zh": "夸察夸拉克斯",
    "pid": 153
  },
  {
    "id": 1835,
    "name": "La Paz",
    "name_zh": "拉巴斯",
    "pid": 153
  },
  {
    "id": 1836,
    "name": "Leon",
    "name_zh": "莱昂",
    "pid": 153
  },
  {
    "id": 1837,
    "name": "Reynosa",
    "name_zh": "雷诺萨",
    "pid": 153
  },
  {
    "id": 1838,
    "name": "Los Mochis",
    "name_zh": "洛斯莫奇斯",
    "pid": 153
  },
  {
    "id": 1839,
    "name": "Mazatlan",
    "name_zh": "马萨特兰",
    "pid": 153
  },
  {
    "id": 1840,
    "name": "Matamoros",
    "name_zh": "马塔莫罗斯",
    "pid": 153
  },
  {
    "id": 1841,
    "name": "Merida",
    "name_zh": "梅里达",
    "pid": 153
  },
  {
    "id": 1842,
    "name": "Monclova",
    "name_zh": "蒙克洛瓦",
    "pid": 153
  },
  {
    "id": 1843,
    "name": "Monterrey",
    "name_zh": "蒙特雷",
    "pid": 153
  },
  {
    "id": 1844,
    "name": "Morelia",
    "name_zh": "莫雷利亚",
    "pid": 153
  },
  {
    "id": 1845,
    "name": "Mexico City",
    "name_zh": "墨西哥城",
    "pid": 153
  },
  {
    "id": 1846,
    "name": "Mexicali",
    "name_zh": "墨西卡利",
    "pid": 153
  },
  {
    "id": 1847,
    "name": "Nogales",
    "name_zh": "诺加莱斯",
    "pid": 153
  },
  {
    "id": 1848,
    "name": "Pachuca",
    "name_zh": "帕丘卡",
    "pid": 153
  },
  {
    "id": 1849,
    "name": "Puebla",
    "name_zh": "普埃布拉",
    "pid": 153
  },
  {
    "id": 1850,
    "name": "Chilpancingo",
    "name_zh": "奇尔潘辛戈",
    "pid": 153
  },
  {
    "id": 1851,
    "name": "Chihuahua",
    "name_zh": "奇瓦瓦",
    "pid": 153
  },
  {
    "id": 1852,
    "name": "Cheturnal",
    "name_zh": "切图马尔",
    "pid": 153
  },
  {
    "id": 1853,
    "name": "Saltillo",
    "name_zh": "萨尔蒂约",
    "pid": 153
  },
  {
    "id": 1854,
    "name": "Zacatecas",
    "name_zh": "萨卡特卡斯",
    "pid": 153
  },
  {
    "id": 1855,
    "name": "Celaya",
    "name_zh": "塞拉亚",
    "pid": 153
  },
  {
    "id": 1856,
    "name": "San Luis Potosi",
    "name_zh": "圣路易斯波托亚",
    "pid": 153
  },
  {
    "id": 1857,
    "name": "Tapachula",
    "name_zh": "塔帕丘拉",
    "pid": 153
  },
  {
    "id": 1858,
    "name": "Tampico",
    "name_zh": "坦皮科",
    "pid": 153
  },
  {
    "id": 1859,
    "name": "Tlaxcala",
    "name_zh": "特拉斯卡拉",
    "pid": 153
  },
  {
    "id": 1860,
    "name": "Tepic",
    "name_zh": "特皮克",
    "pid": 153
  },
  {
    "id": 1861,
    "name": "Tehuacan",
    "name_zh": "特瓦坎",
    "pid": 153
  },
  {
    "id": 1862,
    "name": "Tuxtla Gutierrez",
    "name_zh": "图斯特拉-古铁雷斯",
    "pid": 153
  },
  {
    "id": 1863,
    "name": "Torreon",
    "name_zh": "托雷翁",
    "pid": 153
  },
  {
    "id": 1864,
    "name": "Toluca",
    "name_zh": "托卢卡",
    "pid": 153
  },
  {
    "id": 1865,
    "name": "Oaxaca",
    "name_zh": "瓦哈卡",
    "pid": 153
  },
  {
    "id": 1866,
    "name": "Victoria",
    "name_zh": "维多利亚城",
    "pid": 153
  },
  {
    "id": 1867,
    "name": "Veracruz",
    "name_zh": "韦拉克鲁斯",
    "pid": 153
  },
  {
    "id": 1868,
    "name": "Uruapan",
    "name_zh": "乌鲁阿潘",
    "pid": 153
  },
  {
    "id": 1869,
    "name": "Nuevo Laredo",
    "name_zh": "新拉雷多",
    "pid": 153
  },
  {
    "id": 1870,
    "name": "Irapuato",
    "name_zh": "伊拉普阿托",
    "pid": 153
  },
  {
    "id": 1871,
    "name": "Erongo",
    "name_zh": "埃龙戈",
    "pid": 154
  },
  {
    "id": 1872,
    "name": "Ohangwena",
    "name_zh": "奥汉圭纳",
    "pid": 154
  },
  {
    "id": 1873,
    "name": "Okavango",
    "name_zh": "奥卡万戈",
    "pid": 154
  },
  {
    "id": 1874,
    "name": "Omaheke",
    "name_zh": "奥马赫科",
    "pid": 154
  },
  {
    "id": 1875,
    "name": "Omusati",
    "name_zh": "奥姆沙蒂",
    "pid": 154
  },
  {
    "id": 1876,
    "name": "Otjozondjupa",
    "name_zh": "奥乔宗蒂约巴",
    "pid": 154
  },
  {
    "id": 1877,
    "name": "Oshana",
    "name_zh": "奥沙纳",
    "pid": 154
  },
  {
    "id": 1878,
    "name": "Oshikoto",
    "name_zh": "奥希科托",
    "pid": 154
  },
  {
    "id": 1879,
    "name": "Hardap",
    "name_zh": "哈达普",
    "pid": 154
  },
  {
    "id": 1880,
    "name": "Khomas",
    "name_zh": "霍马斯",
    "pid": 154
  },
  {
    "id": 1881,
    "name": "Karas",
    "name_zh": "卡拉斯",
    "pid": 154
  },
  {
    "id": 1882,
    "name": "Caprivi",
    "name_zh": "卡普里维",
    "pid": 154
  },
  {
    "id": 1883,
    "name": "Kunene",
    "name_zh": "库内内",
    "pid": 154
  },
  {
    "id": 1884,
    "name": "Upington",
    "name_zh": "阿平顿",
    "pid": 155
  },
  {
    "id": 1885,
    "name": "Mount Ayliff",
    "name_zh": "艾利弗山",
    "pid": 155
  },
  {
    "id": 1886,
    "name": "Pietermaritzburg",
    "name_zh": "彼德马里茨堡",
    "pid": 155
  },
  {
    "id": 1887,
    "name": "Pietersburg",
    "name_zh": "彼德斯堡",
    "pid": 155
  },
  {
    "id": 1888,
    "name": "Pretoria",
    "name_zh": "比勒陀利亚",
    "pid": 155
  },
  {
    "id": 1889,
    "name": "Bisho",
    "name_zh": "比索",
    "pid": 155
  },
  {
    "id": 1890,
    "name": "Bredasdorp",
    "name_zh": "布雷达斯多普",
    "pid": 155
  },
  {
    "id": 1891,
    "name": "Bloemfontein",
    "name_zh": "布隆方丹",
    "pid": 155
  },
  {
    "id": 1892,
    "name": "Bronkhorstspruit",
    "name_zh": "布隆克斯特斯普利特",
    "pid": 155
  },
  {
    "id": 1893,
    "name": "De Aar",
    "name_zh": "德阿尔",
    "pid": 155
  },
  {
    "id": 1894,
    "name": "Durban",
    "name_zh": "德班",
    "pid": 155
  },
  {
    "id": 1895,
    "name": "Dundee",
    "name_zh": "邓迪",
    "pid": 155
  },
  {
    "id": 1896,
    "name": "Barkley East",
    "name_zh": "东巴克利",
    "pid": 155
  },
  {
    "id": 1897,
    "name": "East London",
    "name_zh": "东伦敦",
    "pid": 155
  },
  {
    "id": 1898,
    "name": "Vryburg",
    "name_zh": "弗雷堡",
    "pid": 155
  },
  {
    "id": 1899,
    "name": "Vereeniging",
    "name_zh": "弗里尼欣",
    "pid": 155
  },
  {
    "id": 1900,
    "name": "Groblersdal",
    "name_zh": "格罗布莱斯达尔",
    "pid": 155
  },
  {
    "id": 1901,
    "name": "Giyani",
    "name_zh": "基雅尼",
    "pid": 155
  },
  {
    "id": 1902,
    "name": "Kimberley",
    "name_zh": "金伯利",
    "pid": 155
  },
  {
    "id": 1903,
    "name": "Cape Town",
    "name_zh": "开普敦",
    "pid": 155
  },
  {
    "id": 1904,
    "name": "Klerksdorp",
    "name_zh": "克莱克斯多普",
    "pid": 155
  },
  {
    "id": 1905,
    "name": "Kuruman",
    "name_zh": "库鲁曼",
    "pid": 155
  },
  {
    "id": 1906,
    "name": "Queenstown",
    "name_zh": "昆士敦",
    "pid": 155
  },
  {
    "id": 1907,
    "name": "Ladysmith",
    "name_zh": "莱迪史密斯",
    "pid": 155
  },
  {
    "id": 1908,
    "name": "Randfontein",
    "name_zh": "兰德方丹",
    "pid": 155
  },
  {
    "id": 1909,
    "name": "Richards Bay",
    "name_zh": "理查兹湾",
    "pid": 155
  },
  {
    "id": 1910,
    "name": "Rustenburg",
    "name_zh": "利斯滕堡",
    "pid": 155
  },
  {
    "id": 1911,
    "name": "Middelburg",
    "name_zh": "米德尔堡",
    "pid": 155
  },
  {
    "id": 1912,
    "name": "Mkuze",
    "name_zh": "姆库泽",
    "pid": 155
  },
  {
    "id": 1913,
    "name": "Moorreesburg",
    "name_zh": "穆里斯堡",
    "pid": 155
  },
  {
    "id": 1914,
    "name": "Nelspruit",
    "name_zh": "内尔斯普雷特",
    "pid": 155
  },
  {
    "id": 1915,
    "name": "Nylstroom",
    "name_zh": "尼尔斯特隆",
    "pid": 155
  },
  {
    "id": 1916,
    "name": "Newcastle",
    "name_zh": "纽卡斯尔",
    "pid": 155
  },
  {
    "id": 1917,
    "name": "George",
    "name_zh": "乔治",
    "pid": 155
  },
  {
    "id": 1918,
    "name": "Sasolburg",
    "name_zh": "萨索尔堡",
    "pid": 155
  },
  {
    "id": 1919,
    "name": "Secunda",
    "name_zh": "瑟孔达",
    "pid": 155
  },
  {
    "id": 1920,
    "name": "Ixopo",
    "name_zh": "特克索波",
    "pid": 155
  },
  {
    "id": 1921,
    "name": "Trompsburg",
    "name_zh": "特隆普斯堡",
    "pid": 155
  },
  {
    "id": 1922,
    "name": "Springbok",
    "name_zh": "跳羚",
    "pid": 155
  },
  {
    "id": 1923,
    "name": "Thulamahashe",
    "name_zh": "图拉马哈谢",
    "pid": 155
  },
  {
    "id": 1924,
    "name": "Thohoyandou",
    "name_zh": "托霍延杜",
    "pid": 155
  },
  {
    "id": 1925,
    "name": "Witsieshoek",
    "name_zh": "韦茨肖克",
    "pid": 155
  },
  {
    "id": 1926,
    "name": "Welkom",
    "name_zh": "韦尔科姆",
    "pid": 155
  },
  {
    "id": 1927,
    "name": "Ulundi",
    "name_zh": "乌伦迪",
    "pid": 155
  },
  {
    "id": 1928,
    "name": "Umtata",
    "name_zh": "乌姆塔塔",
    "pid": 155
  },
  {
    "id": 1929,
    "name": "Worcester",
    "name_zh": "伍斯特",
    "pid": 155
  },
  {
    "id": 1930,
    "name": "Beaufort West",
    "name_zh": "西博福特",
    "pid": 155
  },
  {
    "id": 1931,
    "name": "Port Shepstone",
    "name_zh": "谢普斯通港",
    "pid": 155
  },
  {
    "id": 1932,
    "name": "Port Elizabeth",
    "name_zh": "伊丽莎白港",
    "pid": 155
  },
  {
    "id": 1933,
    "name": "Johannesburg",
    "name_zh": "约翰内斯堡",
    "pid": 155
  },
  {
    "id": 1934,
    "name": "Bagmati",
    "name_zh": "巴格马蒂",
    "pid": 159
  },
  {
    "id": 1935,
    "name": "Dhawalagiri",
    "name_zh": "道拉吉里",
    "pid": 159
  },
  {
    "id": 1936,
    "name": "Gandaki",
    "name_zh": "甘达基",
    "pid": 159
  },
  {
    "id": 1937,
    "name": "Kosi",
    "name_zh": "戈西",
    "pid": 159
  },
  {
    "id": 1938,
    "name": "Karnali",
    "name_zh": "格尔纳利",
    "pid": 159
  },
  {
    "id": 1939,
    "name": "Janakpur",
    "name_zh": "贾纳克布尔",
    "pid": 159
  },
  {
    "id": 1940,
    "name": "Rapti",
    "name_zh": "拉布蒂",
    "pid": 159
  },
  {
    "id": 1941,
    "name": "Lumbini",
    "name_zh": "蓝毗尼",
    "pid": 159
  },
  {
    "id": 1942,
    "name": "Mahakali",
    "name_zh": "马哈卡利",
    "pid": 159
  },
  {
    "id": 1943,
    "name": "Mechi",
    "name_zh": "梅吉",
    "pid": 159
  },
  {
    "id": 1944,
    "name": "Narayani",
    "name_zh": "纳拉亚尼",
    "pid": 159
  },
  {
    "id": 1945,
    "name": "Bheri",
    "name_zh": "佩里",
    "pid": 159
  },
  {
    "id": 1946,
    "name": "Sogarmatha",
    "name_zh": "萨加玛塔",
    "pid": 159
  },
  {
    "id": 1947,
    "name": "Seti",
    "name_zh": "塞蒂",
    "pid": 159
  },
  {
    "id": 1948,
    "name": "Esteli",
    "name_zh": "埃斯特利",
    "pid": 160
  },
  {
    "id": 1949,
    "name": "Atlantico Norte",
    "name_zh": "北大西洋",
    "pid": 160
  },
  {
    "id": 1950,
    "name": "Boaco",
    "name_zh": "博阿科",
    "pid": 160
  },
  {
    "id": 1951,
    "name": "Granada",
    "name_zh": "格拉纳达",
    "pid": 160
  },
  {
    "id": 1952,
    "name": "Carazo",
    "name_zh": "卡拉索",
    "pid": 160
  },
  {
    "id": 1953,
    "name": "Leon",
    "name_zh": "莱昂",
    "pid": 160
  },
  {
    "id": 1954,
    "name": "Rivas",
    "name_zh": "里瓦斯",
    "pid": 160
  },
  {
    "id": 1955,
    "name": "Madriz",
    "name_zh": "马德里斯",
    "pid": 160
  },
  {
    "id": 1956,
    "name": "Managua",
    "name_zh": "马那瓜",
    "pid": 160
  },
  {
    "id": 1957,
    "name": "Masaya",
    "name_zh": "马萨亚",
    "pid": 160
  },
  {
    "id": 1958,
    "name": "Matagalpa",
    "name_zh": "马塔加尔帕",
    "pid": 160
  },
  {
    "id": 1959,
    "name": "Atlantico Sur",
    "name_zh": "南大西洋",
    "pid": 160
  },
  {
    "id": 1960,
    "name": "Chinandega",
    "name_zh": "奇南德加",
    "pid": 160
  },
  {
    "id": 1961,
    "name": "Chontales",
    "name_zh": "琼塔莱斯",
    "pid": 160
  },
  {
    "id": 1962,
    "name": "Rio San Juan",
    "name_zh": "圣胡安河",
    "pid": 160
  },
  {
    "id": 1963,
    "name": "Jinotega",
    "name_zh": "希诺特加",
    "pid": 160
  },
  {
    "id": 1964,
    "name": "Nueva Segovia",
    "name_zh": "新塞哥维亚",
    "pid": 160
  },
  {
    "id": 1965,
    "name": "Agadez",
    "name_zh": "阿加德兹",
    "pid": 161
  },
  {
    "id": 1966,
    "name": "Diffa",
    "name_zh": "迪法",
    "pid": 161
  },
  {
    "id": 1967,
    "name": "Tillaberi",
    "name_zh": "蒂拉贝里",
    "pid": 161
  },
  {
    "id": 1968,
    "name": "Dosso",
    "name_zh": "多索",
    "pid": 161
  },
  {
    "id": 1969,
    "name": "Zinder",
    "name_zh": "津德尔",
    "pid": 161
  },
  {
    "id": 1970,
    "name": "Maradi",
    "name_zh": "马拉迪",
    "pid": 161
  },
  {
    "id": 1971,
    "name": "Niamey C.U.",
    "name_zh": "尼亚美市",
    "pid": 161
  },
  {
    "id": 1972,
    "name": "Tahoua",
    "name_zh": "塔瓦",
    "pid": 161
  },
  {
    "id": 1973,
    "name": "Abuja",
    "name_zh": "阿比亚",
    "pid": 162
  },
  {
    "id": 1974,
    "name": "Ogbomosho",
    "name_zh": "奥博莫绍",
    "pid": 162
  },
  {
    "id": 1975,
    "name": "Kano",
    "name_zh": "卡诺",
    "pid": 162
  },
  {
    "id": 1976,
    "name": "Lagos",
    "name_zh": "拉各斯",
    "pid": 162
  },
  {
    "id": 1977,
    "name": "Ibadan",
    "name_zh": "伊巴丹",
    "pid": 162
  },
  {
    "id": 1978,
    "name": "Akershus",
    "name_zh": "阿克什胡斯",
    "pid": 164
  },
  {
    "id": 1979,
    "name": "Oppland",
    "name_zh": "奥普兰",
    "pid": 164
  },
  {
    "id": 1980,
    "name": "Oslo",
    "name_zh": "奥斯陆市",
    "pid": 164
  },
  {
    "id": 1981,
    "name": "Nord-Trondelag",
    "name_zh": "北特伦德拉格",
    "pid": 164
  },
  {
    "id": 1982,
    "name": "Buskerud",
    "name_zh": "布斯克吕",
    "pid": 164
  },
  {
    "id": 1983,
    "name": "Aust-Agder",
    "name_zh": "东阿格德尔",
    "pid": 164
  },
  {
    "id": 1984,
    "name": "Ostfold",
    "name_zh": "东福尔",
    "pid": 164
  },
  {
    "id": 1985,
    "name": "Finnmark",
    "name_zh": "芬马克",
    "pid": 164
  },
  {
    "id": 1986,
    "name": "Hedmark",
    "name_zh": "海德马克",
    "pid": 164
  },
  {
    "id": 1987,
    "name": "Hordaland",
    "name_zh": "霍达兰",
    "pid": 164
  },
  {
    "id": 1988,
    "name": "Rogaland",
    "name_zh": "罗加兰",
    "pid": 164
  },
  {
    "id": 1989,
    "name": "More og Romsdal",
    "name_zh": "默勒－鲁姆斯达尔",
    "pid": 164
  },
  {
    "id": 1990,
    "name": "Sor-Trondelag",
    "name_zh": "南特伦德拉格",
    "pid": 164
  },
  {
    "id": 1991,
    "name": "Nordland",
    "name_zh": "诺尔兰",
    "pid": 164
  },
  {
    "id": 1992,
    "name": "Sogn og Fjordane",
    "name_zh": "松恩－菲尤拉讷",
    "pid": 164
  },
  {
    "id": 1993,
    "name": "Telemark",
    "name_zh": "泰勒马克",
    "pid": 164
  },
  {
    "id": 1994,
    "name": "Troms",
    "name_zh": "特罗姆斯",
    "pid": 164
  },
  {
    "id": 1995,
    "name": "Vest-Agder",
    "name_zh": "西阿格德尔",
    "pid": 164
  },
  {
    "id": 1996,
    "name": "Vestfold",
    "name_zh": "西福尔",
    "pid": 164
  },
  {
    "id": 1997,
    "name": "Alentejo Litoral",
    "name_zh": "滨海阿连特茹",
    "pid": 168
  },
  {
    "id": 1998,
    "name": "Pinhal Litoral",
    "name_zh": "滨海皮尼亚尔",
    "pid": 168
  },
  {
    "id": 1999,
    "name": "Porto",
    "name_zh": "波尔图",
    "pid": 168
  },
  {
    "id": 2000,
    "name": "Douro",
    "name_zh": "杜罗",
    "pid": 168
  },
  {
    "id": 2001,
    "name": "Entre Douro e Vouga",
    "name_zh": "恩特拉杜罗伏日",
    "pid": 168
  },
  {
    "id": 2002,
    "name": "Faro",
    "name_zh": "法鲁",
    "pid": 168
  },
  {
    "id": 2003,
    "name": "Funchal",
    "name_zh": "丰沙尔",
    "pid": 168
  },
  {
    "id": 2004,
    "name": "Cavado",
    "name_zh": "卡瓦多",
    "pid": 168
  },
  {
    "id": 2005,
    "name": "Cova da Beira",
    "name_zh": "科瓦贝拉",
    "pid": 168
  },
  {
    "id": 2006,
    "name": "Lisboa",
    "name_zh": "里斯本",
    "pid": 168
  },
  {
    "id": 2007,
    "name": "Leziria do Tejo",
    "name_zh": "利巴特茹",
    "pid": 168
  },
  {
    "id": 2008,
    "name": "Medio Tejo",
    "name_zh": "梅地奥特茹",
    "pid": 168
  },
  {
    "id": 2009,
    "name": "Minho-Lima",
    "name_zh": "米尼奥-利马",
    "pid": 168
  },
  {
    "id": 2010,
    "name": "Beira Interior Norte",
    "name_zh": "内贝拉北",
    "pid": 168
  },
  {
    "id": 2011,
    "name": "Beira Interior Sul",
    "name_zh": "内贝拉南",
    "pid": 168
  },
  {
    "id": 2012,
    "name": "Pinhal Interior Norte",
    "name_zh": "内皮尼亚尔北",
    "pid": 168
  },
  {
    "id": 2013,
    "name": "Pinhal Interior Sul",
    "name_zh": "内皮尼亚尔南",
    "pid": 168
  },
  {
    "id": 2014,
    "name": "Ponta Delgada",
    "name_zh": "蓬塔德尔加达",
    "pid": 168
  },
  {
    "id": 2015,
    "name": "Peninsula de Setubal",
    "name_zh": "塞图巴尔半岛",
    "pid": 168
  },
  {
    "id": 2016,
    "name": "Serra da Estrela",
    "name_zh": "山后",
    "pid": 168
  },
  {
    "id": 2017,
    "name": "Alto Alentejo",
    "name_zh": "上阿连特茹",
    "pid": 168
  },
  {
    "id": 2018,
    "name": "Alto Tros-os-Montes",
    "name_zh": "上特拉斯山",
    "pid": 168
  },
  {
    "id": 2019,
    "name": "Tamega",
    "name_zh": "塔梅加",
    "pid": 168
  },
  {
    "id": 2020,
    "name": "Ave",
    "name_zh": "万福",
    "pid": 168
  },
  {
    "id": 2021,
    "name": "Oeste",
    "name_zh": "西部",
    "pid": 168
  },
  {
    "id": 2022,
    "name": "Baixo Alentejo",
    "name_zh": "下阿连特茹",
    "pid": 168
  },
  {
    "id": 2023,
    "name": "Baixo Vouga",
    "name_zh": "下伏日",
    "pid": 168
  },
  {
    "id": 2024,
    "name": "Baixo Mondego",
    "name_zh": "下蒙德古",
    "pid": 168
  },
  {
    "id": 2025,
    "name": "Alentejo Central",
    "name_zh": "中阿连特茹",
    "pid": 168
  },
  {
    "id": 2026,
    "name": "Ehime",
    "name_zh": "爱媛",
    "pid": 170
  },
  {
    "id": 2027,
    "name": "Aichi",
    "name_zh": "爱知",
    "pid": 170
  },
  {
    "id": 2028,
    "name": "Hokkaido",
    "name_zh": "北海道",
    "pid": 170
  },
  {
    "id": 2029,
    "name": "Hyogo",
    "name_zh": "兵库",
    "pid": 170
  },
  {
    "id": 2030,
    "name": "Okinawa",
    "name_zh": "冲绳",
    "pid": 170
  },
  {
    "id": 2031,
    "name": "Ibaraki",
    "name_zh": "茨城",
    "pid": 170
  },
  {
    "id": 2032,
    "name": "Osaka",
    "name_zh": "大阪",
    "pid": 170
  },
  {
    "id": 2033,
    "name": "Oita",
    "name_zh": "大分",
    "pid": 170
  },
  {
    "id": 2034,
    "name": "Shimane",
    "name_zh": "岛根",
    "pid": 170
  },
  {
    "id": 2035,
    "name": "Tokushima",
    "name_zh": "徳岛",
    "pid": 170
  },
  {
    "id": 2036,
    "name": "Tokyo",
    "name_zh": "东京",
    "pid": 170
  },
  {
    "id": 2037,
    "name": "Fukushima",
    "name_zh": "福岛",
    "pid": 170
  },
  {
    "id": 2038,
    "name": "Fukuoka",
    "name_zh": "福冈",
    "pid": 170
  },
  {
    "id": 2039,
    "name": "Fukui",
    "name_zh": "福井",
    "pid": 170
  },
  {
    "id": 2040,
    "name": "Toyama",
    "name_zh": "富山",
    "pid": 170
  },
  {
    "id": 2041,
    "name": "Okayama",
    "name_zh": "冈山",
    "pid": 170
  },
  {
    "id": 2042,
    "name": "Kochi",
    "name_zh": "高知",
    "pid": 170
  },
  {
    "id": 2043,
    "name": "Miyagi",
    "name_zh": "宮城",
    "pid": 170
  },
  {
    "id": 2044,
    "name": "Miyazaki",
    "name_zh": "宫崎",
    "pid": 170
  },
  {
    "id": 2045,
    "name": "Hiroshima",
    "name_zh": "广岛",
    "pid": 170
  },
  {
    "id": 2046,
    "name": "Wakayama",
    "name_zh": "和歌山",
    "pid": 170
  },
  {
    "id": 2047,
    "name": "Kyoto",
    "name_zh": "京都",
    "pid": 170
  },
  {
    "id": 2048,
    "name": "Shizuoka",
    "name_zh": "静冈",
    "pid": 170
  },
  {
    "id": 2049,
    "name": "Tochigi",
    "name_zh": "枥木",
    "pid": 170
  },
  {
    "id": 2050,
    "name": "Kagoshima",
    "name_zh": "鹿儿岛",
    "pid": 170
  },
  {
    "id": 2051,
    "name": "Nara",
    "name_zh": "奈良",
    "pid": 170
  },
  {
    "id": 2052,
    "name": "Tottori",
    "name_zh": "鸟取",
    "pid": 170
  },
  {
    "id": 2053,
    "name": "Gifu",
    "name_zh": "岐阜",
    "pid": 170
  },
  {
    "id": 2054,
    "name": "Saitama",
    "name_zh": "埼玉",
    "pid": 170
  },
  {
    "id": 2055,
    "name": "Chiba",
    "name_zh": "千叶",
    "pid": 170
  },
  {
    "id": 2056,
    "name": "Aomori",
    "name_zh": "青森",
    "pid": 170
  },
  {
    "id": 2057,
    "name": "Akita",
    "name_zh": "秋田",
    "pid": 170
  },
  {
    "id": 2058,
    "name": "Gunma",
    "name_zh": "群马",
    "pid": 170
  },
  {
    "id": 2059,
    "name": "Mie",
    "name_zh": "三重",
    "pid": 170
  },
  {
    "id": 2060,
    "name": "Yamaguchi",
    "name_zh": "山口",
    "pid": 170
  },
  {
    "id": 2061,
    "name": "Yamanashi",
    "name_zh": "山梨",
    "pid": 170
  },
  {
    "id": 2062,
    "name": "Yamagata",
    "name_zh": "山形",
    "pid": 170
  },
  {
    "id": 2063,
    "name": "Kanagawa",
    "name_zh": "神奈川",
    "pid": 170
  },
  {
    "id": 2064,
    "name": "Ishikawa",
    "name_zh": "石川",
    "pid": 170
  },
  {
    "id": 2065,
    "name": "Kagawa",
    "name_zh": "香川",
    "pid": 170
  },
  {
    "id": 2066,
    "name": "Niigata",
    "name_zh": "新潟",
    "pid": 170
  },
  {
    "id": 2067,
    "name": "Kumamoto",
    "name_zh": "熊本",
    "pid": 170
  },
  {
    "id": 2068,
    "name": "Iwate",
    "name_zh": "岩手",
    "pid": 170
  },
  {
    "id": 2069,
    "name": "Nagasaki",
    "name_zh": "长崎",
    "pid": 170
  },
  {
    "id": 2070,
    "name": "Nagano",
    "name_zh": "长野",
    "pid": 170
  },
  {
    "id": 2071,
    "name": "Shiga",
    "name_zh": "滋贺",
    "pid": 170
  },
  {
    "id": 2072,
    "name": "Saga",
    "name_zh": "佐贺",
    "pid": 170
  },
  {
    "id": 2073,
    "name": "Norrbottens",
    "name_zh": "北博滕",
    "pid": 171
  },
  {
    "id": 2074,
    "name": "Blekinge",
    "name_zh": "布莱金厄",
    "pid": 171
  },
  {
    "id": 2075,
    "name": "Dalarnas",
    "name_zh": "达拉纳",
    "pid": 171
  },
  {
    "id": 2076,
    "name": "Ustergotland",
    "name_zh": "东约特兰",
    "pid": 171
  },
  {
    "id": 2077,
    "name": "Orebro",
    "name_zh": "厄勒布鲁",
    "pid": 171
  },
  {
    "id": 2078,
    "name": "Gotlands",
    "name_zh": "哥得兰",
    "pid": 171
  },
  {
    "id": 2079,
    "name": "Hallands",
    "name_zh": "哈兰",
    "pid": 171
  },
  {
    "id": 2080,
    "name": "Kalmar",
    "name_zh": "卡尔马",
    "pid": 171
  },
  {
    "id": 2081,
    "name": "Kronobergs",
    "name_zh": "克鲁努贝里",
    "pid": 171
  },
  {
    "id": 2082,
    "name": "Sodermanlands",
    "name_zh": "南曼兰",
    "pid": 171
  },
  {
    "id": 2083,
    "name": "Stockholms",
    "name_zh": "斯德哥尔摩",
    "pid": 171
  },
  {
    "id": 2084,
    "name": "Skane",
    "name_zh": "斯科耐",
    "pid": 171
  },
  {
    "id": 2085,
    "name": "Varmlands",
    "name_zh": "韦姆兰",
    "pid": 171
  },
  {
    "id": 2086,
    "name": "Uppsala",
    "name_zh": "乌普萨拉",
    "pid": 171
  },
  {
    "id": 2087,
    "name": "Vasterbottens",
    "name_zh": "西博滕",
    "pid": 171
  },
  {
    "id": 2088,
    "name": "Vastmanlands",
    "name_zh": "西曼兰",
    "pid": 171
  },
  {
    "id": 2089,
    "name": "Vasternorrlands",
    "name_zh": "西诺尔兰",
    "pid": 171
  },
  {
    "id": 2090,
    "name": "Vastra Gotalands",
    "name_zh": "西约特兰",
    "pid": 171
  },
  {
    "id": 2091,
    "name": "Jonkopings",
    "name_zh": "延雪平",
    "pid": 171
  },
  {
    "id": 2092,
    "name": "Gavleborgs",
    "name_zh": "耶夫勒堡",
    "pid": 171
  },
  {
    "id": 2093,
    "name": "Jamtlands",
    "name_zh": "耶姆特兰",
    "pid": 171
  },
  {
    "id": 2094,
    "name": "Aargau",
    "name_zh": "阿尔高",
    "pid": 172
  },
  {
    "id": 2095,
    "name": "Basel－Sstadt",
    "name_zh": "巴塞尔城市",
    "pid": 172
  },
  {
    "id": 2096,
    "name": "Basel Landschaft",
    "name_zh": "巴塞尔乡村",
    "pid": 172
  },
  {
    "id": 2097,
    "name": "Bern",
    "name_zh": "伯尔尼",
    "pid": 172
  },
  {
    "id": 2098,
    "name": "Zug",
    "name_zh": "楚格",
    "pid": 172
  },
  {
    "id": 2099,
    "name": "Freiburg",
    "name_zh": "弗里堡",
    "pid": 172
  },
  {
    "id": 2100,
    "name": "Glarus",
    "name_zh": "格拉鲁斯",
    "pid": 172
  },
  {
    "id": 2101,
    "name": "Graubünden",
    "name_zh": "格劳宾登",
    "pid": 172
  },
  {
    "id": 2102,
    "name": "Luzern",
    "name_zh": "卢塞恩",
    "pid": 172
  },
  {
    "id": 2103,
    "name": "Lausanne",
    "name_zh": "洛桑",
    "pid": 172
  },
  {
    "id": 2104,
    "name": "Neuchatel",
    "name_zh": "纳沙泰尔",
    "pid": 172
  },
  {
    "id": 2105,
    "name": "Appenzell Innerrhodn",
    "name_zh": "内阿彭策尔",
    "pid": 172
  },
  {
    "id": 2106,
    "name": "Geneve",
    "name_zh": "日内瓦",
    "pid": 172
  },
  {
    "id": 2107,
    "name": "Jura",
    "name_zh": "汝拉",
    "pid": 172
  },
  {
    "id": 2108,
    "name": "Schaffhausen",
    "name_zh": "沙夫豪森",
    "pid": 172
  },
  {
    "id": 2109,
    "name": "Obwalden",
    "name_zh": "上瓦尔登",
    "pid": 172
  },
  {
    "id": 2110,
    "name": "St.Gallen",
    "name_zh": "圣加仑",
    "pid": 172
  },
  {
    "id": 2111,
    "name": "Schwyz",
    "name_zh": "施维茨",
    "pid": 172
  },
  {
    "id": 2112,
    "name": "Zurich",
    "name_zh": "苏黎世",
    "pid": 172
  },
  {
    "id": 2113,
    "name": "Solothurn",
    "name_zh": "索洛图恩",
    "pid": 172
  },
  {
    "id": 2114,
    "name": "Ticino",
    "name_zh": "提契诺",
    "pid": 172
  },
  {
    "id": 2115,
    "name": "Thurgau",
    "name_zh": "图尔高",
    "pid": 172
  },
  {
    "id": 2116,
    "name": "Wallis",
    "name_zh": "瓦莱",
    "pid": 172
  },
  {
    "id": 2117,
    "name": "Appenzell Ausserrhon",
    "name_zh": "外阿彭策尔",
    "pid": 172
  },
  {
    "id": 2118,
    "name": "Vaud",
    "name_zh": "沃",
    "pid": 172
  },
  {
    "id": 2119,
    "name": "Uri",
    "name_zh": "乌里",
    "pid": 172
  },
  {
    "id": 2120,
    "name": "Nidwalden",
    "name_zh": "下瓦尔登",
    "pid": 172
  },
  {
    "id": 2121,
    "name": "Apopa",
    "name_zh": "阿波帕",
    "pid": 173
  },
  {
    "id": 2122,
    "name": "Ahuachapan",
    "name_zh": "阿瓦查潘",
    "pid": 173
  },
  {
    "id": 2123,
    "name": "Litoral",
    "name_zh": "滨海",
    "pid": 173
  },
  {
    "id": 2124,
    "name": "Chalatenango",
    "name_zh": "查拉特南戈",
    "pid": 173
  },
  {
    "id": 2125,
    "name": "Delgado",
    "name_zh": "德尔加多",
    "pid": 173
  },
  {
    "id": 2126,
    "name": "Kie-Ntem",
    "name_zh": "基埃-恩特姆",
    "pid": 173
  },
  {
    "id": 2127,
    "name": "Cabanas",
    "name_zh": "卡瓦尼亚斯",
    "pid": 173
  },
  {
    "id": 2128,
    "name": "Cuscatlan",
    "name_zh": "库斯卡特兰",
    "pid": 173
  },
  {
    "id": 2129,
    "name": "La Paz",
    "name_zh": "拉巴斯",
    "pid": 173
  },
  {
    "id": 2130,
    "name": "La Libertad",
    "name_zh": "拉利伯塔德",
    "pid": 173
  },
  {
    "id": 2131,
    "name": "La Union",
    "name_zh": "拉乌尼翁",
    "pid": 173
  },
  {
    "id": 2132,
    "name": "Mejicanos",
    "name_zh": "梅基卡诺斯",
    "pid": 173
  },
  {
    "id": 2133,
    "name": "Morazan",
    "name_zh": "莫拉桑",
    "pid": 173
  },
  {
    "id": 2134,
    "name": "Santa Ana",
    "name_zh": "圣安娜",
    "pid": 173
  },
  {
    "id": 2135,
    "name": "San Miguel",
    "name_zh": "圣米格尔",
    "pid": 173
  },
  {
    "id": 2136,
    "name": "San Salvador",
    "name_zh": "圣萨尔瓦多",
    "pid": 173
  },
  {
    "id": 2137,
    "name": "San Vicente",
    "name_zh": "圣维森特",
    "pid": 173
  },
  {
    "id": 2138,
    "name": "Sonsonate",
    "name_zh": "松索纳特",
    "pid": 173
  },
  {
    "id": 2139,
    "name": "Soyapango",
    "name_zh": "索亚潘戈",
    "pid": 173
  },
  {
    "id": 2140,
    "name": "Wele-Nzas",
    "name_zh": "韦莱-恩萨斯",
    "pid": 173
  },
  {
    "id": 2141,
    "name": "Usulutan",
    "name_zh": "乌苏卢坦",
    "pid": 173
  },
  {
    "id": 2142,
    "name": "Ilopango",
    "name_zh": "伊洛潘戈",
    "pid": 173
  },
  {
    "id": 2143,
    "name": "Centro Sur",
    "name_zh": "中南",
    "pid": 173
  },
  {
    "id": 2144,
    "name": "Beograd",
    "name_zh": "贝尔格莱德",
    "pid": 175
  },
  {
    "id": 2145,
    "name": "Podgorica",
    "name_zh": "波德戈里察",
    "pid": 175
  },
  {
    "id": 2146,
    "name": "Kragujevac",
    "name_zh": "克拉古涅瓦茨",
    "pid": 175
  },
  {
    "id": 2147,
    "name": "Nis",
    "name_zh": "尼什",
    "pid": 175
  },
  {
    "id": 2148,
    "name": "Novi Sad",
    "name_zh": "诺维萨德",
    "pid": 175
  },
  {
    "id": 2149,
    "name": "Pristina",
    "name_zh": "普里什蒂纳",
    "pid": 175
  },
  {
    "id": 2150,
    "name": "Subotica",
    "name_zh": "苏博蒂察",
    "pid": 175
  },
  {
    "id": 2151,
    "name": "Zemun",
    "name_zh": "泽蒙",
    "pid": 175
  },
  {
    "id": 2152,
    "name": "Northern",
    "name_zh": "北部",
    "pid": 176
  },
  {
    "id": 2153,
    "name": "Eastern",
    "name_zh": "东部",
    "pid": 176
  },
  {
    "id": 2154,
    "name": "Southern",
    "name_zh": "南部",
    "pid": 176
  },
  {
    "id": 2155,
    "name": "Western",
    "name_zh": "西部区",
    "pid": 176
  },
  {
    "id": 2156,
    "name": "Dakar",
    "name_zh": "达喀尔",
    "pid": 177
  },
  {
    "id": 2157,
    "name": "Fatick",
    "name_zh": "法蒂克",
    "pid": 177
  },
  {
    "id": 2158,
    "name": "Ziguinchor",
    "name_zh": "济金绍尔",
    "pid": 177
  },
  {
    "id": 2159,
    "name": "Thies",
    "name_zh": "捷斯",
    "pid": 177
  },
  {
    "id": 2160,
    "name": "Diourbel",
    "name_zh": "久尔贝勒",
    "pid": 177
  },
  {
    "id": 2161,
    "name": "Kaolack",
    "name_zh": "考拉克",
    "pid": 177
  },
  {
    "id": 2162,
    "name": "Kolda",
    "name_zh": "科尔达",
    "pid": 177
  },
  {
    "id": 2163,
    "name": "Louga",
    "name_zh": "卢加",
    "pid": 177
  },
  {
    "id": 2164,
    "name": "Matam",
    "name_zh": "马塔姆",
    "pid": 177
  },
  {
    "id": 2165,
    "name": "Saint-Louis",
    "name_zh": "圣路易",
    "pid": 177
  },
  {
    "id": 2166,
    "name": "Tambacounda",
    "name_zh": "坦巴昆达",
    "pid": 177
  },
  {
    "id": 2167,
    "name": "Famagusta",
    "name_zh": "法马古斯塔",
    "pid": 178
  },
  {
    "id": 2168,
    "name": "Kyrenia",
    "name_zh": "凯里尼亚",
    "pid": 178
  },
  {
    "id": 2169,
    "name": "Larnaca",
    "name_zh": "拉纳卡",
    "pid": 178
  },
  {
    "id": 2170,
    "name": "Limassol",
    "name_zh": "利马索尔",
    "pid": 178
  },
  {
    "id": 2171,
    "name": "Nicosia",
    "name_zh": "尼科西亚",
    "pid": 178
  },
  {
    "id": 2172,
    "name": "Pafos",
    "name_zh": "帕福斯",
    "pid": 178
  },
  {
    "id": 2173,
    "name": "Arar",
    "name_zh": "阿尔阿尔",
    "pid": 180
  },
  {
    "id": 2174,
    "name": "Abha",
    "name_zh": "艾卜哈",
    "pid": 180
  },
  {
    "id": 2175,
    "name": "Al Bahah",
    "name_zh": "巴哈",
    "pid": 180
  },
  {
    "id": 2176,
    "name": "Buraydah",
    "name_zh": "布赖代",
    "pid": 180
  },
  {
    "id": 2177,
    "name": "Dammam",
    "name_zh": "达曼",
    "pid": 180
  },
  {
    "id": 2178,
    "name": "Hafar al-Batin",
    "name_zh": "哈费尔巴廷",
    "pid": 180
  },
  {
    "id": 2179,
    "name": "Hail",
    "name_zh": "哈伊勒",
    "pid": 180
  },
  {
    "id": 2180,
    "name": "Khamis Mushayt",
    "name_zh": "海米斯穆谢特",
    "pid": 180
  },
  {
    "id": 2181,
    "name": "Al-Kharj",
    "name_zh": "海耶",
    "pid": 180
  },
  {
    "id": 2182,
    "name": "Al-Hufuf",
    "name_zh": "胡富夫",
    "pid": 180
  },
  {
    "id": 2183,
    "name": "Jiddah",
    "name_zh": "吉达",
    "pid": 180
  },
  {
    "id": 2184,
    "name": "Jizan",
    "name_zh": "吉赞",
    "pid": 180
  },
  {
    "id": 2185,
    "name": "Riyad",
    "name_zh": "利雅得",
    "pid": 180
  },
  {
    "id": 2186,
    "name": "Medina",
    "name_zh": "麦地那",
    "pid": 180
  },
  {
    "id": 2187,
    "name": "Makkah",
    "name_zh": "麦加",
    "pid": 180
  },
  {
    "id": 2188,
    "name": "Al-Mubarraz",
    "name_zh": "姆巴拉兹",
    "pid": 180
  },
  {
    "id": 2189,
    "name": "Najran",
    "name_zh": "纳季兰",
    "pid": 180
  },
  {
    "id": 2190,
    "name": "Sakaka",
    "name_zh": "塞卡卡",
    "pid": 180
  },
  {
    "id": 2191,
    "name": "Tabuk",
    "name_zh": "塔布克",
    "pid": 180
  },
  {
    "id": 2192,
    "name": "At Tarif",
    "name_zh": "塔伊夫",
    "pid": 180
  },
  {
    "id": 2193,
    "name": "Yanbu al-Bahr",
    "name_zh": "延布",
    "pid": 180
  },
  {
    "id": 2194,
    "name": "Al-Jubayl",
    "name_zh": "朱拜勒",
    "pid": 180
  },
  {
    "id": 2195,
    "name": "Anuradhapura",
    "name_zh": "阿努拉德普勒",
    "pid": 189
  },
  {
    "id": 2196,
    "name": "Ampara",
    "name_zh": "安帕赖",
    "pid": 189
  },
  {
    "id": 2197,
    "name": "Badulla",
    "name_zh": "巴杜勒",
    "pid": 189
  },
  {
    "id": 2198,
    "name": "Batticaloa",
    "name_zh": "拜蒂克洛",
    "pid": 189
  },
  {
    "id": 2199,
    "name": "Polonnaruwa",
    "name_zh": "波隆纳鲁沃",
    "pid": 189
  },
  {
    "id": 2200,
    "name": "Hambantota",
    "name_zh": "汉班托特",
    "pid": 189
  },
  {
    "id": 2201,
    "name": "Kilinochchi",
    "name_zh": "基里诺奇",
    "pid": 189
  },
  {
    "id": 2202,
    "name": "Galle",
    "name_zh": "加勒",
    "pid": 189
  },
  {
    "id": 2203,
    "name": "Gampaha",
    "name_zh": "加姆珀哈",
    "pid": 189
  },
  {
    "id": 2204,
    "name": "Jaffna",
    "name_zh": "贾夫纳",
    "pid": 189
  },
  {
    "id": 2205,
    "name": "Kalutara",
    "name_zh": "卡卢特勒",
    "pid": 189
  },
  {
    "id": 2206,
    "name": "Kegalle",
    "name_zh": "凯格勒",
    "pid": 189
  },
  {
    "id": 2207,
    "name": "Kandy",
    "name_zh": "康提",
    "pid": 189
  },
  {
    "id": 2208,
    "name": "Colombo",
    "name_zh": "科伦坡",
    "pid": 189
  },
  {
    "id": 2209,
    "name": "Kurunegala",
    "name_zh": "库鲁内格勒",
    "pid": 189
  },
  {
    "id": 2210,
    "name": "Ratnapura",
    "name_zh": "拉特纳普勒",
    "pid": 189
  },
  {
    "id": 2211,
    "name": "Mannar",
    "name_zh": "马纳尔",
    "pid": 189
  },
  {
    "id": 2212,
    "name": "Matale",
    "name_zh": "马特莱",
    "pid": 189
  },
  {
    "id": 2213,
    "name": "Matara",
    "name_zh": "马特勒",
    "pid": 189
  },
  {
    "id": 2214,
    "name": "Monaragala",
    "name_zh": "莫讷勒格勒",
    "pid": 189
  },
  {
    "id": 2215,
    "name": "Mullathivu",
    "name_zh": "穆莱蒂武",
    "pid": 189
  },
  {
    "id": 2216,
    "name": "Nuwara Eliya",
    "name_zh": "努沃勒埃利耶",
    "pid": 189
  },
  {
    "id": 2217,
    "name": "Puttalam",
    "name_zh": "普塔勒姆",
    "pid": 189
  },
  {
    "id": 2218,
    "name": "Trincomalee",
    "name_zh": "亭可马里",
    "pid": 189
  },
  {
    "id": 2219,
    "name": "Vavuniya",
    "name_zh": "瓦武尼亚",
    "pid": 189
  },
  {
    "id": 2220,
    "name": "Banskobystricky",
    "name_zh": "班斯卡-比斯特里察",
    "pid": 190
  },
  {
    "id": 2221,
    "name": "Bratislavsky",
    "name_zh": "布拉迪斯拉发",
    "pid": 190
  },
  {
    "id": 2222,
    "name": "Koricky",
    "name_zh": "科希策",
    "pid": 190
  },
  {
    "id": 2223,
    "name": "Nitriansky",
    "name_zh": "尼特拉",
    "pid": 190
  },
  {
    "id": 2224,
    "name": "Prerovsky",
    "name_zh": "普雷绍夫",
    "pid": 190
  },
  {
    "id": 2225,
    "name": "Rilinsky",
    "name_zh": "日利纳",
    "pid": 190
  },
  {
    "id": 2226,
    "name": "Trnavsky",
    "name_zh": "特尔纳瓦",
    "pid": 190
  },
  {
    "id": 2227,
    "name": "Trenriansky",
    "name_zh": "特伦钦",
    "pid": 190
  },
  {
    "id": 2228,
    "name": "Obalno-kraska",
    "name_zh": "奥巴尔诺-克拉",
    "pid": 191
  },
  {
    "id": 2229,
    "name": "Osrednjeslovenska",
    "name_zh": "奥斯雷德涅斯洛文",
    "pid": 191
  },
  {
    "id": 2230,
    "name": "Podravska",
    "name_zh": "波德拉夫",
    "pid": 191
  },
  {
    "id": 2231,
    "name": "Pomurska",
    "name_zh": "波穆尔",
    "pid": 191
  },
  {
    "id": 2232,
    "name": "Dolenjska",
    "name_zh": "多雷尼",
    "pid": 191
  },
  {
    "id": 2233,
    "name": "Gorenjska",
    "name_zh": "戈雷尼",
    "pid": 191
  },
  {
    "id": 2234,
    "name": "Goriska",
    "name_zh": "戈里",
    "pid": 191
  },
  {
    "id": 2235,
    "name": "Koroska",
    "name_zh": "科洛",
    "pid": 191
  },
  {
    "id": 2236,
    "name": "Notranjsko-kraska",
    "name_zh": "诺特拉尼",
    "pid": 191
  },
  {
    "id": 2237,
    "name": "Savinjska",
    "name_zh": "萨维尼",
    "pid": 191
  },
  {
    "id": 2238,
    "name": "Spodnjeposavska",
    "name_zh": "斯波德涅波萨夫",
    "pid": 191
  },
  {
    "id": 2239,
    "name": "Zasavska",
    "name_zh": "扎萨夫",
    "pid": 191
  },
  {
    "id": 2240,
    "name": "Ash-Shamaliyah",
    "name_zh": "北部",
    "pid": 194
  },
  {
    "id": 2241,
    "name": "Al-Istiwaiyah",
    "name_zh": "赤道",
    "pid": 194
  },
  {
    "id": 2242,
    "name": "Darfur",
    "name_zh": "达尔富尔",
    "pid": 194
  },
  {
    "id": 2243,
    "name": "Ash-Sharqiyah",
    "name_zh": "东部",
    "pid": 194
  },
  {
    "id": 2244,
    "name": "Bahr al-Ghazal",
    "name_zh": "加扎勒河",
    "pid": 194
  },
  {
    "id": 2245,
    "name": "Al-Khartum",
    "name_zh": "喀土穆",
    "pid": 194
  },
  {
    "id": 2246,
    "name": "Kurdufan",
    "name_zh": "科尔多凡",
    "pid": 194
  },
  {
    "id": 2247,
    "name": "Aali an-Nil",
    "name_zh": "上尼罗",
    "pid": 194
  },
  {
    "id": 2248,
    "name": "Al Wasta",
    "name_zh": "中部",
    "pid": 194
  },
  {
    "id": 2249,
    "name": "Brokopondo",
    "name_zh": "布罗科蓬多",
    "pid": 195
  },
  {
    "id": 2250,
    "name": "Coronie",
    "name_zh": "科罗尼",
    "pid": 195
  },
  {
    "id": 2251,
    "name": "Commewijne",
    "name_zh": "科默韦讷",
    "pid": 195
  },
  {
    "id": 2252,
    "name": "Marowijne",
    "name_zh": "马罗韦讷",
    "pid": 195
  },
  {
    "id": 2253,
    "name": "Nickerie",
    "name_zh": "尼克里",
    "pid": 195
  },
  {
    "id": 2254,
    "name": "Para",
    "name_zh": "帕拉",
    "pid": 195
  },
  {
    "id": 2255,
    "name": "Paramaribo",
    "name_zh": "帕拉马里博",
    "pid": 195
  },
  {
    "id": 2256,
    "name": "Saramacca",
    "name_zh": "萨拉马卡",
    "pid": 195
  },
  {
    "id": 2257,
    "name": "Wanica",
    "name_zh": "瓦尼卡",
    "pid": 195
  },
  {
    "id": 2258,
    "name": "Sipaliwini",
    "name_zh": "西帕里韦尼",
    "pid": 195
  },
  {
    "id": 2259,
    "name": "Guadalcanal",
    "name_zh": "瓜达尔卡纳尔",
    "pid": 196
  },
  {
    "id": 2260,
    "name": "Honiara",
    "name_zh": "霍尼亚拉",
    "pid": 196
  },
  {
    "id": 2261,
    "name": "Rennell and Bellona",
    "name_zh": "拉纳尔和贝罗纳",
    "pid": 196
  },
  {
    "id": 2262,
    "name": "Makira",
    "name_zh": "马基拉",
    "pid": 196
  },
  {
    "id": 2263,
    "name": "Malaita",
    "name_zh": "马莱塔",
    "pid": 196
  },
  {
    "id": 2264,
    "name": "Choiseul",
    "name_zh": "乔伊索",
    "pid": 196
  },
  {
    "id": 2265,
    "name": "Temotu",
    "name_zh": "泰莫图",
    "pid": 196
  },
  {
    "id": 2266,
    "name": "Western",
    "name_zh": "西部",
    "pid": 196
  },
  {
    "id": 2267,
    "name": "Isabel",
    "name_zh": "伊萨贝尔",
    "pid": 196
  },
  {
    "id": 2268,
    "name": "Central Islands",
    "name_zh": "中部群岛",
    "pid": 196
  },
  {
    "id": 2269,
    "name": "Dushanbe",
    "name_zh": "杜尚别",
    "pid": 198
  },
  {
    "id": 2270,
    "name": "Khorugh",
    "name_zh": "霍罗格",
    "pid": 198
  },
  {
    "id": 2271,
    "name": "Kanibadam",
    "name_zh": "卡尼巴达姆",
    "pid": 198
  },
  {
    "id": 2272,
    "name": "Kofarnihon",
    "name_zh": "科法尔尼洪",
    "pid": 198
  },
  {
    "id": 2273,
    "name": "Khujand",
    "name_zh": "苦盏",
    "pid": 198
  },
  {
    "id": 2274,
    "name": "Kurgan-Tjube",
    "name_zh": "库尔干-秋别",
    "pid": 198
  },
  {
    "id": 2275,
    "name": "Kulob",
    "name_zh": "库洛布",
    "pid": 198
  },
  {
    "id": 2276,
    "name": "Rogun",
    "name_zh": "洛贡",
    "pid": 198
  },
  {
    "id": 2277,
    "name": "Nurek",
    "name_zh": "努雷克",
    "pid": 198
  },
  {
    "id": 2278,
    "name": "Pendzhikent",
    "name_zh": "彭吉肯特",
    "pid": 198
  },
  {
    "id": 2279,
    "name": "Sarband",
    "name_zh": "萨班特",
    "pid": 198
  },
  {
    "id": 2280,
    "name": "Taboshar",
    "name_zh": "塔博沙尔",
    "pid": 198
  },
  {
    "id": 2281,
    "name": "Tursunzade",
    "name_zh": "图尔孙扎德",
    "pid": 198
  },
  {
    "id": 2282,
    "name": "Ura-Tjube",
    "name_zh": "乌拉秋别",
    "pid": 198
  },
  {
    "id": 2283,
    "name": "Isfara",
    "name_zh": "伊斯法拉",
    "pid": 198
  },
  {
    "id": 2284,
    "name": "Amnat Charoen",
    "name_zh": "安纳乍能",
    "pid": 199
  },
  {
    "id": 2285,
    "name": "Prachuap Khiri Khan",
    "name_zh": "巴蜀",
    "pid": 199
  },
  {
    "id": 2286,
    "name": "Pathum Thani",
    "name_zh": "巴吞他尼",
    "pid": 199
  },
  {
    "id": 2287,
    "name": "Prachin Buri",
    "name_zh": "巴真",
    "pid": 199
  },
  {
    "id": 2288,
    "name": "Kanchanaburi",
    "name_zh": "北碧",
    "pid": 199
  },
  {
    "id": 2289,
    "name": "Saraburi",
    "name_zh": "北标",
    "pid": 199
  },
  {
    "id": 2290,
    "name": "Pattani",
    "name_zh": "北大年",
    "pid": 199
  },
  {
    "id": 2291,
    "name": "Samut Prakan",
    "name_zh": "北揽",
    "pid": 199
  },
  {
    "id": 2292,
    "name": "Nakhon Sawan",
    "name_zh": "北榄坡",
    "pid": 199
  },
  {
    "id": 2293,
    "name": "Chachoengsao",
    "name_zh": "北柳",
    "pid": 199
  },
  {
    "id": 2294,
    "name": "Phetchabun",
    "name_zh": "碧差汶",
    "pid": 199
  },
  {
    "id": 2295,
    "name": "Phatthalung",
    "name_zh": "博达伦",
    "pid": 199
  },
  {
    "id": 2296,
    "name": "Chai Nat",
    "name_zh": "猜那",
    "pid": 199
  },
  {
    "id": 2297,
    "name": "Chaiyaphum",
    "name_zh": "猜也奔",
    "pid": 199
  },
  {
    "id": 2298,
    "name": "Uttaradit",
    "name_zh": "程逸",
    "pid": 199
  },
  {
    "id": 2299,
    "name": "Chumphon",
    "name_zh": "春蓬",
    "pid": 199
  },
  {
    "id": 2300,
    "name": "Chon Buri",
    "name_zh": "春武里",
    "pid": 199
  },
  {
    "id": 2301,
    "name": "Tak",
    "name_zh": "达",
    "pid": 199
  },
  {
    "id": 2302,
    "name": "Trat",
    "name_zh": "达叻",
    "pid": 199
  },
  {
    "id": 2303,
    "name": "Phra Nakhon Si Ayutthaya",
    "name_zh": "大城",
    "pid": 199
  },
  {
    "id": 2304,
    "name": "Trang",
    "name_zh": "董里",
    "pid": 199
  },
  {
    "id": 2305,
    "name": "Phetchaburi",
    "name_zh": "佛丕",
    "pid": 199
  },
  {
    "id": 2306,
    "name": "Nakhon Pathom",
    "name_zh": "佛统",
    "pid": 199
  },
  {
    "id": 2307,
    "name": "Kamphaeng Phet",
    "name_zh": "甘烹碧",
    "pid": 199
  },
  {
    "id": 2308,
    "name": "Ang Thong",
    "name_zh": "红统",
    "pid": 199
  },
  {
    "id": 2309,
    "name": "Lop Buri",
    "name_zh": "华富里",
    "pid": 199
  },
  {
    "id": 2310,
    "name": "Kalasin",
    "name_zh": "加拉信",
    "pid": 199
  },
  {
    "id": 2311,
    "name": "Krabi",
    "name_zh": "甲米",
    "pid": 199
  },
  {
    "id": 2312,
    "name": "Chanthaburi",
    "name_zh": "尖竹汶",
    "pid": 199
  },
  {
    "id": 2313,
    "name": "Khon Kaen",
    "name_zh": "孔敬",
    "pid": 199
  },
  {
    "id": 2314,
    "name": "Rayong",
    "name_zh": "拉农",
    "pid": 199
  },
  {
    "id": 2315,
    "name": "Nong Khai",
    "name_zh": "廊开",
    "pid": 199
  },
  {
    "id": 2316,
    "name": "Nong Bua Lamphu",
    "name_zh": "廊莫那浦",
    "pid": 199
  },
  {
    "id": 2317,
    "name": "Ratchaburi",
    "name_zh": "叻丕",
    "pid": 199
  },
  {
    "id": 2318,
    "name": "Loei",
    "name_zh": "黎",
    "pid": 199
  },
  {
    "id": 2319,
    "name": "Roi Et",
    "name_zh": "黎逸",
    "pid": 199
  },
  {
    "id": 2320,
    "name": "Samut Sakhon",
    "name_zh": "龙仔厝",
    "pid": 199
  },
  {
    "id": 2321,
    "name": "Ranong",
    "name_zh": "罗勇",
    "pid": 199
  },
  {
    "id": 2322,
    "name": "Nakhon Si Thammarat",
    "name_zh": "洛坤",
    "pid": 199
  },
  {
    "id": 2323,
    "name": "Maha Sarakham",
    "name_zh": "玛哈沙拉堪",
    "pid": 199
  },
  {
    "id": 2324,
    "name": "Bangkok",
    "name_zh": "曼谷",
    "pid": 199
  },
  {
    "id": 2325,
    "name": "Mukdahan",
    "name_zh": "莫达汉",
    "pid": 199
  },
  {
    "id": 2326,
    "name": "Nakhon Nayok",
    "name_zh": "那空那育",
    "pid": 199
  },
  {
    "id": 2327,
    "name": "Nakhon Phanom",
    "name_zh": "那空帕农",
    "pid": 199
  },
  {
    "id": 2328,
    "name": "Nan",
    "name_zh": "难",
    "pid": 199
  },
  {
    "id": 2329,
    "name": "Lamphun",
    "name_zh": "南奔",
    "pid": 199
  },
  {
    "id": 2330,
    "name": "Nonthaburi",
    "name_zh": "暖武里",
    "pid": 199
  },
  {
    "id": 2331,
    "name": "Phrae",
    "name_zh": "帕",
    "pid": 199
  },
  {
    "id": 2332,
    "name": "Phayao",
    "name_zh": "帕尧",
    "pid": 199
  },
  {
    "id": 2333,
    "name": "Phangnga",
    "name_zh": "攀牙",
    "pid": 199
  },
  {
    "id": 2334,
    "name": "Phitsanulok",
    "name_zh": "彭世洛",
    "pid": 199
  },
  {
    "id": 2335,
    "name": "Phichit",
    "name_zh": "披集",
    "pid": 199
  },
  {
    "id": 2336,
    "name": "Phuket",
    "name_zh": "普吉",
    "pid": 199
  },
  {
    "id": 2337,
    "name": "Chiang Rai",
    "name_zh": "清莱",
    "pid": 199
  },
  {
    "id": 2338,
    "name": "Chiang Mai",
    "name_zh": "清迈",
    "pid": 199
  },
  {
    "id": 2339,
    "name": "Sakon Nakhon",
    "name_zh": "色军",
    "pid": 199
  },
  {
    "id": 2340,
    "name": "Satun",
    "name_zh": "沙敦",
    "pid": 199
  },
  {
    "id": 2341,
    "name": "Sa Kaeo",
    "name_zh": "沙缴",
    "pid": 199
  },
  {
    "id": 2342,
    "name": "Si sa ket",
    "name_zh": "四色菊",
    "pid": 199
  },
  {
    "id": 2343,
    "name": "Songkhla",
    "name_zh": "宋卡",
    "pid": 199
  },
  {
    "id": 2344,
    "name": "Sukhothai",
    "name_zh": "素可泰",
    "pid": 199
  },
  {
    "id": 2345,
    "name": "Surat Thani",
    "name_zh": "素叻",
    "pid": 199
  },
  {
    "id": 2346,
    "name": "Surin",
    "name_zh": "素林",
    "pid": 199
  },
  {
    "id": 2347,
    "name": "Suphan Buri",
    "name_zh": "素攀武里",
    "pid": 199
  },
  {
    "id": 2348,
    "name": "Narathiwat",
    "name_zh": "陶公",
    "pid": 199
  },
  {
    "id": 2349,
    "name": "Udon Thani",
    "name_zh": "乌隆",
    "pid": 199
  },
  {
    "id": 2350,
    "name": "Uthai Thani",
    "name_zh": "乌泰他尼",
    "pid": 199
  },
  {
    "id": 2351,
    "name": "Ubon Ratchathani",
    "name_zh": "乌汶",
    "pid": 199
  },
  {
    "id": 2352,
    "name": "Buri Ram",
    "name_zh": "武里南",
    "pid": 199
  },
  {
    "id": 2353,
    "name": "Sing Buri",
    "name_zh": "信武里",
    "pid": 199
  },
  {
    "id": 2354,
    "name": "Yasothon",
    "name_zh": "耶梭通",
    "pid": 199
  },
  {
    "id": 2355,
    "name": "Yala",
    "name_zh": "也拉",
    "pid": 199
  },
  {
    "id": 2356,
    "name": "Mae Hong Son",
    "name_zh": "夜丰颂",
    "pid": 199
  },
  {
    "id": 2357,
    "name": "Samut Songkhram",
    "name_zh": "夜功",
    "pid": 199
  },
  {
    "id": 2358,
    "name": "Arusha",
    "name_zh": "阿鲁沙",
    "pid": 200
  },
  {
    "id": 2359,
    "name": "Kaskazini Pemba",
    "name_zh": "奔巴北",
    "pid": 200
  },
  {
    "id": 2360,
    "name": "Kusini Pemba",
    "name_zh": "奔巴南",
    "pid": 200
  },
  {
    "id": 2361,
    "name": "Pwani",
    "name_zh": "滨海",
    "pid": 200
  },
  {
    "id": 2362,
    "name": "Dar es Salaam",
    "name_zh": "达累斯萨拉姆",
    "pid": 200
  },
  {
    "id": 2363,
    "name": "Dodoma",
    "name_zh": "多多马",
    "pid": 200
  },
  {
    "id": 2364,
    "name": "Kigoma",
    "name_zh": "基戈马",
    "pid": 200
  },
  {
    "id": 2365,
    "name": "Kagera",
    "name_zh": "卡盖拉",
    "pid": 200
  },
  {
    "id": 2366,
    "name": "Lindi",
    "name_zh": "林迪",
    "pid": 200
  },
  {
    "id": 2367,
    "name": "Rukwa",
    "name_zh": "鲁夸",
    "pid": 200
  },
  {
    "id": 2368,
    "name": "Ruvuma",
    "name_zh": "鲁伍马",
    "pid": 200
  },
  {
    "id": 2369,
    "name": "Mara",
    "name_zh": "马腊",
    "pid": 200
  },
  {
    "id": 2370,
    "name": "Manyara",
    "name_zh": "曼亚拉",
    "pid": 200
  },
  {
    "id": 2371,
    "name": "Morogoro",
    "name_zh": "莫洛戈罗",
    "pid": 200
  },
  {
    "id": 2372,
    "name": "Mbeya",
    "name_zh": "姆贝亚",
    "pid": 200
  },
  {
    "id": 2373,
    "name": "Mtwara",
    "name_zh": "姆特瓦拉",
    "pid": 200
  },
  {
    "id": 2374,
    "name": "Mwanza",
    "name_zh": "姆万扎",
    "pid": 200
  },
  {
    "id": 2375,
    "name": "Kilimanjaro",
    "name_zh": "乞力马扎罗",
    "pid": 200
  },
  {
    "id": 2376,
    "name": "Zanzibar",
    "name_zh": "桑给巴尔",
    "pid": 200
  },
  {
    "id": 2377,
    "name": "Kaskazini Unguja",
    "name_zh": "桑给巴尔北",
    "pid": 200
  },
  {
    "id": 2378,
    "name": "Kusini Unguja",
    "name_zh": "桑给巴尔南",
    "pid": 200
  },
  {
    "id": 2379,
    "name": "Mjini Magharibi",
    "name_zh": "桑给巴尔市和西",
    "pid": 200
  },
  {
    "id": 2380,
    "name": "Tabora",
    "name_zh": "塔波拉",
    "pid": 200
  },
  {
    "id": 2381,
    "name": "Tanga",
    "name_zh": "坦噶",
    "pid": 200
  },
  {
    "id": 2382,
    "name": "Singida",
    "name_zh": "辛吉达",
    "pid": 200
  },
  {
    "id": 2383,
    "name": "Shinyanga",
    "name_zh": "欣延加",
    "pid": 200
  },
  {
    "id": 2384,
    "name": "Iringa",
    "name_zh": "伊林加",
    "pid": 200
  },
  {
    "id": 2385,
    "name": "Eua",
    "name_zh": "埃瓦",
    "pid": 201
  },
  {
    "id": 2386,
    "name": "Haapai",
    "name_zh": "哈派",
    "pid": 201
  },
  {
    "id": 2387,
    "name": "Niuas",
    "name_zh": "纽阿斯",
    "pid": 201
  },
  {
    "id": 2388,
    "name": "Tongatapu",
    "name_zh": "汤加塔布",
    "pid": 201
  },
  {
    "id": 2389,
    "name": "Vavau",
    "name_zh": "瓦瓦乌",
    "pid": 201
  },
  {
    "id": 2390,
    "name": "Ariana",
    "name_zh": "艾尔亚奈",
    "pid": 205
  },
  {
    "id": 2391,
    "name": "Beja",
    "name_zh": "巴杰",
    "pid": 205
  },
  {
    "id": 2392,
    "name": "Ben Arous",
    "name_zh": "本阿鲁斯",
    "pid": 205
  },
  {
    "id": 2393,
    "name": "Bizerte",
    "name_zh": "比塞大",
    "pid": 205
  },
  {
    "id": 2394,
    "name": "Kebili",
    "name_zh": "吉比利",
    "pid": 205
  },
  {
    "id": 2395,
    "name": "Gabes",
    "name_zh": "加贝斯",
    "pid": 205
  },
  {
    "id": 2396,
    "name": "Gafsa",
    "name_zh": "加夫萨",
    "pid": 205
  },
  {
    "id": 2397,
    "name": "Jendouba",
    "name_zh": "坚杜拜",
    "pid": 205
  },
  {
    "id": 2398,
    "name": "Le Kef",
    "name_zh": "卡夫",
    "pid": 205
  },
  {
    "id": 2399,
    "name": "Kasserine",
    "name_zh": "卡塞林",
    "pid": 205
  },
  {
    "id": 2400,
    "name": "Kairouan",
    "name_zh": "凯鲁万",
    "pid": 205
  },
  {
    "id": 2401,
    "name": "Mahdia",
    "name_zh": "马赫迪耶",
    "pid": 205
  },
  {
    "id": 2402,
    "name": "Manouba",
    "name_zh": "马努巴",
    "pid": 205
  },
  {
    "id": 2403,
    "name": "Medenine",
    "name_zh": "梅德宁",
    "pid": 205
  },
  {
    "id": 2404,
    "name": "Monastir",
    "name_zh": "莫纳斯提尔",
    "pid": 205
  },
  {
    "id": 2405,
    "name": "Nabeul",
    "name_zh": "纳布勒",
    "pid": 205
  },
  {
    "id": 2406,
    "name": "Sfax",
    "name_zh": "斯法克斯",
    "pid": 205
  },
  {
    "id": 2407,
    "name": "Sousse",
    "name_zh": "苏塞",
    "pid": 205
  },
  {
    "id": 2408,
    "name": "Tataouine",
    "name_zh": "泰塔温",
    "pid": 205
  },
  {
    "id": 2409,
    "name": "Tunis",
    "name_zh": "突尼斯",
    "pid": 205
  },
  {
    "id": 2410,
    "name": "Tozeur",
    "name_zh": "托泽尔",
    "pid": 205
  },
  {
    "id": 2411,
    "name": "Sidi Bouzid",
    "name_zh": "西迪布济德",
    "pid": 205
  },
  {
    "id": 2412,
    "name": "Siliana",
    "name_zh": "锡勒亚奈",
    "pid": 205
  },
  {
    "id": 2413,
    "name": "Zaghouan",
    "name_zh": "宰格万",
    "pid": 205
  },
  {
    "id": 2414,
    "name": "Adana",
    "name_zh": "阿达纳",
    "pid": 207
  },
  {
    "id": 2415,
    "name": "Adiyaman",
    "name_zh": "阿德亚曼",
    "pid": 207
  },
  {
    "id": 2416,
    "name": "Ardahan",
    "name_zh": "阿尔达罕",
    "pid": 207
  },
  {
    "id": 2417,
    "name": "Artvin",
    "name_zh": "阿尔特温",
    "pid": 207
  },
  {
    "id": 2418,
    "name": "Afyon",
    "name_zh": "阿菲永",
    "pid": 207
  },
  {
    "id": 2419,
    "name": "Aksaray",
    "name_zh": "阿克萨赖",
    "pid": 207
  },
  {
    "id": 2420,
    "name": "Agri",
    "name_zh": "阿勒",
    "pid": 207
  },
  {
    "id": 2421,
    "name": "Amasya",
    "name_zh": "阿马西亚",
    "pid": 207
  },
  {
    "id": 2422,
    "name": "Edirne",
    "name_zh": "埃迪尔内",
    "pid": 207
  },
  {
    "id": 2423,
    "name": "Erzincan",
    "name_zh": "埃尔津詹",
    "pid": 207
  },
  {
    "id": 2424,
    "name": "Erzurum",
    "name_zh": "埃尔祖鲁姆",
    "pid": 207
  },
  {
    "id": 2425,
    "name": "Elazig",
    "name_zh": "埃拉泽",
    "pid": 207
  },
  {
    "id": 2426,
    "name": "Eskisehir",
    "name_zh": "埃斯基谢希尔",
    "pid": 207
  },
  {
    "id": 2427,
    "name": "Aydin",
    "name_zh": "艾登",
    "pid": 207
  },
  {
    "id": 2428,
    "name": "Ankara",
    "name_zh": "安卡拉",
    "pid": 207
  },
  {
    "id": 2429,
    "name": "Antalya",
    "name_zh": "安塔利亚",
    "pid": 207
  },
  {
    "id": 2430,
    "name": "Ordu",
    "name_zh": "奥尔杜",
    "pid": 207
  },
  {
    "id": 2431,
    "name": "Bartin",
    "name_zh": "巴尔腾",
    "pid": 207
  },
  {
    "id": 2432,
    "name": "Balikesir",
    "name_zh": "巴勒克埃西尔",
    "pid": 207
  },
  {
    "id": 2433,
    "name": "Batman",
    "name_zh": "巴特曼",
    "pid": 207
  },
  {
    "id": 2434,
    "name": "Bayburt",
    "name_zh": "巴伊布尔特",
    "pid": 207
  },
  {
    "id": 2435,
    "name": "Bilecik",
    "name_zh": "比莱吉克",
    "pid": 207
  },
  {
    "id": 2436,
    "name": "Bitlis",
    "name_zh": "比特利斯",
    "pid": 207
  },
  {
    "id": 2437,
    "name": "Bingol",
    "name_zh": "宾格尔",
    "pid": 207
  },
  {
    "id": 2438,
    "name": "Bolu",
    "name_zh": "博卢",
    "pid": 207
  },
  {
    "id": 2439,
    "name": "Burdur",
    "name_zh": "布尔杜尔",
    "pid": 207
  },
  {
    "id": 2440,
    "name": "Bursa",
    "name_zh": "布尔萨",
    "pid": 207
  },
  {
    "id": 2441,
    "name": "Cankiri",
    "name_zh": "昌克勒",
    "pid": 207
  },
  {
    "id": 2442,
    "name": "Denizli",
    "name_zh": "代尼兹利",
    "pid": 207
  },
  {
    "id": 2443,
    "name": "Diyarbakir",
    "name_zh": "迪亚巴克尔",
    "pid": 207
  },
  {
    "id": 2444,
    "name": "Van",
    "name_zh": "凡",
    "pid": 207
  },
  {
    "id": 2445,
    "name": "Hakkari",
    "name_zh": "哈卡里",
    "pid": 207
  },
  {
    "id": 2446,
    "name": "Hatay",
    "name_zh": "哈塔伊",
    "pid": 207
  },
  {
    "id": 2447,
    "name": "Kilis",
    "name_zh": "基利斯",
    "pid": 207
  },
  {
    "id": 2448,
    "name": "Giresun",
    "name_zh": "吉雷松",
    "pid": 207
  },
  {
    "id": 2449,
    "name": "Gaziantep",
    "name_zh": "加济安泰普",
    "pid": 207
  },
  {
    "id": 2450,
    "name": "Gumushane",
    "name_zh": "居米什哈内",
    "pid": 207
  },
  {
    "id": 2451,
    "name": "Kars",
    "name_zh": "卡尔斯",
    "pid": 207
  },
  {
    "id": 2452,
    "name": "Kahraman Maras",
    "name_zh": "卡赫拉曼马拉什",
    "pid": 207
  },
  {
    "id": 2453,
    "name": "Karabuk",
    "name_zh": "卡拉比克",
    "pid": 207
  },
  {
    "id": 2454,
    "name": "Karaman",
    "name_zh": "卡拉曼",
    "pid": 207
  },
  {
    "id": 2455,
    "name": "Kastamonu",
    "name_zh": "卡斯塔莫努",
    "pid": 207
  },
  {
    "id": 2456,
    "name": "Kayseri",
    "name_zh": "开塞利",
    "pid": 207
  },
  {
    "id": 2457,
    "name": "Kocaeli",
    "name_zh": "科贾埃利",
    "pid": 207
  },
  {
    "id": 2458,
    "name": "Kirklareli",
    "name_zh": "柯克拉雷利",
    "pid": 207
  },
  {
    "id": 2459,
    "name": "Konya",
    "name_zh": "科尼亚",
    "pid": 207
  },
  {
    "id": 2460,
    "name": "Kirsehir",
    "name_zh": "克尔谢希尔",
    "pid": 207
  },
  {
    "id": 2461,
    "name": "Kirikkale",
    "name_zh": "克勒克卡莱",
    "pid": 207
  },
  {
    "id": 2462,
    "name": "Urfa",
    "name_zh": "拉飞",
    "pid": 207
  },
  {
    "id": 2463,
    "name": "Rize",
    "name_zh": "里泽",
    "pid": 207
  },
  {
    "id": 2464,
    "name": "Mardin",
    "name_zh": "马尔丁",
    "pid": 207
  },
  {
    "id": 2465,
    "name": "Malatya",
    "name_zh": "马拉蒂亚",
    "pid": 207
  },
  {
    "id": 2466,
    "name": "Manisa",
    "name_zh": "马尼萨",
    "pid": 207
  },
  {
    "id": 2467,
    "name": "Mugla",
    "name_zh": "穆拉",
    "pid": 207
  },
  {
    "id": 2468,
    "name": "Mus",
    "name_zh": "穆什",
    "pid": 207
  },
  {
    "id": 2469,
    "name": "Nevsehir",
    "name_zh": "内夫谢希尔",
    "pid": 207
  },
  {
    "id": 2470,
    "name": "Nigde",
    "name_zh": "尼代",
    "pid": 207
  },
  {
    "id": 2471,
    "name": "Canakkale",
    "name_zh": "恰纳卡莱",
    "pid": 207
  },
  {
    "id": 2472,
    "name": "Corum",
    "name_zh": "乔鲁姆",
    "pid": 207
  },
  {
    "id": 2473,
    "name": "Kutahya",
    "name_zh": "屈塔希亚",
    "pid": 207
  },
  {
    "id": 2474,
    "name": "Sakarya",
    "name_zh": "萨卡里亚",
    "pid": 207
  },
  {
    "id": 2475,
    "name": "Samsun",
    "name_zh": "萨姆松",
    "pid": 207
  },
  {
    "id": 2476,
    "name": "Tekirdag",
    "name_zh": "泰基尔达",
    "pid": 207
  },
  {
    "id": 2477,
    "name": "Trabzon",
    "name_zh": "特拉布宗",
    "pid": 207
  },
  {
    "id": 2478,
    "name": "Tunceli",
    "name_zh": "通杰利",
    "pid": 207
  },
  {
    "id": 2479,
    "name": "Tokat",
    "name_zh": "托卡特",
    "pid": 207
  },
  {
    "id": 2480,
    "name": "Usak",
    "name_zh": "乌萨克",
    "pid": 207
  },
  {
    "id": 2481,
    "name": "Sirnak",
    "name_zh": "锡尔纳克",
    "pid": 207
  },
  {
    "id": 2482,
    "name": "Siirt",
    "name_zh": "锡尔特",
    "pid": 207
  },
  {
    "id": 2483,
    "name": "Sinop",
    "name_zh": "锡诺普",
    "pid": 207
  },
  {
    "id": 2484,
    "name": "Sivas",
    "name_zh": "锡瓦斯",
    "pid": 207
  },
  {
    "id": 2485,
    "name": "Igdir",
    "name_zh": "伊迪尔",
    "pid": 207
  },
  {
    "id": 2486,
    "name": "Icel",
    "name_zh": "伊切尔",
    "pid": 207
  },
  {
    "id": 2487,
    "name": "Isparta",
    "name_zh": "伊斯帕尔塔",
    "pid": 207
  },
  {
    "id": 2488,
    "name": "Istanbul",
    "name_zh": "伊斯坦布尔",
    "pid": 207
  },
  {
    "id": 2489,
    "name": "Izmir",
    "name_zh": "伊兹密尔",
    "pid": 207
  },
  {
    "id": 2490,
    "name": "Yozgat",
    "name_zh": "约兹加特",
    "pid": 207
  },
  {
    "id": 2491,
    "name": "Zonguldak",
    "name_zh": "宗古尔达克",
    "pid": 207
  },
  {
    "id": 2492,
    "name": "Ahal",
    "name_zh": "阿哈尔",
    "pid": 208
  },
  {
    "id": 2493,
    "name": "Ashgabat",
    "name_zh": "阿什哈巴德市",
    "pid": 208
  },
  {
    "id": 2494,
    "name": "Balkan",
    "name_zh": "巴尔坎",
    "pid": 208
  },
  {
    "id": 2495,
    "name": "Dashoguz",
    "name_zh": "达沙古兹",
    "pid": 208
  },
  {
    "id": 2496,
    "name": "Lebap",
    "name_zh": "列巴普",
    "pid": 208
  },
  {
    "id": 2497,
    "name": "Mary",
    "name_zh": "马雷",
    "pid": 208
  },
  {
    "id": 2498,
    "name": "Nebitdag",
    "name_zh": "涅比特达格",
    "pid": 208
  },
  {
    "id": 2499,
    "name": "Malampa",
    "name_zh": "马朗帕",
    "pid": 211
  },
  {
    "id": 2500,
    "name": "Penama",
    "name_zh": "彭纳马",
    "pid": 211
  },
  {
    "id": 2501,
    "name": "Sanma",
    "name_zh": "桑马",
    "pid": 211
  },
  {
    "id": 2502,
    "name": "Tafea",
    "name_zh": "塔菲阿",
    "pid": 211
  },
  {
    "id": 2503,
    "name": "Torba",
    "name_zh": "托尔巴",
    "pid": 211
  },
  {
    "id": 2504,
    "name": "Shefa",
    "name_zh": "谢法",
    "pid": 211
  },
  {
    "id": 2505,
    "name": "El Progreso",
    "name_zh": "埃尔普罗格雷索",
    "pid": 212
  },
  {
    "id": 2506,
    "name": "Escuintla",
    "name_zh": "埃斯昆特拉",
    "pid": 212
  },
  {
    "id": 2507,
    "name": "Jalapa",
    "name_zh": "哈拉帕",
    "pid": 212
  },
  {
    "id": 2508,
    "name": "Jutiapa",
    "name_zh": "胡蒂亚帕",
    "pid": 212
  },
  {
    "id": 2509,
    "name": "Quiche",
    "name_zh": "基切",
    "pid": 212
  },
  {
    "id": 2510,
    "name": "Quetzaltenango",
    "name_zh": "克萨尔特南戈",
    "pid": 212
  },
  {
    "id": 2511,
    "name": "Retalhuleu",
    "name_zh": "雷塔卢莱乌",
    "pid": 212
  },
  {
    "id": 2512,
    "name": "Mixco",
    "name_zh": "米克斯科",
    "pid": 212
  },
  {
    "id": 2513,
    "name": "Peten",
    "name_zh": "佩滕",
    "pid": 212
  },
  {
    "id": 2514,
    "name": "Chiquimula",
    "name_zh": "奇基穆拉",
    "pid": 212
  },
  {
    "id": 2515,
    "name": "Chimaltenango",
    "name_zh": "奇马尔特南戈",
    "pid": 212
  },
  {
    "id": 2516,
    "name": "Zacapa",
    "name_zh": "萨卡帕",
    "pid": 212
  },
  {
    "id": 2517,
    "name": "Sacatepequez",
    "name_zh": "萨卡特佩克斯",
    "pid": 212
  },
  {
    "id": 2518,
    "name": "Alta Verapaz",
    "name_zh": "上韦拉帕斯",
    "pid": 212
  },
  {
    "id": 2519,
    "name": "Santa Rosa",
    "name_zh": "圣罗莎",
    "pid": 212
  },
  {
    "id": 2520,
    "name": "San Marcos",
    "name_zh": "圣马科斯",
    "pid": 212
  },
  {
    "id": 2521,
    "name": "Suchitepequez",
    "name_zh": "苏奇特佩克斯",
    "pid": 212
  },
  {
    "id": 2522,
    "name": "Solola",
    "name_zh": "索洛拉",
    "pid": 212
  },
  {
    "id": 2523,
    "name": "Totonicapan",
    "name_zh": "托托尼卡潘",
    "pid": 212
  },
  {
    "id": 2524,
    "name": "Guatemala",
    "name_zh": "危地马拉",
    "pid": 212
  },
  {
    "id": 2525,
    "name": "Huehuetenango",
    "name_zh": "韦韦特南戈",
    "pid": 212
  },
  {
    "id": 2526,
    "name": "Baja Verapaz",
    "name_zh": "下韦拉帕斯",
    "pid": 212
  },
  {
    "id": 2527,
    "name": "Villa Nueva",
    "name_zh": "新城",
    "pid": 212
  },
  {
    "id": 2528,
    "name": "Izabal",
    "name_zh": "伊萨瓦尔",
    "pid": 212
  },
  {
    "id": 2529,
    "name": "Aragua",
    "name_zh": "阿拉瓜",
    "pid": 215
  },
  {
    "id": 2530,
    "name": "Delta Amacuro",
    "name_zh": "阿马库罗三角洲",
    "pid": 215
  },
  {
    "id": 2531,
    "name": "Apure",
    "name_zh": "阿普雷",
    "pid": 215
  },
  {
    "id": 2532,
    "name": "Anzoategui",
    "name_zh": "安索阿特吉",
    "pid": 215
  },
  {
    "id": 2533,
    "name": "Barinas",
    "name_zh": "巴里纳斯",
    "pid": 215
  },
  {
    "id": 2534,
    "name": "Bolivar",
    "name_zh": "玻利瓦尔",
    "pid": 215
  },
  {
    "id": 2535,
    "name": "Portuguesa",
    "name_zh": "波图格萨",
    "pid": 215
  },
  {
    "id": 2536,
    "name": "Falcon",
    "name_zh": "法尔孔",
    "pid": 215
  },
  {
    "id": 2537,
    "name": "Guarico",
    "name_zh": "瓜里科",
    "pid": 215
  },
  {
    "id": 2538,
    "name": "Caracas",
    "name_zh": "加拉加斯",
    "pid": 215
  },
  {
    "id": 2539,
    "name": "Carabobo",
    "name_zh": "卡拉沃沃",
    "pid": 215
  },
  {
    "id": 2540,
    "name": "Cojedes",
    "name_zh": "科赫德斯",
    "pid": 215
  },
  {
    "id": 2541,
    "name": "Lara",
    "name_zh": "拉腊",
    "pid": 215
  },
  {
    "id": 2542,
    "name": "Dependencias Federales",
    "name_zh": "联邦属地",
    "pid": 215
  },
  {
    "id": 2543,
    "name": "Merida",
    "name_zh": "梅里达",
    "pid": 215
  },
  {
    "id": 2544,
    "name": "Miranda",
    "name_zh": "米兰达",
    "pid": 215
  },
  {
    "id": 2545,
    "name": "Monagas",
    "name_zh": "莫纳加斯",
    "pid": 215
  },
  {
    "id": 2546,
    "name": "Sucre",
    "name_zh": "苏克雷",
    "pid": 215
  },
  {
    "id": 2547,
    "name": "Zulia",
    "name_zh": "苏利亚",
    "pid": 215
  },
  {
    "id": 2548,
    "name": "Tachira",
    "name_zh": "塔奇拉",
    "pid": 215
  },
  {
    "id": 2549,
    "name": "Trujillo",
    "name_zh": "特鲁希略",
    "pid": 215
  },
  {
    "id": 2550,
    "name": "Estado Nueva Esparta",
    "name_zh": "新埃斯帕塔",
    "pid": 215
  },
  {
    "id": 2551,
    "name": "Yaracuy",
    "name_zh": "亚拉奎",
    "pid": 215
  },
  {
    "id": 2552,
    "name": "Amazonas",
    "name_zh": "亚马孙",
    "pid": 215
  },
  {
    "id": 2553,
    "name": "Arua",
    "name_zh": "阿鲁阿",
    "pid": 217
  },
  {
    "id": 2554,
    "name": "Apac",
    "name_zh": "阿帕克",
    "pid": 217
  },
  {
    "id": 2555,
    "name": "Adjumani",
    "name_zh": "阿朱马尼",
    "pid": 217
  },
  {
    "id": 2556,
    "name": "Bundibugyo",
    "name_zh": "本迪布焦",
    "pid": 217
  },
  {
    "id": 2557,
    "name": "Bugiri",
    "name_zh": "布吉里",
    "pid": 217
  },
  {
    "id": 2558,
    "name": "Busia",
    "name_zh": "布西亚",
    "pid": 217
  },
  {
    "id": 2559,
    "name": "Bushenyi",
    "name_zh": "布谢尼",
    "pid": 217
  },
  {
    "id": 2560,
    "name": "Ntungamo",
    "name_zh": "恩通加莫",
    "pid": 217
  },
  {
    "id": 2561,
    "name": "Gulu",
    "name_zh": "古卢",
    "pid": 217
  },
  {
    "id": 2562,
    "name": "Hoima",
    "name_zh": "霍伊马",
    "pid": 217
  },
  {
    "id": 2563,
    "name": "Kibaale",
    "name_zh": "基巴莱",
    "pid": 217
  },
  {
    "id": 2564,
    "name": "Kiboga",
    "name_zh": "基博加",
    "pid": 217
  },
  {
    "id": 2565,
    "name": "Kyenjojo",
    "name_zh": "基恩乔乔",
    "pid": 217
  },
  {
    "id": 2566,
    "name": "Kisoro",
    "name_zh": "基索罗",
    "pid": 217
  },
  {
    "id": 2567,
    "name": "Kitgum",
    "name_zh": "基特古姆",
    "pid": 217
  },
  {
    "id": 2568,
    "name": "Jinja",
    "name_zh": "金贾",
    "pid": 217
  },
  {
    "id": 2569,
    "name": "Kabale",
    "name_zh": "卡巴莱",
    "pid": 217
  },
  {
    "id": 2570,
    "name": "Kabarole",
    "name_zh": "卡巴罗莱",
    "pid": 217
  },
  {
    "id": 2571,
    "name": "Kaberamaido",
    "name_zh": "卡贝拉马伊多",
    "pid": 217
  },
  {
    "id": 2572,
    "name": "Kalangala",
    "name_zh": "卡兰加拉",
    "pid": 217
  },
  {
    "id": 2573,
    "name": "Kamwenge",
    "name_zh": "卡姆文盖",
    "pid": 217
  },
  {
    "id": 2574,
    "name": "Kamuli",
    "name_zh": "卡穆利",
    "pid": 217
  },
  {
    "id": 2575,
    "name": "Kanungu",
    "name_zh": "卡农古",
    "pid": 217
  },
  {
    "id": 2576,
    "name": "Kapchorwa",
    "name_zh": "卡普乔鲁瓦",
    "pid": 217
  },
  {
    "id": 2577,
    "name": "Kasese",
    "name_zh": "卡塞塞",
    "pid": 217
  },
  {
    "id": 2578,
    "name": "Katakwi",
    "name_zh": "卡塔奎",
    "pid": 217
  },
  {
    "id": 2579,
    "name": "Kayunga",
    "name_zh": "卡永加",
    "pid": 217
  },
  {
    "id": 2580,
    "name": "Kampala",
    "name_zh": "坎帕拉",
    "pid": 217
  },
  {
    "id": 2581,
    "name": "Kotido",
    "name_zh": "科蒂多",
    "pid": 217
  },
  {
    "id": 2582,
    "name": "Kumi",
    "name_zh": "库米",
    "pid": 217
  },
  {
    "id": 2583,
    "name": "Rakai",
    "name_zh": "拉卡伊",
    "pid": 217
  },
  {
    "id": 2584,
    "name": "Lira",
    "name_zh": "利拉",
    "pid": 217
  },
  {
    "id": 2585,
    "name": "Luwero",
    "name_zh": "卢韦罗",
    "pid": 217
  },
  {
    "id": 2586,
    "name": "Rukungiri",
    "name_zh": "鲁昆吉里",
    "pid": 217
  },
  {
    "id": 2587,
    "name": "Masaka",
    "name_zh": "马萨卡",
    "pid": 217
  },
  {
    "id": 2588,
    "name": "Masindi",
    "name_zh": "马辛迪",
    "pid": 217
  },
  {
    "id": 2589,
    "name": "Mayuge",
    "name_zh": "马尤盖",
    "pid": 217
  },
  {
    "id": 2590,
    "name": "Moroto",
    "name_zh": "莫罗托",
    "pid": 217
  },
  {
    "id": 2591,
    "name": "Moyo",
    "name_zh": "莫约",
    "pid": 217
  },
  {
    "id": 2592,
    "name": "Mbarara",
    "name_zh": "姆巴拉拉",
    "pid": 217
  },
  {
    "id": 2593,
    "name": "Mbale",
    "name_zh": "姆巴莱",
    "pid": 217
  },
  {
    "id": 2594,
    "name": "Mpigi",
    "name_zh": "姆皮吉",
    "pid": 217
  },
  {
    "id": 2595,
    "name": "Mubende",
    "name_zh": "穆本德",
    "pid": 217
  },
  {
    "id": 2596,
    "name": "Mukono",
    "name_zh": "穆科诺",
    "pid": 217
  },
  {
    "id": 2597,
    "name": "Nakapiripirit",
    "name_zh": "纳卡皮里皮里特",
    "pid": 217
  },
  {
    "id": 2598,
    "name": "Nakasongola",
    "name_zh": "纳卡松戈拉",
    "pid": 217
  },
  {
    "id": 2599,
    "name": "Nebbi",
    "name_zh": "内比",
    "pid": 217
  },
  {
    "id": 2600,
    "name": "Pader",
    "name_zh": "帕德尔",
    "pid": 217
  },
  {
    "id": 2601,
    "name": "Pallisa",
    "name_zh": "帕利萨",
    "pid": 217
  },
  {
    "id": 2602,
    "name": "Sembabule",
    "name_zh": "森巴布莱",
    "pid": 217
  },
  {
    "id": 2603,
    "name": "Soroti",
    "name_zh": "索罗提",
    "pid": 217
  },
  {
    "id": 2604,
    "name": "Tororo",
    "name_zh": "托罗罗",
    "pid": 217
  },
  {
    "id": 2605,
    "name": "Wakiso",
    "name_zh": "瓦基索",
    "pid": 217
  },
  {
    "id": 2606,
    "name": "Sironko",
    "name_zh": "锡龙科",
    "pid": 217
  },
  {
    "id": 2607,
    "name": "Iganga",
    "name_zh": "伊甘加",
    "pid": 217
  },
  {
    "id": 2608,
    "name": "Yumbe",
    "name_zh": "永贝",
    "pid": 217
  },
  {
    "id": 2609,
    "name": "Odessa",
    "name_zh": "敖德萨",
    "pid": 218
  },
  {
    "id": 2610,
    "name": "Poltava",
    "name_zh": "波尔塔瓦",
    "pid": 218
  },
  {
    "id": 2611,
    "name": "Dnipropetrovsk",
    "name_zh": "第聂伯罗波得罗夫斯克",
    "pid": 218
  },
  {
    "id": 2612,
    "name": "Donetsk",
    "name_zh": "顿涅茨克",
    "pid": 218
  },
  {
    "id": 2613,
    "name": "Kharkiv",
    "name_zh": "哈尔科夫",
    "pid": 218
  },
  {
    "id": 2614,
    "name": "Khersonsrka",
    "name_zh": "赫尔松州",
    "pid": 218
  },
  {
    "id": 2615,
    "name": "Khmelnytsky",
    "name_zh": "赫梅利尼茨基",
    "pid": 218
  },
  {
    "id": 2616,
    "name": "Kyiv",
    "name_zh": "基辅",
    "pid": 218
  },
  {
    "id": 2617,
    "name": "Kirovohrad",
    "name_zh": "基洛夫格勒",
    "pid": 218
  },
  {
    "id": 2618,
    "name": "Ternopil",
    "name_zh": "捷尔诺波尔",
    "pid": 218
  },
  {
    "id": 2619,
    "name": "Respublika Krym",
    "name_zh": "克里米亚自治共和国",
    "pid": 218
  },
  {
    "id": 2620,
    "name": "Lviv",
    "name_zh": "利沃夫",
    "pid": 218
  },
  {
    "id": 2621,
    "name": "Luhansk",
    "name_zh": "卢甘斯克",
    "pid": 218
  },
  {
    "id": 2622,
    "name": "Rivne",
    "name_zh": "罗夫诺",
    "pid": 218
  },
  {
    "id": 2623,
    "name": "Mykolayiv",
    "name_zh": "尼古拉耶夫",
    "pid": 218
  },
  {
    "id": 2624,
    "name": "Cherkasy",
    "name_zh": "切尔卡瑟",
    "pid": 218
  },
  {
    "id": 2625,
    "name": "Chernihiv",
    "name_zh": "切尔尼戈夫",
    "pid": 218
  },
  {
    "id": 2626,
    "name": "Chernivtsi",
    "name_zh": "切尔诺夫策",
    "pid": 218
  },
  {
    "id": 2627,
    "name": "Zhytomyr",
    "name_zh": "日托米尔",
    "pid": 218
  },
  {
    "id": 2628,
    "name": "Sumy",
    "name_zh": "苏梅",
    "pid": 218
  },
  {
    "id": 2629,
    "name": "Zakarpatska",
    "name_zh": "外喀尔巴阡",
    "pid": 218
  },
  {
    "id": 2630,
    "name": "Vinnytsya",
    "name_zh": "文尼察",
    "pid": 218
  },
  {
    "id": 2631,
    "name": "Volyn",
    "name_zh": "沃伦",
    "pid": 218
  },
  {
    "id": 2632,
    "name": "Ivano-Frankivsk",
    "name_zh": "伊万－弗兰科夫州",
    "pid": 218
  },
  {
    "id": 2633,
    "name": "Zaporizhzhya",
    "name_zh": "扎波罗热",
    "pid": 218
  },
  {
    "id": 2634,
    "name": "Artigas",
    "name_zh": "阿蒂加斯",
    "pid": 219
  },
  {
    "id": 2635,
    "name": "Durazno",
    "name_zh": "杜拉斯诺",
    "pid": 219
  },
  {
    "id": 2636,
    "name": "Florida",
    "name_zh": "佛罗里达",
    "pid": 219
  },
  {
    "id": 2637,
    "name": "Flores",
    "name_zh": "弗洛雷斯",
    "pid": 219
  },
  {
    "id": 2638,
    "name": "Canelones",
    "name_zh": "卡内洛内斯",
    "pid": 219
  },
  {
    "id": 2639,
    "name": "Colonia",
    "name_zh": "科洛尼亚",
    "pid": 219
  },
  {
    "id": 2640,
    "name": "Lavalleja",
    "name_zh": "拉瓦耶哈",
    "pid": 219
  },
  {
    "id": 2641,
    "name": "Rivera",
    "name_zh": "里韦拉",
    "pid": 219
  },
  {
    "id": 2642,
    "name": "Rocha",
    "name_zh": "罗恰",
    "pid": 219
  },
  {
    "id": 2643,
    "name": "Maldonado",
    "name_zh": "马尔多纳多",
    "pid": 219
  },
  {
    "id": 2644,
    "name": "Montevideo",
    "name_zh": "蒙得维的亚",
    "pid": 219
  },
  {
    "id": 2645,
    "name": "Rio Negro",
    "name_zh": "内格罗河",
    "pid": 219
  },
  {
    "id": 2646,
    "name": "Paysandu",
    "name_zh": "派桑杜",
    "pid": 219
  },
  {
    "id": 2647,
    "name": "Salto",
    "name_zh": "萨尔托",
    "pid": 219
  },
  {
    "id": 2648,
    "name": "Cerro Largo",
    "name_zh": "塞罗拉尔戈",
    "pid": 219
  },
  {
    "id": 2649,
    "name": "Treinta y Tres",
    "name_zh": "三十三人",
    "pid": 219
  },
  {
    "id": 2650,
    "name": "San Jose",
    "name_zh": "圣何塞",
    "pid": 219
  },
  {
    "id": 2651,
    "name": "Soriano",
    "name_zh": "索里亚诺",
    "pid": 219
  },
  {
    "id": 2652,
    "name": "Tacuarembo",
    "name_zh": "塔夸伦博",
    "pid": 219
  },
  {
    "id": 2653,
    "name": "Andijon",
    "name_zh": "安集延",
    "pid": 220
  },
  {
    "id": 2654,
    "name": "Buxoro",
    "name_zh": "布哈拉",
    "pid": 220
  },
  {
    "id": 2655,
    "name": "Fargona",
    "name_zh": "费尔干纳",
    "pid": 220
  },
  {
    "id": 2656,
    "name": "Xorazm",
    "name_zh": "花拉子模",
    "pid": 220
  },
  {
    "id": 2657,
    "name": "Jizzax",
    "name_zh": "吉扎克",
    "pid": 220
  },
  {
    "id": 2658,
    "name": "Qoraqalpogiston",
    "name_zh": "卡拉卡尔帕克斯坦共和国",
    "pid": 220
  },
  {
    "id": 2659,
    "name": "Qasqadaryo",
    "name_zh": "卡什卡达里亚",
    "pid": 220
  },
  {
    "id": 2660,
    "name": "Namangan",
    "name_zh": "纳曼干",
    "pid": 220
  },
  {
    "id": 2661,
    "name": "Navoiy",
    "name_zh": "纳沃伊",
    "pid": 220
  },
  {
    "id": 2662,
    "name": "Samarqand",
    "name_zh": "撒马尔罕",
    "pid": 220
  },
  {
    "id": 2663,
    "name": "Surxondaryo",
    "name_zh": "苏尔汉河",
    "pid": 220
  },
  {
    "id": 2664,
    "name": "Toshkent",
    "name_zh": "塔什干",
    "pid": 220
  },
  {
    "id": 2665,
    "name": "Toshkent Shahri",
    "name_zh": "塔什干市",
    "pid": 220
  },
  {
    "id": 2666,
    "name": "Sirdaryo",
    "name_zh": "锡尔河",
    "pid": 220
  },
  {
    "id": 2667,
    "name": "Almeria",
    "name_zh": "阿尔梅里亚",
    "pid": 221
  },
  {
    "id": 2668,
    "name": "Albacete",
    "name_zh": "阿尔瓦塞特",
    "pid": 221
  },
  {
    "id": 2669,
    "name": "Alava",
    "name_zh": "阿拉瓦",
    "pid": 221
  },
  {
    "id": 2670,
    "name": "Alicante",
    "name_zh": "阿利坎特",
    "pid": 221
  },
  {
    "id": 2671,
    "name": "Asturias",
    "name_zh": "阿斯图利亚斯",
    "pid": 221
  },
  {
    "id": 2672,
    "name": "Avila",
    "name_zh": "阿维拉",
    "pid": 221
  },
  {
    "id": 2673,
    "name": "Orense",
    "name_zh": "奥伦塞",
    "pid": 221
  },
  {
    "id": 2674,
    "name": "Badajoz",
    "name_zh": "巴达霍斯",
    "pid": 221
  },
  {
    "id": 2675,
    "name": "Baleares",
    "name_zh": "巴利阿里",
    "pid": 221
  },
  {
    "id": 2676,
    "name": "Valladolid",
    "name_zh": "巴利亚多利德",
    "pid": 221
  },
  {
    "id": 2677,
    "name": "Valencia",
    "name_zh": "巴伦西亚",
    "pid": 221
  },
  {
    "id": 2678,
    "name": "Barcelona",
    "name_zh": "巴塞罗那",
    "pid": 221
  },
  {
    "id": 2679,
    "name": "Vizcaya",
    "name_zh": "比斯开",
    "pid": 221
  },
  {
    "id": 2680,
    "name": "Burgos",
    "name_zh": "布尔戈斯",
    "pid": 221
  },
  {
    "id": 2681,
    "name": "Granada",
    "name_zh": "格拉纳达",
    "pid": 221
  },
  {
    "id": 2682,
    "name": "Guadalajara",
    "name_zh": "瓜达拉哈拉",
    "pid": 221
  },
  {
    "id": 2683,
    "name": "Jaen",
    "name_zh": "哈恩",
    "pid": 221
  },
  {
    "id": 2684,
    "name": "Gerona",
    "name_zh": "赫罗纳",
    "pid": 221
  },
  {
    "id": 2685,
    "name": "Guipuzcoa",
    "name_zh": "吉普斯夸",
    "pid": 221
  },
  {
    "id": 2686,
    "name": "Cadiz",
    "name_zh": "加的斯",
    "pid": 221
  },
  {
    "id": 2687,
    "name": "Caceres",
    "name_zh": "卡塞雷斯",
    "pid": 221
  },
  {
    "id": 2688,
    "name": "Cludad Real",
    "name_zh": "卡斯蒂利亚",
    "pid": 221
  },
  {
    "id": 2689,
    "name": "Castellon",
    "name_zh": "卡斯特利翁",
    "pid": 221
  },
  {
    "id": 2690,
    "name": "Cordoba",
    "name_zh": "科尔多瓦",
    "pid": 221
  },
  {
    "id": 2691,
    "name": "Cuenca",
    "name_zh": "昆卡",
    "pid": 221
  },
  {
    "id": 2692,
    "name": "La Coruna",
    "name_zh": "拉科鲁尼亚",
    "pid": 221
  },
  {
    "id": 2693,
    "name": "La Rioja",
    "name_zh": "拉里奥哈",
    "pid": 221
  },
  {
    "id": 2694,
    "name": "Las Palmas",
    "name_zh": "拉斯帕尔马斯",
    "pid": 221
  },
  {
    "id": 2695,
    "name": "Leon",
    "name_zh": "莱昂",
    "pid": 221
  },
  {
    "id": 2696,
    "name": "Lleida",
    "name_zh": "莱里达",
    "pid": 221
  },
  {
    "id": 2697,
    "name": "Provincia de Lugo",
    "name_zh": "卢戈",
    "pid": 221
  },
  {
    "id": 2698,
    "name": "Madrid",
    "name_zh": "马德里",
    "pid": 221
  },
  {
    "id": 2699,
    "name": "Malaga",
    "name_zh": "马拉加",
    "pid": 221
  },
  {
    "id": 2700,
    "name": "Murcia",
    "name_zh": "穆尔西亚",
    "pid": 221
  },
  {
    "id": 2701,
    "name": "Navarra",
    "name_zh": "纳瓦拉",
    "pid": 221
  },
  {
    "id": 2702,
    "name": "Palencia",
    "name_zh": "帕伦西亚",
    "pid": 221
  },
  {
    "id": 2703,
    "name": "Provincia de Pontevedra",
    "name_zh": "蓬特韦德拉",
    "pid": 221
  },
  {
    "id": 2704,
    "name": "Zaragoza",
    "name_zh": "萨拉戈萨",
    "pid": 221
  },
  {
    "id": 2705,
    "name": "Salamanca",
    "name_zh": "萨拉曼卡",
    "pid": 221
  },
  {
    "id": 2706,
    "name": "Zamora",
    "name_zh": "萨莫拉",
    "pid": 221
  },
  {
    "id": 2707,
    "name": "Segovia",
    "name_zh": "塞哥维亚",
    "pid": 221
  },
  {
    "id": 2708,
    "name": "Sevilla",
    "name_zh": "塞维利亚",
    "pid": 221
  },
  {
    "id": 2709,
    "name": "Santander",
    "name_zh": "桑坦德",
    "pid": 221
  },
  {
    "id": 2710,
    "name": "Santa Cruz de Tenerife",
    "name_zh": "圣克鲁斯-德特内里费",
    "pid": 221
  },
  {
    "id": 2711,
    "name": "Soria",
    "name_zh": "索里亚",
    "pid": 221
  },
  {
    "id": 2712,
    "name": "Tarragona",
    "name_zh": "塔拉戈纳",
    "pid": 221
  },
  {
    "id": 2713,
    "name": "Teruel",
    "name_zh": "特鲁埃尔",
    "pid": 221
  },
  {
    "id": 2714,
    "name": "Toledo",
    "name_zh": "托莱多",
    "pid": 221
  },
  {
    "id": 2715,
    "name": "Huelva",
    "name_zh": "韦尔瓦",
    "pid": 221
  },
  {
    "id": 2716,
    "name": "Huesca",
    "name_zh": "韦斯卡",
    "pid": 221
  },
  {
    "id": 2717,
    "name": "Peiraievs",
    "name_zh": "比雷埃夫斯",
    "pid": 222
  },
  {
    "id": 2718,
    "name": "Dodecanese",
    "name_zh": "多德卡尼斯",
    "pid": 222
  },
  {
    "id": 2719,
    "name": "Chanion",
    "name_zh": "干尼亚",
    "pid": 222
  },
  {
    "id": 2720,
    "name": "Cyclades",
    "name_zh": "基克拉迪",
    "pid": 222
  },
  {
    "id": 2721,
    "name": "Lasithiou",
    "name_zh": "拉西锡",
    "pid": 222
  },
  {
    "id": 2722,
    "name": "Lesbos",
    "name_zh": "莱斯博斯",
    "pid": 222
  },
  {
    "id": 2723,
    "name": "Rethymnis",
    "name_zh": "雷西姆农",
    "pid": 222
  },
  {
    "id": 2724,
    "name": "Samos",
    "name_zh": "萨摩斯",
    "pid": 222
  },
  {
    "id": 2725,
    "name": "Athens",
    "name_zh": "雅典",
    "pid": 222
  },
  {
    "id": 2726,
    "name": "Irakleiou",
    "name_zh": "伊拉克里翁",
    "pid": 222
  },
  {
    "id": 2727,
    "name": "Auckland",
    "name_zh": "奥克兰",
    "pid": 225
  },
  {
    "id": 2728,
    "name": "North Shore",
    "name_zh": "北岸",
    "pid": 225
  },
  {
    "id": 2729,
    "name": "Palmerston North",
    "name_zh": "北帕默斯顿",
    "pid": 225
  },
  {
    "id": 2730,
    "name": "Far North",
    "name_zh": "北远",
    "pid": 225
  },
  {
    "id": 2731,
    "name": "Blenheim",
    "name_zh": "布莱尼姆",
    "pid": 225
  },
  {
    "id": 2732,
    "name": "Dunedin",
    "name_zh": "达尼丁",
    "pid": 225
  },
  {
    "id": 2733,
    "name": "Greymouth",
    "name_zh": "格雷茅斯",
    "pid": 225
  },
  {
    "id": 2734,
    "name": "Hamilton",
    "name_zh": "哈密尔顿",
    "pid": 225
  },
  {
    "id": 2735,
    "name": "Hastings",
    "name_zh": "黑斯廷斯",
    "pid": 225
  },
  {
    "id": 2736,
    "name": "Waitakere",
    "name_zh": "怀塔科拉",
    "pid": 225
  },
  {
    "id": 2737,
    "name": "Gisborne",
    "name_zh": "吉斯伯恩",
    "pid": 225
  },
  {
    "id": 2738,
    "name": "Kaipara",
    "name_zh": "凯帕拉",
    "pid": 225
  },
  {
    "id": 2739,
    "name": "Christchurch",
    "name_zh": "克赖斯特彻奇",
    "pid": 225
  },
  {
    "id": 2740,
    "name": "Richmond",
    "name_zh": "里士满",
    "pid": 225
  },
  {
    "id": 2741,
    "name": "Manukau",
    "name_zh": "马努考",
    "pid": 225
  },
  {
    "id": 2742,
    "name": "Nelson",
    "name_zh": "纳尔逊",
    "pid": 225
  },
  {
    "id": 2743,
    "name": "Napier",
    "name_zh": "内皮尔",
    "pid": 225
  },
  {
    "id": 2744,
    "name": "Stratford",
    "name_zh": "斯特拉特福德",
    "pid": 225
  },
  {
    "id": 2745,
    "name": "Taumarunui",
    "name_zh": "陶马鲁努伊",
    "pid": 225
  },
  {
    "id": 2746,
    "name": "Whakatane",
    "name_zh": "瓦卡塔尼",
    "pid": 225
  },
  {
    "id": 2747,
    "name": "Whangarei",
    "name_zh": "旺阿雷",
    "pid": 225
  },
  {
    "id": 2748,
    "name": "Wanganui",
    "name_zh": "旺格努伊",
    "pid": 225
  },
  {
    "id": 2749,
    "name": "New Plymouth",
    "name_zh": "新普利茅斯",
    "pid": 225
  },
  {
    "id": 2750,
    "name": "Invercargill",
    "name_zh": "因弗卡吉尔",
    "pid": 225
  },
  {
    "id": 2751,
    "name": "Baranya",
    "name_zh": "巴兰尼亚",
    "pid": 226
  },
  {
    "id": 2752,
    "name": "Bacs-Kiskun",
    "name_zh": "巴奇-基什孔",
    "pid": 226
  },
  {
    "id": 2753,
    "name": "Borsod-Abauj-Zemplen",
    "name_zh": "包尔绍德-奥包乌伊-曾普伦",
    "pid": 226
  },
  {
    "id": 2754,
    "name": "Bekes",
    "name_zh": "贝凯什",
    "pid": 226
  },
  {
    "id": 2755,
    "name": "Budapest",
    "name_zh": "布达佩斯",
    "pid": 226
  },
  {
    "id": 2756,
    "name": "Fejer",
    "name_zh": "费耶尔",
    "pid": 226
  },
  {
    "id": 2757,
    "name": "Hajdu-Bihar",
    "name_zh": "豪伊杜-比豪尔",
    "pid": 226
  },
  {
    "id": 2758,
    "name": "Heves",
    "name_zh": "赫维什",
    "pid": 226
  },
  {
    "id": 2759,
    "name": "Jasz-Nagykun-Szolnok",
    "name_zh": "加兹-纳杰孔-索尔诺克",
    "pid": 226
  },
  {
    "id": 2760,
    "name": "Gyor-Moson-Sopron",
    "name_zh": "杰尔-莫松-肖普朗",
    "pid": 226
  },
  {
    "id": 2761,
    "name": "Komarom-Esztergom",
    "name_zh": "科马罗姆",
    "pid": 226
  },
  {
    "id": 2762,
    "name": "Nograd",
    "name_zh": "诺格拉德",
    "pid": 226
  },
  {
    "id": 2763,
    "name": "Pest",
    "name_zh": "佩斯",
    "pid": 226
  },
  {
    "id": 2764,
    "name": "Csongrad",
    "name_zh": "琼格拉德",
    "pid": 226
  },
  {
    "id": 2765,
    "name": "Somogy",
    "name_zh": "绍莫吉",
    "pid": 226
  },
  {
    "id": 2766,
    "name": "Szabolcs-Szatmar-Bereg",
    "name_zh": "索博尔奇-索特马尔-贝拉格",
    "pid": 226
  },
  {
    "id": 2767,
    "name": "Tolna",
    "name_zh": "托尔瑙",
    "pid": 226
  },
  {
    "id": 2768,
    "name": "Veszprem",
    "name_zh": "维斯普雷姆",
    "pid": 226
  },
  {
    "id": 2769,
    "name": "Vas",
    "name_zh": "沃什",
    "pid": 226
  },
  {
    "id": 2770,
    "name": "Zala",
    "name_zh": "佐洛",
    "pid": 226
  },
  {
    "id": 2771,
    "name": "Halab",
    "name_zh": "阿勒颇",
    "pid": 227
  },
  {
    "id": 2772,
    "name": "Rif Dimashq",
    "name_zh": "大马士革",
    "pid": 227
  },
  {
    "id": 2773,
    "name": "Madinat Dimashq",
    "name_zh": "大马士革市",
    "pid": 227
  },
  {
    "id": 2774,
    "name": "Dayr az Zawr",
    "name_zh": "代尔祖尔",
    "pid": 227
  },
  {
    "id": 2775,
    "name": "Dara",
    "name_zh": "德拉",
    "pid": 227
  },
  {
    "id": 2776,
    "name": "Hamah",
    "name_zh": "哈马",
    "pid": 227
  },
  {
    "id": 2777,
    "name": "Al Hasakah",
    "name_zh": "哈塞克",
    "pid": 227
  },
  {
    "id": 2778,
    "name": "Hims",
    "name_zh": "霍姆斯",
    "pid": 227
  },
  {
    "id": 2779,
    "name": "Al Ghab",
    "name_zh": "加布",
    "pid": 227
  },
  {
    "id": 2780,
    "name": "Al-Qamishli",
    "name_zh": "卡米什利",
    "pid": 227
  },
  {
    "id": 2781,
    "name": "Al Qunaytirah",
    "name_zh": "库奈特拉",
    "pid": 227
  },
  {
    "id": 2782,
    "name": "Ar Raqqah",
    "name_zh": "拉卡",
    "pid": 227
  },
  {
    "id": 2783,
    "name": "Al Ladhiqiyah",
    "name_zh": "拉塔基亚",
    "pid": 227
  },
  {
    "id": 2784,
    "name": "As Suwayda",
    "name_zh": "苏韦达",
    "pid": 227
  },
  {
    "id": 2785,
    "name": "Tartus",
    "name_zh": "塔尔图斯",
    "pid": 227
  },
  {
    "id": 2786,
    "name": "Idlib",
    "name_zh": "伊德利卜",
    "pid": 227
  },
  {
    "id": 2787,
    "name": "Portland",
    "name_zh": "波特兰",
    "pid": 228
  },
  {
    "id": 2788,
    "name": "Hanover",
    "name_zh": "汉诺威",
    "pid": 228
  },
  {
    "id": 2789,
    "name": "Kingston",
    "name_zh": "金斯敦",
    "pid": 228
  },
  {
    "id": 2790,
    "name": "Clarendon",
    "name_zh": "克拉伦登",
    "pid": 228
  },
  {
    "id": 2791,
    "name": "Manchester",
    "name_zh": "曼彻斯特",
    "pid": 228
  },
  {
    "id": 2792,
    "name": "St. Andrews",
    "name_zh": "圣安德鲁斯",
    "pid": 228
  },
  {
    "id": 2793,
    "name": "St. Ann",
    "name_zh": "圣安娜",
    "pid": 228
  },
  {
    "id": 2794,
    "name": "St. Catherine",
    "name_zh": "圣凯瑟琳",
    "pid": 228
  },
  {
    "id": 2795,
    "name": "St. Mary",
    "name_zh": "圣玛丽",
    "pid": 228
  },
  {
    "id": 2796,
    "name": "St. Thomas",
    "name_zh": "圣托马斯",
    "pid": 228
  },
  {
    "id": 2797,
    "name": "St. Elizabeth",
    "name_zh": "圣伊丽莎白",
    "pid": 228
  },
  {
    "id": 2798,
    "name": "St. James",
    "name_zh": "圣詹姆斯",
    "pid": 228
  },
  {
    "id": 2799,
    "name": "Trelawny",
    "name_zh": "特里洛尼",
    "pid": 228
  },
  {
    "id": 2800,
    "name": "Westmoreland",
    "name_zh": "西摩兰",
    "pid": 228
  },
  {
    "id": 2801,
    "name": "Armavir",
    "name_zh": "阿尔马维尔",
    "pid": 229
  },
  {
    "id": 2802,
    "name": "Aragacotn",
    "name_zh": "阿拉加措特恩",
    "pid": 229
  },
  {
    "id": 2803,
    "name": "Ararat",
    "name_zh": "阿拉拉特",
    "pid": 229
  },
  {
    "id": 2804,
    "name": "Yerevan",
    "name_zh": "埃里温市",
    "pid": 229
  },
  {
    "id": 2805,
    "name": "Gelarkunik",
    "name_zh": "格加尔库尼克",
    "pid": 229
  },
  {
    "id": 2806,
    "name": "Kotayk",
    "name_zh": "科泰克",
    "pid": 229
  },
  {
    "id": 2807,
    "name": "Lorri",
    "name_zh": "洛里",
    "pid": 229
  },
  {
    "id": 2808,
    "name": "Tavus",
    "name_zh": "塔武什",
    "pid": 229
  },
  {
    "id": 2809,
    "name": "VayocJor",
    "name_zh": "瓦约茨·佐尔",
    "pid": 229
  },
  {
    "id": 2810,
    "name": "Shirak",
    "name_zh": "希拉克",
    "pid": 229
  },
  {
    "id": 2811,
    "name": "Syunik",
    "name_zh": "休尼克",
    "pid": 229
  },
  {
    "id": 2812,
    "name": "Abyan",
    "name_zh": "阿比扬",
    "pid": 230
  },
  {
    "id": 2813,
    "name": "Amran Sana",
    "name_zh": "阿姆兰",
    "pid": 230
  },
  {
    "id": 2814,
    "name": "Al-Bayda",
    "name_zh": "贝达",
    "pid": 230
  },
  {
    "id": 2815,
    "name": "Ad-Dali",
    "name_zh": "达利",
    "pid": 230
  },
  {
    "id": 2816,
    "name": "Hadramawt",
    "name_zh": "哈德拉毛",
    "pid": 230
  },
  {
    "id": 2817,
    "name": "Hajjah",
    "name_zh": "哈杰",
    "pid": 230
  },
  {
    "id": 2818,
    "name": "Al-Hudaydah",
    "name_zh": "荷台达",
    "pid": 230
  },
  {
    "id": 2819,
    "name": "Al-Jawf",
    "name_zh": "焦夫",
    "pid": 230
  },
  {
    "id": 2820,
    "name": "Lahij",
    "name_zh": "拉赫季",
    "pid": 230
  },
  {
    "id": 2821,
    "name": "Marib",
    "name_zh": "马里卜",
    "pid": 230
  },
  {
    "id": 2822,
    "name": "Al-Mahrah",
    "name_zh": "迈赫拉",
    "pid": 230
  },
  {
    "id": 2823,
    "name": "Al-Mahwit",
    "name_zh": "迈赫维特",
    "pid": 230
  },
  {
    "id": 2824,
    "name": "Sadah",
    "name_zh": "萨达",
    "pid": 230
  },
  {
    "id": 2825,
    "name": "Sana",
    "name_zh": "萨那",
    "pid": 230
  },
  {
    "id": 2826,
    "name": "Seiyun",
    "name_zh": "赛文",
    "pid": 230
  },
  {
    "id": 2827,
    "name": "Shabwah",
    "name_zh": "舍卜沃",
    "pid": 230
  },
  {
    "id": 2828,
    "name": "Taizz",
    "name_zh": "塔伊兹",
    "pid": 230
  },
  {
    "id": 2829,
    "name": "Ash-Shihr",
    "name_zh": "希赫尔",
    "pid": 230
  },
  {
    "id": 2830,
    "name": "Adan",
    "name_zh": "亚丁",
    "pid": 230
  },
  {
    "id": 2831,
    "name": "Ibb",
    "name_zh": "伊卜",
    "pid": 230
  },
  {
    "id": 2832,
    "name": "Dhamar",
    "name_zh": "扎玛尔",
    "pid": 230
  },
  {
    "id": 2833,
    "name": "Ashdod",
    "name_zh": "阿什杜德",
    "pid": 233
  },
  {
    "id": 2834,
    "name": "Beersheba",
    "name_zh": "贝尔谢巴",
    "pid": 233
  },
  {
    "id": 2835,
    "name": "Bat Yam",
    "name_zh": "贝特雁",
    "pid": 233
  },
  {
    "id": 2836,
    "name": "Haifa",
    "name_zh": "海法",
    "pid": 233
  },
  {
    "id": 2837,
    "name": "Holon",
    "name_zh": "霍隆",
    "pid": 233
  },
  {
    "id": 2838,
    "name": "Netanya",
    "name_zh": "内坦亚",
    "pid": 233
  },
  {
    "id": 2839,
    "name": "Tel Aviv-Yafo",
    "name_zh": "特拉维夫",
    "pid": 233
  },
  {
    "id": 2840,
    "name": "Jerusalem",
    "name_zh": "耶路撒冷",
    "pid": 233
  },
  {
    "id": 2841,
    "name": "Asti",
    "name_zh": "阿斯蒂",
    "pid": 234
  },
  {
    "id": 2842,
    "name": "Ascoli Piceno",
    "name_zh": "阿斯科利皮切诺",
    "pid": 234
  },
  {
    "id": 2843,
    "name": "Ancona",
    "name_zh": "安科纳",
    "pid": 234
  },
  {
    "id": 2844,
    "name": "Olbia-Tempio",
    "name_zh": "奥尔比亚",
    "pid": 234
  },
  {
    "id": 2845,
    "name": "Oristano",
    "name_zh": "奥里斯塔诺",
    "pid": 234
  },
  {
    "id": 2846,
    "name": "Aosta",
    "name_zh": "奥斯塔",
    "pid": 234
  },
  {
    "id": 2847,
    "name": "Palermo",
    "name_zh": "巴勒莫",
    "pid": 234
  },
  {
    "id": 2848,
    "name": "Bari",
    "name_zh": "巴里",
    "pid": 234
  },
  {
    "id": 2849,
    "name": "Bergamo",
    "name_zh": "贝加莫",
    "pid": 234
  },
  {
    "id": 2850,
    "name": "Benevento",
    "name_zh": "贝内文托",
    "pid": 234
  },
  {
    "id": 2851,
    "name": "Pisa",
    "name_zh": "比萨",
    "pid": 234
  },
  {
    "id": 2852,
    "name": "Pordenone",
    "name_zh": "波代诺内",
    "pid": 234
  },
  {
    "id": 2853,
    "name": "Potenza",
    "name_zh": "波坦察",
    "pid": 234
  },
  {
    "id": 2854,
    "name": "Bologna",
    "name_zh": "博洛尼亚",
    "pid": 234
  },
  {
    "id": 2855,
    "name": "Biella",
    "name_zh": "布拉",
    "pid": 234
  },
  {
    "id": 2856,
    "name": "Brescia",
    "name_zh": "布雷西亚",
    "pid": 234
  },
  {
    "id": 2857,
    "name": "Brindisi",
    "name_zh": "布林迪西",
    "pid": 234
  },
  {
    "id": 2858,
    "name": "Trieste",
    "name_zh": "的里雅斯特",
    "pid": 234
  },
  {
    "id": 2859,
    "name": "Turin",
    "name_zh": "都灵",
    "pid": 234
  },
  {
    "id": 2860,
    "name": "Ferrara",
    "name_zh": "费拉拉",
    "pid": 234
  },
  {
    "id": 2861,
    "name": "Firenze",
    "name_zh": "佛罗伦萨",
    "pid": 234
  },
  {
    "id": 2862,
    "name": "Foggia",
    "name_zh": "福贾",
    "pid": 234
  },
  {
    "id": 2863,
    "name": "Cagliari",
    "name_zh": "卡利亚里",
    "pid": 234
  },
  {
    "id": 2864,
    "name": "Caserta",
    "name_zh": "卡塞塔",
    "pid": 234
  },
  {
    "id": 2865,
    "name": "Catania",
    "name_zh": "卡塔尼亚",
    "pid": 234
  },
  {
    "id": 2866,
    "name": "Catanzaro",
    "name_zh": "卡坦扎罗",
    "pid": 234
  },
  {
    "id": 2867,
    "name": "Campobasso",
    "name_zh": "坎波巴索",
    "pid": 234
  },
  {
    "id": 2868,
    "name": "Como",
    "name_zh": "科摩",
    "pid": 234
  },
  {
    "id": 2869,
    "name": "Cosenza",
    "name_zh": "科森扎",
    "pid": 234
  },
  {
    "id": 2870,
    "name": "Crotone",
    "name_zh": "克罗托内",
    "pid": 234
  },
  {
    "id": 2871,
    "name": "Cuneo",
    "name_zh": "库内奥",
    "pid": 234
  },
  {
    "id": 2872,
    "name": "L'Aquila",
    "name_zh": "拉奎拉",
    "pid": 234
  },
  {
    "id": 2873,
    "name": "La Spezia",
    "name_zh": "拉斯佩齐亚",
    "pid": 234
  },
  {
    "id": 2874,
    "name": "Lecco",
    "name_zh": "莱科",
    "pid": 234
  },
  {
    "id": 2875,
    "name": "Lecce",
    "name_zh": "莱切",
    "pid": 234
  },
  {
    "id": 2876,
    "name": "Reggio Emilia",
    "name_zh": "雷焦艾米利亚",
    "pid": 234
  },
  {
    "id": 2877,
    "name": "Reggio Calabria",
    "name_zh": "雷焦卡拉布里亚",
    "pid": 234
  },
  {
    "id": 2878,
    "name": "Livorno",
    "name_zh": "里窝那",
    "pid": 234
  },
  {
    "id": 2879,
    "name": "Roma",
    "name_zh": "罗马",
    "pid": 234
  },
  {
    "id": 2880,
    "name": "Massa-Carrara",
    "name_zh": "马萨",
    "pid": 234
  },
  {
    "id": 2881,
    "name": "Matera",
    "name_zh": "马泰拉",
    "pid": 234
  },
  {
    "id": 2882,
    "name": "Monza e Brianza",
    "name_zh": "蒙扎",
    "pid": 234
  },
  {
    "id": 2883,
    "name": "Milano",
    "name_zh": "米兰",
    "pid": 234
  },
  {
    "id": 2884,
    "name": "Modena",
    "name_zh": "摩德纳",
    "pid": 234
  },
  {
    "id": 2885,
    "name": "Messina",
    "name_zh": "墨西拿",
    "pid": 234
  },
  {
    "id": 2886,
    "name": "Naples",
    "name_zh": "那不勒斯",
    "pid": 234
  },
  {
    "id": 2887,
    "name": "Nuoro",
    "name_zh": "努奥罗",
    "pid": 234
  },
  {
    "id": 2888,
    "name": "Novara",
    "name_zh": "诺瓦拉",
    "pid": 234
  },
  {
    "id": 2889,
    "name": "Parma",
    "name_zh": "帕尔马",
    "pid": 234
  },
  {
    "id": 2890,
    "name": "Pavia",
    "name_zh": "帕维亚",
    "pid": 234
  },
  {
    "id": 2891,
    "name": "Perugia",
    "name_zh": "佩鲁贾",
    "pid": 234
  },
  {
    "id": 2892,
    "name": "Genova",
    "name_zh": "热那亚",
    "pid": 234
  },
  {
    "id": 2893,
    "name": "Salerno",
    "name_zh": "萨莱诺",
    "pid": 234
  },
  {
    "id": 2894,
    "name": "Sassari",
    "name_zh": "萨萨里",
    "pid": 234
  },
  {
    "id": 2895,
    "name": "Savona",
    "name_zh": "萨沃纳",
    "pid": 234
  },
  {
    "id": 2896,
    "name": "Taranto",
    "name_zh": "塔兰托",
    "pid": 234
  },
  {
    "id": 2897,
    "name": "Trapani",
    "name_zh": "特拉帕尼",
    "pid": 234
  },
  {
    "id": 2898,
    "name": "Trento",
    "name_zh": "特伦托",
    "pid": 234
  },
  {
    "id": 2899,
    "name": "Venice",
    "name_zh": "威尼斯",
    "pid": 234
  },
  {
    "id": 2900,
    "name": "Vercelli",
    "name_zh": "韦尔切利",
    "pid": 234
  },
  {
    "id": 2901,
    "name": "Viterbo",
    "name_zh": "维泰博",
    "pid": 234
  },
  {
    "id": 2902,
    "name": "Udine",
    "name_zh": "乌迪内",
    "pid": 234
  },
  {
    "id": 2903,
    "name": "Syracuse",
    "name_zh": "锡拉库扎",
    "pid": 234
  },
  {
    "id": 2904,
    "name": "Siena",
    "name_zh": "锡耶纳",
    "pid": 234
  },
  {
    "id": 2905,
    "name": "Alessandria",
    "name_zh": "亚历山德里亚",
    "pid": 234
  },
  {
    "id": 2906,
    "name": "Isernia",
    "name_zh": "伊塞尔尼亚",
    "pid": 234
  },
  {
    "id": 2907,
    "name": "Aizawl",
    "name_zh": "艾藻尔",
    "pid": 235
  },
  {
    "id": 2908,
    "name": "Bangalore",
    "name_zh": "班加罗尔",
    "pid": 235
  },
  {
    "id": 2909,
    "name": "Pondicherry",
    "name_zh": "本地治里",
    "pid": 235
  },
  {
    "id": 2910,
    "name": "Bhopal",
    "name_zh": "博帕尔",
    "pid": 235
  },
  {
    "id": 2911,
    "name": "Bhubaneswar",
    "name_zh": "布巴内斯瓦尔",
    "pid": 235
  },
  {
    "id": 2912,
    "name": "Chandigarh",
    "name_zh": "昌迪加尔",
    "pid": 235
  },
  {
    "id": 2913,
    "name": "Daman",
    "name_zh": "达曼",
    "pid": 235
  },
  {
    "id": 2914,
    "name": "Diu",
    "name_zh": "第乌",
    "pid": 235
  },
  {
    "id": 2915,
    "name": "Gangtok",
    "name_zh": "甘托克",
    "pid": 235
  },
  {
    "id": 2916,
    "name": "Coimbatore",
    "name_zh": "哥印拜陀",
    "pid": 235
  },
  {
    "id": 2917,
    "name": "Calcutta",
    "name_zh": "加尔各答",
    "pid": 235
  },
  {
    "id": 2918,
    "name": "Karaikal",
    "name_zh": "加里加尔",
    "pid": 235
  },
  {
    "id": 2919,
    "name": "Jabalpur",
    "name_zh": "贾巴尔普尔",
    "pid": 235
  },
  {
    "id": 2920,
    "name": "Jalandhar",
    "name_zh": "贾朗达尔",
    "pid": 235
  },
  {
    "id": 2921,
    "name": "Jodhpur",
    "name_zh": "焦特布尔",
    "pid": 235
  },
  {
    "id": 2922,
    "name": "Chennai",
    "name_zh": "金奈",
    "pid": 235
  },
  {
    "id": 2923,
    "name": "Kavaratti",
    "name_zh": "卡瓦拉蒂",
    "pid": 235
  },
  {
    "id": 2924,
    "name": "Kohima",
    "name_zh": "科希马",
    "pid": 235
  },
  {
    "id": 2925,
    "name": "Mahe",
    "name_zh": "马埃",
    "pid": 235
  },
  {
    "id": 2926,
    "name": "Madurai",
    "name_zh": "马杜赖",
    "pid": 235
  },
  {
    "id": 2927,
    "name": "Sambalpur",
    "name_zh": "森伯尔布尔",
    "pid": 235
  },
  {
    "id": 2928,
    "name": "Trivandrum",
    "name_zh": "特里凡得琅",
    "pid": 235
  },
  {
    "id": 2929,
    "name": "Udaipur",
    "name_zh": "乌代布尔",
    "pid": 235
  },
  {
    "id": 2930,
    "name": "Shillong",
    "name_zh": "西隆",
    "pid": 235
  },
  {
    "id": 2931,
    "name": "Silvassa",
    "name_zh": "锡尔萨瓦",
    "pid": 235
  },
  {
    "id": 2932,
    "name": "New Delhi",
    "name_zh": "新德里",
    "pid": 235
  },
  {
    "id": 2933,
    "name": "Yanam",
    "name_zh": "亚南",
    "pid": 235
  },
  {
    "id": 2934,
    "name": "Imphal",
    "name_zh": "因帕尔",
    "pid": 235
  },
  {
    "id": 2935,
    "name": "Indore",
    "name_zh": "印多尔",
    "pid": 235
  },
  {
    "id": 2936,
    "name": "Jaipur",
    "name_zh": "斋普尔",
    "pid": 235
  },
  {
    "id": 2937,
    "name": "Bali",
    "name_zh": "巴厘",
    "pid": 236
  },
  {
    "id": 2938,
    "name": "Kepulauan Bangka Belitung",
    "name_zh": "邦加－勿里洞群岛",
    "pid": 236
  },
  {
    "id": 2939,
    "name": "Sulawesi Utara",
    "name_zh": "北苏拉威西",
    "pid": 236
  },
  {
    "id": 2940,
    "name": "Sumatera Utara",
    "name_zh": "北苏门答腊",
    "pid": 236
  },
  {
    "id": 2941,
    "name": "Daerah Tingkat I Kalimantan Barat",
    "name_zh": "大雅加达首都特区",
    "pid": 236
  },
  {
    "id": 2942,
    "name": "Kalimantan Timur",
    "name_zh": "东加里曼丹",
    "pid": 236
  },
  {
    "id": 2943,
    "name": "Sulawesi Tenggara",
    "name_zh": "东南苏拉威西",
    "pid": 236
  },
  {
    "id": 2944,
    "name": "Nusa Tenggara Timur",
    "name_zh": "东努沙登加拉",
    "pid": 236
  },
  {
    "id": 2945,
    "name": "Java Timur",
    "name_zh": "东爪哇",
    "pid": 236
  },
  {
    "id": 2946,
    "name": "Riau",
    "name_zh": "廖内",
    "pid": 236
  },
  {
    "id": 2947,
    "name": "Maluku",
    "name_zh": "马鲁古",
    "pid": 236
  },
  {
    "id": 2948,
    "name": "Bengkulu",
    "name_zh": "明古鲁",
    "pid": 236
  },
  {
    "id": 2949,
    "name": "Lampung",
    "name_zh": "楠榜",
    "pid": 236
  },
  {
    "id": 2950,
    "name": "Kalimantan Selatan",
    "name_zh": "南加里曼丹",
    "pid": 236
  },
  {
    "id": 2951,
    "name": "Sulawesi Selatan",
    "name_zh": "南苏拉威西",
    "pid": 236
  },
  {
    "id": 2952,
    "name": "Sumatera Selatan",
    "name_zh": "南苏门答腊",
    "pid": 236
  },
  {
    "id": 2953,
    "name": "Daerah Istimewa Yogyakarta",
    "name_zh": "日惹特区",
    "pid": 236
  },
  {
    "id": 2954,
    "name": "Banten",
    "name_zh": "万丹",
    "pid": 236
  },
  {
    "id": 2955,
    "name": "Nusa Tenggara Barat",
    "name_zh": "西努沙登加拉",
    "pid": 236
  },
  {
    "id": 2956,
    "name": "Sumatera Barat",
    "name_zh": "西苏门答腊",
    "pid": 236
  },
  {
    "id": 2957,
    "name": "Java Barat",
    "name_zh": "西爪哇",
    "pid": 236
  },
  {
    "id": 2958,
    "name": "Jakarta Raya",
    "name_zh": "雅加达",
    "pid": 236
  },
  {
    "id": 2959,
    "name": "Aceh",
    "name_zh": "亚齐",
    "pid": 236
  },
  {
    "id": 2960,
    "name": "Irian Jaya",
    "name_zh": "伊里安查亚",
    "pid": 236
  },
  {
    "id": 2961,
    "name": "Jambi",
    "name_zh": "占碑",
    "pid": 236
  },
  {
    "id": 2962,
    "name": "Kalimantan Tengah",
    "name_zh": "中加里曼丹",
    "pid": 236
  },
  {
    "id": 2963,
    "name": "Sulawesi Tengah",
    "name_zh": "中苏拉威西",
    "pid": 236
  },
  {
    "id": 2964,
    "name": "Java Tengah",
    "name_zh": "中爪哇",
    "pid": 236
  },
  {
    "id": 2965,
    "name": "Allun",
    "name_zh": "阿吉隆",
    "pid": 239
  },
  {
    "id": 2966,
    "name": "Amman",
    "name_zh": "安曼",
    "pid": 239
  },
  {
    "id": 2967,
    "name": "Balqa",
    "name_zh": "拜勒加",
    "pid": 239
  },
  {
    "id": 2968,
    "name": "Jarash",
    "name_zh": "杰拉什",
    "pid": 239
  },
  {
    "id": 2969,
    "name": "Karak",
    "name_zh": "卡拉克",
    "pid": 239
  },
  {
    "id": 2970,
    "name": "Rusayfah",
    "name_zh": "鲁赛法",
    "pid": 239
  },
  {
    "id": 2971,
    "name": "Maan",
    "name_zh": "马安",
    "pid": 239
  },
  {
    "id": 2972,
    "name": "Madaba",
    "name_zh": "马德巴",
    "pid": 239
  },
  {
    "id": 2973,
    "name": "Mafraq",
    "name_zh": "马夫拉克",
    "pid": 239
  },
  {
    "id": 2974,
    "name": "Tafiela",
    "name_zh": "塔菲拉",
    "pid": 239
  },
  {
    "id": 2975,
    "name": "Aqaba",
    "name_zh": "亚喀巴",
    "pid": 239
  },
  {
    "id": 2976,
    "name": "Irbid",
    "name_zh": "伊尔比德",
    "pid": 239
  },
  {
    "id": 2977,
    "name": "Zarqa",
    "name_zh": "扎尔卡",
    "pid": 239
  },
  {
    "id": 2978,
    "name": "Haiphong",
    "name_zh": "海防",
    "pid": 240
  },
  {
    "id": 2979,
    "name": "Hanoi",
    "name_zh": "河内",
    "pid": 240
  },
  {
    "id": 2980,
    "name": "Ho Chi Minh City",
    "name_zh": "胡志明市",
    "pid": 240
  },
  {
    "id": 2981,
    "name": "Northern",
    "name_zh": "北方",
    "pid": 241
  },
  {
    "id": 2982,
    "name": "Eastern",
    "name_zh": "东方",
    "pid": 241
  },
  {
    "id": 2983,
    "name": "Luapula",
    "name_zh": "卢阿普拉",
    "pid": 241
  },
  {
    "id": 2984,
    "name": "Lusaka",
    "name_zh": "卢萨卡",
    "pid": 241
  },
  {
    "id": 2985,
    "name": "Southern",
    "name_zh": "南方",
    "pid": 241
  },
  {
    "id": 2986,
    "name": "Copperbelt",
    "name_zh": "铜带",
    "pid": 241
  },
  {
    "id": 2987,
    "name": "North-Western",
    "name_zh": "西北",
    "pid": 241
  },
  {
    "id": 2988,
    "name": "Western",
    "name_zh": "西方",
    "pid": 241
  },
  {
    "id": 2989,
    "name": "Central",
    "name_zh": "中央",
    "pid": 241
  },
  {
    "id": 2990,
    "name": "Region de la Araucania",
    "name_zh": "阿劳卡尼亚大区",
    "pid": 245
  },
  {
    "id": 2991,
    "name": "Region de Atacama",
    "name_zh": "阿塔卡马大区",
    "pid": 245
  },
  {
    "id": 2992,
    "name": "Region de Antofagasta",
    "name_zh": "安托法加斯塔大区",
    "pid": 245
  },
  {
    "id": 2993,
    "name": "Region del Biobio",
    "name_zh": "比奥比奥大区",
    "pid": 245
  },
  {
    "id": 2994,
    "name": "Libertador",
    "name_zh": "复活节岛",
    "pid": 245
  },
  {
    "id": 2995,
    "name": "Region de los Lagos",
    "name_zh": "湖大区",
    "pid": 245
  },
  {
    "id": 2996,
    "name": "Region de Coquimbo",
    "name_zh": "科金博大区",
    "pid": 245
  },
  {
    "id": 2997,
    "name": "Region del Maule",
    "name_zh": "马乌莱大区",
    "pid": 245
  },
  {
    "id": 2998,
    "name": "Magallanes y Antartica Chilena",
    "name_zh": "麦哲伦-智利南极大区",
    "pid": 245
  },
  {
    "id": 2999,
    "name": "Metropolitana de Santiago",
    "name_zh": "圣地亚哥",
    "pid": 245
  },
  {
    "id": 3000,
    "name": "Region de Tarapaca",
    "name_zh": "塔拉帕卡大区",
    "pid": 245
  },
  {
    "id": 3001,
    "name": "Region de Valparaiso",
    "name_zh": "瓦尔帕莱索大区",
    "pid": 245
  },
  {
    "id": 3002,
    "name": "Region de Alsen del General Carlos Ibanez del",
    "name_zh": "伊瓦涅斯将军的艾森大区",
    "pid": 245
  },
  {
    "id": 3003,
    "name": "Bamingui-Bangoran",
    "name_zh": "巴明吉-班戈兰",
    "pid": 246
  },
  {
    "id": 3004,
    "name": "Bangui",
    "name_zh": "班吉直辖市",
    "pid": 246
  },
  {
    "id": 3005,
    "name": "Bimbo",
    "name_zh": "宾博",
    "pid": 246
  },
  {
    "id": 3006,
    "name": "Kemo",
    "name_zh": "凯莫",
    "pid": 246
  },
  {
    "id": 3007,
    "name": "Lobaye",
    "name_zh": "洛巴伊",
    "pid": 246
  },
  {
    "id": 3008,
    "name": "Mambere-Kadei",
    "name_zh": "曼贝雷-卡代",
    "pid": 246
  },
  {
    "id": 3009,
    "name": "Mbomou",
    "name_zh": "姆博穆",
    "pid": 246
  },
  {
    "id": 3010,
    "name": "Nana-Gribizi",
    "name_zh": "纳纳-格里比齐",
    "pid": 246
  },
  {
    "id": 3011,
    "name": "Nana-Mambere",
    "name_zh": "纳纳-曼贝雷",
    "pid": 246
  },
  {
    "id": 3012,
    "name": "Sangha-Mbaere",
    "name_zh": "桑加-姆巴埃雷",
    "pid": 246
  },
  {
    "id": 3013,
    "name": "Haute-Kotto",
    "name_zh": "上科托",
    "pid": 246
  },
  {
    "id": 3014,
    "name": "Haut-Mbomou",
    "name_zh": "上姆博穆",
    "pid": 246
  },
  {
    "id": 3015,
    "name": "Ouaka",
    "name_zh": "瓦卡",
    "pid": 246
  },
  {
    "id": 3016,
    "name": "Vakaga",
    "name_zh": "瓦卡加",
    "pid": 246
  },
  {
    "id": 3017,
    "name": "Ouham",
    "name_zh": "瓦姆",
    "pid": 246
  },
  {
    "id": 3018,
    "name": "Ouham-Pende",
    "name_zh": "瓦姆-彭代",
    "pid": 246
  },
  {
    "id": 3019,
    "name": "Ombella-Mpoko",
    "name_zh": "翁贝拉-姆波科",
    "pid": 246
  },
  {
    "id": 3020,
    "name": "Basse-Kotto",
    "name_zh": "下科托",
    "pid": 246
  },
  {
    "id": 3021,
    "name": "Dongcheng",
    "name_zh": "东城",
    "pid": 247
  },
  {
    "id": 3022,
    "name": "Xicheng",
    "name_zh": "西城",
    "pid": 247
  },
  {
    "id": 3023,
    "name": "Chaoyang",
    "name_zh": "朝阳",
    "pid": 247
  },
  {
    "id": 3024,
    "name": "Fengtai",
    "name_zh": "丰台",
    "pid": 247
  },
  {
    "id": 3025,
    "name": "Shijingshan",
    "name_zh": "石景山",
    "pid": 247
  },
  {
    "id": 3026,
    "name": "Haidian",
    "name_zh": "海淀",
    "pid": 247
  },
  {
    "id": 3027,
    "name": "Mentougou",
    "name_zh": "门头沟",
    "pid": 247
  },
  {
    "id": 3028,
    "name": "Fangshan",
    "name_zh": "房山",
    "pid": 247
  },
  {
    "id": 3029,
    "name": "Tongzhou",
    "name_zh": "通州",
    "pid": 247
  },
  {
    "id": 3030,
    "name": "Shunyi",
    "name_zh": "顺义",
    "pid": 247
  },
  {
    "id": 3031,
    "name": "Changping",
    "name_zh": "昌平",
    "pid": 247
  },
  {
    "id": 3032,
    "name": "Daxing",
    "name_zh": "大兴",
    "pid": 247
  },
  {
    "id": 3033,
    "name": "Pinggu",
    "name_zh": "平谷",
    "pid": 247
  },
  {
    "id": 3034,
    "name": "Huairou",
    "name_zh": "怀柔",
    "pid": 247
  },
  {
    "id": 3035,
    "name": "Miyun",
    "name_zh": "密云",
    "pid": 247
  },
  {
    "id": 3036,
    "name": "Yanqing",
    "name_zh": "延庆",
    "pid": 247
  },
  {
    "id": 3037,
    "name": "Heping",
    "name_zh": "和平",
    "pid": 248
  },
  {
    "id": 3038,
    "name": "Hedong",
    "name_zh": "河东",
    "pid": 248
  },
  {
    "id": 3039,
    "name": "Hexi",
    "name_zh": "河西",
    "pid": 248
  },
  {
    "id": 3040,
    "name": "Nankai",
    "name_zh": "南开",
    "pid": 248
  },
  {
    "id": 3041,
    "name": "Hebei",
    "name_zh": "河北",
    "pid": 248
  },
  {
    "id": 3042,
    "name": "Hongqiao",
    "name_zh": "红桥",
    "pid": 248
  },
  {
    "id": 3043,
    "name": "Binghaixinqu",
    "name_zh": "滨海新区",
    "pid": 248
  },
  {
    "id": 3044,
    "name": "Dongli",
    "name_zh": "东丽",
    "pid": 248
  },
  {
    "id": 3045,
    "name": "Xiqing",
    "name_zh": "西青",
    "pid": 248
  },
  {
    "id": 3046,
    "name": "Jinnan",
    "name_zh": "津南",
    "pid": 248
  },
  {
    "id": 3047,
    "name": "Beichen",
    "name_zh": "北辰",
    "pid": 248
  },
  {
    "id": 3048,
    "name": "Ninghe",
    "name_zh": "宁河",
    "pid": 248
  },
  {
    "id": 3049,
    "name": "Wuqing",
    "name_zh": "武清",
    "pid": 248
  },
  {
    "id": 3050,
    "name": "Jinghai",
    "name_zh": "静海",
    "pid": 248
  },
  {
    "id": 3051,
    "name": "Baodi",
    "name_zh": "宝坻",
    "pid": 248
  },
  {
    "id": 3052,
    "name": "Jixian",
    "name_zh": "蓟县",
    "pid": 248
  },
  {
    "id": 3053,
    "name": "Shijiazhuang",
    "name_zh": "石家庄",
    "pid": 249
  },
  {
    "id": 3054,
    "name": "Tangshan",
    "name_zh": "唐山",
    "pid": 249
  },
  {
    "id": 3055,
    "name": "Qinhuangdao",
    "name_zh": "秦皇岛",
    "pid": 249
  },
  {
    "id": 3056,
    "name": "Handan",
    "name_zh": "邯郸",
    "pid": 249
  },
  {
    "id": 3057,
    "name": "Xingtai",
    "name_zh": "邢台",
    "pid": 249
  },
  {
    "id": 3058,
    "name": "Baoding",
    "name_zh": "保定",
    "pid": 249
  },
  {
    "id": 3059,
    "name": "Zhangjiakou",
    "name_zh": "张家口",
    "pid": 249
  },
  {
    "id": 3060,
    "name": "Chengde",
    "name_zh": "承德",
    "pid": 249
  },
  {
    "id": 3061,
    "name": "Cangzhou",
    "name_zh": "沧州",
    "pid": 249
  },
  {
    "id": 3062,
    "name": "Langfang",
    "name_zh": "廊坊",
    "pid": 249
  },
  {
    "id": 3063,
    "name": "Hengshui",
    "name_zh": "衡水",
    "pid": 249
  },
  {
    "id": 3064,
    "name": "Taiyuan",
    "name_zh": "太原",
    "pid": 250
  },
  {
    "id": 3065,
    "name": "Datong",
    "name_zh": "大同",
    "pid": 250
  },
  {
    "id": 3066,
    "name": "Yangquan",
    "name_zh": "阳泉",
    "pid": 250
  },
  {
    "id": 3067,
    "name": "Changzhi",
    "name_zh": "长治",
    "pid": 250
  },
  {
    "id": 3068,
    "name": "Jincheng",
    "name_zh": "晋城",
    "pid": 250
  },
  {
    "id": 3069,
    "name": "Shuozhou",
    "name_zh": "朔州",
    "pid": 250
  },
  {
    "id": 3070,
    "name": "Jinzhong",
    "name_zh": "晋中",
    "pid": 250
  },
  {
    "id": 3071,
    "name": "Yuncheng",
    "name_zh": "运城",
    "pid": 250
  },
  {
    "id": 3072,
    "name": "Xinzhou",
    "name_zh": "忻州",
    "pid": 250
  },
  {
    "id": 3073,
    "name": "Linfen",
    "name_zh": "临汾",
    "pid": 250
  },
  {
    "id": 3074,
    "name": "luliang",
    "name_zh": "吕梁",
    "pid": 250
  },
  {
    "id": 3075,
    "name": "Hohhot",
    "name_zh": "呼和浩特",
    "pid": 251
  },
  {
    "id": 3076,
    "name": "Baotou",
    "name_zh": "包头",
    "pid": 251
  },
  {
    "id": 3077,
    "name": "Wuhai",
    "name_zh": "乌海",
    "pid": 251
  },
  {
    "id": 3078,
    "name": "Chifeng",
    "name_zh": "赤峰",
    "pid": 251
  },
  {
    "id": 3079,
    "name": "Tongliao",
    "name_zh": "通辽",
    "pid": 251
  },
  {
    "id": 3080,
    "name": "Ordos",
    "name_zh": "鄂尔多斯",
    "pid": 251
  },
  {
    "id": 3081,
    "name": "Hulun Buir",
    "name_zh": "呼伦贝尔",
    "pid": 251
  },
  {
    "id": 3082,
    "name": "Bayannur",
    "name_zh": "巴彦淖尔",
    "pid": 251
  },
  {
    "id": 3083,
    "name": "Ulan Qab",
    "name_zh": "乌兰察布",
    "pid": 251
  },
  {
    "id": 3084,
    "name": "Xing'an",
    "name_zh": "兴安",
    "pid": 251
  },
  {
    "id": 3085,
    "name": "Xilin Gol",
    "name_zh": "锡林郭勒",
    "pid": 251
  },
  {
    "id": 3086,
    "name": "Alxa",
    "name_zh": "阿拉善",
    "pid": 251
  },
  {
    "id": 3087,
    "name": "Shenyang",
    "name_zh": "沈阳",
    "pid": 252
  },
  {
    "id": 3088,
    "name": "Dalian",
    "name_zh": "大连",
    "pid": 252
  },
  {
    "id": 3089,
    "name": "Anshan",
    "name_zh": "鞍山",
    "pid": 252
  },
  {
    "id": 3090,
    "name": "Fushun",
    "name_zh": "抚顺",
    "pid": 252
  },
  {
    "id": 3091,
    "name": "Benxi",
    "name_zh": "本溪",
    "pid": 252
  },
  {
    "id": 3092,
    "name": "Dandong",
    "name_zh": "丹东",
    "pid": 252
  },
  {
    "id": 3093,
    "name": "Jinzhou",
    "name_zh": "锦州",
    "pid": 252
  },
  {
    "id": 3094,
    "name": "Yingkou",
    "name_zh": "营口",
    "pid": 252
  },
  {
    "id": 3095,
    "name": "Fuxin",
    "name_zh": "阜新",
    "pid": 252
  },
  {
    "id": 3096,
    "name": "Liaoyang",
    "name_zh": "辽阳",
    "pid": 252
  },
  {
    "id": 3097,
    "name": "Panjin",
    "name_zh": "盘锦",
    "pid": 252
  },
  {
    "id": 3098,
    "name": "Tieling",
    "name_zh": "铁岭",
    "pid": 252
  },
  {
    "id": 3099,
    "name": "Chaoyang",
    "name_zh": "朝阳",
    "pid": 252
  },
  {
    "id": 3100,
    "name": "Huludao",
    "name_zh": "葫芦岛",
    "pid": 252
  },
  {
    "id": 3101,
    "name": "Changchun",
    "name_zh": "长春",
    "pid": 253
  },
  {
    "id": 3102,
    "name": "Jilin",
    "name_zh": "吉林",
    "pid": 253
  },
  {
    "id": 3103,
    "name": "Siping",
    "name_zh": "四平",
    "pid": 253
  },
  {
    "id": 3104,
    "name": "Liaoyuan",
    "name_zh": "辽源",
    "pid": 253
  },
  {
    "id": 3105,
    "name": "Tonghua",
    "name_zh": "通化",
    "pid": 253
  },
  {
    "id": 3106,
    "name": "Baishan",
    "name_zh": "白山",
    "pid": 253
  },
  {
    "id": 3107,
    "name": "Songyuan",
    "name_zh": "松原",
    "pid": 253
  },
  {
    "id": 3108,
    "name": "Baicheng",
    "name_zh": "白城",
    "pid": 253
  },
  {
    "id": 3109,
    "name": "Yanbian Korean Autonomous Prefecture",
    "name_zh": "延边",
    "pid": 253
  },
  {
    "id": 3110,
    "name": "Harbin",
    "name_zh": "哈尔滨",
    "pid": 254
  },
  {
    "id": 3111,
    "name": "Qiqihar",
    "name_zh": "齐齐哈尔",
    "pid": 254
  },
  {
    "id": 3112,
    "name": "Jixi",
    "name_zh": "鸡西",
    "pid": 254
  },
  {
    "id": 3113,
    "name": "Hegang",
    "name_zh": "鹤岗",
    "pid": 254
  },
  {
    "id": 3114,
    "name": "Shuangyashan",
    "name_zh": "双鸭山",
    "pid": 254
  },
  {
    "id": 3115,
    "name": "Daqing",
    "name_zh": "大庆",
    "pid": 254
  },
  {
    "id": 3116,
    "name": "Yichun",
    "name_zh": "伊春",
    "pid": 254
  },
  {
    "id": 3117,
    "name": "Jiamusi",
    "name_zh": "佳木斯",
    "pid": 254
  },
  {
    "id": 3118,
    "name": "Qitaihe",
    "name_zh": "七台河",
    "pid": 254
  },
  {
    "id": 3119,
    "name": "Mudanjiang",
    "name_zh": "牡丹江",
    "pid": 254
  },
  {
    "id": 3120,
    "name": "Heihe",
    "name_zh": "黑河",
    "pid": 254
  },
  {
    "id": 3121,
    "name": "Suihua",
    "name_zh": "绥化",
    "pid": 254
  },
  {
    "id": 3122,
    "name": "Da Hinggan Ling",
    "name_zh": "大兴安岭",
    "pid": 254
  },
  {
    "id": 3123,
    "name": "Huangpu",
    "name_zh": "黄浦",
    "pid": 255
  },
  {
    "id": 3124,
    "name": "Luwan",
    "name_zh": "卢湾",
    "pid": 255
  },
  {
    "id": 3125,
    "name": "Xuhui",
    "name_zh": "徐汇",
    "pid": 255
  },
  {
    "id": 3126,
    "name": "Changning",
    "name_zh": "长宁",
    "pid": 255
  },
  {
    "id": 3127,
    "name": "Jing'an",
    "name_zh": "静安",
    "pid": 255
  },
  {
    "id": 3128,
    "name": "Putuo",
    "name_zh": "普陀",
    "pid": 255
  },
  {
    "id": 3129,
    "name": "Zhabei",
    "name_zh": "闸北",
    "pid": 255
  },
  {
    "id": 3130,
    "name": "Hongkou",
    "name_zh": "虹口",
    "pid": 255
  },
  {
    "id": 3131,
    "name": "Yangpu",
    "name_zh": "杨浦",
    "pid": 255
  },
  {
    "id": 3132,
    "name": "Minhang",
    "name_zh": "闵行",
    "pid": 255
  },
  {
    "id": 3133,
    "name": "Baoshan",
    "name_zh": "宝山",
    "pid": 255
  },
  {
    "id": 3134,
    "name": "Jiading",
    "name_zh": "嘉定",
    "pid": 255
  },
  {
    "id": 3135,
    "name": "Pudong New Area",
    "name_zh": "浦东新区",
    "pid": 255
  },
  {
    "id": 3136,
    "name": "Jinshan",
    "name_zh": "金山",
    "pid": 255
  },
  {
    "id": 3137,
    "name": "Songjiang",
    "name_zh": "松江",
    "pid": 255
  },
  {
    "id": 3138,
    "name": "Fengxian",
    "name_zh": "奉贤",
    "pid": 255
  },
  {
    "id": 3139,
    "name": "Qingpu",
    "name_zh": "青浦",
    "pid": 255
  },
  {
    "id": 3140,
    "name": "Chongming",
    "name_zh": "崇明",
    "pid": 255
  },
  {
    "id": 3141,
    "name": "Nanjing",
    "name_zh": "南京",
    "pid": 256
  },
  {
    "id": 3142,
    "name": "Wuxi",
    "name_zh": "无锡",
    "pid": 256
  },
  {
    "id": 3143,
    "name": "Xuzhou",
    "name_zh": "徐州",
    "pid": 256
  },
  {
    "id": 3144,
    "name": "Changzhou",
    "name_zh": "常州",
    "pid": 256
  },
  {
    "id": 3145,
    "name": "Suzhou",
    "name_zh": "苏州",
    "pid": 256
  },
  {
    "id": 3146,
    "name": "Nantong",
    "name_zh": "南通",
    "pid": 256
  },
  {
    "id": 3147,
    "name": "Lianyungang",
    "name_zh": "连云港",
    "pid": 256
  },
  {
    "id": 3148,
    "name": "Huai'an",
    "name_zh": "淮安",
    "pid": 256
  },
  {
    "id": 3149,
    "name": "Yancheng",
    "name_zh": "盐城",
    "pid": 256
  },
  {
    "id": 3150,
    "name": "Yangzhou",
    "name_zh": "扬州",
    "pid": 256
  },
  {
    "id": 3151,
    "name": "Zhenjiang",
    "name_zh": "镇江",
    "pid": 256
  },
  {
    "id": 3152,
    "name": "Taizhou",
    "name_zh": "泰州",
    "pid": 256
  },
  {
    "id": 3153,
    "name": "Suqian",
    "name_zh": "宿迁",
    "pid": 256
  },
  {
    "id": 3154,
    "name": "Hangzhou",
    "name_zh": "杭州",
    "pid": 257
  },
  {
    "id": 3155,
    "name": "Ningbo",
    "name_zh": "宁波",
    "pid": 257
  },
  {
    "id": 3156,
    "name": "Wenzhou",
    "name_zh": "温州",
    "pid": 257
  },
  {
    "id": 3157,
    "name": "Jiaxing",
    "name_zh": "嘉兴",
    "pid": 257
  },
  {
    "id": 3158,
    "name": "Huzhou",
    "name_zh": "湖州",
    "pid": 257
  },
  {
    "id": 3159,
    "name": "Shaoxing",
    "name_zh": "绍兴",
    "pid": 257
  },
  {
    "id": 3160,
    "name": "Jinhua",
    "name_zh": "金华",
    "pid": 257
  },
  {
    "id": 3161,
    "name": "Quzhou",
    "name_zh": "衢州",
    "pid": 257
  },
  {
    "id": 3162,
    "name": "Zhoushan",
    "name_zh": "舟山",
    "pid": 257
  },
  {
    "id": 3163,
    "name": "Taizhou",
    "name_zh": "台州",
    "pid": 257
  },
  {
    "id": 3164,
    "name": "Lishui",
    "name_zh": "丽水",
    "pid": 257
  },
  {
    "id": 3165,
    "name": "Hefei",
    "name_zh": "合肥",
    "pid": 258
  },
  {
    "id": 3166,
    "name": "Wuhu",
    "name_zh": "芜湖",
    "pid": 258
  },
  {
    "id": 3167,
    "name": "Bengbu",
    "name_zh": "蚌埠",
    "pid": 258
  },
  {
    "id": 3168,
    "name": "Huainan",
    "name_zh": "淮南",
    "pid": 258
  },
  {
    "id": 3169,
    "name": "Ma'anshan",
    "name_zh": "马鞍山",
    "pid": 258
  },
  {
    "id": 3170,
    "name": "Huaibei",
    "name_zh": "淮北",
    "pid": 258
  },
  {
    "id": 3171,
    "name": "Tongling",
    "name_zh": "铜陵",
    "pid": 258
  },
  {
    "id": 3172,
    "name": "Anqing",
    "name_zh": "安庆",
    "pid": 258
  },
  {
    "id": 3173,
    "name": "Huangshan",
    "name_zh": "黄山",
    "pid": 258
  },
  {
    "id": 3174,
    "name": "Chuzhou",
    "name_zh": "滁州",
    "pid": 258
  },
  {
    "id": 3175,
    "name": "Fuyang",
    "name_zh": "阜阳",
    "pid": 258
  },
  {
    "id": 3176,
    "name": "Suzhou",
    "name_zh": "宿州",
    "pid": 258
  },
  {
    "id": 3177,
    "name": "Lu'an",
    "name_zh": "六安",
    "pid": 258
  },
  {
    "id": 3178,
    "name": "Bozhou",
    "name_zh": "亳州",
    "pid": 258
  },
  {
    "id": 3179,
    "name": "Chizhou",
    "name_zh": "池州",
    "pid": 258
  },
  {
    "id": 3180,
    "name": "Xuancheng",
    "name_zh": "宣城",
    "pid": 258
  },
  {
    "id": 3181,
    "name": "Fuzhou",
    "name_zh": "福州",
    "pid": 259
  },
  {
    "id": 3182,
    "name": "Xiamen",
    "name_zh": "厦门",
    "pid": 259
  },
  {
    "id": 3183,
    "name": "Putian",
    "name_zh": "莆田",
    "pid": 259
  },
  {
    "id": 3184,
    "name": "Sanming",
    "name_zh": "三明",
    "pid": 259
  },
  {
    "id": 3185,
    "name": "Quanzhou",
    "name_zh": "泉州",
    "pid": 259
  },
  {
    "id": 3186,
    "name": "Zhangzhou",
    "name_zh": "漳州",
    "pid": 259
  },
  {
    "id": 3187,
    "name": "Nanping",
    "name_zh": "南平",
    "pid": 259
  },
  {
    "id": 3188,
    "name": "Longyan",
    "name_zh": "龙岩",
    "pid": 259
  },
  {
    "id": 3189,
    "name": "Ningde",
    "name_zh": "宁德",
    "pid": 259
  },
  {
    "id": 3190,
    "name": "Nanchang",
    "name_zh": "南昌",
    "pid": 260
  },
  {
    "id": 3191,
    "name": "Jingdezhen",
    "name_zh": "景德镇",
    "pid": 260
  },
  {
    "id": 3192,
    "name": "Pingxiang",
    "name_zh": "萍乡",
    "pid": 260
  },
  {
    "id": 3193,
    "name": "Jiujiang",
    "name_zh": "九江",
    "pid": 260
  },
  {
    "id": 3194,
    "name": "Xinyu",
    "name_zh": "新余",
    "pid": 260
  },
  {
    "id": 3195,
    "name": "Yingtan",
    "name_zh": "鹰潭",
    "pid": 260
  },
  {
    "id": 3196,
    "name": "Ganzhou",
    "name_zh": "赣州",
    "pid": 260
  },
  {
    "id": 3197,
    "name": "Ji'an",
    "name_zh": "吉安",
    "pid": 260
  },
  {
    "id": 3198,
    "name": "Yichun",
    "name_zh": "宜春",
    "pid": 260
  },
  {
    "id": 3199,
    "name": "Fuzhou",
    "name_zh": "抚州",
    "pid": 260
  },
  {
    "id": 3200,
    "name": "Shangrao",
    "name_zh": "上饶",
    "pid": 260
  },
  {
    "id": 3201,
    "name": "Jinan",
    "name_zh": "济南",
    "pid": 261
  },
  {
    "id": 3202,
    "name": "Qingdao",
    "name_zh": "青岛",
    "pid": 261
  },
  {
    "id": 3203,
    "name": "Zibo",
    "name_zh": "淄博",
    "pid": 261
  },
  {
    "id": 3204,
    "name": "Zaozhuang",
    "name_zh": "枣庄",
    "pid": 261
  },
  {
    "id": 3205,
    "name": "Dongying",
    "name_zh": "东营",
    "pid": 261
  },
  {
    "id": 3206,
    "name": "Yantai",
    "name_zh": "烟台",
    "pid": 261
  },
  {
    "id": 3207,
    "name": "Weifang",
    "name_zh": "潍坊",
    "pid": 261
  },
  {
    "id": 3208,
    "name": "Jining",
    "name_zh": "济宁",
    "pid": 261
  },
  {
    "id": 3209,
    "name": "Tai'an",
    "name_zh": "泰安",
    "pid": 261
  },
  {
    "id": 3210,
    "name": "Weihai",
    "name_zh": "威海",
    "pid": 261
  },
  {
    "id": 3211,
    "name": "Rizhao",
    "name_zh": "日照",
    "pid": 261
  },
  {
    "id": 3212,
    "name": "Laiwu",
    "name_zh": "莱芜",
    "pid": 261
  },
  {
    "id": 3213,
    "name": "Linyi",
    "name_zh": "临沂",
    "pid": 261
  },
  {
    "id": 3214,
    "name": "Dezhou",
    "name_zh": "德州",
    "pid": 261
  },
  {
    "id": 3215,
    "name": "Liaocheng",
    "name_zh": "聊城",
    "pid": 261
  },
  {
    "id": 3216,
    "name": "Binzhou",
    "name_zh": "滨州",
    "pid": 261
  },
  {
    "id": 3217,
    "name": "Heze",
    "name_zh": "菏泽",
    "pid": 261
  },
  {
    "id": 3218,
    "name": "Zhengzhou",
    "name_zh": "郑州",
    "pid": 262
  },
  {
    "id": 3219,
    "name": "Kaifeng",
    "name_zh": "开封",
    "pid": 262
  },
  {
    "id": 3220,
    "name": "Luoyang",
    "name_zh": "洛阳",
    "pid": 262
  },
  {
    "id": 3221,
    "name": "Pingdingshan",
    "name_zh": "平顶山",
    "pid": 262
  },
  {
    "id": 3222,
    "name": "Anyang",
    "name_zh": "安阳",
    "pid": 262
  },
  {
    "id": 3223,
    "name": "Hebi",
    "name_zh": "鹤壁",
    "pid": 262
  },
  {
    "id": 3224,
    "name": "Xinxiang",
    "name_zh": "新乡",
    "pid": 262
  },
  {
    "id": 3225,
    "name": "Jiaozuo",
    "name_zh": "焦作",
    "pid": 262
  },
  {
    "id": 3226,
    "name": "Puyang",
    "name_zh": "濮阳",
    "pid": 262
  },
  {
    "id": 3227,
    "name": "Xuchang",
    "name_zh": "许昌",
    "pid": 262
  },
  {
    "id": 3228,
    "name": "Luohe",
    "name_zh": "漯河",
    "pid": 262
  },
  {
    "id": 3229,
    "name": "Sanmenxia",
    "name_zh": "三门峡",
    "pid": 262
  },
  {
    "id": 3230,
    "name": "Nanyang",
    "name_zh": "南阳",
    "pid": 262
  },
  {
    "id": 3231,
    "name": "Shangqiu",
    "name_zh": "商丘",
    "pid": 262
  },
  {
    "id": 3232,
    "name": "Xinyang",
    "name_zh": "信阳",
    "pid": 262
  },
  {
    "id": 3233,
    "name": "Zhoukou",
    "name_zh": "周口",
    "pid": 262
  },
  {
    "id": 3234,
    "name": "Zhumadian",
    "name_zh": "驻马店",
    "pid": 262
  },
  {
    "id": 3235,
    "name": "Jiyuan",
    "name_zh": "济源",
    "pid": 262
  },
  {
    "id": 3236,
    "name": "Wuhan",
    "name_zh": "武汉",
    "pid": 263
  },
  {
    "id": 3237,
    "name": "Huangshi",
    "name_zh": "黄石",
    "pid": 263
  },
  {
    "id": 3238,
    "name": "Shiyan",
    "name_zh": "十堰",
    "pid": 263
  },
  {
    "id": 3239,
    "name": "Yichang",
    "name_zh": "宜昌",
    "pid": 263
  },
  {
    "id": 3240,
    "name": "Xiangyang",
    "name_zh": "襄阳",
    "pid": 263
  },
  {
    "id": 3241,
    "name": "Ezhou",
    "name_zh": "鄂州",
    "pid": 263
  },
  {
    "id": 3242,
    "name": "Jingmen",
    "name_zh": "荆门",
    "pid": 263
  },
  {
    "id": 3243,
    "name": "Xiaogan",
    "name_zh": "孝感",
    "pid": 263
  },
  {
    "id": 3244,
    "name": "Jingzhou",
    "name_zh": "荆州",
    "pid": 263
  },
  {
    "id": 3245,
    "name": "Huanggang",
    "name_zh": "黄冈",
    "pid": 263
  },
  {
    "id": 3246,
    "name": "Xianning",
    "name_zh": "咸宁",
    "pid": 263
  },
  {
    "id": 3247,
    "name": "Suizhou",
    "name_zh": "随州",
    "pid": 263
  },
  {
    "id": 3248,
    "name": "Enshi Tujia-Miao Autonomous Prefecture",
    "name_zh": "恩施",
    "pid": 263
  },
  {
    "id": 3249,
    "name": "Xiantao",
    "name_zh": "仙桃",
    "pid": 263
  },
  {
    "id": 3250,
    "name": "Qianjiang",
    "name_zh": "潜江",
    "pid": 263
  },
  {
    "id": 3251,
    "name": "Tianmen",
    "name_zh": "天门",
    "pid": 263
  },
  {
    "id": 3252,
    "name": "Shennongjia",
    "name_zh": "神农架",
    "pid": 263
  },
  {
    "id": 3253,
    "name": "Changsha",
    "name_zh": "长沙",
    "pid": 264
  },
  {
    "id": 3254,
    "name": "Zhuzhou",
    "name_zh": "株洲",
    "pid": 264
  },
  {
    "id": 3255,
    "name": "Xiangtan",
    "name_zh": "湘潭",
    "pid": 264
  },
  {
    "id": 3256,
    "name": "Hengyang",
    "name_zh": "衡阳",
    "pid": 264
  },
  {
    "id": 3257,
    "name": "Shaoyang",
    "name_zh": "邵阳",
    "pid": 264
  },
  {
    "id": 3258,
    "name": "Yueyang",
    "name_zh": "岳阳",
    "pid": 264
  },
  {
    "id": 3259,
    "name": "Changde",
    "name_zh": "常德",
    "pid": 264
  },
  {
    "id": 3260,
    "name": "Zhangjiajie",
    "name_zh": "张家界",
    "pid": 264
  },
  {
    "id": 3261,
    "name": "Yiyang",
    "name_zh": "益阳",
    "pid": 264
  },
  {
    "id": 3262,
    "name": "Chenzhou",
    "name_zh": "郴州",
    "pid": 264
  },
  {
    "id": 3263,
    "name": "Yongzhou",
    "name_zh": "永州",
    "pid": 264
  },
  {
    "id": 3264,
    "name": "Huaihua",
    "name_zh": "怀化",
    "pid": 264
  },
  {
    "id": 3265,
    "name": "Loudi",
    "name_zh": "娄底",
    "pid": 264
  },
  {
    "id": 3266,
    "name": "Xiangxi Tujia-Miao Autonomous Prefecture",
    "name_zh": "湘西",
    "pid": 264
  },
  {
    "id": 3267,
    "name": "Guangzhou",
    "name_zh": "广州",
    "pid": 265
  },
  {
    "id": 3268,
    "name": "Shaoguan",
    "name_zh": "韶关",
    "pid": 265
  },
  {
    "id": 3269,
    "name": "Shenzhen",
    "name_zh": "深圳",
    "pid": 265
  },
  {
    "id": 3270,
    "name": "Zhuhai",
    "name_zh": "珠海",
    "pid": 265
  },
  {
    "id": 3271,
    "name": "Shantou",
    "name_zh": "汕头",
    "pid": 265
  },
  {
    "id": 3272,
    "name": "Foshan",
    "name_zh": "佛山",
    "pid": 265
  },
  {
    "id": 3273,
    "name": "Jiangmen",
    "name_zh": "江门",
    "pid": 265
  },
  {
    "id": 3274,
    "name": "Zhanjiang",
    "name_zh": "湛江",
    "pid": 265
  },
  {
    "id": 3275,
    "name": "Maoming",
    "name_zh": "茂名",
    "pid": 265
  },
  {
    "id": 3276,
    "name": "Zhaoqing",
    "name_zh": "肇庆",
    "pid": 265
  },
  {
    "id": 3277,
    "name": "Huizhou",
    "name_zh": "惠州",
    "pid": 265
  },
  {
    "id": 3278,
    "name": "Meizhou",
    "name_zh": "梅州",
    "pid": 265
  },
  {
    "id": 3279,
    "name": "Shanwei",
    "name_zh": "汕尾",
    "pid": 265
  },
  {
    "id": 3280,
    "name": "Heyuan",
    "name_zh": "河源",
    "pid": 265
  },
  {
    "id": 3281,
    "name": "Yangjiang",
    "name_zh": "阳江",
    "pid": 265
  },
  {
    "id": 3282,
    "name": "Qingyuan",
    "name_zh": "清远",
    "pid": 265
  },
  {
    "id": 3283,
    "name": "Dongguan",
    "name_zh": "东莞",
    "pid": 265
  },
  {
    "id": 3284,
    "name": "Zhongshan",
    "name_zh": "中山",
    "pid": 265
  },
  {
    "id": 3285,
    "name": "Chaozhou",
    "name_zh": "潮州",
    "pid": 265
  },
  {
    "id": 3286,
    "name": "Jieyang",
    "name_zh": "揭阳",
    "pid": 265
  },
  {
    "id": 3287,
    "name": "Yunfu",
    "name_zh": "云浮",
    "pid": 265
  },
  {
    "id": 3288,
    "name": "Nanning",
    "name_zh": "南宁",
    "pid": 266
  },
  {
    "id": 3289,
    "name": "Liuzhou",
    "name_zh": "柳州",
    "pid": 266
  },
  {
    "id": 3290,
    "name": "Guilin",
    "name_zh": "桂林",
    "pid": 266
  },
  {
    "id": 3291,
    "name": "Wuzhou",
    "name_zh": "梧州",
    "pid": 266
  },
  {
    "id": 3292,
    "name": "Beihai",
    "name_zh": "北海",
    "pid": 266
  },
  {
    "id": 3293,
    "name": "Fangchenggang",
    "name_zh": "防城港",
    "pid": 266
  },
  {
    "id": 3294,
    "name": "Qinzhou",
    "name_zh": "钦州",
    "pid": 266
  },
  {
    "id": 3295,
    "name": "Guigang",
    "name_zh": "贵港",
    "pid": 266
  },
  {
    "id": 3296,
    "name": "Yulin",
    "name_zh": "玉林",
    "pid": 266
  },
  {
    "id": 3297,
    "name": "Baise",
    "name_zh": "百色",
    "pid": 266
  },
  {
    "id": 3298,
    "name": "Hezhou",
    "name_zh": "贺州",
    "pid": 266
  },
  {
    "id": 3299,
    "name": "Hechi",
    "name_zh": "河池",
    "pid": 266
  },
  {
    "id": 3300,
    "name": "Laibin",
    "name_zh": "来宾",
    "pid": 266
  },
  {
    "id": 3301,
    "name": "Chongzuo",
    "name_zh": "崇左",
    "pid": 266
  },
  {
    "id": 3302,
    "name": "Haikou",
    "name_zh": "海口",
    "pid": 267
  },
  {
    "id": 3303,
    "name": "Sanya",
    "name_zh": "三亚",
    "pid": 267
  },
  {
    "id": 3304,
    "name": "Shansha",
    "name_zh": "三沙",
    "pid": 267
  },
  {
    "id": 3305,
    "name": "Wuzhishan",
    "name_zh": "五指山",
    "pid": 267
  },
  {
    "id": 3306,
    "name": "Qionghai",
    "name_zh": "琼海",
    "pid": 267
  },
  {
    "id": 3307,
    "name": "Danzhou",
    "name_zh": "儋州",
    "pid": 267
  },
  {
    "id": 3308,
    "name": "Wenchang",
    "name_zh": "文昌",
    "pid": 267
  },
  {
    "id": 3309,
    "name": "Wanning",
    "name_zh": "万宁",
    "pid": 267
  },
  {
    "id": 3310,
    "name": "Dongfang",
    "name_zh": "东方",
    "pid": 267
  },
  {
    "id": 3311,
    "name": "Ding'an",
    "name_zh": "定安",
    "pid": 267
  },
  {
    "id": 3312,
    "name": "Tunchang",
    "name_zh": "屯昌",
    "pid": 267
  },
  {
    "id": 3313,
    "name": "Cengmai",
    "name_zh": "澄迈",
    "pid": 267
  },
  {
    "id": 3314,
    "name": "Lingao",
    "name_zh": "临高",
    "pid": 267
  },
  {
    "id": 3315,
    "name": "Baisha Li Autonomous County",
    "name_zh": "白沙",
    "pid": 267
  },
  {
    "id": 3316,
    "name": "Jiang Li Autonomous County",
    "name_zh": "昌江",
    "pid": 267
  },
  {
    "id": 3317,
    "name": "Ledong Li Autonomous County",
    "name_zh": "乐东",
    "pid": 267
  },
  {
    "id": 3318,
    "name": "Lingshui Li Autonomous County",
    "name_zh": "陵水",
    "pid": 267
  },
  {
    "id": 3319,
    "name": "Baoting Li-Miao Autonomous County",
    "name_zh": "保亭",
    "pid": 267
  },
  {
    "id": 3320,
    "name": "Qiongzhong Li-Miao Autonomous County",
    "name_zh": "琼中",
    "pid": 267
  },
  {
    "id": 3321,
    "name": "Wanzhou",
    "name_zh": "万州",
    "pid": 268
  },
  {
    "id": 3322,
    "name": "Fuling",
    "name_zh": "涪陵",
    "pid": 268
  },
  {
    "id": 3323,
    "name": "Yuzhong",
    "name_zh": "渝中",
    "pid": 268
  },
  {
    "id": 3324,
    "name": "Dadukou",
    "name_zh": "大渡口",
    "pid": 268
  },
  {
    "id": 3325,
    "name": "Jiangbei",
    "name_zh": "江北",
    "pid": 268
  },
  {
    "id": 3326,
    "name": "Shapingba",
    "name_zh": "沙坪坝",
    "pid": 268
  },
  {
    "id": 3327,
    "name": "Jiulongpo",
    "name_zh": "九龙坡",
    "pid": 268
  },
  {
    "id": 3328,
    "name": "Nan'an",
    "name_zh": "南岸",
    "pid": 268
  },
  {
    "id": 3329,
    "name": "Beibei",
    "name_zh": "北碚",
    "pid": 268
  },
  {
    "id": 3330,
    "name": "Kaixian",
    "name_zh": "两江新区",
    "pid": 268
  },
  {
    "id": 3331,
    "name": "Wansheng",
    "name_zh": "万盛",
    "pid": 268
  },
  {
    "id": 3332,
    "name": "Shuangqiao",
    "name_zh": "双桥",
    "pid": 268
  },
  {
    "id": 3333,
    "name": "Yubei",
    "name_zh": "渝北",
    "pid": 268
  },
  {
    "id": 3334,
    "name": "Ba'nan",
    "name_zh": "巴南",
    "pid": 268
  },
  {
    "id": 3335,
    "name": "Changshou",
    "name_zh": "长寿",
    "pid": 268
  },
  {
    "id": 3336,
    "name": "Qijiang",
    "name_zh": "綦江",
    "pid": 268
  },
  {
    "id": 3337,
    "name": "Tongnan",
    "name_zh": "潼南",
    "pid": 268
  },
  {
    "id": 3338,
    "name": "Tongliang",
    "name_zh": "铜梁",
    "pid": 268
  },
  {
    "id": 3339,
    "name": "Dazu",
    "name_zh": "大足",
    "pid": 268
  },
  {
    "id": 3340,
    "name": "Rongchang",
    "name_zh": "荣昌",
    "pid": 268
  },
  {
    "id": 3341,
    "name": "Bishan",
    "name_zh": "璧山",
    "pid": 268
  },
  {
    "id": 3342,
    "name": "Liangping",
    "name_zh": "梁平",
    "pid": 268
  },
  {
    "id": 3343,
    "name": "Chengkou",
    "name_zh": "城口",
    "pid": 268
  },
  {
    "id": 3344,
    "name": "Fengdu",
    "name_zh": "丰都",
    "pid": 268
  },
  {
    "id": 3345,
    "name": "Dianjiang",
    "name_zh": "垫江",
    "pid": 268
  },
  {
    "id": 3346,
    "name": "Wulong",
    "name_zh": "武隆",
    "pid": 268
  },
  {
    "id": 3347,
    "name": "Zhongxian",
    "name_zh": "忠县",
    "pid": 268
  },
  {
    "id": 3348,
    "name": "Kaixian",
    "name_zh": "开县",
    "pid": 268
  },
  {
    "id": 3349,
    "name": "Yunyang",
    "name_zh": "云阳",
    "pid": 268
  },
  {
    "id": 3350,
    "name": "Fengjie",
    "name_zh": "奉节",
    "pid": 268
  },
  {
    "id": 3351,
    "name": "Wushan",
    "name_zh": "巫山",
    "pid": 268
  },
  {
    "id": 3352,
    "name": "Wuxi",
    "name_zh": "巫溪",
    "pid": 268
  },
  {
    "id": 3353,
    "name": "Qianjiang",
    "name_zh": "黔江",
    "pid": 268
  },
  {
    "id": 3354,
    "name": "Shizhu Tujia Autonomous Country",
    "name_zh": "石柱",
    "pid": 268
  },
  {
    "id": 3355,
    "name": "Xiushan Tujia-Miao Autonomous Country",
    "name_zh": "秀山",
    "pid": 268
  },
  {
    "id": 3356,
    "name": "Youyang Tujia-Miao Autonomous Country",
    "name_zh": "酉阳",
    "pid": 268
  },
  {
    "id": 3357,
    "name": "Pengshui Miao-Tujia Autonomous Country",
    "name_zh": "彭水",
    "pid": 268
  },
  {
    "id": 3358,
    "name": "Jiangjin",
    "name_zh": "江津",
    "pid": 268
  },
  {
    "id": 3359,
    "name": "Hechuan",
    "name_zh": "合川",
    "pid": 268
  },
  {
    "id": 3360,
    "name": "Yongchuan",
    "name_zh": "永川",
    "pid": 268
  },
  {
    "id": 3361,
    "name": "Liangjiangxinqu",
    "name_zh": "南川",
    "pid": 268
  },
  {
    "id": 3362,
    "name": "Chengdu",
    "name_zh": "成都",
    "pid": 269
  },
  {
    "id": 3363,
    "name": "Zigong",
    "name_zh": "自贡",
    "pid": 269
  },
  {
    "id": 3364,
    "name": "Panzhihua",
    "name_zh": "攀枝花",
    "pid": 269
  },
  {
    "id": 3365,
    "name": "Luzhou",
    "name_zh": "泸州",
    "pid": 269
  },
  {
    "id": 3366,
    "name": "Deyang",
    "name_zh": "德阳",
    "pid": 269
  },
  {
    "id": 3367,
    "name": "Mianyang",
    "name_zh": "绵阳",
    "pid": 269
  },
  {
    "id": 3368,
    "name": "Guangyuan",
    "name_zh": "广元",
    "pid": 269
  },
  {
    "id": 3369,
    "name": "Suining",
    "name_zh": "遂宁",
    "pid": 269
  },
  {
    "id": 3370,
    "name": "Neijiang",
    "name_zh": "内江",
    "pid": 269
  },
  {
    "id": 3371,
    "name": "Leshan",
    "name_zh": "乐山",
    "pid": 269
  },
  {
    "id": 3372,
    "name": "Nanchong",
    "name_zh": "南充",
    "pid": 269
  },
  {
    "id": 3373,
    "name": "Meishan",
    "name_zh": "眉山",
    "pid": 269
  },
  {
    "id": 3374,
    "name": "Yibin",
    "name_zh": "宜宾",
    "pid": 269
  },
  {
    "id": 3375,
    "name": "Guang'an",
    "name_zh": "广安",
    "pid": 269
  },
  {
    "id": 3376,
    "name": "Dazhou",
    "name_zh": "达州",
    "pid": 269
  },
  {
    "id": 3377,
    "name": "Ya'an",
    "name_zh": "雅安",
    "pid": 269
  },
  {
    "id": 3378,
    "name": "Bazhong",
    "name_zh": "巴中",
    "pid": 269
  },
  {
    "id": 3379,
    "name": "Ziyang",
    "name_zh": "资阳",
    "pid": 269
  },
  {
    "id": 3380,
    "name": "Aba Tibetan-Qiang Autonomous Prefecture",
    "name_zh": "阿坝",
    "pid": 269
  },
  {
    "id": 3381,
    "name": "Garze Tibetan Autonomous Prefecture",
    "name_zh": "甘孜",
    "pid": 269
  },
  {
    "id": 3382,
    "name": "Liangshan Yi Autonomous Prefecture",
    "name_zh": "凉山",
    "pid": 269
  },
  {
    "id": 3383,
    "name": "Guiyang",
    "name_zh": "贵阳",
    "pid": 270
  },
  {
    "id": 3384,
    "name": "Liupanshui",
    "name_zh": "六盘水",
    "pid": 270
  },
  {
    "id": 3385,
    "name": "Zunyi",
    "name_zh": "遵义",
    "pid": 270
  },
  {
    "id": 3386,
    "name": "Anshun",
    "name_zh": "安顺",
    "pid": 270
  },
  {
    "id": 3387,
    "name": "Tongren",
    "name_zh": "铜仁",
    "pid": 270
  },
  {
    "id": 3388,
    "name": "Qianxinan Buyi-Miao Autonomous Prefecture",
    "name_zh": "黔西南",
    "pid": 270
  },
  {
    "id": 3389,
    "name": "Bijie",
    "name_zh": "毕节",
    "pid": 270
  },
  {
    "id": 3390,
    "name": "Qiandongnan Miao-Dong Autonomous Prefecture",
    "name_zh": "黔东南",
    "pid": 270
  },
  {
    "id": 3391,
    "name": "Qiannan Buyi Autonomous Prefecture",
    "name_zh": "黔南",
    "pid": 270
  },
  {
    "id": 3392,
    "name": "Kunming",
    "name_zh": "昆明",
    "pid": 271
  },
  {
    "id": 3393,
    "name": "Qujing",
    "name_zh": "曲靖",
    "pid": 271
  },
  {
    "id": 3394,
    "name": "Yuxi",
    "name_zh": "玉溪",
    "pid": 271
  },
  {
    "id": 3395,
    "name": "Baoshan",
    "name_zh": "保山",
    "pid": 271
  },
  {
    "id": 3396,
    "name": "Zhaotong",
    "name_zh": "昭通",
    "pid": 271
  },
  {
    "id": 3397,
    "name": "Lijiang",
    "name_zh": "丽江",
    "pid": 271
  },
  {
    "id": 3398,
    "name": "Pu'er",
    "name_zh": "普洱",
    "pid": 271
  },
  {
    "id": 3399,
    "name": "Lincang",
    "name_zh": "临沧",
    "pid": 271
  },
  {
    "id": 3400,
    "name": "Chuxiong Yi Autonomous Prefecture",
    "name_zh": "楚雄",
    "pid": 271
  },
  {
    "id": 3401,
    "name": "Honghe Hani-Yi Autonomous Prefecture",
    "name_zh": "红河",
    "pid": 271
  },
  {
    "id": 3402,
    "name": "Wenshan Zhuang-Miao Autonomous Prefecture",
    "name_zh": "文山",
    "pid": 271
  },
  {
    "id": 3403,
    "name": "Xishuangbanna Dai Autonomous Prefecture",
    "name_zh": "西双版纳",
    "pid": 271
  },
  {
    "id": 3404,
    "name": "Dali Bai Autonomous Prefecture",
    "name_zh": "大理",
    "pid": 271
  },
  {
    "id": 3405,
    "name": "Dehong Dai-Jingpo Autonomous Prefecture",
    "name_zh": "德宏",
    "pid": 271
  },
  {
    "id": 3406,
    "name": "Nujiang Lisu Autonomous Prefecture",
    "name_zh": "怒江",
    "pid": 271
  },
  {
    "id": 3407,
    "name": "Diqing Tibetan Autonomous Prefecture",
    "name_zh": "迪庆",
    "pid": 271
  },
  {
    "id": 3408,
    "name": "Lhasa",
    "name_zh": "拉萨",
    "pid": 272
  },
  {
    "id": 3409,
    "name": "Qamdo",
    "name_zh": "昌都",
    "pid": 272
  },
  {
    "id": 3410,
    "name": "Shannan",
    "name_zh": "山南",
    "pid": 272
  },
  {
    "id": 3411,
    "name": "Xigaze",
    "name_zh": "日喀则",
    "pid": 272
  },
  {
    "id": 3412,
    "name": "Nagqu",
    "name_zh": "那曲",
    "pid": 272
  },
  {
    "id": 3413,
    "name": "Ngari",
    "name_zh": "阿里",
    "pid": 272
  },
  {
    "id": 3414,
    "name": "Nyingchi",
    "name_zh": "林芝",
    "pid": 272
  },
  {
    "id": 3415,
    "name": "Xi'an",
    "name_zh": "西安",
    "pid": 273
  },
  {
    "id": 3416,
    "name": "Tongchuan",
    "name_zh": "铜川",
    "pid": 273
  },
  {
    "id": 3417,
    "name": "Baoji",
    "name_zh": "宝鸡",
    "pid": 273
  },
  {
    "id": 3418,
    "name": "Xianyang",
    "name_zh": "咸阳",
    "pid": 273
  },
  {
    "id": 3419,
    "name": "Weinan",
    "name_zh": "渭南",
    "pid": 273
  },
  {
    "id": 3420,
    "name": "Yan'an",
    "name_zh": "延安",
    "pid": 273
  },
  {
    "id": 3421,
    "name": "Hanzhong",
    "name_zh": "汉中",
    "pid": 273
  },
  {
    "id": 3422,
    "name": "Yulin",
    "name_zh": "榆林",
    "pid": 273
  },
  {
    "id": 3423,
    "name": "Ankang",
    "name_zh": "安康",
    "pid": 273
  },
  {
    "id": 3424,
    "name": "Shangluo",
    "name_zh": "商洛",
    "pid": 273
  },
  {
    "id": 3425,
    "name": "Lanzhou",
    "name_zh": "兰州市",
    "pid": 274
  },
  {
    "id": 3426,
    "name": "Jinchang",
    "name_zh": "嘉峪关",
    "pid": 274
  },
  {
    "id": 3427,
    "name": "Baiyin",
    "name_zh": "金昌",
    "pid": 274
  },
  {
    "id": 3428,
    "name": "Tianshui",
    "name_zh": "白银",
    "pid": 274
  },
  {
    "id": 3429,
    "name": "Jiayuguan",
    "name_zh": "天水",
    "pid": 274
  },
  {
    "id": 3430,
    "name": "Wuwei",
    "name_zh": "武威",
    "pid": 274
  },
  {
    "id": 3431,
    "name": "Zhangye",
    "name_zh": "张掖",
    "pid": 274
  },
  {
    "id": 3432,
    "name": "Pingliang",
    "name_zh": "平凉",
    "pid": 274
  },
  {
    "id": 3433,
    "name": "Jiuquan",
    "name_zh": "酒泉",
    "pid": 274
  },
  {
    "id": 3434,
    "name": "Qingyang",
    "name_zh": "庆阳",
    "pid": 274
  },
  {
    "id": 3435,
    "name": "Dingxi",
    "name_zh": "定西",
    "pid": 274
  },
  {
    "id": 3436,
    "name": "Longnan",
    "name_zh": "陇南",
    "pid": 274
  },
  {
    "id": 3437,
    "name": "Linxia Hui Autonomous Prefecture",
    "name_zh": "临夏",
    "pid": 274
  },
  {
    "id": 3438,
    "name": "Gannan Tibetan Autonomous Prefecture",
    "name_zh": "甘南",
    "pid": 274
  },
  {
    "id": 3439,
    "name": "Xining",
    "name_zh": "西宁",
    "pid": 275
  },
  {
    "id": 3440,
    "name": "Haidong",
    "name_zh": "海东",
    "pid": 275
  },
  {
    "id": 3441,
    "name": "Haibei Tibetan Autonomous Prefecture",
    "name_zh": "海北",
    "pid": 275
  },
  {
    "id": 3442,
    "name": "Huangnan Tibetan Autonomous Prefecture",
    "name_zh": "黄南",
    "pid": 275
  },
  {
    "id": 3443,
    "name": "Hainan Tibetan Autonomous Prefecture",
    "name_zh": "海南",
    "pid": 275
  },
  {
    "id": 3444,
    "name": "Guoluo Tibetan Autonomous Prefecture",
    "name_zh": "果洛",
    "pid": 275
  },
  {
    "id": 3445,
    "name": "Yushu Tibetan Autonomous Prefecture",
    "name_zh": "玉树",
    "pid": 275
  },
  {
    "id": 3446,
    "name": "Haixi Mongol-Tibetan Autonomous Prefecture",
    "name_zh": "海西",
    "pid": 275
  },
  {
    "id": 3447,
    "name": "Yinchuan",
    "name_zh": "银川",
    "pid": 276
  },
  {
    "id": 3448,
    "name": "Shizuishan",
    "name_zh": "石嘴山",
    "pid": 276
  },
  {
    "id": 3449,
    "name": "Wuzhong",
    "name_zh": "吴忠",
    "pid": 276
  },
  {
    "id": 3450,
    "name": "Guyuan",
    "name_zh": "固原",
    "pid": 276
  },
  {
    "id": 3451,
    "name": "Zhongwei",
    "name_zh": "中卫",
    "pid": 276
  },
  {
    "id": 3452,
    "name": "Urumqi",
    "name_zh": "乌鲁木齐",
    "pid": 277
  },
  {
    "id": 3453,
    "name": "Karamay",
    "name_zh": "克拉玛依",
    "pid": 277
  },
  {
    "id": 3454,
    "name": "Turpan",
    "name_zh": "吐鲁番",
    "pid": 277
  },
  {
    "id": 3455,
    "name": "Hami",
    "name_zh": "哈密",
    "pid": 277
  },
  {
    "id": 3456,
    "name": "Changji Hui Autonomous Prefecture",
    "name_zh": "昌吉",
    "pid": 277
  },
  {
    "id": 3457,
    "name": "Bortala Mongol Autonomous Prefecture",
    "name_zh": "博尔塔拉",
    "pid": 277
  },
  {
    "id": 3458,
    "name": "Bayingolin Mongol Autonomous Prefecture",
    "name_zh": "巴音郭楞",
    "pid": 277
  },
  {
    "id": 3459,
    "name": "Aksu",
    "name_zh": "阿克苏",
    "pid": 277
  },
  {
    "id": 3460,
    "name": "Kizilsu Kirgiz Autonomous Prefecture",
    "name_zh": "克孜勒苏",
    "pid": 277
  },
  {
    "id": 3461,
    "name": "Kashi",
    "name_zh": "喀什",
    "pid": 277
  },
  {
    "id": 3462,
    "name": "Hotan",
    "name_zh": "和田",
    "pid": 277
  },
  {
    "id": 3463,
    "name": "Ili Kazakh Autonomous Prefecture",
    "name_zh": "伊犁",
    "pid": 277
  },
  {
    "id": 3464,
    "name": "Tacheng",
    "name_zh": "塔城",
    "pid": 277
  },
  {
    "id": 3465,
    "name": "Altay",
    "name_zh": "阿勒泰",
    "pid": 277
  },
  {
    "id": 3466,
    "name": "Shihezi",
    "name_zh": "石河子",
    "pid": 277
  },
  {
    "id": 3467,
    "name": "Alar",
    "name_zh": "阿拉尔",
    "pid": 277
  },
  {
    "id": 3468,
    "name": "Tumsuk",
    "name_zh": "图木舒克",
    "pid": 277
  },
  {
    "id": 3469,
    "name": "Wujiaqu",
    "name_zh": "五家渠",
    "pid": 277
  },
  {
    "id": 3470,
    "name": "Beitun",
    "name_zh": "北屯",
    "pid": 277
  },
  {
    "id": 3471,
    "name": "Taipei City",
    "name_zh": "台北市",
    "pid": 278
  },
  {
    "id": 3472,
    "name": "Kaohsiung City",
    "name_zh": "高雄市",
    "pid": 278
  },
  {
    "id": 3473,
    "name": "Keelung City",
    "name_zh": "基隆市",
    "pid": 278
  },
  {
    "id": 3474,
    "name": "Taichung City",
    "name_zh": "台中市",
    "pid": 278
  },
  {
    "id": 3475,
    "name": "Tainan City",
    "name_zh": "台南市",
    "pid": 278
  },
  {
    "id": 3476,
    "name": "Hsinchu City",
    "name_zh": "新竹市",
    "pid": 278
  },
  {
    "id": 3477,
    "name": "Chiayi City",
    "name_zh": "嘉义市",
    "pid": 278
  },
  {
    "id": 3478,
    "name": "Taipei County",
    "name_zh": "台北县",
    "pid": 278
  },
  {
    "id": 3479,
    "name": "Ilan County",
    "name_zh": "宜兰县",
    "pid": 278
  },
  {
    "id": 3480,
    "name": "Taoyuan County",
    "name_zh": "桃园县",
    "pid": 278
  },
  {
    "id": 3481,
    "name": "Hsinchu County",
    "name_zh": "新竹县",
    "pid": 278
  },
  {
    "id": 3482,
    "name": "Miaoli County",
    "name_zh": "苗栗县",
    "pid": 278
  },
  {
    "id": 3483,
    "name": "Taichung County",
    "name_zh": "台中县",
    "pid": 278
  },
  {
    "id": 3484,
    "name": "Changhwa County",
    "name_zh": "彰化县",
    "pid": 278
  },
  {
    "id": 3485,
    "name": "Nantou County",
    "name_zh": "南投县",
    "pid": 278
  },
  {
    "id": 3486,
    "name": "Yunnlin County",
    "name_zh": "云林县",
    "pid": 278
  },
  {
    "id": 3487,
    "name": "Chiayi County",
    "name_zh": "嘉义县",
    "pid": 278
  },
  {
    "id": 3488,
    "name": "Tainan County",
    "name_zh": "台南县",
    "pid": 278
  },
  {
    "id": 3489,
    "name": "Kaohsiung County",
    "name_zh": "高雄县",
    "pid": 278
  },
  {
    "id": 3490,
    "name": "Pingtung County",
    "name_zh": "屏东县",
    "pid": 278
  },
  {
    "id": 3491,
    "name": "Taitung County",
    "name_zh": "台东县",
    "pid": 278
  },
  {
    "id": 3492,
    "name": "Hualian County",
    "name_zh": "花莲县",
    "pid": 278
  },
  {
    "id": 3493,
    "name": "Penghu County",
    "name_zh": "澎湖县",
    "pid": 278
  },
  {
    "id": 3494,
    "name": "NaN",
    "name_zh": "中西区",
    "pid": 279
  },
  {
    "id": 3495,
    "name": "NaN",
    "name_zh": "东区",
    "pid": 279
  },
  {
    "id": 3496,
    "name": "NaN",
    "name_zh": "九龙城区",
    "pid": 279
  },
  {
    "id": 3497,
    "name": "NaN",
    "name_zh": "观塘区",
    "pid": 279
  },
  {
    "id": 3498,
    "name": "NaN",
    "name_zh": "南区",
    "pid": 279
  },
  {
    "id": 3499,
    "name": "NaN",
    "name_zh": "深水埗区",
    "pid": 279
  },
  {
    "id": 3500,
    "name": "NaN",
    "name_zh": "黄大仙区",
    "pid": 279
  },
  {
    "id": 3501,
    "name": "NaN",
    "name_zh": "湾仔区",
    "pid": 279
  },
  {
    "id": 3502,
    "name": "NaN",
    "name_zh": "油尖旺区",
    "pid": 279
  },
  {
    "id": 3503,
    "name": "NaN",
    "name_zh": "离岛区",
    "pid": 279
  },
  {
    "id": 3504,
    "name": "NaN",
    "name_zh": "葵青区",
    "pid": 279
  },
  {
    "id": 3505,
    "name": "NaN",
    "name_zh": "北区",
    "pid": 279
  },
  {
    "id": 3506,
    "name": "NaN",
    "name_zh": "西贡区",
    "pid": 279
  },
  {
    "id": 3507,
    "name": "NaN",
    "name_zh": "沙田区",
    "pid": 279
  },
  {
    "id": 3508,
    "name": "NaN",
    "name_zh": "屯门区",
    "pid": 279
  },
  {
    "id": 3509,
    "name": "NaN",
    "name_zh": "大埔区",
    "pid": 279
  },
  {
    "id": 3510,
    "name": "NaN",
    "name_zh": "荃湾区",
    "pid": 279
  },
  {
    "id": 3511,
    "name": "NaN",
    "name_zh": "元朗区",
    "pid": 279
  },
  {
    "id": 3512,
    "name": "NaN",
    "name_zh": "花地玛堂区",
    "pid": 280
  },
  {
    "id": 3513,
    "name": "NaN",
    "name_zh": "圣安多尼堂区",
    "pid": 280
  },
  {
    "id": 3514,
    "name": "NaN",
    "name_zh": "大堂区",
    "pid": 280
  },
  {
    "id": 3515,
    "name": "NaN",
    "name_zh": "望德堂区",
    "pid": 280
  },
  {
    "id": 3516,
    "name": "NaN",
    "name_zh": "风顺堂区",
    "pid": 280
  },
  {
    "id": 3517,
    "name": "NaN",
    "name_zh": "氹仔",
    "pid": 280
  },
  {
    "id": 3518,
    "name": "NaN",
    "name_zh": "路环",
    "pid": 280
  },
  {
    "id": 3519,
    "name": "Palmerston",
    "name_zh": "北帕默斯顿",
    "pid": 281
  },
  {
    "id": 3520,
    "name": "Darwin",
    "name_zh": "达尔文",
    "pid": 281
  },
  {
    "id": 3521,
    "name": "Canberra",
    "name_zh": "堪培拉",
    "pid": 282
  },
  {
    "id": 3522,
    "name": "Brisbane",
    "name_zh": "布里斯班",
    "pid": 283
  },
  {
    "id": 3523,
    "name": "Gold Coast",
    "name_zh": "黄金海岸",
    "pid": 283
  },
  {
    "id": 3524,
    "name": "Cairns",
    "name_zh": "凯恩斯",
    "pid": 283
  },
  {
    "id": 3525,
    "name": "Caloundra",
    "name_zh": "日光海岸",
    "pid": 283
  },
  {
    "id": 3526,
    "name": "Townsville",
    "name_zh": "汤斯维尔",
    "pid": 283
  },
  {
    "id": 3527,
    "name": "Toowoomba",
    "name_zh": "图文巴",
    "pid": 283
  },
  {
    "id": 3528,
    "name": "Adelaide",
    "name_zh": "阿德莱德",
    "pid": 284
  },
  {
    "id": 3529,
    "name": "Port Augusta",
    "name_zh": "奥古斯塔港",
    "pid": 284
  },
  {
    "id": 3530,
    "name": "Mount Gambier",
    "name_zh": "甘比亚山",
    "pid": 284
  },
  {
    "id": 3531,
    "name": "Whyalla",
    "name_zh": "怀阿拉",
    "pid": 284
  },
  {
    "id": 3532,
    "name": "Port Lincoln",
    "name_zh": "林肯港",
    "pid": 284
  },
  {
    "id": 3533,
    "name": "Murray Bridge",
    "name_zh": "默里布里奇",
    "pid": 284
  },
  {
    "id": 3534,
    "name": "Port Pirie",
    "name_zh": "皮里港",
    "pid": 284
  },
  {
    "id": 3535,
    "name": "Victor Harbor",
    "name_zh": "维克托港",
    "pid": 284
  },
  {
    "id": 3536,
    "name": "Burnie",
    "name_zh": "伯尼港",
    "pid": 285
  },
  {
    "id": 3537,
    "name": "Devonport",
    "name_zh": "德文波特",
    "pid": 285
  },
  {
    "id": 3538,
    "name": "Hobart",
    "name_zh": "霍巴特",
    "pid": 285
  },
  {
    "id": 3539,
    "name": "Launceston",
    "name_zh": "朗塞斯顿",
    "pid": 285
  },
  {
    "id": 3540,
    "name": "Geelong",
    "name_zh": "吉朗",
    "pid": 286
  },
  {
    "id": 3541,
    "name": "Melbourne",
    "name_zh": "墨尔本",
    "pid": 286
  },
  {
    "id": 3542,
    "name": "Albany",
    "name_zh": "奥尔巴尼",
    "pid": 287
  },
  {
    "id": 3543,
    "name": "Bunbury",
    "name_zh": "班伯里",
    "pid": 287
  },
  {
    "id": 3544,
    "name": "Fremantle",
    "name_zh": "弗里曼特尔港",
    "pid": 287
  },
  {
    "id": 3545,
    "name": "Geraldton",
    "name_zh": "杰拉尔顿",
    "pid": 287
  },
  {
    "id": 3546,
    "name": "Kalgoorlie",
    "name_zh": "卡尔古利",
    "pid": 287
  },
  {
    "id": 3547,
    "name": "Mandurah",
    "name_zh": "曼哲拉",
    "pid": 287
  },
  {
    "id": 3548,
    "name": "Perth",
    "name_zh": "珀斯",
    "pid": 287
  },
  {
    "id": 3549,
    "name": "Newcastle",
    "name_zh": "纽卡斯尔",
    "pid": 288
  },
  {
    "id": 3550,
    "name": "Wollongong",
    "name_zh": "伍伦贡",
    "pid": 288
  },
  {
    "id": 3551,
    "name": "Sydney",
    "name_zh": "悉尼",
    "pid": 288
  },
  {
    "id": 3552,
    "name": "Dalseong-gun",
    "name_zh": "达城郡",
    "pid": 289
  },
  {
    "id": 3553,
    "name": "Daegu",
    "name_zh": "大邱",
    "pid": 289
  },
  {
    "id": 3554,
    "name": "Suseong-gu",
    "name_zh": "寿城区",
    "pid": 289
  },
  {
    "id": 3555,
    "name": "Chuncheon",
    "name_zh": "春川市",
    "pid": 294
  },
  {
    "id": 3556,
    "name": "Donghae",
    "name_zh": "东海市",
    "pid": 294
  },
  {
    "id": 3557,
    "name": "Goseong County",
    "name_zh": "高城郡",
    "pid": 294
  },
  {
    "id": 3558,
    "name": "Hoengseong County",
    "name_zh": "横城郡",
    "pid": 294
  },
  {
    "id": 3559,
    "name": "Hongcheon County",
    "name_zh": "洪川郡",
    "pid": 294
  },
  {
    "id": 3560,
    "name": "Hwacheon County",
    "name_zh": "华川郡",
    "pid": 294
  },
  {
    "id": 3561,
    "name": "Gangneung",
    "name_zh": "江陵市",
    "pid": 294
  },
  {
    "id": 3562,
    "name": "Jeongseon County",
    "name_zh": "旌善郡",
    "pid": 294
  },
  {
    "id": 3563,
    "name": "Inje County",
    "name_zh": "麟蹄郡",
    "pid": 294
  },
  {
    "id": 3564,
    "name": "Yeongwol County",
    "name_zh": "宁越郡",
    "pid": 294
  },
  {
    "id": 3565,
    "name": "Pyeongchang County",
    "name_zh": "平昌郡",
    "pid": 294
  },
  {
    "id": 3566,
    "name": "Samcheok",
    "name_zh": "三陟市",
    "pid": 294
  },
  {
    "id": 3567,
    "name": "Sokcho",
    "name_zh": "束草市",
    "pid": 294
  },
  {
    "id": 3568,
    "name": "Taebaek",
    "name_zh": "太白市",
    "pid": 294
  },
  {
    "id": 3569,
    "name": "Cheorwon County",
    "name_zh": "铁原郡",
    "pid": 294
  },
  {
    "id": 3570,
    "name": "Yangyang County",
    "name_zh": "襄阳郡",
    "pid": 294
  },
  {
    "id": 3571,
    "name": "Yanggu County",
    "name_zh": "杨口郡",
    "pid": 294
  },
  {
    "id": 3572,
    "name": "Wonju",
    "name_zh": "原州市",
    "pid": 294
  },
  {
    "id": 3573,
    "name": "Anseong",
    "name_zh": "安城市",
    "pid": 295
  },
  {
    "id": 3574,
    "name": "Ansan",
    "name_zh": "安山市",
    "pid": 295
  },
  {
    "id": 3575,
    "name": "Anyang",
    "name_zh": "安养市",
    "pid": 295
  },
  {
    "id": 3576,
    "name": "Pocheon",
    "name_zh": "抱川市",
    "pid": 295
  },
  {
    "id": 3577,
    "name": "Seongnam",
    "name_zh": "城南市",
    "pid": 295
  },
  {
    "id": 3578,
    "name": "Dongducheon",
    "name_zh": "东豆川市",
    "pid": 295
  },
  {
    "id": 3579,
    "name": "Bucheon",
    "name_zh": "富川市",
    "pid": 295
  },
  {
    "id": 3580,
    "name": "Goyang",
    "name_zh": "高阳市",
    "pid": 295
  },
  {
    "id": 3581,
    "name": "Gwangmyeong",
    "name_zh": "光明市",
    "pid": 295
  },
  {
    "id": 3582,
    "name": "Gwangju",
    "name_zh": "广州市",
    "pid": 295
  },
  {
    "id": 3583,
    "name": "Gwacheon",
    "name_zh": "果川市",
    "pid": 295
  },
  {
    "id": 3584,
    "name": "Hanam",
    "name_zh": "河南市",
    "pid": 295
  },
  {
    "id": 3585,
    "name": "Hwaseong",
    "name_zh": "华城市",
    "pid": 295
  },
  {
    "id": 3586,
    "name": "Gapyeong County",
    "name_zh": "加平郡",
    "pid": 295
  },
  {
    "id": 3587,
    "name": "Gimpo",
    "name_zh": "金浦市",
    "pid": 295
  },
  {
    "id": 3588,
    "name": "Guri",
    "name_zh": "九里市",
    "pid": 295
  },
  {
    "id": 3589,
    "name": "Gunpo",
    "name_zh": "军浦市",
    "pid": 295
  },
  {
    "id": 3590,
    "name": "Yeoju County",
    "name_zh": "骊州郡",
    "pid": 295
  },
  {
    "id": 3591,
    "name": "Icheon",
    "name_zh": "利川市",
    "pid": 295
  },
  {
    "id": 3592,
    "name": "Yeoncheon County",
    "name_zh": "涟川郡",
    "pid": 295
  },
  {
    "id": 3593,
    "name": "Yongin",
    "name_zh": "龙仁市",
    "pid": 295
  },
  {
    "id": 3594,
    "name": "Namyangju",
    "name_zh": "南杨州市",
    "pid": 295
  },
  {
    "id": 3595,
    "name": "Pyeongtaek",
    "name_zh": "平泽市",
    "pid": 295
  },
  {
    "id": 3596,
    "name": "Paju",
    "name_zh": "坡州市",
    "pid": 295
  },
  {
    "id": 3597,
    "name": "Siheung",
    "name_zh": "始兴市",
    "pid": 295
  },
  {
    "id": 3598,
    "name": "Suwon",
    "name_zh": "水原市",
    "pid": 295
  },
  {
    "id": 3599,
    "name": "Osan",
    "name_zh": "乌山市",
    "pid": 295
  },
  {
    "id": 3600,
    "name": "Yangpyeong County",
    "name_zh": "扬平郡",
    "pid": 295
  },
  {
    "id": 3601,
    "name": "Yangju",
    "name_zh": "杨州市",
    "pid": 295
  },
  {
    "id": 3602,
    "name": "Uiwang",
    "name_zh": "仪旺市",
    "pid": 295
  },
  {
    "id": 3603,
    "name": "Uijeongbu",
    "name_zh": "议政府市",
    "pid": 295
  },
  {
    "id": 3604,
    "name": "Andong",
    "name_zh": "安东市",
    "pid": 296
  },
  {
    "id": 3605,
    "name": "Bonghwa County",
    "name_zh": "奉化郡",
    "pid": 296
  },
  {
    "id": 3606,
    "name": "Goryeong County",
    "name_zh": "高灵郡",
    "pid": 296
  },
  {
    "id": 3607,
    "name": "Gumi",
    "name_zh": "龟尾市",
    "pid": 296
  },
  {
    "id": 3608,
    "name": "Gimcheon",
    "name_zh": "金泉市",
    "pid": 296
  },
  {
    "id": 3609,
    "name": "Gunwi County",
    "name_zh": "军威郡",
    "pid": 296
  },
  {
    "id": 3610,
    "name": "Yecheon County",
    "name_zh": "醴泉郡",
    "pid": 296
  },
  {
    "id": 3611,
    "name": "Pohang",
    "name_zh": "浦项市",
    "pid": 296
  },
  {
    "id": 3612,
    "name": "Chilgok County",
    "name_zh": "漆谷郡",
    "pid": 296
  },
  {
    "id": 3613,
    "name": "Cheongdo County",
    "name_zh": "淸道郡",
    "pid": 296
  },
  {
    "id": 3614,
    "name": "Cheongsong County",
    "name_zh": "靑松郡",
    "pid": 296
  },
  {
    "id": 3615,
    "name": "Gyeongsan",
    "name_zh": "庆山市",
    "pid": 296
  },
  {
    "id": 3616,
    "name": "Gyeongju",
    "name_zh": "庆州市",
    "pid": 296
  },
  {
    "id": 3617,
    "name": "Yeongju",
    "name_zh": "荣州市",
    "pid": 296
  },
  {
    "id": 3618,
    "name": "Sangju",
    "name_zh": "尙州市",
    "pid": 296
  },
  {
    "id": 3619,
    "name": "Uljin County",
    "name_zh": "蔚珍郡",
    "pid": 296
  },
  {
    "id": 3620,
    "name": "Mungyeong",
    "name_zh": "闻庆市",
    "pid": 296
  },
  {
    "id": 3621,
    "name": "Seongju County",
    "name_zh": "星州郡",
    "pid": 296
  },
  {
    "id": 3622,
    "name": "Uiseong County",
    "name_zh": "义城郡",
    "pid": 296
  },
  {
    "id": 3623,
    "name": "Yeongyang County",
    "name_zh": "英阳郡",
    "pid": 296
  },
  {
    "id": 3624,
    "name": "Yeongdeok County",
    "name_zh": "盈德郡",
    "pid": 296
  },
  {
    "id": 3625,
    "name": "Yeongcheon",
    "name_zh": "永川市",
    "pid": 296
  },
  {
    "id": 3626,
    "name": "Ulleung County",
    "name_zh": "郁陵郡",
    "pid": 296
  },
  {
    "id": 3627,
    "name": "Changnyeong County",
    "name_zh": "昌宁郡",
    "pid": 297
  },
  {
    "id": 3628,
    "name": "Changwon",
    "name_zh": "昌原市",
    "pid": 297
  },
  {
    "id": 3629,
    "name": "Goseong County",
    "name_zh": "固城郡",
    "pid": 297
  },
  {
    "id": 3630,
    "name": "Hadong County",
    "name_zh": "河东郡",
    "pid": 297
  },
  {
    "id": 3631,
    "name": "Gimhae",
    "name_zh": "金海市",
    "pid": 297
  },
  {
    "id": 3632,
    "name": "Jinju",
    "name_zh": "晋州市",
    "pid": 297
  },
  {
    "id": 3633,
    "name": "Geochang County",
    "name_zh": "居昌郡",
    "pid": 297
  },
  {
    "id": 3634,
    "name": "Geoje",
    "name_zh": "巨济市",
    "pid": 297
  },
  {
    "id": 3635,
    "name": "Yangsan",
    "name_zh": "梁山市",
    "pid": 297
  },
  {
    "id": 3636,
    "name": "Masan",
    "name_zh": "马山市",
    "pid": 297
  },
  {
    "id": 3637,
    "name": "Miryang",
    "name_zh": "密阳市",
    "pid": 297
  },
  {
    "id": 3638,
    "name": "Namhae County",
    "name_zh": "南海郡",
    "pid": 297
  },
  {
    "id": 3639,
    "name": "Sancheong County",
    "name_zh": "山淸郡",
    "pid": 297
  },
  {
    "id": 3640,
    "name": "Sacheon",
    "name_zh": "泗川市",
    "pid": 297
  },
  {
    "id": 3641,
    "name": "Tongyeong",
    "name_zh": "统营市",
    "pid": 297
  },
  {
    "id": 3642,
    "name": "Hapcheon County",
    "name_zh": "陜川郡",
    "pid": 297
  },
  {
    "id": 3643,
    "name": "Haman County",
    "name_zh": "咸安郡",
    "pid": 297
  },
  {
    "id": 3644,
    "name": "Hamyang County",
    "name_zh": "咸阳郡",
    "pid": 297
  },
  {
    "id": 3645,
    "name": "Uiryeong County",
    "name_zh": "宜宁郡",
    "pid": 297
  },
  {
    "id": 3646,
    "name": "Jinhae",
    "name_zh": "鎭海市",
    "pid": 297
  },
  {
    "id": 3647,
    "name": "Sunchang County",
    "name_zh": "淳昌郡",
    "pid": 298
  },
  {
    "id": 3648,
    "name": "Buan County",
    "name_zh": "扶安郡",
    "pid": 298
  },
  {
    "id": 3649,
    "name": "Gochang County",
    "name_zh": "高敞郡",
    "pid": 298
  },
  {
    "id": 3650,
    "name": "Gimje",
    "name_zh": "金堤市",
    "pid": 298
  },
  {
    "id": 3651,
    "name": "Jeongeup",
    "name_zh": "井邑市",
    "pid": 298
  },
  {
    "id": 3652,
    "name": "Muju County",
    "name_zh": "茂朱郡",
    "pid": 298
  },
  {
    "id": 3653,
    "name": "Namwon",
    "name_zh": "南原市",
    "pid": 298
  },
  {
    "id": 3654,
    "name": "Jeonju",
    "name_zh": "全州市",
    "pid": 298
  },
  {
    "id": 3655,
    "name": "Gunsan",
    "name_zh": "群山市",
    "pid": 298
  },
  {
    "id": 3656,
    "name": "Imsil County",
    "name_zh": "任实郡",
    "pid": 298
  },
  {
    "id": 3657,
    "name": "Wanju County",
    "name_zh": "完州郡",
    "pid": 298
  },
  {
    "id": 3658,
    "name": "Iksan",
    "name_zh": "益山市",
    "pid": 298
  },
  {
    "id": 3659,
    "name": "Jangsu County",
    "name_zh": "长水郡",
    "pid": 298
  },
  {
    "id": 3660,
    "name": "Jinan County",
    "name_zh": "鎭安郡",
    "pid": 298
  },
  {
    "id": 3661,
    "name": "Boseong County",
    "name_zh": "宝城郡",
    "pid": 299
  },
  {
    "id": 3662,
    "name": "Goheung County",
    "name_zh": "高兴郡",
    "pid": 299
  },
  {
    "id": 3663,
    "name": "Gokseong County",
    "name_zh": "谷城郡",
    "pid": 299
  },
  {
    "id": 3664,
    "name": "Wando County",
    "name_zh": "莞岛郡",
    "pid": 299
  },
  {
    "id": 3665,
    "name": "Gwangyang",
    "name_zh": "光阳市",
    "pid": 299
  },
  {
    "id": 3666,
    "name": "Haenam County",
    "name_zh": "海南郡",
    "pid": 299
  },
  {
    "id": 3667,
    "name": "Hwasun County",
    "name_zh": "和顺郡",
    "pid": 299
  },
  {
    "id": 3668,
    "name": "Gangjin County",
    "name_zh": "康津郡",
    "pid": 299
  },
  {
    "id": 3669,
    "name": "Yeosu",
    "name_zh": "丽水市",
    "pid": 299
  },
  {
    "id": 3670,
    "name": "Yeonggwang County",
    "name_zh": "灵光郡",
    "pid": 299
  },
  {
    "id": 3671,
    "name": "Yeongam County",
    "name_zh": "灵岩郡",
    "pid": 299
  },
  {
    "id": 3672,
    "name": "Naju",
    "name_zh": "罗州市",
    "pid": 299
  },
  {
    "id": 3673,
    "name": "Mokpo",
    "name_zh": "木浦市",
    "pid": 299
  },
  {
    "id": 3674,
    "name": "Gurye County",
    "name_zh": "求礼郡",
    "pid": 299
  },
  {
    "id": 3675,
    "name": "Suncheon",
    "name_zh": "顺天市",
    "pid": 299
  },
  {
    "id": 3676,
    "name": "Damyang County",
    "name_zh": "潭阳郡",
    "pid": 299
  },
  {
    "id": 3677,
    "name": "Muan County",
    "name_zh": "务安郡",
    "pid": 299
  },
  {
    "id": 3678,
    "name": "Hampyeong County",
    "name_zh": "咸平郡",
    "pid": 299
  },
  {
    "id": 3679,
    "name": "Sinan County",
    "name_zh": "新安郡",
    "pid": 299
  },
  {
    "id": 3680,
    "name": "Jangseong County",
    "name_zh": "长城郡",
    "pid": 299
  },
  {
    "id": 3681,
    "name": "Jangheung County",
    "name_zh": "长兴郡",
    "pid": 299
  },
  {
    "id": 3682,
    "name": "Jindo County",
    "name_zh": "珍岛郡",
    "pid": 299
  },
  {
    "id": 3683,
    "name": "Boeun County",
    "name_zh": "报恩郡",
    "pid": 303
  },
  {
    "id": 3684,
    "name": "Jeungpyeong County",
    "name_zh": "曾坪郡",
    "pid": 303
  },
  {
    "id": 3685,
    "name": "Danyang County",
    "name_zh": "丹阳郡",
    "pid": 303
  },
  {
    "id": 3686,
    "name": "Jecheon",
    "name_zh": "堤川市",
    "pid": 303
  },
  {
    "id": 3687,
    "name": "Goesan County",
    "name_zh": "槐山郡",
    "pid": 303
  },
  {
    "id": 3688,
    "name": "Cheongwon County",
    "name_zh": "淸原郡",
    "pid": 303
  },
  {
    "id": 3689,
    "name": "Cheongju",
    "name_zh": "淸州市",
    "pid": 303
  },
  {
    "id": 3690,
    "name": "Okcheon County",
    "name_zh": "沃川郡",
    "pid": 303
  },
  {
    "id": 3691,
    "name": "Eumseong County",
    "name_zh": "阴城郡",
    "pid": 303
  },
  {
    "id": 3692,
    "name": "Yeongdong County",
    "name_zh": "永同郡",
    "pid": 303
  },
  {
    "id": 3693,
    "name": "Jincheon County",
    "name_zh": "鎭川郡",
    "pid": 303
  },
  {
    "id": 3694,
    "name": "Chungju",
    "name_zh": "忠州市",
    "pid": 303
  },
  {
    "id": 3695,
    "name": "Boryeong",
    "name_zh": "保宁市",
    "pid": 304
  },
  {
    "id": 3696,
    "name": "Buyeo County",
    "name_zh": "扶余郡",
    "pid": 304
  },
  {
    "id": 3697,
    "name": "Gongju",
    "name_zh": "公州市",
    "pid": 304
  },
  {
    "id": 3698,
    "name": "Hongseong County",
    "name_zh": "洪城郡",
    "pid": 304
  },
  {
    "id": 3699,
    "name": "Gyeryong",
    "name_zh": "鸡龙市",
    "pid": 304
  },
  {
    "id": 3700,
    "name": "Geumsan County",
    "name_zh": "锦山郡",
    "pid": 304
  },
  {
    "id": 3701,
    "name": "Yesan County",
    "name_zh": "礼山郡",
    "pid": 304
  },
  {
    "id": 3702,
    "name": "Nonsan",
    "name_zh": "论山市",
    "pid": 304
  },
  {
    "id": 3703,
    "name": "Cheongyang County",
    "name_zh": "青阳郡",
    "pid": 304
  },
  {
    "id": 3704,
    "name": "Seosan",
    "name_zh": "瑞山市",
    "pid": 304
  },
  {
    "id": 3705,
    "name": "Seocheon County",
    "name_zh": "舒川郡",
    "pid": 304
  },
  {
    "id": 3706,
    "name": "Taean County",
    "name_zh": "泰安郡",
    "pid": 304
  },
  {
    "id": 3707,
    "name": "Dangjin County",
    "name_zh": "唐津郡",
    "pid": 304
  },
  {
    "id": 3708,
    "name": "Cheonan",
    "name_zh": "天安市",
    "pid": 304
  },
  {
    "id": 3709,
    "name": "Asan",
    "name_zh": "牙山市",
    "pid": 304
  },
  {
    "id": 3710,
    "name": "Yeongi County",
    "name_zh": "燕岐郡",
    "pid": 304
  },
  {
    "id": 3711,
    "name": "Butterworth",
    "name_zh": "北海",
    "pid": 305
  },
  {
    "id": 3712,
    "name": "George Town",
    "name_zh": "槟城",
    "pid": 305
  },
  {
    "id": 3713,
    "name": "Bukit Mertajam",
    "name_zh": "大山脚",
    "pid": 305
  },
  {
    "id": 3714,
    "name": "Nibong Tebal",
    "name_zh": "高渊",
    "pid": 305
  },
  {
    "id": 3715,
    "name": "Kangar",
    "name_zh": "加央",
    "pid": 306
  },
  {
    "id": 3716,
    "name": "Kemaman",
    "name_zh": "甘马挽",
    "pid": 307
  },
  {
    "id": 3717,
    "name": "Kuala Terengganu",
    "name_zh": "瓜拉丁加奴",
    "pid": 307
  },
  {
    "id": 3718,
    "name": "Dungun",
    "name_zh": "龙运",
    "pid": 307
  },
  {
    "id": 3719,
    "name": "Marang",
    "name_zh": "马江",
    "pid": 307
  },
  {
    "id": 3720,
    "name": "Setiu",
    "name_zh": "实兆",
    "pid": 307
  },
  {
    "id": 3721,
    "name": "Hulu",
    "name_zh": "乌鲁",
    "pid": 307
  },
  {
    "id": 3722,
    "name": "Besut",
    "name_zh": "勿述",
    "pid": 307
  },
  {
    "id": 3723,
    "name": "Padang Terap",
    "name_zh": "巴东得腊",
    "pid": 308
  },
  {
    "id": 3724,
    "name": "Pendang",
    "name_zh": "笨筒",
    "pid": 308
  },
  {
    "id": 3725,
    "name": "Langkawi",
    "name_zh": "浮罗交怡",
    "pid": 308
  },
  {
    "id": 3726,
    "name": "Kota Setar",
    "name_zh": "哥打士打",
    "pid": 308
  },
  {
    "id": 3727,
    "name": "Kubang Pasu",
    "name_zh": "古邦巴素",
    "pid": 308
  },
  {
    "id": 3728,
    "name": "Kuala Muda",
    "name_zh": "瓜拉姆达",
    "pid": 308
  },
  {
    "id": 3729,
    "name": "Baling",
    "name_zh": "华玲",
    "pid": 308
  },
  {
    "id": 3730,
    "name": "Kulim",
    "name_zh": "居林",
    "pid": 308
  },
  {
    "id": 3731,
    "name": "Bandar Baharu",
    "name_zh": "万拉峇鲁",
    "pid": 308
  },
  {
    "id": 3732,
    "name": "Pasir Putih",
    "name_zh": "巴西富地",
    "pid": 309
  },
  {
    "id": 3733,
    "name": "Pasir Mas",
    "name_zh": "巴西马",
    "pid": 309
  },
  {
    "id": 3734,
    "name": "Tanah Merah",
    "name_zh": "丹那美拉",
    "pid": 309
  },
  {
    "id": 3735,
    "name": "Tumpat",
    "name_zh": "道北",
    "pid": 309
  },
  {
    "id": 3736,
    "name": "Bachok",
    "name_zh": "登卓",
    "pid": 309
  },
  {
    "id": 3737,
    "name": "Kota Bharu",
    "name_zh": "哥打巴鲁",
    "pid": 309
  },
  {
    "id": 3738,
    "name": "Kuala Krai",
    "name_zh": "瓜拉吉赖",
    "pid": 309
  },
  {
    "id": 3739,
    "name": "Gua Musang",
    "name_zh": "话望生",
    "pid": 309
  },
  {
    "id": 3740,
    "name": "Machang",
    "name_zh": "马樟",
    "pid": 309
  },
  {
    "id": 3741,
    "name": "Jeli",
    "name_zh": "日里",
    "pid": 309
  },
  {
    "id": 3742,
    "name": "Kuala Lumpur",
    "name_zh": "吉隆坡",
    "pid": 310
  },
  {
    "id": 3743,
    "name": "Melaka",
    "name_zh": "马六甲市",
    "pid": 311
  },
  {
    "id": 3744,
    "name": "Alor Gajah",
    "name_zh": "亚罗牙也",
    "pid": 311
  },
  {
    "id": 3745,
    "name": "Jasin",
    "name_zh": "野新",
    "pid": 311
  },
  {
    "id": 3746,
    "name": "Labuan",
    "name_zh": "纳闽",
    "pid": 312
  },
  {
    "id": 3747,
    "name": "Victoria",
    "name_zh": "维多利亚",
    "pid": 312
  },
  {
    "id": 3748,
    "name": "Bera",
    "name_zh": "百乐",
    "pid": 313
  },
  {
    "id": 3749,
    "name": "Pekan",
    "name_zh": "北根",
    "pid": 313
  },
  {
    "id": 3750,
    "name": "Temerloh",
    "name_zh": "淡马鲁",
    "pid": 313
  },
  {
    "id": 3751,
    "name": "Jerantut",
    "name_zh": "而连突",
    "pid": 313
  },
  {
    "id": 3752,
    "name": "Kuantan",
    "name_zh": "关丹",
    "pid": 313
  },
  {
    "id": 3753,
    "name": "Cameron Highlands",
    "name_zh": "金马仑高原",
    "pid": 313
  },
  {
    "id": 3754,
    "name": "Raub",
    "name_zh": "劳勿",
    "pid": 313
  },
  {
    "id": 3755,
    "name": "Kuala Lipis",
    "name_zh": "立卑",
    "pid": 313
  },
  {
    "id": 3756,
    "name": "Maran",
    "name_zh": "马兰",
    "pid": 313
  },
  {
    "id": 3757,
    "name": "Bentong",
    "name_zh": "文冬",
    "pid": 313
  },
  {
    "id": 3758,
    "name": "Rompin",
    "name_zh": "云冰",
    "pid": 313
  },
  {
    "id": 3759,
    "name": "Teluk Intan",
    "name_zh": "安顺",
    "pid": 314
  },
  {
    "id": 3760,
    "name": "Tanjung Malim",
    "name_zh": "丹绒马",
    "pid": 314
  },
  {
    "id": 3761,
    "name": "Sungai Siput",
    "name_zh": "和丰",
    "pid": 314
  },
  {
    "id": 3762,
    "name": "Lumut",
    "name_zh": "紅土坎",
    "pid": 314
  },
  {
    "id": 3763,
    "name": "Batu Gajah",
    "name_zh": "华都牙也",
    "pid": 314
  },
  {
    "id": 3764,
    "name": "Kuala Kangsar",
    "name_zh": "江沙",
    "pid": 314
  },
  {
    "id": 3765,
    "name": "Taiping",
    "name_zh": "太平",
    "pid": 314
  },
  {
    "id": 3766,
    "name": "Ipoh",
    "name_zh": "怡保",
    "pid": 314
  },
  {
    "id": 3767,
    "name": "Pontian",
    "name_zh": "笨珍",
    "pid": 315
  },
  {
    "id": 3768,
    "name": "Mersing",
    "name_zh": "丰盛港",
    "pid": 315
  },
  {
    "id": 3769,
    "name": "Kota Tinggi",
    "name_zh": "哥打丁宜",
    "pid": 315
  },
  {
    "id": 3770,
    "name": "Kluang",
    "name_zh": "居銮",
    "pid": 315
  },
  {
    "id": 3771,
    "name": "Batu Pahat",
    "name_zh": "峇株巴辖",
    "pid": 315
  },
  {
    "id": 3772,
    "name": "Muar",
    "name_zh": "麻坡",
    "pid": 315
  },
  {
    "id": 3773,
    "name": "Segamat",
    "name_zh": "昔加末",
    "pid": 315
  },
  {
    "id": 3774,
    "name": "Johor Bahru",
    "name_zh": "新山",
    "pid": 315
  },
  {
    "id": 3775,
    "name": "Port Dickson",
    "name_zh": "波德申",
    "pid": 316
  },
  {
    "id": 3776,
    "name": "Tampin",
    "name_zh": "淡边",
    "pid": 316
  },
  {
    "id": 3777,
    "name": "Seremban",
    "name_zh": "芙蓉",
    "pid": 316
  },
  {
    "id": 3778,
    "name": "Kuala Pilah",
    "name_zh": "瓜拉庇劳",
    "pid": 316
  },
  {
    "id": 3779,
    "name": "Rembau",
    "name_zh": "林茂",
    "pid": 316
  },
  {
    "id": 3780,
    "name": "Jempol",
    "name_zh": "仁保",
    "pid": 316
  },
  {
    "id": 3781,
    "name": "Jelebu",
    "name_zh": "日叻务",
    "pid": 316
  },
  {
    "id": 3782,
    "name": "Papar",
    "name_zh": "吧巴",
    "pid": 317
  },
  {
    "id": 3783,
    "name": "Beaufort",
    "name_zh": "保佛",
    "pid": 317
  },
  {
    "id": 3784,
    "name": "Beluran",
    "name_zh": "比鲁兰",
    "pid": 317
  },
  {
    "id": 3785,
    "name": "Pitas",
    "name_zh": "必达士",
    "pid": 317
  },
  {
    "id": 3786,
    "name": "Penampang",
    "name_zh": "兵南邦",
    "pid": 317
  },
  {
    "id": 3787,
    "name": "Tambunan",
    "name_zh": "担布南",
    "pid": 317
  },
  {
    "id": 3788,
    "name": "Tenom",
    "name_zh": "丹南",
    "pid": 317
  },
  {
    "id": 3789,
    "name": "Tawau",
    "name_zh": "斗湖",
    "pid": 317
  },
  {
    "id": 3790,
    "name": "Tuaran",
    "name_zh": "斗亚兰",
    "pid": 317
  },
  {
    "id": 3791,
    "name": "Kota Kinabalu",
    "name_zh": "哥打基纳巴鲁",
    "pid": 317
  },
  {
    "id": 3792,
    "name": "Kota Marudu",
    "name_zh": "哥打马鲁都",
    "pid": 317
  },
  {
    "id": 3793,
    "name": "Keningau",
    "name_zh": "根地咬",
    "pid": 317
  },
  {
    "id": 3794,
    "name": "Kudat",
    "name_zh": "古达",
    "pid": 317
  },
  {
    "id": 3795,
    "name": "Kota Belud",
    "name_zh": "古打毛律",
    "pid": 317
  },
  {
    "id": 3796,
    "name": "Kunak",
    "name_zh": "古纳",
    "pid": 317
  },
  {
    "id": 3797,
    "name": "Kuala Penyu",
    "name_zh": "瓜拉班尤",
    "pid": 317
  },
  {
    "id": 3798,
    "name": "Kinabatangan",
    "name_zh": "京那巴登岸",
    "pid": 317
  },
  {
    "id": 3799,
    "name": "Ranau",
    "name_zh": "兰脑",
    "pid": 317
  },
  {
    "id": 3800,
    "name": "Lahad Datu",
    "name_zh": "拿笃",
    "pid": 317
  },
  {
    "id": 3801,
    "name": "Nabawan",
    "name_zh": "纳巴湾",
    "pid": 317
  },
  {
    "id": 3802,
    "name": "Sandakan",
    "name_zh": "山打根",
    "pid": 317
  },
  {
    "id": 3803,
    "name": "Sipitang",
    "name_zh": "西比陶",
    "pid": 317
  },
  {
    "id": 3804,
    "name": "Semporna",
    "name_zh": "仙本那",
    "pid": 317
  },
  {
    "id": 3805,
    "name": "Kuching",
    "name_zh": "古晋",
    "pid": 318
  },
  {
    "id": 3806,
    "name": "Kapit",
    "name_zh": "加帛",
    "pid": 318
  },
  {
    "id": 3807,
    "name": "Limbang",
    "name_zh": "林梦",
    "pid": 318
  },
  {
    "id": 3808,
    "name": "Miri",
    "name_zh": "美里",
    "pid": 318
  },
  {
    "id": 3809,
    "name": "Bintulu",
    "name_zh": "民都鲁",
    "pid": 318
  },
  {
    "id": 3810,
    "name": "Mukah",
    "name_zh": "木胶",
    "pid": 318
  },
  {
    "id": 3811,
    "name": "Betong",
    "name_zh": "木中",
    "pid": 318
  },
  {
    "id": 3812,
    "name": "Samarahan",
    "name_zh": "三马拉汉",
    "pid": 318
  },
  {
    "id": 3813,
    "name": "Sri Aman",
    "name_zh": "斯里阿曼",
    "pid": 318
  },
  {
    "id": 3814,
    "name": "Sarikei",
    "name_zh": "泗里街",
    "pid": 318
  },
  {
    "id": 3815,
    "name": "Sibu",
    "name_zh": "泗务",
    "pid": 318
  },
  {
    "id": 3816,
    "name": "Petaling",
    "name_zh": "八打灵",
    "pid": 319
  },
  {
    "id": 3817,
    "name": "Gombak",
    "name_zh": "鹅麦",
    "pid": 319
  },
  {
    "id": 3818,
    "name": "Kuala Langat",
    "name_zh": "瓜拉冷岳",
    "pid": 319
  },
  {
    "id": 3819,
    "name": "Kuala Selangor",
    "name_zh": "瓜拉雪兰莪",
    "pid": 319
  },
  {
    "id": 3820,
    "name": "Sabak Bernam",
    "name_zh": "沙白安南",
    "pid": 319
  },
  {
    "id": 3821,
    "name": "Hulu Langat",
    "name_zh": "乌鲁冷岳",
    "pid": 319
  },
  {
    "id": 3822,
    "name": "Hulu Selangor",
    "name_zh": "乌鲁雪兰莪",
    "pid": 319
  },
  {
    "id": 3823,
    "name": "Sepang",
    "name_zh": "雪邦",
    "pid": 319
  },
  {
    "id": 3824,
    "name": "Fayetteville",
    "name_zh": "费耶特维尔",
    "pid": 320
  },
  {
    "id": 3825,
    "name": "Fort Smith",
    "name_zh": "史密斯堡",
    "pid": 320
  },
  {
    "id": 3826,
    "name": "Little Rock",
    "name_zh": "小石城",
    "pid": 320
  },
  {
    "id": 3827,
    "name": "Birmingham",
    "name_zh": "伯明罕",
    "pid": 321
  },
  {
    "id": 3828,
    "name": "Montgomery",
    "name_zh": "蒙哥马利",
    "pid": 321
  },
  {
    "id": 3829,
    "name": "Mobile",
    "name_zh": "莫比尔",
    "pid": 321
  },
  {
    "id": 3830,
    "name": "Anchorage",
    "name_zh": "安克雷奇",
    "pid": 322
  },
  {
    "id": 3831,
    "name": "Fairbanks",
    "name_zh": "费尔班克斯",
    "pid": 322
  },
  {
    "id": 3832,
    "name": "Juneau",
    "name_zh": "朱诺",
    "pid": 322
  },
  {
    "id": 3833,
    "name": "Idaho Falls",
    "name_zh": "爱达荷福尔斯",
    "pid": 323
  },
  {
    "id": 3834,
    "name": "Pocatello",
    "name_zh": "波卡特洛",
    "pid": 323
  },
  {
    "id": 3835,
    "name": "Boise",
    "name_zh": "博伊西",
    "pid": 323
  },
  {
    "id": 3836,
    "name": "Blackfoot",
    "name_zh": "布莱克富特",
    "pid": 323
  },
  {
    "id": 3837,
    "name": "Coeur d'Alene",
    "name_zh": "科达伦",
    "pid": 323
  },
  {
    "id": 3838,
    "name": "Lewiston",
    "name_zh": "刘易斯顿",
    "pid": 323
  },
  {
    "id": 3839,
    "name": "Moscow",
    "name_zh": "莫斯科",
    "pid": 323
  },
  {
    "id": 3840,
    "name": "Murphy",
    "name_zh": "墨菲",
    "pid": 323
  },
  {
    "id": 3841,
    "name": "Nampa",
    "name_zh": "楠帕",
    "pid": 323
  },
  {
    "id": 3842,
    "name": "Ketchum",
    "name_zh": "岂彻姆",
    "pid": 323
  },
  {
    "id": 3843,
    "name": "Sun Valley",
    "name_zh": "森瓦利",
    "pid": 323
  },
  {
    "id": 3844,
    "name": "American Falls",
    "name_zh": "亚美利加瀑布城",
    "pid": 323
  },
  {
    "id": 3845,
    "name": "Davenport",
    "name_zh": "达文波特",
    "pid": 324
  },
  {
    "id": 3846,
    "name": "Des Moines",
    "name_zh": "得梅因",
    "pid": 324
  },
  {
    "id": 3847,
    "name": "Cedar Rapids",
    "name_zh": "锡达拉皮兹",
    "pid": 324
  },
  {
    "id": 3848,
    "name": "Bismarck",
    "name_zh": "俾斯麦",
    "pid": 325
  },
  {
    "id": 3849,
    "name": "Grand Forks",
    "name_zh": "大福克斯",
    "pid": 325
  },
  {
    "id": 3850,
    "name": "Fargo",
    "name_zh": "法戈",
    "pid": 325
  },
  {
    "id": 3851,
    "name": "Minot",
    "name_zh": "迈诺特",
    "pid": 325
  },
  {
    "id": 3852,
    "name": "Asheville",
    "name_zh": "艾许维尔",
    "pid": 326
  },
  {
    "id": 3853,
    "name": "Durham",
    "name_zh": "杜罕",
    "pid": 326
  },
  {
    "id": 3854,
    "name": "Greensboro",
    "name_zh": "格林斯伯勒",
    "pid": 326
  },
  {
    "id": 3855,
    "name": "Chapel Hill",
    "name_zh": "教堂山",
    "pid": 326
  },
  {
    "id": 3856,
    "name": "Raleigh",
    "name_zh": "罗利",
    "pid": 326
  },
  {
    "id": 3857,
    "name": "Raleigh-Durham",
    "name_zh": "洛利杜罕都会区",
    "pid": 326
  },
  {
    "id": 3858,
    "name": "Charlotte",
    "name_zh": "夏洛特",
    "pid": 326
  },
  {
    "id": 3859,
    "name": "Allentown",
    "name_zh": "阿伦敦",
    "pid": 327
  },
  {
    "id": 3860,
    "name": "Philadephia",
    "name_zh": "费城",
    "pid": 327
  },
  {
    "id": 3861,
    "name": "Pittsburgh",
    "name_zh": "匹兹堡",
    "pid": 327
  },
  {
    "id": 3862,
    "name": "El Paso",
    "name_zh": "埃尔帕索",
    "pid": 328
  },
  {
    "id": 3863,
    "name": "Austin",
    "name_zh": "奥斯汀",
    "pid": 328
  },
  {
    "id": 3864,
    "name": "Dallas",
    "name_zh": "达拉斯",
    "pid": 328
  },
  {
    "id": 3865,
    "name": "Corpus Christi",
    "name_zh": "哥帕斯基斯蒂",
    "pid": 328
  },
  {
    "id": 3866,
    "name": "Galveston",
    "name_zh": "交维斯顿",
    "pid": 328
  },
  {
    "id": 3867,
    "name": "Laredo",
    "name_zh": "拉雷多",
    "pid": 328
  },
  {
    "id": 3868,
    "name": "McAllen",
    "name_zh": "麦亚伦",
    "pid": 328
  },
  {
    "id": 3869,
    "name": "San Antonio",
    "name_zh": "圣安东尼奥",
    "pid": 328
  },
  {
    "id": 3870,
    "name": "Houston",
    "name_zh": "休斯敦",
    "pid": 328
  },
  {
    "id": 3871,
    "name": "Dayton",
    "name_zh": "代顿",
    "pid": 329
  },
  {
    "id": 3872,
    "name": "Columbus",
    "name_zh": "哥伦布",
    "pid": 329
  },
  {
    "id": 3873,
    "name": "Cleveland",
    "name_zh": "克利夫兰",
    "pid": 329
  },
  {
    "id": 3874,
    "name": "Toledo",
    "name_zh": "托莱多",
    "pid": 329
  },
  {
    "id": 3875,
    "name": "Cincinnati",
    "name_zh": "辛辛那提",
    "pid": 329
  },
  {
    "id": 3876,
    "name": "Oklahoma City",
    "name_zh": "俄克拉荷马城",
    "pid": 330
  },
  {
    "id": 3877,
    "name": "Norman",
    "name_zh": "诺曼",
    "pid": 330
  },
  {
    "id": 3878,
    "name": "Tulsa",
    "name_zh": "塔尔萨",
    "pid": 330
  },
  {
    "id": 3879,
    "name": "Bend",
    "name_zh": "本德",
    "pid": 331
  },
  {
    "id": 3880,
    "name": "Portland",
    "name_zh": "波特兰",
    "pid": 331
  },
  {
    "id": 3881,
    "name": "The Dalles",
    "name_zh": "达尔斯",
    "pid": 331
  },
  {
    "id": 3882,
    "name": "Dallas",
    "name_zh": "达拉斯",
    "pid": 331
  },
  {
    "id": 3883,
    "name": "Tillamook",
    "name_zh": "蒂拉穆克",
    "pid": 331
  },
  {
    "id": 3884,
    "name": "Grant's Pass",
    "name_zh": "格兰茨帕斯",
    "pid": 331
  },
  {
    "id": 3885,
    "name": "Hood River",
    "name_zh": "胡德里弗",
    "pid": 331
  },
  {
    "id": 3886,
    "name": "Crater Lake",
    "name_zh": "火山口湖",
    "pid": 331
  },
  {
    "id": 3887,
    "name": "Corvallis",
    "name_zh": "科瓦利斯",
    "pid": 331
  },
  {
    "id": 3888,
    "name": "Coos Bay",
    "name_zh": "库斯贝",
    "pid": 331
  },
  {
    "id": 3889,
    "name": "Medford",
    "name_zh": "梅德福",
    "pid": 331
  },
  {
    "id": 3890,
    "name": "Salem",
    "name_zh": "塞勒姆",
    "pid": 331
  },
  {
    "id": 3891,
    "name": "St Helens",
    "name_zh": "圣海伦斯",
    "pid": 331
  },
  {
    "id": 3892,
    "name": "Springfield",
    "name_zh": "斯普林菲尔德",
    "pid": 331
  },
  {
    "id": 3893,
    "name": "Eugene",
    "name_zh": "尤金",
    "pid": 331
  },
  {
    "id": 3894,
    "name": "Orlando",
    "name_zh": "奥兰多",
    "pid": 332
  },
  {
    "id": 3895,
    "name": "Key West",
    "name_zh": "基韦斯特",
    "pid": 332
  },
  {
    "id": 3896,
    "name": "Jacksonville",
    "name_zh": "杰克逊维尔",
    "pid": 332
  },
  {
    "id": 3897,
    "name": "Cape Canaveral",
    "name_zh": "卡纳维尔角",
    "pid": 332
  },
  {
    "id": 3898,
    "name": "Fort Lauderdale",
    "name_zh": "罗德岱堡",
    "pid": 332
  },
  {
    "id": 3899,
    "name": "Miami",
    "name_zh": "迈阿密",
    "pid": 332
  },
  {
    "id": 3900,
    "name": "St. Petersburg",
    "name_zh": "圣彼德斯堡市",
    "pid": 332
  },
  {
    "id": 3901,
    "name": "Tallahassee",
    "name_zh": "塔拉哈西",
    "pid": 332
  },
  {
    "id": 3902,
    "name": "Tampa",
    "name_zh": "坦帕",
    "pid": 332
  },
  {
    "id": 3903,
    "name": "Burlington",
    "name_zh": "伯灵顿",
    "pid": 333
  },
  {
    "id": 3904,
    "name": "Rutland",
    "name_zh": "拉特兰",
    "pid": 333
  },
  {
    "id": 3905,
    "name": "South Burlington",
    "name_zh": "南伯灵顿",
    "pid": 333
  },
  {
    "id": 3906,
    "name": "Washington D.C.",
    "name_zh": "华盛顿哥伦比亚特区",
    "pid": 334
  },
  {
    "id": 3907,
    "name": "Spokane",
    "name_zh": "斯波坎",
    "pid": 335
  },
  {
    "id": 3908,
    "name": "Tacoma",
    "name_zh": "塔科马",
    "pid": 335
  },
  {
    "id": 3909,
    "name": "Seattle",
    "name_zh": "西雅图",
    "pid": 335
  },
  {
    "id": 3910,
    "name": "Evanston",
    "name_zh": "埃文斯顿",
    "pid": 336
  },
  {
    "id": 3911,
    "name": "Casper",
    "name_zh": "卡斯珀",
    "pid": 336
  },
  {
    "id": 3912,
    "name": "Laramie",
    "name_zh": "拉勒米",
    "pid": 336
  },
  {
    "id": 3913,
    "name": "Rock Springs",
    "name_zh": "罗克斯普林斯",
    "pid": 336
  },
  {
    "id": 3914,
    "name": "Cheyenne",
    "name_zh": "夏延",
    "pid": 336
  },
  {
    "id": 3915,
    "name": "Sheridan",
    "name_zh": "谢里登",
    "pid": 336
  },
  {
    "id": 3916,
    "name": "San Francisco",
    "name_zh": "旧金山",
    "pid": 337
  },
  {
    "id": 3917,
    "name": "Los Angeles",
    "name_zh": "洛杉矶",
    "pid": 337
  },
  {
    "id": 3918,
    "name": "San Diego",
    "name_zh": "圣迭戈",
    "pid": 337
  },
  {
    "id": 3919,
    "name": "San Jose",
    "name_zh": "圣何塞",
    "pid": 337
  },
  {
    "id": 3920,
    "name": "Abilene",
    "name_zh": "阿比林",
    "pid": 338
  },
  {
    "id": 3921,
    "name": "Overland Park",
    "name_zh": "奥弗兰公园",
    "pid": 338
  },
  {
    "id": 3922,
    "name": "Hutchinson",
    "name_zh": "哈钦森",
    "pid": 338
  },
  {
    "id": 3923,
    "name": "Kansas City",
    "name_zh": "堪萨斯城",
    "pid": 338
  },
  {
    "id": 3924,
    "name": "Leavenworth",
    "name_zh": "莱文沃思",
    "pid": 338
  },
  {
    "id": 3925,
    "name": "Lawrence",
    "name_zh": "劳伦斯",
    "pid": 338
  },
  {
    "id": 3926,
    "name": "Manhattan",
    "name_zh": "曼哈顿",
    "pid": 338
  },
  {
    "id": 3927,
    "name": "Topeka",
    "name_zh": "托皮卡",
    "pid": 338
  },
  {
    "id": 3928,
    "name": "Wichita",
    "name_zh": "威奇托",
    "pid": 338
  },
  {
    "id": 3929,
    "name": "Bridgeport",
    "name_zh": "布里奇波特",
    "pid": 339
  },
  {
    "id": 3930,
    "name": "Darien",
    "name_zh": "达里恩",
    "pid": 339
  },
  {
    "id": 3931,
    "name": "Greenwich",
    "name_zh": "格林尼治",
    "pid": 339
  },
  {
    "id": 3932,
    "name": "Hartford",
    "name_zh": "哈特福德",
    "pid": 339
  },
  {
    "id": 3933,
    "name": "Middletown",
    "name_zh": "米德尔顿",
    "pid": 339
  },
  {
    "id": 3934,
    "name": "New Haven",
    "name_zh": "纽黑文",
    "pid": 339
  },
  {
    "id": 3935,
    "name": "Westport",
    "name_zh": "韦斯特波特",
    "pid": 339
  },
  {
    "id": 3936,
    "name": "Waterbury",
    "name_zh": "沃特伯里",
    "pid": 339
  },
  {
    "id": 3937,
    "name": "New Britain",
    "name_zh": "新不列颠",
    "pid": 339
  },
  {
    "id": 3938,
    "name": "Aspen",
    "name_zh": "阿斯彭",
    "pid": 340
  },
  {
    "id": 3939,
    "name": "Aurora",
    "name_zh": "奥罗拉",
    "pid": 340
  },
  {
    "id": 3940,
    "name": "Boulder",
    "name_zh": "博尔德",
    "pid": 340
  },
  {
    "id": 3941,
    "name": "Grand Junction",
    "name_zh": "大章克申",
    "pid": 340
  },
  {
    "id": 3942,
    "name": "Denver",
    "name_zh": "丹佛",
    "pid": 340
  },
  {
    "id": 3943,
    "name": "Fort Collins",
    "name_zh": "柯林斯堡",
    "pid": 340
  },
  {
    "id": 3944,
    "name": "Colorado Springs",
    "name_zh": "科罗拉多斯普林斯",
    "pid": 340
  },
  {
    "id": 3945,
    "name": "Vail",
    "name_zh": "韦尔",
    "pid": 340
  },
  {
    "id": 3946,
    "name": "Lexington",
    "name_zh": "列克星敦",
    "pid": 341
  },
  {
    "id": 3947,
    "name": "Louisville",
    "name_zh": "路易斯维尔",
    "pid": 341
  },
  {
    "id": 3948,
    "name": "Owensboro",
    "name_zh": "欧文斯伯勒",
    "pid": 341
  },
  {
    "id": 3949,
    "name": "Baton Rouge",
    "name_zh": "巴吞鲁日",
    "pid": 342
  },
  {
    "id": 3950,
    "name": "Shreveport",
    "name_zh": "什里夫波特",
    "pid": 342
  },
  {
    "id": 3951,
    "name": "New Orleans",
    "name_zh": "新奥尔良",
    "pid": 342
  },
  {
    "id": 3952,
    "name": "Pawtucket",
    "name_zh": "波塔基特",
    "pid": 343
  },
  {
    "id": 3953,
    "name": "Cranston",
    "name_zh": "克兰斯顿",
    "pid": 343
  },
  {
    "id": 3954,
    "name": "Newport",
    "name_zh": "纽波特",
    "pid": 343
  },
  {
    "id": 3955,
    "name": "Providence",
    "name_zh": "普罗维登斯",
    "pid": 343
  },
  {
    "id": 3956,
    "name": "Westerly",
    "name_zh": "韦斯特利",
    "pid": 343
  },
  {
    "id": 3957,
    "name": "Woonsocket",
    "name_zh": "文索基特",
    "pid": 343
  },
  {
    "id": 3958,
    "name": "Warwick",
    "name_zh": "沃威克",
    "pid": 343
  },
  {
    "id": 3959,
    "name": "Balitmore",
    "name_zh": "巴尔的摩",
    "pid": 344
  },
  {
    "id": 3960,
    "name": "Gaithersburg",
    "name_zh": "盖瑟斯堡",
    "pid": 344
  },
  {
    "id": 3961,
    "name": "Rockville",
    "name_zh": "罗克维尔",
    "pid": 344
  },
  {
    "id": 3962,
    "name": "Boston",
    "name_zh": "波士顿",
    "pid": 345
  },
  {
    "id": 3963,
    "name": "Springfield",
    "name_zh": "斯普林菲尔德",
    "pid": 345
  },
  {
    "id": 3964,
    "name": "Worcester",
    "name_zh": "伍斯特",
    "pid": 345
  },
  {
    "id": 3965,
    "name": "Billings",
    "name_zh": "比灵斯",
    "pid": 346
  },
  {
    "id": 3966,
    "name": "Great Falls",
    "name_zh": "大瀑布村",
    "pid": 346
  },
  {
    "id": 3967,
    "name": "Missoula",
    "name_zh": "米苏拉",
    "pid": 346
  },
  {
    "id": 3968,
    "name": "Columbia",
    "name_zh": "哥伦比亚",
    "pid": 347
  },
  {
    "id": 3969,
    "name": "Jefferson City",
    "name_zh": "杰佛逊市",
    "pid": 347
  },
  {
    "id": 3970,
    "name": "Kansas City",
    "name_zh": "堪萨斯城",
    "pid": 347
  },
  {
    "id": 3971,
    "name": "Sanit Louis",
    "name_zh": "圣路易斯",
    "pid": 347
  },
  {
    "id": 3972,
    "name": "Springfield",
    "name_zh": "斯普林菲尔德",
    "pid": 347
  },
  {
    "id": 3973,
    "name": "Biloxi",
    "name_zh": "比洛克西",
    "pid": 348
  },
  {
    "id": 3974,
    "name": "Gulfport",
    "name_zh": "格尔夫波特",
    "pid": 348
  },
  {
    "id": 3975,
    "name": "Greenville",
    "name_zh": "格林维尔",
    "pid": 348
  },
  {
    "id": 3976,
    "name": "Hattiesburg",
    "name_zh": "哈蒂斯堡",
    "pid": 348
  },
  {
    "id": 3977,
    "name": "Jackson",
    "name_zh": "杰克逊",
    "pid": 348
  },
  {
    "id": 3978,
    "name": "Meridian",
    "name_zh": "默里迪恩",
    "pid": 348
  },
  {
    "id": 3979,
    "name": "Vicksburg",
    "name_zh": "维克斯堡",
    "pid": 348
  },
  {
    "id": 3980,
    "name": "Ann Arbor",
    "name_zh": "安娜堡",
    "pid": 349
  },
  {
    "id": 3981,
    "name": "Battle Creek",
    "name_zh": "巴特尔克里克",
    "pid": 349
  },
  {
    "id": 3982,
    "name": "Bay City",
    "name_zh": "贝城",
    "pid": 349
  },
  {
    "id": 3983,
    "name": "Grand Rapids",
    "name_zh": "大急流城",
    "pid": 349
  },
  {
    "id": 3984,
    "name": "Dearborn",
    "name_zh": "迪尔伯恩",
    "pid": 349
  },
  {
    "id": 3985,
    "name": "Detroit",
    "name_zh": "底特律",
    "pid": 349
  },
  {
    "id": 3986,
    "name": "Flint",
    "name_zh": "弗林特",
    "pid": 349
  },
  {
    "id": 3987,
    "name": "Wyandotte",
    "name_zh": "怀恩多特",
    "pid": 349
  },
  {
    "id": 3988,
    "name": "Kalamazoo",
    "name_zh": "卡拉马袓",
    "pid": 349
  },
  {
    "id": 3989,
    "name": "Lansing",
    "name_zh": "兰辛",
    "pid": 349
  },
  {
    "id": 3990,
    "name": "Muskegon",
    "name_zh": "马斯基根",
    "pid": 349
  },
  {
    "id": 3991,
    "name": "Pontiac",
    "name_zh": "庞菷亚克",
    "pid": 349
  },
  {
    "id": 3992,
    "name": "Saginaw",
    "name_zh": "萨吉诺",
    "pid": 349
  },
  {
    "id": 3993,
    "name": "Sault Ste Marie",
    "name_zh": "苏圣玛丽",
    "pid": 349
  },
  {
    "id": 3994,
    "name": "Warren",
    "name_zh": "沃伦",
    "pid": 349
  },
  {
    "id": 3995,
    "name": "Port Huron",
    "name_zh": "休伦港",
    "pid": 349
  },
  {
    "id": 3996,
    "name": "Bangor",
    "name_zh": "班戈",
    "pid": 350
  },
  {
    "id": 3997,
    "name": "Portland",
    "name_zh": "波特兰",
    "pid": 350
  },
  {
    "id": 3998,
    "name": "Lewiston",
    "name_zh": "刘易斯顿",
    "pid": 350
  },
  {
    "id": 3999,
    "name": "Rochester",
    "name_zh": "罗切斯特",
    "pid": 351
  },
  {
    "id": 4000,
    "name": "Minneapolis",
    "name_zh": "明尼阿波利斯",
    "pid": 351
  },
  {
    "id": 4001,
    "name": "Saint Paul",
    "name_zh": "圣保罗",
    "pid": 351
  },
  {
    "id": 4002,
    "name": "Aberdeen",
    "name_zh": "阿伯丁",
    "pid": 352
  },
  {
    "id": 4003,
    "name": "Rapid City",
    "name_zh": "拉皮德城",
    "pid": 352
  },
  {
    "id": 4004,
    "name": "Sioux Falls",
    "name_zh": "苏福尔斯",
    "pid": 352
  },
  {
    "id": 4005,
    "name": "North Charleston",
    "name_zh": "北查尔斯顿",
    "pid": 353
  },
  {
    "id": 4006,
    "name": "Charleston",
    "name_zh": "查尔斯顿",
    "pid": 353
  },
  {
    "id": 4007,
    "name": "Columbia",
    "name_zh": "哥伦比亚",
    "pid": 353
  },
  {
    "id": 4008,
    "name": "Omaha",
    "name_zh": "奥马哈",
    "pid": 354
  },
  {
    "id": 4009,
    "name": "Bellevue",
    "name_zh": "贝尔维尤",
    "pid": 354
  },
  {
    "id": 4010,
    "name": "Lincoln",
    "name_zh": "林肯",
    "pid": 354
  },
  {
    "id": 4011,
    "name": "Elko",
    "name_zh": "埃尔科",
    "pid": 355
  },
  {
    "id": 4012,
    "name": "North Las Vegas",
    "name_zh": "北拉斯维加斯",
    "pid": 355
  },
  {
    "id": 4013,
    "name": "Virginia City",
    "name_zh": "弗吉尼亚城",
    "pid": 355
  },
  {
    "id": 4014,
    "name": "Henderson",
    "name_zh": "亨德森",
    "pid": 355
  },
  {
    "id": 4015,
    "name": "Carson City",
    "name_zh": "卡森城",
    "pid": 355
  },
  {
    "id": 4016,
    "name": "Las Vegas",
    "name_zh": "拉斯维加斯",
    "pid": 355
  },
  {
    "id": 4017,
    "name": "Reno",
    "name_zh": "里诺",
    "pid": 355
  },
  {
    "id": 4018,
    "name": "Sparks",
    "name_zh": "斯帕克斯",
    "pid": 355
  },
  {
    "id": 4019,
    "name": "Buffalo",
    "name_zh": "布法罗",
    "pid": 356
  },
  {
    "id": 4020,
    "name": "Rochester",
    "name_zh": "罗切斯特",
    "pid": 356
  },
  {
    "id": 4021,
    "name": "New York",
    "name_zh": "纽约市",
    "pid": 356
  },
  {
    "id": 4022,
    "name": "Dover",
    "name_zh": "多佛",
    "pid": 357
  },
  {
    "id": 4023,
    "name": "Newark",
    "name_zh": "纽瓦克",
    "pid": 357
  },
  {
    "id": 4024,
    "name": "Wilmington",
    "name_zh": "威明顿",
    "pid": 357
  },
  {
    "id": 4025,
    "name": "Bristol",
    "name_zh": "布利斯托",
    "pid": 358
  },
  {
    "id": 4026,
    "name": "Chattanooga",
    "name_zh": "查塔努加",
    "pid": 358
  },
  {
    "id": 4027,
    "name": "Kingsport",
    "name_zh": "金斯波特",
    "pid": 358
  },
  {
    "id": 4028,
    "name": "Memphis",
    "name_zh": "孟菲斯",
    "pid": 358
  },
  {
    "id": 4029,
    "name": "Nashville",
    "name_zh": "纳什维尔",
    "pid": 358
  },
  {
    "id": 4030,
    "name": "Knoxville",
    "name_zh": "诺克斯维尔",
    "pid": 358
  },
  {
    "id": 4031,
    "name": "Tri-City Area",
    "name_zh": "三城区",
    "pid": 358
  },
  {
    "id": 4032,
    "name": "Smyrna",
    "name_zh": "士麦那",
    "pid": 358
  },
  {
    "id": 4033,
    "name": "Spring Hill",
    "name_zh": "斯普林希尔",
    "pid": 358
  },
  {
    "id": 4034,
    "name": "Johnson City",
    "name_zh": "约翰逊城",
    "pid": 358
  },
  {
    "id": 4035,
    "name": "Appleton",
    "name_zh": "阿普尓顿",
    "pid": 359
  },
  {
    "id": 4036,
    "name": "Oshkosh",
    "name_zh": "奥什科什",
    "pid": 359
  },
  {
    "id": 4037,
    "name": "Green Bay",
    "name_zh": "格林贝",
    "pid": 359
  },
  {
    "id": 4038,
    "name": "Kenosha",
    "name_zh": "基诺沙",
    "pid": 359
  },
  {
    "id": 4039,
    "name": "LaCrosse",
    "name_zh": "拉克罗斯",
    "pid": 359
  },
  {
    "id": 4040,
    "name": "Racine",
    "name_zh": "拉辛",
    "pid": 359
  },
  {
    "id": 4041,
    "name": "Manitowoc",
    "name_zh": "马尼托沃克",
    "pid": 359
  },
  {
    "id": 4042,
    "name": "Madison",
    "name_zh": "迈迪逊",
    "pid": 359
  },
  {
    "id": 4043,
    "name": "Milwaukee",
    "name_zh": "密尔沃基",
    "pid": 359
  },
  {
    "id": 4044,
    "name": "Eau Claire",
    "name_zh": "欧克莱尓",
    "pid": 359
  },
  {
    "id": 4045,
    "name": "Wausau",
    "name_zh": "沃索",
    "pid": 359
  },
  {
    "id": 4046,
    "name": "Sheboygan",
    "name_zh": "希博伊根",
    "pid": 359
  },
  {
    "id": 4047,
    "name": "Virginia Beach",
    "name_zh": "弗吉尼亚比奇",
    "pid": 360
  },
  {
    "id": 4048,
    "name": "Norfolk",
    "name_zh": "诺福克",
    "pid": 360
  },
  {
    "id": 4049,
    "name": "Chesapeake",
    "name_zh": "切萨皮克",
    "pid": 360
  },
  {
    "id": 4050,
    "name": "Charleston",
    "name_zh": "查尔斯顿",
    "pid": 361
  },
  {
    "id": 4051,
    "name": "Huntington",
    "name_zh": "亨廷顿",
    "pid": 361
  },
  {
    "id": 4052,
    "name": "Parkersburg",
    "name_zh": "帕克斯堡",
    "pid": 361
  },
  {
    "id": 4053,
    "name": "Kailua",
    "name_zh": "凯卢阿",
    "pid": 362
  },
  {
    "id": 4054,
    "name": "Honolulu",
    "name_zh": "檀香山",
    "pid": 362
  },
  {
    "id": 4055,
    "name": "Hilo",
    "name_zh": "希洛",
    "pid": 362
  },
  {
    "id": 4056,
    "name": "Concord",
    "name_zh": "康科德",
    "pid": 363
  },
  {
    "id": 4057,
    "name": "Manchester",
    "name_zh": "曼彻斯特",
    "pid": 363
  },
  {
    "id": 4058,
    "name": "Nashua",
    "name_zh": "纳舒厄",
    "pid": 363
  },
  {
    "id": 4059,
    "name": "Albuquerque",
    "name_zh": "阿尔伯克基",
    "pid": 364
  },
  {
    "id": 4060,
    "name": "Las Cruces",
    "name_zh": "拉斯克鲁塞斯",
    "pid": 364
  },
  {
    "id": 4061,
    "name": "Roswell",
    "name_zh": "罗斯韦尔",
    "pid": 364
  },
  {
    "id": 4062,
    "name": "Santa Fe",
    "name_zh": "圣菲",
    "pid": 364
  },
  {
    "id": 4063,
    "name": "Newark",
    "name_zh": "纽瓦克",
    "pid": 365
  },
  {
    "id": 4064,
    "name": "Paterson",
    "name_zh": "帕特森",
    "pid": 365
  },
  {
    "id": 4065,
    "name": "Jersey City",
    "name_zh": "泽西城",
    "pid": 365
  },
  {
    "id": 4066,
    "name": "Phoenix",
    "name_zh": "凤凰城",
    "pid": 366
  },
  {
    "id": 4067,
    "name": "Glendale",
    "name_zh": "格兰代尔",
    "pid": 366
  },
  {
    "id": 4068,
    "name": "Mesa",
    "name_zh": "梅萨",
    "pid": 366
  },
  {
    "id": 4069,
    "name": "Scottsdale",
    "name_zh": "史卡兹代尔",
    "pid": 366
  },
  {
    "id": 4070,
    "name": "Tempe",
    "name_zh": "坦普",
    "pid": 366
  },
  {
    "id": 4071,
    "name": "Tucson",
    "name_zh": "图森",
    "pid": 366
  },
  {
    "id": 4072,
    "name": "Yuma",
    "name_zh": "优玛",
    "pid": 366
  },
  {
    "id": 4073,
    "name": "Alton",
    "name_zh": "奥尔顿",
    "pid": 367
  },
  {
    "id": 4074,
    "name": "Aurora",
    "name_zh": "奥罗拉",
    "pid": 367
  },
  {
    "id": 4075,
    "name": "Bloomington",
    "name_zh": "布卢明顿",
    "pid": 367
  },
  {
    "id": 4076,
    "name": "Danville",
    "name_zh": "丹维尓",
    "pid": 367
  },
  {
    "id": 4077,
    "name": "De Kalb",
    "name_zh": "迪卡尔布",
    "pid": 367
  },
  {
    "id": 4078,
    "name": "Decatur",
    "name_zh": "迪凯持",
    "pid": 367
  },
  {
    "id": 4079,
    "name": "East St Louis",
    "name_zh": "东圣路易斯",
    "pid": 367
  },
  {
    "id": 4080,
    "name": "Champaign-Urbana",
    "name_zh": "厄巴纳-香槟",
    "pid": 367
  },
  {
    "id": 4081,
    "name": "Galesburg",
    "name_zh": "盖尔斯堡",
    "pid": 367
  },
  {
    "id": 4082,
    "name": "Carbondale",
    "name_zh": "卡本代尔",
    "pid": 367
  },
  {
    "id": 4083,
    "name": "Rock Island",
    "name_zh": "罗克艾兰",
    "pid": 367
  },
  {
    "id": 4084,
    "name": "Rockford",
    "name_zh": "罗克福德",
    "pid": 367
  },
  {
    "id": 4085,
    "name": "Normal",
    "name_zh": "诺黙尔",
    "pid": 367
  },
  {
    "id": 4086,
    "name": "Peoria",
    "name_zh": "皮奥里亚",
    "pid": 367
  },
  {
    "id": 4087,
    "name": "Centralia",
    "name_zh": "森特勒利亚",
    "pid": 367
  },
  {
    "id": 4088,
    "name": "Springfield",
    "name_zh": "斯普林菲尔德",
    "pid": 367
  },
  {
    "id": 4089,
    "name": "Waukegan",
    "name_zh": "沃其根",
    "pid": 367
  },
  {
    "id": 4090,
    "name": "Chicago",
    "name_zh": "芝加哥",
    "pid": 367
  },
  {
    "id": 4091,
    "name": "Evansville",
    "name_zh": "埃文斯维尔",
    "pid": 368
  },
  {
    "id": 4092,
    "name": "Fort Wayne",
    "name_zh": "韦恩堡",
    "pid": 368
  },
  {
    "id": 4093,
    "name": "Indianapolis",
    "name_zh": "印第安纳波利斯",
    "pid": 368
  },
  {
    "id": 4094,
    "name": "Ogden",
    "name_zh": "奥格登",
    "pid": 369
  },
  {
    "id": 4095,
    "name": "Layton",
    "name_zh": "雷登",
    "pid": 369
  },
  {
    "id": 4096,
    "name": "Orem",
    "name_zh": "欧仁",
    "pid": 369
  },
  {
    "id": 4097,
    "name": "Park City",
    "name_zh": "帕克城",
    "pid": 369
  },
  {
    "id": 4098,
    "name": "Provo",
    "name_zh": "普罗沃",
    "pid": 369
  },
  {
    "id": 4099,
    "name": "St.George",
    "name_zh": "圣乔治",
    "pid": 369
  },
  {
    "id": 4100,
    "name": "West Valley City",
    "name_zh": "西瓦利城",
    "pid": 369
  },
  {
    "id": 4101,
    "name": "Salt Lake City",
    "name_zh": "盐湖城",
    "pid": 369
  },
  {
    "id": 4102,
    "name": "Augusta",
    "name_zh": "奥古斯塔",
    "pid": 370
  },
  {
    "id": 4103,
    "name": "Columbus",
    "name_zh": "哥伦布",
    "pid": 370
  },
  {
    "id": 4104,
    "name": "Macon",
    "name_zh": "梅肯",
    "pid": 370
  },
  {
    "id": 4105,
    "name": "Savannah",
    "name_zh": "沙瓦纳",
    "pid": 370
  },
  {
    "id": 4106,
    "name": "Atlanta",
    "name_zh": "亚特兰大",
    "pid": 370
  },
  {
    "id": 4107,
    "name": "Belfast",
    "name_zh": "贝尔法斯特",
    "pid": 371
  },
  {
    "id": 4108,
    "name": "Derry",
    "name_zh": "德里",
    "pid": 371
  },
  {
    "id": 4109,
    "name": "Lisburn",
    "name_zh": "利斯本",
    "pid": 371
  },
  {
    "id": 4110,
    "name": "Newry",
    "name_zh": "纽里",
    "pid": 371
  },
  {
    "id": 4111,
    "name": "Aberdeen",
    "name_zh": "阿伯丁",
    "pid": 372
  },
  {
    "id": 4112,
    "name": "Edinburgh",
    "name_zh": "爱丁堡",
    "pid": 372
  },
  {
    "id": 4113,
    "name": "Dundee",
    "name_zh": "丹迪",
    "pid": 372
  },
  {
    "id": 4114,
    "name": "Glasgow",
    "name_zh": "格拉斯哥",
    "pid": 372
  },
  {
    "id": 4115,
    "name": "Stirling",
    "name_zh": "斯特灵",
    "pid": 372
  },
  {
    "id": 4116,
    "name": "Inverness",
    "name_zh": "因弗内斯",
    "pid": 372
  },
  {
    "id": 4117,
    "name": "Bangor",
    "name_zh": "班戈",
    "pid": 373
  },
  {
    "id": 4118,
    "name": "Cardiff",
    "name_zh": "卡迪夫",
    "pid": 373
  },
  {
    "id": 4119,
    "name": "Newport",
    "name_zh": "纽波特",
    "pid": 373
  },
  {
    "id": 4120,
    "name": "Swansea",
    "name_zh": "斯旺西",
    "pid": 373
  },
  {
    "id": 4121,
    "name": "Exeter",
    "name_zh": "埃克塞特",
    "pid": 374
  },
  {
    "id": 4122,
    "name": "Bath",
    "name_zh": "巴斯",
    "pid": 374
  },
  {
    "id": 4123,
    "name": "Peterborough",
    "name_zh": "彼得伯勒",
    "pid": 374
  },
  {
    "id": 4124,
    "name": "Birmingham",
    "name_zh": "伯明翰",
    "pid": 374
  },
  {
    "id": 4125,
    "name": "Bradford",
    "name_zh": "布拉德福德",
    "pid": 374
  },
  {
    "id": 4126,
    "name": "Brighton & Hove",
    "name_zh": "布莱顿与赫福",
    "pid": 374
  },
  {
    "id": 4127,
    "name": "Bristol",
    "name_zh": "布里斯托尔",
    "pid": 374
  },
  {
    "id": 4128,
    "name": "Derby",
    "name_zh": "德比",
    "pid": 374
  },
  {
    "id": 4129,
    "name": "Durham",
    "name_zh": "德罕",
    "pid": 374
  },
  {
    "id": 4130,
    "name": "Gloucester",
    "name_zh": "格洛斯特",
    "pid": 374
  },
  {
    "id": 4131,
    "name": "Kingston upon Hull",
    "name_zh": "赫尔河畔京斯敦",
    "pid": 374
  },
  {
    "id": 4132,
    "name": "Hereford",
    "name_zh": "赫里福德",
    "pid": 374
  },
  {
    "id": 4133,
    "name": "Cambridge",
    "name_zh": "剑桥",
    "pid": 374
  },
  {
    "id": 4134,
    "name": "Carlisle",
    "name_zh": "卡莱尔",
    "pid": 374
  },
  {
    "id": 4135,
    "name": "Canterbury",
    "name_zh": "坎特伯雷",
    "pid": 374
  },
  {
    "id": 4136,
    "name": "Coventry",
    "name_zh": "考文垂",
    "pid": 374
  },
  {
    "id": 4137,
    "name": "Lancaster",
    "name_zh": "兰开斯特",
    "pid": 374
  },
  {
    "id": 4138,
    "name": "Ripon",
    "name_zh": "里彭",
    "pid": 374
  },
  {
    "id": 4139,
    "name": "Lichfield",
    "name_zh": "利奇菲尔德",
    "pid": 374
  },
  {
    "id": 4140,
    "name": "Liverpool",
    "name_zh": "利物浦",
    "pid": 374
  },
  {
    "id": 4141,
    "name": "Leeds",
    "name_zh": "利茲",
    "pid": 374
  },
  {
    "id": 4142,
    "name": "Leicester",
    "name_zh": "列斯特",
    "pid": 374
  },
  {
    "id": 4143,
    "name": "Lincoln",
    "name_zh": "林肯",
    "pid": 374
  },
  {
    "id": 4144,
    "name": "London",
    "name_zh": "伦敦",
    "pid": 374
  },
  {
    "id": 4145,
    "name": "Manchester",
    "name_zh": "曼彻斯特",
    "pid": 374
  },
  {
    "id": 4146,
    "name": "Southampton",
    "name_zh": "南安普敦",
    "pid": 374
  },
  {
    "id": 4147,
    "name": "Oxford",
    "name_zh": "牛津",
    "pid": 374
  },
  {
    "id": 4148,
    "name": "Newcastle",
    "name_zh": "纽卡斯尔",
    "pid": 374
  },
  {
    "id": 4149,
    "name": "Nottingham",
    "name_zh": "诺丁汉",
    "pid": 374
  },
  {
    "id": 4150,
    "name": "Norwich",
    "name_zh": "诺里奇",
    "pid": 374
  },
  {
    "id": 4151,
    "name": "Portsmouth",
    "name_zh": "朴茨茅斯",
    "pid": 374
  },
  {
    "id": 4152,
    "name": "Preston",
    "name_zh": "普雷斯顿",
    "pid": 374
  },
  {
    "id": 4153,
    "name": "Plymouth",
    "name_zh": "普利茅斯",
    "pid": 374
  },
  {
    "id": 4154,
    "name": "Chichester",
    "name_zh": "奇切斯特",
    "pid": 374
  },
  {
    "id": 4155,
    "name": "Chester",
    "name_zh": "切斯特",
    "pid": 374
  },
  {
    "id": 4156,
    "name": "Sunderland",
    "name_zh": "桑德兰",
    "pid": 374
  },
  {
    "id": 4157,
    "name": "Saint Albans",
    "name_zh": "圣阿本斯",
    "pid": 374
  },
  {
    "id": 4158,
    "name": "Salisbury",
    "name_zh": "索尔斯堡",
    "pid": 374
  },
  {
    "id": 4159,
    "name": "Salford",
    "name_zh": "索福特",
    "pid": 374
  },
  {
    "id": 4160,
    "name": "Truro",
    "name_zh": "特鲁罗",
    "pid": 374
  },
  {
    "id": 4161,
    "name": "Stoke-on-Trent",
    "name_zh": "特伦特河畔斯多克",
    "pid": 374
  },
  {
    "id": 4162,
    "name": "Wells",
    "name_zh": "威尔斯",
    "pid": 374
  },
  {
    "id": 4163,
    "name": "Wakefield",
    "name_zh": "韦克菲尔德",
    "pid": 374
  },
  {
    "id": 4164,
    "name": "Winchester",
    "name_zh": "温彻斯特",
    "pid": 374
  },
  {
    "id": 4165,
    "name": "Wolverhampton",
    "name_zh": "伍尔弗汉普顿",
    "pid": 374
  },
  {
    "id": 4166,
    "name": "Worcester",
    "name_zh": "伍斯特",
    "pid": 374
  },
  {
    "id": 4167,
    "name": "Sheffield",
    "name_zh": "谢菲尔德",
    "pid": 374
  },
  {
    "id": 4168,
    "name": "Ely",
    "name_zh": "伊利",
    "pid": 374
  },
  {
    "id": 4169,
    "name": "York",
    "name_zh": "约克",
    "pid": 374
  },
  {
    "id": 4170,
    "name": "Guwahati",
    "name_zh": "古瓦哈蒂",
    "pid": 235
  },
  {
    "id": 4172,
    "name": "Georgia",
    "name_zh": "格鲁吉亚",
    "pid": 2
  },
  {
    "id": 4173,
    "name": "Adzhar Autonomous Respublic",
    "name_zh": "阿扎尔自治共和国",
    "pid": 4172
  },
  {
    "id": 4174,
    "name": "Abkhaz Autonomous Respublic",
    "name_zh": "阿布哈兹自治共和国",
    "pid": 4172
  },
  {
    "id": 4175,
    "name": "Samegrelo-Zemo Svaneti",
    "name_zh": "萨梅格列罗-上斯瓦涅季亚州",
    "pid": 4172
  },
  {
    "id": 4176,
    "name": "Guria",
    "name_zh": "古利亚州",
    "pid": 4172
  },
  {
    "id": 4177,
    "name": "Racha-Lekkhumi-Svaneti",
    "name_zh": "拉恰-列其呼米-下斯瓦涅季亚州",
    "pid": 4172
  },
  {
    "id": 4178,
    "name": "Imereti",
    "name_zh": "伊梅列季州",
    "pid": 4172
  },
  {
    "id": 4179,
    "name": "Samtskhe-Javakheti",
    "name_zh": "萨姆茨赫-扎瓦赫季州",
    "pid": 4172
  },
  {
    "id": 4180,
    "name": "Shida Kartli",
    "name_zh": "什达-卡特利州",
    "pid": 4172
  },
  {
    "id": 4181,
    "name": "Mtskheta-Mtianeti",
    "name_zh": "姆茨赫塔-姆季阿涅季州",
    "pid": 4172
  },
  {
    "id": 4182,
    "name": "Kvemo Kartli",
    "name_zh": "克维莫-卡特利州",
    "pid": 4172
  },
  {
    "id": 4183,
    "name": "Tbilisi",
    "name_zh": "卡赫季州",
    "pid": 4172
  },
  {
    "id": 4184,
    "name": "Kinshasa",
    "name_zh": "金沙萨",
    "pid": 76
  },
  {
    "id": 4185,
    "name": "Kongo central",
    "name_zh": "中刚果省",
    "pid": 76
  },
  {
    "id": 4186,
    "name": "Kwango",
    "name_zh": "宽果省",
    "pid": 76
  },
  {
    "id": 4187,
    "name": "Kwilu",
    "name_zh": "奎卢省",
    "pid": 76
  },
  {
    "id": 4188,
    "name": "Mai-Ndombe",
    "name_zh": "马伊恩东贝省",
    "pid": 76
  },
  {
    "id": 4189,
    "name": "Kasai",
    "name_zh": "开赛省",
    "pid": 76
  },
  {
    "id": 4190,
    "name": "la Lulua",
    "name_zh": "卢卢阿省",
    "pid": 76
  },
  {
    "id": 4191,
    "name": "Kasa oriental",
    "name_zh": "东开赛省",
    "pid": 76
  },
  {
    "id": 4192,
    "name": "Lomami",
    "name_zh": "洛马米省",
    "pid": 76
  },
  {
    "id": 4193,
    "name": "Province de Sankuru",
    "name_zh": "桑库鲁省",
    "pid": 76
  },
  {
    "id": 4194,
    "name": "Maniema",
    "name_zh": "马涅马省",
    "pid": 76
  },
  {
    "id": 4195,
    "name": "Sud Kivu",
    "name_zh": "南基伍省",
    "pid": 76
  },
  {
    "id": 4196,
    "name": "Nord Kivu",
    "name_zh": "北基伍省",
    "pid": 76
  },
  {
    "id": 4197,
    "name": "Ituri",
    "name_zh": "伊图利省",
    "pid": 76
  },
  {
    "id": 4198,
    "name": "Haut-Uele",
    "name_zh": "上韦莱省",
    "pid": 76
  },
  {
    "id": 4199,
    "name": "Bas-Uele",
    "name_zh": "下韦莱省",
    "pid": 76
  },
  {
    "id": 4200,
    "name": "Tshopo",
    "name_zh": "乔波省",
    "pid": 76
  },
  {
    "id": 4201,
    "name": "Nord Ubangi",
    "name_zh": "北乌班吉省",
    "pid": 76
  },
  {
    "id": 4202,
    "name": "la Mongala",
    "name_zh": "蒙加拉省",
    "pid": 76
  },
  {
    "id": 4203,
    "name": "Sud Ubangi",
    "name_zh": "南乌班吉省",
    "pid": 76
  },
  {
    "id": 4204,
    "name": "Equateur",
    "name_zh": "赤道省",
    "pid": 76
  },
  {
    "id": 4205,
    "name": "la Tshuapa",
    "name_zh": "楚阿帕省",
    "pid": 76
  },
  {
    "id": 4206,
    "name": "Tanganyika",
    "name_zh": "坦噶尼喀省",
    "pid": 76
  },
  {
    "id": 4207,
    "name": "Haut-Lomami",
    "name_zh": "上洛马米省",
    "pid": 76
  },
  {
    "id": 4208,
    "name": "la Lualaba",
    "name_zh": "卢阿拉巴省",
    "pid": 76
  },
  {
    "id": 4209,
    "name": "Haut Katanga",
    "name_zh": "上加丹加省",
    "pid": 76
  },
  {
    "id": 4210,
    "name": "Bouenza",
    "name_zh": "布恩扎省",
    "pid": 77
  },
  {
    "id": 4211,
    "name": "Brazzaville",
    "name_zh": "布拉柴维尔省",
    "pid": 77
  },
  {
    "id": 4212,
    "name": "Cuvette",
    "name_zh": "盆地省",
    "pid": 77
  },
  {
    "id": 4213,
    "name": "Cuvette Ouest",
    "name_zh": "西盆地省",
    "pid": 77
  },
  {
    "id": 4214,
    "name": "Kouilou",
    "name_zh": "奎卢省",
    "pid": 77
  },
  {
    "id": 4215,
    "name": "Lekoumou",
    "name_zh": "莱库穆省",
    "pid": 77
  },
  {
    "id": 4216,
    "name": "Likouala",
    "name_zh": "利夸拉省",
    "pid": 77
  },
  {
    "id": 4217,
    "name": "Niari",
    "name_zh": "尼阿里省",
    "pid": 77
  },
  {
    "id": 4218,
    "name": "Plateaux",
    "name_zh": "高原省",
    "pid": 77
  },
  {
    "id": 4219,
    "name": "Pointe-Noire",
    "name_zh": "黑角市省",
    "pid": 77
  },
  {
    "id": 4220,
    "name": "Pool",
    "name_zh": "普尔省",
    "pid": 77
  },
  {
    "id": 4221,
    "name": "Sangha",
    "name_zh": "桑加省",
    "pid": 77
  },
  {
    "id": 4222,
    "name": "Brunei-Muara",
    "name_zh": "文莱－穆阿拉县",
    "pid": 216
  },
  {
    "id": 4223,
    "name": "Belait",
    "name_zh": "马来奕县",
    "pid": 216
  },
  {
    "id": 4224,
    "name": "Tutong",
    "name_zh": "都东县",
    "pid": 216
  },
  {
    "id": 4225,
    "name": "Temburong",
    "name_zh": "淡布隆县",
    "pid": 216
  },
  {
    "id": 4226,
    "name": "baghdad",
    "name_zh": "巴格达省",
    "pid": 231
  },
  {
    "id": 4227,
    "name": "neineva",
    "name_zh": "尼尼微省",
    "pid": 231
  },
  {
    "id": 4228,
    "name": "anbar",
    "name_zh": "安巴尔省",
    "pid": 231
  },
  {
    "id": 4229,
    "name": "arbil",
    "name_zh": "埃尔比勒省",
    "pid": 231
  },
  {
    "id": 4230,
    "name": "babil",
    "name_zh": "巴比伦省",
    "pid": 231
  },
  {
    "id": 4231,
    "name": "muthanna",
    "name_zh": "穆萨纳省",
    "pid": 231
  },
  {
    "id": 4232,
    "name": "najaf",
    "name_zh": "纳贾夫省",
    "pid": 231
  },
  {
    "id": 4233,
    "name": "basra",
    "name_zh": "巴士拉省",
    "pid": 231
  },
  {
    "id": 4234,
    "name": "dhiqar",
    "name_zh": "济卡尔省",
    "pid": 231
  },
  {
    "id": 4235,
    "name": "qadisiya",
    "name_zh": "卡迪西亚省",
    "pid": 231
  },
  {
    "id": 4236,
    "name": "diyala",
    "name_zh": "迪亚拉省",
    "pid": 231
  },
  {
    "id": 4237,
    "name": "salahuddin",
    "name_zh": "萨拉赫丁省",
    "pid": 231
  },
  {
    "id": 4238,
    "name": "dohuk",
    "name_zh": "杜胡克省",
    "pid": 231
  },
  {
    "id": 4239,
    "name": "sulaymaniya",
    "name_zh": "苏莱曼尼亚省",
    "pid": 231
  },
  {
    "id": 4240,
    "name": "karbala",
    "name_zh": "卡尔巴拉省",
    "pid": 231
  },
  {
    "id": 4241,
    "name": "tameem",
    "name_zh": "塔米姆省",
    "pid": 231
  },
  {
    "id": 4242,
    "name": "misan",
    "name_zh": "米桑省",
    "pid": 231
  },
  {
    "id": 4243,
    "name": "wasit",
    "name_zh": "瓦西特省",
    "pid": 231
  },
  {
    "id": 4244,
    "name": "Halabja",
    "name_zh": "哈莱卜杰省",
    "pid": 231
  },
  {
    "id": 4245,
    "name": "Central Singapore",
    "name_zh": "中区社区",
    "pid": 223
  },
  {
    "id": 4246,
    "name": "North East",
    "name_zh": "东北社区",
    "pid": 223
  },
  {
    "id": 4247,
    "name": "North West",
    "name_zh": "西北社区",
    "pid": 223
  },
  {
    "id": 4248,
    "name": "South East",
    "name_zh": "东南社区",
    "pid": 223
  },
  {
    "id": 4249,
    "name": "South West",
    "name_zh": "西南社区",
    "pid": 223
  },
  {
    "id": 4250,
    "name": "Jahra",
    "name_zh": "杰赫拉省",
    "pid": 111
  },
  {
    "id": 4251,
    "name": "Asimah",
    "name_zh": "科威特省",
    "pid": 111
  },
  {
    "id": 4252,
    "name": "Farwaniya",
    "name_zh": "费尔瓦尼耶省",
    "pid": 111
  },
  {
    "id": 4253,
    "name": "Hawalli",
    "name_zh": "哈瓦利省",
    "pid": 111
  },
  {
    "id": 4254,
    "name": "Mubarak Al-Kabeer",
    "name_zh": "大穆巴拉克省",
    "pid": 111
  },
  {
    "id": 4255,
    "name": "Ahmadi",
    "name_zh": "艾哈迈迪省",
    "pid": 111
  },
  {
    "id": 4256,
    "name": "Central",
    "name_zh": "中央区",
    "pid": 204
  },
  {
    "id": 4257,
    "name": "Ghanzi",
    "name_zh": "杭济区",
    "pid": 204
  },
  {
    "id": 4258,
    "name": "Kgalagadi",
    "name_zh": "卡拉哈迪区",
    "pid": 204
  },
  {
    "id": 4259,
    "name": "Kgatleng",
    "name_zh": "卡特伦区",
    "pid": 204
  },
  {
    "id": 4260,
    "name": "Kweneng",
    "name_zh": "奎嫩区",
    "pid": 204
  },
  {
    "id": 4261,
    "name": "North-East",
    "name_zh": "东北区",
    "pid": 204
  },
  {
    "id": 4262,
    "name": "North-West",
    "name_zh": "西北区",
    "pid": 204
  },
  {
    "id": 4263,
    "name": "Chobe",
    "name_zh": "乔贝区",
    "pid": 204
  },
  {
    "id": 4264,
    "name": "South-East",
    "name_zh": "东南区",
    "pid": 204
  },
  {
    "id": 4265,
    "name": "Southern",
    "name_zh": "南部区",
    "pid": 204
  },
  {
    "id": 4266,
    "name": "Batha",
    "name_zh": "巴塔区",
    "pid": 243
  },
  {
    "id": 4267,
    "name": "Chari-Baguirmi",
    "name_zh": "沙里-巴吉尔米区",
    "pid": 243
  },
  {
    "id": 4268,
    "name": "Hadjer-Lamis",
    "name_zh": "哈杰尔-拉密区",
    "pid": 243
  },
  {
    "id": 4269,
    "name": "Wadi Fira",
    "name_zh": "瓦迪菲拉区",
    "pid": 243
  },
  {
    "id": 4270,
    "name": "Barh El Gazel",
    "name_zh": "加扎勒河区",
    "pid": 243
  },
  {
    "id": 4271,
    "name": "Borkou",
    "name_zh": "博尔库区",
    "pid": 243
  },
  {
    "id": 4272,
    "name": "Ennedi",
    "name_zh": "恩内迪区",
    "pid": 243
  },
  {
    "id": 4273,
    "name": "Guera",
    "name_zh": "盖拉区",
    "pid": 243
  },
  {
    "id": 4274,
    "name": "Kanem",
    "name_zh": "加奈姆区",
    "pid": 243
  },
  {
    "id": 4275,
    "name": "Lac",
    "name_zh": "湖区",
    "pid": 243
  },
  {
    "id": 4276,
    "name": "Logone Occidental",
    "name_zh": "西洛贡区",
    "pid": 243
  },
  {
    "id": 4277,
    "name": "Logone Oriental",
    "name_zh": "东洛贡区",
    "pid": 243
  },
  {
    "id": 4278,
    "name": "Mandoul",
    "name_zh": "芒杜尔区",
    "pid": 243
  },
  {
    "id": 4279,
    "name": "Mayo-Kebbi East",
    "name_zh": "东凯比河区",
    "pid": 243
  },
  {
    "id": 4280,
    "name": "Mayo-Kebbi West",
    "name_zh": "西凯比河区",
    "pid": 243
  },
  {
    "id": 4281,
    "name": "Moyen-Chari",
    "name_zh": "中沙里区",
    "pid": 243
  },
  {
    "id": 4282,
    "name": "Ouaddai",
    "name_zh": "瓦达伊区",
    "pid": 243
  },
  {
    "id": 4283,
    "name": "Salamat",
    "name_zh": "萨拉马特区",
    "pid": 243
  },
  {
    "id": 4284,
    "name": "Tandjile",
    "name_zh": "坦吉莱区",
    "pid": 243
  },
  {
    "id": 4285,
    "name": "Sila",
    "name_zh": "西拉区",
    "pid": 243
  },
  {
    "id": 4286,
    "name": "Tibesti",
    "name_zh": "提贝斯提区",
    "pid": 243
  },
  {
    "id": 4287,
    "name": "NDjamena",
    "name_zh": "恩贾梅纳",
    "pid": 243
  },
  {
    "id": 4288,
    "name": "Nuqat al Khams",
    "name_zh": "努加特海姆斯省",
    "pid": 120
  },
  {
    "id": 4289,
    "name": "Zawiya",
    "name_zh": "扎维耶省",
    "pid": 120
  },
  {
    "id": 4290,
    "name": "Jafara",
    "name_zh": "吉法拉省",
    "pid": 120
  },
  {
    "id": 4291,
    "name": "Tripoli",
    "name_zh": "的黎波里",
    "pid": 120
  },
  {
    "id": 4292,
    "name": "Murgub",
    "name_zh": "迈尔盖卜省",
    "pid": 120
  },
  {
    "id": 4293,
    "name": "Misrata",
    "name_zh": "米苏拉塔省",
    "pid": 120
  },
  {
    "id": 4294,
    "name": "Sirte",
    "name_zh": "苏尔特省",
    "pid": 120
  },
  {
    "id": 4295,
    "name": "Benghazi",
    "name_zh": "班加西",
    "pid": 120
  },
  {
    "id": 4296,
    "name": "Marj",
    "name_zh": "迈尔季省",
    "pid": 120
  },
  {
    "id": 4297,
    "name": "Jabal al Akhdar",
    "name_zh": "绿山省",
    "pid": 120
  },
  {
    "id": 4298,
    "name": "Derna",
    "name_zh": "德尔纳省",
    "pid": 120
  },
  {
    "id": 4299,
    "name": "Tobruk",
    "name_zh": "布特南省",
    "pid": 120
  },
  {
    "id": 4300,
    "name": "Nalut",
    "name_zh": "纳卢特省",
    "pid": 120
  },
  {
    "id": 4301,
    "name": "Jabal al Gharbi",
    "name_zh": "西山省",
    "pid": 120
  },
  {
    "id": 4302,
    "name": "Wadi al Shatii",
    "name_zh": "沙提省",
    "pid": 120
  },
  {
    "id": 4303,
    "name": "Jufra",
    "name_zh": "胡夫拉省",
    "pid": 120
  },
  {
    "id": 4304,
    "name": "Al Wahat",
    "name_zh": "绿洲省",
    "pid": 120
  },
  {
    "id": 4305,
    "name": "Ghat",
    "name_zh": "加特省",
    "pid": 120
  },
  {
    "id": 4306,
    "name": "Wadi al Hayaa",
    "name_zh": "瓦迪哈耶特省",
    "pid": 120
  },
  {
    "id": 4307,
    "name": "Sabha",
    "name_zh": "塞卜哈省",
    "pid": 120
  },
  {
    "id": 4308,
    "name": "Murzuq",
    "name_zh": "穆尔祖格省",
    "pid": 120
  },
  {
    "id": 4309,
    "name": "Kufra",
    "name_zh": "库夫拉省",
    "pid": 120
  },
  {
    "id": 4310,
    "name": "Anenii Noi",
    "name_zh": "新阿内尼区",
    "pid": 149
  },
  {
    "id": 4311,
    "name": "Basarabeasca",
    "name_zh": "巴萨拉贝亚斯卡区",
    "pid": 149
  },
  {
    "id": 4312,
    "name": "Briceni",
    "name_zh": "布里恰内区",
    "pid": 149
  },
  {
    "id": 4313,
    "name": "Cahul",
    "name_zh": "卡古尔区",
    "pid": 149
  },
  {
    "id": 4314,
    "name": "Cantemir",
    "name_zh": "冈代米尔区",
    "pid": 149
  },
  {
    "id": 4315,
    "name": "Calarasi",
    "name_zh": "卡拉拉什区",
    "pid": 149
  },
  {
    "id": 4316,
    "name": "Causeni",
    "name_zh": "考沙内区",
    "pid": 149
  },
  {
    "id": 4317,
    "name": "Cimislia",
    "name_zh": "奇米什利亚区",
    "pid": 149
  },
  {
    "id": 4318,
    "name": "Criuleni",
    "name_zh": "克留莱尼区",
    "pid": 149
  },
  {
    "id": 4319,
    "name": "Donduseni",
    "name_zh": "楝久沙内区",
    "pid": 149
  },
  {
    "id": 4320,
    "name": "Drochia",
    "name_zh": "德罗基亚区",
    "pid": 149
  },
  {
    "id": 4321,
    "name": "Dubasari",
    "name_zh": "杜博萨雷区",
    "pid": 149
  },
  {
    "id": 4322,
    "name": "Edinet",
    "name_zh": "叶金齐区",
    "pid": 149
  },
  {
    "id": 4323,
    "name": "Falesti",
    "name_zh": "弗莱什蒂区",
    "pid": 149
  },
  {
    "id": 4324,
    "name": "Floresti",
    "name_zh": "弗洛雷什蒂区",
    "pid": 149
  },
  {
    "id": 4325,
    "name": "Glodeni",
    "name_zh": "格洛代尼区",
    "pid": 149
  },
  {
    "id": 4326,
    "name": "Hincesti",
    "name_zh": "亨切什蒂区",
    "pid": 149
  },
  {
    "id": 4327,
    "name": "Ialoveni",
    "name_zh": "亚洛韦尼区",
    "pid": 149
  },
  {
    "id": 4328,
    "name": "Leova",
    "name_zh": "莱奥瓦区",
    "pid": 149
  },
  {
    "id": 4329,
    "name": "Nisporeni",
    "name_zh": "尼斯波列内区",
    "pid": 149
  },
  {
    "id": 4330,
    "name": "Ocnita",
    "name_zh": "奥克尼察区",
    "pid": 149
  },
  {
    "id": 4331,
    "name": "Orhei",
    "name_zh": "奥尔海伊区",
    "pid": 149
  },
  {
    "id": 4332,
    "name": "Rezina",
    "name_zh": "雷济纳区",
    "pid": 149
  },
  {
    "id": 4333,
    "name": "Riscani",
    "name_zh": "雷什卡内区",
    "pid": 149
  },
  {
    "id": 4334,
    "name": "Singerei",
    "name_zh": "森杰雷区",
    "pid": 149
  },
  {
    "id": 4335,
    "name": "Soroca",
    "name_zh": "索罗卡区",
    "pid": 149
  },
  {
    "id": 4336,
    "name": "Straseni",
    "name_zh": "斯特勒谢尼区",
    "pid": 149
  },
  {
    "id": 4337,
    "name": "Soldanesti",
    "name_zh": "绍尔德内什蒂区",
    "pid": 149
  },
  {
    "id": 4338,
    "name": "Stefan Voda",
    "name_zh": "斯特凡大公区",
    "pid": 149
  },
  {
    "id": 4339,
    "name": "Taraclia",
    "name_zh": "塔拉克利亚区",
    "pid": 149
  },
  {
    "id": 4340,
    "name": "Telenesti",
    "name_zh": "泰莱内什蒂区",
    "pid": 149
  },
  {
    "id": 4341,
    "name": "Ungheni",
    "name_zh": "温格内区",
    "pid": 149
  },
  {
    "id": 4342,
    "name": "Chisinau",
    "name_zh": "基希讷乌市",
    "pid": 149
  },
  {
    "id": 4343,
    "name": "Balti",
    "name_zh": "伯尔兹市",
    "pid": 149
  },
  {
    "id": 4344,
    "name": "Bender",
    "name_zh": "本德尔市",
    "pid": 149
  },
  {
    "id": 4345,
    "name": "Gagauzia",
    "name_zh": "加告兹自治区",
    "pid": 149
  },
  {
    "id": 4346,
    "name": "Transnistria",
    "name_zh": "德涅斯特河自治区",
    "pid": 149
  },
  {
    "id": 4347,
    "name": "Iceland",
    "name_zh": "冰岛",
    "pid": 43
  },
  {
    "id": 4348,
    "name": "Macedonia",
    "name_zh": "马其顿",
    "pid": 133
  },
  {
    "id": 4349,
    "name": "Panama",
    "name_zh": "巴拿马",
    "pid": 35
  },
  {
    "id": 4350,
    "name": "Trinidad and Tobago",
    "name_zh": "特立尼达和多巴哥",
    "pid": 204
  }
      ]
