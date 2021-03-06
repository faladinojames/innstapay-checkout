/**
 * Created by James Falade on 16/08/2018.
 */

class Utilities {

    static getParameterByName (name, url) {
    if (!url) url = window.location.href;
    // eslint-disable-next-line
    name = name.replace(/[\[\]]/g, '\\$&')
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)')
    var results = regex.exec(url)
    if (!results) return null
    if (!results[2]) return ''
    return decodeURIComponent(results[2].replace(/\+/g, ' '))
}

    static getCommaSeparatedNumber(number){
        return number.toLocaleString();
        /*return number.replace(/\D/g, '')
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',');*/
    }

    static inIframe () {
        try {
            return window.self !== window.top;
        } catch (e) {
            return true;
        }
    }

}

export default Utilities
