import moment from 'moment'
import _ from 'lodash'
import { stringify } from 'qs'

export const dateFormat = (string, startFormat, endFormat) => {
    return moment(string, _.castArray(startFormat)).format(endFormat)
}

export const parseParams = params => {
    const cloneParams = _.cloneDeep(params);
    let arrayAttr = {};
    let notArrayAttr = {};
    for (let key in cloneParams) {
        if (_.isArray(cloneParams[`${key}`])) {
            arrayAttr[`${key}`] = cloneParams[`${key}`];
        } else {
            notArrayAttr[`${key}`] = cloneParams[`${key}`];
        }
    }
    return `${stringify(notArrayAttr)}${_.reduce(
        arrayAttr,
        function (result, value, key) {
            return `${result}&${key}=${value}`;
        },
        ''
    )}`;
};