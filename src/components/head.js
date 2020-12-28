/**
 * @description:
 * @param {*}
 * @return {*}
 * @author: 程晓锋
 */

export default getQueryString = function(queryName) {
    let reg = new RegExp('(^|&)' + queryName + '=([^&]*)(&|$)', 'i');
    let r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return decodeURI(r[2]);
    } else {
        return null;
    }
};
