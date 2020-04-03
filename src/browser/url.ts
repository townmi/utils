
/**
 * 获取URL中的params
 * @param name 指定的key
 * @param origin 指定search
 */
const getUrlParams = (name: string, origin?: string) => {
  const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  let r = null;
  if (origin == null) {
    r = window.location.search.substr(1).match(reg);
  } else {
    r = origin.substr(1).match(reg);
  }
  if (r != null) return decodeURIComponent(r[2]);
  return null;
}

/**
 * 遍历获取URL中的params
 * @param name 指定的key
 * @param origin 指定search
 */
const getUrlParam = (name: string, origin?: string) => {
  const url = origin || window.location.href;
  const param = url.split('?')[1];
  const keyValue = param.split('&');
  const obj: any = {};
  for (const v of keyValue.values()) {
    const item = v.split('=');
    const key = item[0];
    const value = item[1];
    obj[key] = value;
  }
  return obj[name];
}

/**
 * 替换地址中的param
 * @param name 指定的param Key
 * @param value 指定的值
 * @param origin 指定的地址
 */
const replaceParamWith = (name: string, value?: string, origin?: string): string => {
  const originUrl = origin ? origin : window.location.href.toString();
  const reg = new RegExp(`(${name}=)([^&]*)`, 'gi');
  const newUrl = originUrl.replace(reg, `${name}=${value}`);
  return newUrl;
}

export {
  getUrlParams,
  getUrlParam,
  replaceParamWith,
};