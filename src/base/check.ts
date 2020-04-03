/**
 * 火车车次验证规则
 * @param value 指定验证的字符串
 */
const isTrainNumber = (value: string) => /^[GCDZTSPKXLY1-9]\d{1,4}$/gi.test(value);

/**
 * 手机IMIE验证规则
 * @param value 指定验证的字符串
 */
const isIMEI = (value: string) => /^\d{15,17}$/gi.test(value);

/**
 * 带有端口号的https地址的规则
 * @param value 指定验证的字符串
 */
const isHttpsWithPort = (value: string) => /^((ht|f)tps?:\/\/)?[\w-]+(\.[\w-]+)+:\d{1,5}\/?$/gi.test(value);

/**
 * 网址(支持端口和"?+参数"和"#+参数)
 * @param value 指定验证的字符串
 */
const isWebUrl = (value: string) => {
  return /^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/gi.test(value);
};

/**
 * 验证统一社会信用代码
 * @param value 指定验证的字符串
 */
const isCrediteCode = (value: string) => /^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/gi.test(value);

/**
 * 验证迅雷下载链接
 * @param value 指定验证的字符串
 */
const isThunderLink = (value: string) => /^thunderx?:\/\/[a-zA-Z\d]+=$/gi.test(value);

/**
 * 验证ed2k链接(宽松匹配)
 * @param value 指定验证的字符串
 */
const isEd2kLink = (value: string) => /^ed2k:\/\/\|file\|.+\|\/$/gi.test(value);

/**
 * 验证磁力链接(宽松匹配)
 * @param value 指定验证的字符串
 */
const isMagnetLink = (value: string) => /^magnet:\?xt=urn:btih:[0-9a-fA-F]{40,}.*$/gi.test(value);

/**
 * 验证子网掩码
 * @param value 指定验证的字符串
 */
const isSubnetMask = (value: string) => {
  return /^(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])(?:\.(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){3}$/gi.test(value);
};

/**
 * 验证类Unix"文件夹"路径
 * @param value 指定验证的字符串
 */
const isUnixFolderPath = (value: string) => /^(\/[^/]+)+\/?$/gi.test(value);

/**
 * 验证类Unix"文件"路径
 * @param value 指定验证的字符串
 */
const isUnixFilePath = (value: string) => /^(\/[^/]+)+$/gi.test(value);

/**
 * 验证Windows"文件夹"路径
 * @param value 指定验证的字符串
 */
const isWindowsFolderPath = (value: string) => /^[a-zA-Z]:\\(?:\w+\\?)*$/gi.test(value);

/**
 * 验证Windows"文件"路径
 * @param value 指定验证的字符串
 */
const isWindowsFilePath = (value: string) => /^[a-zA-Z]:\\(?:\w+\\)*\w+\.\w+$/gi.test(value);

/**
 * 验证股票代码(A股)
 * @param value 指定验证的字符串
 */
const isAStockCode = (value: string) => {
  return /^(s[hz]|S[HZ])(000[\d]{3}|002[\d]{3}|300[\d]{3}|600[\d]{3}|60[\d]{4})$/gi.test(value);
}

/**
 * 验证大于等于0, 小于等于150, 支持小数位出现5, 如145.5, 用于判断考卷分数
 * @param value 指定验证的字符串
 */
const isGrade = (value: string) => /^150$|^(?:\d|[1-9]\d|1[0-4]\d)(?:.5)?$/gi.test(value);

/**
 * 验证HTML注释
 * @param value 指定验证的字符串
 */
const isHtmlComments = (value: string) => /<!--[\s\S]*?-->/gi.test(value);

/**
 * 验证md5格式(32位)
 * @param value 指定验证的字符串
 */
const isMD5 = (value: string) => /^([a-f\d]{32}|[A-F\d]{32})$/gi.test(value);

/**
 * 验证版本号格式必须为X.Y.Z
 * @param value 指定验证的字符串
 */
const isVersion = (value: string) => /^\d+(?:\.\d+){2}$/gi.test(value);

/**
 * 验证视频链接地址（视频格式可按需增删）
 * @param value 指定验证的字符串
 */
const isVideoUrl = (value: string) => {
  return /^https?:\/\/(.+\/)+.+(\.(swf|avi|flv|mpg|rm|mov|wav|asf|3gp|mkv|rmvb|mp4))$/i.test(value);
};

/**
 * 验证图片链接地址（图片格式可按需增删）
 * @param value 指定验证的字符串
 */
const isImageUrl = (value: string) => {
  return /^https?:\/\/(.+\/)+.+(\.(gif|png|jpg|jpeg|webp|svg|psd|bmp|tif))$/i.test(value);
};

/**
 * 验证24小时制时间（HH:mm:ss）
 * @param value 指定验证的字符串
 */
const is24Hour = (value: string) => /^(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d$/g.test(value);

/**
 * 验证12小时制时间（hh:mm:ss）
 * @param value 指定验证的字符串
 */
const is12Hour = (value: string) => /^(?:1[0-2]|0?[1-9]):[0-5]\d:[0-5]\d$/g.test(value);

/**
 * 验证base64格式
 * @param value 指定验证的字符串
 */
const isBase64 = (value: string) => {
  return /^\s*data:(?:[a-z]+\/[a-z0-9-+.]+(?:;[a-z-]+=[a-z0-9-]+)?)?(?:;base64)?,([a-z0-9!$&',()*+;=\-._~:@/?%\s]*?)\s*$/i.test(value);
};

/**
 * 验证数字/货币金额（支持负数、千分位分隔符)
 * @param value 指定验证的字符串
 */
const isMoneyAll = (value: string) => /^-?\d+(,\d{3})*(\.\d{1,2})?$/g.test(value);

/**
 * 验证数字/货币金额 (只支持正数、不支持校验千分位分隔符)
 * @param value 指定验证的字符串
 */
const isMoney = (value: string) => {
  return /(?:^[1-9]([0-9]+)?(?:\.[0-9]{1,2})?$)|(?:^(?:0){1}$)|(?:^[0-9]\.[0-9](?:[0-9])?$)/g.test(value);
};

/**
 * 验证银行卡号（10到30位, 覆盖对公/私账户, 参考微信支付)
 * @param value 指定验证的字符串
 */
const isBankAccount = (value: string) => /^[1-9]\d{9,29}$/g.test(value);

/**
 * 验证中文姓名
 * @param value 指定验证的字符串
 */
const isChineseName = (value: string) => /^(?:[\u4e00-\u9fa5·]{2,16})$/gu.test(value);

/**
 * 验证英文姓名
 * @param value 指定验证的字符串
 */
const isEnglishName = (value: string) => /(^[a-z]{1}[a-z\s]{0,20}[a-z]{1}$)/gi.test(value);


export {
  isTrainNumber,
  isIMEI,
  isHttpsWithPort,
  isWebUrl,
  isCrediteCode,
  isThunderLink,
  isEd2kLink,
  isMagnetLink,
  isSubnetMask,
  isUnixFolderPath,
  isUnixFilePath,
  isWindowsFolderPath,
  isWindowsFilePath,
  isAStockCode,
  isGrade,
  isHtmlComments,
  isMD5,
  isVersion,
  isVideoUrl,
  isImageUrl,
  is24Hour,
  is12Hour,
  isBase64,
  isMoneyAll,
  isMoney,
  isBankAccount,
  isChineseName,
  isEnglishName,
}